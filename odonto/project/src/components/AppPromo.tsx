import React from 'react';
import { Apple, PlayCircle, Stethoscope, ClipboardCheck, UserCheck } from 'lucide-react';

export function AppPromo() {
  return (
    <div id="app" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Tu Clínica Dental en tu Bolsillo
            </h2>
            <p className="text-lg mb-8 text-blue-100">
              Gestiona tu consultorio desde cualquier lugar con nuestra aplicación móvil. 
              Accede a historiales clínicos, agenda citas y monitorea el progreso de tus 
              pacientes en tiempo real.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Stethoscope className="h-6 w-6 mr-3 text-blue-300" />
                <span>Seguimiento de tratamientos en tiempo real</span>
              </div>
              <div className="flex items-center">
                <ClipboardCheck className="h-6 w-6 mr-3 text-blue-300" />
                <span>Historial clínico digital completo</span>
              </div>
              <div className="flex items-center">
                <UserCheck className="h-6 w-6 mr-3 text-blue-300" />
                <span>Portal del paciente integrado</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
                <Apple className="h-6 w-6 mr-2" />
                App Store
              </button>
              <button className="flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
                <PlayCircle className="h-6 w-6 mr-2" />
                Play Store
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
              alt="App OdontoSmart en uso"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}