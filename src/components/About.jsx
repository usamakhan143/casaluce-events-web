import './About.css';

const About = () => {
  const stats = [
    { number: '500+', label: 'Events Planned' },
    { number: '10+', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Vendor Partners' }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About EventPro</h2>
            <p className="about-description">
              With over a decade of experience in the event planning industry, we have built a reputation for creating extraordinary experiences that leave lasting impressions. Our team of dedicated professionals brings creativity, attention to detail, and flawless execution to every event we plan.
            </p>
            <p className="about-description">
              From intimate gatherings to grand celebrations, we understand that every event is unique and deserves personalized attention. We work closely with our clients to understand their vision and bring it to life, ensuring every detail is perfect and every moment is memorable.
            </p>
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">🎯</div>
                <h4>Personalized Planning</h4>
                <p>Tailored solutions for your unique vision</p>
              </div>
              <div className="feature">
                <div className="feature-icon">⚡</div>
                <h4>Expert Execution</h4>
                <p>Flawless coordination on your special day</p>
              </div>
              <div className="feature">
                <div className="feature-icon">💎</div>
                <h4>Premium Quality</h4>
                <p>High-end vendors and luxury experiences</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <div className="image-content">
                <h3>Creating Memories</h3>
                <p>Since 2014</p>
              </div>
            </div>
          </div>
        </div>
        <div className="stats">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
