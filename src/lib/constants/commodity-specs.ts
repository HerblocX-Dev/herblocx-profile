export interface ChainStep {
  stage: string;
  responsible: string;
  verification: string;
}

export interface InspectionParameter {
  parameter: string;
  testMethod: string;
  specification: string;
  result: string;
  status: "PASS" | "EXCEEDS";
}

export interface ChecklistDoc {
  name: string;
  code: string;
  issuingAuthority: string;
  requiredForCustoms: boolean;
  description: string;
}

export interface InspectionPhoto {
  title: string;
  description: string;
  image: string;
  tag: string;
}

export interface CommoditySpecificationData {
  slug: string;
  title: string;
  scientificName: string;
  category: string;
  gradeBadge: string;
  summary: string;
  // 1. Origin and sourcing area
  originArea: {
    region: string;
    subRegions: string[];
    elevation: string;
    soilType: string;
    climate: string;
    coordinates: [number, number];
    cooperativeCount: number;
    registeredFarmers: number;
    provenanceStory: string;
    certifications: string[];
  };
  // 2. Harvest and collection records
  harvestRecords: {
    harvestSeason: string;
    peakMonths: string;
    collectionCycle: string;
    processingWindow: string;
    dryingMethod: string;
    intakeMoisture: string;
    intakeQualityCheck: string;
    scaleVerification: string;
    officerSignOff: string;
    recordsDossier: {
      logId: string;
      date: string;
      village: string;
      volume: string;
      status: string;
    }[];
  };
  // 3. Batch / lot identification
  batchIdentification: {
    lotFormat: string;
    sampleLotNumber: string;
    taggingType: string;
    sealType: string;
    segregationProtocol: string;
    warehouseZone: string;
    palletTracking: string;
    chainOfCustody: ChainStep[];
  };
  // 4. Quality inspection reports
  inspectionReports: {
    accreditedLab: string;
    reportNumber: string;
    issueDate: string;
    parameters: InspectionParameter[];
    sensoryNotes: string;
    microbiologyResult: string;
    contaminantsResult: string;
    inspectorNote: string;
  };
  // 5. Product photos and sample records
  photosAndSamples: {
    sampleRetentionPeriod: string;
    sampleSize: string;
    inspectionPhotos: InspectionPhoto[];
    sampleLog: {
      sampleId: string;
      dateLogged: string;
      dispatchMethod: string;
      trackingReady: boolean;
    };
  };
  // 6. Export and shipment documents
  exportDocuments: {
    loadingPorts: string[];
    incoterms: string[];
    leadTime: string;
    moq: string;
    containerCapacity: {
      container20ft: string;
      container40ft: string;
    };
    packingDetails: string;
    documentChecklist: ChecklistDoc[];
  };
}

export const COMMODITY_SPECIFICATIONS: Record<string, CommoditySpecificationData> = {
  "virgin-coconut-oil": {
    slug: "virgin-coconut-oil",
    title: "Virgin Coconut Oil (VCO)",
    scientificName: "Cocos nucifera",
    category: "Oils & fats",
    gradeBadge: "GRADE A · COLD-PRESSED",
    summary:
      "Cold-pressed from freshly harvested coconut kernel within 24 hours of splitting. Centrifuged and triple-filtered to water-clear clarity with free fatty acids consistently below 0.15%.",
    originArea: {
      region: "North Sulawesi, Indonesia",
      subRegions: ["Minahasa Highlands", "Bolaang Mongondow Regency", "Bitung Coastal Strip"],
      elevation: "150m – 620m ASL",
      soilType: "Volcanic Alluvial Loam with Deep Humus",
      climate: "Equatorial Maritime, 2,200mm annual rainfall, 27°C avg temperature",
      coordinates: [124.84, 1.48],
      cooperativeCount: 14,
      registeredFarmers: 420,
      provenanceStory:
        "North Sulawesi's volcanic soil and sun-drenched maritime coastline provide ideal conditions for Cocos nucifera. Our sourcing program partners with certified smallholder farmer groups organized under local village cooperatives (KUD) committed to chemical-free harvesting.",
      certifications: ["Organic Standard Compliant", "Halal Indonesia", "HACCP Certified Processing", "Non-GMO Verified"],
    },
    harvestRecords: {
      harvestSeason: "Continuous year-round harvesting",
      peakMonths: "June through October",
      collectionCycle: "Harvested every 25 to 30 days at optimal ripeness (11-12 months mature nuts)",
      processingWindow: "Kernel extracted and cold-pressed within 24 hours of nut opening",
      dryingMethod: "Low-temperature mechanical moisture separation (< 45°C) to protect bioactive lauric compounds",
      intakeMoisture: "Fresh kernel moisture 48-50%, reduced to < 0.1% in finished oil",
      intakeQualityCheck: "Visual sorting for germinated nuts, rancidity, and shell debris at collection station",
      scaleVerification: "Digital Mettler-Toledo platform scales calibrated monthly by Department of Metrology",
      officerSignOff: "HerblocX Quality Agronomist & Cooperative Station Head dual verification",
      recordsDossier: [
        { logId: "HRV-2026-VCO-01", date: "Oct 12, 2026", village: "Kakas, Minahasa", volume: "4,200 kg nuts", status: "Verified" },
        { logId: "HRV-2026-VCO-02", date: "Oct 14, 2026", village: "Poigar, Bolmong", volume: "5,800 kg nuts", status: "Verified" },
        { logId: "HRV-2026-VCO-03", date: "Oct 18, 2026", village: "Kauditan, Minut", volume: "3,950 kg nuts", status: "Verified" },
        { logId: "HRV-2026-VCO-04", date: "Oct 22, 2026", village: "Tondano Valley", volume: "6,100 kg nuts", status: "Verified" },
      ],
    },
    batchIdentification: {
      lotFormat: "HBCX-VCO-[YEAR]-[ORIGIN_CODE]-[BATCH_NUM]",
      sampleLotNumber: "HBCX-VCO-2026-NS-0842",
      taggingType: "Stenciled lot numbers with weatherproof GS1-standard QR code on each drum",
      sealType: "Tamper-evident numbered heavy-duty steel lock seal on bungs and container door",
      segregationProtocol: "Dedicated stainless-steel (SS316) holding tanks with zero cross-contact with refined oils",
      warehouseZone: "Clean room storage, Sector A-2, humidity controlled below 60%",
      palletTracking: "Serialized pallet tags (#PLT-NS-0842-01 through 20) with shrink-wrap barrier",
      chainOfCustody: [
        { stage: "Farm Gate Collection", responsible: "Cooperative Field Officer", verification: "Intake Manifest & Weight Ticket" },
        { stage: "Cold Extraction Facility", responsible: "Lead Process Engineer", verification: "Pressing Log & Temperature Record (<45°C)" },
        { stage: "Centrifugation & Filtration", responsible: "QC Chemist", verification: "Filtration Clarity & Moisture In-line Log" },
        { stage: "Drum Filling & Stenciling", responsible: "Warehouse Manager", verification: "Tare/Gross Weight & Tamper Seal Serial" },
        { stage: "Container Stuffing", responsible: "Independent Surveyor", verification: "Stuffing Survey & Barantan Inspection" },
      ],
    },
    inspectionReports: {
      accreditedLab: "PT Sucofindo / SGS Indonesia (ISO/IEC 17025 Accredited)",
      reportNumber: "COA-HBCX-2026-VCO-0988",
      issueDate: "October 26, 2026",
      parameters: [
        { parameter: "Moisture Content", testMethod: "AOCS Ca 2e-84", specification: "Max 0.10%", result: "0.07%", status: "PASS" },
        { parameter: "Free Fatty Acids (as Lauric)", testMethod: "AOCS Ca 5a-40", specification: "Max 0.20%", result: "0.11%", status: "PASS" },
        { parameter: "Lauric Acid (C12:0)", testMethod: "GC-FID AOCS Ce 1-62", specification: "Min 45.0%", result: "49.6%", status: "EXCEEDS" },
        { parameter: "Peroxide Value", testMethod: "AOCS Cd 8b-90", specification: "Max 2.0 meq/kg", result: "0.65 meq/kg", status: "PASS" },
        { parameter: "Iodine Value", testMethod: "AOCS Cd 1d-92", specification: "4.1 – 11.0", result: "6.2", status: "PASS" },
        { parameter: "Saponification Value", testMethod: "AOCS Cd 3-25", specification: "250 – 265 mg KOH/g", result: "258 mg KOH/g", status: "PASS" },
        { parameter: "Color (Lovibond 5¼\")", testMethod: "AOCS Cc 13b-45", specification: "Max 0.5 Red, 0.2 Yellow", result: "0.1 R, 0.1 Y (Water-Clear)", status: "PASS" },
      ],
      sensoryNotes: "Fresh, mild coconut fragrance; neutral, clean mouthfeel without burnt or sour notes.",
      microbiologyResult: "Total Plate Count < 10 cfu/g; Yeasts & Moulds < 10 cfu/g; E. coli: Negative; Salmonella: Negative/25g.",
      contaminantsResult: "Heavy Metals: Lead (Pb) < 0.05 mg/kg; Arsenic (As) < 0.05 mg/kg; Mercury (Hg) < 0.005 mg/kg.",
      inspectorNote: "Complies in all respects with Codex Alimentarius Stan 210 and Indonesian National Standard SNI 7381:2008.",
    },
    photosAndSamples: {
      sampleRetentionPeriod: "12 Months in Climate-Controlled Cold Archive (18°C – 20°C)",
      sampleSize: "500g Counter-Sample retained per batch lot, sealed under inert gas",
      inspectionPhotos: [
        { title: "Fresh Split Kernel", description: "Harvested mature coconut meat inspected for pristine white color and kernel thickness.", image: "/gallery_commodities/1.webp", tag: "Intake Station" },
        { title: "Cold Extraction Line", description: "Stainless steel expeller press operating below 45°C to preserve bioactive compounds.", image: "/gallery_commodities/2.webp", tag: "Processing" },
        { title: "Laboratory Moisture Test", description: "Karl Fischer coulometric titration confirming moisture under 0.08%.", image: "/gallery_commodities/3.webp", tag: "QC Lab" },
        { title: "Export Drum Stenciling", description: "190kg food-grade HDPE drums nitrogen flushed with tamper-evident serial seals.", image: "/gallery_commodities/4.webp", tag: "Packaging" },
      ],
      sampleLog: {
        sampleId: "SMP-VCO-2026-0842-A",
        dateLogged: "October 25, 2026",
        dispatchMethod: "DHL Express Air Courier available upon buyer request",
        trackingReady: true,
      },
    },
    exportDocuments: {
      loadingPorts: ["Port of Bitung (North Sulawesi)", "Port of Tanjung Priok (Jakarta)"],
      incoterms: ["FOB (Free On Board)", "CIF (Cost, Insurance & Freight)", "CFR (Cost & Freight)"],
      leadTime: "18 - 21 Days from LC / Deposit confirmation",
      moq: "1,000 kg (LCL) / 15,200 kg (20ft FCL)",
      containerCapacity: {
        container20ft: "80 Food-grade HDPE drums (190 kg net) = 15,200 kg net, palletized with desiccants",
        container40ft: "130 Food-grade drums = 24,700 kg net, or 20ft Flexitank = 21,500 kg net",
      },
      packingDetails: "190kg new food-grade HDPE drums, nitrogen headspace flushed, or 1,000L IBC totes / 21MT Flexitank.",
      documentChecklist: [
        { name: "Clean On-Board Ocean Bill of Lading", code: "B/L", issuingAuthority: "Shipping Carrier / Liner", requiredForCustoms: true, description: "Full set 3/3 original negotiable ocean B/L marked Freight Prepaid/Collect." },
        { name: "Certificate of Origin (Form D / Form E / Form AK / Form ICO)", code: "COO", issuingAuthority: "Ministry of Trade Republic of Indonesia (Kemendag)", requiredForCustoms: true, description: "Official preferential tariff certificate of origin for importing customs." },
        { name: "Phytosanitary Certificate", code: "PHYTO", issuingAuthority: "Indonesian Agricultural Quarantine Agency (Barantan)", requiredForCustoms: true, description: "Certifies consignment is free from regulated agricultural pests and plant diseases." },
        { name: "Certificate of Analysis (COA)", code: "COA", issuingAuthority: "PT Sucofindo / SGS Indonesia (ISO 17025)", requiredForCustoms: true, description: "Comprehensive physicochemical and microbiological lab test breakdown per lot." },
        { name: "Commercial Invoice & Detailed Packing List", code: "INV/PL", issuingAuthority: "PT HerblocX Nusantara Ekspor", requiredForCustoms: true, description: "Itemized gross/net weights, container serials, batch numbers, and tariff HS code." },
        { name: "Fumigation & Pest Treatment Certificate", code: "FUM", issuingAuthority: "AFAS-accredited Fumigation Provider", requiredForCustoms: false, description: "Phosphine (PH3) fumigation record with international AQIS/EU recognized stamp." },
      ],
    },
  },

  "desiccated-coconut": {
    slug: "desiccated-coconut",
    title: "Desiccated Coconut",
    scientificName: "Cocos nucifera",
    category: "Kernel products",
    gradeBadge: "GRADE A · HIGH FAT MEDIUM",
    summary:
      "Grated, steam-sterilised, and fluidised-bed dried from mature coconut kernel to below 3.0% moisture. Metal-detected, microbiological screened, and certified Salmonella-free for industrial confectionery.",
    originArea: {
      region: "Lampung, Sumatra, Indonesia",
      subRegions: ["Pesawaran Regency", "South Lampung Coastal Plain", "Way Kanan"],
      elevation: "50m – 350m ASL",
      soilType: "Mineral-rich Red-Yellow Podzolic & Coastal Alluvium",
      climate: "Humid Tropical, 2,600mm annual rainfall, 28°C avg temperature",
      coordinates: [105.18, -5.43],
      cooperativeCount: 18,
      registeredFarmers: 580,
      provenanceStory:
        "The coconut groves of South Lampung benefit from rich volcanic soils and coastal sea breezes. Farmers cultivate tall varieties famed for thick, high-fat kernel meat. Sourcing is managed through local agricultural unions ensuring fair gate prices.",
      certifications: ["FSSC 22000 Ready", "Halal Indonesia", "Kosher Certified", "ISO 22000"],
    },
    harvestRecords: {
      harvestSeason: "Continuous year-round harvesting",
      peakMonths: "March to May and September to November",
      collectionCycle: "Harvested every 30 days; only fully seasoned nuts (12 months old) are accepted",
      processingWindow: "Pared, washed, blanched, and dried within 16 hours of de-husking",
      dryingMethod: "Continuous vibratory fluidized bed dryer with indirect steam heat (85°C – 95°C)",
      intakeMoisture: "Raw kernel at 45%, dried down to 2.5% – 2.8% moisture",
      intakeQualityCheck: "Discoloration inspection, testa removal check, reject sour or immature kernel",
      scaleVerification: "Avery Weigh-Tronix calibrated platform weighbridge",
      officerSignOff: "Chief Agronomist & Factory Receiving Quality Inspector",
      recordsDossier: [
        { logId: "HRV-2026-DC-101", date: "Oct 08, 2026", village: "Gedong Tataan, Pesawaran", volume: "8,500 kg raw nuts", status: "Verified" },
        { logId: "HRV-2026-DC-102", date: "Oct 11, 2026", village: "Kalianda, South Lampung", volume: "12,200 kg raw nuts", status: "Verified" },
        { logId: "HRV-2026-DC-103", date: "Oct 15, 2026", village: "Padang Cermin", volume: "9,100 kg raw nuts", status: "Verified" },
        { logId: "HRV-2026-DC-104", date: "Oct 20, 2026", village: "Penengahan", volume: "10,400 kg raw nuts", status: "Verified" },
      ],
    },
    batchIdentification: {
      lotFormat: "HBCX-DC-[YEAR]-[ORIGIN_CODE]-[BATCH_NUM]",
      sampleLotNumber: "HBCX-DC-2026-LMP-0315",
      taggingType: "Industrial barcode labels with QR code printed directly on multiwall kraft paper sacks",
      sealType: "Double-stitched safety thread with heat-sealed inner polyethylene liner",
      segregationProtocol: "Allergen-controlled enclosed processing line, dedicated kernel granulation cutters",
      warehouseZone: "Pest-sealed finished goods warehouse, ambient temperature 24°C, pallets elevated 15cm",
      palletTracking: "Wooden fumigated Euro/Standard pallets with corner protectors and tamper stretch wrap",
      chainOfCustody: [
        { stage: "Farmer Union Depot", responsible: "Intake Station Officer", verification: "Lot Receipt & Nut Maturity Audit" },
        { stage: "De-husking & Paring", responsible: "Production Supervisor", verification: "Testa Removal Inspection Sheet" },
        { stage: "Steam Blanching & Drying", responsible: "Thermal Process Specialist", verification: "Temperature Sensor Logs (85°C minimum)" },
        { stage: "Metal Detection & Sifting", responsible: "HACCP Controller", verification: "Ferrous/Non-ferrous Test Wand Calibrations" },
        { stage: "Bagging & Palletizing", responsible: "Final Inspection Lead", verification: "Net Weight Check & Retained Sample Tag" },
      ],
    },
    inspectionReports: {
      accreditedLab: "PT Sucofindo Laboratory (ISO/IEC 17025 Accredited)",
      reportNumber: "COA-HBCX-2026-DC-0412",
      issueDate: "October 24, 2026",
      parameters: [
        { parameter: "Fat Content (Dry Basis)", testMethod: "Soxhlet Extraction", specification: "Min 65.0%", result: "66.4%", status: "EXCEEDS" },
        { parameter: "Moisture Content", testMethod: "Oven Drying 105°C, 3 hrs", specification: "Max 3.0%", result: "2.6%", status: "PASS" },
        { parameter: "Free Fatty Acids (as Lauric)", testMethod: "AOCS Ca 5a-40", specification: "Max 0.15%", result: "0.08%", status: "PASS" },
        { parameter: "Total Ash", testMethod: "AOAC 923.03", specification: "Max 2.0%", result: "1.65%", status: "PASS" },
        { parameter: "Granulation (Medium Cut)", testMethod: "Vibratory Sieve Mesh", specification: "90% between 1.0 – 2.0 mm", result: "94.2%", status: "PASS" },
        { parameter: "Foreign Matter & Black Specks", testMethod: "Visual Per 100g", specification: "Max 5 specks / 100g", result: "2 specks / 100g", status: "PASS" },
        { parameter: "Sulfur Dioxide (SO2)", testMethod: "Monier-Williams Method", specification: "Free / Max 50 ppm (if requested)", result: "Nil (< 5 ppm)", status: "PASS" },
      ],
      sensoryNotes: "Pure snow-white granulate; clean, sweet coconut flavor without rancidity or fermented undertone.",
      microbiologyResult: "Total Plate Count < 3,000 cfu/g; Coliforms < 10 cfu/g; E. coli: Negative; Salmonella: Absent in 25g (Tested in triplicate).",
      contaminantsResult: "Aflatoxin B1 + B2 + G1 + G2 < 4 ppb; Heavy Metals within CODEX maximum residue limits.",
      inspectorNote: "Passed all microbiological and physicochemical standards for Grade A High Fat Desiccated Coconut.",
    },
    photosAndSamples: {
      sampleRetentionPeriod: "12 Months in desiccated temperature-stable retention storage",
      sampleSize: "1,000g sterile archive sample kept under vacuum seal",
      inspectionPhotos: [
        { title: "Grated Kernel Texture", description: "Even granulation and brilliant white natural color free of paring skin.", image: "/gallery_commodities/2.webp", tag: "Granulation" },
        { title: "Fluid Bed Steam Dryer", description: "Continuous drying process reducing moisture under 2.8% without browning.", image: "/gallery_commodities/3.webp", tag: "Drying" },
        { title: "In-line Metal Detection", description: "Sartorius metal detector calibrated to 1.5mm Fe, 2.0mm Non-Fe, 2.5mm SS.", image: "/gallery_commodities/4.webp", tag: "HACCP" },
        { title: "Multiwall Kraft Sacks", description: "25kg export bags palletized with moisture-barrier stretch film.", image: "/gallery_commodities/1.webp", tag: "Packing" },
      ],
      sampleLog: {
        sampleId: "SMP-DC-2026-0315-B",
        dateLogged: "October 22, 2026",
        dispatchMethod: "Air Courier with phytosanitary declaration sticker",
        trackingReady: true,
      },
    },
    exportDocuments: {
      loadingPorts: ["Port of Panjang (Lampung)", "Port of Tanjung Priok (Jakarta)"],
      incoterms: ["FOB", "CIF", "CFR"],
      leadTime: "21 - 24 Days",
      moq: "1,000 kg (LCL) / 12,500 kg (20ft FCL)",
      containerCapacity: {
        container20ft: "500 multiwall kraft bags (25kg net) = 12,500 kg net, palletized or floor loaded",
        container40ft: "1,000 multiwall kraft bags (25kg net) = 25,000 kg net, palletized with desiccants",
      },
      packingDetails: "25 kg net multiwall kraft paper sacks with inner food-grade polyethylene heat-sealed liner.",
      documentChecklist: [
        { name: "Ocean Bill of Lading", code: "B/L", issuingAuthority: "International Shipping Line", requiredForCustoms: true, description: "Clean on board 3 original negotiable bills of lading." },
        { name: "Certificate of Origin (COO)", code: "COO", issuingAuthority: "Ministry of Trade Indonesia", requiredForCustoms: true, description: "Official Indonesian Certificate of Origin for customs clearance." },
        { name: "Phytosanitary Certificate", code: "PHYTO", issuingAuthority: "Barantan (Indonesian Quarantine)", requiredForCustoms: true, description: "Confirms phytosanitary inspection and freedom from storage pests." },
        { name: "Salmonella & Micro Analysis Certificate", code: "COA-MICRO", issuingAuthority: "Accredited Testing Laboratory", requiredForCustoms: true, description: "Lot-specific verification of absence of Salmonella and pathogenic bacteria." },
        { name: "Packing List & Commercial Invoice", code: "INV/PL", issuingAuthority: "PT HerblocX Nusantara Ekspor", requiredForCustoms: true, description: "Detailed manifest showing bag count, gross/net weight, and HS Code 0801.11.00." },
        { name: "Container Fumigation Certificate", code: "FUM", issuingAuthority: "Licensed Fumigation Agency", requiredForCustoms: false, description: "Container treatment verification prior to sailing." },
      ],
    },
  },

  "coconut-milk-powder": {
    slug: "coconut-milk-powder",
    title: "Coconut Milk Powder",
    scientificName: "Cocos nucifera",
    category: "Kernel products",
    gradeBadge: "GRADE A · 65% HIGH FAT",
    summary:
      "Spray-dried coconut cream produced from fresh liquid coconut milk. Rich, creamy, and rapidly soluble in warm water at 40°C. Formulated with food-grade carrier and zero artificial preservatives.",
    originArea: {
      region: "Riau, Sumatra, Indonesia",
      subRegions: ["Indragiri Hilir Regency", "Tembilahan Coastal Delta", "Kuala Enok"],
      elevation: "5m – 40m ASL",
      soilType: "Tidal Alluvial & Organosol Delta Silt",
      climate: "Equatorial Tropical, 2,800mm annual rainfall",
      coordinates: [103.15, -0.33],
      cooperativeCount: 12,
      registeredFarmers: 490,
      provenanceStory:
        "Indragiri Hilir in Riau is known as Indonesia's 'Coconut Capital' due to its vast network of tidal canals and pristine coastal plantations. Coconuts are harvested and transported via traditional wooden canal boats directly to modern hygienic processing plants.",
      certifications: ["HACCP", "GMP Certified", "Halal Indonesia", "ISO 22000"],
    },
    harvestRecords: {
      harvestSeason: "Continuous year-round harvesting",
      peakMonths: "April to June and September to November",
      collectionCycle: "Harvested bi-weekly from mature waterfront plantations",
      processingWindow: "Milk pressed and spray dried within 12 hours of kernel extraction",
      dryingMethod: "Modern centrifugal spray drying tower with HEPA filtered intake air (< 160°C)",
      intakeMoisture: "Liquid milk at 50% solids, spray-dried to finished moisture < 3.0%",
      intakeQualityCheck: "pH test, brix reading, titratable acidity, and sensory evaluation of fresh extract",
      scaleVerification: "Electronic digital batch balance with automated computerized batching",
      officerSignOff: "Processing Plant Dairy Chemist & HerblocX Quality Auditor",
      recordsDossier: [
        { logId: "HRV-2026-CMP-01", date: "Oct 05, 2026", village: "Tembilahan Hulu", volume: "14,000 L fresh milk", status: "Verified" },
        { logId: "HRV-2026-CMP-02", date: "Oct 09, 2026", village: "Kuala Enok Port", volume: "18,500 L fresh milk", status: "Verified" },
        { logId: "HRV-2026-CMP-03", date: "Oct 16, 2026", village: "Gaung Anak Serka", volume: "15,200 L fresh milk", status: "Verified" },
        { logId: "HRV-2026-CMP-04", date: "Oct 21, 2026", village: "Enok Riverbank", volume: "16,800 L fresh milk", status: "Verified" },
      ],
    },
    batchIdentification: {
      lotFormat: "HBCX-CMP-[YEAR]-[ORIGIN_CODE]-[BATCH_NUM]",
      sampleLotNumber: "HBCX-CMP-2026-RIAU-0192",
      taggingType: "Laser-printed lot number, expiry date, and QR code on individual inner foil pouches and outer export cartons",
      sealType: "Airtight nitrogen-flushed heat seal on metallized barrier pouches",
      segregationProtocol: "Enclosed pharmaceutical-grade stainless steel spray drying system with automated CIP",
      warehouseZone: "Air-conditioned dry store, temperature < 22°C, relative humidity < 50%",
      palletTracking: "Barcoded wooden pallets with corner protectors and opaque black UV-barrier stretch film",
      chainOfCustody: [
        { stage: "Canal Boat Collection", responsible: "River Fleet Captain", verification: "Boat Log & Temperature Check" },
        { stage: "Hydraulic Cold Pressing", responsible: "Extraction Supervisor", verification: "Brix & Fat Content Measurement" },
        { stage: "Homogenization & Carrier Blending", responsible: "Formulation Specialist", verification: "Ingredient Weight Records & Batch Sheet" },
        { stage: "Spray Drying & Atomization", responsible: "Control Room Operator", verification: "Atomizer RPM & In/Out Air Temperature" },
        { stage: "Nitrogen Pouch Packing", responsible: "Packaging Lead", verification: "Residual Oxygen Analysis (< 2.0%)" },
      ],
    },
    inspectionReports: {
      accreditedLab: "PT SGS Indonesia (ISO/IEC 17025 Accredited)",
      reportNumber: "COA-HBCX-2026-CMP-0881",
      issueDate: "October 25, 2026",
      parameters: [
        { parameter: "Fat Content", testMethod: "Weibull-Stoldt Method", specification: "Min 65.0%", result: "65.8%", status: "EXCEEDS" },
        { parameter: "Moisture Content", testMethod: "Karl Fischer Titration", specification: "Max 3.0%", result: "2.3%", status: "PASS" },
        { parameter: "Free Fatty Acids (as Lauric)", testMethod: "AOCS Ca 5a-40", specification: "Max 0.15%", result: "0.09%", status: "PASS" },
        { parameter: "Solubility Index", testMethod: "ADPI Solubility Method", specification: "Min 95.0% at 40°C", result: "98.4%", status: "PASS" },
        { parameter: "Total Ash", testMethod: "AOAC 923.03", specification: "Max 3.0%", result: "2.1%", status: "PASS" },
        { parameter: "Dispersibility", testMethod: "Sensory & Wetting Speed", specification: "Free flowing, instantly soluble", result: "Instant Dispersible", status: "PASS" },
      ],
      sensoryNotes: "Creamy off-white fine powder; authentic rich coconut milk aroma; smooth and velvety upon reconstitution.",
      microbiologyResult: "Total Plate Count < 2,500 cfu/g; Coliforms < 10 cfu/g; E. coli: Negative; Salmonella: Absent in 25g.",
      contaminantsResult: "Lead < 0.05 mg/kg; Arsenic < 0.05 mg/kg; Preservatives (Benzoate, Sorbate): Absent.",
      inspectorNote: "Passed all export specifications. Carrier declaration: Food grade tapioca maltodextrin and milk protein.",
    },
    photosAndSamples: {
      sampleRetentionPeriod: "18 Months in controlled dry archive",
      sampleSize: "500g vacuum-sealed foil pack per batch",
      inspectionPhotos: [
        { title: "Spray Dryer Tower Inspection", description: "Stainless steel spray drying chamber with sanitization log.", image: "/gallery_commodities/3.webp", tag: "Drying Chamber" },
        { title: "Powder Granulometry", description: "Microscopic check confirming uniform droplet size and zero clumping.", image: "/gallery_commodities/1.webp", tag: "QC Lab" },
        { title: "Reconstitution Test", description: "Warm water test verifying complete dissolution without oily surface separation.", image: "/gallery_commodities/2.webp", tag: "Solubility" },
        { title: "Carton & Liner Barrier", description: "Heavy-duty corrugated export cartons with vacuum-sealed inner foil bag.", image: "/gallery_commodities/4.webp", tag: "Packaging" },
      ],
      sampleLog: {
        sampleId: "SMP-CMP-2026-0192-A",
        dateLogged: "October 23, 2026",
        dispatchMethod: "Air Express Courier with temperature log indicator",
        trackingReady: true,
      },
    },
    exportDocuments: {
      loadingPorts: ["Port of Tanjung Priok (Jakarta)", "Port of Belawan (Medan)"],
      incoterms: ["FOB", "CIF", "CFR"],
      leadTime: "24 Days",
      moq: "500 kg (LCL) / 12,000 kg (20ft FCL)",
      containerCapacity: {
        container20ft: "600 export cartons (20kg net) = 12,000 kg net, palletized with desiccants",
        container40ft: "1,200 export cartons (20kg net) = 24,000 kg net, palletized",
      },
      packingDetails: "20 kg net per carton (2 x 10 kg or 1 x 20 kg inner aluminium foil barrier bag in corrugated export carton).",
      documentChecklist: [
        { name: "Ocean Bill of Lading", code: "B/L", issuingAuthority: "Ocean Carrier", requiredForCustoms: true, description: "Full set 3 original bills of lading." },
        { name: "Certificate of Origin", code: "COO", issuingAuthority: "Kemendag RI", requiredForCustoms: true, description: "Preferential Certificate of Origin Form." },
        { name: "Phytosanitary & Health Certificate", code: "HC/PHYTO", issuingAuthority: "Barantan / BPOM RI", requiredForCustoms: true, description: "Official Indonesian Food Safety & Health Certificate." },
        { name: "Full Laboratory Certificate of Analysis", code: "COA", issuingAuthority: "ISO 17025 Accredited Laboratory", requiredForCustoms: true, description: "Complete chemical, physical, and microbiology test results." },
        { name: "Commercial Invoice & Packing List", code: "INV/PL", issuingAuthority: "PT HerblocX Nusantara Ekspor", requiredForCustoms: true, description: "Commercial documentation listing net/gross weight, carton serials, HS Code 1901.90.99." },
      ],
    },
  },

  "coconut-sugar": {
    slug: "coconut-sugar",
    title: "Organic Coconut Sugar",
    scientificName: "Cocos nucifera",
    category: "Sweeteners",
    gradeBadge: "GRADE A · LOW GI GRANULATED",
    summary:
      "Granulated natural sugar crystallized from freshly tapped coconut blossom nectar. Low glycemic index (~35-40), rich in essential minerals, and unrefined without chemical bleaching.",
    originArea: {
      region: "Central Java, Indonesia",
      subRegions: ["Banyumas Regency (Mount Slamet Slopes)", "Kulon Progo Regency", "Purworejo"],
      elevation: "350m – 800m ASL",
      soilType: "Volcanic Andosol with High Humus & Mineral Nutrients",
      climate: "Sub-tropical Mountainous, 3,200mm annual rainfall",
      coordinates: [109.23, -7.42],
      cooperativeCount: 22,
      registeredFarmers: 850,
      provenanceStory:
        "The smallholder tappers of Banyumas climb coconut palms twice daily at dawn and dusk to collect the sweet sap (nira) dripping from freshly cut flower spadices. The sap is naturally reduced over wood fires and hand-sifted into fine, golden-brown crystals.",
      certifications: ["USDA Organic Compliant", "EU Organic Standard", "Halal Indonesia", "Kosher Certified"],
    },
    harvestRecords: {
      harvestSeason: "Continuous year-round daily tapping",
      peakMonths: "May through October (Dry season yields highest sweetness)",
      collectionCycle: "Tapped twice daily; cooked down within 4 hours to prevent natural fermentation",
      processingWindow: "Fresh nectar reduced, crystallized, and sifted on the day of tapping",
      dryingMethod: "Initial wood-fired pan evaporation, followed by low-temperature dehumidification drying (< 60°C)",
      intakeMoisture: "Fresh sap 85% liquid, dried down to 1.8% – 2.5% crystalline moisture",
      intakeQualityCheck: "pH test of raw sap (pH > 6.0 required; rejects sour or naturally fermenting sap)",
      scaleVerification: "Verified digital scales at each village cooperative collection hub",
      officerSignOff: "Cooperative ICS (Internal Control System) Organic Inspector",
      recordsDossier: [
        { logId: "HRV-2026-CS-201", date: "Oct 10, 2026", village: "Cilongok, Banyumas", volume: "3,800 kg crystals", status: "Verified" },
        { logId: "HRV-2026-CS-202", date: "Oct 13, 2026", village: "Kokap, Kulon Progo", volume: "4,200 kg crystals", status: "Verified" },
        { logId: "HRV-2026-CS-203", date: "Oct 17, 2026", village: "Kedungbanteng", volume: "3,500 kg crystals", status: "Verified" },
        { logId: "HRV-2026-CS-204", date: "Oct 22, 2026", village: "Somagede", volume: "4,600 kg crystals", status: "Verified" },
      ],
    },
    batchIdentification: {
      lotFormat: "HBCX-CS-[YEAR]-[ORIGIN_CODE]-[BATCH_NUM]",
      sampleLotNumber: "HBCX-CS-2026-CJ-0761",
      taggingType: "Barcoded waterproof multi-layer labels with farm group origin identifier",
      sealType: "Security stitched tamper seal with heat-bonded inner poly-liner",
      segregationProtocol: "Dedicated organic handling line, zero cane sugar contamination risk",
      warehouseZone: "Dehumidified organic food warehouse, relative humidity < 50%",
      palletTracking: "Wooden fumigated pallets, shrink-wrapped with desiccants and moisture indicator",
      chainOfCustody: [
        { stage: "Daily Palm Tree Tapping", responsible: "Registered Smallholder Tapper", verification: "Tapper ID & Sap Freshness Check" },
        { stage: "Community Sugar Kitchen", responsible: "Village Master Cook", verification: "Cooking Log & Brix Consistency" },
        { stage: "Cooperative Sifting & Grinding", responsible: "ICS Organic Auditor", verification: "Mesh 16 Sieve Analysis & Metal Detection" },
        { stage: "Final Dehumidification", responsible: "Quality Control Officer", verification: "Moisture Analyzer Reading (< 2.5%)" },
        { stage: "Packing & Lot Registration", responsible: "Warehouse Dispatch Lead", verification: "Bag Serial Stamp & Retention Sample Seal" },
      ],
    },
    inspectionReports: {
      accreditedLab: "PT Sucofindo Laboratory (ISO/IEC 17025 Accredited)",
      reportNumber: "COA-HBCX-2026-CS-1145",
      issueDate: "October 24, 2026",
      parameters: [
        { parameter: "Sucrose Content", testMethod: "High-Performance Liquid Chromatography (HPLC)", specification: "Min 70.0%", result: "78.2%", status: "EXCEEDS" },
        { parameter: "Moisture Content", testMethod: "Oven Drying 105°C, 3 hrs", specification: "Max 3.0%", result: "2.1%", status: "PASS" },
        { parameter: "Reducing Sugars (Glucose + Fructose)", testMethod: "Lane-Eynon Method", specification: "Max 15.0%", result: "8.4%", status: "PASS" },
        { parameter: "Total Ash", testMethod: "AOAC 923.03", specification: "Max 3.0%", result: "2.2%", status: "PASS" },
        { parameter: "Granulation (Mesh Size)", testMethod: "Vibratory Sieve Analysis", specification: "Min 95% pass Mesh 16", result: "98.5%", status: "PASS" },
        { parameter: "Insoluble Impurities", testMethod: "Membrane Filtration", specification: "Max 0.10%", result: "0.02%", status: "PASS" },
      ],
      sensoryNotes: "Golden to amber brown uniform granules; rich caramel and toffee aroma; clean sweet taste without burnt bitterness.",
      microbiologyResult: "Total Plate Count < 1,000 cfu/g; Yeasts & Moulds < 50 cfu/g; E. coli: Negative; Salmonella: Absent in 25g.",
      contaminantsResult: "Heavy Metals: Lead < 0.05 mg/kg, Arsenic < 0.05 mg/kg. Cane sugar adulteration test: Negative.",
      inspectorNote: "Complies with Codex Stan 212 and Indonesian National Standard SNI 01-3743-1995 for Granulated Coconut Sugar.",
    },
    photosAndSamples: {
      sampleRetentionPeriod: "12 Months in desiccated humidity-controlled retention archive",
      sampleSize: "500g sealed archive sample per batch",
      inspectionPhotos: [
        { title: "Nectar Tapping at Canopy", description: "Harvesting fresh palm sap using traditional sanitized bamboo containers.", image: "/gallery_commodities/1.webp", tag: "Tapping" },
        { title: "Pan Reduction & Crystallization", description: "Gentle evaporation over controlled heat causing natural sugar crystallization.", image: "/gallery_commodities/2.webp", tag: "Crystallization" },
        { title: "Mesh Sifting & Granulometry", description: "Uniform screening through Mesh 16 stainless steel sieves.", image: "/gallery_commodities/3.webp", tag: "Sifting" },
        { title: "Sealed Kraft Export Bags", description: "20kg multiwall kraft sacks with PE moisture barrier ready for palletizing.", image: "/gallery_commodities/4.webp", tag: "Packaging" },
      ],
      sampleLog: {
        sampleId: "SMP-CS-2026-0761-A",
        dateLogged: "October 23, 2026",
        dispatchMethod: "International Express Air Courier",
        trackingReady: true,
      },
    },
    exportDocuments: {
      loadingPorts: ["Port of Tanjung Perak (Surabaya)", "Port of Tanjung Priok (Jakarta)"],
      incoterms: ["FOB", "CIF", "CFR"],
      leadTime: "21 Days",
      moq: "1,000 kg (LCL) / 18,000 kg (20ft FCL)",
      containerCapacity: {
        container20ft: "900 multiwall kraft bags (20kg net) = 18,000 kg net, palletized with desiccants",
        container40ft: "1,300 multiwall kraft bags (20kg net) = 26,000 kg net, palletized",
      },
      packingDetails: "20 kg net multiwall kraft paper sacks with food-grade polyethylene inner liner.",
      documentChecklist: [
        { name: "Ocean Bill of Lading", code: "B/L", issuingAuthority: "Shipping Carrier", requiredForCustoms: true, description: "Full set 3 original clean on board bills of lading." },
        { name: "Certificate of Origin (COO)", code: "COO", issuingAuthority: "Ministry of Trade Indonesia", requiredForCustoms: true, description: "Official preferential tariff Certificate of Origin." },
        { name: "Phytosanitary Certificate", code: "PHYTO", issuingAuthority: "Barantan (Indonesian Agricultural Quarantine)", requiredForCustoms: true, description: "Official biological safety and quarantine clearance." },
        { name: "Certificate of Analysis (COA)", code: "COA", issuingAuthority: "Accredited Laboratory (ISO 17025)", requiredForCustoms: true, description: "Physicochemical and microbiological analysis report." },
        { name: "Commercial Invoice & Packing List", code: "INV/PL", issuingAuthority: "PT HerblocX Nusantara Ekspor", requiredForCustoms: true, description: "Itemized commercial shipping paperwork with HS Code 1702.90.99." },
      ],
    },
  },

  "coconut-shell-charcoal": {
    slug: "coconut-shell-charcoal",
    title: "Coconut Shell Charcoal",
    scientificName: "Cocos nucifera",
    category: "Shell & fibre",
    gradeBadge: "GRADE A · 75% FIXED CARBON",
    summary:
      "High-density carbonised coconut shell briquettes and raw lumps. High calorific value (>7,200 kcal/kg), low ash content (<3.0%), odorless, and smokeless for premium shisha and industrial BBQ.",
    originArea: {
      region: "East Java, Indonesia",
      subRegions: ["Banyuwangi Regency", "Jember Regency", "Lumajang"],
      elevation: "100m – 500m ASL",
      soilType: "Volcanic Coastal & Mountainous Silt",
      climate: "Tropical Monsoonal with Distinct Dry Season",
      coordinates: [114.36, -8.21],
      cooperativeCount: 10,
      registeredFarmers: 340,
      provenanceStory:
        "East Java produces extremely thick and dense coconut shells from aged coastal palms. Shells are carefully segregated from coir fibers and carbonized in specialized controlled-draft kilns to yield high fixed carbon with minimal volatile impurities.",
      certifications: ["SMRC Self-Heating Test Passed", "MSDS Certified", "Fumigation Certified"],
    },
    harvestRecords: {
      harvestSeason: "Continuous year-round production",
      peakMonths: "June through October (Optimal dry season carbonisation)",
      collectionCycle: "Shells collected weekly from de-husking and copra processing centers",
      processingWindow: "Carbonized in sealed kilns with 72-hour controlled burn and cooling",
      dryingMethod: "Controlled oxygen-deprived kiln carbonisation, followed by air cooling and sun-curing",
      intakeMoisture: "Raw shell 18-20%, finished charcoal moisture < 5.0%",
      intakeQualityCheck: "Removal of fibrous coir, soil, and uncarbonised raw shell pieces",
      scaleVerification: "Heavy industrial electronic truck weighbridge",
      officerSignOff: "Plant Operations Manager & HerblocX Quality Inspector",
      recordsDossier: [
        { logId: "HRV-2026-CSC-01", date: "Oct 04, 2026", village: "Muncar, Banyuwangi", volume: "22,000 kg carbonized shell", status: "Verified" },
        { logId: "HRV-2026-CSC-02", date: "Oct 11, 2026", village: "Ambulu, Jember", volume: "19,500 kg carbonized shell", status: "Verified" },
        { logId: "HRV-2026-CSC-03", date: "Oct 17, 2026", village: "Rogojampi", volume: "25,000 kg carbonized shell", status: "Verified" },
        { logId: "HRV-2026-CSC-04", date: "Oct 23, 2026", village: "Tempeh, Lumajang", volume: "21,000 kg carbonized shell", status: "Verified" },
      ],
    },
    batchIdentification: {
      lotFormat: "HBCX-CSC-[YEAR]-[ORIGIN_CODE]-[BATCH_NUM]",
      sampleLotNumber: "HBCX-CSC-2026-EJ-0428",
      taggingType: "Heavy-duty waterproof labels with batch barcodes on inner and master cartons",
      sealType: "Security strapping band with reinforced kraft carton tape",
      segregationProtocol: "Dedicated briquetting line using natural food-grade tapioca starch binder only",
      warehouseZone: "Fire-suppressed dry ventilation warehouse, humidity < 65%",
      palletTracking: "Heat-treated ISPM-15 wooden export pallets with corner guards and heavy shrink-wrap",
      chainOfCustody: [
        { stage: "Shell Collection & Segregation", responsible: "Kiln Yard Foreman", verification: "Shell Thickness & Foreign Matter Check" },
        { stage: "Kiln Carbonisation & Cooling", responsible: "Chief Carbonizer", verification: "72-Hour Pyrolysis Temperature Graph" },
        { stage: "Crushing, Sieving & Briquetting", responsible: "Factory Production Lead", verification: "Mesh Size & Hydraulic Pressure Log (150 bar)" },
        { stage: "Oven Drying & Curing", responsible: "QC Inspector", verification: "Continuous Oven Drying Graph (75°C for 24h)" },
        { stage: "Drop Test & Packaging", responsible: "Packing Line Supervisor", verification: "3x 1.5m Drop Shatter Resistance Audit" },
      ],
    },
    inspectionReports: {
      accreditedLab: "PT Carsurin / PT Sucofindo (ISO/IEC 17025 Accredited)",
      reportNumber: "COA-HBCX-2026-CSC-0552",
      issueDate: "October 25, 2026",
      parameters: [
        { parameter: "Fixed Carbon", testMethod: "ASTM D3172", specification: "Min 75.0%", result: "78.4%", status: "EXCEEDS" },
        { parameter: "Calorific Value", testMethod: "ASTM D5865 Bomb Calorimeter", specification: "Min 7,200 kcal/kg", result: "7,420 kcal/kg", status: "EXCEEDS" },
        { parameter: "Moisture Content", testMethod: "ASTM D3173", specification: "Max 5.0%", result: "4.1%", status: "PASS" },
        { parameter: "Ash Content", testMethod: "ASTM D3174", specification: "Max 3.0%", result: "2.4%", status: "PASS" },
        { parameter: "Volatile Matter", testMethod: "ASTM D3175", specification: "Max 15.0%", result: "14.1%", status: "PASS" },
        { parameter: "Ash Color", testMethod: "Visual Inspection", specification: "White to Light Gray", result: "Clean White", status: "PASS" },
        { parameter: "Burning Time", testMethod: "Standard Shisha Burn Test", specification: "Min 90 minutes", result: "115 minutes", status: "EXCEEDS" },
      ],
      sensoryNotes: "Completely smokeless and odorless upon ignition; zero sparks, no sulfur scent; strong cohesive cube integrity.",
      microbiologyResult: "Non-biological industrial commodity. Free from mould, pests, and decaying organic debris.",
      contaminantsResult: "Sulfur content < 0.05%; Chlorine < 0.02%. 100% natural without chemical accelerants.",
      inspectorNote: "Passed UN 3175 / IMDG 4.2 Self-Heating Charcoal Test with official Vanning Certificate issued.",
    },
    photosAndSamples: {
      sampleRetentionPeriod: "12 Months in sealed retention archive",
      sampleSize: "2 kg carton sample per batch",
      inspectionPhotos: [
        { title: "Carbonised Shell Halves", description: "Deep black, metallic ring carbonized coconut shells free from coir husk.", image: "/gallery_commodities/4.webp", tag: "Raw Shell" },
        { title: "Briquette Cube Compression", description: "Precision 25x25x25mm cubes compressed at high pressure for uniform density.", image: "/gallery_commodities/1.webp", tag: "Briquetting" },
        { title: "Drop & Shatter Resistance Test", description: "Cube dropped 3 times from 1.5m height onto concrete without breaking.", image: "/gallery_commodities/2.webp", tag: "QC Test" },
        { title: "Export Master Cartons", description: "10kg inner master carton with plastic wrapping on heat-treated export pallets.", image: "/gallery_commodities/3.webp", tag: "Packaging" },
      ],
      sampleLog: {
        sampleId: "SMP-CSC-2026-0428-A",
        dateLogged: "October 24, 2026",
        dispatchMethod: "Air Express Courier with Non-Dangerous Goods Declaration",
        trackingReady: true,
      },
    },
    exportDocuments: {
      loadingPorts: ["Port of Tanjung Perak (Surabaya)"],
      incoterms: ["FOB", "CIF", "CFR"],
      leadTime: "25 - 28 Days",
      moq: "5,000 kg (LCL) / 18,000 kg (20ft FCL)",
      containerCapacity: {
        container20ft: "1,800 cartons (10kg net) = 18,000 kg net, floor loaded or palletized",
        container40ft: "2,600 cartons (10kg net) = 26,000 kg net (40ft HC FCL)",
      },
      packingDetails: "10 kg export master carton with 1 kg inner retail boxes, or 500 kg woven PP jumbo bags for raw lump.",
      documentChecklist: [
        { name: "Ocean Bill of Lading", code: "B/L", issuingAuthority: "Shipping Carrier", requiredForCustoms: true, description: "Full set 3 original clean on board ocean bills of lading." },
        { name: "Certificate of Origin (COO)", code: "COO", issuingAuthority: "Ministry of Trade Indonesia", requiredForCustoms: true, description: "Official Indonesian Certificate of Origin." },
        { name: "SMRC Non-DG / Self-Heating Exemption Certificate", code: "SMRC/Vanning", issuingAuthority: "Accredited Surveyor (Carsurin/Sucofindo)", requiredForCustoms: true, description: "Mandatory certificate verifying charcoal is non-self-heating under IMO/IMDG Code." },
        { name: "Material Safety Data Sheet (MSDS)", code: "MSDS", issuingAuthority: "Manufacturer & Accredited Chemist", requiredForCustoms: true, description: "Complete 16-section chemical safety document for ocean transport." },
        { name: "Certificate of Analysis (COA)", code: "COA", issuingAuthority: "Accredited Laboratory", requiredForCustoms: true, description: "Fixed carbon, ash content, and calorific value verification." },
        { name: "Commercial Invoice & Packing List", code: "INV/PL", issuingAuthority: "PT HerblocX Nusantara Ekspor", requiredForCustoms: true, description: "Export invoice listing weights and HS Code 4402.90.10." },
      ],
    },
  },

  "cocopeat": {
    slug: "cocopeat",
    title: "Cocopeat & Coir Fiber",
    scientificName: "Cocos nucifera",
    category: "Shell & fibre",
    gradeBadge: "GRADE A · LOW EC BUFFERED",
    summary:
      "Aged, washed, and buffered coconut husk pith compressed into high-expansion 5 kg blocks. Electrical conductivity (EC < 0.5 mS/cm) and ideal neutral pH (5.8 – 6.5) for commercial hydroponics and horticulture.",
    originArea: {
      region: "South Lampung, Sumatra, Indonesia",
      subRegions: ["Kalianda Coastal Plain", "Katibung", "Sidomulyo"],
      elevation: "20m – 200m ASL",
      soilType: "Coastal Sandy Alluvium & Mineral Silt",
      climate: "Humid Tropical Marine, 2,400mm annual rainfall",
      coordinates: [105.59, -5.73],
      cooperativeCount: 8,
      registeredFarmers: 280,
      provenanceStory:
        "The coastal belt of South Lampung generates vast volumes of thick coconut husks. Our dedicated de-fibering mills wash the extracted coir pith in freshwater concrete settling basins to leach out natural sodium and potassium salts, creating an inert, nutrient-ready growing medium.",
      certifications: ["Phytosanitary Certified", "Fumigation Certified", "Heavy Metal Free"],
    },
    harvestRecords: {
      harvestSeason: "Continuous year-round production",
      peakMonths: "May through October (Ideal dry season solar curing)",
      collectionCycle: "Fresh husks delivered daily from copra and coconut processing mills",
      processingWindow: "Husks decorticated, washed in fresh water, and aged for 4 months",
      dryingMethod: "Washed in multi-stage fresh water basins, sun-dried on clean concrete drying beds",
      intakeMoisture: "Wet raw peat 70%, dried down to < 20% before hydraulic compression",
      intakeQualityCheck: "EC meter probe check, sand filtration, and sifting out short fibers",
      scaleVerification: "Calibrated digital hydraulic platform load cells",
      officerSignOff: "Mill Agronomist & HerblocX Quality Inspector",
      recordsDossier: [
        { logId: "HRV-2026-CP-01", date: "Oct 06, 2026", village: "Kalianda Mill #1", volume: "45,000 kg washed pith", status: "Verified" },
        { logId: "HRV-2026-CP-02", date: "Oct 12, 2026", village: "Katibung De-fibering", volume: "40,000 kg washed pith", status: "Verified" },
        { logId: "HRV-2026-CP-03", date: "Oct 18, 2026", village: "Sidomulyo Depot", volume: "48,000 kg washed pith", status: "Verified" },
        { logId: "HRV-2026-CP-04", date: "Oct 24, 2026", village: "Palas Coastal Station", volume: "42,000 kg washed pith", status: "Verified" },
      ],
    },
    batchIdentification: {
      lotFormat: "HBCX-CP-[YEAR]-[ORIGIN_CODE]-[BATCH_NUM]",
      sampleLotNumber: "HBCX-CP-2026-LMP-0584",
      taggingType: "Heavy-duty printed pallet label with barcode, batch code, and individual block stenciling",
      sealType: "UV-resistant strapping band and heavy stretch-wrap on solid pallets",
      segregationProtocol: "Dedicated concrete curing slabs segregated from untreated high-EC raw peat",
      warehouseZone: "Covered, well-ventilated dry goods warehouse, elevated from ground contact",
      palletTracking: "Serialized pallet tags (#PLT-CP-0584-01 through 24) on heat-treated pallets",
      chainOfCustody: [
        { stage: "Husk Decortication", responsible: "Mill De-fibering Lead", verification: "Fiber & Pith Separation Check" },
        { stage: "Freshwater Wash & Salt Leaching", responsible: "Washing Basin Operator", verification: "Basin Water In/Out EC Measurements" },
        { stage: "Concrete Sun-Drying Bed", responsible: "Drying Field Supervisor", verification: "Moisture Meter Readings (< 20%)" },
        { stage: "Hydraulic Compression (5kg)", responsible: "Press Operator", verification: "Block Dimensions (30x30x12cm) & Weight (5kg ± 0.2kg)" },
        { stage: "Palletizing & Wrapping", responsible: "Dispatch Officer", verification: "Pallet Moisture Barrier & Fumigation Stamping" },
      ],
    },
    inspectionReports: {
      accreditedLab: "PT Sucofindo Laboratory (ISO/IEC 17025 Accredited)",
      reportNumber: "COA-HBCX-2026-CP-0774",
      issueDate: "October 26, 2026",
      parameters: [
        { parameter: "Electrical Conductivity (EC)", testMethod: "1:5 Extraction Method (v/v)", specification: "Max 0.50 mS/cm (Low EC)", result: "0.38 mS/cm", status: "PASS" },
        { parameter: "pH Value", testMethod: "1:5 Water Extraction Probe", specification: "5.8 – 6.5", result: "6.1", status: "PASS" },
        { parameter: "Moisture Content", testMethod: "Oven Drying 105°C, 4 hrs", specification: "Max 20.0%", result: "16.8%", status: "PASS" },
        { parameter: "Expansion Ratio", testMethod: "Water Saturation Test", specification: "Min 15 Liters / kg (75L / 5kg)", result: "78.5 Liters / 5kg block", status: "EXCEEDS" },
        { parameter: "Sand & Silica Content", testMethod: "Sieve & Gravimetric Test", specification: "Max 2.0%", result: "0.85%", status: "PASS" },
        { parameter: "Fiber Content (> 6mm)", testMethod: "Mechanical Separation", specification: "Max 10.0%", result: "5.2%", status: "PASS" },
      ],
      sensoryNotes: "Uniform dark golden-brown texture; clean earthy aroma free from sour fermentation or chemical smells.",
      microbiologyResult: "Pathogen-free: Free from soil-borne fungi (Pythium, Phytophthora) and parasitic nematodes.",
      contaminantsResult: "Heavy Metals: Lead < 0.1 mg/kg; Cadmium < 0.05 mg/kg; Arsenic < 0.1 mg/kg.",
      inspectorNote: "Excellent porosity, water retention, and air-filled porosity. Premium grade for horticulture and greenhouse berry production.",
    },
    photosAndSamples: {
      sampleRetentionPeriod: "12 Months in sealed retention archive",
      sampleSize: "1 compressed block (5kg) archived per shipment",
      inspectionPhotos: [
        { title: "Freshwater Washing Basin", description: "Multi-stage concrete washing basins leaching out natural salts to low EC.", image: "/gallery_commodities/2.webp", tag: "Washing Basin" },
        { title: "Sun-Drying Concrete Yards", description: "Clean elevated concrete drying slabs ensuring zero soil contamination.", image: "/gallery_commodities/3.webp", tag: "Sun-Drying" },
        { title: "Expansion Volume Test", description: "Hydrated block expanding into over 75 Liters of loose fluffy peat.", image: "/gallery_commodities/1.webp", tag: "Expansion Test" },
        { title: "Palletized 5kg Blocks", description: "Uniform hydraulic compressed 5kg blocks palletized with corner protection.", image: "/gallery_commodities/4.webp", tag: "Packaging" },
      ],
      sampleLog: {
        sampleId: "SMP-CP-2026-0584-A",
        dateLogged: "October 25, 2026",
        dispatchMethod: "Air Courier with phytosanitary declaration label",
        trackingReady: true,
      },
    },
    exportDocuments: {
      loadingPorts: ["Port of Panjang (Lampung)", "Port of Tanjung Priok (Jakarta)"],
      incoterms: ["FOB", "CIF", "CFR"],
      leadTime: "25 Days",
      moq: "10,000 kg (Half 20ft) / 24,000 kg (40ft HC FCL)",
      containerCapacity: {
        container20ft: "2,200 blocks (5kg net) = 11,000 kg net, palletized",
        container40ft: "4,800 blocks (5kg net) on 24 pallets = 24,000 kg net (40ft HC FCL)",
      },
      packingDetails: "5 kg compressed blocks (30x30x12 cm), 200 blocks per pallet, shrink-wrapped with strapping band.",
      documentChecklist: [
        { name: "Ocean Bill of Lading", code: "B/L", issuingAuthority: "Shipping Carrier", requiredForCustoms: true, description: "Full set 3 original clean on board bills of lading." },
        { name: "Certificate of Origin (COO)", code: "COO", issuingAuthority: "Ministry of Trade Indonesia", requiredForCustoms: true, description: "Official Indonesian Certificate of Origin." },
        { name: "Phytosanitary Certificate", code: "PHYTO", issuingAuthority: "Barantan (Indonesian Agricultural Quarantine)", requiredForCustoms: true, description: "Quarantine certificate declaring freedom from plant pests and soil nematodes." },
        { name: "Fumigation Certificate", code: "FUM", issuingAuthority: "AFAS-Certified Fumigation Provider", requiredForCustoms: true, description: "Methyl bromide or phosphine fumigation treatment record." },
        { name: "Certificate of Analysis (EC & pH)", code: "COA", issuingAuthority: "Accredited Laboratory", requiredForCustoms: true, description: "Certified testing of Electrical Conductivity, pH, and expansion." },
        { name: "Commercial Invoice & Packing List", code: "INV/PL", issuingAuthority: "PT HerblocX Nusantara Ekspor", requiredForCustoms: true, description: "Export paperwork specifying pallet count, weight, and HS Code 5305.00.22." },
      ],
    },
  },

  "copra": {
    slug: "copra",
    title: "Milling & Edible Copra",
    scientificName: "Cocos nucifera",
    category: "Kernel products",
    gradeBadge: "GRADE A / B · EDIBLE & MILLING",
    summary:
      "Dried mature coconut kernel halves produced from North Maluku smallholder archipelago plantations. Tested for moisture, free fatty acids, and guaranteed free from aflatoxins and mould for commercial oil extraction.",
    originArea: {
      region: "North Maluku, Indonesia",
      subRegions: ["Halmahera Island", "Morotai Island", "Bacan Archipelago"],
      elevation: "10m – 300m ASL",
      soilType: "Volcanic Coral-Limestone Loam",
      climate: "Equatorial Marine, 2,700mm annual rainfall",
      coordinates: [127.94, 0.81],
      cooperativeCount: 16,
      registeredFarmers: 610,
      provenanceStory:
        "The volcanic islands of North Maluku have traded in coconut commodities for centuries. Coconuts grow along untouched maritime coastlines where island farmers split mature nuts and carefully smoke-free kiln or sun-dry the meat to preserve clean golden-white kernel halves.",
      certifications: ["Barantan Quarantine Certified", "Aflatoxin Tested", "Fumigation Certified"],
    },
    harvestRecords: {
      harvestSeason: "Continuous year-round harvesting",
      peakMonths: "May through October (Peak sunny dry period)",
      collectionCycle: "Harvested every 4 to 6 weeks from mature palm groves",
      processingWindow: "De-husked, split, and dried within 24 hours of opening",
      dryingMethod: "Initial solar drying on clean mesh decks, followed by indirect smoke-free kiln curing",
      intakeMoisture: "Fresh kernel 45-50%, dried down to 5.5% – 6.5% moisture",
      intakeQualityCheck: "Visual sorting for mould, discolored burnt pieces, and rubbery kernel",
      scaleVerification: "Calibrated industrial dial & digital platform scales at port depots",
      officerSignOff: "Island Cooperative Coordinator & Port Operations Manager",
      recordsDossier: [
        { logId: "HRV-2026-CPR-01", date: "Oct 07, 2026", village: "Tobelo, Halmahera", volume: "32,000 kg dried halves", status: "Verified" },
        { logId: "HRV-2026-CPR-02", date: "Oct 14, 2026", village: "Daruba, Morotai", volume: "28,500 kg dried halves", status: "Verified" },
        { logId: "HRV-2026-CPR-03", date: "Oct 19, 2026", village: "Labuha, Bacan", volume: "35,000 kg dried halves", status: "Verified" },
        { logId: "HRV-2026-CPR-04", date: "Oct 25, 2026", village: "Kao Coastal Port", volume: "29,000 kg dried halves", status: "Verified" },
      ],
    },
    batchIdentification: {
      lotFormat: "HBCX-CPR-[YEAR]-[ORIGIN_CODE]-[BATCH_NUM]",
      sampleLotNumber: "HBCX-CPR-2026-NM-0209",
      taggingType: "Bold stenciled batch numbers and weatherproof colored barcode tags on each bag",
      sealType: "Heavy-duty double-stitched poly-thread with security lead wire seal",
      segregationProtocol: "Segregated storage between Grade A (Edible White) and Grade B (Milling)",
      warehouseZone: "Well-aerated coastal warehouse, dunnage-elevated off concrete floor",
      palletTracking: "Bulk container loading or palletized with heavy-duty breathable netting",
      chainOfCustody: [
        { stage: "Island Copra Kiln", responsible: "Village Farmer Head", verification: "Kernel Moisture Needle Probe Check" },
        { stage: "Inter-Island Barge Loading", responsible: "Harbor Freight Master", verification: "Tonnage Weighbill & Mould Inspection" },
        { stage: "Central Port Sorting Facility", responsible: "HerblocX QC Lead", verification: "Grade A vs Grade B Sorting Table" },
        { stage: "Bagging & Stenciling", responsible: "Warehouse Lead", verification: "50kg Gross/Net Weight Verification" },
        { stage: "Container Stuffing & Quarantine", responsible: "Surveyor & Barantan Officer", verification: "Stuffing Survey & Fumigation Seal" },
      ],
    },
    inspectionReports: {
      accreditedLab: "PT Sucofindo / PT Superintending Company of Indonesia (ISO 17025)",
      reportNumber: "COA-HBCX-2026-CPR-0391",
      issueDate: "October 26, 2026",
      parameters: [
        { parameter: "Oil Content (Dry Basis)", testMethod: "Soxhlet Extraction", specification: "Min 65.0%", result: "67.8%", status: "EXCEEDS" },
        { parameter: "Moisture Content", testMethod: "Oven Drying 105°C, 4 hrs", specification: "Max 6.0% (Grade A) / 7.0% (Grade B)", result: "5.6%", status: "PASS" },
        { parameter: "Free Fatty Acids (as Lauric)", testMethod: "AOCS Ca 5a-40", specification: "Max 1.0% (Grade A) / Max 3.0% (Grade B)", result: "0.82%", status: "PASS" },
        { parameter: "Mouldy Kernel", testMethod: "Visual Inspection per 1,000g", specification: "Max 1.0%", result: "0.2%", status: "PASS" },
        { parameter: "Foreign Matter & Dirt", testMethod: "Gravimetric Sieve Check", specification: "Max 0.5%", result: "0.15%", status: "PASS" },
        { parameter: "Rubbery / Immature Copra", testMethod: "Visual & Physical Check", specification: "Max 2.0%", result: "0.8%", status: "PASS" },
      ],
      sensoryNotes: "Clean white to pale cream interior; firm, brittle snap; sweet coconut scent without smoke or rancid acid smell.",
      microbiologyResult: "Aflatoxin (B1 + B2 + G1 + G2) < 4 ppb (Well below EU and US international maximum thresholds).",
      contaminantsResult: "Free from coal tar, kerosene residue, and heavy hydrocarbon smoke contamination.",
      inspectorNote: "Grade A Edible White Copra suitable for direct food and virgin oil extraction plants.",
    },
    photosAndSamples: {
      sampleRetentionPeriod: "12 Months in dry sealed retention archive",
      sampleSize: "1,500g composite sample kept in sealed barrier bag",
      inspectionPhotos: [
        { title: "Split Copra Drying Deck", description: "White kernel halves drying on clean elevated mesh decks under tropical sun.", image: "/gallery_commodities/3.webp", tag: "Drying Deck" },
        { title: "Cross-Section Kernel Inspection", description: "Firm, thick meat snapped open to confirm zero internal mould.", image: "/gallery_commodities/1.webp", tag: "Cross-Section" },
        { title: "Moisture Meter Pin Testing", description: "Digital needle moisture meter reading 5.6% across random sample halves.", image: "/gallery_commodities/2.webp", tag: "Moisture Test" },
        { title: "Woven PP Export Bags", description: "50kg new breathable woven bags stenciled with export lot identification.", image: "/gallery_commodities/4.webp", tag: "Packaging" },
      ],
      sampleLog: {
        sampleId: "SMP-CPR-2026-0209-A",
        dateLogged: "October 24, 2026",
        dispatchMethod: "Air Courier with certificate of origin declaration",
        trackingReady: true,
      },
    },
    exportDocuments: {
      loadingPorts: ["Port of Bitung (North Sulawesi)", "Port of Tanjung Perak (Surabaya)"],
      incoterms: ["FOB", "CIF", "CFR"],
      leadTime: "21 Days",
      moq: "10,000 kg (Half 20ft) / 20,000 kg (20ft FCL)",
      containerCapacity: {
        container20ft: "400 bags (50kg net) = 20,000 kg net, floor loaded with ventilation kraft paper",
        container40ft: "500 - 520 bags (50kg net) = 26,000 kg net (40ft HC FCL)",
      },
      packingDetails: "50 kg new breathable woven polypropylene (PP) bags with bold export stencil markings.",
      documentChecklist: [
        { name: "Clean Ocean Bill of Lading", code: "B/L", issuingAuthority: "Shipping Carrier", requiredForCustoms: true, description: "Full set 3 original negotiable bills of lading." },
        { name: "Certificate of Origin (COO)", code: "COO", issuingAuthority: "Ministry of Trade Indonesia", requiredForCustoms: true, description: "Official Indonesian Certificate of Origin." },
        { name: "Phytosanitary Certificate", code: "PHYTO", issuingAuthority: "Barantan (Indonesian Agricultural Quarantine)", requiredForCustoms: true, description: "Quarantine verification of freedom from storage weevils and mould." },
        { name: "Aflatoxin Test Certificate", code: "COA-AFLA", issuingAuthority: "Accredited Laboratory (ISO 17025)", requiredForCustoms: true, description: "Laboratory test certifying total aflatoxins < 4 ppb." },
        { name: "Container Fumigation Certificate", code: "FUM", issuingAuthority: "Licensed Fumigation Agency", requiredForCustoms: true, description: "Phosphine (PH3) container fumigation certification." },
        { name: "Commercial Invoice & Packing List", code: "INV/PL", issuingAuthority: "PT HerblocX Nusantara Ekspor", requiredForCustoms: true, description: "Itemized commercial shipping paperwork with HS Code 1203.00.00." },
      ],
    },
  },
};

export function getCommoditySpecification(slug: string): CommoditySpecificationData | undefined {
  return COMMODITY_SPECIFICATIONS[slug];
}

