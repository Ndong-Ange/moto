import { useEffect, useRef } from 'react';

interface MapProps {
  address: string;
  height?: string;
}

const Map = ({ address, height = '400px' }: MapProps) => {
  const mapRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    // Coordonnées spécifiques d'Agde Moto
    const agdeMotoBounds = "3.4641164,43.314315,3.4666913,43.3143111";
    const agdeMotoMarker = "43.3143111,3.4666913";
    
    if (mapRef.current) {
      // Utiliser OpenStreetMap avec les coordonnées exactes d'Agde Moto
      mapRef.current.src = `https://www.openstreetmap.org/export/embed.html?bbox=${agdeMotoBounds}&layer=mapnik&marker=${agdeMotoMarker}`;
    }
  }, [address]);
  
  return (
    <div className="rounded-lg overflow-hidden shadow-md" style={{ height }}>
      <iframe
        ref={mapRef}
        title="Agde Moto Gattuso - Localisation"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
      
      {/* Lien vers Google Maps pour ouvrir dans l'application */}
      <div className="mt-2">
        <a
          href="https://www.google.fr/maps/place/Agde+moto/@43.314315,3.4641164,17z/data=!3m1!4b1!4m6!3m5!1s0x12b13cf8ec516617:0xad96218c6c6471ea!8m2!3d43.3143111!4d3.4666913!16s%2Fg%2F11gfm8phlk?hl=fr&entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-red-600 hover:text-red-700 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          Ouvrir dans Google Maps
        </a>
      </div>
    </div>
  );
};

export default Map;