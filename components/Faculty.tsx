import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { Professor } from '../types';

const professors: Professor[] = [
  {
    name: "Frank Sánchez",
    role: "CEO",
    company: "Instituto Europeo del Lujo",
    image: "https://www.ielujo.com/wp-content/uploads/2019/07/1685117491039.jpg",
    link: "https://www.linkedin.com/in/franks%C3%A1nchezielujoluxurymexico/"
  },
  {
    name: "Ricardo Domingo Nicolás",
    role: "Jewellery and Art Director",
    company: "ESTUDIO RICARDOMINGO",
    image: "https://www.ielujo.com/wp-content/uploads/2024/12/Ricardo-Domingo-Nicolas.jpeg",
    link: "https://www.linkedin.com/in/ricardo-domingo-nicol%C3%A1s-90416b66/"
  },
  {
    name: "Amparo de la Concepción",
    role: "Directora Académica",
    company: "Instituto Europeo del Lujo",
    image: "https://www.ielujo.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-07-at-11.10.57-e1691428317980.jpeg",
    link: "https://www.linkedin.com/in/amparodelaconcepcion/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B09oy9Gj0QreHcIRubMfrCQ%3D%3D"
  },
  {
    name: "Annalucia Fasson Llosa",
    role: "Socia Senior del área corporativa & digital investments y jefe del área de fashion law, luxury y retail",
    company: "Muñiz Olaya Meléndez Castro Ono & Herrera Abogados PERÚ",
    image: "https://www.ielujo.com/wp-content/uploads/2026/01/analuciafason1.jpg",
    link: "https://www.linkedin.com/in/annalucia-fasson-llosa-49808921/"
  },
  {
    name: "Sergio Bernal Coronado",
    role: "Wholesale & Retail Director LATAM",
    company: "Giorgio Armani",
    image: "https://www.ielujo.com/wp-content/uploads/2023/08/Sergio-Bernal.jpg",
    link: "https://www.linkedin.com/in/sergio-alejandro-bernal-coronado-a0998588/"
  },
  {
    name: "Miguel Angel Gardetti",
    role: "Director",
    company: "Centro de Estudios para el Lujo Sustentable",
    image: "https://www.ielujo.com/wp-content/uploads/2021/07/foto_gardetti_0.jpeg",
    link: "https://www.linkedin.com/in/miguel-angel-gardetti-ph-d-992a3316/"
  }
];

const Faculty: React.FC = () => {
  return (
    <section id="faculty" className="py-24 bg-luxury-cream">
      <div className="container mx-auto px-6">
        <FadeIn>
            <div className="mb-12">
                <h2 className="text-luxury-navy font-serif text-4xl mb-4">Profesorado de Élite</h2>
                <div className="h-[2px] w-20 bg-luxury-gold"></div>
            </div>
        </FadeIn>

        {/* Updated grid to 3 columns on large screens to fit 6 items in 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professors.map((prof, idx) => (
            <FadeIn key={idx} delay={idx * 50}>
              <div className="group bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                {prof.link ? (
                  <a 
                    href={prof.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-luxury-gold/20 group-hover:border-luxury-gold transition-colors flex-shrink-0 cursor-pointer"
                    title={`Ver perfil de ${prof.name}`}
                  >
                    <img src={prof.image} alt={prof.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </a>
                ) : (
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-luxury-gold/20 group-hover:border-luxury-gold transition-colors flex-shrink-0">
                    <img src={prof.image} alt={prof.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                )}
                
                <h3 className="font-serif text-lg font-bold text-luxury-navy mb-1">{prof.name}</h3>
                <p className="text-xs uppercase tracking-wider text-luxury-gold mb-2">{prof.role}</p>
                <p className="text-sm text-gray-500 font-light italic mt-auto">{prof.company}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;