import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RETELL_API_KEY;
    const agentId = process.env.NEXT_PUBLIC_RETELL_AGENT_ID;

    console.log('🔍 Iniciando start-call:', {
      apiKey: apiKey ? '✅ presente' : '❌ falta',
      agentId: agentId ? '✅ presente' : '❌ falta',
    });

    if (!apiKey || !agentId) {
      return NextResponse.json(
        { error: 'Missing API key or agent ID' },
        { status: 400 }
      );
    }

    // Probar diferentes endpoints de Retell API
    const endpoints = [
      'https://api.retellai.com/v2/create-web-call',
      'https://api.retellai.com/create-web-call',
      'https://retell.cc/api/v2/create-web-call',
    ];

    let response;
    let lastError;

    for (const endpoint of endpoints) {
      try {
        console.log(`🔄 Intentando endpoint: ${endpoint}`);
        
        response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            agent_id: agentId,
          }),
        });

        if (response.ok) {
          console.log(`✅ Endpoint exitoso: ${endpoint}`);
          break;
        } else {
          lastError = await response.text();
          console.log(`❌ Endpoint fallido (${response.status}):`, lastError);
        }
      } catch (err) {
        console.error(`❌ Error en ${endpoint}:`, err);
        lastError = err;
      }
    }

    if (!response?.ok) {
      console.error('❌ Todos los endpoints fallaron:', lastError);
      return NextResponse.json(
        {
          error: 'No se pudo iniciar la llamada',
          details: lastError,
          debugInfo: { apiKey: apiKey?.substring(0, 10) + '...', agentId },
        },
        { status: 500 }
      );
    }

    const data = await response.json();
    console.log('✅ Llamada iniciada:', data);

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error en start-call:', error);
    return NextResponse.json(
      {
        error: 'Error interno del servidor',
        message: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
