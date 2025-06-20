import { useState } from 'react';
import { Send, Phone, Mail } from 'lucide-react';

interface ContactFormProps {
  motorcycleId?: string;
  motorcycleName?: string;
}

const ContactForm = ({ motorcycleId, motorcycleName }: ContactFormProps) => {
  // Informations de contact du garage (peuvent être modifiées via l'admin)
  const [garageInfo, setGarageInfo] = useState(() => {
    const stored = localStorage.getItem('agde-moto-garage-info');
    if (stored) {
      const parsed = JSON.parse(stored);
      return {
        phone: parsed.phone || '+33 4 67 12 34 56',
        email: parsed.email || 'contact@agdemoto.fr'
      };
    }
    return {
      phone: '+33 4 67 12 34 56',
      email: 'contact@agdemoto.fr'
    };
  });

  const subject = motorcycleName 
    ? `Demande d'information - ${motorcycleName}` 
    : 'Demande d\'information';

  const emailBody = motorcycleName 
    ? `Bonjour,\n\nJe suis intéressé(e) par la moto ${motorcycleName}.\n\nMerci de me contacter pour plus d'informations.\n\nCordialement,`
    : `Bonjour,\n\nJe souhaiterais obtenir des informations sur vos services.\n\nMerci de me contacter.\n\nCordialement,`;

  return (
    <div className="space-y-6">
      {motorcycleName && (
        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <p className="text-gray-700">
            Vous êtes intéressé(e) par : <span className="font-semibold">{motorcycleName}</span>
          </p>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Contactez-nous directement
        </h3>
        <p className="text-gray-600">
          Choisissez le moyen de contact qui vous convient le mieux
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Contact par téléphone */}
        <div className="bg-red-50 p-6 rounded-lg border border-red-100 text-center">
          <Phone size={32} className="text-red-600 mx-auto mb-4" />
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Appelez-nous</h4>
          <p className="text-sm text-gray-600 mb-4">
            Pour une réponse immédiate
          </p>
          <a 
            href={`tel:${garageInfo.phone}`}
            className="inline-flex items-center justify-center w-full py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors duration-300"
          >
            <Phone size={18} className="mr-2" />
            {garageInfo.phone}
          </a>
        </div>

        {/* Contact par email */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 text-center">
          <Mail size={32} className="text-blue-600 mx-auto mb-4" />
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Envoyez un email</h4>
          <p className="text-sm text-gray-600 mb-4">
            Pour une demande détaillée
          </p>
          <a 
            href={`mailto:${garageInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`}
            className="inline-flex items-center justify-center w-full py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            <Mail size={18} className="mr-2" />
            {garageInfo.email}
          </a>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-md">
        <p className="text-sm text-gray-600 text-center">
          <strong>Horaires d'ouverture :</strong><br />
          Lun-Ven: 9h-12h, 14h-18h | Sam: 9h-12h, 14h-17h | Dim: Fermé
        </p>
      </div>
    </div>
  );
};

export default ContactForm;