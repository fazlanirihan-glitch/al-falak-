export interface Industry {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  image: string;
}

export const industries: Industry[] = [
  {
    id: "switchgear",
    name: "Switchgear & Automation",
    nameAr: "لوحات التوزيع والأتمتة",
    description: "Electrical and pneumatic components for switchgear panels and industrial automation systems.",
    descriptionAr: "مكونات كهربائية وهوائية للوحات التوزيع وأنظمة الأتمتة الصناعية.",
    image: "/assets/products/industrial-sensors-controllers.webp",
  },
  {
    id: "water-treatment",
    name: "Water Treatment Plants",
    nameAr: "محطات معالجة المياه",
    description: "Solenoid valves, angle seat valves, diaphragm pumps, and filtration components for water treatment.",
    descriptionAr: "صمامات، مضخات حجاب حاجز، ومكونات ترشيح لمحطات معالجة المياه.",
    image: "/assets/products/aodd-diaphragm-pumps.webp",
  },
  {
    id: "oil-gas-marine",
    name: "Oil Field & Marine",
    nameAr: "حقول النفط والبحرية",
    description: "High-pressure hydraulic and pneumatic components designed for demanding oil field and marine environments.",
    descriptionAr: "مكونات هيدروليكية وهوائية عالية الضغط لبيئات حقول النفط والبحرية.",
    image: "/assets/products/hydraulic-valves-pumps.webp",
  },
  {
    id: "bottling-food",
    name: "Bottling & Food Industry",
    nameAr: "صناعة التعبئة والغذاء",
    description: "Regina conveyor chains, vacuum grippers, and components engineered for bottling, canning, and food processing lines.",
    descriptionAr: "سلاسل ريجينا، أكواب تفريغ، ومكونات لخطوط التعبئة ومعالجة الغذاء.",
    image: "/assets/products/regina-conveyor-chains.webp",
  },
  {
    id: "bakery",
    name: "Industrial Bakery",
    nameAr: "المخابز الصناعية",
    description: "Specialized bakery maintenance parts including cutting blades, pillow blocks, pneumatic cylinders, and high-temperature components.",
    descriptionAr: "قطع غيار المخابز الصناعية بما فيها شفرات القطع، المحامل، والمكونات ذات درجة الحرارة العالية.",
    image: "/assets/products/bakery-maintenance-spares.webp",
  },
  {
    id: "automotive",
    name: "Automotive & Mechanical",
    nameAr: "السيارات والميكانيكا",
    description: "Gas springs, shock absorbers, energy chains, gearboxes, and industrial drive components for automotive applications.",
    descriptionAr: "نوابض غازية، ماصات صدمات، سلاسل طاقة، وعلب تروس للتطبيقات الميكانيكية.",
    image: "/assets/products/gas-springs-dampers.webp",
  },
];
