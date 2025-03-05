// src/components/recipe/FilterSection.tsx
"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface FilterSectionProps {
  selectedCuisine: string;
  dietaryRestrictions: string[];
  onCuisineChange: (cuisine: string) => void;
  onDietaryRestrictionsChange: (restrictions: string[]) => void;
}

export const FilterSection: React.FC<FilterSectionProps> = ({
  selectedCuisine,
  dietaryRestrictions,
  onCuisineChange,
  onDietaryRestrictionsChange,
}) => {
  // Cuisine options
  const cuisineOptions = [
    "Any",
    "Italian",
    "Mexican",
    "Chinese",
    "Indian",
    "Mediterranean",
    "Thai",
  ];

  // Dietary restriction options
  const dietaryOptions = [
    "Vegetarian",
    "Vegan",
    "Gluten-Free",
    "Dairy-Free",
    "Nut-Free",
    "Low-Carb",
  ];

  // Handle dietary restriction toggle
  const toggleDietaryRestriction = (restriction: string) => {
    const currentRestrictions = new Set(dietaryRestrictions);

    if (currentRestrictions.has(restriction)) {
      currentRestrictions.delete(restriction);
    } else {
      currentRestrictions.add(restriction);
    }

    onDietaryRestrictionsChange(Array.from(currentRestrictions));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recipe Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Cuisine Selector */}
        <div>
          <Label className="block mb-2">Cuisine</Label>
          <Select value={selectedCuisine} onValueChange={onCuisineChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select Cuisine" />
            </SelectTrigger>
            <SelectContent>
              {cuisineOptions.map((cuisine) => (
                <SelectItem key={cuisine} value={cuisine}>
                  {cuisine}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Dietary Restrictions */}
        <div>
          <Label className="block mb-2">Dietary Restrictions</Label>
          <div className="grid grid-cols-2 gap-2">
            {dietaryOptions.map((restriction) => (
              <div key={restriction} className="flex items-center space-x-2">
                <Checkbox
                  id={restriction}
                  checked={dietaryRestrictions.includes(restriction)}
                  onCheckedChange={() => toggleDietaryRestriction(restriction)}
                />
                <Label htmlFor={restriction}>{restriction}</Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FilterSection;
