import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { Award, Globe, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <FadeIn>
            <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-luxury-gold"></div>
                <img 
                    src="https://www.ielujo.com/wp-content/uploads/2025/12/IMG_20221001_090923-scaled.jpg" 
                    alt="Luxury Lecture Hall" 
                    className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-luxury-gold"></div>
            </div>
          </FadeIn>

          <div>
            <FadeIn delay={200}>
              <h2 className="text-luxury-gold uppercase tracking-widest text-sm font-bold mb-4">Instituto Europeo del Lujo</h2>
              <h3 className="font-serif text-4xl text-luxury-navy mb-8 leading-snug">
                Líder en la formación sobre el <span className="italic">Lujo en Iberoamérica</span>.
              </h3>
            </FadeIn>
            
            <FadeIn delay={300}>
              <p className="text-gray-600 mb-6 leading-relaxed font-light">
                Desde 2017, hemos certificado a más de <strong>400 alumnos en 21 ediciones</strong>. Diseñamos, organizamos e impartimos diplomados certificados sobre creación, gestión y comercialización de marcas de lujo.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed font-light">
                Este programa da respuesta a las necesidades de profesionales, empresarios y emprendedores que desean adquirir las competencias necesarias para crear, transformar, vender y gestionar con éxito marcas que no lo son en marcas de lujo, tanto artículos como servicios.
              </p>
            </FadeIn>

            <FadeIn delay={400}>
                <div className="bg-luxury-cream p-8 border-l-4 border-luxury-gold">
                    <h4 className="font-serif text-xl mb-4">Titulación Dual de Impacto</h4>
                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <Award className="text-luxury-gold flex-shrink-0" size={20} />
                            <span className="text-sm text-gray-700">Diploma oficial <strong>Universidad Anáhuac</strong> e <strong>IELujo</strong> con valor curricular.</span>
                        </li>
                        <li className="flex gap-3">
                            <Globe className="text-luxury-gold flex-shrink-0" size={20} />
                            <span className="text-sm text-gray-700">Opción a obtener el título <strong>Master</strong> al cursar este diplomado junto con Luxury Management y Luxury Sales.</span>
                        </li>
                    </ul>
                </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;