export interface Brand {
  id: string;
  name: string;
  logo: string;
  category: string;
}

// Uses the gs-logo-slider-* images from WordPress plus named logos
export const brands: Brand[] = [
  { id: "festo", name: "Festo", logo: "/assets/brands/festo.png", category: "Pneumatics" },
  { id: "parker", name: "Parker", logo: "/assets/brands/parker.png", category: "Fluid Power" },
  { id: "sick", name: "SICK", logo: "/assets/brands/sick.png", category: "Sensors" },
  { id: "schneider", name: "Schneider Electric", logo: "/assets/brands/schneider.png", category: "Electrical" },
  { id: "mitsubishi", name: "Mitsubishi Electric", logo: "/assets/brands/mitsubishi.png", category: "Electrical" },
  { id: "piab", name: "Piab", logo: "/assets/brands/piab.png", category: "Vacuum" },
  { id: "ifm", name: "IFM Electronic", logo: "/assets/brands/ifm.png", category: "Sensors" },
  { id: "honeywell", name: "Honeywell", logo: "/assets/brands/honeywell.png", category: "Automation" },
  { id: "fuji", name: "Fuji Electric", logo: "/assets/brands/fuji.png", category: "Electrical" },
  { id: "eaton", name: "Eaton", logo: "/assets/brands/eaton.png", category: "Power" },
  { id: "datalogic", name: "Datalogic", logo: "/assets/brands/datalogic.png", category: "Sensors" },
  { id: "airtac", name: "Airtac", logo: "/assets/brands/airtac.png", category: "Pneumatics" },
  { id: "unimec", name: "Unimec", logo: "/assets/brands/unimec.png", category: "Mechanical" },
  { id: "pizzato", name: "Pizzato", logo: "/assets/brands/pizzato.png", category: "Safety" },
  { id: "bosch-rexroth", name: "Bosch Rexroth", logo: "/assets/brands/bosch-rexroth9011.logowik.com_.webp", category: "Hydraulics" },
  // WordPress slider logos
  { id: "brand-1", name: "Brand Partner", logo: "/assets/brands/gs-logo-slider-1.png", category: "Industrial" },
  { id: "brand-2", name: "Brand Partner", logo: "/assets/brands/gs-logo-slider-2.png", category: "Industrial" },
  { id: "brand-3", name: "Brand Partner", logo: "/assets/brands/gs-logo-slider-3.png", category: "Industrial" },
  { id: "brand-4", name: "Brand Partner", logo: "/assets/brands/gs-logo-slider-4.png", category: "Industrial" },
  { id: "brand-5", name: "Brand Partner", logo: "/assets/brands/gs-logo-slider-5.png", category: "Industrial" },
  { id: "brand-6", name: "Brand Partner", logo: "/assets/brands/gs-logo-slider-6.png", category: "Industrial" },
  { id: "brand-7", name: "Brand Partner", logo: "/assets/brands/gs-logo-slider-7.png", category: "Industrial" },
  { id: "brand-8", name: "Brand Partner", logo: "/assets/brands/gs-logo-slider-8.png", category: "Industrial" },
  { id: "brand-9", name: "Brand Partner", logo: "/assets/brands/gs-logo-slider-9.png", category: "Industrial" },
  { id: "brand-10", name: "Brand Partner", logo: "/assets/brands/gs-logo-slider-10.png", category: "Industrial" },
  { id: "brand-11", name: "Brand Partner", logo: "/assets/brands/gs-logo-slider-11.png", category: "Industrial" },
  { id: "brand-12", name: "Brand Partner", logo: "/assets/brands/gs-logo-slider-12.png", category: "Industrial" },
];
