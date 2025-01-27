import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecipeSearchPage from "./pages/RecipeSearchPage";
import RecipeDetailsPage from './pages/RecipeDetailsPage';
import AddEditRecipePage from "./pages/AddEditRecipePage";
import UserDashboard from "./pages/UserDashboardPage";

const App = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />}
        />
        <Route
          path="/search"
          element={<RecipeSearchPage searchKeyword={searchKeyword} />}
        />
        <Route
          path="/recipe/:id"
          element={<RecipeDetailsPage />} 
        />
        <Route
          path="/add-recipe" 
          element={<AddEditRecipePage />} 
        />
        <Route
          path="/dashboard"
          element={<UserDashboard />} 
        />
      </Routes>
    </Router>
  );
};

export default App;