'use client';

import { useEffect, useState } from 'react';

declare global {
  interface Window {
    RetellWebClient: any;
  }
}

export default function CallPage() {
  const [status, setStatus] = useState('Inicializando...');
  const [error, setError] = useState<string | null>(null);
  const [callActive, setCallActive] = useState(false);

  useEffect(() => {
    const initCall = async () => {
      try {
        console.log('🔄 Cargando SDK de Retell...');
        setStatus('Cargando SDK...');

        // Cargar el SDK de Retell
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@retell-ai/web-client@2.20.0/lib/retell-web-client.js';
        script.async = true;

        script.onload = () => {
          console.log('✅ SDK de Retell AI cargado');

          if (!window.RetellWebClient) {
            throw new Error('RetellWebClient no está disponible');
          }

          // Crear cliente
          const client = new window.RetellWebClient();
          console.log('✅ Cliente de Retell inicializado');

          setStatus('Conectando...');

          // Conectar con el agente
          client.startCall({
            agentId: process.env.NEXT_PUBLIC_RETELL_AGENT_ID || 'agent_ff7f492a5acf0f3ead7f31af2f',
            onCallStart: () => {
              console.log('📞 Llamada iniciada');
              setStatus('Llamada en progreso...');
              setCallActive(true);
            },
            onCallEnd: () => {
              console.log('📞 Llamada finalizada');
              setStatus('Llamada finalizada');
              setCallActive(false);
              setTimeout(() => {
                window.location.href = '/';
              }, 2000);
            },
            onError: (error: any) => {
              console.error('❌ Error en la llamada:', error);
              setError(`Error: ${error?.message || JSON.stringify(error)}`);
              setStatus('Error');
            },
          });
        };

        script.onerror = () => {
          console.error('❌ Error al cargar el SDK');
          setError('No se pudo cargar el SDK de Retell AI');
          setStatus('Error de conexión');
        };

        document.body.appendChild(script);

        return () => {
          if (document.body.contains(script)) {
            document.body.removeChild(script);
          }
        };
      } catch (err: any) {
        console.error('❌ Error:', err);
        setError(err?.message || 'Error desconocido');
        setStatus('Error');
      }
    };

    initCall();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-[#0b1016] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-surface-dark rounded-3xl p-8 shadow-2xl shadow-gray-200/50 border border-gray-100 dark:border-white/10">
          <div className="flex flex-col items-center gap-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Demo de Voz
              </h1>
              <p className="text-slate-600 dark:text-gray-400">
                Hablá con nuestro agente de ventas
              </p>
            </div>

            <div className="w-full h-[400px] bg-slate-50 dark:bg-[#151c24] rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center">
              <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-6">
                {error ? (
                  <div className="text-center">
                    <div className="text-5xl mb-4">⚠️</div>
                    <p className="text-red-600 font-semibold mb-2">{error}</p>
                    <p className="text-slate-500 text-xs">
                      Abrí la consola (F12) para más detalles
                    </p>
                  </div>
                ) : (
                  <div className="text-center w-full">
                    <div className={`flex justify-center mb-4 ${callActive ? 'animate-pulse' : ''}`}>
                      <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-primary to-blue-400 flex items-center justify-center shadow-lg shadow-primary/50">
                        <span className="material-symbols-outlined text-white text-4xl">
                          {callActive ? 'call' : 'phone_in_talk'}
                        </span>
                      </div>
                    </div>
                    <p className="text-slate-900 dark:text-white font-semibold text-lg mb-1">
                      {status}
                    </p>
                    <p className="text-slate-500 dark:text-gray-400 text-xs">
                      {callActive ? '🎤 Micrófono activo' : 'Conectando...'}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => window.location.href = '/'}
              className="w-full bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-bold py-3 rounded-lg transition-all"
            >
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

