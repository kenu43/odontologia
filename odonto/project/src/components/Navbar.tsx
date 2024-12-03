import React from 'react';
import { Menu, X, Stethoscope } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
            <div className="flex items-center">
            <img src='https://cdn6.aptoide.com/imgs/5/5/7/5574dd31b9dea4d21eee5de7a61b7f8d_icon.png?w=128' alt="OdontoSmart logo" className="h-12 w-auto" />
            <span className="ml-2 text-xl font-bold text-gray-800">OdontoSmart</span>
            </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-600 hover:text-blue-600">Inicio</a>
            <a href="#nosotros" className="text-gray-600 hover:text-blue-600">Nosotros</a>
            <a href="#servicios" className="text-gray-600 hover:text-blue-600">Servicios</a>
            <a href="#app" className="text-gray-600 hover:text-blue-600">App</a>
            <a href="#planes" className="text-gray-600 hover:text-blue-600">Planes</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Contactar
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Inicio</a>
            <a href="#nosotros" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Nosotros</a>
            <a href="#servicios" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Servicios</a>
            <a href="#app" className="block px-3 py-2 text-gray-600 hover:text-blue-600">App</a>
            <a href="#planes" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Planes</a>
            <button className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Contactar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}