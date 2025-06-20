import { Link } from 'react-router-dom';
import { Bike, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { useEffect, useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [garageInfo, setGarageInfo] = useState({
    name: 'AGDE MOTO',
    subtitle: 'Gattuso',
    address: '123 Avenue de la Plage, 34300 Agde, France',
    phone: '+33 4 67 12 34 56',
    email: 'contact@agdemoto.fr',
    socialMedia: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      youtube: 'https://youtube.com'
    },
    hours: {
      weekdays: 'Lun-Ven: 9h-12h, 14h-18h',
      saturday: 'Sam: 9h-12h, 14h-17h',
      sunday: 'Dim: Fermé'
    }
  });

  useEffect(() => {
    // Charger les informations du garage depuis localStorage
    const storedGarageInfo = localStorage.getItem('agde-moto-garage-info');
    if (storedGarageInfo) {
      const parsed = JSON.parse(storedGarageInfo);
      setGarageInfo({
        name: parsed.name || 'AGDE MOTO',
        subtitle: 'Gattuso',
        address: parsed.address || '123 Avenue de la Plage, 34300 Agde, France',
        phone: parsed.phone || '+33 4 67 12 34 56',
        email: parsed.email || 'contact@agdemoto.fr',
        socialMedia: {
          facebook: parsed.socialMedia?.facebook || 'https://facebook.com',
          instagram: parsed.socialMedia?.instagram || 'https://instagram.com',
          youtube: parsed.socialMedia?.youtube || 'https://youtube.com'
        },
        hours: {
          weekdays: 'Lun-Ven: 9h-12h, 14h-18h',
          saturday: 'Sam: 9h-12h, 14h-17h',
          sunday: 'Dim: Fermé'
        }
      });
    }
  }, []);
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Bike size={24} className="text-red-600" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">{garageInfo.name}</span>
                <span className="text-sm italic text-red-600">{garageInfo.subtitle}</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Votre spécialiste moto à Agde depuis 2005. Vente de motos d'occasion et pièces détachées sélectionnées avec soin.
            </p>
            <div className="flex space-x-4">
              <a href={garageInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href={garageInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href={garageInfo.socialMedia.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Accueil</Link>
              </li>
              <li>
                <Link to="/motorcycles" className="text-gray-400 hover:text-white transition-colors">Motos</Link>
              </li>
              <li>
                <Link to="/parts" className="text-gray-400 hover:text-white transition-colors">Pièces Détachées</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-red-600 mt-1 flex-shrink-0" />
                <span className="text-gray-400">{garageInfo.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-red-600 flex-shrink-0" />
                <span className="text-gray-400">{garageInfo.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-red-600 flex-shrink-0" />
                <span className="text-gray-400">{garageInfo.email}</span>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-gray-400">
                <span className="font-semibold">Horaires d'ouverture:</span><br />
                {garageInfo.hours.weekdays}<br />
                {garageInfo.hours.saturday}<br />
                {garageInfo.hours.sunday}
              </p>
            </div>
          </div>

          {/* Nouvelle colonne pour la carte */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Notre localisation</h3>
            <div className="rounded-lg overflow-hidden shadow-md" style={{ height: '200px' }}>
              <iframe
                title="Agde Moto Gattuso - Localisation"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.openstreetmap.org/export/embed.html?bbox=3.4641164,43.314315,3.4666913,43.3143111&layer=mapnik&marker=43.3143111,3.4666913"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="mt-2">
              <a
                href="https://www.google.fr/maps/place/Agde+moto/@43.314315,3.4641164,17z/data=!3m1!4b1!4m6!3m5!1s0x12b13cf8ec516617:0xad96218c6c6471ea!8m2!3d43.3143111!4d3.4666913!16s%2Fg%2F11gfm8phlk?hl=fr&entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-red-600 hover:text-red-700 transition-colors"
              >
                <MapPin size={14} className="mr-1" />
                Ouvrir dans Google Maps
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Agde Moto Gattuso. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;