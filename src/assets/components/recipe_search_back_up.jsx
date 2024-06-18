import React, { useState } from 'react';
import './RecipeSearch.css';

const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (query) => {
    try {
      const url = `https://api.edamam.com/api/recipes/v2?type=any&beta=false&q=${encodeURIComponent(query)}&app_id=${import.meta.env.VITE_APP_ID}&app_key=${import.meta.env.VITE_APP_KEY}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const parsedRecipes = data.hits.map(hit => ({
        label: hit.recipe.label,
        ingredients: hit.recipe.ingredientLines,
        cuisineType: hit.recipe.cuisineType,
        allergies: hit.recipe.healthLabels,
        cookingTime: hit.recipe.totalTime,
        mealType: hit.recipe.mealType.join(', '),
        calories: hit.recipe.calories.toFixed(2),
        fat: hit.recipe.totalNutrients.FAT.quantity.toFixed(2) + ' ' + hit.recipe.totalNutrients.FAT.unit,
        carbs: hit.recipe.totalNutrients.CHOCDF.quantity.toFixed(2) + ' ' + hit.recipe.totalNutrients.CHOCDF.unit,
        protein: hit.recipe.totalNutrients.PROCNT.quantity.toFixed(2) + ' ' + hit.recipe.totalNutrients.PROCNT.unit,
        image: hit.recipe.image // Added to include image URL
      }));
      setRecipes(parsedRecipes);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setRecipes([]);
    }
  };

  const handleSearch = async () => {
    if (query) {
      await fetchRecipes(query);
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
        {recipes.map((recipe, index) => (
          <li key={index}>
          <div className='title'>
            <h2>{recipe.label}</h2>
           </div> 
            <img src={recipe.image} alt={recipe.label} /> {/* Image displayed here */}
            <p><strong>Cuisine Type:</strong> {recipe.cuisineType.join(', ')}</p>
            <ul>
              <strong>Ingredients:</strong>
              {recipe.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
            </ul>
            <p><strong>Allergic Information:</strong> {recipe.allergies.join(', ')}</p>
            <p><strong>Cooking Time:</strong> {recipe.cookingTime} minutes</p>
            <p><strong>Meal Type:</strong> {recipe.mealType}</p>
            <p><strong>Calories:</strong> {recipe.calories} kcal</p>
            <p><strong>Fat:</strong> {recipe.fat}</p>
            <p><strong>Carbs:</strong> {recipe.carbs}</p>
            <p><strong>Protein:</strong> {recipe.protein}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeSearch;
