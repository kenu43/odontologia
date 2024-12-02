import React from 'react';
import { Star, Quote } from 'lucide-react';

export function Reviews() {
  const reviews = [
    {
      name: "Dra. María González",
      role: "Odontóloga General",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
      content: "OdontoSmart ha transformado completamente la gestión de mi consultorio. La facilidad para dar seguimiento a mis pacientes es incomparable.",
      rating: 5
    },
    {
      name: "Dr. Carlos Ruiz",
      role: "Ortodoncista",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80",
      content: "El sistema de recordatorios automáticos ha reducido significativamente las citas perdidas. Mis pacientes adoran la app.",
      rating: 5
    },
    {
      name: "Dra. Ana Martínez",
      role: "Cirujana Maxilofacial",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80",
      content: "Los reportes analíticos me han ayudado a tomar mejores decisiones para mi práctica. El soporte técnico es excelente.",
      rating: 5
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Miles de profesionales dentales confían en OdontoSmart para la gestión diaria de sus consultorios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <Quote className="h-8 w-8 text-blue-600 mb-2" />
              <p className="text-gray-600">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}