import React, { useState } from 'react';
import { FadeIn } from './ui/FadeIn';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ModuleItem } from '../types';

const modulesData: ModuleItem[] = [
  {
    id: 1,
    title: "Anatomía de una marca de lujo",
    subtopics: [
      "Porqué identificamos a una marca como de Lujo.",
      "Qué beneficios tiene crear o situar una marca en el segmento lujo.",
      "La expresión de una marca a través de sus atributos de lujo.",
      "La creación de valor a través de los intangibles."
    ]
  },
  {
    id: 2,
    title: "La psicología del consumidor del lujo",
    subtopics: [
      "Segmentación del consumidor del lujo. Análisis de valor.",
      "Preferencias de las diferentes generaciones con el lujo.",
      "Definición del perfil de mi Luxury Customer Buyer.",
      "Definición de estrategias para captar a mi LCB."
    ]
  },
  {
    id: 3,
    title: "El proceso creativo de una marca de lujo",
    subtopics: [
      "Identificación/creación del ADN de mi marca.",
      "Cómo una marca expresa que es de Lujo.",
      "Principios del diseño de una marca de Lujo.",
      "Características y valor del packaging.",
      "La importancia de la puesta en escena."
    ]
  },
  {
    id: 4,
    title: "Storytelling: Creación de Historias de Marca",
    subtopics: [
      "Identidad de marca y creación de valor.",
      "Evolucionando del storytelling al storyliving.",
      "Creación de experiencias, protocolos y comunidades.",
      "Evolución de las colaboraciones.",
      "Tropicalización de experiencias e historias."
    ]
  },
  {
    id: 5,
    title: "La sostenibilidad en la creación de marca",
    subtopics: [
      "Lujo sostenible y emprendimiento (Caso Aïny).",
      "Lideres transformacionales (Eden Diodatti, Paulina Robson).",
      "El caso Solantu y caso To'ak.",
      "Nuevos materiales (Caso BottleTop).",
      "Trazabilidad."
    ]
  },
  {
    id: 6,
    title: "Aspectos legales de la propiedad intelectual",
    subtopics: [
      "Prevención de lavado de dinero.",
      "Normativas e implicaciones sobre propiedad intelectual.",
      "Valoración de activos intangibles."
    ]
  },
  {
    id: 7,
    title: "El método SADE® para la luxurización",
    subtopics: [
      "Análisis de una marca de lujo.",
      "Construcción del Luxury Brand Value.",
      "Pilares de la experiencia de Lujo.",
      "Metodología SADE para creación de marcas."
    ]
  },
  {
    id: 8,
    title: "Fijación y estrategias de precios",
    subtopics: [
      "Principios fundamentales de fijación de precios.",
      "Estrategias de precios y su impacto.",
      "Factores a considerar.",
      "El peso de los intangibles en el precio."
    ]
  },
  {
    id: 9,
    title: "Estrategias comerciales y comunicación",
    subtopics: [
      "Comunicación diferencial en el lujo.",
      "Claves de las estrategias de marketing.",
      "Canales y estrategias de comercialización."
    ]
  },
  {
    id: 10,
    title: "Plan de Negocio para una Marca de Lujo",
    subtopics: [
      "Análisis de mercado.",
      "Modelo de negocio y estrategia de marketing.",
      "Diseño de un Plan operativo.",
      "Objetivos y proyecciones financieras.",
      "KPIs y Plan de seguimiento."
    ]
  }
];

const ModuleCard: React.FC<{ module: ModuleItem }> = ({ module }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors px-4"
      >
        <div className="flex items-center gap-4">
          <span className="text-luxury-gold font-serif text-2xl font-bold opacity-50">
            {module.id.toString().padStart(2, '0')}
          </span>
          <h3 className="text-luxury-navy font-bold text-lg md:text-xl">{module.title}</h3>
        </div>
        {isOpen ? <ChevronUp className="text-luxury-gold" /> : <ChevronDown className="text-gray-400" />}
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-14 pb-8">
          <ul className="list-disc space-y-2 text-gray-600 font-light pl-4">
            {module.subtopics.map((topic, idx) => (
              <li key={idx}><span className="text-sm">{topic}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Syllabus: React.FC = () => {
  return (
    <section id="syllabus" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <FadeIn>
            <div className="text-center mb-16">
                <h2 className="text-luxury-gold uppercase tracking-widest text-sm font-bold mb-4">Estructura Académica</h2>
                <h3 className="font-serif text-4xl text-luxury-navy mb-6">Módulos del Diplomado</h3>
                <p className="text-gray-600 font-light max-w-2xl mx-auto">
                    Una formación estructurada en 10 módulos intensivos para cubrir todas las áreas críticas del negocio del lujo.
                </p>
            </div>
        </FadeIn>

        <FadeIn delay={200}>
            <div className="bg-white shadow-xl rounded-sm border border-gray-100">
                {modulesData.map((mod) => (
                    <ModuleCard key={mod.id} module={mod} />
                ))}
            </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Syllabus;