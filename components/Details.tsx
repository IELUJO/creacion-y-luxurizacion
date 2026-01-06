import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { Calendar, Clock, DollarSign, MapPin } from 'lucide-react';

const Details: React.FC = () => {
  return (
    <section id="details" className="py-24 bg-luxury-navy text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-luxury-gold opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 opacity-5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <FadeIn>
            <h2 className="font-serif text-4xl mb-8 leading-tight">
              Detalles del <br /><span className="text-luxury-gold">Diplomado</span>
            </h2>
            <p className="text-gray-300 font-light mb-8 text-lg">
                Una experiencia educativa exclusiva, diseñada para que el alumno salga con su plan de negocio validado bajo el brazo. Listo para ponerse en marcha y alcanzar su sueño.
            </p>
            
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <Calendar className="text-luxury-gold mt-1" />
                    <div>
                        <h4 className="font-bold text-lg">Fechas</h4>
                        <p className="text-gray-400 font-light">Inicio: 30 de mayo 2026</p>
                        <p className="text-gray-400 font-light">Final: 22 de agosto 2026</p>
                        <p className="text-gray-400 text-sm mt-1 italic">9 sábados de 8:00 A.M. a 3:00 P.M. más 2 sesiones individuales de mentoring de 1 h</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <Clock className="text-luxury-gold mt-1" />
                    <div>
                        <h4 className="font-bold text-lg">Duración & Modalidad</h4>
                        <p className="text-gray-400 font-light">80 horas</p>
                        <p className="text-gray-400 font-light">Online en vivo (9 sesiones + 2 mentorías)</p>
                    </div>
                </div>

                 <div className="flex items-start gap-4">
                    <DollarSign className="text-luxury-gold mt-1" />
                    <div>
                        <h4 className="font-bold text-lg">Inversión</h4>
                        <p className="text-gray-400 font-light">$ 60,000 MXN (IVA incluido)</p>
                        <p className="text-xs text-luxury-goldLight mt-1">* Facilidades de pago disponibles</p>
                    </div>
                </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 text-center">
                <h3 className="font-serif text-2xl mb-6">Reserva tu lugar</h3>
                <p className="text-sm text-gray-300 mb-8 font-light">
                    El cupo es limitado para garantizar la calidad de las mentorías personalizadas.
                </p>
                <a 
                    href="https://wa.me/525561039849?text=les%20solicito%20m%C3%A1s%20informaci%C3%B3n%20del%20Diplomado%20Creaci%C3%B3n%20de%20marcas%20de%20Lujo%20y%20Procesos%20de%20Luxurizaci%C3%B3n%20por%20este%20medio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-luxury-gold hover:bg-white hover:text-luxury-navy text-white font-bold py-4 px-8 uppercase tracking-widest transition-all duration-300 mb-4"
                >
                    Contactar Admisiones
                </a>
                <p className="text-xs text-gray-500">
                    Certificación oficial U. Anáhuac e IELujo
                </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Details;