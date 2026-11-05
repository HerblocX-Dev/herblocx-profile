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
  industrialUses?: IndustrialUse[];
  origin: string;
  originDetail: string;
  summary: string;
  image: string;
  gradeBadge: string;
  moisture: string;
  purity: string;
  availability: string;
  availabilityMonths: number[];
  peakMonths: number[];
  stockMonths: number[];
  moq: string;
  leadTime: string;
  packing: string;
  grades: GradeSpec[];
  parameters?: {
    name: string;
    method: string;
    gradeA: string;
    gradeB: string;
  }[];
  uses?: {
    title: string;
    detail: string;
    highlightRule?: boolean;
  }[];
}

export interface QualityManagement {
  sorting: string;
  grading: string;
  inspection: string[];
  testingParameters: string[];
}
