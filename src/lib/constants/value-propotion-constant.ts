import type {
  CatalogueItem,
  TradeStandardItem,
} from "#lib/types/value-propotion-type.ts";

export const VALUE_PROPOSITION_HEADER = {
  eyebrow: "Trade Execution & Terms",
  headline: "Source with Confidence. Trade with Clarity.",
  subheadline:
    "Premium Indonesian commodities, supported by export documentation, farm-to-shipment traceability, and responsive coordination.",
  ledgerTitle: "What You Get — Standard Export Deliverables",
};

export const CATALOGUE_2026_LINEUP: CatalogueItem[] = [
  {
    name: "Fruvee",
    origin: "Java & Sumatra",
    grades: "Export Grade / Custom Spec",
    hsCodePrefix: "2008 / 0811",
  },
  {
    name: "Coconut",
    origin: "Sulawesi & Sumatra",
    grades: "Semi-Husked, Copra, Derivative",
    hsCodePrefix: "0801.11 / 1513",
  },
  {
    name: "Betelnut (Areca)",
    origin: "Aceh, Jambi & West Sumatra",
    grades: "80–85% / 90–95% Split & Whole",
    hsCodePrefix: "0802.80",
  },
  {
    name: "Vanilla",
    origin: "Papua, Flores & Java",
    grades: "Planifolia & Tahitensis (Gourmet / Extraction)",
    hsCodePrefix: "0905.10",
  },
];

export const WHAT_YOU_GET_ITEMS: TradeStandardItem[] = [
  {
    code: "01",
    title: "Export Compliance & Documentation",
    summary:
      "Prepared and verified in-house by our export desk. Drafts are submitted for buyer review 72 hours prior to vessel departure to prevent destination demurrage.",
    deliverablesLabel: "Included Documents",
    deliverables: [
      "Bill of Lading (Original / Telex)",
      "Certificate of Origin (SKA Form D / E / AANZ)",
      "Karantina Phytosanitary Certificate",
      "ISPM-15 / AFASID Fumigation Cert",
      "Commercial Invoice & Packing List",
      "PEB (Customs Export Declaration)",
    ],
    standardLabel: "Surveyor Option",
    standardValue: "SGS / Sucofindo / Carsurin",
  },
  {
    code: "02",
    title: "Farm-to-Shipment Traceability",
    summary:
      "Every shipment is backed by physical retention samples and a batch-coded digital dossier linking container seal numbers back to specific regional collection centers.",
    deliverablesLabel: "Lot Verification Package",
    deliverables: [
      "Geo-Referenced Sourcing Sub-District",
      "Warehouse Intake & Drying Logs",
      "Timestamped Moisture Meter Photos",
      "300g Sealed Retention Sample (12-Mo Archive)",
      "Empty-to-Sealed Container Stuffing Photos",
    ],
    standardLabel: "Incoterms Supported",
    standardValue: "FOB, CFR, CIF (Belawan, Tg. Perak, Tg. Priok)",
  },
  {
    code: "03",
    title: "Secure & Fast Payment Process",
    summary:
      "Structured through tier-1 Indonesian corporate banking channels with clear milestone triggers tied to physical inspection and shipping document issuance.",
    deliverablesLabel: "Accepted Settlement Terms",
    deliverables: [
      "Irrevocable L/C at Sight (Prime Banks)",
      "T/T (Telegraphic Transfer) Milestone Split",
      "CAD (Cash Against Documents)",
      "Proforma Invoice & Formal Sales Contract",
    ],
    standardLabel: "Settlement Currency",
    standardValue: "USD — Corporate Trade Account",
  },
  {
    code: "04",
    title: "Responsive Coordination (First Quote to Repeat Orders)",
    summary:
      "Direct communication with decision-makers—no layers of unnamed brokers. You receive scheduled WhatsApp/Email milestones from sample dispatch to vessel arrival.",
    deliverablesLabel: "Coordination Milestones",
    deliverables: [
      "< 24h Quotation & Spec Sheet Turnaround",
      "DHL / FedEx Pre-Shipment Sample Tracking",
      "Weekly Processing & Grading Progress",
      "Live Vessel ETD / ETA & BL Tracking",
    ],
    standardLabel: "Direct Desk Access",
    standardValue: "Dedicated Export Manager (WhatsApp & Email)",
  },
];
