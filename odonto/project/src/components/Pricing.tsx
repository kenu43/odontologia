import React from 'react';
import { Check, HelpCircle } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'Básico',
      price: '50,000',
      description: 'Ideal para consultorios pequeños que están comenzando',
      features: [
        'Gestión de citas básica',
        'Expedientes digitales',
        'Hasta 100 pacientes',
        'Soporte por email',
        'Actualizaciones básicas'
      ]
    },
    {
      name: 'Profesional',
      price: '120,000',
      description: 'Perfecto para consultorios en crecimiento',
      popular: true,
      features: [
        'Todo lo del plan Básico',
        'Gestión financiera',
        'Hasta 500 pacientes',
        'Soporte prioritario',
        'Reportes avanzados',
        'App móvil'
      ]
    },
    {
      name: 'Empresarial',
      price: '250,000',
      description: 'Para clínicas grandes y múltiples sucursales',
      features: [
        'Todo lo del plan Profesional',
        'Pacientes ilimitados',
        'Múltiples sucursales',
        'Soporte 24/7',
        'API personalizada',
        'Capacitación personal'
      ]
    }
  ];

  return (
    <div id="planes" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Planes Diseñados para Tu Crecimiento
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a las necesidades de tu consultorio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'border-2 border-blue-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="text-xs font-semibold bg-blue-500 text-white py-1 px-4 rounded-bl-lg">
                    Más Popular
                  </div>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-600">${plan.price}</span>
                  <span className="text-gray-600">/mes</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className={`w-full py-4 rounded-xl transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Comenzar ahora
                </button>
              </div>
              <div className="px-8 py-4 bg-gray-50 flex items-center justify-center">
                <HelpCircle className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">¿Necesitas ayuda para elegir?</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}