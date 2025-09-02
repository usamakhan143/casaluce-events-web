import { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'Elegant Corporate Gala',
      category: 'corporate',
      description: 'Annual company awards ceremony for 500+ guests',
      image: 'corporate-1'
    },
    {
      id: 2,
      title: 'Romantic Garden Wedding',
      category: 'wedding',
      description: 'Intimate outdoor wedding with garden theme',
      image: 'wedding-1'
    },
    {
      id: 3,
      title: 'Birthday Celebration',
      category: 'social',
      description: '50th birthday party with vintage theme',
      image: 'social-1'
    },
    {
      id: 4,
      title: 'Product Launch Event',
      category: 'corporate',
      description: 'Technology product unveiling and networking',
      image: 'corporate-2'
    },
    {
      id: 5,
      title: 'Destination Wedding',
      category: 'wedding',
      description: 'Beachside wedding ceremony and reception',
      image: 'wedding-2'
    },
    {
      id: 6,
      title: 'Anniversary Celebration',
      category: 'social',
      description: '25th anniversary party for family and friends',
      image: 'social-2'
    }
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  const categories = [
    { key: 'all', label: 'All Events' },
    { key: 'corporate', label: 'Corporate' },
    { key: 'wedding', label: 'Weddings' },
    { key: 'social', label: 'Social' }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle">
            Take a look at some of our recent events and celebrations
          </p>
        </div>
        
        <div className="portfolio-filters">
          {categories.map(category => (
            <button
              key={category.key}
              className={`filter-btn ${filter === category.key ? 'active' : ''}`}
              onClick={() => setFilter(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="portfolio-item">
              <div className="portfolio-image">
                <div className={`image-placeholder ${item.image}`}>
                  <div className="image-overlay">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <button className="view-btn">View Details</button>
                  </div>
                </div>
              </div>
              <div className="portfolio-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="category-tag">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
