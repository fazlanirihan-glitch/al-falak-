export interface CatalogPage {
  pageNumber: number;
  title: string;
  category: string;
  description: string;
  imagePath: string;
  keyProducts: string[];
}

export const catalogPages: CatalogPage[] = [
  {
    pageNumber: 1,
    title: "Catalog Cover & Company Overview",
    category: "Corporate Overview",
    description: "AL FALAK INDUSTRIAL - Factories Machinery & Equip Parts TR L.L.C. SP - Official 23-Page Industrial Catalog.",
    imagePath: "/catalog/page_01.webp",
    keyProducts: ["Pneumatic", "Hydraulic", "Electrical", "Mechanical", "UAE Regional Supply"]
  },
  {
    pageNumber: 2,
    title: "About AL FALAK - ISO 9001:2015 Certification",
    category: "About Us & Quality",
    description: "ISO 9001:2015 Certified Supplier and Stockist for UAE, Middle East, Central Asia & East Africa. 24/7 Technical Support.",
    imagePath: "/catalog/page_02.webp",
    keyProducts: ["ISO 9001:2015 Management", "24/7 Technical Support", "Mission & Vision", "Regional Warehouses"]
  },
  {
    pageNumber: 3,
    title: "Pneumatic Cylinders & Solenoid Valves",
    category: "Pneumatics",
    description: "ISO 6431/15552 standard pneumatic cylinders and electro-mechanically operated 2/2, 3/2, 5/2 & 5/3 solenoid valves in brass & stainless steel.",
    imagePath: "/catalog/page_03.webp",
    keyProducts: ["ISO 6431/15552 Cylinders", "2/2 Way Solenoid Valves", "3/2 Way Solenoid Valves", "5/2 & 5/3 Way Valves", "ATEX Coils"]
  },
  {
    pageNumber: 4,
    title: "Angle Seat Valves, Grippers & Shock Absorbers",
    category: "Pneumatics",
    description: "Pneumatically actuated angle seat valves for steam and fluids, industrial mechanical & hydraulic shock absorbers, and pneumatic grippers.",
    imagePath: "/catalog/page_04.webp",
    keyProducts: ["Angle Seat Valves", "Industrial Shock Absorbers", "Pneumatic Grippers", "Mechanical Valves"]
  },
  {
    pageNumber: 5,
    title: "Compressed Air Service Units (FRL) & Hoses",
    category: "Pneumatics",
    description: "FRL air preparation units, polyurethane tubes, air compressor hoses, safety cables, and push-in brass/polymer pneumatic fittings.",
    imagePath: "/catalog/page_05.webp",
    keyProducts: ["FRL Service Units", "PU Tubing & Hoses", "Ducting Hoses", "Pneumatic Push-in Fittings", "Quick Couplers"]
  },
  {
    pageNumber: 6,
    title: "Air Operated Double Diaphragm (AODD) Pumps",
    category: "Pneumatics & Fluid Handling",
    description: "AODD pumps manufactured in Turkey: Hygienic Food Grade Stainless Steel, Aluminum, PVDF & Plastic bodies with 8 bar discharge.",
    imagePath: "/catalog/page_06.webp",
    keyProducts: ["Food Grade Hygienic SS Pumps", "Aluminum AODD Pumps", "PVDF/Plastic Diaphragm Pumps", "Santoprene / PTFE Diaphragms", "Solids Handling up to 9mm"]
  },
  {
    pageNumber: 7,
    title: "Suction Cups, Vacuum Generators & Rotary Actuators",
    category: "Pneumatics & Vacuum",
    description: "Vuototecnica & Piab vacuum suction cups, vacuum generators, rotary actuators with ball/butterfly valves, and aluminum limit switch boxes.",
    imagePath: "/catalog/page_07.webp",
    keyProducts: ["Suction Cups (Vuototecnica)", "Vacuum Ejectors & Generators", "Rotary Actuated Valves", "Aluminum Limit Switch Boxes"]
  },
  {
    pageNumber: 8,
    title: "Haffner Valves, Parker Indicators & Tanker Panels",
    category: "Pneumatics & Control",
    description: "Haffner industrial pneumatic valves, Parker P1V series visual indicators (22mm & 30mm), and custom assembled fuel tanker control panels.",
    imagePath: "/catalog/page_08.webp",
    keyProducts: ["Haffner Valves", "Parker P1V Visual Indicators", "Fuel Tanker Control Panel Board", "Custom Pneumatic Enclosures"]
  },
  {
    pageNumber: 9,
    title: "Auto Drains, Pneumatic Vibrators & Inline Filters",
    category: "Pneumatics & Filtration",
    description: "Compressor auto drain valves, industrial pneumatic vibrators (turbine, piston, linear, roller), and inline liquid & gas filters.",
    imagePath: "/catalog/page_09.webp",
    keyProducts: ["Compressor Auto Drains", "Turbine & Piston Vibrators", "Inline Micro/Nano Filters", "Ceramic & Pleated Membrane Filters"]
  },
  {
    pageNumber: 10,
    title: "High Pressure Regulators & Pinch Valves",
    category: "Pneumatics & Pressure Control",
    description: "High pressure regulators (up to 50 bar reduction), 2/2-way stainless steel valves with ATEX coils, and pinch valves.",
    imagePath: "/catalog/page_10.webp",
    keyProducts: ["High Pressure Regulators (0-50 bar)", "2/2-way ATEX Valves", "Stainless Steel Pinch Valves", "Pulse Valves & Diaphragm Kits"]
  },
  {
    pageNumber: 11,
    title: "Air Bellows, Rodless Cylinders & Relief Valves",
    category: "Pneumatics & Motion",
    description: "Air bellows (air springs 1, 2, 3 convolutions), rodless pneumatic cylinders, and pressure relief safety valves (PRV).",
    imagePath: "/catalog/page_11.webp",
    keyProducts: ["Air Bellows / Air Springs", "Rodless Pneumatic Cylinders", "Pressure Relief Valves (PRV)", "High Precision Regulators"]
  },
  {
    pageNumber: 12,
    title: "Pneumatic Automation Showcase",
    category: "Pneumatics Gallery",
    description: "Visual technical gallery of specialized pneumatic valves, fittings, manifold stations, and automation assemblies.",
    imagePath: "/catalog/page_12.webp",
    keyProducts: ["Manifold Stations", "Quick Disconnect Couplings", "Specialty Flow Controls", "Pneumatic Subbases"]
  },
  {
    pageNumber: 13,
    title: "Gas Springs & Hydraulic Dampers",
    category: "Mechanical",
    description: "Corrosion-resistant stainless steel and alloy gas springs and motion dampers for automation, medical, aviation, and heavy machinery.",
    imagePath: "/catalog/page_13.webp",
    keyProducts: ["Stainless Steel Gas Springs", "Motion Dampers", "Anti-Vibrant Gas Struts", "Aviation & Heavy Machinery Springs"]
  },
  {
    pageNumber: 14,
    title: "Cable Drag Energy Chains",
    category: "Mechanical",
    description: "Heavy-duty cable drag chains (energy chains) in engineered polymer, aluminum, and steel for protecting moving cables and hoses.",
    imagePath: "/catalog/page_14.webp",
    keyProducts: ["Polymer Cable Drag Chains", "Steel Energy Chains", "Aluminum Drag Chains", "Cable Carrier Accessories"]
  },
  {
    pageNumber: 15,
    title: "Bonfiglioli Gearboxes, Motors & Couplings",
    category: "Mechanical Transmission",
    description: "Bonfiglioli industrial gearboxes, electric motors, mechanical speed variators, chain couplings, sprockets, and pulleys.",
    imagePath: "/catalog/page_15.webp",
    keyProducts: ["Bonfiglioli Gearmotors", "Mechanical Speed Variators", "Industrial Couplings", "Sprockets & Drive Chains", "Pulleys"]
  },
  {
    pageNumber: 16,
    title: "Sensors, SSR & Temperature Controllers",
    category: "Electrical & Instrumentation",
    description: "Industrial sensors, Solid State Relays (SSR), thermocouples, and digital temperature controllers from SICK, Pizzato, Autonics, and Omron.",
    imagePath: "/catalog/page_16.webp",
    keyProducts: ["Digital Temperature Controllers", "Thermocouple Probes", "Solid State Relays (SSR)", "SICK Photoelectric & Proximity Sensors", "Pizzato Safety Switches"]
  },
  {
    pageNumber: 17,
    title: "Measuring Instruments & Current Transformers",
    category: "Electrical & Switchgear",
    description: "Current Transformers (Class 0.2, 0.5, 0.5s), analog/digital ammeters and voltmeters (72x72, 96x96 mm), and digital power analyzers.",
    imagePath: "/catalog/page_17.webp",
    keyProducts: ["Current Transformers (Class 0.2/0.5)", "Analog & Digital Ammeters", "Digital Voltmeters", "Power Analyzers & Energy Meters", "Frequency Meters"]
  },
  {
    pageNumber: 18,
    title: "Hydraulic Valves, Manifolds & Pumps",
    category: "Hydraulics",
    description: "Directional hydraulic solenoid valves, modular manifold blocks, cartridge valves, vane/gear/piston hydraulic pumps, and high-pressure filters.",
    imagePath: "/catalog/page_18.webp",
    keyProducts: ["Hydraulic Solenoid Valves", "Modular Manifold Valve Blocks", "Hydraulic Vane & Gear Pumps", "High Pressure Hydraulic Filters"]
  },
  {
    pageNumber: 19,
    title: "Aluminum Air Compressor Piping & Fittings",
    category: "Pneumatics & Piping",
    description: "Extruded aluminum modular piping systems and quick-locking fittings for clean compressed air, inert gas, and vacuum distribution.",
    imagePath: "/catalog/page_19.webp",
    keyProducts: ["Modular Aluminum Air Pipes", "Quick-Lock Pipe Connectors", "Compressed Air Distribution Lines", "Zero-Leak Air Fittings"]
  },
  {
    pageNumber: 20,
    title: "Bakery Maintenance Equipment & Spare Parts",
    category: "Bakery & Specialty Equipment",
    description: "Specialized bakery maintenance equipment: Cutting blades, spray nozzles, pillow blocks, high-temp lubricants (300°C+), and Siemens/Danfoss relays.",
    imagePath: "/catalog/page_20.webp",
    keyProducts: ["Industrial Cutting Blades", "Spray Nozzles & Pillow Blocks", "High-Temperature Grease (300°C+)", "Temperature Sensors", "Siemens & Danfoss Relays"]
  },
  {
    pageNumber: 21,
    title: "Regina Conveyor Chains & Packaging Systems",
    category: "Conveyor Systems",
    description: "Regina Stainless Steel (PRIMA Cr-Ni alloy with PHD hardened pins) and Carbon Steel conveyor chains for bottling (60,000 b/h), canning, and food lines.",
    imagePath: "/catalog/page_21.webp",
    keyProducts: ["Regina SS PRIMA Alloy Chains", "PHD Hardened Pin Chains", "Carbon Steel Chains", "Bottling & Canning Slat Chains (60k b/h)", "Accumulation & Inliner Belts"]
  },
  {
    pageNumber: 22,
    title: "Authorized Global Brand Partners",
    category: "Brand Partners",
    description: "Showcase of authorized international brand partners: Mitsubishi Electric, Festo, SMC, Parker, Bosch Rexroth, Schneider, SICK, Piab, Bonfiglioli, Regina.",
    imagePath: "/catalog/page_22.webp",
    keyProducts: ["Mitsubishi Electric", "Festo", "SMC", "Parker Hannifin", "Bosch Rexroth", "Schneider Electric", "SICK Sensor Intelligence", "Bonfiglioli", "Regina"]
  },
  {
    pageNumber: 23,
    title: "Catalog Back Cover & Contact Information",
    category: "Corporate Contact",
    description: "AL FALAK INDUSTRIAL - UAE Headquarters, contact channels, direct technical line +971 56 155 9163, and sales@alfalakuae.com.",
    imagePath: "/catalog/page_23.webp",
    keyProducts: ["UAE Headquarters", "Tel: +971 56 155 9163", "Email: sales@alfalakuae.com", "Web: www.alfalakuae.com"]
  }
];
