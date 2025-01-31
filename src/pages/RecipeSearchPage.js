import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Hook to get query params
import Header from "../components/Header";
import Footer from "../components/Footer";
import RecipeCard from "../components/RecipeCard";
import "./RecipeSearchPage.css";

const RecipeSearchPage = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get the query parameter 'keyword' from the URL
  const queryParams = new URLSearchParams(location.search);
  const keyword = queryParams.get("keyword") || ""; // Default to empty if no keyword

  // Update the search term when the keyword changes in the URL
  useEffect(() => {
    setSearchTerm(keyword);
  }, [keyword]);

  const sampleRecipes = [
    { id: 1, title: "Spaghetti", image: "/image.png" },
    { id: 2, title: "Chicken", image: "/image copy 3.png" },
    { id: 3, title: "Suya", image: "/image copy 2.png" },
    { id: 4, title: "Egusi Soup", image: "/image copy 3.png" },
    { id: 5, title: "Egusi Soup", image: "/image copy 3.png" },
    { id: 6, title: "Egusi Soup", image: "/image copy 3.png" },
    { id: 7, title: "Egusi Soup", image: "/image copy 3.png" },
  ];

  
  useEffect(() => {
    if (searchTerm.trim()) {
      setLoading(true);
      const filteredResults = sampleRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]); 
    }
    setLoading(false);
  }, [searchTerm]);

  // Handle search submit (optional if you want the search bar inside RecipeSearchPage)
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?keyword=${searchTerm}`); // Navigate to the same page with search term in URL
    }
  };

  return (
    <div className="recipe-search-page">
      <Header setSearchKeyword={setSearchTerm} /> {/* Allow updating searchTerm from Header */}
      <main className="search-main-content">
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            className="search-bar"
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm as user types
          />
          <button type="submit" className="search-button">Search</button>
        </form>
        
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h1 className="search-title">
              {results.length > 0
                ? `Search Results for: "${searchTerm}"`
                : `No Results Found for: "${searchTerm}"`
                }
            </h1>
            <div className="recipe-grid">
              {results.length > 0 ? (
                results.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))
              ) : (
                <p className="no-results">
                  Sorry, we couldn't find any recipes matching "{searchTerm}".
                </p>
              )}
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default RecipeSearchPage;