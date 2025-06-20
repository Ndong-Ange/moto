import { Motorcycle } from '../types/Motorcycle';
import { Part } from '../types/Part';

// Données statiques pour les motos
export const staticMotorcycles: Motorcycle[] = [
  {
    id: '1',
    brand: 'Yamaha',
    model: 'MT-07',
    year: 2022,
    price: 6999,
    mileage: 3500,
    engine: '689 cc',
    power: 73,
    license: 'A2',
    color: 'Noir',
    description: 'Yamaha MT-07 en excellent état, entretien récent effectué, pneus neufs, aucun frais à prévoir. Moto très agréable à conduire, idéale pour débuter ou pour un usage quotidien.',
    features: [
      'ABS',
      'Éclairage LED',
      'Système d\'échappement Akrapovic',
      'Protection moteur',
      'Selle confort'
    ],
    images: [
      'https://images.pexels.com/photos/2611686/pexels-photo-2611686.jpeg',
      'https://images.pexels.com/photos/163210/motorcycles-race-helmets-pilots-163210.jpeg',
      'https://images.pexels.com/photos/595807/pexels-photo-595807.jpeg',
      'https://images.pexels.com/photos/40904/bmw-motorcycle-motorcycles-bike-40904.jpeg'
    ],
    isNew: true,
    isFeatured: true,
    createdAt: '2023-05-15'
  },
  {
    id: '2',
    brand: 'Honda',
    model: 'CB650R',
    year: 2021,
    price: 7499,
    mileage: 8200,
    engine: '649 cc',
    power: 95,
    license: 'A',
    color: 'Rouge',
    description: 'Honda CB650R Neo Sports Cafe en parfait état. Entretien suivi chez concessionnaire Honda. Moto polyvalente et fiable avec un look néo-rétro très réussi.',
    features: [
      'ABS',
      'Contrôle de traction HSTC',
      'Fourche Showa SFF-BP',
      'Éclairage full LED',
      'Tableau de bord LCD'
    ],
    images: [
      'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg',
      'https://images.pexels.com/photos/163210/motorcycles-race-helmets-pilots-163210.jpeg',
      'https://images.pexels.com/photos/595807/pexels-photo-595807.jpeg',
      'https://images.pexels.com/photos/40904/bmw-motorcycle-motorcycles-bike-40904.jpeg'
    ],
    isFeatured: true,
    createdAt: '2023-04-20'
  },
  {
    id: '3',
    brand: 'Kawasaki',
    model: 'Z900',
    year: 2020,
    price: 8299,
    mileage: 12500,
    engine: '948 cc',
    power: 125,
    license: 'A',
    color: 'Vert',
    description: 'Kawasaki Z900 en très bon état, révision complète récente, pneus neufs. Roadster puissant et réactif, position de conduite confortable pour la route.',
    features: [
      'ABS',
      'Modes de conduite',
      'Contrôle de traction KTRC',
      'Éclairage LED',
      'Tableau de bord TFT couleur',
      'Connectivité smartphone'
    ],
    images: [
      'https://images.pexels.com/photos/819805/pexels-photo-819805.jpeg',
      'https://images.pexels.com/photos/163210/motorcycles-race-helmets-pilots-163210.jpeg',
      'https://images.pexels.com/photos/595807/pexels-photo-595807.jpeg',
      'https://images.pexels.com/photos/40904/bmw-motorcycle-motorcycles-bike-40904.jpeg'
    ],
    createdAt: '2023-03-10'
  },
  {
    id: '4',
    brand: 'BMW',
    model: 'R 1250 GS',
    year: 2021,
    price: 16500,
    mileage: 15800,
    engine: '1254 cc',
    power: 136,
    license: 'A',
    color: 'Blanc',
    description: 'BMW R 1250 GS, la référence des trails routiers. Parfaitement entretenue, équipée de nombreuses options, prête pour les grandes aventures.',
    features: [
      'ABS Pro',
      'Dynamic ESA',
      'Modes de conduite Pro',
      'Shifter Pro',
      'Valises latérales',
      'Top case',
      'GPS Navigateur',
      'Selle chauffante',
      'Poignées chauffantes'
    ],
    images: [
      'https://images.pexels.com/photos/2393821/pexels-photo-2393821.jpeg',
      'https://images.pexels.com/photos/163210/motorcycles-race-helmets-pilots-163210.jpeg',
      'https://images.pexels.com/photos/595807/pexels-photo-595807.jpeg',
      'https://images.pexels.com/photos/40904/bmw-motorcycle-motorcycles-bike-40904.jpeg'
    ],
    isFeatured: true,
    createdAt: '2023-02-15'
  },
  {
    id: '5',
    brand: 'Ducati',
    model: 'Monster 937',
    year: 2022,
    price: 11999,
    mileage: 4200,
    engine: '937 cc',
    power: 111,
    license: 'A',
    color: 'Rouge',
    description: 'Ducati Monster 937, le roadster iconique dans sa dernière évolution. État impeccable, son caractéristique Ducati, performances de haut niveau.',
    features: [
      'ABS Cornering',
      'Contrôle de traction DTC',
      'Modes de conduite',
      'Quickshifter up/down',
      'Tableau de bord TFT couleur',
      'Éclairage full LED'
    ],
    images: [
      'https://images.pexels.com/photos/1045535/pexels-photo-1045535.jpeg',
      'https://images.pexels.com/photos/163210/motorcycles-race-helmets-pilots-163210.jpeg',
      'https://images.pexels.com/photos/595807/pexels-photo-595807.jpeg',
      'https://images.pexels.com/photos/40904/bmw-motorcycle-motorcycles-bike-40904.jpeg'
    ],
    isNew: true,
    createdAt: '2023-06-05'
  },
  {
    id: '6',
    brand: 'Triumph',
    model: 'Street Triple RS',
    year: 2021,
    price: 10999,
    mileage: 9800,
    engine: '765 cc',
    power: 123,
    license: 'A',
    color: 'Gris',
    description: 'Triumph Street Triple RS, le roadster sportif britannique par excellence. Équipée de composants haut de gamme, cette moto offre des performances exceptionnelles.',
    features: [
      'ABS Cornering',
      'Contrôle de traction',
      '5 modes de conduite',
      'Quickshifter bidirectionnel',
      'Suspension Öhlins',
      'Freins Brembo M50',
      'Tableau de bord TFT couleur'
    ],
    images: [
      'https://images.pexels.com/photos/258092/pexels-photo-258092.jpeg',
      'https://images.pexels.com/photos/163210/motorcycles-race-helmets-pilots-163210.jpeg',
      'https://images.pexels.com/photos/595807/pexels-photo-595807.jpeg',
      'https://images.pexels.com/photos/40904/bmw-motorcycle-motorcycles-bike-40904.jpeg'
    ],
    createdAt: '2023-01-20'
  }
];

// Données statiques pour les pièces détachées
export const staticParts: Part[] = [
  {
    id: '1',
    name: 'Pot d\'échappement Akrapovic Slip-On',
    category: 'Échappement',
    brand: 'Akrapovic',
    compatibleModels: 'Yamaha MT-07, MT-09',
    price: 450,
    stock: 3,
    condition: 'new',
    description: 'Pot d\'échappement sport en titane Akrapovic Slip-On. Améliore les performances et le son de votre moto. Installation facile sans modification.',
    specifications: {
      material: 'Titane',
      weight: '2.1 kg',
      homologation: 'CE',
      gain_puissance: '+3 ch'
    },
    images: [
      'https://images.pexels.com/photos/2539322/pexels-photo-2539322.jpeg',
      'https://images.pexels.com/photos/8985454/pexels-photo-8985454.jpeg'
    ],
    isAvailable: true,
    isFeatured: true,
    createdAt: '2023-06-01'
  },
  {
    id: '2',
    name: 'Plaquettes de frein Brembo Z04',
    category: 'Freinage',
    brand: 'Brembo',
    compatibleModels: 'Honda CBR600RR, CBR1000RR',
    price: 89,
    stock: 12,
    condition: 'new',
    description: 'Plaquettes de frein haute performance Brembo Z04. Excellent mordant et résistance à la température. Idéales pour la piste.',
    specifications: {
      material: 'Métal fritté',
      temperature_max: '800°C',
      type: 'Racing',
      compatibilite: 'Étriers Brembo'
    },
    images: [
      'https://images.pexels.com/photos/3807319/pexels-photo-3807319.jpeg',
      'https://images.pexels.com/photos/2539322/pexels-photo-2539322.jpeg'
    ],
    isAvailable: true,
    isFeatured: true,
    createdAt: '2023-05-28'
  },
  {
    id: '3',
    name: 'Amortisseur arrière Öhlins TTX GP',
    category: 'Suspension',
    brand: 'Öhlins',
    compatibleModels: 'Kawasaki ZX-10R, Ninja 1000',
    price: 1250,
    stock: 2,
    condition: 'new',
    description: 'Amortisseur arrière Öhlins TTX GP de compétition. Réglages compression et détente séparés. Performance exceptionnelle sur piste.',
    specifications: {
      course: '65mm',
      reglages: 'Compression/Détente',
      reservoir: 'Séparé',
      garantie: '2 ans'
    },
    images: [
      'https://images.pexels.com/photos/8985454/pexels-photo-8985454.jpeg',
      'https://images.pexels.com/photos/3807319/pexels-photo-3807319.jpeg'
    ],
    isAvailable: true,
    isFeatured: false,
    createdAt: '2023-05-25'
  },
  {
    id: '4',
    name: 'Carénage avant Ducati Panigale V4',
    category: 'Carrosserie',
    brand: 'Ducati',
    compatibleModels: 'Ducati Panigale V4, V4S',
    price: 680,
    stock: 1,
    condition: 'used_excellent',
    description: 'Carénage avant d\'origine Ducati Panigale V4 en excellent état. Aucun impact, peinture d\'origine. Fixations incluses.',
    specifications: {
      couleur: 'Rouge Ducati',
      etat: 'Excellent',
      origine: 'Ducati OEM',
      fixations: 'Incluses'
    },
    images: [
      'https://images.pexels.com/photos/1045535/pexels-photo-1045535.jpeg',
      'https://images.pexels.com/photos/2539322/pexels-photo-2539322.jpeg'
    ],
    isAvailable: true,
    isFeatured: false,
    createdAt: '2023-05-20'
  },
  {
    id: '5',
    name: 'Kit chaîne DID VX3',
    category: 'Transmission',
    brand: 'DID',
    compatibleModels: 'BMW S1000RR, HP4',
    price: 165,
    stock: 8,
    condition: 'new',
    description: 'Kit chaîne complet DID VX3 avec joints X-Ring. Haute résistance et longévité. Comprend chaîne, pignon et couronne.',
    specifications: {
      maillons: '118',
      joints: 'X-Ring',
      resistance: '9800 lbs',
      kit_complet: 'Chaîne + Pignons'
    },
    images: [
      'https://images.pexels.com/photos/8985454/pexels-photo-8985454.jpeg',
      'https://images.pexels.com/photos/3807319/pexels-photo-3807319.jpeg'
    ],
    isAvailable: true,
    isFeatured: true,
    createdAt: '2023-05-18'
  },
  {
    id: '6',
    name: 'Filtre à air K&N Performance',
    category: 'Moteur',
    brand: 'K&N',
    compatibleModels: 'Triumph Street Triple, Speed Triple',
    price: 75,
    stock: 15,
    condition: 'new',
    description: 'Filtre à air haute performance K&N lavable et réutilisable. Améliore le débit d\'air et les performances du moteur.',
    specifications: {
      type: 'Coton huilé',
      lavable: 'Oui',
      gain_debit: '+15%',
      duree_vie: 'Illimitée'
    },
    images: [
      'https://images.pexels.com/photos/2539322/pexels-photo-2539322.jpeg',
      'https://images.pexels.com/photos/8985454/pexels-photo-8985454.jpeg'
    ],
    isAvailable: true,
    isFeatured: false,
    createdAt: '2023-05-15'
  }
];

// Données statiques pour les articles de blog
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  content: string;
  image: string;
  isPublished: boolean;
  createdAt: string;
}

export const staticBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Les meilleures motos pour débuter',
    slug: 'meilleures-motos-debuter',
    category: 'Conseils',
    content: `Choisir sa première moto est une étape cruciale pour tout motard débutant. Il est important de prendre en compte plusieurs critères pour faire le bon choix.

**1. La puissance adaptée**
Pour débuter, il est recommandé de choisir une moto avec une puissance modérée. Les motos de 125cc à 650cc sont idéales pour apprendre les bases de la conduite.

**2. La position de conduite**
Privilégiez une position de conduite droite et confortable. Les roadsters et les trails sont parfaits pour débuter.

**3. Le poids de la moto**
Une moto légère sera plus facile à manœuvrer, surtout à l'arrêt et dans les manœuvres de parking.

**Nos recommandations :**
- Yamaha MT-07 : Parfait équilibre entre puissance et facilité
- Honda CB650R : Fiable et polyvalente
- Kawasaki Z650 : Moderne et accessible

N'hésitez pas à venir essayer nos motos d'occasion chez Agde Moto Gattuso !`,
    image: 'https://images.pexels.com/photos/2519374/pexels-photo-2519374.jpeg',
    isPublished: true,
    createdAt: '2023-06-01'
  },
  {
    id: '2',
    title: 'Comment bien entretenir sa moto en hiver',
    slug: 'entretien-moto-hiver',
    category: 'Entretien',
    content: `L'hiver est une période délicate pour nos motos. Voici nos conseils pour bien préparer et entretenir votre moto pendant la saison froide.

**Préparation avant l'hivernage :**
1. Nettoyage complet de la moto
2. Vidange moteur et changement du filtre à huile
3. Vérification et gonflage des pneus
4. Protection de la batterie

**Stockage optimal :**
- Garage sec et aéré
- Bâche respirante
- Béquille d'atelier pour soulager les pneus

**Entretien périodique :**
Même en hiver, il est important de faire tourner le moteur régulièrement et de vérifier l'état général de la moto.

Notre atelier reste ouvert tout l'hiver pour vos révisions et entretiens !`,
    image: 'https://images.pexels.com/photos/3807319/pexels-photo-3807319.jpeg',
    isPublished: true,
    createdAt: '2023-05-15'
  },
  {
    id: '3',
    title: 'Test : BMW R 1250 GS, la reine des trails',
    slug: 'test-bmw-r1250gs',
    category: 'Tests',
    content: `Nous avons eu l'occasion de tester la BMW R 1250 GS, référence absolue dans le monde des trails routiers.

**Performances :**
Le bicylindre boxer de 1254cc développe 136 chevaux et offre un couple généreux dès les bas régimes. L'accélération est franche et la vitesse de pointe largement suffisante.

**Confort :**
La position de conduite est excellente, la selle confortable même sur de longs trajets. Les suspensions semi-actives s'adaptent parfaitement au terrain.

**Équipements :**
- ABS Pro avec fonction courbe
- Contrôle de traction adaptatif
- Modes de conduite multiples
- Éclairage LED intégral

**Verdict :**
Une moto exceptionnelle qui justifie sa réputation. Parfaite pour les grands voyages comme pour l'usage quotidien.

Nous avons actuellement une R 1250 GS en stock, venez la découvrir !`,
    image: 'https://images.pexels.com/photos/2393821/pexels-photo-2393821.jpeg',
    isPublished: true,
    createdAt: '2023-04-20'
  },
  {
    id: '4',
    title: 'Nouveautés 2024 : ce qui nous attend',
    slug: 'nouveautes-2024',
    category: 'Actualités',
    content: `L'année 2024 s'annonce riche en nouveautés dans le monde de la moto. Voici un aperçu des modèles qui nous ont marqués.

**Yamaha MT-09 SP :**
Version haut de gamme de la populaire MT-09 avec suspensions Öhlins et freins Brembo.

**Honda CB1000R Black Edition :**
Une version encore plus radicale du roadster japonais.

**Ducati Streetfighter V4 SP2 :**
L'évolution de la bête italienne avec encore plus de technologie.

**Tendances 2024 :**
- Électrification progressive
- Connectivité renforcée
- Aides à la conduite avancées

Nous suivons de près ces évolutions pour vous proposer les meilleures occasions !`,
    image: 'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg',
    isPublished: true,
    createdAt: '2023-03-10'
  }
];

// Catégories pour les pièces
export const staticPartCategories = [
  { id: '1', name: 'Échappement', slug: 'echappement' },
  { id: '2', name: 'Freinage', slug: 'freinage' },
  { id: '3', name: 'Suspension', slug: 'suspension' },
  { id: '4', name: 'Carrosserie', slug: 'carrosserie' },
  { id: '5', name: 'Transmission', slug: 'transmission' },
  { id: '6', name: 'Moteur', slug: 'moteur' },
  { id: '7', name: 'Accessoires', slug: 'accessoires' },
  { id: '8', name: 'Commandes', slug: 'commandes' },
  { id: '9', name: 'Pneumatiques', slug: 'pneumatiques' },
  { id: '10', name: 'Électronique', slug: 'electronique' }
];

// Catégories pour le blog
export const staticBlogCategories = [
  { id: '1', name: 'Conseils', slug: 'conseils' },
  { id: '2', name: 'Actualités', slug: 'actualites' },
  { id: '3', name: 'Tests', slug: 'tests' },
  { id: '4', name: 'Entretien', slug: 'entretien' }
];