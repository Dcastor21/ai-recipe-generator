import { RecipeGenerator } from "@/components/recipe-generator";

export default function Home() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        AI Recipe Generator
      </h1>
      <RecipeGenerator />
    </main>
  );
}
