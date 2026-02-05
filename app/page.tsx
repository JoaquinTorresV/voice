export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root">
      <div className="w-full z-50 border-b border-slate-200 dark:border-white/10 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md fixed top-0 left-0 transition-colors duration-300">
        <div className="layout-container flex justify-center w-full">
          <div className="flex max-w-[1280px] w-full items-center justify-between px-6 py-4 lg:px-10">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary">
                <span className="material-symbols-outlined text-2xl">
                  graphic_eq
                </span>
              </div>
              <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">
                JQSystems
              </h2>
            </div>
            <div className="hidden md:flex flex-1 justify-center gap-8">
              <a
                className="text-slate-600 hover:text-primary dark:text-gray-300 dark:hover:text-white text-sm font-medium transition-colors"
                href="#inicio"
              >
                Inicio
              </a>
              <a
                className="text-slate-600 hover:text-primary dark:text-gray-300 dark:hover:text-white text-sm font-medium transition-colors"
                href="#servicios"
              >
                Servicios
              </a>
              <a
                className="text-slate-600 hover:text-primary dark:text-gray-300 dark:hover:text-white text-sm font-medium transition-colors"
                href="#chatbots"
              >
                Chatbots
              </a>
              <a
                className="text-slate-600 hover:text-primary dark:text-gray-300 dark:hover:text-white text-sm font-medium transition-colors"
                href="#beneficios"
              >
                Beneficios
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="/call"
                className="flex items-center justify-center overflow-hidden rounded-lg h-10 px-4 border border-slate-200 bg-white hover:bg-slate-50 text-slate-900 dark:border-white/20 dark:bg-white/5 dark:hover:bg-white/10 dark:text-white text-sm font-semibold transition-all"
              >
                <span className="truncate">Probar AIVoice</span>
              </a>
              <a
                href="#contacto"
                className="flex items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-primary-dark transition-all text-white text-sm font-bold shadow-lg shadow-primary/20"
              >
                <span className="truncate">Contacto</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow pt-20">
        <div className="relative w-full overflow-hidden bg-background-light dark:bg-background-dark" id="inicio">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="layout-container flex justify-center">
            <div className="px-6 py-12 lg:px-20 lg:py-24 max-w-[1280px] w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                <div className="lg:col-span-7 flex flex-col gap-8 text-center lg:text-left z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 dark:bg-white/5 dark:border-white/10 w-fit mx-auto lg:mx-0">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-medium text-slate-600 dark:text-gray-300 tracking-wide uppercase">
                      Nuevo Motor V2.0 Disponible
                    </span>
                  </div>
                  <h1 className="text-slate-900 dark:text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                    Agentes de Voz y Chat <br className="hidden lg:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                      Inteligencia Artificial
                    </span>
                  </h1>
                  <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                    Automatiza conversaciones por voz y chat 24/7 con una
                    calidad humana indistinguible. Reduce costos operativos
                    hasta un 60% y escala tu negocio sin límites de personal.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                    <a
                      href="#contacto"
                      className="flex h-12 items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary-dark text-white px-8 text-base font-bold transition-all shadow-xl shadow-primary/25"
                    >
                      <span>Solicitar Reunión</span>
                      <span className="material-symbols-outlined text-lg">
                        arrow_forward
                      </span>
                    </a>
                    <a href="/call" className="flex h-12 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-900 dark:border-white/20 dark:bg-white/5 dark:hover:bg-white/10 dark:text-white px-6 text-base font-medium backdrop-blur-sm transition-all">
                      <span className="material-symbols-outlined text-primary text-lg">
                        play_circle
                      </span>
                      <span>Probar Demo</span>
                    </a>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-slate-500 dark:text-gray-500 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-lg">
                        check_circle
                      </span>
                      <span>Reduce costos operativos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-lg">
                        check_circle
                      </span>
                      <span>Implementación rápida</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-[500px] aspect-square lg:aspect-[4/5] bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden group animate-float transition-colors duration-300">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50/80 dark:to-black/80 z-10"></div>
                    <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-20 border-b border-slate-100 dark:border-white/5 bg-white/90 dark:bg-surface-dark/90 transition-colors duration-300">
                      <div className="flex items-center gap-3">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-xs text-slate-500 dark:text-gray-500 font-mono">
                        LLAMADA EN VIVO #8921
                      </div>
                    </div>
                    <div className="h-full flex flex-col items-center justify-center gap-8 pt-12 relative z-0">
                      <div className="relative">
                        <div className="absolute -inset-4 bg-primary/20 rounded-full animate-pulse-slow"></div>
                        <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-slate-200 to-slate-100 dark:from-gray-700 dark:to-gray-600 border-2 border-primary p-1 shadow-lg relative z-10">
                          <img
                            alt="Retrato de un avatar de agente IA con aspecto profesional"
                            className="w-full h-full rounded-full object-cover opacity-90 dark:opacity-80 dark:grayscale"
                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
                          />
                        </div>
                        <div className="absolute bottom-0 right-0 h-8 w-8 bg-primary rounded-full flex items-center justify-center border-4 border-white dark:border-surface-dark z-20">
                          <span className="material-symbols-outlined text-white text-xs">
                            mic
                          </span>
                        </div>
                      </div>
                      <div className="h-16 flex items-center gap-1.5 justify-center w-full px-8">
                        <div className="voice-wave-bar h-8"></div>
                        <div className="voice-wave-bar h-12"></div>
                        <div className="voice-wave-bar h-6"></div>
                        <div className="voice-wave-bar h-14"></div>
                        <div className="voice-wave-bar h-8"></div>
                        <div className="voice-wave-bar h-16"></div>
                        <div className="voice-wave-bar h-10"></div>
                        <div className="voice-wave-bar h-4"></div>
                        <div className="voice-wave-bar h-12"></div>
                        <div className="voice-wave-bar h-6"></div>
                        <div className="voice-wave-bar h-8"></div>
                      </div>
                      <div className="w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-xl p-4 backdrop-blur-sm transition-colors duration-300">
                        <div className="flex gap-3 mb-3">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] text-primary">
                            IA
                          </div>
                          <p className="text-sm text-slate-700 dark:text-gray-300">
                            Hola, ¿en qué puedo ayudarte hoy con tu cuenta?
                          </p>
                        </div>
                        <div className="flex gap-3 justify-end">
                          <p className="text-sm text-slate-500 dark:text-gray-400 text-right">
                            Quisiera actualizar mi plan.
                          </p>
                          <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-gray-700 flex items-center justify-center text-[10px] text-slate-500 dark:text-gray-300">
                            Yo
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-y border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-background-dark transition-colors duration-300">
          <div className="layout-container flex justify-center py-10 px-6">
            <div className="w-full max-w-[1280px]">
              <p className="text-center text-sm font-medium text-slate-500 dark:text-gray-500 mb-8 uppercase tracking-widest">
                Confían en nuestra tecnología
              </p>
              <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 dark:opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined">business</span>
                  Cinco Horizontes
                </h3>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined">gavel</span>
                  Giovani Remates
                </h3>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined">psychology</span>
                  Cognitiva
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-20 bg-slate-100 dark:bg-surface-dark/30 transition-colors duration-300" id="servicios">
          <div className="layout-container flex justify-center px-6 lg:px-20">
            <div className="layout-content-container flex flex-col max-w-[1280px] w-full">
              <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                <div>
                  <h2 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight mb-2">
                    Casos de Uso Principales
                  </h2>
                  <p className="text-slate-600 dark:text-gray-400">
                    Nuestros agentes se adaptan a cualquier flujo de
                    conversación.
                  </p>
                </div>
                <a href="#servicios" className="text-primary font-bold text-sm hover:text-primary-dark transition-colors flex items-center gap-1">
                  Ver todos los casos{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 hover:border-primary/50 transition-all hover:-translate-y-1 shadow-lg shadow-slate-200/50 dark:shadow-none">
                  <div className="h-48 bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-surface-dark to-transparent z-10"></div>
                    <img
                      className="w-full h-full object-cover opacity-80 dark:opacity-60 group-hover:scale-105 transition-transform duration-700"
                      data-alt="Modern office with support team dashboard on screens"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCicGUE-7Z85K7poish2ESx_Fd_R4DsbpP0YJIpS7mWmwhx19edzeUyUla3UW2hZB3zAlxshYLOK859eeSB51uj6G__1pUvaEOp9kD2rnbMiljBQJRpdlstWLz0eyF3Hu1pxtOOxqDV5JD1wvOde_LlYwsDsQfmKM8yytiiKGMtPjaAtkA0ofuPd7IcwxTYS8YGD4bKXV6e1Ec_q19tMNpDj4Sdymbgf88OM186cTi8V1PC0I9uDPIhKweVfS5j-mCfMPppDZWAvcrz"
                      alt="Soporte al Cliente"
                    />
                  </div>
                  <div className="p-6 relative z-20 -mt-12">
                    <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center text-white mb-4 shadow-lg">
                      <span className="material-symbols-outlined">
                        support_agent
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Soporte al Cliente
                    </h3>
                    <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                      Resuelve dudas frecuentes, gestiona tickets y escala
                      problemas complejos automáticamente.
                    </p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 hover:border-primary/50 transition-all hover:-translate-y-1 shadow-lg shadow-slate-200/50 dark:shadow-none">
                  <div className="h-48 bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-surface-dark to-transparent z-10"></div>
                    <img
                      className="w-full h-full object-cover opacity-80 dark:opacity-60 group-hover:scale-105 transition-transform duration-700"
                      data-alt="Business meeting showing sales growth charts"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNFpuyRdXvCGEfmmJ4mYREdpyGqV9oaitI7esciX3YPx_pt9GJuVf2ZtRgnGssm_KevSEaRDKoox5YmvOruxBW6bLyC92DuylMp3JQ5Sy_ro9Oj_Oxr2CVSgCJ0hkiWBxU4Aoa40jbN4AziFg_0O9b55QFycfbRLHeUCD8pM5912ujMdHV7knuc8PzOWRRUGNzm4bqLYbjZfukp3e1NOQLe2EWJwEMq8CIaNPsG9UXLjlaVJW8IlauIfS9GYjUyZUZmIvFUZ6j7j2r"
                      alt="Ventas Outbound"
                    />
                  </div>
                  <div className="p-6 relative z-20 -mt-12">
                    <div className="h-12 w-12 rounded-lg bg-purple-600 flex items-center justify-center text-white mb-4 shadow-lg">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Ventas Outbound
                    </h3>
                    <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                      Cualificación de leads, seguimiento de prospectos y
                      agendamiento de citas comerciales.
                    </p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 hover:border-primary/50 transition-all hover:-translate-y-1 shadow-lg shadow-slate-200/50 dark:shadow-none">
                  <div className="h-48 bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-surface-dark to-transparent z-10"></div>
                    <img
                      className="w-full h-full object-cover opacity-80 dark:opacity-60 group-hover:scale-105 transition-transform duration-700"
                      data-alt="Professional working on scheduling calendar"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCey4bRTGngAJvxpzXkHSsLbmdVUN-vam_BCGNzQJzml6r8z8eJF_ZDYVpm3M8tmi18gK5Jsq3wxlQwhMFcnvj0wa6wL2jcADQwn2g-hR8vB2s8EaUYRob7t2QRzLCz74lUSQlfNpUeBhNFYaGkq2BshNH0Th2NjFqnmTOEA9H8R1_KeD_BACpYVpTDpXSQ0NutJePi2pZytue1vY0ezcwwtDQbCQgojFQC6KFURrHo7RoK7UPZfVnmntlmC14Q4a0UWIOcZ-eFvvDw"
                      alt="Reservas y Citas"
                    />
                  </div>
                  <div className="p-6 relative z-20 -mt-12">
                    <div className="h-12 w-12 rounded-lg bg-pink-600 flex items-center justify-center text-white mb-4 shadow-lg">
                      <span className="material-symbols-outlined">
                        calendar_month
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Reservas y Citas
                    </h3>
                    <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                      Gestión completa de calendarios para clínicas,
                      restaurantes y servicios profesionales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="w-full py-20 bg-white dark:bg-surface-dark/60 transition-colors duration-300" id="chatbots">
          <div className="layout-container flex justify-center px-6 lg:px-20">
            <div className="layout-content-container flex flex-col max-w-[1280px] w-full">
              <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
                <div className="max-w-2xl">
                  <h2 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight mb-3">
                    Agentes de Chatbot que convierten
                  </h2>
                  <p className="text-slate-600 dark:text-gray-400">
                    Crea experiencias conversacionales por WhatsApp, web y redes
                    sociales con respuestas precisas, contexto y personalidad
                    de marca.
                  </p>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-gray-400">
                  <span className="material-symbols-outlined text-primary">
                    hub
                  </span>
                  Integraciones listas en días, no semanas.
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-6 shadow-lg shadow-slate-200/40 dark:shadow-none">
                  <div className="size-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined">support</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Soporte omnicanal
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-gray-400">
                    Resuelve preguntas frecuentes, crea tickets y escala a un
                    humano cuando lo necesitas.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-6 shadow-lg shadow-slate-200/40 dark:shadow-none">
                  <div className="size-12 rounded-xl bg-emerald-500/15 text-emerald-500 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined">shopping_cart</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Ventas por chat
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-gray-400">
                    Recomienda productos, responde objeciones y genera ventas
                    en el mismo flujo de conversación.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-6 shadow-lg shadow-slate-200/40 dark:shadow-none">
                  <div className="size-12 rounded-xl bg-purple-500/15 text-purple-500 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined">school</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Onboarding guiado
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-gray-400">
                    Acompaña a nuevos usuarios con flujos interactivos y
                    seguimiento automático en tiempo real.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background-light" id="beneficios">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col gap-24">
            <section className="flex flex-col gap-12">
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                  ¿Por qué elegir <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                    Agentes de Voz con IA?
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-body font-light">
                  Experimenta el futuro de la comunicación empresarial con
                  nuestras soluciones avanzadas de IA que trabajan
                  incansablemente por tu crecimiento.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-8 flex flex-col gap-6 group border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300">
                  <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                    <span className="material-symbols-outlined text-3xl">
                      schedule
                    </span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-slate-900">
                      Disponibilidad 24/7
                    </h3>
                    <p className="text-slate-600 font-body leading-relaxed">
                      Da soporte a tus clientes 24/7/365 sin descansos,
                      festivos ni tiempos de inactividad. Asegura que ninguna
                      llamada quede sin respuesta.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-8 flex flex-col gap-6 group border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300">
                  <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                    <span className="material-symbols-outlined text-3xl">
                      trending_down
                    </span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-slate-900">
                      Reducción de Costos
                    </h3>
                    <p className="text-slate-600 font-body leading-relaxed">
                      Reduce drásticamente los costos operativos automatizando
                      consultas rutinarias mientras mantienes una calidad de
                      servicio premium.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-8 flex flex-col gap-6 group border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300">
                  <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                    <span className="material-symbols-outlined text-3xl">
                      monitoring
                    </span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-slate-900">
                      Escalabilidad
                    </h3>
                    <p className="text-slate-600 font-body leading-relaxed">
                      Gestiona 10 o 10,000 llamadas simultáneamente. Escala tu
                      capacidad de soporte al instante sin contratar nuevo
                      personal.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="w-full flex justify-center" id="contacto">
              <div className="w-full max-w-4xl bg-white rounded-3xl p-6 md:p-12 overflow-hidden relative shadow-2xl shadow-gray-200/50 border border-gray-100">
                <div className="relative z-10 flex flex-col items-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-slate-900">
                    Transforma tu negocio hoy
                  </h2>
                  <p className="text-slate-600 text-center mb-10">
                    Obtén una demostración personalizada adaptada a las
                    necesidades específicas de tu negocio.
                  </p>
                  <div className="w-full max-w-2xl h-[600px] rounded-xl overflow-hidden border border-gray-200">
                    <iframe
                      src="https://calendly.com/joaquintorresv2005/reunion-voiceai?hide_event_type=1"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="w-full max-w-[1200px] px-4 py-20 md:px-8 mt-10 mx-auto">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4 border-l-2 border-primary pl-6">
              <h2 className="text-3xl font-bold tracking-tight">Cómo Funciona</h2>
              <p className="text-slate-500 dark:text-slate-400 text-base max-w-xl">
                Un proceso claro de instalación para que tu agente esté activo
                rápido y sin fricciones.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="group flex flex-col gap-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151c24] p-7 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[28px]">
                    search
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-mono text-slate-400 mb-1">01</div>
                  <h3 className="text-xl font-bold leading-tight">Analizar</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    Revisamos tu negocio, canales y volumen para definir el
                    alcance ideal del agente.
                  </p>
                </div>
              </div>
              <div className="group flex flex-col gap-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151c24] p-7 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[28px]">
                    checklist
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-mono text-slate-400 mb-1">02</div>
                  <h3 className="text-xl font-bold leading-tight">Necesidades</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    Levantamos flujos, datos y reglas para cubrir casos reales
                    desde el primer día.
                  </p>
                </div>
              </div>
              <div className="group flex flex-col gap-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151c24] p-7 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[28px]">
                    settings
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-mono text-slate-400 mb-1">03</div>
                  <h3 className="text-xl font-bold leading-tight">Instalar</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    Integramos sistemas, APIs y canales de voz o chat en tu
                    entorno.
                  </p>
                </div>
              </div>
              <div className="group flex flex-col gap-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151c24] p-7 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[28px]">
                    tune
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-mono text-slate-400 mb-1">04</div>
                  <h3 className="text-xl font-bold leading-tight">Configurar</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    Ajustamos respuestas, tono y automatizaciones con tus
                    objetivos de negocio.
                  </p>
                </div>
              </div>
              <div className="group flex flex-col gap-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151c24] p-7 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[28px]">
                    rocket_launch
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-mono text-slate-400 mb-1">05</div>
                  <h3 className="text-xl font-bold leading-tight">Probar y lanzar</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    Ejecutamos pruebas, afinamos detalles y salimos a producción
                    con monitoreo continuo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full max-w-[1200px] px-4 py-20 md:px-8 mx-auto">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4 border-l-2 border-primary pl-6">
              <h2 className="text-3xl font-bold tracking-tight">
                Soluciones para cada Industria
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-base max-w-xl">
                Modelos de IA especializados diseñados para industrias de alto
                contacto donde la calidad de la conversación es vital.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="group relative flex flex-col gap-4 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151c24] p-6 hover:border-primary/50 transition-colors">
                <div className="absolute right-4 top-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-[64px] text-primary">
                    domain
                  </span>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white">
                  <span className="material-symbols-outlined text-[20px]">
                    domain
                  </span>
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <h3 className="text-lg font-bold">Inmobiliaria</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-normal">
                    Califique leads y programe visitas a propiedades de manera
                    automática.
                  </p>
                </div>
              </div>
              <div className="group relative flex flex-col gap-4 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151c24] p-6 hover:border-primary/50 transition-colors">
                <div className="absolute right-4 top-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-[64px] text-primary">
                    cardiology
                  </span>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white">
                  <span className="material-symbols-outlined text-[20px]">
                    cardiology
                  </span>
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <h3 className="text-lg font-bold">Clínicas</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-normal">
                    Recordatorios de citas y admisión de pacientes con total
                    seguridad y cumplimiento.
                  </p>
                </div>
              </div>
              <div className="group relative flex flex-col gap-4 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151c24] p-6 hover:border-primary/50 transition-colors">
                <div className="absolute right-4 top-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-[64px] text-primary">
                    shopping_cart
                  </span>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white">
                  <span className="material-symbols-outlined text-[20px]">
                    shopping_cart
                  </span>
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <h3 className="text-lg font-bold">E-commerce</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-normal">
                    Seguimiento de pedidos, procesamiento de devoluciones y
                    consultas instantáneas.
                  </p>
                </div>
              </div>
              <div className="group relative flex flex-col gap-4 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151c24] p-6 hover:border-primary/50 transition-colors">
                <div className="absolute right-4 top-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-[64px] text-primary">
                    restaurant
                  </span>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white">
                  <span className="material-symbols-outlined text-[20px]">
                    restaurant
                  </span>
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <h3 className="text-lg font-bold">Restaurantes</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-normal">
                    Gestione reservas de mesas y pedidos para llevar durante las
                    horas pico.
                  </p>
                </div>
              </div>
              <div className="group relative flex flex-col gap-4 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151c24] p-6 hover:border-primary/50 transition-colors">
                <div className="absolute right-4 top-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-[64px] text-primary">
                    directions_car
                  </span>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white">
                  <span className="material-symbols-outlined text-[20px]">
                    directions_car
                  </span>
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <h3 className="text-lg font-bold">Concesionarias</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-normal">
                    Gestione citas de pruebas de conducción, consultas de clientes
                    y seguimiento de ventas.
                  </p>
                </div>
              </div>
              <div className="group relative flex flex-col gap-4 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151c24] p-6 hover:border-primary/50 transition-colors">
                <div className="absolute right-4 top-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-[64px] text-primary">
                    account_balance
                  </span>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white">
                  <span className="material-symbols-outlined text-[20px]">
                    account_balance
                  </span>
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <h3 className="text-lg font-bold">Finanzas</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-normal">
                    Cobranza, validación de identidad y asistencia bancaria con
                    cumplimiento y trazabilidad.
                  </p>
                </div>
              </div>
              <div className="group relative flex flex-col gap-4 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151c24] p-6 hover:border-primary/50 transition-colors">
                <div className="absolute right-4 top-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-[64px] text-primary">
                    school
                  </span>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white">
                  <span className="material-symbols-outlined text-[20px]">
                    school
                  </span>
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <h3 className="text-lg font-bold">Educación</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-normal">
                    Admisiones, soporte a estudiantes y recordatorios de pagos
                    en un solo flujo conversacional.
                  </p>
                </div>
              </div>
              <div className="group relative flex flex-col gap-4 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151c24] p-6 hover:border-primary/50 transition-colors">
                <div className="absolute right-4 top-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-[64px] text-primary">
                    local_shipping
                  </span>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white">
                  <span className="material-symbols-outlined text-[20px]">
                    local_shipping
                  </span>
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <h3 className="text-lg font-bold">Logística</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-normal">
                    Seguimiento de envíos, confirmaciones y soporte al cliente
                    con actualizaciones en tiempo real.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full max-w-[1200px] px-4 py-20 mb-10 md:px-8 mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-[#0b1016] border border-slate-800 px-8 py-16 text-center md:px-16 md:py-24">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#137fec_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-[100px]"></div>
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/20 blur-[100px]"></div>
            <div className="relative z-10 flex flex-col items-center gap-6">
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl max-w-2xl">
                ¿Listo para transformar la experiencia de sus clientes?
              </h2>
              <p className="text-slate-400 text-lg max-w-xl">
                Prueba nuestro asistente de IA en tiempo real y ve cómo puede ayudar a tu negocio.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-4 w-full justify-center">
                <a href="/call" className="flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-bold text-white transition-all hover:bg-primary/90 hover:scale-[1.02] shadow-lg shadow-primary/25">
                  <span>Probar Demo General</span>
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </a>
                <a href="https://calendly.com/joaquintorresv2005/reunion-voiceai" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800/50 backdrop-blur-sm px-8 py-4 text-base font-bold text-white transition-all hover:bg-slate-700 hover:border-slate-600">
                  <span className="material-symbols-outlined text-lg">calendar_month</span>
                  <span>Agendar Reunión</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 pt-8 pb-12 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 JQSystems. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a className="text-slate-400 hover:text-primary transition-colors text-2xl" href="https://wa.me/56932115412" target="_blank" rel="noopener noreferrer">
              📱
            </a>
            <a className="text-slate-400 hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined">public</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
