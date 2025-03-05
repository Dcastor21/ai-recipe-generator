export interface Ingredient {
  name: string;
  quantity?: string;
}

export interface NutritionalInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface Recipe {
  name: string;
  ingredients: Ingredient[];
  instructions: string[];
  nutritionalInfo: NutritionalInfo;
  dietaryRestrictions: string[];
}

export interface RecipeGenerationRequest {
  ingredients: Ingredient[];
  cuisine?: string;
  dietaryRestrictions?: string[];
}
