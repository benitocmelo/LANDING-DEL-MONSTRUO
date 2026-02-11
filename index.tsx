import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

// --- CONSTANTES ---
const whatsappImages = [
  "https://erxxuotslhjluwrlxmyx.supabase.co/storage/v1/object/sign/monstruo/testimonios/1080x1350_vertical_45_2k_202602102222.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWQxZTBkNS1mNzcwLTRmMDMtODRhYy1jYTk2YzZkZmM1NDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtb25zdHJ1by90ZXN0aW1vbmlvcy8xMDgweDEzNTBfdmVydGljYWxfNDVfMmtfMjAyNjAyMTAyMjIyLmpwZWciLCJpYXQiOjE3NzA3ODA1NDQsImV4cCI6MTgwMjMxNjU0NH0.r_XVMLCnr2Hhktjl7FPg1wVKKCOe7SV3rPLnDk5UECU",
  "https://erxxuotslhjluwrlxmyx.supabase.co/storage/v1/object/sign/monstruo/testimonios/1080x1350_vertical_whatsappstyle_2k_2026021%20(1).jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWQxZTBkNS1mNzcwLTRmMDMtODRhYy1jYTk2YzZkZmM1NDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtb25zdHJ1by90ZXN0aW1vbmlvcy8xMDgweDEzNTBfdmVydGljYWxfd2hhdHNhcHBzdHlsZV8ya18yMDI2MDIxICgxKS5qcGVnIiwiaWF0IjoxNzcwNzgwNTYzLCJleHAiOjE4MDIzMTY1NjN9.E0f159fR8SuOqgBIbGdkdun9KextcAA0cJhzd7VOcFE",
  "https://erxxuotslhjluwrlxmyx.supabase.co/storage/v1/object/sign/monstruo/testimonios/1080x1350_vertical_whatsappstyle_2k_2026021%20(2).jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWQxZTBkNS1mNzcwLTRmMDMtODRhYy1jYTk2YzZkZmM1NDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtb25zdHJ1by90ZXN0aW1vbmlvcy8xMDgweDEzNTBfdmVydGljYWxfd2hhdHNhcHBzdHlsZV8ya18yMDI2MDIxICgyKS5qcGVnIiwiaWF0IjoxNzcwNzgwNTc4LCJleHAiOjE4MDIzMTY1Nzh9.QGMtCQRtWFdI2rpJZ74JNlPh47ex43w2bsZUAt3lL5w",
  "https://erxxuotslhjluwrlxmyx.supabase.co/storage/v1/object/sign/monstruo/testimonios/1080x1350_vertical_whatsappstyle_2k_2026021.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWQxZTBkNS1mNzcwLTRmMDMtODRhYy1jYTk2YzZkZmM1NDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtb25zdHJ1by90ZXN0aW1vbmlvcy8xMDgweDEzNTBfdmVydGljYWxfd2hhdHNhcHBzdHlsZV8ya18yMDI2MDIxLmpwZWciLCJpYXQiOjE3NzA3ODA1OTMsImV4cCI6MTgwMjMxNjU5M30.BYIfCTQ0n_6xJEF2-iI4XFsc9g5_RAuw-bX-Da5weyM",
  "https://erxxuotslhjluwrlxmyx.supabase.co/storage/v1/object/sign/monstruo/testimonios/Image_1080x1350_vertical_2k_202602102221.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWQxZTBkNS1mNzcwLTRmMDMtODRhYy1jYTk2YzZkZmM1NDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtb25zdHJ1by90ZXN0aW1vbmlvcy9JbWFnZV8xMDgweDEzNTBfdmVydGljYWxfMmtfMjAyNjAyMTAyMjIxLmpwZWciLCJpYXQiOjE3NzA3ODA2MTUsImV4cCI6MTgwMjMxNjYxNX0.bTad6D-ssJ0DAp_tdxep__nIO3BeTgjBP_ZCHlxk0U0"
];

// --- COMPONENTE CARRUSEL WHATSAPP ---
const WhatsappCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % whatsappImages.length);
    }, 4000); // Cambia cada 4 segundos
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-sm mx-auto overflow-hidden rounded-[2.5rem] border-8 border-gray-900 shadow-2xl bg-gray-800">
      {/* Barra superior estilo celular */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gray-900 z-20 flex justify-center items-center">
         <div className="w-20 h-4 bg-black rounded-b-xl"></div>
      </div>
      
      {/* Contenedor deslizante */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-[500px] md:h-[600px] bg-gray-100"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {whatsappImages.map((img, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
             <img 
               src={img} 
               alt={`Testimonio ${index + 1}`} 
               className="w-full h-full object-cover"
               loading="lazy"
             />
             {/* Overlay sutil para brillo */}
             <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Indicadores (Dots) */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {whatsappImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-white w-6' : 'bg-white/50'
            }`}
            aria-label={`Ver testimonio ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};


// --- COMPONENTE DE NOTIFICACIÓN DE COMPRA (SOCIAL PROOF) ---
const PurchaseNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Datos simulados de compras recientes (Nombres comunes y países hispanos)
  const buyers = [
    { name: "María J.", location: "Ciudad de México, MX", time: "hace 2 minutos" },
    { name: "Ana P.", location: "Bogotá, Colombia", time: "hace 5 minutos" },
    { name: "Sofía L.", location: "Santiago, Chile", time: "hace 12 minutos" },
    { name: "Carolina M.", location: "Madrid, España", time: "hace 8 minutos" },
    { name: "Valentina R.", location: "Lima, Perú", time: "hace 15 minutos" },
    { name: "Laura G.", location: "Miami, USA", time: "hace 3 minutos" },
    { name: "Camila S.", location: "Buenos Aires, AR", time: "hace 20 minutos" },
    { name: "Andrea B.", location: "Monterrey, MX", time: "hace 7 minutos" },
    { name: "Paula C.", location: "Medellín, CO", time: "hace 10 minutos" }
  ];

  useEffect(() => {
    // Retraso inicial antes de mostrar la primera notificación
    const initialDelay = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>;
    let showTimer: ReturnType<typeof setTimeout>;

    if (isVisible) {
      // Ocultar después de 6 segundos
      hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 6000);
    } else {
      // Mostrar el siguiente después de 10 segundos de silencio
      showTimer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % buyers.length);
        setIsVisible(true);
      }, 10000);
    }

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(showTimer);
    };
  }, [isVisible]);

  const buyer = buyers[currentIndex];

  return (
    <div 
      className={`fixed bottom-4 left-4 z-50 transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-3 pr-5 flex items-center gap-3 max-w-[320px] md:max-w-sm">
        {/* Imagen del producto o icono */}
        <div className="relative shrink-0">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center overflow-hidden">
                 <img src="https://erxxuotslhjluwrlxmyx.supabase.co/storage/v1/object/sign/LANDING%20POST%20PARTO/mockup.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWQxZTBkNS1mNzcwLTRmMDMtODRhYy1jYTk2YzZkZmM1NDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMQU5ESU5HIFBPU1QgUEFSVE8vbW9ja3VwLmpwZyIsImlhdCI6MTc2OTg3MzQ1NiwiZXhwIjoxODAxNDA5NDU2fQ.0hyDgDOshqsMAzSRa2BvPYFpcOQbMIZBY1bPGseWXm8" alt="Kit" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5 border-2 border-white">
                <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
            </div>
        </div>
        
        {/* Texto */}
        <div className="flex flex-col">
            <p className="text-xs text-gray-500 leading-none mb-1">{buyer.name} en <span className="font-bold text-gray-700">{buyer.location}</span></p>
            <p className="text-sm font-bold text-blue-900 leading-tight">Compró el Kit Domando a mi Monstruo</p>
            <p className="text-[10px] text-gray-400 mt-0.5">{buyer.time}</p>
        </div>
      </div>
    </div>
  );
};

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

        {/* HERO SECTION REDESIGNED */}
        <header className="relative bg-gradient-to-b from-blue-50 to-white pt-12 pb-32 lg:pt-20 lg:pb-48 overflow-hidden">
             <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-700 font-bold text-[10px] md:text-sm uppercase tracking-wider mb-8 shadow-sm">
                        <span>🚨</span> MÉTODO PARA ROMPER EL BLOQUEO EMOCIONAL
                    </div>

                    {/* Headline */}
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.15] mb-8 font-heading">
                        Tu gritas, él llora y nada cambia... <br className="hidden md:block"/>
                        Rompe el <span className="text-red-600 bg-red-50 px-3 py-1 rounded-lg inline-block transform -rotate-2 border border-red-100 shadow-sm">Ciclo de Gritos</span> hoy mismo.
                    </h1>

                    {/* Image */}
                    <div className="mb-10 w-full max-w-sm md:max-w-md animate-float mx-auto relative group">
                         <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-[2.2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                         <img src="https://erxxuotslhjluwrlxmyx.supabase.co/storage/v1/object/sign/LANDING%20POST%20PARTO/landing%20ebook/herogif.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWQxZTBkNS1mNzcwLTRmMDMtODRhYy1jYTk2YzZkZmM1NDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMQU5ESU5HIFBPU1QgUEFSVE8vbGFuZGluZyBlYm9vay9oZXJvZ2lmLndlYnAiLCJpYXQiOjE3Njk3MzA2MjAsImV4cCI6MTgwMTI2NjYyMH0.cJfvz6IFSFPEfcOH-HU-RICCrfv9_hKKgDpdn48x7eg" 
                             alt="Niño feliz domando monstruo" 
                             className="w-full rounded-[2rem] shadow-2xl transform rotate-1 border-4 border-white block mx-auto relative z-10" />
                    </div>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                        Cuando el cerebro de tu hijo se bloquea, tus palabras no entran. <br className="hidden md:block" />
                        Deja de desgastarte explicando y empieza a usar la <strong className="text-blue-600 bg-blue-50 px-1 rounded">"Pausa Visual Activa"</strong>: la única herramienta que detiene la explosión sin decir una sola palabra.
                    </p>

                    {/* Scroll Indicator */}
                    <div className="animate-bounce flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                        <span className="text-sm font-bold text-blue-900 tracking-widest uppercase text-[10px]">Descubre cómo funciona</span>
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </div>

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
                        <img src="https://erxxuotslhjluwrlxmyx.supabase.co/storage/v1/object/sign/monstruo/Usa_la_imagen_202602102200_jaadn-ezgif.com-video-to-webp-converter.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWQxZTBkNS1mNzcwLTRmMDMtODRhYy1jYTk2YzZkZmM1NDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtb25zdHJ1by9Vc2FfbGFfaW1hZ2VuXzIwMjYwMjEwMjIwMF9qYWFkbi1lemdpZi5jb20tdmlkZW8tdG8td2VicC1jb252ZXJ0ZXIud2VicCIsImlhdCI6MTc3MDc3OTIxNywiZXhwIjoxODAyMzE1MjE3fQ.BhUpcQceiwxkenghw1SdAmZAQHDcgJNf1yVxpP5sGRw" 
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
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58-18 88-18 v44h-352z" />
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
                        <img src="https://erxxuotslhjluwrlxmyx.supabase.co/storage/v1/object/sign/monstruo/freepik__fotografa-realista-estilo-lifestyle-educativo-luz-__57596.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWQxZTBkNS1mNzcwLTRmMDMtODRhYy1jYTk2YzZkZmM1NDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtb25zdHJ1by9mcmVlcGlrX19mb3RvZ3JhZmEtcmVhbGlzdGEtZXN0aWxvLWxpZmVzdHlsZS1lZHVjYXRpdm8tbHV6LV9fNTc1OTYucG5nIiwiaWF0IjoxNzcwNzc4Nzk4LCJleHAiOjE4MDIzMTQ3OTh9.sXae4kh4Vb2rc2Jw0OfjNaxa7jC9WhQU9BlvxyNHM60" 
                             alt="Paso 1: Monstruo" 
                             className="w-48 h-48 object-cover rounded-2xl mb-6 shadow-md border-4 border-white" />
                        <h3 className="text-xl font-bold text-blue-600 mb-3 font-heading">🔹 Paso 1: Conocer al Monstruo</h3>
                        <p className="text-gray-600 leading-relaxed">Tu hijo dejará de sentirse "malo". Entenderá que la ira es solo un "Monstruo Rojo". Al ponerle nombre y cara, le quitamos el miedo.</p>
                    </div>
                     {/* Step 2 */}
                    <div className="bg-yellow-50 rounded-[2.5rem] p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-yellow-100 flex flex-col items-center text-center md:-mt-8 relative z-10">
                        <img src="https://erxxuotslhjluwrlxmyx.supabase.co/storage/v1/object/sign/monstruo/freepik__fotografa-realista-plano-medionio-de-5-a-7-aos-de-__57594.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWQxZTBkNS1mNzcwLTRmMDMtODRhYy1jYTk2YzZkZmM1NDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtb25zdHJ1by9mcmVlcGlrX19mb3RvZ3JhZmEtcmVhbGlzdGEtcGxhbm8tbWVkaW9uaW8tZGUtNS1hLTctYW9zLWRlLV9fNTc1OTQucG5nIiwiaWF0IjoxNzcwNzc3NzIzLCJleHAiOjE4MDIzMTM3MjN9.EBpOPVKv_drOEbl5bJK4UwPN8CJYRseJ1U_L9Mbg6W0" 
                             alt="Paso 2: Semáforo" 
                             className="w-48 h-48 object-cover rounded-2xl mb-6 shadow-md border-4 border-white" />
                        <h3 className="text-xl font-bold text-yellow-600 mb-3 font-heading">🔹 Paso 2: El Semáforo</h3>
                        <p className="text-gray-600 leading-relaxed">Usando la técnica visual del "Para, Piensa, Actúa", aprenderá a detenerse antes de golpear. Un sistema que su cerebro procesa rápido.</p>
                    </div>
                    {/* Step 3 */}
                    <div className="bg-green-50 rounded-[2.5rem] p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-green-100 flex flex-col items-center text-center">
                        <img src="https://erxxuotslhjluwrlxmyx.supabase.co/storage/v1/object/sign/monstruo/freepik__fotografa-realista-estilo-lifestyle-familiarnio-de__57595.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWQxZTBkNS1mNzcwLTRmMDMtODRhYy1jYTk2YzZkZmM1NDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtb25zdHJ1by9mcmVlcGlrX19mb3RvZ3JhZmEtcmVhbGlzdGEtZXN0aWxvLWxpZmVzdHlsZS1mYW1pbGlhcm5pby1kZV9fNTc1OTUucG5nIiwiaWF0IjoxNzcwNzc3NjcxLCJleHAiOjE4MDIzMTM2NzF9.jWLLOvgS4K2ljZ-k792uvCToVFH387RXehrdl83IhY8" 
                             alt="Paso 3: Botones" 
                             className="w-48 h-48 object-cover rounded-2xl mb-6 shadow-md border-4 border-white" />
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
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 v44h-352z" />
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

        {/* 7. WHATSAPP TESTIMONIALS */}
        <section className="py-20 bg-gray-50 relative z-20">
             <div className="container mx-auto px-4 text-center pb-24">
                <h2 className="text-3xl font-black text-gray-900 mb-10 font-heading">
                    Resultados Reales en <span className="text-green-600">WhatsApp</span>
                </h2>
                <WhatsappCarousel />
            </div>
            {/* Wave 5 */}
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

        {/* Incluir Notificación */}
        <PurchaseNotification />
    </div>
  );
};

// Mount the App
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}