export interface Category {
  id: string;
  slug: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  image: string;
  catalogPages: number[];
  color: string;
}

export const categories: Category[] = [
  {
    id: "pneumatic",
    slug: "pneumatic",
    name: "Pneumatic Systems",
    nameAr: "الأنظمة الهوائية",
    description:
      "ISO standard cylinders, solenoid valves, FRL service units, AODD pumps, vacuum generators, shock absorbers, air bellows, and complete pneumatic solutions.",
    descriptionAr:
      "أسطوانات هوائية، صمامات، وحدات خدمة، مضخات، مولدات تفريغ، وحلول هوائية متكاملة.",
    image: "/assets/products/iso-pneumatic-cylinder.webp",
    catalogPages: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    color: "#0284c7",
  },
  {
    id: "hydraulic",
    slug: "hydraulic",
    name: "Hydraulic Systems",
    nameAr: "الأنظمة الهيدروليكية",
    description:
      "Hydraulic valves, manifold valves, pumps, and filters for demanding industrial fluid power applications.",
    descriptionAr:
      "صمامات هيدروليكية، مجمعات، مضخات، ومرشحات للتطبيقات الصناعية.",
    image: "/assets/products/hydraulic-valves-pumps.webp",
    catalogPages: [18],
    color: "#0369a1",
  },
  {
    id: "mechanical",
    slug: "mechanical",
    name: "Mechanical & Drives",
    nameAr: "الأنظمة الميكانيكية والمحركات",
    description:
      "Bonfiglioli gearboxes and motors, gas springs and dampers, energy chains, couplings, chains, sprockets, and mechanical drive solutions.",
    descriptionAr:
      "علب تروس بونفيليولي، نوابض غازية، سلاسل طاقة، تزاوجات، وسلاسل ميكانيكية.",
    image: "/assets/products/bonfiglioli-gearboxes-motors.webp",
    catalogPages: [13, 14, 15],
    color: "#0284c7",
  },
  {
    id: "electrical",
    slug: "electrical",
    name: "Electrical & Instrumentation",
    nameAr: "الكهربائيات والأجهزة",
    description:
      "Industrial sensors, temperature controllers, SSR relays, current transformers, power analyzers, ammeters, voltmeters, and electrical accessories.",
    descriptionAr:
      "حساسات صناعية، متحكمات حرارة، محولات تيار، محللات طاقة، وملحقات كهربائية.",
    image: "/assets/products/industrial-sensors-controllers.webp",
    catalogPages: [16, 17],
    color: "#0369a1",
  },
  {
    id: "conveyor-bakery",
    slug: "conveyor-bakery",
    name: "Conveyors & Bakery",
    nameAr: "ناقلات وصيانة المخابز",
    description:
      "Regina stainless steel and carbon steel conveyor chains, air compressor pipes, and specialized bakery maintenance equipment.",
    descriptionAr:
      "سلاسل ناقلة ريجينا، أنابيب ضاغط هواء، ومعدات صيانة مخابز متخصصة.",
    image: "/assets/products/regina-conveyor-chains.webp",
    catalogPages: [19, 20, 21],
    color: "#0284c7",
  },
];
