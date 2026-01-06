import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { Gem, TrendingUp, UserCheck, Video } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Gem size={32} />,
      title: "ADN de Lujo & Identidad",
      desc: "Transformarás marcas existentes o Crearás nuevas marcas de lujo con identidad poderosa que enamorarán al consumidor VIP. Dominarás técnicas de storytelling y comercialización para elevar la percepción de valor por encima del precio."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Método Estructurado",
      desc: "Creación de Marcas y Luxurización de Marcas aplicando el método cuantitativo SADE®. Transforma marcas premium en marcas de lujo, atrayendo clientes exclusivos y maximizando su valor en el mercado."
    },
    {
      icon: <UserCheck size={32} />,
      title: "Mentorías Individualizadas",
      desc: "Te guiaremos para desarrollar tu plan de negocio exitoso a través de una guia de creación y transformación acompañada por el consejo experto de un mentor."
    },
    {
      icon: <Video size={32} />,
      title: "Flexibilidad & Networking",
      desc: "9 Clases  + acceso 24/7 a grabaciones. Networking poderoso con alumnos y profesores para alcanzar tus sueños."
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-luxury-navy text-white">
      <div className="container mx-auto px-6">
        <FadeIn>
            <div className="text-center mb-16">
                <h2 className="text-luxury-gold uppercase tracking-widest text-sm font-bold mb-4">Por qué elegir este programa</h2>
                <h3 className="font-serif text-4xl mb-6">Beneficios Transformadores</h3>
                <div className="w-24 h-1 bg-luxury-gold mx-auto"></div>
            </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <div className="p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300 h-full">
                <div className="text-luxury-gold mb-6">{item.icon}</div>
                <h4 className="font-serif text-xl mb-4">{item.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={500}>
            <div className="mt-16 text-center">
                <p className="text-xl font-serif italic text-luxury-goldLight">
                    "Valoración media de 9.46 /10 en cuestionario anónimo por nuestros alumnos."
                </p>
            </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Benefits;