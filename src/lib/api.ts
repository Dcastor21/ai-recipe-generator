import axios from "axios";
import { RecipeGenerationRequest, Recipe } from "@/types/recipe";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

export const generateRecipes = async (
  request: RecipeGenerationRequest
): Promise<Recipe[]> => {
  try {
    const response = await axios.post<Recipe[]>(
      `${API_BASE_URL}/generate-recipes`,
      request
    );
    return response.data;
  } catch (error) {
    console.error("Recipe generation error:", error);
    throw error;
  }
};
