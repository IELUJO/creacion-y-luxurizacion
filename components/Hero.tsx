import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[800px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt="Materiales nobles: mármol, latón y ámbar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-luxury-navy/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy/90 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <FadeIn delay={200}>
            <div className="flex justify-center items-center mb-8 opacity-90">
                {/* Logo IELujo */}
                <div className="h-20 w-auto flex items-center justify-center">
                   <img
                       src="https://www.ielujo.com/wp-content/uploads/2025/12/0a0233b6-e5e5-4399-80ff-a83af1012adc.png"
                       alt="IELujo"
                       className="h-full w-auto object-contain"
                   />
                </div>
            </div>
        </FadeIn>

        <FadeIn delay={400}>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
            Programa Ejecutivo en <br />
            <span className="italic text-luxury-goldLight">Luxurización</span> y Creación<br />
            de Marcas de Lujo
          </h1>
        </FadeIn>

        <FadeIn delay={600}>
          <p className="text-lg md:text-xl font-light tracking-wide mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            El método cuantitativo para multiplicar tus márgenes, salir de la guerra de precios y descuentos y liderar en el mercado de lujo.
          </p>
        </FadeIn>

        <FadeIn delay={800}>
            <div className="flex flex-col md:flex-row justify-center gap-6">
                <a
                    href="#details"
                    className="bg-luxury-gold hover:bg-white hover:text-luxury-navy text-white px-10 py-4 uppercase tracking-[0.2em] text-sm transition-all duration-300 font-bold border border-luxury-gold inline-block"
                >
                    Inscríbete ahora
                </a>
                <a
                    href="#syllabus"
                    className="bg-white/10 hover:bg-white hover:text-luxury-navy text-white px-10 py-4 uppercase tracking-[0.2em] text-sm transition-all duration-300 font-bold border border-white inline-block backdrop-blur-sm"
                >
                    Ver el programa
                </a>
            </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
