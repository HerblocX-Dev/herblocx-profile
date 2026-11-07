export type NewsCategoryId =
  | "all"
  | "field-activities"
  | "quality-production"
  | "export-updates"
  | "farmer-stories"
  | "market-insights";

export interface GalleryType {
  id: string;
  path: string;
  title?: string;
  description?: string;
  instagramUrl?: string;
  category?: Exclude<NewsCategoryId, "all">;
  date?: string;
}
