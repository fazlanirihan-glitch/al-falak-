// AL FALAK Industrial Equipment — Verified Product Database
// Sources: Official AL FALAK Catalogue PDF, alfalakuae.com, WP pages dump, existing codebase
// DO NOT add products not supported by verified source material

export interface Product {
  id: string;
  slug: string;
  name: string;
  nameAr: string;
  category: string;        // pneumatic | hydraulic | electrical | mechanical | conveyor-bakery
  subcategory?: string;    // e.g. cylinders, valves, air-preparation, vacuum, fittings
  brand?: string;          // primary brand name as string
  brands?: string[];       // multiple available brands
  description: string;
  descriptionAr: string;
  image: string;
  specs?: { key: string; value: string; keyAr?: string }[];
  features?: string[];
  featuresAr?: string[];
  applications?: string[];
  applicationsAr?: string[];
  featured: boolean;
  sortOrder?: number;      // lower = higher priority in listings
}

// ============================================================
// PNEUMATIC / AIR PRODUCTS — Business Priority #1
// ============================================================

const pneumaticProducts: Product[] = [
  // --- CYLINDERS / ACTUATORS ---
  {
    id: "iso-pneumatic-cylinders",
    slug: "iso-pneumatic-cylinders",
    name: "ISO Pneumatic Cylinders",
    nameAr: "أسطوانات هوائية ISO",
    category: "pneumatic",
    subcategory: "cylinders",
    brand: "Festo",
    brands: ["Festo", "Airtac"],
    description:
      "Standard ISO 6431/VDMA 24562 pneumatic cylinders in single and double acting variants. Available in bore sizes 32–250 mm for industrial automation applications. Features adjustable cushioning and magnetic piston for sensor mounting.",
    descriptionAr:
      "أسطوانات هوائية قياسية وفق ISO 6431/VDMA 24562 بتشغيل أحادي ومزدوج. متوفرة بأقطار 32–250 مم لتطبيقات الأتمتة الصناعية مع مخدات قابلة للضبط ومكبس مغناطيسي.",
    image: "/assets/products/iso-pneumatic-cylinder.webp",
    features: [
      "ISO 6431 / VDMA 24562 standard",
      "Single and double acting variants",
      "Bore sizes 32–250 mm",
      "Adjustable cushioning both ends",
      "Magnetic piston for sensor detection",
      "Available in stainless steel option",
    ],
    featuresAr: [
      "متوافق مع معيار ISO 6431 / VDMA 24562",
      "تشغيل أحادي ومزدوج",
      "أقطار من 32 إلى 250 مم",
      "مخدات قابلة للضبط من طرفين",
      "مكبس مغناطيسي لاستشعار الموضع",
    ],
    applications: [
      "Industrial automation",
      "Machine building",
      "Conveyor systems",
      "Packaging machinery",
      "Material handling",
    ],
    applicationsAr: [
      "الأتمتة الصناعية",
      "تصنيع الماكينات",
      "أنظمة الناقلات",
      "معدات التغليف",
      "مناولة المواد",
    ],
    specs: [
      { key: "Standard", value: "ISO 6431 / VDMA 24562", keyAr: "المعيار" },
      { key: "Bore Size", value: "32–250 mm", keyAr: "القطر" },
      { key: "Operating Pressure", value: "1–10 bar", keyAr: "ضغط التشغيل" },
    ],
    featured: true,
    sortOrder: 10,
  },
  {
    id: "compact-pneumatic-cylinders",
    slug: "compact-pneumatic-cylinders",
    name: "Compact Pneumatic Cylinders",
    nameAr: "أسطوانات هوائية مدمجة",
    category: "pneumatic",
    subcategory: "cylinders",
    brand: "Airtac",
    brands: ["Airtac", "Festo"],
    description:
      "Space-saving compact double acting pneumatic cylinders for restricted installation environments. ISO 21287 compliant with integrated bumpers and magnetic piston for position detection.",
    descriptionAr:
      "أسطوانات هوائية مدمجة موفرة للمساحة للبيئات ضيقة التركيب. متوافقة مع ISO 21287 مع مخدات مدمجة ومكبس مغناطيسي.",
    image: "/assets/products/iso-pneumatic-cylinder.webp",
    features: [
      "ISO 21287 compliant compact design",
      "Double acting operation",
      "Integrated stroke limiters",
      "Magnetic piston as standard",
      "Low friction seals for energy saving",
    ],
    featuresAr: [
      "تصميم مدمج وفق ISO 21287",
      "تشغيل مزدوج",
      "محددات شوط مدمجة",
      "مكبس مغناطيسي كمعيار",
    ],
    applications: [
      "Clamping fixtures",
      "Compact automation cells",
      "Robotic end-effectors",
      "Pick-and-place systems",
    ],
    applicationsAr: ["مشابك التثبيت", "خلايا أتمتة مدمجة", "ذراع الروبوت", "أنظمة الالتقاط والوضع"],
    featured: false,
    sortOrder: 11,
  },
  {
    id: "sw-pneumatic-cylinders",
    slug: "sw-pneumatic-cylinders",
    name: "SW Pneumatic Cylinders",
    nameAr: "أسطوانات هوائية SW",
    category: "pneumatic",
    subcategory: "cylinders",
    brand: "SW",
    description:
      "SW Pneumatic Cylinders engineered for precise linear motion with minimal friction. High efficiency for automation and industrial processes across manufacturing, automotive, and packaging sectors.",
    descriptionAr:
      "أسطوانات SW الهوائية مصممة لحركة خطية دقيقة بأدنى احتكاك. كفاءة عالية لعمليات الأتمتة والصناعة في قطاعات التصنيع والسيارات والتغليف.",
    image: "/assets/products/iso-pneumatic-cylinder.webp",
    features: [
      "Precise linear motion control",
      "Minimal friction design",
      "Heavy duty construction",
      "Suitable for high-cycle applications",
    ],
    applicationsAr: ["التصنيع", "قطاع السيارات", "التغليف"],
    applications: ["Manufacturing", "Automotive industry", "Packaging"],
    featured: false,
    sortOrder: 12,
  },
  {
    id: "rodless-cylinders",
    slug: "rodless-cylinders",
    name: "Rodless Cylinders",
    nameAr: "أسطوانات بدون قضيب",
    category: "pneumatic",
    subcategory: "cylinders",
    brand: "Festo",
    description:
      "Rodless pneumatic cylinders for long stroke applications without rod extension. Cable, magnetically coupled, and mechanically guided variants available for horizontal and vertical travel.",
    descriptionAr:
      "أسطوانات هوائية بدون قضيب للشوط الطويل دون امتداد قضيب. متوفرة بأنواع كابل وتزاوج مغناطيسي وتوجيه ميكانيكي للتنقل الأفقي والرأسي.",
    image: "/assets/products/rodless-cylinders.webp",
    features: [
      "Long stroke without rod overhang",
      "Cable, magnetic, and guided types",
      "Horizontal and vertical mounting",
      "Integrated position sensing",
    ],
    applications: ["Linear transport systems", "Gantry systems", "Long-travel automation"],
    applicationsAr: ["أنظمة النقل الخطي", "أنظمة البوابة", "أتمتة الشوط الطويل"],
    featured: false,
    sortOrder: 13,
  },
  {
    id: "rotary-actuators",
    slug: "rotary-actuators",
    name: "Rotary Actuators",
    nameAr: "مشغلات دوارة",
    category: "pneumatic",
    subcategory: "cylinders",
    brand: "Festo",
    brands: ["Festo", "Airtac"],
    description:
      "Pneumatic rotary actuators for angular movement applications. Rack-and-pinion and vane types available in rotation angles of 45°, 90°, 180°, and 270° for indexing, turning, and positioning.",
    descriptionAr:
      "مشغلات هوائية دوارة للحركة الزاوية. متوفرة بأنواع ترس ومروحة بزوايا دوران 45°، 90°، 180°، 270° للفهرسة والتدوير والتموضع.",
    image: "/assets/products/rotary-actuators-valves.webp",
    features: [
      "Rack-and-pinion and vane types",
      "Rotation angles: 45°–270°",
      "Integrated damping for end positions",
      "Position sensor compatible",
    ],
    applications: ["Indexing tables", "Turning stations", "Door opening systems", "Valve actuation"],
    applicationsAr: ["طاولات الفهرسة", "محطات التدوير", "أنظمة فتح الأبواب", "تشغيل الصمامات"],
    featured: false,
    sortOrder: 14,
  },
  {
    id: "twin-rod-cylinders",
    slug: "twin-rod-cylinders",
    name: "Twin Rod Cylinders",
    nameAr: "أسطوانات ثنائية القضيب",
    category: "pneumatic",
    subcategory: "cylinders",
    brand: "Airtac",
    description:
      "Twin-rod guided pneumatic cylinders with high anti-rotation and load capacity. Suitable for applications requiring guided linear motion and resistance to eccentric loads.",
    descriptionAr:
      "أسطوانات هوائية ثنائية القضيب موجهة ذات قدرة عالية على مقاومة الدوران والحمل. مناسبة للتطبيقات التي تتطلب حركة خطية موجهة.",
    image: "/assets/products/iso-pneumatic-cylinder.webp",
    features: [
      "Twin rod anti-rotation design",
      "High torque capacity",
      "Guided linear motion",
      "Eccentric load resistant",
    ],
    applications: ["Clamping applications", "Material handling", "Guided pressing"],
    applicationsAr: ["تطبيقات التشبيك", "مناولة المواد", "الضغط الموجه"],
    featured: false,
    sortOrder: 15,
  },

  // --- VALVES ---
  {
    id: "electromechanical-solenoid-valves",
    slug: "electromechanical-solenoid-valves",
    name: "Solenoid Valves",
    nameAr: "الصمامات الكهربائية",
    category: "pneumatic",
    subcategory: "valves",
    brand: "Festo",
    brands: ["Festo", "Airtac", "AZ Pneumatics"],
    description:
      "Electromechanically operated solenoid valves for controlling flow of air, gas, water, oil, and steam. Available in 2/2, 3/2, and 5/2 way configurations with single and double coil options. Suitable for pneumatic circuit control.",
    descriptionAr:
      "صمامات كهربائية للتحكم في تدفق الهواء والغاز والماء والزيت والبخار. متوفرة بتشكيلات 2/2 و3/2 و5/2 طريق بخيارات ملف مفرد ومزدوج.",
    image: "/assets/products/electromechanical-solenoid-valves.webp",
    features: [
      "2/2, 3/2, 5/2 way configurations",
      "Single and double solenoid",
      "Spring return option",
      "G1/8\" to G3/4\" port sizes",
      "Integrated LED status indication",
    ],
    featuresAr: [
      "تشكيلات 2/2 و3/2 و5/2 طريق",
      "ملف مغناطيسي مفرد ومزدوج",
      "رجوع بنابض",
      "أحجام منافذ G1/8\" إلى G3/4\"",
    ],
    applications: [
      "Pneumatic circuit control",
      "Machine automation",
      "Fluid control systems",
      "Process control",
    ],
    applicationsAr: ["التحكم في الدوائر الهوائية", "أتمتة الماكينات", "أنظمة التحكم في السوائل"],
    specs: [
      { key: "Configurations", value: "2/2, 3/2, 5/2 way", keyAr: "التشكيلات" },
      { key: "Port Sizes", value: 'G1/8" – G3/4"', keyAr: "أحجام المنافذ" },
      { key: "Voltage", value: "24V DC / 220V AC", keyAr: "الجهد" },
    ],
    featured: true,
    sortOrder: 20,
  },
  {
    id: "directional-control-valves",
    slug: "directional-control-valves",
    name: "Directional Control Valves",
    nameAr: "صمامات التحكم الاتجاهي",
    category: "pneumatic",
    subcategory: "valves",
    brand: "Airtac",
    brands: ["Airtac", "Festo", "AZ Pneumatics"],
    description:
      "Pneumatic directional control valves for routing compressed air in pneumatic circuits. Available in 4/2 and 5/3 way configurations, pilot operated and directly operated variants. Manifold mount compatible.",
    descriptionAr:
      "صمامات تحكم اتجاهي هوائية لتوجيه الهواء المضغوط في الدوائر الهوائية. متوفرة بتشكيلات 4/2 و5/3 طريق، تشغيل مباشر وإرشادي، متوافقة مع التثبيت الجماعي.",
    image: "/assets/products/electromechanical-solenoid-valves.webp",
    features: [
      "4/2 and 5/3 way configurations",
      "Pilot and direct operated",
      "Manifold mount compatible",
      "Detent and spring return",
      "ISO 5599/1 and NAMUR mounting",
    ],
    applications: ["Cylinder control", "Pneumatic circuits", "Process automation"],
    applicationsAr: ["التحكم في الأسطوانات", "الدوائر الهوائية", "أتمتة العمليات"],
    featured: false,
    sortOrder: 21,
  },
  {
    id: "az-poppet-valves",
    slug: "az-poppet-valves",
    name: "AZ Poppet Microvalves",
    nameAr: "صمامات AZ البوبيت الدقيقة",
    category: "pneumatic",
    subcategory: "valves",
    brand: "AZ Pneumatics",
    description:
      "AZ Pneumatics poppet microvalves manufactured in Italy. Available as mechanically operated, manually operated, pneumatically operated, and electro-pneumatic actuated variants with subbases and integrated multiconnections.",
    descriptionAr:
      "صمامات بوبيت دقيقة من AZ Pneumatics الإيطالية. متوفرة بتشغيل ميكانيكي ويدوي وهوائي وكهروهوائي مع قواعد تجميع وتوصيلات متعددة.",
    image: "/assets/products/electromechanical-solenoid-valves.webp",
    features: [
      "Mechanically, manually, and electrically operated types",
      "Subbases for manifold assembly",
      "Foot valves and integrated elements",
      "Auxiliary valves and accessories",
      "Made in Italy",
    ],
    applications: ["Precision pneumatic control", "Compact automation", "Electro-pneumatic circuits"],
    applicationsAr: ["التحكم الهوائي الدقيق", "الأتمتة المدمجة", "الدوائر الكهروهوائية"],
    featured: false,
    sortOrder: 22,
  },
  {
    id: "angle-seat-valves",
    slug: "angle-seat-valves",
    name: "Angle Seat Valves",
    nameAr: "صمامات المقعد الزاوي",
    category: "pneumatic",
    subcategory: "valves",
    brand: "SW",
    description:
      "SW Angle Seat Valves with unique angle seat design for precise control and reliable performance in high-pressure fluid applications. Suitable for steam, water, air, and aggressive media. High flow coefficient (Kv).",
    descriptionAr:
      "صمامات SW ذات مقعد زاوي لتحكم دقيق وموثوق في تطبيقات السوائل عالية الضغط. مناسبة للبخار والماء والهواء والوسائط العدوانية.",
    image: "/assets/products/angle-seat-valves.webp",
    features: [
      "Angle seat design for high Kv flow",
      "Pneumatically actuated",
      "Suitable for steam and aggressive media",
      "DN15 to DN50 sizes",
      "PTFE and metal seat options",
    ],
    applications: ["Steam control", "Water treatment", "Chemical processing", "Food and beverage"],
    applicationsAr: ["التحكم في البخار", "معالجة المياه", "المعالجة الكيميائية", "الأغذية والمشروبات"],
    featured: false,
    sortOrder: 23,
  },
  {
    id: "sw-solenoid-valves",
    slug: "sw-solenoid-valves",
    name: "SW Solenoid Valves",
    nameAr: "صمامات SW الكهربائية",
    category: "pneumatic",
    subcategory: "valves",
    brand: "SW",
    description:
      "SW solenoid valves for pneumatic and fluid circuit control. Wide variety of configurations including 2/2, 3/2, and 5/2 way. Suitable for air, water, and light oil media applications.",
    descriptionAr:
      "صمامات SW الكهربائية للتحكم في الدوائر الهوائية والسوائل. تشكيلات متنوعة تشمل 2/2 و3/2 و5/2 طريق. مناسبة للهواء والماء والزيت الخفيف.",
    image: "/assets/products/electromechanical-solenoid-valves.webp",
    features: [
      "Multiple way configurations",
      "Direct and pilot operated",
      "IP65 coil protection",
      "Low power consumption",
    ],
    applications: ["Pneumatic circuits", "Water control", "Industrial automation"],
    applicationsAr: ["الدوائر الهوائية", "التحكم في المياه", "الأتمتة الصناعية"],
    featured: false,
    sortOrder: 24,
  },
  {
    id: "pinch-valves",
    slug: "pinch-valves",
    name: "Pinch Valves",
    nameAr: "صمامات الضغط",
    category: "pneumatic",
    subcategory: "valves",
    description:
      "Pneumatically operated pinch valves for controlling flow of slurries, abrasive fluids, and granular media. Full bore opening, simple maintenance, no internal parts to wear or contaminate media.",
    descriptionAr:
      "صمامات ضغط تعمل بالهواء للتحكم في تدفق الطين والسوائل الكاشطة والمواد الحبيبية. فتحة كاملة، صيانة بسيطة، بدون أجزاء داخلية.",
    image: "/assets/products/pinch-valves.webp",
    features: [
      "Full bore opening",
      "No internal metal parts to corrode",
      "Suitable for abrasive slurries",
      "Hygienic design available",
      "Pneumatic actuation",
    ],
    applications: ["Slurry handling", "Mining", "Ceramic processing", "Water treatment"],
    applicationsAr: ["مناولة الطين", "التعدين", "معالجة السيراميك", "معالجة المياه"],
    featured: false,
    sortOrder: 25,
  },
  {
    id: "az-vacuum-valves",
    slug: "az-vacuum-valves",
    name: "AZ Vacuum Valves & Generators",
    nameAr: "صمامات وأجهزة تفريغ AZ",
    category: "pneumatic",
    subcategory: "valves",
    brand: "AZ Pneumatics",
    description:
      "AZ Italy vacuum sprayers and vacuum generators for industrial vacuum circuit applications. Used with vacuum suction cup systems and pneumatic vacuum handling.",
    descriptionAr:
      "رذاذ تفريغ ومولدات تفريغ من AZ الإيطالية للتطبيقات الصناعية. تستخدم مع أنظمة أكواب الشفط ومناولة التفريغ الهوائية.",
    image: "/assets/products/vacuum-suction-cups.webp",
    features: [
      "Vacuum sprayers and generators",
      "Compact body design",
      "High flow efficiency",
      "Compatible with standard fittings",
    ],
    applications: ["Vacuum handling", "Suction cup systems", "Pick-and-place automation"],
    applicationsAr: ["مناولة التفريغ", "أنظمة الشفط", "أتمتة الالتقاط والتضع"],
    featured: false,
    sortOrder: 26,
  },
  {
    id: "sw-highpressure-valves",
    slug: "sw-highpressure-valves",
    name: "SW High Pressure 2/2 Way Valves",
    nameAr: "صمامات SW عالية الضغط 2/2 طريق",
    category: "pneumatic",
    subcategory: "valves",
    brand: "SW",
    description:
      "SW High Pressure 2/2 Way Solenoid Valves for robust control in demanding high-pressure applications. Consistent performance with extreme pressure resistance for advanced fluid systems.",
    descriptionAr:
      "صمامات SW عالية الضغط 2/2 طريق للتحكم القوي في تطبيقات الضغط العالي. أداء ثابت مع مقاومة للضغط الشديد.",
    image: "/assets/products/high-pressure-regulators.webp",
    features: [
      "High pressure rated construction",
      "2/2 way NC/NO configurations",
      "Solenoid operated",
      "Stainless steel body option",
    ],
    applications: ["Oil and gas", "Chemical processing", "High-pressure testing", "Hydraulics"],
    applicationsAr: ["النفط والغاز", "المعالجة الكيميائية", "اختبار الضغط العالي", "الهيدروليك"],
    featured: false,
    sortOrder: 27,
  },

  // --- AIR PREPARATION ---
  {
    id: "frl-service-units",
    slug: "frl-service-units",
    name: "FRL Service Units (Filter-Regulator-Lubricator)",
    nameAr: "وحدات خدمة FRL (مرشح-منظم-زيت)",
    category: "pneumatic",
    subcategory: "air-preparation",
    brand: "AZ Pneumatics",
    brands: ["AZ Pneumatics", "Festo", "Airtac"],
    description:
      "Complete compressed air service unit assemblies combining air filter, pressure regulator, and lubricator. Removes condensate and particles, regulates supply pressure, and lubricates downstream components for pneumatic system reliability.",
    descriptionAr:
      "وحدات خدمة هواء مضغوط كاملة تجمع مرشح الهواء ومنظم الضغط والمزيت. تزيل الرواسب والجزيئات وتنظم ضغط التغذية وتشحم المكونات.",
    image: "/assets/products/frl-service-units.webp",
    features: [
      "Filter + Regulator + Lubricator combination",
      "Modular design for easy maintenance",
      "Automatic drain option",
      "Gauge included",
      "G1/4\" to G3/4\" port sizes",
      "40 micron standard filtration",
    ],
    specs: [
      { key: "Filtration", value: "40 micron (5 micron option)", keyAr: "التصفية" },
      { key: "Pressure Range", value: "0.5–10 bar", keyAr: "نطاق الضغط" },
      { key: "Port", value: 'G1/4" – G3/4"', keyAr: "المنفذ" },
    ],
    applications: [
      "Pneumatic system conditioning",
      "Pre-machine air treatment",
      "General industrial pneumatics",
    ],
    applicationsAr: ["تكييف الأنظمة الهوائية", "معالجة الهواء قبل الماكينة", "الهواء الهوائي الصناعي العام"],
    featured: true,
    sortOrder: 30,
  },
  {
    id: "az-filter-regulators",
    slug: "az-filter-regulators",
    name: "AZ Filter-Regulators",
    nameAr: "مرشحات منظمة AZ",
    category: "pneumatic",
    subcategory: "air-preparation",
    brand: "AZ Pneumatics",
    description:
      "AZ Italy filter-regulator combination units for compact air preparation. Available as filter unit, lubricators, pressure regulators, filter-regulators, FR+L group, and complete FRL air handling units.",
    descriptionAr:
      "وحدات مرشح منظم مدمجة من AZ الإيطالية لتجهيز الهواء. متوفرة كوحدة مرشح، مزيت، منظم ضغط، مرشح منظم، ومجموعة FR+L.",
    image: "/assets/products/frl-service-units.webp",
    features: [
      "Modular filter-regulator system",
      "Filter, lubricator, and regulator options",
      "FR+L group configurations",
      "Made in Italy",
      "Bowl with manual drain",
    ],
    applications: ["Air preparation", "Panel mounted pneumatics", "Machine tool stations"],
    applicationsAr: ["تجهيز الهواء", "الهوائيات المثبتة على اللوحة", "محطات أدوات الماكينة"],
    featured: false,
    sortOrder: 31,
  },
  {
    id: "pressure-regulators",
    slug: "pressure-regulators",
    name: "Pressure Regulators",
    nameAr: "منظمات الضغط",
    category: "pneumatic",
    subcategory: "air-preparation",
    brand: "Festo",
    brands: ["Festo", "AZ Pneumatics", "Airtac"],
    description:
      "Precision pressure regulators maintaining constant downstream pressure independent of inlet pressure and flow fluctuations. With and without pressure gauge, non-relieving and relieving types.",
    descriptionAr:
      "منظمات ضغط دقيقة تحافظ على ضغط ثابت عند المخرج بغض النظر عن تقلبات الضغط والتدفق. بمقياس ضغط وبدونه، أنواع تخفيف وغير تخفيف.",
    image: "/assets/products/frl-service-units.webp",
    features: [
      "Precision pressure regulation",
      "Relieving and non-relieving types",
      "With and without gauge",
      "Tamper-proof locking option",
    ],
    applications: ["Pneumatic circuit pressure control", "Instrumentation air", "Process control"],
    applicationsAr: ["التحكم في ضغط الدوائر الهوائية", "هواء الأجهزة", "التحكم في العمليات"],
    featured: false,
    sortOrder: 32,
  },
  {
    id: "high-pressure-regulators",
    slug: "high-pressure-regulators",
    name: "High Pressure Regulators",
    nameAr: "منظمات الضغط العالي",
    category: "pneumatic",
    subcategory: "air-preparation",
    brand: "SW",
    description:
      "High pressure regulators for gas cylinder, nitrogen, and industrial compressed gas applications. Dual-stage designs for stable low-pressure output from high-pressure gas supply.",
    descriptionAr:
      "منظمات ضغط عالي لأسطوانات الغاز والنيتروجين وتطبيقات الغاز الصناعي المضغوط. تصاميم ثنائية المرحلة لإخراج ضغط منخفض مستقر.",
    image: "/assets/products/high-pressure-regulators.webp",
    features: [
      "High inlet pressure rating",
      "Single and dual stage versions",
      "CGA and DIN connections",
      "Suitable for industrial gases",
    ],
    applications: ["Gas cylinder regulation", "Nitrogen supply", "Laboratory gas supply", "Welding"],
    applicationsAr: ["تنظيم أسطوانات الغاز", "تغذية النيتروجين", "تغذية غاز المختبر", "اللحام"],
    featured: false,
    sortOrder: 33,
  },
  {
    id: "auto-drains",
    slug: "auto-drains",
    name: "Automatic Drains",
    nameAr: "مصارف تلقائية",
    category: "pneumatic",
    subcategory: "air-preparation",
    description:
      "Automatic condensate drain valves for compressed air systems. Float-operated and timer-controlled variants prevent water accumulation in pneumatic systems, protecting downstream equipment.",
    descriptionAr:
      "صمامات تصريف تلقائي للكثافة في أنظمة الهواء المضغوط. أنواع تعمل بالعوامة والمؤقت تمنع تراكم الماء في الأنظمة الهوائية.",
    image: "/assets/products/auto-drains.webp",
    features: [
      "Float and timer operated types",
      "Automatic condensate discharge",
      "No compressed air loss in normal operation",
      "Easy installation on filter bowls",
    ],
    applications: ["Compressed air system maintenance", "Filter station drainage", "Receiver tank draining"],
    applicationsAr: ["صيانة نظام الهواء المضغوط", "تصريف محطات التصفية", "تصريف خزانات الاستقبال"],
    featured: false,
    sortOrder: 34,
  },

  // --- VACUUM ---
  {
    id: "vacuum-suction-cups",
    slug: "vacuum-suction-cups",
    name: "Vacuum Suction Cups",
    nameAr: "أكواب الشفط بالتفريغ",
    category: "pneumatic",
    subcategory: "vacuum",
    brand: "Vuototecnica",
    brands: ["Vuototecnica", "Festo", "Piab"],
    description:
      "Industrial vacuum suction cups for lifting, handling, and manipulating objects across diverse industries. VUOTOTECNICA suction cups are durable and resistant to wear. Available in flat, bellows, and oval shapes in various diameters and materials including NBR, silicone, and polyurethane.",
    descriptionAr:
      "أكواب شفط صناعية لرفع ومناولة الأشياء عبر صناعات متنوعة. أكواب VUOTOTECNICA متينة ومقاومة للتآكل. متوفرة بأشكال مسطحة وحوضية وبيضاوية بمواد NBR وسيليكون وبولي يوريثان.",
    image: "/assets/products/vacuum-suction-cups.webp",
    features: [
      "Flat, bellows, and oval cup types",
      "NBR, silicone, and polyurethane materials",
      "Diameters from 10 mm to 250 mm",
      "High vacuum compliance",
      "Suitable for food contact (silicone)",
    ],
    featuresAr: [
      "أنواع مسطحة وحوضية وبيضاوية",
      "مواد NBR وسيليكون وبولي يوريثان",
      "أقطار من 10 إلى 250 مم",
    ],
    applications: [
      "Industrial robot end-effectors",
      "Sheet metal handling",
      "Glass handling",
      "Food packaging",
      "Logistics automation",
    ],
    applicationsAr: [
      "نهايات ذراع الروبوت",
      "مناولة الصفائح المعدنية",
      "مناولة الزجاج",
      "تغليف الأغذية",
    ],
    featured: true,
    sortOrder: 40,
  },
  {
    id: "festo-vacuum-suction",
    slug: "festo-vacuum-suction",
    name: "Festo Vacuum Suction Products",
    nameAr: "منتجات شفط التفريغ فيستو",
    category: "pneumatic",
    subcategory: "vacuum",
    brand: "Festo",
    description:
      "Wide variety of Festo suction cups and grippers in different materials and sizes, suction gripper systems with cup holders, angle and height compensators, filters, and vacuum generators across various performance categories.",
    descriptionAr:
      "مجموعة واسعة من أكواب الشفط الفيستو وحوامل الكواب وعوامل تعويض الزاوية والارتفاع والمرشحات ومولدات التفريغ عبر فئات أداء مختلفة.",
    image: "/assets/brands/festo-suction-cup.jpg",
    features: [
      "Suction cups in multiple shapes and materials",
      "Cup holders with angle and height compensation",
      "Integrated vacuum generators",
      "Vacuum filters and accumulators",
    ],
    applications: ["Robot gripping", "Part handling", "Assembly automation"],
    applicationsAr: ["إمساك الروبوت", "مناولة القطع", "أتمتة التجميع"],
    featured: false,
    sortOrder: 41,
  },
  {
    id: "festo-vacuum-generator",
    slug: "festo-vacuum-generator",
    name: "Festo Vacuum Generators",
    nameAr: "مولدات التفريغ فيستو",
    category: "pneumatic",
    subcategory: "vacuum",
    brand: "Festo",
    description:
      "Festo ejector-principle vacuum generators (VAD, VN series) creating vacuum from compressed air supply. Compact body for direct cup mounting, integrated vacuum switches, and blow-off pulse for fast part release.",
    descriptionAr:
      "مولدات تفريغ فيستو بمبدأ الناشر (سلسلة VAD، VN) تولد تفريغاً من تغذية الهواء المضغوط. جسم مدمج للتثبيت المباشر على الكواب مع مفتاح تفريغ مدمج.",
    image: "/assets/brands/festo-vacuum-generator.jpg",
    features: [
      "Ejector principle (no moving parts)",
      "Integrated vacuum switch option",
      "Blow-off pulse for fast release",
      "Compact design for direct cup mounting",
    ],
    applications: ["Suction cup gripping", "Vacuum conveyors", "Component handling"],
    applicationsAr: ["إمساك بأكواب الشفط", "ناقلات التفريغ", "مناولة المكونات"],
    featured: false,
    sortOrder: 42,
  },
  {
    id: "piab-vacuum-pumps",
    slug: "piab-vacuum-pumps",
    name: "Piab COAX Vacuum Pumps",
    nameAr: "مضخات تفريغ Piab COAX",
    category: "pneumatic",
    subcategory: "vacuum",
    brand: "Piab",
    description:
      "Piab vacuum pumps and generators based on the patented COAX® technology — an advanced multi-stage ejector solution for creating vacuum with compressed air. Highly energy-efficient with up to 50% air savings compared to traditional ejectors.",
    descriptionAr:
      "مضخات ومولدات تفريغ Piab بتقنية COAX® المبوبة — حل ناشر متعدد المراحل لخلق تفريغ بالهواء المضغوط. توفير طاقة يصل إلى 50% مقارنة بالناشرات التقليدية.",
    image: "/assets/brands/piab-vacuum-pump.jpg",
    features: [
      "Patented COAX® multi-stage technology",
      "Up to 50% compressed air savings",
      "Integrated vacuum level monitoring",
      "Fast vacuum build-up",
      "Long service life",
    ],
    applications: ["Robotic pick-and-place", "Food packaging", "Electronics handling", "Sheet metal"],
    applicationsAr: ["روبوت الالتقاط والوضع", "تغليف الأغذية", "مناولة الإلكترونيات", "الصفائح المعدنية"],
    featured: false,
    sortOrder: 43,
  },
  {
    id: "piab-suction-cups",
    slug: "piab-suction-cups",
    name: "Piab Suction Cups & Soft Grippers",
    nameAr: "أكواب شفط ومشابك ناعمة Piab",
    category: "pneumatic",
    subcategory: "vacuum",
    brand: "Piab",
    description:
      "Piab suction cups and soft grippers offering endless possibilities for lifting and gripping needs. Handle board materials, food items, bags, electronic components, labels, and various objects in diverse automation scenarios.",
    descriptionAr:
      "أكواب شفط ومشابك ناعمة Piab لمتطلبات الرفع والإمساك المتنوعة. مناولة ألواح المواد والأغذية والأكياس والمكونات الإلكترونية.",
    image: "/assets/brands/piab-vacuum.jpg",
    features: [
      "Flat and bellows cup designs",
      "Silicone, nitrile, polyurethane materials",
      "Soft gripper for flexible objects",
      "Food-grade options available",
    ],
    applications: ["Food handling", "Electronics assembly", "Logistics", "Packaging"],
    applicationsAr: ["مناولة الأغذية", "تجميع الإلكترونيات", "الخدمات اللوجستية", "التغليف"],
    featured: false,
    sortOrder: 44,
  },
  {
    id: "piab-piflow",
    slug: "piab-piflow",
    name: "Piab piFLOW Vacuum Conveyor",
    nameAr: "ناقلات التفريغ Piab piFLOW",
    category: "pneumatic",
    subcategory: "vacuum",
    brand: "Piab",
    description:
      "Piab piFLOW vacuum conveying systems for gentle, enclosed powder and bulk material transfer. Hygienic construction for food, pharmaceutical, and chemical industries.",
    descriptionAr:
      "أنظمة نقل التفريغ piFLOW من Piab لنقل المسحوق والمواد السائبة بلطف ومغلق. تصميم صحي للصناعات الغذائية والصيدلانية والكيميائية.",
    image: "/assets/brands/Piab-PiFlow-Products.jpg",
    features: [
      "Enclosed gentle product transfer",
      "Hygienic 3A and ATEX options",
      "Self-cleaning filter",
      "Compact and lightweight design",
    ],
    applications: ["Powder conveying", "Pharmaceutical transfer", "Food ingredient handling", "Chemical bulk transfer"],
    applicationsAr: ["نقل المسحوق", "النقل الصيدلاني", "مناولة مكونات الأغذية", "نقل الكيماويات"],
    featured: false,
    sortOrder: 45,
  },
  {
    id: "vuototecnica-vacuum",
    slug: "vuototecnica-vacuum",
    name: "VUOTOTECNICA Vacuum Suction Products",
    nameAr: "منتجات شفط التفريغ VUOTOTECNICA",
    category: "pneumatic",
    subcategory: "vacuum",
    brand: "Vuototecnica",
    description:
      "VUOTOTECNICA Italy vacuum cups, vacuum pad systems, vacuum ejectors, suction grippers, and fluid handling tools. VUOTOTECNICA vacuum cups are durable and resistant to wear, available in wide diameter ranges for diverse applications.",
    descriptionAr:
      "أكواب تفريغ VUOTOTECNICA الإيطالية ووسادات تفريغ وناشرات وماسكات شفط وأدوات معالجة السوائل. متوفرة بأقطار متنوعة.",
    image: "/assets/products/vacuum-suction-cups.webp",
    features: [
      "Vacuum cups and suction grippers",
      "Vacuum ejectors and pumps",
      "Air suction filters",
      "Vacuum saving valves",
      "Made in Italy",
    ],
    applications: ["Industrial object handling", "Automation", "Medical technology", "Aviation"],
    applicationsAr: ["مناولة الأشياء الصناعية", "الأتمتة", "التكنولوجيا الطبية", "قطاع الطيران"],
    featured: false,
    sortOrder: 46,
  },

  // --- FITTINGS & HOSES ---
  {
    id: "pneumatic-hoses-fittings",
    slug: "pneumatic-hoses-fittings",
    name: "Pneumatic Fittings & Push-In Connectors",
    nameAr: "وصلات ومشابك الهواء الهوائية",
    category: "pneumatic",
    subcategory: "fittings",
    brand: "AZ Pneumatics",
    brands: ["AZ Pneumatics", "Festo", "Airtac"],
    description:
      "Pneumatic push-in fittings, straight and elbow connectors, T-pieces, reducers, and bulkhead fittings for tubing connections in pneumatic circuits. Quick installation, leak-free sealing, and easy release for maintenance.",
    descriptionAr:
      "وصلات هوائية بالضغط، موصلات مستقيمة وزاوية، قطع T، محولات، ووصلات عبر الجدران لتوصيلات الأنابيب في الدوائر الهوائية.",
    image: "/assets/products/pneumatic-hoses-fittings.webp",
    features: [
      "Push-in quick connect design",
      "Straight, elbow, T-piece and reducer types",
      "Metric and imperial tube sizes",
      "Color-coded by tube size",
      "One-touch release",
    ],
    applications: [
      "Compressed air distribution",
      "Pneumatic panel wiring",
      "Machine tubing connections",
    ],
    applicationsAr: ["توزيع الهواء المضغوط", "توصيل اللوحات الهوائية", "توصيلات أنابيب الماكينات"],
    featured: false,
    sortOrder: 50,
  },
  {
    id: "az-flexible-hoses",
    slug: "az-flexible-hoses",
    name: "AZ Flexible Hoses",
    nameAr: "خراطيم AZ المرنة",
    category: "pneumatic",
    subcategory: "fittings",
    brand: "AZ Pneumatics",
    description:
      "AZ Flexible Hoses designed for exceptional performance in industrial and commercial applications. Premium materials ensure flexibility, durability, and resistance to wear for transferring fluids, gases, and other materials.",
    descriptionAr:
      "خراطيم AZ المرنة مصممة للأداء الاستثنائي في التطبيقات الصناعية والتجارية. مواد فاخرة تضمن المرونة والمتانة ومقاومة التآكل.",
    image: "/assets/products/pneumatic-hoses-fittings.webp",
    features: [
      "High pressure rated PU, PA, PVC materials",
      "Kink-resistant design",
      "Wide temperature range",
      "Various diameters and lengths",
    ],
    applications: ["Air supply lines", "Fluid transfer", "Machinery connections", "Industrial automation"],
    applicationsAr: ["خطوط تغذية الهواء", "نقل السوائل", "توصيلات الماكينات", "الأتمتة الصناعية"],
    featured: false,
    sortOrder: 51,
  },
  {
    id: "aluminum-air-piping",
    slug: "aluminum-air-piping",
    name: "Aluminium Air Piping Systems",
    nameAr: "أنظمة أنابيب هواء ألومنيوم",
    category: "pneumatic",
    subcategory: "fittings",
    description:
      "Modular aluminium compressed air distribution piping systems with push-fit connections. Corrosion-free, lightweight, and fast to install compared to traditional steel pipe. Available in diameters for small workshops to large factories.",
    descriptionAr:
      "أنظمة أنابيب توزيع الهواء المضغوط الألومنيوم المعيارية بوصلات ضغط. خالية من التآكل وخفيفة الوزن وسريعة التركيب مقارنة بالأنابيب الفولاذية التقليدية.",
    image: "/assets/products/aluminum-air-piping.webp",
    features: [
      "Corrosion-free aluminium construction",
      "Push-fit quick connections",
      "Modular — easy to modify",
      "Sizes 20 mm to 90 mm diameter",
      "Internal coating for clean air",
    ],
    applications: ["Factory compressed air mains", "Workshop distribution", "Clean-room piping"],
    applicationsAr: ["رئيسيات الهواء المضغوط في المصانع", "توزيع الورش", "أنابيب الغرف النظيفة"],
    featured: false,
    sortOrder: 52,
  },

  // --- PNEUMATIC ACCESSORIES ---
  {
    id: "aodd-diaphragm-pumps",
    slug: "aodd-diaphragm-pumps",
    name: "AODD Diaphragm Pumps",
    nameAr: "مضخات الحجاب الحاجز AODD",
    category: "pneumatic",
    subcategory: "pumps",
    description:
      "Air-operated double diaphragm pumps with hygienic stainless steel, aluminium, and plastic bodies. Self-priming, can run dry, handles clean to corrosive and abrasive fluids. Fluid discharge pressure up to 8 bar.",
    descriptionAr:
      "مضخات حجاب حاجز مزدوجة تعمل بالهواء بأجسام من الفولاذ المقاوم للصدأ والألومنيوم والبلاستيك. شفط ذاتي، تعمل جافة، تتعامل مع السوائل النظيفة إلى الكاشطة.",
    image: "/assets/products/aodd-diaphragm-pumps.webp",
    features: [
      "Self-priming, can run dry without damage",
      "Handles abrasive and corrosive fluids",
      "Hygienic AISI stainless steel option",
      "Aluminium and plastic body options",
      "No electricity required",
    ],
    specs: [
      { key: "Fluid Discharge Pressure", value: "Up to 8 bar", keyAr: "ضغط تصريف السائل" },
      { key: "Intake/Discharge Size", value: '½" to 3" (inch)', keyAr: "حجم المدخل/المخرج" },
      { key: "Body Materials", value: "AISI SS, Aluminium, Plastic", keyAr: "مواد الجسم" },
    ],
    applications: [
      "Chemical transfer",
      "Food and beverage",
      "Water treatment",
      "Mining slurry transfer",
      "Paint and coatings",
    ],
    applicationsAr: ["نقل الكيماويات", "الأغذية والمشروبات", "معالجة المياه", "نقل طمي المناجم"],
    featured: true,
    sortOrder: 55,
  },
  {
    id: "air-bellows",
    slug: "air-bellows",
    name: "Air Bellows (Pneumatic Springs)",
    nameAr: "مناير الهواء (نوابض هوائية)",
    category: "pneumatic",
    subcategory: "accessories",
    description:
      "Pneumatic air bellows (air springs) for vibration isolation, leveling, and load support applications. Single, double, and triple convolution variants for heavy industrial and vehicle applications.",
    descriptionAr:
      "مناير هواء للعزل من الاهتزاز والتسوية ودعم الحمل. أنواع أحادية وثنائية وثلاثية التكرار للتطبيقات الصناعية الثقيلة.",
    image: "/assets/products/air-bellows.webp",
    features: [
      "Single, double, and triple convolution",
      "Load capacities from 1 kN to 200+ kN",
      "Excellent vibration isolation",
      "Height adjustable by air pressure",
    ],
    applications: [
      "Machine vibration isolation",
      "Vehicle suspension",
      "Press cushioning",
      "Industrial leveling systems",
    ],
    applicationsAr: ["عزل اهتزاز الماكينات", "تعليق المركبات", "تخميد المكابس", "أنظمة التسوية الصناعية"],
    featured: false,
    sortOrder: 56,
  },
  {
    id: "pneumatic-vibrators",
    slug: "pneumatic-vibrators",
    name: "Pneumatic Vibrators",
    nameAr: "محركات اهتزاز هوائية",
    category: "pneumatic",
    subcategory: "accessories",
    description:
      "Pneumatic vibrators for bin activation, silo discharge, conveyor assistance, and compaction. Ball, roller, turbine, and piston types available. Stainless steel options for food and chemical applications.",
    descriptionAr:
      "محركات اهتزاز هوائية لتفريغ الصوامع والحاويات ومساعدة الناقلات والضغط. أنواع بكرة وتوربين ومكبس. خيارات فولاذ مقاوم للصدأ.",
    image: "/assets/products/pneumatic-vibrators.webp",
    features: [
      "Ball, roller, turbine, and piston types",
      "Stainless steel for hygienic applications",
      "Wide frequency and force range",
      "Simple compressed air operation",
    ],
    applications: ["Bin activation", "Silo discharge", "Conveyor assistance", "Concrete compaction"],
    applicationsAr: ["تفعيل الحاويات", "تفريغ الصوامع", "مساعدة الناقلات", "ضغط الخرسانة"],
    featured: false,
    sortOrder: 57,
  },
  {
    id: "shock-absorbers",
    slug: "shock-absorbers",
    name: "Shock Absorbers",
    nameAr: "ماصات الصدمات",
    category: "pneumatic",
    subcategory: "accessories",
    brand: "SMAC",
    description:
      "High quality SMAC shock absorbers — mechanical or hydraulic devices absorbing and dampening shock impulses in industrial automation. Used in millions of industrial machine designs worldwide for controlled deceleration.",
    descriptionAr:
      "ماصات صدمات عالية الجودة SMAC — أجهزة ميكانيكية أو هيدروليكية لامتصاص وتخفيف صدمات الارتطام في الأتمتة الصناعية.",
    image: "/assets/products/shock-absorbers.webp",
    features: [
      "Self-compensating oil-filled hydraulic type",
      "Adjustable and non-adjustable models",
      "Energy absorption calculated per application",
      "Wide stroke and bore range",
    ],
    applications: [
      "Machine end-stops",
      "Robot axis deceleration",
      "Conveyor stops",
      "Die casting machines",
    ],
    applicationsAr: ["نهايات الشوط في الماكينات", "تخفيف سرعة محور الروبوت", "توقف الناقلات"],
    featured: false,
    sortOrder: 58,
  },
  {
    id: "parker-indicators-panels",
    slug: "parker-indicators-panels",
    name: "Parker Indicators & Fuel Tanker Panels",
    nameAr: "مؤشرات باركر ولوحات صهاريج الوقود",
    category: "pneumatic",
    subcategory: "accessories",
    brand: "Parker Hannifin",
    description:
      "Parker PVL-series visual level indicators and custom-assembled fuel tanker panel boards assembled per customer specification. For fuel level indication and fluid monitoring on tanker vehicles.",
    descriptionAr:
      "مؤشرات مستوى بصرية من سلسلة PVL باركر ولوحات صهاريج الوقود المجمعة حسب مواصفات العميل. لمؤشرات مستوى الوقود ومراقبة السوائل.",
    image: "/assets/products/parker-indicators-panels.webp",
    features: [
      "Parker PVL-series visual indicators",
      "Custom fuel tanker panel assembly",
      "Hydraulic and pneumatic integration",
      "Customer specification build",
    ],
    applications: ["Fuel tanker vehicles", "Fluid level monitoring", "Industrial tank gauging"],
    applicationsAr: ["مركبات صهاريج الوقود", "مراقبة مستوى السوائل", "قياس الخزانات الصناعية"],
    featured: false,
    sortOrder: 59,
  },
];

// ============================================================
// HYDRAULIC PRODUCTS — Business Priority #2
// ============================================================

const hydraulicProducts: Product[] = [
  {
    id: "hydraulic-valves-pumps",
    slug: "hydraulic-valves-pumps",
    name: "Hydraulic Valves & Pumps",
    nameAr: "صمامات ومضخات هيدروليكية",
    category: "hydraulic",
    subcategory: "valves-pumps",
    brand: "Parker Hannifin",
    brands: ["Parker Hannifin", "Bosch Rexroth"],
    description:
      "On/off solenoid valves, proportional solenoids, manifold valves, hydraulic gear and piston pumps, and hydraulic filters for fluid power applications. Suitable for high-pressure industrial hydraulic circuits.",
    descriptionAr:
      "صمامات كهربائية تشغيل/إيقاف وتناسبية وبيانية ومضخات وتروس ومكباس هيدروليكية ومرشحات لتطبيقات القوة السائلة.",
    image: "/assets/products/hydraulic-valves-pumps.webp",
    features: [
      "On/off and proportional solenoid valves",
      "Gear, piston, and vane pumps",
      "High pressure hydraulic filters",
      "Manifold block assemblies",
      "Cartridge valve options",
    ],
    specs: [
      { key: "System Pressure", value: "Up to 350 bar", keyAr: "ضغط النظام" },
      { key: "Flow Rate", value: "Up to 250 L/min", keyAr: "معدل التدفق" },
    ],
    applications: [
      "Heavy machinery",
      "Construction equipment",
      "Industrial presses",
      "Offshore and marine",
    ],
    applicationsAr: ["الماكينات الثقيلة", "معدات البناء", "المكابس الصناعية", "البحرية والبحرية"],
    featured: true,
    sortOrder: 100,
  },
  {
    id: "bosch-rexroth-hydraulics",
    slug: "bosch-rexroth-hydraulics",
    name: "Bosch Rexroth Hydraulic Components",
    nameAr: "مكونات هيدروليك بوش ريكسروث",
    category: "hydraulic",
    subcategory: "valves-pumps",
    brand: "Bosch Rexroth",
    description:
      "Bosch Rexroth industrial hydraulics including proportional directional control valves, axial piston pumps (A10V, A11V series), linear motion technology, and hydraulic power units.",
    descriptionAr:
      "هيدروليك صناعي بوش ريكسروث يشمل صمامات تحكم اتجاهية تناسبية ومضخات كباسية محورية (سلسلة A10V، A11V) وتكنولوجيا الحركة الخطية ووحدات طاقة هيدروليكية.",
    image: "/assets/products/hydraulic-valves-pumps.webp",
    features: [
      "Proportional directional control valves",
      "A10V / A11V axial piston pumps",
      "Servo-hydraulic control options",
      "Integrated electronics",
    ],
    applications: ["Mobile machinery", "Industrial presses", "Steel industry", "Marine systems"],
    applicationsAr: ["الماكينات المتنقلة", "المكابس الصناعية", "صناعة الفولاذ", "الأنظمة البحرية"],
    featured: false,
    sortOrder: 101,
  },
  {
    id: "hydraulic-cylinders",
    slug: "hydraulic-cylinders",
    name: "Hydraulic Cylinders",
    nameAr: "أسطوانات هيدروليكية",
    category: "hydraulic",
    subcategory: "cylinders",
    brand: "Parker Hannifin",
    description:
      "Parker and Bosch Rexroth hydraulic cylinders for heavy duty linear force applications. Tie-rod, welded, and telescopic variants for construction, agricultural, and industrial machinery.",
    descriptionAr:
      "أسطوانات هيدروليكية باركر وبوش ريكسروث لتطبيقات القوة الخطية الثقيلة. أنواع ربطية ومحامة وتلسكوبية للماكينات الإنشائية والزراعية والصناعية.",
    image: "/assets/products/hydraulic-valves-pumps.webp",
    features: [
      "Tie-rod, welded, and telescopic types",
      "Operating pressures to 350 bar",
      "Bore sizes 40–500 mm",
      "Integrated position feedback available",
    ],
    applications: [
      "Construction equipment",
      "Agricultural machinery",
      "Industrial presses",
      "Marine deck equipment",
    ],
    applicationsAr: ["معدات البناء", "الآلات الزراعية", "المكابس الصناعية", "معدات سطح السفينة"],
    featured: false,
    sortOrder: 102,
  },
  {
    id: "hydraulic-power-units",
    slug: "hydraulic-power-units",
    name: "Hydraulic Power Units (HPU)",
    nameAr: "وحدات الطاقة الهيدروليكية",
    category: "hydraulic",
    subcategory: "valves-pumps",
    description:
      "Complete hydraulic power units (HPU) with motor-pump assembly, reservoir, pressure relief valve, filters, and gauges. Custom configurations available for specific industrial applications.",
    descriptionAr:
      "وحدات طاقة هيدروليكية كاملة مع تجميع محرك-مضخة وخزان وصمام تخفيف الضغط ومرشحات ومقاييس. تكوينات مخصصة متاحة.",
    image: "/assets/products/hydraulic-valves-pumps.webp",
    features: [
      "Complete HPU assemblies",
      "Motor-pump unit",
      "Reservoir with filtration",
      "Pressure, temperature, and level gauges",
      "Custom configurations",
    ],
    applications: ["Industrial machinery", "Test rigs", "Mobile equipment", "Marine systems"],
    applicationsAr: ["الماكينات الصناعية", "حامل الاختبار", "المعدات المتنقلة", "الأنظمة البحرية"],
    featured: false,
    sortOrder: 103,
  },
  {
    id: "hydraulic-filters",
    slug: "hydraulic-filters",
    name: "Hydraulic Filters & Filtration Units",
    nameAr: "مرشحات ووحدات ترشيح هيدروليكية",
    category: "hydraulic",
    subcategory: "filtration",
    brand: "Parker Hannifin",
    description:
      "Parker hydraulic filters for pressure, return, and suction line applications. High-efficiency elements maintaining system cleanliness to ISO cleanliness codes. Bypass indicators for element change reminders.",
    descriptionAr:
      "مرشحات هيدروليكية باركر لخطوط الضغط والعودة والشفط. عناصر عالية الكفاءة للحفاظ على نظافة النظام وفق رموز النظافة ISO.",
    image: "/assets/products/hydraulic-valves-pumps.webp",
    features: [
      "Pressure, return, and suction types",
      "High-efficiency filter elements",
      "Bypass indicator",
      "ISO cleanliness code compliance",
      "Multi-pass efficiency ratings",
    ],
    applications: ["Hydraulic systems", "Lubrication systems", "Gearboxes", "Process oil filtration"],
    applicationsAr: ["الأنظمة الهيدروليكية", "أنظمة التشحيم", "علب التروس", "ترشيح الزيت الصناعي"],
    featured: false,
    sortOrder: 104,
  },
  {
    id: "hydraulic-hoses-fittings",
    slug: "hydraulic-hoses-fittings",
    name: "Hydraulic Hoses & Fittings",
    nameAr: "خراطيم ووصلات هيدروليكية",
    category: "hydraulic",
    subcategory: "hoses",
    brand: "Parker Hannifin",
    description:
      "Parker high-pressure hydraulic hoses, JIC and BSP fittings, and crimped assemblies for hydraulic circuit connections. Rated to 420+ bar depending on hose type and diameter.",
    descriptionAr:
      "خراطيم هيدروليكية عالية الضغط من باركر، وصلات JIC وBSP، وتجميعات مضغوطة لتوصيلات الدائرة الهيدروليكية. مقدرة لـ420+ بار.",
    image: "/assets/products/hydraulic-valves-pumps.webp",
    features: [
      "High pressure rated up to 420 bar",
      "JIC, BSP, ORFS fitting standards",
      "Wire braid and spiral hose types",
      "Crimp-fitted assemblies",
    ],
    applications: ["Machine hydraulic circuits", "Offshore equipment", "Construction machinery"],
    applicationsAr: ["دوائر هيدروليك الماكينات", "المعدات البحرية", "ماكينات البناء"],
    featured: false,
    sortOrder: 105,
  },
  {
    id: "hydraulic-manifolds",
    slug: "hydraulic-manifolds",
    name: "Hydraulic Manifold Blocks",
    nameAr: "كتل التوزيع الهيدروليكية",
    category: "hydraulic",
    subcategory: "valves-pumps",
    brand: "Bosch Rexroth",
    description:
      "Custom and standard hydraulic manifold blocks for integrating multiple valves in compact circuit assemblies. Aluminium and steel construction, machined to specification for leak-free multi-valve mounting.",
    descriptionAr:
      "كتل توزيع هيدروليكية مخصصة وقياسية لتكامل صمامات متعددة في تجميعات دائرة مدمجة. بناء من الألومنيوم والفولاذ.",
    image: "/assets/products/hydraulic-valves-pumps.webp",
    features: [
      "Custom and standard configurations",
      "Aluminium and steel materials",
      "D03, D05, D08 valve mounting patterns",
      "Machined to specification",
    ],
    applications: ["Compact hydraulic circuits", "Machine tool hydraulics", "Special purpose machines"],
    applicationsAr: ["الدوائر الهيدروليكية المدمجة", "هيدروليك أدوات الماكينة", "الماكينات الخاصة"],
    featured: false,
    sortOrder: 106,
  },
  {
    id: "ss-ball-valves",
    slug: "ss-ball-valves",
    name: "Stainless Steel Ball Valves",
    nameAr: "صمامات كروية من الفولاذ المقاوم للصدأ",
    category: "hydraulic",
    subcategory: "valves-pumps",
    description:
      "Stainless steel full-bore ball valves for isolation in hydraulic, pneumatic, and process piping systems. BSP and NPT thread ends. Suitable for corrosive and high-pressure media.",
    descriptionAr:
      "صمامات كروية ذات فتحة كاملة من الفولاذ المقاوم للصدأ للعزل في أنظمة الأنابيب الهيدروليكية والهوائية والعملية. خيوط BSP وNPT.",
    image: "/assets/brands/ss-ball-valve.jpg",
    features: [
      "Full bore design for low pressure drop",
      "BSP and NPT thread connections",
      "SS316 and SS304 body options",
      "PTFE seat for chemical resistance",
    ],
    applications: ["Hydraulic isolation", "Chemical lines", "Water treatment", "Oil and gas"],
    applicationsAr: ["عزل هيدروليكي", "خطوط الكيماويات", "معالجة المياه", "النفط والغاز"],
    featured: false,
    sortOrder: 107,
  },
];

// ============================================================
// ELECTRICAL & INSTRUMENTATION — Business Priority #3
// ============================================================

const electricalProducts: Product[] = [
  {
    id: "industrial-sensors-controllers",
    slug: "industrial-sensors-controllers",
    name: "Industrial Sensors & Controllers",
    nameAr: "حساسات ومتحكمات صناعية",
    category: "electrical",
    subcategory: "sensors",
    brands: ["SICK", "IFM Electronic", "Fotek", "Balluff", "Datalogic", "Omron", "Honeywell"],
    description:
      "Inductive, capacitive, photoelectric, and ultrasonic industrial sensors from SICK, IFM, Datalogic, Omron, Balluff, and Fotek brands. Includes SSR, thermocouples, temperature controllers, and optical reflectors.",
    descriptionAr:
      "حساسات صناعية حثية وسعوية وكهروضوئية وفوق صوتية من SICK وIFM وDatalogic وOmron وBalluff وFotek. تشمل SSR ومزدوجات حرارية ومتحكمات حرارة.",
    image: "/assets/products/industrial-sensors-controllers.webp",
    features: [
      "Inductive, capacitive, photoelectric types",
      "NPN and PNP output options",
      "IO-Link compatible models",
      "SSR and thermocouple options",
      "Temperature controller range",
    ],
    applications: [
      "Machine position detection",
      "Conveyor object counting",
      "Temperature monitoring",
      "Safety applications",
    ],
    applicationsAr: [
      "كشف موضع الماكينة",
      "عد الأشياء على الناقلات",
      "مراقبة درجة الحرارة",
      "تطبيقات السلامة",
    ],
    featured: false,
    sortOrder: 200,
  },
  {
    id: "sick-optical-sensors",
    slug: "sick-optical-sensors",
    name: "SICK Optical Sensors & Safety Systems",
    nameAr: "حساسات SICK البصرية وأنظمة السلامة",
    category: "electrical",
    subcategory: "sensors",
    brand: "SICK Sensor Intelligence",
    description:
      "SICK optical sensors including photoelectric sensors, laser scanners, safety light curtains, and industrial vision systems. Renowned for precision sensing in factory automation and safety applications.",
    descriptionAr:
      "حساسات بصرية SICK تشمل حساسات كهروضوئية وماسحات ليزرية وستائر أمان ضوئية وأنظمة رؤية صناعية. معروفة بالاستشعار الدقيق في أتمتة المصنع.",
    image: "/assets/products/industrial-sensors-controllers.webp",
    features: [
      "Photoelectric and laser sensors",
      "Safety light curtains (Type 2 & 4)",
      "Laser area scanners",
      "Industrial vision systems",
      "IO-Link integration",
    ],
    applications: [
      "Machine safety guarding",
      "Object detection and counting",
      "Collision avoidance",
      "Quality inspection",
    ],
    applicationsAr: ["تأمين الماكينات", "اكتشاف الأشياء وعدها", "تجنب الاصطدام", "فحص الجودة"],
    featured: false,
    sortOrder: 201,
  },
  {
    id: "ifm-process-sensors",
    slug: "ifm-process-sensors",
    name: "IFM Process Sensors (Flow & Pressure)",
    nameAr: "حساسات العمليات IFM (تدفق وضغط)",
    category: "electrical",
    subcategory: "sensors",
    brand: "IFM Electronic",
    description:
      "IFM Electronic position sensors, process sensors for flow, pressure, and temperature monitoring, and IO-Link master modules for smart factory integration. Robust industrial-grade construction.",
    descriptionAr:
      "حساسات موضع IFM Electronic وحساسات عمليات للتدفق والضغط ودرجة الحرارة ووحدات IO-Link الرئيسية للتكامل مع المصنع الذكي.",
    image: "/assets/products/industrial-sensors-controllers.webp",
    features: [
      "Flow, pressure, and temperature sensors",
      "IO-Link master modules",
      "Position and inclination sensors",
      "Flush and non-flush mounting",
    ],
    applications: ["Process monitoring", "Smart factory", "Water treatment", "Food and beverage"],
    applicationsAr: ["مراقبة العمليات", "المصنع الذكي", "معالجة المياه", "الأغذية والمشروبات"],
    featured: false,
    sortOrder: 202,
  },
  {
    id: "datalogic-barcode-scanners",
    slug: "datalogic-barcode-scanners",
    name: "Datalogic Barcode Scanners & Safety Barriers",
    nameAr: "ماسحات باركود وحواجز أمان Datalogic",
    category: "electrical",
    subcategory: "sensors",
    brand: "Datalogic",
    description:
      "Datalogic photoelectric sensors, safety light curtains, barcode scanners, and optical verification systems for industrial automation, logistics, and packaging lines.",
    descriptionAr:
      "حساسات كهروضوئية Datalogic وحواجز أمان وماسحات باركود وأنظمة تحقق بصرية للأتمتة الصناعية والخدمات اللوجستية وخطوط التعبئة.",
    image: "/assets/products/industrial-sensors-controllers.webp",
    features: [
      "Barcode and 2D code readers",
      "Safety light barriers",
      "Photoelectric sensors",
      "Image-based verification",
    ],
    applications: ["Logistics automation", "Packaging lines", "Machine safety", "Warehousing"],
    applicationsAr: ["أتمتة الخدمات اللوجستية", "خطوط التعبئة", "سلامة الماكينة", "المستودعات"],
    featured: false,
    sortOrder: 203,
  },
  {
    id: "current-transformers-meters",
    slug: "current-transformers-meters",
    name: "Current Transformers & Panel Meters",
    nameAr: "محولات التيار وأجهزة القياس اللوحية",
    category: "electrical",
    subcategory: "instrumentation",
    brands: ["Fuji Electric", "Schneider Electric"],
    description:
      "Current transformers with accuracy class ranges 0.2, 0.2S, 0.5, 0.5S, 1, 3. Analogue and digital ammeters, voltmeters, power analyzers, and power factor meters for switchgear panel instrumentation.",
    descriptionAr:
      "محولات تيار بفئات دقة 0.2، 0.2S، 0.5، 0.5S، 1، 3. أميتر وفولتميتر تناظري ورقمي ومحللات طاقة وأجهزة عامل الطاقة للوحات التوزيع.",
    image: "/assets/products/current-transformers-meters.webp",
    features: [
      "Class 0.2S accuracy available",
      "Analogue and digital display types",
      "Single and three-phase variants",
      "DIN rail and panel mounting",
      "Wide primary CT ratios",
    ],
    specs: [
      { key: "CT Accuracy Classes", value: "0.2, 0.2S, 0.5, 0.5S, 1, 3", keyAr: "فئات دقة CT" },
      { key: "Display", value: "Analogue and Digital", keyAr: "العرض" },
    ],
    applications: [
      "Switchgear panels",
      "Power distribution boards",
      "Motor control centers",
      "Industrial energy monitoring",
    ],
    applicationsAr: ["لوحات التوزيع الكهربائي", "ألواح توزيع الطاقة", "مراكز التحكم في المحركات"],
    featured: true,
    sortOrder: 204,
  },
  {
    id: "solid-state-relays",
    slug: "solid-state-relays",
    name: "Solid State Relays (SSR)",
    nameAr: "مرحلات الحالة الصلبة SSR",
    category: "electrical",
    subcategory: "control",
    brands: ["Omron", "Fotek", "Autonics"],
    description:
      "Solid state relays for switching AC and DC loads without mechanical contacts. Single and three-phase types available. DC and AC control input. For temperature control, heater switching, and motor soft starting.",
    descriptionAr:
      "مرحلات حالة صلبة لتشغيل أحمال AC وDC بدون جهات اتصال ميكانيكية. أنواع أحادية وثلاثية الطور. تحكم DC وAC. لتحكم الحرارة وتشغيل السخانات.",
    image: "/assets/products/industrial-sensors-controllers.webp",
    features: [
      "No moving parts — long service life",
      "DC and AC control input",
      "Zero-crossing and instant-on versions",
      "Single and three-phase",
      "Panel and DIN rail mounting",
    ],
    applications: [
      "Temperature control heaters",
      "Oven and furnace control",
      "Motor soft starting",
      "Industrial process control",
    ],
    applicationsAr: ["سخانات التحكم في الحرارة", "تحكم الأفران", "بدء تشغيل المحركات ناعماً", "التحكم في العمليات"],
    featured: false,
    sortOrder: 205,
  },
  {
    id: "temperature-controllers",
    slug: "temperature-controllers",
    name: "Digital Temperature Controllers",
    nameAr: "متحكمات الحرارة الرقمية",
    category: "electrical",
    subcategory: "control",
    brands: ["Omron", "Autonics", "Fotek", "Honeywell"],
    description:
      "PID digital temperature controllers for industrial process temperature regulation. Thermocouple and RTD input compatible. Relay, SSR, and 4-20mA output options. DIN 48×48 and 72×72 mm form factors.",
    descriptionAr:
      "متحكمات حرارة رقمية PID لتنظيم درجة الحرارة في العمليات الصناعية. متوافقة مع مزدوجات حرارية وRTD. خيارات إخراج مرحل وSSR و4-20mA.",
    image: "/assets/products/industrial-sensors-controllers.webp",
    features: [
      "PID auto-tuning function",
      "Thermocouple (J, K, T, E) and RTD input",
      "Relay and SSR output options",
      "4-20mA analogue output available",
      "48×48, 72×72, 96×96 DIN sizes",
    ],
    applications: [
      "Plastic injection moulding",
      "Bakery and food processing",
      "Chemical reactors",
      "Heat treatment furnaces",
    ],
    applicationsAr: ["حقن البلاستيك", "المخابز ومعالجة الأغذية", "المفاعلات الكيميائية", "أفران المعالجة الحرارية"],
    featured: false,
    sortOrder: 206,
  },
  {
    id: "contactors-starters",
    slug: "contactors-starters",
    name: "Contactors & Motor Starters",
    nameAr: "كونتاكتورات وبادئات المحركات",
    category: "electrical",
    subcategory: "switchgear",
    brands: ["Schneider Electric", "Fuji Electric", "Siemens", "Mitsubishi Electric"],
    description:
      "Magnetic contactors, direct-on-line (DOL) starters, star-delta starters, and thermal overload relays for motor switching and protection. IEC and NEMA rated for AC3 and AC4 duty categories.",
    descriptionAr:
      "كونتاكتورات مغناطيسية وبادئات مباشرة نجمة-مثلث ومرحلات حرارية لتشغيل وحماية المحركات. مقدرة وفق IEC وNEMA لفئات AC3 وAC4.",
    image: "/assets/products/industrial-sensors-controllers.webp",
    features: [
      "IEC and NEMA rated",
      "Auxiliary contact blocks",
      "Thermal overload relay",
      "DOL and star-delta configurations",
      "Wide current rating range",
    ],
    applications: [
      "Motor control panels",
      "Pumps and fans",
      "Compressors",
      "Conveyor drives",
    ],
    applicationsAr: ["لوحات التحكم في المحركات", "المضخات والمراوح", "الضاغطات", "محركات الناقلات"],
    featured: false,
    sortOrder: 207,
  },
  {
    id: "circuit-breakers",
    slug: "circuit-breakers",
    name: "Circuit Breakers & MCBs",
    nameAr: "قواطع الدوائر وMCB",
    category: "electrical",
    subcategory: "switchgear",
    brands: ["Schneider Electric", "Mitsubishi Electric", "Eaton", "Siemens"],
    description:
      "Miniature circuit breakers (MCB), moulded case circuit breakers (MCCB), and air circuit breakers (ACB) for electrical panel protection and distribution. Schneider, Mitsubishi, Eaton, and Siemens brands available.",
    descriptionAr:
      "قواطع مُصغرة MCB وقواطع جسم مصبوب MCCB وقواطع هواء ACB لحماية وتوزيع اللوحات الكهربائية. متوفرة من شنايدر وميتسوبيشي وإيتون وسيمنز.",
    image: "/assets/products/current-transformers-meters.webp",
    features: [
      "MCB, MCCB, and ACB types",
      "1P, 2P, 3P, and 4P pole options",
      "Thermal-magnetic trip mechanism",
      "IEC 60947 compliant",
    ],
    applications: ["Electrical distribution boards", "Motor protection", "Switchgear panels"],
    applicationsAr: ["ألواح توزيع الكهرباء", "حماية المحركات", "لوحات التوزيع"],
    featured: false,
    sortOrder: 208,
  },
  {
    id: "pizzato-safety-switches",
    slug: "pizzato-safety-switches",
    name: "Pizzato Safety Switches",
    nameAr: "مفاتيح أمان Pizzato",
    category: "electrical",
    subcategory: "safety",
    brand: "Pizzato Elettrica",
    description:
      "Pizzato Elettrica safety switches with separate actuator, emergency stop modules, and position limit switches for machine safety guarding. Category 4 / PLe rated. Suitable for ISO 13849 compliance.",
    descriptionAr:
      "مفاتيح أمان Pizzato Elettrica بمشغلات منفصلة ووحدات توقف طوارئ ومفاتيح حدود موضع لتأمين الماكينات. مقدرة Category 4 / PLe. متوافقة مع ISO 13849.",
    image: "/assets/products/industrial-sensors-controllers.webp",
    features: [
      "Safety category 4 / PLe rated",
      "Positive opening contacts",
      "Separate actuator design",
      "Tongue, hinge, and handle actuators",
      "ISO 13849 safety compliant",
    ],
    applications: ["Machine guarding", "Safety interlocks", "Door monitoring", "Access control"],
    applicationsAr: ["تأمين الماكينات", "تشابك الأمان", "مراقبة الأبواب", "التحكم في الوصول"],
    featured: false,
    sortOrder: 209,
  },
  {
    id: "honeywell-limit-switches",
    slug: "honeywell-limit-switches",
    name: "Honeywell Limit Switches & Instruments",
    nameAr: "مفاتيح حدود هانيويل وأجهزة القياس",
    category: "electrical",
    subcategory: "sensors",
    brand: "Honeywell",
    description:
      "Honeywell limit switches, pressure transmitters, temperature controllers, and control instruments for industrial automation and process industries. Wide range of roller plunger and lever actuated types.",
    descriptionAr:
      "مفاتيح حدود هانيويل وأجهزة إرسال الضغط ومتحكمات الحرارة وأجهزة التحكم للأتمتة الصناعية وصناعات العمليات.",
    image: "/assets/products/industrial-sensors-controllers.webp",
    features: [
      "Roller plunger and lever types",
      "Sealed and IP67 rated options",
      "Pressure transmitters range",
      "Wide ambient temperature range",
    ],
    applications: [
      "Machine end-of-travel detection",
      "Position feedback",
      "Process pressure monitoring",
    ],
    applicationsAr: ["كشف نهاية الشوط", "تغذية راجعة للموضع", "مراقبة ضغط العمليات"],
    featured: false,
    sortOrder: 210,
  },
  {
    id: "variable-speed-drives",
    slug: "variable-speed-drives",
    name: "Variable Speed Drives (VFD/Inverters)",
    nameAr: "محركات ذات سرعة متغيرة (عاكس تردد)",
    category: "electrical",
    subcategory: "drives",
    brands: ["Schneider Electric", "Mitsubishi Electric", "Fuji Electric"],
    description:
      "Variable frequency drives (VFD) and inverters for motor speed control and energy savings. V/f and vector control modes. EMC filters, braking resistors, and reactor accessories available.",
    descriptionAr:
      "محركات ذات تردد متغير VFD وعواكس للتحكم في سرعة المحرك وتوفير الطاقة. أوضاع تحكم V/f وناقل. مرشحات EMC ومقاومات كبح ومفاعلات متوفرة.",
    image: "/assets/products/current-transformers-meters.webp",
    features: [
      "V/f and closed-loop vector control",
      "Wide power range available",
      "Built-in PID for process control",
      "EMC compliance",
      "Modbus and Profibus communication",
    ],
    applications: [
      "Pump and fan speed control",
      "Conveyor speed regulation",
      "Compressor control",
      "HVAC systems",
    ],
    applicationsAr: ["التحكم في سرعة المضخات والمراوح", "تنظيم سرعة الناقلات", "التحكم في الضاغطات"],
    featured: false,
    sortOrder: 211,
  },
];

// ============================================================
// MECHANICAL PRODUCTS — Business Priority #4
// ============================================================

const mechanicalProducts: Product[] = [
  {
    id: "bonfiglioli-gearboxes-motors",
    slug: "bonfiglioli-gearboxes-motors",
    name: "Bonfiglioli Gearboxes & Gearmotors",
    nameAr: "علب تروس ومحركات تروس بونفيليولي",
    category: "mechanical",
    subcategory: "gearboxes",
    brand: "Bonfiglioli",
    description:
      "Bonfiglioli complete range of helical, bevel-helical, worm, and planetary gearmotors, mechanical speed variators, coupling chains, sprockets, and pulleys for industrial automation and material handling.",
    descriptionAr:
      "مجموعة كاملة من محركات تروس بونفيليولي الحلزونية والمخروطية الحلزونية ودودة الحلزون والكوكبية، ومتغيرات السرعة الميكانيكية والسلاسل والبكرات.",
    image: "/assets/products/bonfiglioli-gearboxes-motors.webp",
    features: [
      "Helical, bevel-helical, worm, and planetary types",
      "Mechanical speed variators",
      "IEC standard motor flanges",
      "High efficiency gearing",
      "Wide ratio range",
    ],
    applications: [
      "Conveyor drives",
      "Agitators and mixers",
      "Material handling",
      "Packaging machines",
      "Industrial automation",
    ],
    applicationsAr: ["محركات الناقلات", "المحركات والخلاطات", "مناولة المواد", "ماكينات التغليف"],
    featured: true,
    sortOrder: 300,
  },
  {
    id: "unimec-screw-jacks",
    slug: "unimec-screw-jacks",
    name: "Unimec Screw Jacks & Bevel Gearboxes",
    nameAr: "رافعات لولبية وعلب تروس مخروطية Unimec",
    category: "mechanical",
    subcategory: "gearboxes",
    brand: "Unimec",
    description:
      "Unimec mechanical screw jacks, bevel gearboxes, speed reducers, and power transmission drive components for industrial positioning and lifting applications. Worm screw and ball screw variants available.",
    descriptionAr:
      "رافعات لولبية ميكانيكية وعلب تروس مخروطية ومخفضات سرعة ومكونات نقل الحركة من Unimec لتطبيقات التموضع الصناعي والرفع.",
    image: "/assets/products/bonfiglioli-gearboxes-motors.webp",
    features: [
      "Worm screw and ball screw jacks",
      "Bevel and bevel-helical gearboxes",
      "Self-locking worm versions",
      "Stainless steel option",
      "Made in Italy",
    ],
    applications: [
      "Industrial lifting",
      "Positioning systems",
      "Synchronized multi-jack systems",
      "Press applications",
    ],
    applicationsAr: ["الرفع الصناعي", "أنظمة التموضع", "أنظمة رافعات متعددة متزامنة", "تطبيقات المكابس"],
    featured: false,
    sortOrder: 301,
  },
  {
    id: "gas-springs-dampers",
    slug: "gas-springs-dampers",
    name: "Gas Springs & Dampers",
    nameAr: "النوابض الغازية والمخمدات",
    category: "mechanical",
    subcategory: "springs",
    description:
      "Corrosion-resistant, anti-vibrant gas springs with high performance capabilities for automation, medical technology, aviation, furniture manufacturing, and industrial applications. Extension and compression types.",
    descriptionAr:
      "نوابض غازية مقاومة للتآكل ومضادة للاهتزاز لتطبيقات الأتمتة والطب والطيران وتصنيع الأثاث والصناعة.",
    image: "/assets/products/gas-springs-dampers.webp",
    features: [
      "Extension and compression types",
      "Stainless steel and chrome plated",
      "Wide force range",
      "Temperature range -40°C to +80°C",
      "Lock and adjustable variants",
    ],
    applications: [
      "Automotive trunk lids and hoods",
      "Medical equipment",
      "Furniture and seating",
      "Machine door opening systems",
      "Aviation ground support",
    ],
    applicationsAr: [
      "أغطية صناديق وغطاء محرك السيارات",
      "المعدات الطبية",
      "الأثاث والمقاعد",
      "أنظمة فتح أبواب الماكينات",
    ],
    featured: false,
    sortOrder: 302,
  },
  {
    id: "cable-drag-chains",
    slug: "cable-drag-chains",
    name: "Cable Drag Chains (Energy Chains)",
    nameAr: "سلاسل سحب الكابلات (سلاسل الطاقة)",
    category: "mechanical",
    subcategory: "chains",
    description:
      "E-chain cable carrier systems protecting cables, hoses, and tubing in continuous moving machine applications. Plastic, aluminium, and steel materials in varied size ranges. Open and closeable link options.",
    descriptionAr:
      "أنظمة حامل كابلات E-chain تحمي الكابلات والخراطيم والأنابيب في تطبيقات الماكينات ذات الحركة المستمرة. متوفرة من البلاستيك والألومنيوم والفولاذ.",
    image: "/assets/products/cable-drag-chains.webp",
    features: [
      "Open and closeable link types",
      "Plastic, aluminium, and steel options",
      "Wide interior width range",
      "High speed and acceleration capability",
      "Easy cable installation",
    ],
    applications: [
      "CNC machine tool axes",
      "Automated cranes",
      "Robotic systems",
      "Assembly lines",
    ],
    applicationsAr: ["محاور ماكينات CNC", "الرافعات الآلية", "الأنظمة الروبوتية", "خطوط التجميع"],
    featured: false,
    sortOrder: 303,
  },
  {
    id: "industrial-chains-sprockets",
    slug: "industrial-chains-sprockets",
    name: "Industrial Roller Chains & Sprockets",
    nameAr: "سلاسل تروس وبكرات صناعية",
    category: "mechanical",
    subcategory: "chains",
    description:
      "Standard industrial roller chains (ANSI/ISO) and matching sprockets for power transmission in industrial drives. Carbon steel, stainless steel, and nickel-plated options for various environments.",
    descriptionAr:
      "سلاسل تروس بكرة صناعية قياسية (ANSI/ISO) وبكرات تروس مطابقة لنقل الطاقة في المحركات الصناعية. خيارات فولاذ كربوني وفولاذ مقاوم للصدأ ومطلية بالنيكل.",
    image: "/assets/products/bonfiglioli-gearboxes-motors.webp",
    features: [
      "ANSI and ISO standard chains",
      "Simplex, duplex, and triplex types",
      "Carbon steel and stainless steel",
      "Pre-stretched low-elongation options",
    ],
    applications: [
      "Agricultural machinery",
      "Food processing conveyors",
      "General industrial drives",
    ],
    applicationsAr: ["الآلات الزراعية", "ناقلات معالجة الأغذية", "المحركات الصناعية العامة"],
    featured: false,
    sortOrder: 304,
  },
  {
    id: "couplings-pulleys",
    slug: "couplings-pulleys",
    name: "Couplings, Pulleys & Belts",
    nameAr: "تزاوجات وبكرات وأحزمة",
    category: "mechanical",
    subcategory: "drives",
    brand: "Bonfiglioli",
    description:
      "Flexible jaw couplings, rigid couplings, V-belt pulleys, timing belt pulleys, and synchronous belts for power transmission between shafts and drives in industrial machinery.",
    descriptionAr:
      "تزاوجات فكية مرنة وصلبة وبكرات V وبكرات أحزمة توقيت وأحزمة متزامنة لنقل الطاقة بين المحاور والمحركات في الماكينات الصناعية.",
    image: "/assets/products/bonfiglioli-gearboxes-motors.webp",
    features: [
      "Jaw, disc, and rigid coupling types",
      "V-belt and timing belt pulleys",
      "Interference fit and keyway bore options",
      "Stainless steel for hygienic applications",
    ],
    applications: ["Motor-gearbox coupling", "Pump drives", "Conveyor drives"],
    applicationsAr: ["تزاوج محرك-علبة تروس", "محركات المضخات", "محركات الناقلات"],
    featured: false,
    sortOrder: 305,
  },
  {
    id: "linear-guides-rails",
    slug: "linear-guides-rails",
    name: "Linear Guides & Rails",
    nameAr: "أدلة وسكك خطية",
    category: "mechanical",
    subcategory: "linear-motion",
    description:
      "Linear guide rails and carriages for precision machine motion. Profile rail, round shaft, and square rail types. Suitable for CNC machines, automation, and special purpose machinery.",
    descriptionAr:
      "أدلة سكك خطية وعربات للحركة الدقيقة للماكينات. أنواع سكة محيطة وعمود دائري وسكة مربعة. مناسبة لماكينات CNC والأتمتة.",
    image: "/assets/products/cable-drag-chains.webp",
    features: [
      "Profile rail, round, and square types",
      "High load capacity",
      "Low friction recirculating balls",
      "Preloaded versions available",
    ],
    applications: ["CNC machine axes", "Automation gantries", "Laser cutting tables"],
    applicationsAr: ["محاور ماكينات CNC", "بوابات الأتمتة", "طاولات قطع الليزر"],
    featured: false,
    sortOrder: 306,
  },
];

// ============================================================
// CONVEYOR / BAKERY PRODUCTS — Business Priority #5
// ============================================================

const conveyorBakeryProducts: Product[] = [
  {
    id: "regina-conveyor-chains",
    slug: "regina-conveyor-chains",
    name: "Regina Conveyor Chains",
    nameAr: "سلاسل الناقل ريجينا",
    category: "conveyor-bakery",
    subcategory: "conveyor-chains",
    brand: "Regina",
    description:
      "PRIMA stainless steel and carbon steel conveyor chains from Regina Italy for bottling, canning, food filling, and glass manufacturing production lines. High speed performance up to 21 m/min with 60,000 b/h capacity.",
    descriptionAr:
      "سلاسل ناقلة PRIMA من ريجينا إيطاليا من الفولاذ المقاوم للصدأ والكربوني لخطوط إنتاج التعبئة والتغليف والزجاج. أداء بسرعة عالية 21 م/دقيقة.",
    image: "/assets/products/regina-conveyor-chains.webp",
    features: [
      "Stainless steel and carbon steel options",
      "High speed: up to 21 m/min",
      "Capacity: up to 60,000 bottles/hour",
      "Low noise operation",
      "Self-lubricating options",
    ],
    specs: [
      { key: "Chain Speed", value: "21 m/min (60,000 b/h)", keyAr: "سرعة السلسلة" },
      { key: "Materials", value: "AISI 304 SS / Carbon Steel", keyAr: "المواد" },
      { key: "Application", value: "Bottling, Canning, Glass Mfg", keyAr: "التطبيق" },
    ],
    applications: [
      "Bottling lines",
      "Canning production",
      "Food filling systems",
      "Glass manufacturing",
    ],
    applicationsAr: ["خطوط التعبئة", "إنتاج العلب", "أنظمة تعبئة الأغذية", "تصنيع الزجاج"],
    featured: true,
    sortOrder: 400,
  },
  {
    id: "conveyor-belts",
    slug: "conveyor-belts",
    name: "Industrial Conveyor Belts",
    nameAr: "أحزمة الناقلات الصناعية",
    category: "conveyor-bakery",
    subcategory: "conveyor-components",
    description:
      "Industrial rubber and PVC conveyor belts for material handling, food processing, and general bulk conveying. Heat-resistant, oil-resistant, and food-grade options available.",
    descriptionAr:
      "أحزمة ناقلات مطاطية وPVC للمناولة الصناعية ومعالجة الأغذية والنقل السائب. خيارات مقاومة للحرارة والزيت وملامسة الأغذية.",
    image: "/assets/products/regina-conveyor-chains.webp",
    features: [
      "Rubber, PVC, and modular plastic types",
      "Heat and oil resistant grades",
      "FDA food-grade options",
      "Custom widths and lengths",
    ],
    applications: ["Food production lines", "Mining bulk handling", "Packaging conveying"],
    applicationsAr: ["خطوط إنتاج الأغذية", "مناولة التعدين السائب", "نقل التغليف"],
    featured: false,
    sortOrder: 401,
  },
  {
    id: "bakery-maintenance-spares",
    slug: "bakery-maintenance-spares",
    name: "Bakery Machinery Maintenance Spares",
    nameAr: "قطع غيار صيانة ماكينات المخابز",
    category: "conveyor-bakery",
    subcategory: "bakery",
    brands: ["Danfoss", "Siemens", "Festo"],
    description:
      "Complete bakery machinery maintenance parts: cutting blades, noles, pillow blocks, pneumatic cylinders, solenoid valves, gas regulators, high-temperature grease, CR12-25AO and CR12-25DP proximity sensors, Danfoss and Siemens relays, and bakery burner components.",
    descriptionAr:
      "قطع غيار صيانة ماكينات مخابز شاملة: شفرات قطع ونول ومحامل كتفية وأسطوانات هوائية وصمامات ومنظمات غاز وشحوم درجة حرارة عالية وحساسات CR12-25AO وCR12-25DP ومرحلات Danfoss وSiemens ومكونات المحارق.",
    image: "/assets/products/bakery-maintenance-spares.webp",
    features: [
      "Cutting blades and nozzles",
      "Pillow block bearing units",
      "Pneumatic cylinders and solenoid valves",
      "Gas regulators for bakery burners",
      "High-temperature grease and lubricants",
      "CR12-25AO / CR12-25DP proximity sensors",
    ],
    specs: [
      { key: "Sensors", value: "CR12-25AO, CR12-25DP", keyAr: "الحساسات" },
      { key: "Relay Brands", value: "Danfoss, Siemens", keyAr: "علامات المرحل" },
    ],
    applications: [
      "Industrial bakery maintenance",
      "Bread production lines",
      "Pastry and confectionery machinery",
    ],
    applicationsAr: ["صيانة المخابز الصناعية", "خطوط إنتاج الخبز", "ماكينات الحلويات والمعجنات"],
    featured: false,
    sortOrder: 402,
  },
  {
    id: "pillow-block-bearings",
    slug: "pillow-block-bearings",
    name: "Pillow Block Bearing Units",
    nameAr: "وحدات المحامل الكتفية",
    category: "conveyor-bakery",
    subcategory: "conveyor-components",
    description:
      "Cast iron and stainless steel pillow block bearing units (UCF, UCP series) for conveyor shaft support and industrial rotating applications. Self-aligning and set-screw locking variants.",
    descriptionAr:
      "وحدات محامل كتفية من الحديد الزهر والفولاذ المقاوم للصدأ (سلسلة UCF، UCP) لدعم عمود الناقل والتطبيقات الدوارة الصناعية.",
    image: "/assets/products/bakery-maintenance-spares.webp",
    features: [
      "Cast iron and stainless steel options",
      "UCF flange and UCP plummer block types",
      "Self-aligning spherical outer ring",
      "Set-screw and eccentric locking",
    ],
    applications: ["Conveyor shaft support", "Bakery equipment", "General industrial machinery"],
    applicationsAr: ["دعم عمود الناقل", "معدات المخابز", "الماكينات الصناعية العامة"],
    featured: false,
    sortOrder: 403,
  },
  {
    id: "air-compressor-pipes",
    slug: "air-compressor-pipes",
    name: "Air Compressor Pipes & Fittings",
    nameAr: "أنابيب ووصلات ضاغط الهواء",
    category: "conveyor-bakery",
    subcategory: "conveyor-components",
    description:
      "Aluminium and steel compressed air distribution pipes and fittings specifically selected for bakery and food production environments. Food-grade internal coating for clean air distribution.",
    descriptionAr:
      "أنابيب ووصلات توزيع الهواء المضغوط من الألومنيوم والفولاذ للمخابز وبيئات إنتاج الأغذية. طلاء داخلي مخصص للأغذية.",
    image: "/assets/products/aluminum-air-piping.webp",
    features: [
      "Food-grade internal coating",
      "Push-fit and threaded connection options",
      "Easy installation and modification",
      "Corrosion-resistant aluminium",
    ],
    applications: ["Bakery compressed air mains", "Food factory air distribution"],
    applicationsAr: ["خطوط الهواء المضغوط الرئيسية في المخابز", "توزيع الهواء في مصانع الأغذية"],
    featured: false,
    sortOrder: 404,
  },
  {
    id: "gas-regulators-bakery",
    slug: "gas-regulators-bakery",
    name: "Gas Regulators for Bakery Burners",
    nameAr: "منظمات الغاز لمحارق المخابز",
    category: "conveyor-bakery",
    subcategory: "bakery",
    brands: ["Danfoss"],
    description:
      "Industrial gas pressure regulators and gas train components for bakery oven and tunnel burner applications. Danfoss and compatible gas valves and regulators ensuring safe and consistent gas supply.",
    descriptionAr:
      "منظمات ضغط غاز صناعية ومكونات خط الغاز لتطبيقات محارق أفران المخابز والأنفاق. صمامات ومنظمات الغاز Danfoss والمتوافقة.",
    image: "/assets/products/high-pressure-regulators.webp",
    features: [
      "Gas pressure regulation",
      "Safety shut-off valves",
      "Gas train assemblies",
      "Compatible with LPG and natural gas",
    ],
    applications: ["Bakery tunnel ovens", "Industrial burner gas trains", "Food processing ovens"],
    applicationsAr: ["أفران الأنفاق في المخابز", "خطوط غاز المحارق الصناعية", "أفران معالجة الأغذية"],
    featured: false,
    sortOrder: 405,
  },
];

// ============================================================
// COMBINE ALL PRODUCTS — Ordered by business priority
// ============================================================

export const products: Product[] = [
  ...pneumaticProducts,
  ...hydraulicProducts,
  ...electricalProducts,
  ...mechanicalProducts,
  ...conveyorBakeryProducts,
];

// Featured products for homepage
export const featuredProducts = products.filter((p) => p.featured);

// Utility: get products by category
export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

// Utility: get products by subcategory
export function getProductsBySubcategory(category: string, subcategory: string): Product[] {
  return products.filter((p) => p.category === category && p.subcategory === subcategory);
}

// Utility: get related products (same category, exclude current)
export function getRelatedProducts(productId: string, limit = 4): Product[] {
  const product = products.find((p) => p.id === productId);
  if (!product) return [];
  return products
    .filter((p) => p.category === product.category && p.id !== productId)
    .slice(0, limit);
}
