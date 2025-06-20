import { useState } from 'react';
import { Link } from 'react-router-dom';

interface MotorcycleCardProps {
  motorcycle: any;
}

const MotorcycleCard = ({ motorcycle }: MotorcycleCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Adapter les données pour les deux formats (API et statique)
  const mainImage = motorcycle.images?.[0]?.image || motorcycle.images?.[0] || 'https://images.pexels.com/photos/2611686/pexels-photo-2611686.jpeg';
  const price = typeof motorcycle.price === 'string' ? parseFloat(motorcycle.price) : motorcycle.price;
  const isNew = motorcycle.is_new || motorcycle.isNew;
  const isFeatured = motorcycle.is_featured || motorcycle.isFeatured;
  
  return (
    <Link 
      to={`/motorcycles/${motorcycle.id}`}
      className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden" style={{ height: '240px' }}>
        <img 
          src={mainImage} 
          alt={`${motorcycle.brand} ${motorcycle.model}`}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
        />
        {isNew && (
          <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold uppercase px-3 py-1 rounded">
            Nouveau
          </div>
        )}
        {isFeatured && (
          <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold uppercase px-3 py-1 rounded">
            À la une
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-1">
          {motorcycle.brand} {motorcycle.model}
        </h3>
        
        <div className="flex justify-between items-center mb-3">
          <span className="text-red-600 font-bold text-xl">
            {price.toLocaleString('fr-FR')} €
          </span>
          <span className="text-gray-600 text-sm">
            {motorcycle.year} | {motorcycle.mileage?.toLocaleString('fr-FR')} km
          </span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
            {motorcycle.engine}
          </span>
          <span className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
            {motorcycle.power} ch
          </span>
          <span className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
            Permis {motorcycle.license}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm line-clamp-2">
          {motorcycle.description}
        </p>
      </div>
    </Link>
  );
};

export default MotorcycleCard;