import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

const App = () => {
  // 1. Configuración de Pixel (SOLO EVENTOS ADICIONALES)
  useEffect(() => {
    // El script base ya está en el HTML. Solo disparamos ViewContent si es necesario.
    const timer = setTimeout(() => {
      // @ts-ignore
      if (typeof window !== 'undefined' && window.fbq) {
        // @ts-ignore
        window.fbq('track', 'ViewContent', { content_name: 'Kit Domando a mi Monstruo' });
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // 2. Manejador de Clics (AddToCart) - ESTE ES CLAVE PARA EL BOTÓN
  const handleAddToCart = () => {
    // @ts-ignore
    if (typeof window !== 'undefined' && window.fbq) {
      // @ts-ignore
      window.fbq('track', 'AddToCart', {
        content_name: 'Kit Domando a mi Monstruo - Oferta Principal',
        value: 10.99,
        currency: 'USD'
      });
      console.log("🛒 Pixel: Evento AddToCart disparado.");
    } else {
        console.log("⚠️ Pixel no detectado al hacer clic");
    }
  };

  // State for Word Rotator
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['😫 FRUSTRACIÓN', '😔 CULPA', '😨 MIEDO'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // State for FAQ
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Testimonials Data with Images
  const testimonials = [
      { name: 'Valeria G.', type: 'Mamá TDAH', color: 'yellow', text: "Mi hijo tiene TDAH y nada le funcionaba. Este método visual fue lo único que captó su atención. Ahora él mismo busca su 'semáforo' cuando se siente abrumado.", img: "https://randomuser.me/api/portraits/women/12.jpg" },
      { name: 'Carlos R.', type: 'Papá', color: 'blue', text: "Soy papá y al principio pensé que eran 'dibujitos'. Pero ver a mi hijo respirar hondo en vez de tirar el control de la TV me dejó callado. Funciona de verdad.", img: "https://randomuser.me/api/portraits/men/32.jpg" },
      { name: 'Clau M.', type: 'La Escéptica', color: 'red', text: "Lo compré sin mucha fe. Pero en 3 días el cambio fue radical. El concepto del monstruo les hace 'clic' en la cabeza. Por fin cenamos en paz.", img: "https://randomuser.me/api/portraits/women/44.jpg" },
      { name: 'Sofía L.', type: 'Crisis en Público', color: 'green', text: "El berrinche del súper era mi terror. Hoy saqué mi llavero de emergencia (Order Bump) y ¡santo remedio! La gente me preguntó qué era esa maravilla.", img: "https://randomuser.me/api/portraits/women/65.jpg" },
      { name: 'Miss Andrea', type: 'Educadora', color: 'purple', text: "Soy profesora de preescolar y lo estoy usando en mi aula. Es increíble cómo los niños entienden sus emociones cuando las ven como personajes.", img: "https://randomuser.me/api/portraits/women/28.jpg" },
      { name: 'Mariana S.', type: 'Hermanos', color: 'yellow', text: "Mis hijos se mataban peleando. El kit les enseñó a turnarse el 'botón de la calma'. Ahora resuelven sus conflictos ellos solos sin que yo intervenga.", img: "https://randomuser.me/api/portraits/women/90.jpg" },
      { name: 'Carolina R.', type: 'Sueño', color: 'blue', text: "Los audios para dormir son brujería jaja. Mi hija tardaba 2 horas en dormirse. Puse el cuento de la 'Lluvia Mágica' y cayó rendida en 10 minutos.", img: "https://randomuser.me/api/portraits/women/5.jpg" },
      { name: 'Fernanda P.', type: 'Niño Intenso', color: 'red', text: "Mi hijo es de carácter muy fuerte. Le encantó el Diario de Emociones. Ahora dibuja a su monstruo antes de dormir en lugar de pelear.", img: "https://randomuser.me/api/portraits/women/33.jpg" },
      { name: 'Patty L.', type: 'Gritos', color: 'green', text: "Adiós a los gritos. Antes yo gritaba y ellos gritaban más. Ahora corren a sus herramientas para respirar. Me devolvieron la tranquilidad mental.", img: "https://randomuser.me/api/portraits/women/54.jpg" },
      { name: 'Gabriela T.', type: 'Cambio de Mamá', color: 'purple', text: "Lo mejor invertido. No solo cambió a mi hijo, me cambió a mí. Ya no soy la mamá que amenaza, soy la que guía. Gracias por esto.", img: "https://randomuser.me/api/portraits/women/76.jpg" }
  ];

  // Auto-scroll logic for Testimonials
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const interval = setInterval(() => {
        if (scrollContainer) {
             const cardWidth = 300; // Ancho aproximado de la tarjeta + gap
             const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
             
             // Si llegamos al final (con un margen de error), volvemos al principio
             if (scrollContainer.scrollLeft >= maxScroll - 50) {
                 scrollContainer.scrollTo({left: 0, behavior: 'smooth'});
             } else {
                 scrollContainer.scrollBy({left: cardWidth, behavior: 'smooth'});
             }
        }
    }, 3500); 

    return () => clearInterval(interval);
  }, []);

  const borderColors: {[key: string]: string} = {
    yellow: 'border-yellow-400',
    blue: 'border-blue-400',
    red: 'border-red-400',
    green: 'border-green-400',
    purple: 'border-purple-400'
  };

  return (
    <div className="bg-gray-50 text-gray-800 antialiased overflow-x-hidden font-sans">
       {/* NAV BAR */}
       <nav className="bg-white/90 backdrop-blur-sm py-4 shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 text-center">
                <span className="font-heading text-xl font-black text-blue-500 tracking-wide uppercase">
                    Domando a mi Monstruo
                </span>
            </div>
        </nav>

        {/* HERO SECTION */}
        <header className="relative bg-gradient-to-b from-blue-50 to-white pt-10 pb-24 lg:pt-16 lg:pb-40 overflow-hidden">
             <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    <p className="text-blue-600 font-bold tracking-wider text-[10px] md:text-sm uppercase mb-4 bg-blue-100 inline-block px-4 py-1.5 rounded-full border border-blue-200">
                        PARA PADRES DE NIÑOS CON EMOCIONES INTENSAS
                    </p>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-8">
                        Un método visual y divertido para que tu hijo aprenda a <span className="text-red-500">"domar a su monstruo"</span>
                    </h1>
                    <div className="mb-8 w-full max-w-sm md:max-w-md animate-float mx-auto">
                        <img src="https://erxxuotslhjluwrlxmyx.supabase.co/storage/v1/object/sign/LANDING%20POST%20PARTO/landing%20ebook/herogif.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWQxZTBkNS1mNzcwLTRmMDMtODRhYy1jYTk2YzZkZmM1NDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMQU5ESU5HIFBPU1QgUEFSVE8vbGFuZGluZyBlYm9vay9oZXJvZ2lmLndlYnAiLCJpYXQiOjE3Njk3MzA2MjAsImV4cCI6MTgwMTI2NjYyMH0.cJfvz6IFSFPEfcOH-HU-RICCrfv9_hKKgDpdn48x7eg" 
                             alt="Niño feliz domando monstruo" 
                             className="w-full rounded-[2rem] shadow-2xl transform rotate-1 border-4 border-white block mx-auto" />
                    </div>
                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
                        Regula sus emociones y recupera la calma en minutos. Sin gritos, sin castigos y sin ser la "mamá mala".
                    </p>
                </div>
            </div>
            {/* Wave 1 */}
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58-18 88-18 v44h-352z" />
                </defs>
                <g className="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#ffffff" />
                </g>
            </svg>
        </header>

        {/* DOLOR */}
        <section className="py-16 md:py-24 bg-white relative z-20">
             <div className="container mx-auto px-4 max-w-5xl relative z-10 pb-24">
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    <div className="w-full md:w-1/2">
                        <img src="https://erxxuotslhjluwrlxmyx.supabase.co/storage/v1/object/sign/LANDING%20POST%20PARTO/landing%20ebook/mama.gif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWQxZTBkNS1mNzcwLTRmMDMtODRhYy1jYTk2YzZkZmM1NDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMQU5ESU5HIFBPU1QgUEFSVE8vbGFuZGluZyBlYm9vay9tYW1hLmdpZiIsImlhdCI6MTc2OTg3NjQ5NCwiZXhwIjoxODAxNDEyNDk0fQ.ImrZ2clIZbLfbYm3Gk4h8kwf7v1q3L-zEAcC9K_ekBE" 
                             alt="Madre estresada" 
                             className="rounded-[2rem] shadow-xl border-2 border-gray-100 w-full transform -rotate-1" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-tight font-heading text-center md:text-left">
                            "No es un niño malo... solo tiene un monstruo que no sabe controlar"
                        </h2>
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>Seguro conoces esa mirada. Ese momento en que los ojos de tu hijo cambian, sus puños se aprietan y sabes que la explosión es inminente.</p>
                            <p>De repente, los gritos y el llanto incontrolable se apoderan de la casa.</p>
                            <p>Y tú, intentas mantener la calma. Respiras. Hablas bajito.</p>
                        </div>
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-xl shadow-sm">
                            <p className="font-bold text-gray-800 text-sm uppercase tracking-wide mb-2">Pero por dentro sientes:</p>
                            <p className="text-3xl font-black text-red-500 font-heading min-h-[40px] transition-opacity duration-500">
                                {words[currentWordIndex]}
                            </p>
                        </div>
                        <div className="space-y-4 text-gray-600">
                            <p><strong>Frustración:</strong> "¿Por qué todo tiene que ser una batalla?"</p>
                            <p><strong>Culpa:</strong> "¿Estaré fallando como madre?"</p>
                            <p className="mt-4 pt-4 border-t border-gray-100 font-bold text-gray-900 text-lg">
                                Sabes que tu hijo no es malo. Pero cuando su "monstruo" sale, nadie sabe qué hacer. Hasta ahora.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Wave 2 */}
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58-18 88-18 58-18 88-18 v44h-352z" />
                </defs>
                <g className="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(243, 244, 246, 0.7)" />
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(243, 244, 246, 0.5)" />
                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(243, 244, 246, 0.3)" />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#f3f4f6" />
                </g>
            </svg>
        </section>

        {/* 3. SOLUCIÓN */}
        <section id="solucion-section" className="py-20 bg-gray-100 relative z-10">
             <div className="container mx-auto px-4 max-w-4xl text-center pb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-heading leading-tight">
                    El problema no es tu hijo. Es que le faltan las <span className="text-blue-500 relative inline-block whitespace-nowrap">HERRAMIENTAS<svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-400 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg></span>.
                </h2>
                
                <p className="text-xl text-gray-700 mb-10 leading-relaxed font-medium">
                    Imagina pedirle a alguien que construya una casa sin darle martillo ni clavos. Eso hacemos cuando les pedimos que "se calmen" sin enseñarles CÓMO.
                </p>

                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl mb-12 transform hover:scale-105 transition duration-500 border border-white">
                    <p className="text-lg mb-4 text-gray-600">Ellos no entienden conceptos abstractos como "autorregulación".</p>
                    <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 font-heading">Pero SÍ entienden de <span className="text-purple-600">Monstruos</span>, <span className="text-yellow-500">Colores</span> y <span className="text-green-500">Juegos</span>.</p>
                    
                    <div className="inline-block bg-yellow-100 text-yellow-900 px-8 py-4 rounded-2xl font-black text-lg md:text-xl border-2 border-yellow-300 shadow-sm">
                        Por eso creamos el KIT DOMANDO A MI MONSTRUO
                    </div>
                    
                    <p className="mt-8 text-gray-600 leading-relaxed text-lg">
                        No es un libro aburrido de teoría para padres. Es un Cuaderno de Trabajo Visual diseñado para el cerebro del niño, donde él mismo aprende a ser el "Domador" de sus emociones.
                    </p>
                </div>
            </div>
            {/* Wave 3 */}
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58-18 88-18 v44h-352z" />
                </defs>
                <g className="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#ffffff" />
                </g>
            </svg>
        </section>

        {/* 4. COMO FUNCIONA */}
        <section className="py-20 bg-white relative z-20">
             <div className="container mx-auto px-4 max-w-6xl pb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 font-heading">Un Método de 3 Pasos Disfrazado de Juego</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="bg-blue-50 rounded-[2.5rem] p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-blue-100 flex flex-col items-center text-center">
                        <img src="https://erxxuotslhjluwrlxmyx.supabase.co/storage/v1/object/sign/LANDING%20POST%20PARTO/landing%20ebook/Paso%201%20(El%20Monstruo).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWQxZTBkNS1mNzcwLTRmMDMtODRhYy1jYTk2YzZkZmM1NDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMQU5ESU5HIFBPU1QgUEFSVE8vbGFuZGluZyBlYm9vay9QYXNvIDEgKEVsIE1vbnN0cnVvKS5wbmciLCJpYXQiOjE3Njk3MzA2ODksImV4cCI6MTgwMTI2NjY4OX0.dP8cIIt-kX1ANzuXTs1miEVRmuH-UUQt9fpGTvyJWb0" 
                             alt="Paso 1: Monstruo" 
                             className="w-48 h-48 object-contain mb-6 drop-shadow-md" />
                        <h3 className="text-xl font-bold text-blue-600 mb-3 font-heading">🔹 Paso 1: Conocer al Monstruo</h3>
                        <p className="text-gray-600 leading-relaxed">Tu hijo dejará de sentirse "malo". Entenderá que la ira es solo un "Monstruo Rojo". Al ponerle nombre y cara, le quitamos el miedo.</p>
                    </div>
                     {/* Step 2 */}
                    <div className="bg-yellow-50 rounded-[2.5rem] p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-yellow-100 flex flex-col items-center text-center md:-mt-8 relative z-10">
                        <img src="https://erxxuotslhjluwrlxmyx.supabase.co/storage/v1/object/sign/LANDING%20POST%20PARTO/landing%20ebook/paso%202%20semaforo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWQxZTBkNS1mNzcwLTRmMDMtODRhYy1jYTk2YzZkZmM1NDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMQU5ESU5HIFBPU1QgUEFSVE8vbGFuZGluZyBlYm9vay9wYXNvIDIgc2VtYWZvcm8ucG5nIiwiaWF0IjoxNzY5NzMwNzEzLCJleHAiOjE4MDEyNjY3MTN9.15VEQsVB2hXl_SwEyp5N3cLd8JOh_DtTQfw59BR8Ceo" 
                             alt="Paso 2: Semáforo" 
                             className="w-48 h-48 object-contain mb-6 drop-shadow-md" />
                        <h3 className="text-xl font-bold text-yellow-600 mb-3 font-heading">🔹 Paso 2: El Semáforo</h3>
                        <p className="text-gray-600 leading-relaxed">Usando la técnica visual del "Para, Piensa, Actúa", aprenderá a detenerse antes de golpear. Un sistema que su cerebro procesa rápido.</p>
                    </div>
                    {/* Step 3 */}
                    <div className="bg-green-50 rounded-[2.5rem] p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-green-100 flex flex-col items-center text-center">
                        <img src="https://erxxuotslhjluwrlxmyx.supabase.co/storage/v1/object/sign/LANDING%20POST%20PARTO/landing%20ebook/Paso%203%20(Los%20Botones).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWQxZTBkNS1mNzcwLTRmMDMtODRhYy1jYTk2YzZkZmM1NDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMQU5ESU5HIFBPU1QgUEFSVE8vbGFuZGluZyBlYm9vay9QYXNvIDMgKExvcyBCb3RvbmVzKS5wbmciLCJpYXQiOjE3Njk3MzA3MjgsImV4cCI6MTgwMTI2NjcyOH0.HrFy-hPeKYVx3s4rTm3s19b2twOo_4sfC1wcc2Wnw4E" 
                             alt="Paso 3: Botones" 
                             className="w-48 h-48 object-contain mb-6 drop-shadow-md" />
                        <h3 className="text-xl font-bold text-green-600 mb-3 font-heading">🔹 Paso 3: Botones de Calma</h3>
                        <p className="text-gray-600 leading-relaxed">¿Qué hago con esta rabia? El Kit le entrega un "Panel de Control" con opciones reales: respirar, apretar o pedir un abrazo.</p>
                    </div>
                </div>
            </div>
            {/* Wave 4 */}
             <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58-18 88-18 v44h-352z" />
                </defs>
                <g className="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(239, 246, 255, 0.7)" />
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(239, 246, 255, 0.5)" />
                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(239, 246, 255, 0.3)" />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#eff6ff" />
                </g>
            </svg>
        </section>

        {/* 5. BENEFICIOS */}
        <section className="py-20 bg-blue-50 relative z-10">
            <div className="container mx-auto px-4 max-w-4xl pb-24">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-10 font-heading">Lo que empezarás a notar en menos de 7 días:</h2>
                <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-blue-100">
                    <ul className="space-y-6">
                        <li className="flex items-start">
                            <span className="flex-shrink-0 bg-green-100 text-green-500 rounded-full p-2 mr-4 mt-1">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                            </span>
                            <div>
                                <strong className="text-gray-900 text-lg block mb-1">Mañanas sin Gritos</strong>
                                <span className="text-gray-600">Salir de casa a tiempo y sin llorar porque hay que vestirse.</span>
                            </div>
                        </li>
                         <li className="flex items-start">
                            <span className="flex-shrink-0 bg-green-100 text-green-500 rounded-full p-2 mr-4 mt-1">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                            </span>
                            <div>
                                <strong className="text-gray-900 text-lg block mb-1">Adiós a la Vergüenza Pública</strong>
                                <span className="text-gray-600">Ir al supermercado sin miedo al berrinche en la fila.</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="flex-shrink-0 bg-green-100 text-green-500 rounded-full p-2 mr-4 mt-1">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                            </span>
                            <div>
                                <strong className="text-gray-900 text-lg block mb-1">Menos "Mamá Gruñona"</strong>
                                <span className="text-gray-600">Al tener una herramienta que funciona, tú también dejas de gritar.</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="flex-shrink-0 bg-green-100 text-green-500 rounded-full p-2 mr-4 mt-1">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                            </span>
                            <div>
                                <strong className="text-gray-900 text-lg block mb-1">Conexión Real</strong>
                                <span className="text-gray-600">En lugar de pelear, se sentarán juntos a colorear y hablar del "monstruo".</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
             <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58-18 88-18 v44h-352z" />
                </defs>
                <g className="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#ffffff" />
                </g>
            </svg>
        </section>

        {/* TESTIMONIOS */}
        <section className="py-20 bg-white relative z-20 overflow-hidden">
             <div className="container mx-auto px-4 relative pt-6 pb-32">
                <h2 className="font-heading text-2xl md:text-3xl font-black text-center mb-10 text-gray-900 px-2 leading-tight">
                    Más de 1.000 padres ya recuperaron la calma. <br className="hidden md:block" />Aquí sus historias:
                </h2>
                <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-4 scrollbar-hide">
                    {testimonials.map((t, i) => (
                        <div key={i} className={`snap-center shrink-0 w-[85vw] md:w-[350px] bg-white p-8 rounded-[2rem] shadow-xl flex flex-col justify-between border-t-8 ${borderColors[t.color]}`}>
                            <div>
                                <div className="text-yellow-400 text-lg mb-3">⭐⭐⭐⭐⭐</div>
                                <p className="text-gray-600 italic mb-6 font-medium leading-relaxed">"{t.text}"</p>
                            </div>
                            <div className="flex items-center">
                                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-gray-100 shadow-sm" />
                                <div>
                                    <p className="font-bold text-gray-900">{t.name}</p>
                                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{t.type}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                 <p className="text-center text-xs text-gray-400 mt-2 font-medium tracking-wide">← Desliza para ver más historias →</p>
            </div>
             <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58-18 88-18 v44h-352z" />
                </defs>
                <g className="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(30, 58, 138, 0.7)" />
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(30, 58, 138, 0.5)" />
                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(30, 58, 138, 0.3)" />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#1E3A8A" />
                </g>
            </svg>
        </section>

        {/* 6. OFERTA */}
        <section id="oferta" className="py-24 bg-blue-900 text-white relative z-10">
             <div className="container mx-auto px-4 max-w-6xl pt-8 pb-24">
                 <h2 className="text-3xl md:text-5xl font-black text-center mb-12 text-yellow-400 font-heading">Todo lo que recibes hoy:</h2>
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                       <div className="relative">
                            <img src="https://erxxuotslhjluwrlxmyx.supabase.co/storage/v1/object/sign/LANDING%20POST%20PARTO/mockup.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWQxZTBkNS1mNzcwLTRmMDMtODRhYy1jYTk2YzZkZmM1NDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMQU5ESU5HIFBPU1QgUEFSVE8vbW9ja3VwLmpwZyIsImlhdCI6MTc2OTg3MzQ1NiwiZXhwIjoxODAxNDA5NDU2fQ.0hyDgDOshqsMAzSRa2BvPYFpcOQbMIZBY1bPGseWXm8" 
                                 alt="Mockup Kit Completo" 
                                 className="w-full drop-shadow-2xl hover:scale-105 transition duration-500" />
                       </div>
                       <div className="space-y-6">
                            <ul className="space-y-4">
                                <li className="bg-blue-800 p-4 rounded-xl flex items-start gap-3 border border-blue-700 shadow-md">
                                    <span className="text-3xl">📚</span>
                                    <div>
                                        <h3 className="font-bold text-lg text-white">1. El Workbook Principal (PDF)</h3>
                                        <p className="text-blue-200 text-sm">Más de 50 páginas de actividades e historias listas para imprimir.</p>
                                    </div>
                                </li>
                                <li className="bg-blue-800 p-4 rounded-xl flex items-start gap-3 border border-blue-700 shadow-md">
                                    <span className="text-3xl">🚦</span>
                                    <div>
                                        <h3 className="font-bold text-lg text-white">2. La Técnica del Semáforo 3D</h3>
                                        <p className="text-blue-200 text-sm">Póster visual recordatorio para la nevera o su cuarto.</p>
                                    </div>
                                </li>
                                <li className="bg-blue-800 p-4 rounded-xl flex items-start gap-3 border border-blue-700 shadow-md">
                                    <span className="text-3xl">🧘</span>
                                    <div>
                                        <h3 className="font-bold text-lg text-white">3. Panel de Botones de Calma</h3>
                                        <p className="text-blue-200 text-sm">Herramienta interactiva para que el niño elija cómo calmarse.</p>
                                    </div>
                                </li>
                                <li className="bg-blue-800 p-4 rounded-xl flex items-start gap-3 border border-blue-700 shadow-md">
                                    <span className="text-3xl">🖍️</span>
                                    <div>
                                        <h3 className="font-bold text-lg text-white">4. Diario de las Emociones</h3>
                                        <p className="text-blue-200 text-sm">Plantillas para procesar lo que sintió en el día.</p>
                                    </div>
                                </li>
                            </ul>

                             <div className="bg-white text-gray-900 p-8 rounded-3xl text-center shadow-2xl mt-8 border-4 border-yellow-400 relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase">Oferta Limitada</div>
                                <p className="text-gray-500 text-sm mb-2 font-semibold">Precio Habitual: <span className="line-through text-red-500 text-lg">$49 USD</span></p>
                                <div className="text-6xl font-black text-blue-900 mb-2 tracking-tighter">$10.99 <span className="text-xl font-bold text-gray-500">USD</span></div>
                                <p className="text-green-700 font-bold mb-6 text-sm bg-green-100 inline-block px-3 py-1 rounded-full">Pago único - Acceso de por vida</p>
                                
                                <a href="https://pay.hotmart.com/D104179255R?checkoutMode=10" target="_blank" onClick={handleAddToCart} className="btn-pulse block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black text-xl py-4 px-6 rounded-full shadow-lg transition transform hover:-translate-y-1 w-full border-b-4 border-yellow-600 cursor-pointer">
                                    DESCARGAR AHORA POR $10.99
                                </a>

                                <div className="flex justify-center gap-4 mt-6 opacity-60 grayscale hover:grayscale-0 transition duration-300">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-6" alt="Visa" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" alt="Mastercard" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-6" alt="Paypal" />
                                </div>
                             </div>
                       </div>
                  </div>
             </div>
             <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58-18 88-18 v44h-352z" />
                </defs>
                <g className="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255, 255, 255, 0.7)" />
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255, 255, 255, 0.5)" />
                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255, 255, 255, 0.3)" />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#ffffff" />
                </g>
            </svg>
        </section>

        {/* 8. GARANTÍA */}
        <section className="py-20 bg-white relative z-20">
             <div className="container mx-auto px-4 max-w-3xl text-center pb-24">
                <div className="mb-6 flex justify-center animate-bounce">
                    <svg className="w-24 h-24 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <h2 className="text-3xl font-black text-gray-900 mb-4 font-heading">Tu Tranquilidad está Garantizada</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Pruébalo por <strong>30 Días</strong>. Imprímelo, haz los ejercicios con tu hijo. 
                    Si no ves cómo sus ojos brillan al entender a su monstruo, o si no sientes más paz en casa, te devolvemos el 100% de tu dinero. Sin preguntas.
                </p>
                <p className="font-bold text-blue-600 bg-blue-50 inline-block px-4 py-2 rounded-lg">El riesgo es todo nuestro.</p>
            </div>
             <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58-18 88-18 v44h-352z" />
                </defs>
                <g className="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(249, 250, 251, 0.7)" />
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(249, 250, 251, 0.5)" />
                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(249, 250, 251, 0.3)" />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#f9fafb" />
                </g>
            </svg>
        </section>

        {/* 9. FAQ */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
             <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-black text-center mb-10 text-gray-900 font-heading">Preguntas Frecuentes</h2>
                <div className="space-y-4">
                     {[
                         { id: 1, q: "¿Para qué edad es?", a: "Ideal para niños de 4 a 10 años. Los más pequeños disfrutan los dibujos y personajes, mientras que los más grandes entienden la técnica de autorregulación a fondo." },
                         { id: 2, q: "¿Es un libro físico?", a: "No, es un Kit Digital (PDF). Lo recibes en tu correo inmediatamente después del pago y puedes imprimir las páginas que quieras, las veces que quieras." },
                         { id: 3, q: "¿Sirve para TDAH o Autismo?", a: "¡Sí! Al ser 100% visual, estructurado y concreto, es perfecto para cerebros neurodivergentes que necesitan explicaciones claras y no tanto texto abstracto." },
                         { id: 4, q: "¿Cómo lo recibo?", a: "Automáticamente después del pago te llega un email con el acceso a la plataforma donde podrás descargar todo el material de inmediato." }
                     ].map((item) => (
                         <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                             <button onClick={() => toggleFaq(item.id)} className="w-full text-left px-6 py-5 font-bold text-gray-800 flex justify-between items-center hover:bg-gray-50 transition">
                                 {item.q}
                                 <span className="text-2xl text-blue-500 font-black">{openFaq === item.id ? '−' : '+'}</span>
                             </button>
                             {openFaq === item.id && (
                                 <div className="px-6 py-4 bg-blue-50 text-gray-600 text-sm border-t border-gray-100 leading-relaxed animate-fade-in">
                                     {item.a}
                                 </div>
                             )}
                         </div>
                     ))}
                </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-10 text-center text-sm">
             <div className="container mx-auto px-4">
                <p className="font-bold text-gray-300">© 2024 Kit Domando a mi Monstruo.</p>
                <p className="mt-2 text-xs opacity-60">Todos los derechos reservados. Este sitio no es parte del sitio web de Facebook o Facebook Inc.</p>
            </div>
        </footer>
    </div>
  );
};

// Mount the App
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}