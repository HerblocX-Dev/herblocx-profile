import type { RequestQuotationField } from "#lib/types/product-type.ts";

export const STANDARD_RFQ_FIELDS: RequestQuotationField[] = [
  {
    fieldName: "companyName",
    type: "text",
    required: true,
    placeholder: "e.g., AgroGlobal Import Ltd",
  },
  {
    fieldName: "contactEmail",
    type: "email",
    required: true,
    placeholder: "procurement@company.com",
  },
  {
    fieldName: "destinationPort",
    type: "text",
    required: true,
    placeholder: "e.g., Rotterdam Port, Netherlands",
  },
  {
    fieldName: "incoterm",
    type: "select",
    required: true,
    options: ["FOB", "CIF", "CFR"],
  },
  {
    fieldName: "targetGrade",
    type: "select",
    required: true,
    options: ["Grade A", "Grade B", "Grade C"],
  },
  {
    fieldName: "orderQuantityMT",
    type: "number",
    required: true,
    placeholder: "Target volume in Metric Tons (MT)",
  },
  {
    fieldName: "targetShipmentDate",
    type: "text",
    required: false,
    placeholder: "MM/YYYY",
  },
  {
    fieldName: "specialRequirements",
    type: "textarea",
    required: false,
    placeholder:
      "Custom packing, private labeling, or third-party survey requirements",
  },
];
