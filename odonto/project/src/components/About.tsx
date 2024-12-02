import React from 'react';

export function About() {
  return (
    <div id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
              alt="Equipo OdontoSmart"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Transformando la gestión dental
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              En OdontoSmart, entendemos los desafíos únicos que enfrentan los 
              consultorios dentales modernos. Nuestra misión es proporcionar 
              soluciones tecnológicas innovadoras que simplifiquen la gestión 
              administrativa y mejoren la experiencia tanto para profesionales 
              como para pacientes.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-2xl font-bold text-blue-600 mb-2">5000+</h4>
                <p className="text-gray-600">Consultorios confían en nosotros</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-blue-600 mb-2">98%</h4>
                <p className="text-gray-600">Satisfacción del cliente</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-blue-600 mb-2">24/7</h4>
                <p className="text-gray-600">Soporte técnico</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-blue-600 mb-2">10+</h4>
                <p className="text-gray-600">Años de experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}