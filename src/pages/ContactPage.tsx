import { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import Map from '../components/Map';

const ContactPage = () => {
  const [garageInfo, setGarageInfo] = useState({
    address: '123 Avenue de la Plage, 34300 Agde, France',
    phone: '+33 4 67 12 34 56',
    email: 'contact@agdemoto.fr',
    socialMedia: {
      facebook: 'https://facebook.com/agdemotogattuso',
      instagram: 'https://instagram.com/agdemotogattuso',
      youtube: 'https://youtube.com/@agdemotogattuso'
    },
    hours: {
      monday: { open: '09:00', close: '18:00', closed: false },
      tuesday: { open: '09:00', close: '18:00', closed: false },
      wednesday: { open: '09:00', close: '18:00', closed: false },
      thursday: { open: '09:00', close: '18:00', closed: false },
      friday: { open: '09:00', close: '18:00', closed: false },
      saturday: { open: '09:00', close: '17:00', closed: false },
      sunday: { open: '09:00', close: '17:00', closed: true }
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Charger les informations du garage depuis localStorage
    const storedGarageInfo = localStorage.getItem('agde-moto-garage-info');
    if (storedGarageInfo) {
      const parsed = JSON.parse(storedGarageInfo);
      setGarageInfo(parsed);
    }
  }, []);

  const formatHours = (hours: any) => {
    const days = [
      { key: 'monday', label: 'Lundi' },
      { key: 'tuesday', label: 'Mardi' },
      { key: 'wednesday', label: 'Mercredi' },
      { key: 'thursday', label: 'Jeudi' },
      { key: 'friday', label: 'Vendredi' },
      { key: 'saturday', label: 'Samedi' },
      { key: 'sunday', label: 'Dimanche' }
    ];

    return days.map(day => {
      const dayHours = hours[day.key];
      if (dayHours.closed) {
        return `${day.label}: Fermé`;
      }
      return `${day.label}: ${dayHours.open} - ${dayHours.close}`;
    }).join('\n');
  };

  return (
    <div>
      <HeroSection
        title="Contactez-Nous"
        subtitle="Nous sommes à votre disposition pour répondre à toutes vos questions"
        backgroundImage="https://images.pexels.com/photos/4300121/pexels-photo-4300121.jpeg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle
                title="Nos Coordonnées"
                subtitle="N'hésitez pas à nous contacter par téléphone ou email"
              />

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <MapPin size={24} className="text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Adresse</h3>
                    <p className="text-gray-700">{garageInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone size={24} className="text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Téléphone</h3>
                    <a 
                      href={`tel:${garageInfo.phone}`}
                      className="text-gray-700 hover:text-red-600 transition-colors text-lg font-medium"
                    >
                      {garageInfo.phone}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Appelez-nous directement pour toute question ou prise de rendez-vous
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail size={24} className="text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <a 
                      href={`mailto:${garageInfo.email}`}
                      className="text-gray-700 hover:text-red-600 transition-colors text-lg font-medium"
                    >
                      {garageInfo.email}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Envoyez-nous un email pour toute demande d'information
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock size={24} className="text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Horaires d'ouverture</h3>
                    <div className="text-gray-700 whitespace-pre-line">
                      {formatHours(garageInfo.hours)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Localisation</h3>
                <Map address={garageInfo.address} height="300px" />
              </div>
            </div>

            <div>
              <SectionTitle
                title="Comment nous contacter ?"
                subtitle="Choisissez le moyen de contact qui vous convient le mieux"
              />

              <div className="space-y-6">
                {/* Contact par téléphone */}
                <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                  <div className="flex items-center mb-4">
                    <Phone size={32} className="text-red-600 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Appelez-nous</h3>
                      <p className="text-gray-600">Pour une réponse immédiate</p>
                    </div>
                  </div>
                  <a 
                    href={`tel:${garageInfo.phone}`}
                    className="inline-flex items-center justify-center w-full py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors duration-300"
                  >
                    <Phone size={20} className="mr-2" />
                    {garageInfo.phone}
                  </a>
                  <p className="text-sm text-gray-600 mt-3">
                    Disponible pendant nos heures d'ouverture. Idéal pour les questions urgentes, 
                    prises de rendez-vous ou informations sur nos motos.
                  </p>
                </div>

                {/* Contact par email */}
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-4">
                    <Mail size={32} className="text-blue-600 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Envoyez un email</h3>
                      <p className="text-gray-600">Pour une demande détaillée</p>
                    </div>
                  </div>
                  <a 
                    href={`mailto:${garageInfo.email}`}
                    className="inline-flex items-center justify-center w-full py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-300"
                  >
                    <Mail size={20} className="mr-2" />
                    {garageInfo.email}
                  </a>
                  <p className="text-sm text-gray-600 mt-3">
                    Parfait pour les demandes détaillées, envoi de photos, 
                    ou si vous préférez avoir une trace écrite de nos échanges.
                  </p>
                </div>

                {/* Visite en magasin */}
                <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                  <div className="flex items-center mb-4">
                    <MapPin size={32} className="text-green-600 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Venez nous voir</h3>
                      <p className="text-gray-600">Pour voir nos motos en personne</p>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="font-medium text-gray-900">{garageInfo.address}</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    Rien ne vaut une visite pour voir nos motos, discuter de vos besoins 
                    et bénéficier de nos conseils personnalisés.
                  </p>
                </div>

                {/* Informations supplémentaires */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <MessageCircle size={32} className="text-gray-600 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Nos services</h3>
                      <p className="text-gray-600">Ce que nous pouvons faire pour vous</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      Vente de motos d'occasion
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      Pièces détachées et accessoires
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      Entretien et réparation
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      Conseils et expertise
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      Reprise de votre ancienne moto
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle
            title="Suivez-nous sur les réseaux sociaux"
            subtitle="Restez informé des dernières nouveautés et promotions"
            center
          />

          <div className="flex justify-center space-x-6">
            <a
              href={garageInfo.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-white text-blue-600 rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            <a
              href={garageInfo.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-white text-pink-600 rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            <a
              href={garageInfo.socialMedia.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-white text-red-600 rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;