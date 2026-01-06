import React from 'react';
import { Mail, MessageCircle, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const whatsappMessage = encodeURIComponent("Deseo más información sobre programa, profesores y facilidades de pago del Diplomado Creación de Marcas de Lujo y Procesos de Luxurización que comienza el 30 de mayo de 2026");
  
  const emailSubject = encodeURIComponent("Información sobre el Diplomado Creación de Marcas de Lujo y Procesos de Luxurización");
  const emailBody = encodeURIComponent("Deseo más información sobre programa, profesores y facilidades de pago del Diplomado Creación de Marcas de Lujo y Procesos de Luxurización que comienza el 30 de mayo de 2026");

  return (
    <footer id="contact" className="bg-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center mb-16">
            <div className="mb-8 p-4 border-2 border-luxury-navy/10 rounded-full flex items-center gap-4 bg-white">
               <img 
                 src="https://www.ielujo.com/wp-content/uploads/2025/12/Logo-completo-IELujo.png" 
                 alt="IELujo Logo" 
                 className="h-10 w-auto object-contain"
               />
               <span className="font-serif text-3xl font-bold text-luxury-navy tracking-widest">IELujo</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-serif text-luxury-navy mb-8">
                Crea o Transforma una marca de Lujo
            </h2>

            <div className="flex flex-col md:flex-row gap-8 mt-8">
                <a 
                  href={`https://wa.me/525561039849?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-sm transition-colors shadow-lg"
                >
                    <MessageCircle size={24} />
                    <span className="font-bold tracking-wide">+52 55 6103 9849</span>
                </a>
                
                <a 
                    href={`mailto:contacto@ielujo.com?subject=${emailSubject}&body=${emailBody}`}
                    className="flex items-center gap-3 bg-luxury-navy hover:bg-black text-white px-8 py-4 rounded-sm transition-colors shadow-lg"
                >
                    <Mail size={24} />
                    <span className="font-bold tracking-wide">contacto@ielujo.com</span>
                </a>
            </div>
             <a href="https://www.ielujo.com" className="mt-6 flex items-center gap-2 text-gray-500 hover:text-luxury-gold transition-colors">
                <Globe size={16} />
                <span>www.ielujo.com</span>
            </a>
        </div>

        <div className="border-t border-gray-100 pt-8 flex justify-center items-center text-sm text-gray-400 font-light">
            <p>&copy; 2026 Instituto Europeo del Lujo - IELujo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;