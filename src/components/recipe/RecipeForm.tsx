// src/components/recipe/RecipeForm.tsx
"use client";

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2 } from 'lucide-react';
import { Ingredient } from '@/types/recipe';

interface RecipeFormProps {
  ingredients: Ingredient[];
  onAddIngredient: (ingredient: Ingredient) => void;
  onRemoveIngredient: (index: number) => void;
}

export const RecipeForm: React.FC<RecipeFormProps> = ({
  ingredients,
  onAddIngredient,
  onRemoveIngredient
}) => {
  // State for new ingredient input
  const [newIngredient, setNewIngredient] = useState<Ingredient>({
    name: '',
    quantity: ''
  });

  // Handle adding a new ingredient
  const handleAddIngredient = () => {
    // Trim and validate ingredient name
    const trimmedName = newIngredient.name.trim();
    if (trimmedName) {
      onAddIngredient({
        name: trimmedName,
        quantity: newIngredient.quantity?.trim() || undefined
      });
      
      // Reset input
      setNewIngredient({ name: '', quantity: '' });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ingredient Input</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Ingredient Input Row */}
        <div className="flex space-x-2 mb-4">
          <Input 
            placeholder="Ingredient Name" 
            value={newIngredient.name}
            onChange={(e) => setNewIngredient(prev => ({
              ...prev, 
              name: e.target.value
            }))}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleAddIngredient();
              }
            }}
          />
          <Input 
            placeholder="Quantity (optional)" 
            value={newIngredient.quantity}
            onChange={(e) => setNewIngredient(prev => ({
              ...prev, 
              quantity: e.target.value
            }))}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleAddIngredient();
              }
            }}
          />
          <Button 
            onClick={handleAddIngredient}
            disabled={!newIngredient.name.trim()}
          >
            Add
          </Button>
        </div>

        {/* Ingredient List */}
        {ingredients.length > 0 ? (
          <div className="space-y-2">
            {ingredients.map((ingredient, index) => (
              <div 
                key={index} 
                className="flex justify-between items-center 
                           bg-secondary/50 p-2 rounded-md"
              >
                <div>
                  <span className="font-medium">{ingredient.name}</span>
                  {ingredient.quantity && (
                    <span className="text-muted-foreground text-sm ml-2">
                      ({ingredient.quantity})
                    </span>
                  )}
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => onRemoveIngredient(index)}
                  className="text-destructive hover:text-destructive/90"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-center">
            No ingredients added yet
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default RecipeForm;