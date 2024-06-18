import React from 'react';

function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Recipe Bank!</h1>
      <p style={styles.paragraph}>
        Discover the joy of cooking with Recipe Bank, your ultimate recipe search app. Whether you're a seasoned chef or a kitchen novice, our app is designed to help you find the perfect recipes to suit your taste and skill level.
      </p>
      <h2 style={styles.subheading}>Features:</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}><strong>Search by Ingredients:</strong> Got a few ingredients in your pantry? Just enter them into our search bar, and we'll show you a variety of recipes you can create with what you have on hand.</li>
        <li style={styles.listItem}><strong>Dietary Preferences:</strong> From vegan to keto, gluten-free to paleo, filter recipes based on your dietary needs and preferences. Enjoy meals that are tailored to your lifestyle.</li>
        <li style={styles.listItem}><strong>Cuisine Exploration:</strong> Craving Italian, Thai, Mexican, or any other cuisine? Explore recipes from around the world and bring international flavors to your kitchen.</li>
        <li style={styles.listItem}><strong>Easy-to-Follow Instructions:</strong> Each recipe comes with detailed instructions, including step-by-step photos and videos to guide you through the cooking process.</li>

      </ul>
      <h2 style={styles.subheading}>How It Works:</h2>
      <p style={styles.paragraph}>
        1. <strong>Search:</strong> Enter ingredients, cuisine types, or dietary preferences in the search bar.<br />
        2. <strong>Select:</strong> Browse through the search results and select a recipe that catches your eye.<br />
        3. <strong>Cook:</strong> Follow the easy, step-by-step instructions to create your delicious meal.<br />
        4. <strong>Enjoy:</strong> Savor your homemade dish and share your culinary creations with the Recipe App community.
      </p>
      <h2 style={styles.subheading}>Join Our Community</h2>
      <p style={styles.paragraph}>
        Become a part of our vibrant community of food enthusiasts. Share your recipes, cooking tips, and food photos. Follow your favorite home cooks and get inspired by their creations.
      </p>
      <h2 style={styles.subheading}>Get Started</h2>
      <p style={styles.paragraph}>
        Ready to cook something amazing? Start your culinary adventure with Recipe App today. Simply write anything to begin exploring thousands of recipes that cater to every taste and occasion.
      </p>
      <p style={styles.paragraph}><strong>Happy Cooking!</strong></p>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: 'gray', // Dark blue background
    color: 'white', // White text
    minHeight: '100vh', // Full viewport height
    maxWidth: '800px', // Maximum width for the container
    margin: '0 auto', // Center align the container
    boxSizing: 'border-box',
    borderRadius: '15px',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  subheading: {
    fontSize: '2rem',
    marginTop: '20px',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '1.2rem',
    marginBottom: '20px',
    lineHeight: '1.5',
  },
  list: {
    textAlign: 'left',
    display: 'inline-block',
    margin: '0 auto 20px',
    padding: '0',
    maxWidth: '100%', // Ensure list stays within bounds
    boxSizing: 'border-box',
  },
  listItem: {
    fontSize: '1.2rem',
    marginBottom: '10px',
  },
};

export default About;
