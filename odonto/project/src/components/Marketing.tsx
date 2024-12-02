import React from 'react';
import { TrendingUp, Target, Award, DollarSign, LineChart, Zap } from 'lucide-react';

export function Marketing() {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: 'Crecimiento Comprobado',
      description: 'Incremento promedio del 40% en nuevos pacientes durante el primer año'
    },
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      title: 'Marketing Digital Integrado',
      description: 'Herramientas de captación y fidelización de pacientes automatizadas'
    },
    {
      icon: <DollarSign className="h-8 w-8 text-blue-600" />,
      title: 'ROI Garantizado',
      description: 'Retorno de inversión promedio de 300% en los primeros 6 meses'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Potencia el Crecimiento de tu Consulta
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Destaca en el mercado dental con nuestras herramientas de marketing y análisis
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Diferenciación Competitiva
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Award className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <p className="text-gray-600">
                  <span className="font-semibold">Experiencia Premium:</span> Ofrece a tus pacientes 
                  una experiencia digital de primera clase con recordatorios automáticos, 
                  portal del paciente y comunicación bidireccional.
                </p>
              </li>
              <li className="flex items-start">
                <LineChart className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <p className="text-gray-600">
                  <span className="font-semibold">Análisis Predictivo:</span> Anticipa tendencias 
                  y optimiza tu práctica con nuestro sistema de análisis avanzado.
                </p>
              </li>
              <li className="flex items-start">
                <Zap className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <p className="text-gray-600">
                  <span className="font-semibold">Automatización Inteligente:</span> Reduce costos 
                  operativos hasta en un 30% con procesos automatizados.
                </p>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Tracción y Resultados
            </h3>
            <div className="space-y-6">
              <div className="relative pt-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-100">
                      Satisfacción del Cliente
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      98%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
                  <div className="w-[98%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
                </div>
              </div>

              <div className="relative pt-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-100">
                      Retención de Pacientes
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-green-600">
                      95%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-100">
                  <div className="w-[95%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600"></div>
                </div>
              </div>

              <div className="relative pt-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-100">
                      Ahorro de Tiempo
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-purple-600">
                      85%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-100">
                  <div className="w-[85%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}