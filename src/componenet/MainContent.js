import React from 'react';
import Card from './Card';
import './MainContent.css'; // Import CSS file for styling

const MainContent = () => {
    
  const cards = [
    {
      title: 'Web Development',
      image: 'https://th.bing.com/th?id=OIP.K92tlZJ7CKcPMqkcC37P9AHaEG&w=335&h=186&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2', // Replace with real image URL
      description: 'Build modern, responsive websites with our web development services. Learn more about our approach and solutions.',
      buttonText: 'Learn More',
      link: '#services',
    },
    {
      title: 'Graphic Design',
      image: 'https://th.bing.com/th/id/OIP.CP2K_U3qVTGwoIPHMoDRcgHaDt?rs=1&pid=ImgDetMain', // Replace with real image URL
      description: 'Create stunning visual content with our graphic design expertise. Explore our portfolio and services.',
      buttonText: 'View Portfolio',
      link: '#portfolio',
    },
    {
      title: 'Digital Marketing',
      image: 'https://th.bing.com/th/id/OIP.3Xlbt0zuO3dZQGh2DFk65AHaFA?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', // Replace with real image URL
      description: 'Enhance your online presence with targeted digital marketing strategies. Discover how we can help you grow.',
      buttonText: 'Get Started',
      link: '#contact',
    },
    // Add more cards as needed
  ];

  return (
    <main className="main-content">
      <section id="home">
        <h2>Welcome to My Website</h2>
        <p>This is the Yogesh Jadaun.</p>
      </section>
      <section id="about">
        <h2>About Us</h2>
        <p>Welcome to our website! We are a team of passionate developers dedicated to creating amazing experiences.</p>
      <p>Our mission is to deliver high-quality software solutions that meet the needs of our clients.</p>
      <p>Feel free to explore our site and learn more about what we do.</p>
      </section>
      <section id="services" className="cards-section">
        <h2>Our Services</h2>
        <div className="cards-container">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              image={card.image}
              description={card.description}
              buttonText={card.buttonText}
              link={card.link}
            />
          ))}
        </div>
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        <p>This is the contact section.</p>
      </section>
    </main>
  );
};

export default MainContent;
