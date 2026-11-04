export interface GradeSpec {
  name: string;
  moisture: string;
  purity: string;
  foreignMatter?: string;
  cutSize?: string;
  volatileOil?: string;
  totalAsh?: string;
  extraneousStalks?: string;
  moq: string;
  leadTime: string;
  packing: string;
  description?: string;
}

export interface Commodity {
  slug: string;
  lotCode: string;
  name: string;
  latinName: string;
  kicker: string;
  category: 'Rhizomes' | 'Spices' | 'Leaves';
  origin: string;
  originDetail: string;
  summary: string;
  image: string;
  gradeBadge: string;
  moisture: string;
  purity: string;
  availability: string; // e.g. "Mar – Nov"
  availabilityMonths: number[]; // 1-12
  peakMonths: number[]; // 1-12
  stockMonths: number[]; // 1-12
  moq: string;
  leadTime: string;
  packing: string;
  grades: GradeSpec[];
  parameters?: {
    name: string;
    method: string;
    gradeA: string;
    gradeB: string;
  }[];
  uses?: {
    title: string;
    detail: string;
    highlightRule?: boolean;
  }[];
}

export const COMMODITIES: Commodity[] = [
  {
    slug: 'ginger',
    lotCode: 'LOT HX-0241',
    name: 'Ginger',
    latinName: 'Zingiber officinale',
    kicker: 'RHIZOME · ZINGIBERACEAE',
    category: 'Rhizomes',
    origin: 'Central Java, ID',
    originDetail: 'Temanggung & Ungaran, Central Java',
    summary: 'Whole fingers, split halves and 8–12 mm slices, sun-dried on raised racks and hand-sorted twice. The lot carries a moisture reading taken at packing, not at harvest.',
    image: '/images/generated-11.png',
    gradeBadge: 'GRADE A',
    moisture: '10.0% max',
    purity: '99.0% min',
    availability: 'Mar – Nov',
    availabilityMonths: [3, 4, 5, 6, 7, 8, 9, 10, 11],
    peakMonths: [4, 5, 6],
    stockMonths: [3, 7, 8, 9, 10, 11],
    moq: '500 kg',
    leadTime: '21 days',
    packing: '25 kg PP bag',
    grades: [
      {
        name: 'Grade A',
        moisture: '10.0% max',
        purity: '99.0% min',
        foreignMatter: '0.5% max',
        cutSize: '8 – 12 mm',
        volatileOil: '1.2% min',
        totalAsh: '6.0% max',
        extraneousStalks: '0.5% max',
        moq: '500 kg',
        leadTime: '21 days',
        packing: '25 kg PP woven bag with sealed liner',
        description: 'Selected mature fingers, sliced or whole, washed and dried to 10% max moisture.'
      },
      {
        name: 'Grade B',
        moisture: '12.0% max',
        purity: '98.0% min',
        foreignMatter: '1.0% max',
        cutSize: '6 – 10 mm',
        volatileOil: '1.0% min',
        totalAsh: '7.0% max',
        extraneousStalks: '1.0% max',
        moq: '500 kg',
        leadTime: '21 days',
        packing: '25 kg PP woven bag',
        description: 'Clean split rhizomes, suitable for grinding, blending and extraction.'
      },
      {
        name: 'Grade C',
        moisture: '12.5% max',
        purity: '97.0% min',
        foreignMatter: '1.5% max',
        cutSize: 'Various',
        volatileOil: '0.8% min',
        totalAsh: '8.0% max',
        extraneousStalks: '1.5% max',
        moq: '1,000 kg',
        leadTime: '28 days',
        packing: '50 kg PP or jute bag',
        description: 'Standard industrial grade for oleoresin distillation and bulk extracts.'
      }
    ],
    parameters: [
      { name: 'Moisture', method: 'ISO 6673', gradeA: '10.0% max', gradeB: '12.0% max' },
      { name: 'Foreign matter', method: 'visual sort', gradeA: '0.5% max', gradeB: '1.0% max' },
      { name: 'Purity', method: 'sieve 3 mm', gradeA: '99.0% min', gradeB: '98.0% min' },
      { name: 'Cut size', method: 'caliper', gradeA: '8 – 12 mm', gradeB: '6 – 10 mm' },
      { name: 'Volatile oil', method: 'ISO 6571', gradeA: '1.2% min', gradeB: '1.0% min' },
      { name: 'Total ash', method: 'ISO 5985', gradeA: '6.0% max', gradeB: '7.0% max' },
      { name: 'Extraneous stalks', method: 'hand sort', gradeA: '0.5% max', gradeB: '1.0% max' }
    ],
    uses: [
      {
        title: 'Extraction',
        detail: 'Oleoresin and essential-oil lines take whole grade A fingers. We can mill to 40 mesh before packing, on request.',
        highlightRule: true
      },
      {
        title: 'Tea & infusion',
        detail: 'Sliced grade A at 8–12 mm, screened for fines under 1 mm and packed in lined cartons.',
        highlightRule: false
      },
      {
        title: 'Retail spice',
        detail: 'Grade B split fingers, cleaned, metal-detected and bagged for retail packing lines.',
        highlightRule: false
      }
    ]
  },
  {
    slug: 'turmeric',
    lotCode: 'LOT HX-0238',
    name: 'Turmeric',
    latinName: 'Curcuma longa',
    kicker: 'RHIZOME · ZINGIBERACEAE',
    category: 'Rhizomes',
    origin: 'Central Java, ID',
    originDetail: 'Central Java',
    summary: 'High-curcumin finger and polished bulb turmeric, washed, steam-treated or sun-dried to low moisture with intense natural golden color.',
    image: '/images/generated-6.png',
    gradeBadge: 'GRADE A',
    moisture: '9.5% max',
    purity: '99.0% min',
    availability: 'Mar – Nov',
    availabilityMonths: [3, 4, 5, 6, 7, 8, 9, 10, 11],
    peakMonths: [5, 6, 7],
    stockMonths: [3, 4, 8, 9, 10, 11],
    moq: '500 kg',
    leadTime: '21 days',
    packing: '25 kg PP bag',
    grades: [
      {
        name: 'Grade A',
        moisture: '9.5% max',
        purity: '99.0% min',
        foreignMatter: '0.5% max',
        cutSize: 'Polished fingers',
        volatileOil: '2.5% min',
        totalAsh: '6.5% max',
        moq: '500 kg',
        leadTime: '21 days',
        packing: '25 kg PP woven bag',
        description: 'Deep orange-yellow polished fingers with high curcumin content (min 4.0%).'
      },
      {
        name: 'Grade B',
        moisture: '11.0% max',
        purity: '98.0% min',
        foreignMatter: '1.0% max',
        cutSize: 'Split & bulbs',
        volatileOil: '2.0% min',
        totalAsh: '7.5% max',
        moq: '500 kg',
        leadTime: '21 days',
        packing: '25 kg PP woven bag',
        description: 'Unpolished fingers and splits for powder milling and food coloring.'
      }
    ],
    parameters: [
      { name: 'Moisture', method: 'ISO 6673', gradeA: '9.5% max', gradeB: '11.0% max' },
      { name: 'Curcumin content', method: 'HPLC', gradeA: '4.0% min', gradeB: '3.0% min' },
      { name: 'Foreign matter', method: 'visual sort', gradeA: '0.5% max', gradeB: '1.0% max' },
      { name: 'Purity', method: 'sieve 3 mm', gradeA: '99.0% min', gradeB: '98.0% min' },
      { name: 'Total ash', method: 'ISO 5985', gradeA: '6.5% max', gradeB: '7.5% max' }
    ],
    uses: [
      {
        title: 'Nutraceutical & supplements',
        detail: 'Standardized curcumin extractors prioritize Grade A polished fingers for high yield and low solvent residue.',
        highlightRule: true
      },
      {
        title: 'Food coloring & culinary',
        detail: 'Milled finely for curry blends, yellow rice seasoning, and natural vibrant food dyes.',
        highlightRule: false
      }
    ]
  },
  {
    slug: 'cinnamon',
    lotCode: 'LOT HX-0229',
    name: 'Cinnamon',
    latinName: 'Cinnamomum burmannii',
    kicker: 'BARK · LAURACEAE',
    category: 'Spices',
    origin: 'Kerinci, ID',
    originDetail: 'Kerinci, Jambi (Sumatra)',
    summary: 'Authentic Indonesian Korintje cinnamon quills and cut sticks from highland Kerinci, prized for sweet aroma and high cinnamaldehyde.',
    image: '/images/generated-5.png',
    gradeBadge: 'GRADE B',
    moisture: '12.0% max',
    purity: '98.0% min',
    availability: 'Apr – Sep',
    availabilityMonths: [4, 5, 6, 7, 8, 9],
    peakMonths: [5, 6, 7],
    stockMonths: [4, 8, 9],
    moq: '1,000 kg',
    leadTime: '28 days',
    packing: '25 kg carton / bales',
    grades: [
      {
        name: 'Grade A (Vera/Stick)',
        moisture: '11.0% max',
        purity: '99.0% min',
        foreignMatter: '0.5% max',
        cutSize: '8 cm quills',
        moq: '500 kg',
        leadTime: '24 days',
        packing: '10 kg cartons',
        description: 'Double-rolled quills with smooth scraped bark, 8 cm cut length.'
      },
      {
        name: 'Grade B (Korintje KB)',
        moisture: '12.0% max',
        purity: '98.0% min',
        foreignMatter: '1.0% max',
        cutSize: 'Broken quills',
        moq: '1,000 kg',
        leadTime: '28 days',
        packing: '25 kg bales or cartons',
        description: 'Broken quills and unpeeled chips, excellent for ground cinnamon blends.'
      }
    ]
  },
  {
    slug: 'cloves',
    lotCode: 'LOT HX-0217',
    name: 'Cloves',
    latinName: 'Syzygium aromaticum',
    kicker: 'FLOWER BUD · MYRTACEAE',
    category: 'Spices',
    origin: 'North Maluku, ID',
    originDetail: 'North Maluku',
    summary: 'Sun-dried Lal Pari and Zanzibar clove buds harvested from the volcanic soil of North Maluku. Rich in eugenol with reddish-brown coloration and plump heads.',
    image: '/images/generated-8.png',
    gradeBadge: 'GRADE A',
    moisture: '11.0% max',
    purity: '99.0% min',
    availability: 'Jun – Dec',
    availabilityMonths: [6, 7, 8, 9, 10, 11, 12],
    peakMonths: [7, 8, 9],
    stockMonths: [6, 10, 11, 12],
    moq: '500 kg',
    leadTime: '24 days',
    packing: '50 kg jute / PP bag',
    grades: [
      {
        name: 'Grade A (Lal Pari / Handpicked)',
        moisture: '11.0% max',
        purity: '99.0% min',
        foreignMatter: '0.5% max',
        volatileOil: '18.0% min',
        moq: '500 kg',
        leadTime: '24 days',
        packing: '50 kg double PP bag',
        description: 'Reddish-brown whole cloves with intact heads, headless under 2%.'
      },
      {
        name: 'Grade B (Standard export)',
        moisture: '12.0% max',
        purity: '98.0% min',
        foreignMatter: '1.0% max',
        volatileOil: '16.0% min',
        moq: '1,000 kg',
        leadTime: '24 days',
        packing: '50 kg jute bag',
        description: 'Sound whole buds for distillation and kretek spice blends.'
      }
    ]
  },
  {
    slug: 'nutmeg-mace',
    lotCode: 'LOT HX-0204',
    name: 'Nutmeg & mace',
    latinName: 'Myristica fragrans',
    kicker: 'SEED & ARIL · MYRISTICACEAE',
    category: 'Spices',
    origin: 'Banda, ID',
    originDetail: 'Banda Islands, Maluku',
    summary: 'Banda origin whole nutmegs (ABCD and sound shrivels) and crimson-golden whole mace blades, dried slowly under shade to preserve essential oils.',
    image: '/images/generated-9.png',
    gradeBadge: 'GRADE A',
    moisture: '10.0% max',
    purity: '99.0% min',
    availability: 'Jun – Dec',
    availabilityMonths: [6, 7, 8, 9, 10, 11, 12],
    peakMonths: [7, 8, 9],
    stockMonths: [6, 10, 11, 12],
    moq: '500 kg',
    leadTime: '26 days',
    packing: '25 kg carton / 50 kg jute',
    grades: [
      {
        name: 'Grade A (Sound ABCD)',
        moisture: '10.0% max',
        purity: '99.0% min',
        foreignMatter: '0.2% max',
        moq: '500 kg',
        leadTime: '26 days',
        packing: '25 kg cartons',
        description: 'Whole round kernels, zero insect damage, verified aflatoxin safe.'
      },
      {
        name: 'Grade B (Sound Shrivels)',
        moisture: '11.0% max',
        purity: '98.0% min',
        foreignMatter: '0.5% max',
        moq: '500 kg',
        leadTime: '26 days',
        packing: '50 kg jute bag',
        description: 'Wrinkled sound kernels with high oil concentration, ideal for grinding.'
      }
    ]
  },
  {
    slug: 'lemongrass',
    lotCode: 'LOT HX-0198',
    name: 'Lemongrass',
    latinName: 'Cymbopogon citratus',
    kicker: 'LEAF STALK · POACEAE',
    category: 'Leaves',
    origin: 'West Java, ID',
    originDetail: 'West Java',
    summary: 'Dehydrated cut lemongrass stalks and cut leaves, sifted and dust-free. Clean citral-forward aroma with light green hue, perfect for tea blends.',
    image: '/images/generated-4.png',
    gradeBadge: 'GRADE A',
    moisture: '11.0% max',
    purity: '97.0% min',
    availability: 'Year round',
    availabilityMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    peakMonths: [3, 4, 5, 8, 9, 10],
    stockMonths: [1, 2, 6, 7, 11, 12],
    moq: '750 kg',
    leadTime: '18 days',
    packing: '20 kg carton with liner',
    grades: [
      {
        name: 'Grade A (Cut & sifted 4–6 mm)',
        moisture: '11.0% max',
        purity: '97.0% min',
        foreignMatter: '0.5% max',
        moq: '750 kg',
        leadTime: '18 days',
        packing: '20 kg cartons with liner',
        description: 'Uniform light-green cut stalks, clean citrus flavor, dust-sifted.'
      },
      {
        name: 'Grade B (Cut 10–15 mm)',
        moisture: '12.0% max',
        purity: '95.0% min',
        foreignMatter: '1.0% max',
        moq: '1,000 kg',
        leadTime: '18 days',
        packing: '25 kg PP bags',
        description: 'Longer cuts for industrial distillation and bulk herbal decoctions.'
      }
    ]
  },
  {
    slug: 'black-pepper',
    lotCode: 'LOT HX-0186',
    name: 'Black pepper',
    latinName: 'Piper nigrum',
    kicker: 'BERRY · PIPERACEAE',
    category: 'Spices',
    origin: 'Lampung, ID',
    originDetail: 'Lampung, Sumatra',
    summary: 'High-density Lampung black peppercorns (550–570 g/l), machine-cleaned and spiralled for uniform bold size and high piperine bite.',
    image: '/images/generated-10.png',
    gradeBadge: 'GRADE B',
    moisture: '12.5% max',
    purity: '98.0% min',
    availability: 'Jul – Nov',
    availabilityMonths: [7, 8, 9, 10, 11],
    peakMonths: [8, 9, 10],
    stockMonths: [7, 11],
    moq: '1,000 kg',
    leadTime: '22 days',
    packing: '50 kg PP woven bag',
    grades: [
      {
        name: 'Grade A (Lampung FAQ 550 g/l)',
        moisture: '12.0% max',
        purity: '99.0% min',
        foreignMatter: '0.5% max',
        moq: '1,000 kg',
        leadTime: '22 days',
        packing: '50 kg PP bags',
        description: 'Bold black berries, machine cleaned, minimum bulk density 550 g/l.'
      },
      {
        name: 'Grade B (Standard export 500 g/l)',
        moisture: '12.5% max',
        purity: '98.0% min',
        foreignMatter: '1.0% max',
        moq: '1,000 kg',
        leadTime: '22 days',
        packing: '50 kg PP bags',
        description: 'Standard export grade suitable for oleoresin and coarse table pepper.'
      }
    ]
  }
];

export function getCommodity(slug: string): Commodity | undefined {
  return COMMODITIES.find(c => c.slug === slug);
}

