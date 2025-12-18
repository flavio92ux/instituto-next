"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className={`text-xl font-bold transition-colors duration-300 ${isScrolled ? 'text-blue-400' : 'text-white'}`}>
              Pequenos Sonhadores
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className={`transition-colors duration-300 ${isScrolled ? 'text-gray-600 hover:text-blue-400' : 'text-white/90 hover:text-white'}`}>
              Início
            </a>
            <a href="#servicos" className={`transition-colors duration-300 ${isScrolled ? 'text-gray-600 hover:text-blue-400' : 'text-white/90 hover:text-white'}`}>
              Serviços
            </a>
            <a href="#sobre" className={`transition-colors duration-300 ${isScrolled ? 'text-gray-600 hover:text-blue-400' : 'text-white/90 hover:text-white'}`}>
              Sobre
            </a>
            <a href="#contato" className={`transition-colors duration-300 ${isScrolled ? 'text-gray-600 hover:text-blue-400' : 'text-white/90 hover:text-white'}`}>
              Contato
            </a>
            <Button className="bg-red-600 hover:bg-red-700">Matricule-se</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Mobile Menu Button"
              className={isScrolled ? 'text-gray-600' : 'text-white'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#inicio" className="block px-3 py-2 text-gray-600 hover:text-blue-400">Início</a>
              <a href="#servicos" className="block px-3 py-2 text-gray-600 hover:text-blue-400">Serviços</a>
              <a href="#sobre" className="block px-3 py-2 text-gray-600 hover:text-blue-400">Sobre</a>
              <a href="#contato" className="block px-3 py-2 text-gray-600 hover:text-blue-400">Contato</a>
              <Button
                aria-label="Botão de matricular"
                className="w-full bg-red-600 hover:bg-red-700 mt-4"
              >Matricule-se</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}