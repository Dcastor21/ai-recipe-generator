// src/components/recipe/RecipeDisplay.tsx
"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Recipe } from "@/types/recipe";

interface RecipeDisplayProps {
  recipes: Recipe[];
}

export const RecipeDisplay: React.FC<RecipeDisplayProps> = ({ recipes }) => {
  // Render nothing if no recipes
  if (recipes.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      {recipes.map((recipe, recipeIndex) => (
        <Card key={recipeIndex}>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>{recipe.name}</CardTitle>
              {recipe.dietaryRestrictions.length > 0 && (
                <div className="flex gap-2">
                  {recipe.dietaryRestrictions.map((restriction) => (
                    <Badge key={restriction} variant="secondary">
                      {restriction}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {/* Ingredients Section */}
            <section className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
              <ul className="list-disc pl-5">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    {ingredient.name}
                    {ingredient.quantity && ` (${ingredient.quantity})`}
                  </li>
                ))}
              </ul>
            </section>

            {/* Instructions Section */}
            <section className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Instructions</h3>
              <ol className="list-decimal pl-5 space-y-2">
                {recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </section>

            {/* Nutritional Information */}
            <section>
              <h3 className="text-lg font-semibold mb-2">
                Nutritional Information
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="font-medium">Calories:</span>
                  {recipe.nutritionalInfo.calories.toFixed(0)}
                </div>
                <div>
                  <span className="font-medium">Protein:</span>
                  {recipe.nutritionalInfo.protein.toFixed(1)}g
                </div>
                <div>
                  <span className="font-medium">Carbs:</span>
                  {recipe.nutritionalInfo.carbs.toFixed(1)}g
                </div>
                <div>
                  <span className="font-medium">Fat:</span>
                  {recipe.nutritionalInfo.fat.toFixed(1)}g
                </div>
              </div>
            </section>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default RecipeDisplay;
