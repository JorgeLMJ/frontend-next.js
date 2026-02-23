import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'ElectroMant | Potencia y Precisión Industrial',
  description: 'Líderes en mantenimiento de motores eléctricos y rebobinado industrial.',
};

export default function Presentacion() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Header Estilizado */}
      <header className="flex justify-between items-center px-6 md:px-16 py-5 bg-slate-900/95 backdrop-blur-md text-white sticky top-0 z-[100] shadow-xl">
        <div className="text-2xl font-black tracking-tighter">
          <span className="text-blue-500">ELECTRO</span>MANT
        </div>
        <nav className="hidden md:flex gap-10 font-semibold text-xs uppercase tracking-widest">
          <a href="#nosotros" className="hover:text-blue-400 transition-colors">Inicio</a>
          <a href="#servicios" className="hover:text-blue-400 transition-colors">Servicios</a>
          <a href="#ventajas" className="hover:text-blue-400 transition-colors">Ventajas</a>
        </nav>
        <a 
          href="http://localhost:5173/login" 
          target="_blank" 
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full font-bold text-xs transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20"
        >
          PORTAL CLIENTES
        </a>
      </header>

      <main>
        {/* Hero Section con Overlay de Alta Calidad - IMAGEN 1 */}
        <section id="nosotros" className="relative h-[90vh] flex items-center justify-center text-center px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/1.jpg" 
              alt="Industrial Hero" 
              fill 
              className="object-cover scale-105 animate-slow-zoom"
              priority 
            />
            <div className="absolute inset-0 bg-slate-950/70"></div>
          </div>
          
          <div className="relative z-10 max-w-5xl">
            <span className="inline-block px-4 py-1 mb-6 border border-blue-500/50 rounded-full text-blue-400 text-xs font-bold tracking-[0.2em] uppercase bg-blue-500/10 backdrop-blur-sm">
              Ingeniería Electromecánica de Precisión
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              Energía que mueve <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">tu gran industria.</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Especialistas en rebobinado y diagnóstico avanzado de motores eléctricos de alta tensión.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a href="https://wa.me/51987654321" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-black text-lg transition-all shadow-2xl shadow-blue-600/40">
                SOPORTE 24/7
              </a>
              <a href="#servicios" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-xl font-black text-lg transition-all">
                NUESTROS SERVICIOS
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section (Añade robustez) */}
        <section className="bg-slate-50 py-12 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { n: '15+', t: 'Años de Experiencia' },
              { n: '500+', t: 'Motores Reparados' },
              { n: '24/7', t: 'Atención Crítica' },
              { n: '100%', t: 'Garantía Técnica' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-black text-slate-900">{stat.n}</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.t}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Grid de Servicios - IMÁGENES 2, 3, 4 */}
        <section id="servicios" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">Servicios que <br/>garantizan operatividad.</h2>
              <div className="w-20 h-2 bg-blue-600 rounded-full"></div>
            </div>
            <p className="text-slate-500 text-lg max-w-sm font-medium">
              Equipos de última generación para diagnósticos de aislamiento y balanceo dinámico.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { img: '2', title: 'Mantenimiento Preventivo', desc: 'Evita paradas millonarias con análisis de vibración y termografía.' },
              { img: '3', title: 'Rebobinado Clase H', desc: 'Reconstrucción total con aislamiento térmico de hasta 180°C.' },
              { img: '4', title: 'Reparación Correctiva', desc: 'Cambio de rodamientos SKF/FAG y recuperación de asientos de eje.' }
            ].map((s, i) => (
              <div key={i} className="group cursor-default">
                <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-slate-200">
                  <Image src={`/images/${s.img}.jpg`} alt={s.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 p-8 text-white">
                    <h3 className="text-2xl font-black mb-3">{s.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Robusto - IMAGEN 5 */}
        <section className="px-6 mb-20">
          <div className="relative max-w-7xl mx-auto h-[500px] rounded-[40px] overflow-hidden flex items-center justify-center text-center">
            <Image src="/images/5.jpg" alt="Final CTA" fill className="object-cover brightness-[0.2]" />
            <div className="relative z-10 px-6">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">¿Tu planta se detuvo?<br/>Nosotros la activamos.</h2>
              <a 
                href="https://wa.me/51987654321" 
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-12 py-6 rounded-2xl font-black text-xl transition-all hover:-translate-y-1 shadow-2xl"
              >
                <span>SOPORTE INMEDIATO VÍA WHATSAPP</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 text-slate-500 py-16 px-6 text-center">
        <div className="max-w-7xl mx-auto border-t border-slate-900 pt-10">
          <div className="text-white font-black text-xl mb-4">ELECTROMANT</div>
          <p className="text-sm max-w-md mx-auto mb-8">Especialistas en motores eléctricos de baja y alta tensión. Equipos certificados y personal altamente capacitado.</p>
          <p className="text-xs uppercase tracking-[0.3em]">© 2026 Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
}