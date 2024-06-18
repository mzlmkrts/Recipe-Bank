import React, { useState } from 'react';
const app_id = import.meta.env.VITE_APP_ID;
const app_key = import.meta.env.VITE_APP_KEY;
import './RecipeSearch.css';

const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  
  const fetchRecipes = async (query) => {
    try {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=any&beta=false&q=${query}&app_id=${import.meta.env.VITE_APP_ID}&app_key=${import.meta.env.VITE_APP_KEY}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching recipes:', error);
      return null;
    }
  };

  const handleSearch = async () => {
    const data = await fetchRecipes(query);
    if (data && data.hits) {
      setRecipes(data.hits);
    } else {
      setRecipes([]); // Set to an empty array if there is no valid data
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
    <div className='Search-action'>
      <input type="text" placeholder="Start typing here..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown} />
      <button onClick={handleSearch}>Search</button>
      </div>
      <ol>
        {recipes.map(recipe => (
          <li key={recipe.recipe.uri}>{recipe.recipe.label}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeSearch;
