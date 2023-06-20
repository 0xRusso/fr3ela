import { CategoryFieldDoc } from "./field";

export type CategoryBase = {
  name: string;
  additionalFields: CategoryFieldDoc[];
};

export type SubCategoryDoc = CategoryBase;
export type CategoryDoc = CategoryBase & {
  subCategories: SubCategoryDoc[];
};

export type CategoryShow = "all" | "main" | "sub";
