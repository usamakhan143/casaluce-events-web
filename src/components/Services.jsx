import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🎉',
      title: 'Corporate Events',
      description: 'Professional corporate gatherings, conferences, and team building events that leave lasting impressions.',
      features: ['Conference Planning', 'Team Building', 'Product Launches', 'Networking Events']
    },
    {
      icon: '💒',
      title: 'Wedding Planning',
      description: 'Create the wedding of your dreams with our comprehensive planning and coordination services.',
      features: ['Venue Selection', 'Vendor Coordination', 'Day-of Coordination', 'Bridal Styling']
    },
    {
      icon: '🎂',
      title: 'Social Events',
      description: 'Birthday parties, anniversaries, and celebrations that bring people together in style.',
      features: ['Birthday Parties', 'Anniversary Celebrations', 'Holiday Parties', 'Milestone Events']
    },
    {
      icon: '🎪',
      title: 'Special Occasions',
      description: 'Unique and memorable events tailored to your specific needs and vision.',
      features: ['Custom Themes', 'Entertainment Booking', 'Catering Services', 'Decoration Design']
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We specialize in creating extraordinary events that exceed expectations
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <button className="service-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
