import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RecipeCard from "../components/RecipeCard";
import Button from "../components/Botton";
import "./UserDashboardPage.css";

const UserDashboardPage = () => {
  const myRecipes = [
    { id: 1, name: "Spaghetti Carbonara", image: "carbonara.jpg" },
    { id: 2, name: "Vegan Salad", image: "vegan-salad.jpg" },
    { id: 3, name: "Chocolate Cake", image: "chocolate-cake.jpg" },
    { id: 4, name: "Chocolate Cake", image: "chocolate-cake.jpg" },
    { id: 5, name: "Chocolate Cake", image: "chocolate-cake.jpg" },
    { id: 6, name: "Chocolate Cake", image: "chocolate-cake.jpg" },
    { id: 7, name: "Chocolate Cake", image: "chocolate-cake.jpg" },
  ];

  const favoriteRecipes = [
    { id: 4, name: "Grilled Cheese", image: "grilled-cheese.jpg" },
    { id: 5, name: "Chicken Tacos", image: "chicken-tacos.jpg" },
    { id: 6, name: "Pancakes", image: "pancakes.jpg" },
  ];

  return (
    <div className="dashboard">
      <Header />
      <main>
        <h1>Dashboard</h1>
        <div className="add-recipe-section">
          <Button label="Add Recipe" onClick={() => (window.location.href = "/add-recipe")} />
        </div>

        <section className="my-recipes">
          <h2>My Recipes</h2>
          <div className="recipe-grid">
            {myRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>

        <section className="favorites">
          <h2>Favorites</h2>
          <div className="recipe-grid">
            {favoriteRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UserDashboardPage;