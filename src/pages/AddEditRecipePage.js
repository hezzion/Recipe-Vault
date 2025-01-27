import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeForm from '../components/RecipeForm';
import './AddEditRecipePage.css';

const AddEditRecipePage = () => {
  const handleSubmit = (data) => {
    console.log('Recipe Submitted:', data);
    // Add API call or state management logic here
  };

  const handleCancel = () => {
    console.log('Recipe form canceled');
    // Redirect to another page or clear form logic
  };

  return (
    <div className="add-edit-recipe-page">
      <Header />
      <main className="main-content">
        <RecipeForm
          formTitle="Add Recipe"
          initialData={null}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      </main>
      <Footer />
    </div>
  );
};

export default AddEditRecipePage;