import React from 'react';

function Contact() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>
      <p style={styles.paragraph}>
        We'd love to hear from you! Whether you have a question, feedback, or just want to share your culinary creations, feel free to reach out to us.
      </p>
      <p style={styles.paragraph}><strong>Email:</strong> support@recipebank.mars</p>
      <p style={styles.paragraph}><strong>Phone:</strong> +123-456-7890</p>
      <p style={styles.paragraph}><strong>Address:</strong> 42 Olympus Mons Avenue, New Mars City, Mars 98765</p>
      <p style={styles.paragraph}>
        Follow us on 
        <a href="https://facebook.com/" style={styles.link}> Facebook</a>, 
        <a href="https://instagram.com/" style={styles.link}> Instagram</a>, and 
        <a href="https://twitter.com/" style={styles.link}> Twitter</a> for the latest updates and recipe inspiration.
      </p>
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
  link: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '5px',
  },
};

export default Contact;
