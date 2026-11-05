export interface GradeSpec {
  name: string;
  moisture: string;
  purity: string;
  foreignMatter?: string;
  cutSize?: string;
  volatileOil?: string;
  totalAsh?: string;
  extraneousStalks?: string;
  moq: string;
  leadTime: string;
  packing: string;
  description?: string;
}

export interface QualityParameter {
  name: string;
  method: string;
  gradeA: string;
  gradeB: string;
}

export interface QualityManagement {
  sorting: string;
  grading: string;
  inspection: string[];
  testingParameters: string[];
}

export interface PackagingOption {
  type: string;
  capacity: string;
  innerLiner?: string;
  palletized: boolean;
}

export interface ProcessingPackaging {
  processingMethod: string;
  packagingOptions: PackagingOption[];
  storageConditions: string;
  shelfLife: string;
}

export interface ExportInformation {
  moq: string;
  loadingCapacity20ft: string;
  loadingCapacity40ft: string;
  loadingPort: string[];
  leadTime: string;
  incotermsAvailable: string[];
}

export interface OrderProcessStep {
  step: number;
  title: string;
  description: string;
  estimatedDuration: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface RequestQuotationField {
  fieldName: string;
  type: "text" | "number" | "select" | "email" | "textarea";
  required: boolean;
  options?: string[];
  placeholder?: string;
}

export interface IndustrialUse {
  title: string;
  detail: string;
  highlightRule?: boolean;
}

export interface Commodity {
  slug: string;
  name: string;
  latinName: string;
  kicker: string;
  category: string;
  origin: string;
  originDetail: string;
  summary: string;
  image: string;
  gradeBadge: string;
  industrialUses?: IndustrialUse[];
  moisture: string;
  purity: string;
  grades: GradeSpec[];
  parameters: QualityParameter[];
  availability: string;
  availabilityMonths: number[];
  peakMonths: number[];
  stockMonths: number[];
  supplyCapacity: string;
  qualityManagement: QualityManagement;
  processingPackaging: ProcessingPackaging;
  exportInfo: ExportInformation;
  certifications: string[];
  shippingDocuments: string[];
  orderProcess: OrderProcessStep[];
  faqs: FAQItem[];
  quotationFormConfig: RequestQuotationField[];
}
