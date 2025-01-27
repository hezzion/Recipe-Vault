import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RecipeDetailsPage = () => {
  const { id } = useParams();
  const recipe = {
    id,
    title: "Spaghetti Bolognese",
    description: "A classic Italian dish with rich flavors.",
    image: "https://via.placeholder.com/400",
    ingredients: ["Spaghetti", "Minced Meat", "Tomato Sauce", "Onions", "Garlic"],
    steps: [
      "Boil spaghetti.",
      "Cook minced meat.",
      "Prepare the tomato sauce.",
      "Mix everything together and serve hot.",
    ],
  };

  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full max-w-md rounded shadow-md mb-4"
        />
        <p className="mb-4">{recipe.description}</p>
        <h2 className="text-xl font-bold mb-2">Ingredients</h2>
        <ul className="list-disc pl-5 mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-xl font-bold mb-2">Steps</h2>
        <ol className="list-decimal pl-5">
          {recipe.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </main>
      <Footer />
    </div>
  );
};

export default RecipeDetailsPage;
