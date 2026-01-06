import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'El Diplomado', id: 'about' },
    { name: 'Beneficios', id: 'benefits' },
    { name: 'Profesorado', id: 'faculty' },
    { name: 'Programa', id: 'syllabus' },
    { name: 'Detalles', id: 'details' },
    { name: 'Contacto', id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Representation */}
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => scrollTo('hero')}>
            <img 
                src="https://www.ielujo.com/wp-content/uploads/2025/12/0a0233b6-e5e5-4399-80ff-a83af1012adc.png" 
                alt="IELujo Logo" 
                className="h-12 w-auto object-contain" 
            />
            <div className="flex flex-col">
                <span className={`font-serif text-xl tracking-widest font-bold ${isScrolled ? 'text-luxury-navy' : 'text-white'}`}>IELujo</span>
                <span className={`text-[0.6rem] uppercase tracking-[0.2em] ${isScrolled ? 'text-luxury-gold' : 'text-gray-300'}`}>Instituto Europeo del Lujo</span>
            </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-luxury-gold ${isScrolled ? 'text-luxury-navy' : 'text-white'}`}
              >
                {link.name}
              </button>
            ))}
          </div>
          {/* Anahuac Logo */}
          <div className="pl-6">
             <img 
                src="https://www.ielujo.com/wp-content/uploads/2025/12/Logo-Qnahuac-Mexico-sin-fondo-c.png" 
                alt="Universidad Anáhuac" 
                className={`h-10 w-auto object-contain transition-all duration-300 ${!isScrolled ? 'brightness-0 invert' : ''}`} 
            />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-luxury-gold" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} className={!isScrolled ? 'text-white' : 'text-luxury-navy'} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-8 px-6 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              className="text-luxury-navy text-lg font-serif hover:text-luxury-gold text-left"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-6 border-t border-gray-100">
             <img 
                src="https://www.ielujo.com/wp-content/uploads/2025/12/Logo-Qnahuac-Mexico-sin-fondo-c.png" 
                alt="Universidad Anáhuac" 
                className="h-10 w-auto object-contain" 
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;