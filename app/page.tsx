import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'ElectroMant | Mantenimiento de Motores Eléctricos Industriales',
  description: 'Especialistas en mantenimiento preventivo, correctivo y rebobinado de motores eléctricos. Optimizamos el rendimiento de tu maquinaria industrial.',
  keywords: ['mantenimiento de motores eléctricos', 'rebobinado de motores', 'reparación de motores industriales', 'mantenimiento preventivo', 'taller electromecánico'],
};

export default function Presentacion() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-blue-600 selection:text-white relative">
      {/* Header */}
      <header className="flex justify-between items-center px-6 md:px-12 py-4 bg-gray-900 text-white sticky top-0 z-50 shadow-md">
        <div className="text-2xl font-black tracking-tighter text-blue-500">
          ELECTRO<span className="text-white">MANT</span>
        </div>
        
        <nav className="hidden md:flex gap-8 font-medium text-sm tracking-wide">
          <a href="#nosotros" className="hover:text-blue-400 transition-colors">Nosotros</a>
          <a href="#servicios" className="hover:text-blue-400 transition-colors">Servicios</a>
          <a href="#sectores" className="hover:text-blue-400 transition-colors">Industrias</a>
          <a href="#contacto" className="hover:text-blue-400 transition-colors">Contacto</a>
        </nav>

        <a 
          href="http://localhost:5173/login"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md font-bold text-sm transition-all shadow-lg shadow-blue-600/30"
        >
          Portal Clientes
        </a>
      </header>

      {/* Hero Section */}
      <section id="nosotros" className="py-32 px-6 text-center bg-gray-900 text-white relative overflow-hidden">
         {/* Fondo oscuro simulando un taller */}
         <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/90 to-gray-800 z-0"></div>
         <div className="relative z-10 max-w-4xl mx-auto">
            <span className="text-blue-400 font-bold tracking-widest text-sm uppercase mb-4 block">Especialistas en Tensión Industrial</span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
              Máxima potencia para <br className="hidden md:block"/>tu línea de producción.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              No permitas que un fallo detenga tu operación. Brindamos diagnóstico avanzado, mantenimiento integral y rebobinado de precisión para motores eléctricos.
            </p>
            <div className="flex justify-center gap-4">
               <a href="#contacto" className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-md font-bold text-lg transition-colors">Emergencia 24/7</a>
               <a href="#servicios" className="bg-transparent border border-gray-500 hover:border-white px-8 py-4 rounded-md font-bold text-lg transition-colors">Ver Servicios</a>
            </div>
        </div>
      </section>

      {/* Por qué elegirnos (Beneficios) */}
      <section className="py-16 px-6 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl mb-4">⏱️</div>
            <h4 className="font-bold text-gray-900 mb-2">Respuesta Rápida</h4>
            <p className="text-sm text-gray-600">Atención de emergencias para minimizar tiempos muertos.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🔬</div>
            <h4 className="font-bold text-gray-900 mb-2">Alta Tecnología</h4>
            <p className="text-sm text-gray-600">Equipos de diagnóstico de última generación (Megger, Fluke).</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🛡️</div>
            <h4 className="font-bold text-gray-900 mb-2">Garantía Total</h4>
            <p className="text-sm text-gray-600">Materiales Clase H y rodamientos certificados.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">👷</div>
            <h4 className="font-bold text-gray-900 mb-2">Personal Experto</h4>
            <p className="text-sm text-gray-600">Técnicos especializados en constante capacitación.</p>
          </div>
        </div>
      </section>

      {/* Sección Servicios */}
      <section id="servicios" className="py-24 px-6 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Nuestros Servicios</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Soluciones técnicas integrales para asegurar la continuidad y eficiencia de tu operación industrial.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Preventivo */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="relative h-64 w-full overflow-hidden bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">Imagen Termografía</div>
              <Image src="/images/mantenimiento-preventivo.jpg" alt="Mantenimiento preventivo" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Mantenimiento Preventivo</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Análisis de vibraciones, termografía infrarroja y medición de aislamiento para detectar fallas antes de que detengan tu producción.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center gap-2">✓ Medición de aislamiento</li>
                <li className="flex items-center gap-2">✓ Análisis de vibraciones</li>
              </ul>
            </div>
          </div>

          {/* Rebobinado */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="relative h-64 w-full overflow-hidden bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">Imagen Rebobinado</div>
              <Image src="/images/rebobinado-motor.jpg" alt="Rebobinado de motores" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Rebobinado de Motores</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Reconstrucción total de bobinados utilizando alambre de cobre de doble capa y barnices de alta clase térmica (Clase H).
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center gap-2">✓ Materiales Clase H (180°C)</li>
                <li className="flex items-center gap-2">✓ Barnizado por inmersión</li>
              </ul>
            </div>
          </div>

          {/* Correctivo */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="relative h-64 w-full overflow-hidden bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">Imagen Correctivo</div>
              <Image src="/images/mantenimiento-correctivo.jpg" alt="Mantenimiento correctivo" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Mantenimiento Correctivo</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Reparación mecánica integral: recuperación de ejes, cambio de rodamientos, balanceo dinámico y pruebas de carga.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center gap-2">✓ Cambio de rodamientos (SKF)</li>
                <li className="flex items-center gap-2">✓ Balanceo dinámico</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industrias a las que atendemos */}
      <section id="sectores" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sectores Industriales</h2>
            <p className="text-gray-600">Experiencia comprobada en los sectores más exigentes.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Minería', 'Agroindustria', 'Textil', 'Manufactura', 'Alimentos', 'Plásticos', 'Construcción', 'Agua y Saneamiento'].map((sector) => (
              <div key={sector} className="bg-gray-50 border border-gray-100 p-6 rounded-lg text-center hover:border-blue-300 transition-colors">
                <span className="font-semibold text-gray-700">{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action antes del Footer */}
      <section className="bg-blue-600 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">¿Necesitas un diagnóstico técnico?</h2>
        <a href="#contacto" className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-md shadow-lg hover:bg-gray-100 transition-colors">
          Solicitar Cotización
        </a>
      </section>

      {/* Footer / Contacto */}
      <footer id="contacto" className="bg-gray-900 text-gray-300 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-12">
          <div>
            <div className="text-2xl font-black text-blue-500 mb-6">ELECTROMANT</div>
            <p className="text-sm leading-relaxed">Expertos en prolongar la vida útil de tus activos eléctricos rotativos. Confianza y precisión en cada servicio.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Contacto Directo</h4>
            <p className="mb-2">📍 Av. Industrial 123, Lima</p>
            <p className="mb-2">📞 +51 987 654 321</p>
            <p>✉️ operaciones@electromant.com</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Horario de Atención</h4>
            <p className="mb-2">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
            <p className="mb-2">Sábados: 8:00 AM - 1:00 PM</p>
            <p className="text-blue-400 font-bold mt-4">Atención de emergencias 24/7</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-8 text-center text-sm text-gray-500">
          &copy; 2026 ElectroMant. Todos los derechos reservados.
        </div>
      </footer>

      {/* EL BOTÓN DE WHATSAPP FLOTANTE (Magia de Marketing) */}
      <a
        href="https://wa.me/51987654321?text=Hola,%20necesito%20una%20evaluación%20técnica%20para%20un%20motor%20eléctrico."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9999] bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:bg-[#128C7E] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
        aria-label="Contactar por WhatsApp"
      >
        {/* Usamos un SVG del logo de WhatsApp para que cargue ultra rápido sin necesidad de imágenes externas */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 16 16"
          className="group-hover:scale-110 transition-transform duration-300"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      </a>
    </div>
  );
}