import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export function Comparison() {
  const features = [
    {
      category: "Experiencia del Paciente",
      items: [
        {
          feature: "Portal del paciente",
          odontosmart: true,
          others: false,
          description: "Acceso completo a historiales y citas"
        },
        {
          feature: "Recordatorios automáticos",
          odontosmart: true,
          others: true,
          description: "Sistema inteligente de notificaciones"
        },
        {
          feature: "Comunicación bidireccional",
          odontosmart: true,
          others: false,
          description: "Chat integrado con el consultorio"
        }
      ]
    },
    {
      category: "Gestión Clínica",
      items: [
        {
          feature: "Expedientes digitales",
          odontosmart: true,
          others: true,
          description: "Historiales clínicos completos"
        },
        {
          feature: "Análisis predictivo",
          odontosmart: true,
          others: false,
          description: "IA para pronósticos y tratamientos"
        },
        {
          feature: "Integración con equipos",
          odontosmart: true,
          others: false,
          description: "Compatibilidad con equipos dentales"
        }
      ]
    },
    {
      category: "Análisis y Reportes",
      items: [
        {
          feature: "Dashboard en tiempo real",
          odontosmart: true,
          others: false,
          description: "Métricas actualizadas al instante"
        },
        {
          feature: "Reportes personalizados",
          odontosmart: true,
          others: true,
          description: "Informes adaptados a necesidades"
        },
        {
          feature: "Análisis financiero",
          odontosmart: true,
          others: false,
          description: "Control completo de ingresos y gastos"
        }
      ]
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir OdontoSmart?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comparamos nuestras características con otras soluciones del mercado
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-4 bg-gray-50 p-4">
            <div className="col-span-2">
              <h3 className="font-semibold text-gray-900">Característica</h3>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-blue-600">OdontoSmart</h3>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-600">Otros</h3>
            </div>
          </div>

          {features.map((category, idx) => (
            <div key={idx} className="border-t border-gray-200">
              <div className="bg-gray-50 p-4">
                <h3 className="font-semibold text-gray-900">{category.category}</h3>
              </div>
              {category.items.map((item, index) => (
                <div key={index} className="grid grid-cols-4 p-4 border-t border-gray-200">
                  <div className="col-span-2">
                    <p className="font-medium text-gray-900">{item.feature}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                  <div className="flex justify-center">
                    {item.odontosmart ? (
                      <CheckCircle2 className="h-6 w-6 text-green-500" />
                    ) : (
                      <XCircle className="h-6 w-6 text-red-500" />
                    )}
                  </div>
                  <div className="flex justify-center">
                    {item.others ? (
                      <CheckCircle2 className="h-6 w-6 text-green-500" />
                    ) : (
                      <XCircle className="h-6 w-6 text-red-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}