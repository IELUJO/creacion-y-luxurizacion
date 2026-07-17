import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { Award, BookOpen, Clock, FileText, UserCheck, Video } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <FadeIn>
            <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-luxury-gold"></div>
                <img
                    src="/instituto.jpg"
                    alt="Artesano puliendo una pieza de alta joyería"
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
                Desde 2017, hemos certificado a más de <strong>450 alumnos en 22 ediciones</strong>. Diseñamos, organizamos e impartimos cursos y diplomados sobre creación, transformación, gestión y comercialización de marcas de lujo.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed font-light">
                Este es el <strong>primer curso monográfico</strong> dedicado a crear marcas de lujo y transformar marcas existentes, logrando que el cliente reconozca y pague por un verdadero lujo. Se apoya en nuestra <strong>Metodología SADE®</strong>, que combina rigor académico, base cuantitativa y aplicación directa a la rentabilidad de tu marca. Más de 20 proyectos exitosos avalan esta ruta.
              </p>
            </FadeIn>

            <FadeIn delay={400}>
                <div className="bg-luxury-cream p-8 border-l-4 border-luxury-gold">
                    <h4 className="font-serif text-xl mb-4">¿Qué incluye esta certificación?</h4>
                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <Video className="text-luxury-gold flex-shrink-0" size={20} />
                            <span className="text-sm text-gray-700"><strong>50 horas de clases en video</strong>: 10 módulos estratégicos a tu ritmo en una plataforma digital personalizada.</span>
                        </li>
                        <li className="flex gap-3">
                            <BookOpen className="text-luxury-gold flex-shrink-0" size={20} />
                            <span className="text-sm text-gray-700"><strong>Guía Digital de Implementación IELujo</strong>: herramienta paso a paso basada en la metodología SADE® para aplicar cada concepto a tu realidad operativa.</span>
                        </li>
                        <li className="flex gap-3">
                            <FileText className="text-luxury-gold flex-shrink-0" size={20} />
                            <span className="text-sm text-gray-700"><strong>Material académico en PDF</strong>: contenidos teóricos y directivos descargables.</span>
                        </li>
                        <li className="flex gap-3">
                            <UserCheck className="text-luxury-gold flex-shrink-0" size={20} />
                            <span className="text-sm text-gray-700"><strong>2 sesiones de consultoría y mentoría individual</strong>: acompañamiento uno a uno con expertos para revisar tu avance, cuestionar valoraciones y validar tu plan de negocio de lujo.</span>
                        </li>
                        <li className="flex gap-3">
                            <Award className="text-luxury-gold flex-shrink-0" size={20} />
                            <span className="text-sm text-gray-700"><strong>Certificación del Instituto Europeo del Lujo</strong>: primera en el mundo especializada en procesos de luxurización.</span>
                        </li>
                        <li className="flex gap-3">
                            <Clock className="text-luxury-gold flex-shrink-0" size={20} />
                            <span className="text-sm text-gray-700"><strong>Acceso total por 12 meses</strong>: disponibilidad 24/7 para consultar la plataforma.</span>
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
