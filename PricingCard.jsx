import React from 'react';
import './PricingCard.style.css';
import portfolio from '../assets/portfolio.jpg';
import clone from '../assets/amazon.jfif';
import todo from '../assets/todo.webp';

const Cards = () => {
  const cardData = [
    {
      id: 1,
      title: 'Portfolio Project',
      image: portfolio,
      description: 'A personal portfolio website showcasing my skills, projects, and experience. Built with React, HTML, and CSS, this responsive site offers a great user experience.',
    },
    {
      id: 2,
      title: 'Amazon Clone',
      image: clone,
      description: 'An Amazon clone with product listings and a basic shopping cart. Developed using React and Firebase for backend integration.',
    },
    {
      id: 3,
      title: 'To-Do App',
      image: todo,
      description: 'A simple to-do list app where users can add, delete, and mark tasks as completed. Built with React and uses local storage for data persistence.',
    }
  ];

  return (
    <div className="cards-container">
      {cardData.map((card) => (
        <div key={card.id} className="card">
          <img src={card.image} alt={card.title} className="card-image" />
          <h2 className="card-title">{card.title}</h2>
          <p className="card-description">{card.description}</p>
          <div className="card-buttons">
            <button className="btn-left">Code</button>
            <button className="btn-right">view</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
