import React from 'react';
import { PieChart, BarChart3, TrendingUp, Users } from 'lucide-react';

export function DashboardPreview() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Visualiza el crecimiento de tu consulta
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Accede a datos en tiempo real y toma decisiones informadas con nuestro panel de control intuitivo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Métricas clave</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <Users className="h-8 w-8 text-blue-600 mb-2" />
                <h4 className="text-2xl font-bold text-gray-900">1,234</h4>
                <p className="text-sm text-gray-600">Pacientes activos</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <TrendingUp className="h-8 w-8 text-green-600 mb-2" />
                <h4 className="text-2xl font-bold text-gray-900">89%</h4>
                <p className="text-sm text-gray-600">Tasa de retención</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <BarChart3 className="h-8 w-8 text-purple-600 mb-2" />
                <h4 className="text-2xl font-bold text-gray-900">$45k</h4>
                <p className="text-sm text-gray-600">Ingresos mensuales</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <PieChart className="h-8 w-8 text-orange-600 mb-2" />
                <h4 className="text-2xl font-bold text-gray-900">95%</h4>
                <p className="text-sm text-gray-600">Satisfacción</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              alt="Dashboard Analytics"
              className="rounded-lg shadow-md w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}