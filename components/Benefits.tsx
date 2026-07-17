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
      title: "Consultoría Individual",
      desc: "2 sesiones de mentoría uno a uno para someter tu proyecto a una revisión directiva rigurosa: evaluamos tu avance, corregimos estrategias comerciales y blindamos tu modelo con base en más de 20 proyectos reales."
    },
    {
      icon: <Video size={32} />,
      title: "Flexibilidad Total",
      desc: "50 horas de clases en video repartidas en 10 módulos, a tu ritmo y en una plataforma digital personalizada. Acceso 24/7 durante 12 meses: empiezas cuando tú decides."
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