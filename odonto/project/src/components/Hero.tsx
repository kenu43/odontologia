import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div id="inicio" className="pt-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Modernizaaaaaa tu consultorio dental con OdontoSmart
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Software integral para la gestión de consultorios odontológicos. 
              Automatiza tus procesos, mejora la experiencia de tus pacientes y 
              haz crecer tu práctica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center">
                Comenzar ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50">
                Ver demo
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80"
              alt="Consultorio dental moderno"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}