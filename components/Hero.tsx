import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[800px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://www.ielujo.com/wp-content/uploads/2025/12/IMG-20250906-WA0009.jpg" 
          alt="Luxury Architecture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-luxury-navy/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy/90 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <FadeIn delay={200}>
            <div className="flex justify-center items-center gap-8 mb-8 opacity-90">
                {/* Logo IELujo */}
                <div className="h-20 w-auto flex items-center justify-center">
                   <img 
                       src="https://www.ielujo.com/wp-content/uploads/2025/12/0a0233b6-e5e5-4399-80ff-a83af1012adc.png" 
                       alt="IELujo" 
                       className="h-full w-auto object-contain"
                   />
                </div>
                
                {/* Vertical Separator */}
                <div className="h-12 w-[1px] bg-white/40"></div>
                
                {/* Logo Anahuac */}
                <div className="h-14 w-auto flex items-center justify-center">
                    <img 
                       src="https://www.ielujo.com/wp-content/uploads/2025/12/Logo-Qnahuac-Mexico-sin-fondo-c.png" 
                       alt="Universidad Anáhuac" 
                       className="h-full w-auto object-contain brightness-0 invert"
                   />
                </div>
            </div>
        </FadeIn>

        <FadeIn delay={400}>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
            Diplomado Creación de <br />
            <span className="italic text-luxury-goldLight">Marcas de Lujo</span> y<br />
            Procesos de Luxurización
          </h1>
        </FadeIn>

        <FadeIn delay={600}>
          <p className="text-xl md:text-2xl font-light tracking-wide mb-10 text-gray-200">
            2ª generación 2026
          </p>
        </FadeIn>

        <FadeIn delay={800}>
            <div className="flex flex-col md:flex-row justify-center gap-6">
                <a 
                    href="https://educacioncontinua.anahuac.mx/products/creacion-de-marcas-de-lujo-y-procesos-de-luxurizacion?variant=51662885028150"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-luxury-gold hover:bg-white hover:text-luxury-navy text-white px-10 py-4 uppercase tracking-[0.2em] text-sm transition-all duration-300 font-bold border border-luxury-gold inline-block"
                >
                    Universidad Anáhuac
                </a>
                <a 
                    href="https://www.ielujo.com/pf/creacion-de-marcas-de-lujo-y-procesos-de-luxurizacion/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-luxury-navy hover:text-white text-luxury-navy px-10 py-4 uppercase tracking-[0.2em] text-sm transition-all duration-300 font-bold border border-white inline-block shadow-lg hover:shadow-none"
                >
                    IELujo
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