import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Creating <span className="highlight">Unforgettable</span> Events
          </h1>
          <p className="hero-subtitle">
            From intimate gatherings to grand celebrations, we bring your vision to life with meticulous planning and flawless execution.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get Started</a>
            <a href="#portfolio" className="btn btn-secondary">View Our Work</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-placeholder">
            <div className="image-overlay">
              <h3>Premium Event Planning</h3>
              <p>Tailored to perfection</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-indicator">
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
