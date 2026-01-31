import { NextRequest, NextResponse } from 'next/server';

// GET para validar el webhook
export async function GET(request: NextRequest) {
  console.log('✅ Webhook validation GET request');
  return NextResponse.json(
    { status: 'ok', message: 'Webhook is active' },
    { status: 200 }
  );
}

// POST para recibir eventos
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    console.log('🎙️ Webhook de Retell AI recibido:', {
      evento: body.event,
      timestamp: new Date().toISOString(),
      callId: body.call?.call_id,
      callStatus: body.call?.call_status,
    });

    // Procesa diferentes tipos de eventos
    switch (body.event) {
      case 'call_started':
        console.log('📞 Llamada iniciada:', {
          callId: body.call.call_id,
          agentId: body.call.agent_id,
          direction: body.call.direction,
          timestamp: body.call.start_timestamp,
        });
        break;

      case 'call_ended':
        console.log('📞 Llamada finalizada:', {
          callId: body.call.call_id,
          duration: body.call.end_timestamp - body.call.start_timestamp,
          reason: body.call.disconnection_reason,
          status: body.call.call_status,
        });
        
        // Guardar datos de la llamada si es necesario
        if (body.call.transcript) {
          console.log('📝 Transcripción:', body.call.transcript.substring(0, 200));
        }
        break;

      case 'call_analyzed':
        console.log('📊 Análisis de llamada completado:', {
          callId: body.call.call_id,
          analysis: body.call.call_analysis,
        });
        break;

      default:
        console.log('📡 Evento desconocido:', body.event);
    }

    // Responde a Retell para confirmar recepción (IMPORTANTE: debe ser 2xx)
    return NextResponse.json(
      { success: true, message: 'Webhook procesado correctamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error procesando webhook:', error);
    return NextResponse.json(
      { error: 'Error procesando webhook' },
      { status: 500 }
    );
  }
}
