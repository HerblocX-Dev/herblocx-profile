import type {
  OriginLocation,
  TraceabilityStep,
} from "#lib/types/traceability.ts";
import {
  MapPin,
  FileText,
  Tag,
  ClipboardCheck,
  Camera,
  FileSpreadsheet,
} from "@lucide/svelte";

export const ORIGIN_LOCATIONS: OriginLocation[] = [
  // {
  //   id: "gayo",
  //   name: "Gayo, Aceh",
  //   region: "Central Aceh Highlands",
  //   elevation: "1,200m – 1,600m ASL",
  //   soil: "Volcanic Andosol",
  //   coords: [96.84, 4.63],
  //   labelOffset: { x: 0, y: -28 },
  // },
  // {
  //   id: "mandheling",
  //   name: "Mandheling",
  //   region: "North Sumatra / Tapanuli",
  //   elevation: "900m – 1,500m ASL",
  //   soil: "Mineral-Rich Volcanic Loam",
  //   coords: [99.15, 1.35],
  //   labelOffset: { x: 12, y: -26 },
  // },
  {
    id: "java",
    name: "Java",
    region: "Preanger & Ijen Highlands",
    elevation: "1,100m – 1,400m ASL",
    soil: "Young Volcanic Ash",
    coords: [107.61, -7.15],
    labelOffset: { x: 0, y: -26 },
  },
  // {
  //   id: "toraja",
  //   name: "Toraja",
  //   region: "South Sulawesi Highlands",
  //   elevation: "1,400m – 1,900m ASL",
  //   soil: "Iron-Rich Mountain Podzolic",
  //   coords: [119.85, -3.07],
  //   labelOffset: { x: 0, y: -26 },
  // },
  // {
  //   id: "flores",
  //   name: "Flores",
  //   region: "Bajawa & Manggarai, NTT",
  //   elevation: "1,200m – 1,550m ASL",
  //   soil: "Inceptisol Volcanic",
  //   coords: [120.99, -8.78],
  //   labelOffset: { x: 0, y: -26 },
  // },
];

export const SEA_LABELS: { name: string; coords: [number, number] }[] = [
  { name: "CELEBES SEA", coords: [122.5, 3.2] },
  { name: "JAVA SEA", coords: [111.5, -5.0] },
  { name: "INDIAN OCEAN", coords: [101.0, -9.8] },
  { name: "FLORES SEA", coords: [120.5, -7.2] },
  { name: "BANDA SEA", coords: [127.8, -5.8] },
];

export const TRACEABILITY_STEPS: TraceabilityStep[] = [
  {
    id: "origin",
    icon: MapPin,
    title: "Origin & Sourcing Area",
    description:
      "Tracing each commodity back to its specific region and local farming community.",
    isMapStep: true,
    previewNote:
      "Every lot includes regional origin mapping and cooperative registry verification prior to consolidation.",
  },
  {
    id: "harvest",
    icon: FileText,
    title: "Harvest & Collection Records",
    description:
      "Documenting collection dates, volumes, and initial handling protocols.",
    metrics: [
      { label: "Harvest Window", value: "Logged by Week & Batch" },
      { label: "Intake Weight", value: "Digital Scale Verified (kg/MT)" },
      { label: "Post-Harvest Drying", value: "Sun-Dried / Mechanical Log" },
      { label: "Collector Sign-off", value: "Field Officer Certified" },
    ],
    previewNote:
      "Collection sheets track the exact time between harvest, drying, and warehouse intake to prevent fermentation or mold.",
  },
  {
    id: "batch",
    icon: Tag,
    title: "Batch & Lot Identification",
    description:
      "Assigning unique identifiers to ensure seamless tracking through processing.",
    metrics: [
      { label: "Lot Format", value: "ORG-YYYY-REG-BATCH#" },
      { label: "Bag Tagging", value: "QR / Stenciled Jute & PP Bags" },
      { label: "Processing Line", value: "Dedicated Batch Segregation" },
      { label: "Warehouse Zone", value: "Pallet-Level Tracking" },
    ],
    previewNote:
      "Zero cross-contamination: each lot retains its unique ID from raw material intake to container stuffing.",
  },
  {
    id: "quality",
    icon: ClipboardCheck,
    title: "Quality Inspection Reports",
    description:
      "Rigorous evaluations covering moisture content, grade, and purity standards.",
    metrics: [
      { label: "Moisture Content", value: "Tested (< 11% - 13% Std)" },
      { label: "Foreign Matter", value: "< 0.5% Strict Sieve Check" },
      { label: "Defect Count", value: "Graded per ISO / ASTA Spec" },
      { label: "Third-Party Lab", value: "SGS / Sucofindo Available" },
    ],
    previewNote:
      "Buyers receive a complete Certificate of Analysis (COA) detailing physical grading and moisture readings before shipment.",
  },
  {
    id: "photos",
    icon: Camera,
    title: "Product Photos & Sample Records",
    description:
      "Visual documentation and physical sample logs maintained for every shipment.",
    isPhotoStep: true,
    photos: [
      {
        label: "Raw & Graded Commodity",
        caption: "High-res macro shot with color & size reference scale",
      },
      {
        label: "Moisture Meter Reading",
        caption: "Timestamped digital tester photo from the actual lot",
      },
      {
        label: "Bagging & Lot Markings",
        caption: "Export-ready packaging & stencil verification",
      },
      {
        label: "Sealed Retention Sample",
        caption: "300g–500g reference sample archived for 12 months",
      },
    ],
    previewNote:
      "Pre-shipment samples are couried via DHL/FedEx alongside a digital photo dossier of the exact lot being loaded.",
  },
  {
    id: "export",
    icon: FileSpreadsheet,
    title: "Export & Shipment Documents",
    description:
      "Complete compliance paperwork, bills of lading, and certificates of origin.",
    metrics: [
      { label: "Shipping Core", value: "Bill of Lading (B/L), Packing List" },
      { label: "Biosecurity", value: "Phytosanitary & Fumigation Cert" },
      { label: "Customs & Trade", value: "Certificate of Origin (COO)" },
      { label: "Quality Certs", value: "COA, Weight & Quality Note" },
    ],
    previewNote:
      "Digital draft documents are shared for buyer approval prior to final issuance to guarantee smooth customs clearance.",
  },
];
