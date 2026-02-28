"use client";

import { useState } from 'react';
import Image from 'next/image';

// --- DICCIONARIO DE TRADUCCIÓN ---
const translations = {
  es: {
    nav: { inicio: 'Inicio', empresa: 'Nuestra Empresa', servicios: 'Servicios', contacto: 'Contacto', portal: 'PORTAL CLIENTES' },
    hero: {
      tag: 'Ingeniería Electromecánica de Precisión',
      title1: 'Energía que mueve',
      title2: 'tu gran industria.',
      desc: 'Especialistas en rebobinado y diagnóstico avanzado de motores eléctricos de alta tensión.',
      btn1: 'SOPORTE 24/7',
      btn2: 'NUESTROS SERVICIOS'
    },
    stats: [
      { n: '15+', t: 'Años de Experiencia' },
      { n: '500+', t: 'Motores Reparados' },
      { n: '24/7', t: 'Atención Crítica' },
      { n: '100%', t: 'Garantía Técnica' }
    ],
    empresa: {
      subtitle: 'Nuestra Empresa',
      title: 'MOTORES INGENIEROS',
      p1: 'Somos una empresa peruana con presencia nacional e internacional, que brinda soluciones integrales en el mantenimiento, reparación y servicios in situ en el rubro electromecánico desde hace más de 15 años.',
      p2: 'Contamos con unas amplias instalaciones de más de 5000 m2 ubicadas estratégicamente en Cusco San Sebastian, Paradero Sexto y una sucursal en la ciudad de Arequipa.',
      p3: 'Conscientes de las necesidades del mercado de requerir servicios que cumplan con las estrictas normas de calidad, estamos a vuestra disposición para brindarles nuestra amplia experiencia, respaldada por un equipo de ingenieros y técnicos de alto nivel profesional, así como maquinarias y equipos de pruebas modernos, acorde con las exigencias actuales del mercado. Somos Miembros de EASA (Electrical Apparatus Service Association), quien nos asesora en las reparaciones de máquinas eléctricas.'
    },
    catalog: {
      title: 'Catálogo de Servicios Técnicos.',
      desc: 'Abre cualquier servicio para explorar la galería completa del proceso de reparación.',
      openGallery: 'Abrir Galería',
      closeGallery: 'Cerrar'
    },
    services: [
      { id: 1, title: 'Mantenimiento Preventivo', desc: 'Evita paradas millonarias con análisis de vibración, termografía y lubricación.', images: ['/img/3.jpeg', '/img/4.jpeg', '/img/5.jpeg', '/img/6.jpeg', '/img/7.jpeg'] },
      { id: 2, title: 'Rebobinado Clase H', desc: 'Reconstrucción total con aislamiento térmico de hasta 180°C y barnizado VPI.', images: ['/img/8.jpeg', '/img/9.jpeg', '/img/10.jpeg', '/img/11.jpeg', '/img/12.jpeg'] },
      { id: 3, title: 'Reparación Correctiva', desc: 'Cambio de rodamientos SKF/FAG y recuperación de asientos de eje desgastados.', images: ['/img/13.jpeg', '/img/14.jpeg', '/img/15.jpeg', '/img/16.jpeg', '/img/17.jpeg'] },
      { id: 4, title: 'Balanceo Dinámico', desc: 'Corrección computarizada de desequilibrios en rotores para minimizar vibraciones.', images: ['/img/18.jpeg', '/img/19.jpeg', '/img/20.jpeg', '/img/21.jpeg', '/img/22.jpeg'] },
      { id: 5, title: 'Pruebas Megger y Surge', desc: 'Evaluación profunda de aislamiento eléctrico y detección de cortos entre espiras.', images: ['/img/23.jpeg', '/img/24.jpeg', '/img/25.jpeg', '/img/26.jpeg', '/img/27.jpeg'] },
      { id: 6, title: 'Mecanizado Industrial', desc: 'Fabricación de piezas a medida, encamisado de tapas y tornería de precisión.', images: ['/img/28.jpeg', '/img/29.jpeg', '/img/30.jpeg', '/img/31.jpeg', '/img/32.jpeg'] },
      { id: 7, title: 'Mantenimiento de Generadores', desc: 'Limpieza criogénica, secado en horno y pruebas de carga sincronizada.', images: ['/img/33.jpeg', '/img/34.jpeg', '/img/35.jpeg', '/img/36.jpeg', '/img/37.jpeg'] },
      { id: 8, title: 'Mantenimiento de Bombas', desc: 'Reparación de bombas sumergibles, cambio de sellos mecánicos e impulsores.', images: ['/img/38.jpeg', '/img/3.jpeg', '/img/4.jpeg', '/img/5.jpeg', '/img/6.jpeg'] }
    ]
  },
  en: {
    nav: { inicio: 'Home', empresa: 'Our Company', servicios: 'Services', contacto: 'Contact', portal: 'CLIENT PORTAL' },
    hero: {
      tag: 'Precision Electromechanical Engineering',
      title1: 'Energy that moves',
      title2: 'your great industry.',
      desc: 'Specialists in rewinding and advanced diagnostics of high-voltage electric motors.',
      btn1: '24/7 SUPPORT',
      btn2: 'OUR SERVICES'
    },
    stats: [
      { n: '15+', t: 'Years of Experience' },
      { n: '500+', t: 'Repaired Motors' },
      { n: '24/7', t: 'Critical Care' },
      { n: '100%', t: 'Technical Warranty' }
    ],
    empresa: {
      subtitle: 'Our Company',
      title: 'MOTORES ENGINEERS',
      p1: 'We are a Peruvian company with national and international presence, providing comprehensive solutions in maintenance, repair, and on-site services in the electromechanical field for over 15 years.',
      p2: 'We have large facilities of over 5000 m2 strategically located in Cusco San Sebastian, Paradero Sexto and a branch in the city of Arequipa.',
      p3: 'Aware of the market needs to require services that meet strict quality standards, we are at your disposal to offer our extensive experience, backed by a team of highly professional engineers and technicians, as well as modern machinery and testing equipment, in line with current market demands. We are Members of EASA (Electrical Apparatus Service Association), which advises us on the repair of electrical machines.'
    },
    catalog: {
      title: 'Technical Services Catalog.',
      desc: 'Open any service to explore the full gallery of the repair process.',
      openGallery: 'Open Gallery',
      closeGallery: 'Close'
    },
    services: [
      { id: 1, title: 'Preventive Maintenance', desc: 'Avoid million-dollar stops with vibration analysis, thermography, and lubrication.', images: ['/img/3.jpeg', '/img/4.jpeg', '/img/5.jpeg', '/img/6.jpeg', '/img/7.jpeg'] },
      { id: 2, title: 'Class H Rewinding', desc: 'Total reconstruction with thermal insulation up to 180°C and VPI varnishing.', images: ['/img/8.jpeg', '/img/9.jpeg', '/img/10.jpeg', '/img/11.jpeg', '/img/12.jpeg'] },
      { id: 3, title: 'Corrective Repair', desc: 'SKF/FAG bearing replacement and recovery of worn shaft seats.', images: ['/img/13.jpeg', '/img/14.jpeg', '/img/15.jpeg', '/img/16.jpeg', '/img/17.jpeg'] },
      { id: 4, title: 'Dynamic Balancing', desc: 'Computerized correction of rotor imbalances to minimize vibrations.', images: ['/img/18.jpeg', '/img/19.jpeg', '/img/20.jpeg', '/img/21.jpeg', '/img/22.jpeg'] },
      { id: 5, title: 'Megger & Surge Testing', desc: 'Deep evaluation of electrical insulation and detection of turn-to-turn shorts.', images: ['/img/23.jpeg', '/img/24.jpeg', '/img/25.jpeg', '/img/26.jpeg', '/img/27.jpeg'] },
      { id: 6, title: 'Industrial Machining', desc: 'Custom part manufacturing, cover sleeving, and precision turning.', images: ['/img/28.jpeg', '/img/29.jpeg', '/img/30.jpeg', '/img/31.jpeg', '/img/32.jpeg'] },
      { id: 7, title: 'Generator Maintenance', desc: 'Cryogenic cleaning, oven drying, and synchronized load testing.', images: ['/img/33.jpeg', '/img/34.jpeg', '/img/35.jpeg', '/img/36.jpeg', '/img/37.jpeg'] },
      { id: 8, title: 'Pump Maintenance', desc: 'Submersible pump repair, mechanical seal, and impeller replacement.', images: ['/img/38.jpeg', '/img/3.jpeg', '/img/4.jpeg', '/img/5.jpeg', '/img/6.jpeg'] }
    ]
  }
};

export default function Presentacion() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const t = translations[lang];
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // --- NUEVOS ESTADOS PARA EL FORMULARIO DE CONTACTO ---
  const [formData, setFormData] = useState({
    nombres_apellidos: "",
    telefono: "",
    email: "",
    mensaje: "",
  });
  const [estadoEnvio, setEstadoEnvio] = useState("");

  // Manejador para actualizar el estado cuando el usuario escribe
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejador para enviar el formulario a tu backend en Go
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEstadoEnvio("enviando");

    try {
      // ⚠️ Asegúrate de que esta URL sea la correcta de tu backend (incluyendo el puerto)
      const respuesta = await fetch("http://localhost:8080/api/contactos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (respuesta.ok) {
        setEstadoEnvio("exito");
        setFormData({ nombres_apellidos: "", telefono: "", email: "", mensaje: "" }); // Limpia el form
      } else {
        setEstadoEnvio("error");
      }
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      setEstadoEnvio("error");
    } finally {
      // 👇 ESTA ES LA MAGIA QUE HACE QUE DESAPAREZCA
      // Después de 3.5 segundos (3500 milisegundos), devolvemos el estado a vacío ("")
      setTimeout(() => {
        setEstadoEnvio("");
      }, 3500);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white relative scroll-smooth">
      
      {/* --- ESTILOS DE ANIMACIÓN --- */}
      <style>{`
        /* Animación fluida para expandir tarjetas */
        @keyframes slideInRight {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in-right { animation: slideInRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-in-down { animation: slideInDown 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>

      {/* Header con Redes y Traductor */}
      <header className="flex justify-between items-center px-6 md:px-10 lg:px-16 py-4 bg-slate-900/95 backdrop-blur-md text-white sticky top-0 z-[100] shadow-xl">
        <div className="text-2xl font-black tracking-tighter">
          MOTORES
        </div>
        
        {/* Navegación central */}
        <nav className="hidden lg:flex gap-8 font-semibold text-xs uppercase tracking-widest">
          <a href="#nosotros" className="hover:text-blue-400 transition-colors">{t.nav.inicio}</a>
          <a href="#empresa" className="hover:text-blue-400 transition-colors">{t.nav.empresa}</a>
          <a href="#servicios" className="hover:text-blue-400 transition-colors">{t.nav.servicios}</a>
          <a href="#contacto" className="hover:text-blue-400 transition-colors">{t.nav.contacto}</a>
        </nav>

        {/* Zona Derecha: Redes, Idioma y Portal */}
        <div className="flex items-center gap-4 md:gap-6">
          
          {/* Redes Sociales */}
          <div className="hidden md:flex items-center gap-3 border-r border-slate-700 pr-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-500 transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
            </a>
          </div>

          {/* Selector de Idioma */}
          <div className="flex bg-slate-800 rounded-full p-1 border border-slate-700">
            <button 
              onClick={() => setLang('es')}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${lang === 'es' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
            >
              ES
            </button>
            <button 
              onClick={() => setLang('en')}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${lang === 'en' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
            >
              EN
            </button>
          </div>

          <a href="http://localhost:5173/login" target="_blank" className="hidden sm:inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full font-bold text-xs transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20">
            {t.nav.portal}
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section - Imagen Estática (Sin Carrusel) */}
        <section id="nosotros" className="relative h-[90vh] flex items-center justify-center text-center px-6 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-slate-900">
            <Image src="/img/1.jpeg" alt="Hero" fill className="object-cover scale-105 opacity-60" priority />
            <div className="absolute inset-0 bg-slate-950/60 mix-blend-multiply"></div>
          </div>
          
          <div className="relative z-10 max-w-5xl">
            <span className="inline-block px-4 py-1 mb-6 border border-blue-500/50 rounded-full text-blue-400 text-xs font-bold tracking-[0.2em] uppercase bg-blue-500/10 backdrop-blur-sm">
              {t.hero.tag}
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              {t.hero.title1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{t.hero.title2}</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              {t.hero.desc}
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a href="#contacto" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-black text-lg transition-all shadow-2xl shadow-blue-600/40">
                {t.hero.btn1}
              </a>
              <a href="#servicios" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-xl font-black text-lg transition-all">
                {t.hero.btn2}
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-white py-12 border-b border-slate-200 shadow-sm relative z-20">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {t.stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-black text-blue-600">{stat.n}</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.t}</div>
              </div>
            ))}
          </div>
        </section>

        {/* --- NUESTRA EMPRESA --- */}
        <section id="empresa" className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="text-[#0D7A3A] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.814a3.004 3.004 0 0 0-2.223-3.712A3 3 0 0 0 .102 2.223zm4.567 4.567L1.442 3.562l1.04-1.04 3.228 3.228-1.041 1.04zm6.656 6.656-3.228-3.228 1.041-1.04 3.228 3.228-1.04 1.04z"/>
                  <path d="M8.868 2.545a1.5 1.5 0 0 1 2.122-2.122l4.586 4.586a1.5 1.5 0 1 1-2.122 2.122l-4.586-4.586z"/>
                </svg>
              </div>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">
                {t.empresa.subtitle}
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-[#0D7A3A] tracking-tighter">
                {t.empresa.title}
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-justify">
                <p>{t.empresa.p1}</p>
                <p>{t.empresa.p2}</p>
                <p>{t.empresa.p3}</p>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/img/7.jpeg" 
                alt="Equipo Motores" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700" 
                unoptimized={true} 
              />
              <div className="absolute inset-0 border-4 border-white/20 rounded-3xl pointer-events-none z-10"></div>
            </div>
          </div>
        </section>

        {/* --- GRID DE SERVICIOS ADAPTATIVO CON STATE --- */}
        <section id="servicios" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter" dangerouslySetInnerHTML={{__html: t.catalog.title.replace(' ', ' <br/>')}}></h2>
              <div className="w-20 h-2 bg-blue-600 rounded-full"></div>
            </div>
            <p className="text-slate-500 text-lg max-w-sm font-medium">
              {t.catalog.desc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start relative">
            {t.services.map((s) => {
              const isExpanded = expandedId === s.id;
              const isHidden = expandedId !== null && expandedId !== s.id;

              if (isHidden) return null; // Ocultar otras tarjetas si una está abierta

              return (
                <div key={s.id} className={`
                  bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col 
                  transition-all duration-500
                  ${isExpanded ? 'col-span-1 md:col-span-2 lg:col-span-4 md:flex-row' : 'hover:shadow-2xl hover:-translate-y-2'}
                `}>

                  {/* LADO IZQUIERDO (Tarjeta Original) */}
                  <div className={`
                    relative z-10 bg-white flex flex-col transition-all duration-500 flex-shrink-0 w-full 
                    ${isExpanded ? 'md:w-[350px] lg:w-[450px] border-r-0 md:border-r border-slate-100' : ''}
                  `}>
                    
                    {/* Imagen principal (Estática, muestra la foto índice 0) */}
                    <div className={`relative w-full bg-slate-900 overflow-hidden transition-all duration-500 ${isExpanded ? 'h-64 md:h-full min-h-[250px]' : 'h-64'}`}>
                      <Image src={s.images[0]} alt={`${s.title}`} fill className="object-cover absolute inset-0" unoptimized={true} />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-20"></div>
                      <h3 className="absolute bottom-4 left-5 right-5 text-xl lg:text-2xl font-black text-white leading-tight z-30 drop-shadow-md">
                        {s.title}
                      </h3>
                    </div>
                    
                    {/* Textos y botón */}
                    <div className="p-6 relative flex flex-col flex-grow">
                      <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">{s.desc}</p>
                      <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                        
                        {!isExpanded ? (
                          <span className="text-xs uppercase font-bold text-slate-400 tracking-widest block">
                            {t.catalog.openGallery}
                          </span>
                        ) : (
                          <span className="text-xs uppercase font-bold text-blue-600 tracking-widest block">
                            {t.catalog.closeGallery}
                          </span>
                        )}
                        
                        {/* Botón Expansor */}
                        <button 
                          onClick={() => setExpandedId(isExpanded ? null : s.id)}
                          className="bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-md flex-shrink-0 focus:outline-none"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-500 ${isExpanded ? 'rotate-180 md:rotate-180' : 'rotate-90 md:rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* LADO DERECHO - Mosaico Cuadrícula (Móvil y Desktop) */}
                  {isExpanded && (
                    <div className="flex-grow bg-slate-50 p-4 md:p-6 lg:p-8 flex flex-col justify-center animate-slide-in-right overflow-hidden">
                      
                      {/* Cuadrícula limpia y uniforme: 2 columnas x 2 filas */}
                      <div className="grid grid-cols-2 gap-3 md:gap-4 h-auto md:h-[450px] w-full">
                        <div className="relative h-32 md:h-auto rounded-2xl overflow-hidden shadow-sm group/img cursor-crosshair">
                          <Image src={s.images[1]} alt="Foto 1" fill className="object-cover hover:scale-105 transition-transform duration-500" unoptimized={true} />
                        </div>
                        <div className="relative h-32 md:h-auto rounded-2xl overflow-hidden shadow-sm group/img cursor-crosshair">
                          <Image src={s.images[2]} alt="Foto 2" fill className="object-cover hover:scale-105 transition-transform duration-500" unoptimized={true} />
                        </div>
                        <div className="relative h-32 md:h-auto rounded-2xl overflow-hidden shadow-sm group/img cursor-crosshair">
                          <Image src={s.images[3]} alt="Foto 3" fill className="object-cover hover:scale-105 transition-transform duration-500" unoptimized={true} />
                        </div>
                        <div className="relative h-32 md:h-auto rounded-2xl overflow-hidden shadow-sm group/img cursor-crosshair">
                          <Image src={s.images[4]} alt="Foto 4" fill className="object-cover hover:scale-105 transition-transform duration-500" unoptimized={true} />
                        </div>
                      </div>

                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </section>


        {/* CONTACTO */}
        <section id="contacto" className="bg-slate-900 text-white pt-24 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-2">Contáctanos</p>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Resolvemos tus dudas</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div className="flex border-b border-slate-700">
                  <span className="font-bold border-b-2 border-blue-500 pb-3 px-2">Sede Central</span>
                </div>
                <div className="space-y-5">
                  <div>
                    <h4 className="font-bold text-lg flex items-center gap-3 mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Visítanos
                    </h4>
                    <p className="text-slate-300 ml-8">Cusco, Donostia, San Sebastian Guipúzcoa, Paradero Sexto</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg flex items-center gap-3 mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                      Llámanos
                    </h4>
                    <p className="text-slate-300 ml-8">957301107 | +51 960272190</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg flex items-center gap-3 mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                      Escríbenos
                    </h4>
                    <p className="text-slate-300 ml-8">operaciones@motores.com</p>
                  </div>
                </div>
                <div className="w-full h-64 bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-inner">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!4v1772317551042!6m8!1m7!1s5dmv583EeR7PaCVakxizoA!2m2!1d-13.53066702504207!2d-71.92793416169567!3f282.80403870027675!4f-26.329498839087904!5f0.7820865974627469" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              </div>

              {/* AQUI ESTÁ EL FORMULARIO MODIFICADO */}
              <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 shadow-xl">
                <h3 className="text-2xl font-bold mb-8">Escríbenos</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <input 
                    type="text" 
                    name="nombres_apellidos"
                    value={formData.nombres_apellidos}
                    onChange={handleChange}
                    placeholder="Nombres y Apellidos" 
                    className="w-full p-4 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    required 
                  />
                  <input 
                    type="tel" 
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="Teléfono" 
                    className="w-full p-4 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    required 
                  />
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email" 
                    className="w-full p-4 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    required 
                  />
                  <textarea 
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Mensaje" 
                    rows={5} 
                    className="w-full p-4 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" 
                    required
                  ></textarea>
                  
                  <button 
                    type="submit" 
                    disabled={estadoEnvio === "enviando"}
                    className={`mt-2 w-full border-2 border-blue-500 bg-blue-600 hover:bg-transparent hover:text-blue-400 text-white font-black py-4 px-8 rounded-xl transition-all duration-300 uppercase tracking-widest ${estadoEnvio === "enviando" ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {estadoEnvio === "enviando" ? "Enviando..." : "Enviar Mensaje"}
                  </button>

                  {/* Mensajes visuales de éxito o error */}
                  {estadoEnvio === "exito" && (
                    <p className="text-green-400 text-center font-bold mt-2">¡Mensaje enviado con éxito!</p>
                  )}
                  {estadoEnvio === "error" && (
                    <p className="text-red-400 text-center font-bold mt-2">Error al enviar. Intenta de nuevo.</p>
                  )}
                </form>
              </div>

            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 text-slate-500 py-12 px-6 text-center border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-white font-black text-xl mb-4">MOTORES</div>
          <p className="text-sm max-w-md mx-auto mb-6">Especialistas en motores eléctricos de baja y alta tensión.</p>
          <p className="text-xs uppercase tracking-[0.3em]">© 2026 Todos los derechos reservados</p>
        </div>
      </footer>

      {/* Widget Whatsapp */}
      <div className="fixed bottom-6 right-6 z-[9999] group font-sans">
        <div className="absolute bottom-20 right-0 w-72 bg-white rounded-2xl shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-bottom-right scale-95 group-hover:scale-100">
          <div className="bg-[#25D366] px-5 py-4 flex justify-between items-center text-white">
            <span className="font-bold text-sm tracking-wide">Soporte Motores</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-70 cursor-pointer hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </div>
          <div className="p-5 bg-slate-50">
            <div className="bg-white text-slate-700 text-sm p-4 rounded-xl shadow-sm border border-slate-100 inline-block relative">
              Hola 👋 <br/> ¿En qué podemos ayudarte?
              <div className="absolute top-1/2 -left-2 w-4 h-4 bg-white border-l border-b border-slate-100 transform -translate-y-1/2 rotate-45"></div>
            </div>
            <a href="https://wa.me/957301107" target="_blank" rel="noopener noreferrer" className="mt-6 flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-3 px-4 rounded-full font-bold text-sm transition-transform hover:scale-[1.02] shadow-lg">
              Abrir chat
            </a>
          </div>
        </div>
        <a href="https://wa.me/957301107" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white w-14 h-14 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.5)] hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 flex items-center justify-center relative cursor-pointer block">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
          </svg>
        </a>
      </div>
    </div>
  );
}