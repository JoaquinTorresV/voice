'use client';

import { useEffect, useRef } from 'react';

export default function CallPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Limpiar contenedor primero
    containerRef.current.innerHTML = '';

    // Crear el elemento del widget
    const widget = document.createElement('elevenlabs-convai');
    widget.setAttribute(
      'agent-id',
      process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID || 'agent_5901kgbn44kve6ha1pzc47gsd5tv'
    );
    
    // Estilos inline para que se vea correctamente - NO fijar altura
    widget.style.width = '100%';
    widget.style.minHeight = '450px';
    widget.style.borderRadius = '1rem';
    widget.style.display = 'flex';
    widget.style.alignItems = 'center';
    widget.style.justifyContent = 'center';

    containerRef.current.appendChild(widget);

    // Cargar el script del widget
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      if (containerRef.current && containerRef.current.contains(widget)) {
        try {
          containerRef.current.removeChild(widget);
        } catch (e) {
          // Ignorar si ya fue removido
        }
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-[#0b1016] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/50 mb-6 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-sm font-bold text-green-400 tracking-wide uppercase">
              Agente en Línea
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Conversá con IA <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">en Vivo</span>
          </h1>

          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Experiencia una conversación interactiva con nuestro agente de IA. Presioná el micrófono para empezar a hablar.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {/* Left Info Panel */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <div className="bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">info</span>
                ¿Cómo usar?
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm">
                  <span className="material-symbols-outlined text-green-400 flex-shrink-0 text-lg">mic</span>
                  <span className="text-slate-200">Activa micrófono</span>
                </li>
                <li className="flex gap-3 text-sm">
                  <span className="material-symbols-outlined text-blue-400 flex-shrink-0 text-lg">chat</span>
                  <span className="text-slate-200">Habla naturalmente</span>
                </li>
                <li className="flex gap-3 text-sm">
                  <span className="material-symbols-outlined text-purple-400 flex-shrink-0 text-lg">check_circle</span>
                  <span className="text-slate-200">Recibe respuestas</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-sm text-slate-300">
                <span className="font-bold text-primary">💬</span> Este agente está entrenado para ayudarte con preguntas sobre JQSystems y agendar reuniones.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <p className="text-xs text-slate-400 flex items-center gap-2">
                <span className="material-symbols-outlined text-lg text-primary">schedule</span>
                Disponible 24/7
              </p>
            </div>
          </div>

          {/* Agent Widget - Main Focus */}
          <div className="lg:col-span-3">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500"></div>
                
                <div className="p-6 min-h-[600px] flex flex-col items-center justify-center relative">
                  {/* Widget Label */}
                  <div className="absolute top-4 left-4 bg-primary/30 border border-primary/50 rounded-lg px-3 py-1 backdrop-blur-sm z-30">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide">
                      🎤 Zona Interactiva
                    </p>
                  </div>

                  {/* The Widget Container */}
                  <div
                    ref={containerRef}
                    className="w-full flex items-center justify-center"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      width: '100%',
                      minHeight: '480px',
                      overflow: 'visible',
                      zIndex: 10,
                    }}
                  ></div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              </div>
            </div>

            {/* Scheduling Section */}
            <div className="mt-6 bg-gradient-to-br from-green-500/20 to-emerald-500/10 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-400">calendar_month</span>
                    ¿Te interesa una demo personalizada?
                  </h3>
                  <p className="text-sm text-slate-300">
                    Agenda una reunión con nuestro equipo para conocer cómo JQSystems puede transformar tu negocio.
                  </p>
                </div>
                <a
                  href="https://calendly.com/joaquintorresv2005/reunion-voiceai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg shadow-green-500/20 flex-shrink-0 whitespace-nowrap"
                >
                  <span className="material-symbols-outlined">calendar_month</span>
                  Agendar Ahora
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <button
            onClick={() => window.location.href = '/'}
            className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg border border-slate-600 hover:border-slate-500"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Volver al Inicio
          </button>

          <div className="text-center text-slate-400 text-sm">
            <p>¿Preguntas? <a href="https://wa.me/56932115412" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">📱 Contactanos por WhatsApp</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

