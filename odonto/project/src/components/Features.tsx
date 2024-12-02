import React from 'react';
import { Calendar, Users, BarChart, Shield, Cloud, MessageSquare } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-blue-600" />,
      title: 'Gestión de Citas',
      description: 'Sistema inteligente de programación y recordatorios automáticos'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Expedientes Digitales',
      description: 'Historiales clínicos completos y seguros de tus pacientes'
    },
    {
      icon: <BarChart className="h-8 w-8 text-blue-600" />,
      title: 'Análisis y Reportes',
      description: 'Estadísticas detalladas para la toma de decisiones'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Seguridad Garantizada',
      description: 'Protección de datos con los más altos estándares'
    },
    {
      icon: <Cloud className="h-8 w-8 text-blue-600" />,
      title: 'Respaldo en la Nube',
      description: 'Acceso a tu información desde cualquier dispositivo'
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
      title: 'Comunicación Integrada',
      description: 'Chat y notificaciones con pacientes y equipo'
    }
  ];

  return (
    <div id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Características Principales
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesitas para gestionar tu consultorio dental de manera eficiente
            en una sola plataforma.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}