import React from 'react';
import { Stethoscope, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Stethoscope className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">OdontoSmart</span>
            </div>
            <p className="text-sm">
              Transformando la gestión dental con tecnología innovadora.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#nosotros" className="hover:text-blue-400">Sobre nosotros</a></li>
              <li><a href="#" className="hover:text-blue-400">Carreras</a></li>
              <li><a href="#" className="hover:text-blue-400">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400">Prensa</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Documentación</a></li>
              <li><a href="#" className="hover:text-blue-400">Guías</a></li>
              <li><a href="#" className="hover:text-blue-400">Soporte</a></li>
              <li><a href="#" className="hover:text-blue-400">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li>contact@odontosmart.com</li>
              <li>+1 (555) 123-4567</li>
              <li className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-blue-400"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="hover:text-blue-400"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="hover:text-blue-400"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="hover:text-blue-400"><Linkedin className="h-5 w-5" /></a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} OdontoSmart. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}