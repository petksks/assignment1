import React, { useState, useEffect } from 'react';

const App = () => {
  const [activeArticle, setActiveArticle] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const articles = [
    {
      title: "Article 1: About Me",
      content: "My name is Peter and I am a beginner programmer. I have learned some basics of HTML, CSS, and JavaScript, and I am interested in exploring more advanced topics like React and Node.js."
    },
    {
      title: "Article 2: My Personal Project",
      content: "I am excited to start my first personal project, a inhouse bot for discord. The bot will allow users to create custom leagues of their own."
    },
    {
      title: "Article 3: Design Style",
      content: "For my discord bot, I want to use a minimalist design style that focuses on simplicity and ease of use. I want to use a light color palette and clean typography to create a visually pleasing and user-friendly experience."
    },
  ];

  const handleClick = (index) => {
    setActiveArticle(index);
  };

  const handleShowAllClick = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    document.title = showAll ? "All Articles" : articles[activeArticle].title;
  }, [activeArticle, showAll, articles]);

  return (
    <div className="container">
      {showAll ? (
        <>
          {articles.map((article, index) => (
            <div key={index}>
              <h1>{article.title}</h1>
              <p>{article.content}</p>
            </div>
          ))}
        </>
      ) : (
        <>
          <h1>{articles[activeArticle].title}</h1>
          <p>{articles[activeArticle].content}</p>
        </>
      )}
      {articles.map((article, index) => (
        <button key={index} onClick={() => handleClick(index)}>
          Show Article {index + 1}
        </button>
      ))}
      <button onClick={handleShowAllClick}>Show All Articles</button>
    </div>
  );
};

export default App;
