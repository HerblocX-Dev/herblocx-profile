import type { OrderProcessStep } from "#lib/types/product-type.ts";

export const STANDARD_ORDER_PROCESS: OrderProcessStep[] = [
  {
    step: 1,
    title: "Inquiry & Specification Matching",
    description:
      "Buyer submits RFQ with target grade, volume, target price, and destination port.",
    estimatedDuration: "1 - 2 business days",
  },
  {
    step: 2,
    title: "Quotation & Sample Dispatch",
    description:
      "Formal FCO/Quotation issued. Representative laboratory sample sent via air courier if requested.",
    estimatedDuration: "3 - 7 days",
  },
  {
    step: 3,
    title: "Contract & Payment Terms",
    description:
      "Signing Sales Contract (SC) and securing payment (T/T deposit or confirmed Irrevocable L/C at sight).",
    estimatedDuration: "2 - 5 days",
  },
  {
    step: 4,
    title: "Production, Sorting & Quality Inspection",
    description:
      "Batch milling/refining, packaging, and internal/third-party lab analysis (e.g., SGS/Sucofindo).",
    estimatedDuration: "10 - 20 days",
  },
  {
    step: 5,
    title: "Stuffing, Port Clearance & Shipment",
    description:
      "Container drayage to origin port, Indonesian customs clearance (PEB), and BL issuance.",
    estimatedDuration: "3 - 5 days",
  },
  {
    step: 6,
    title: "Document Endorsement & Post-Shipment",
    description:
      "Release of Phytosanitary, COA, COO, and Commercial Invoices upon final payment settlement.",
    estimatedDuration: "2 - 4 days",
  },
];
