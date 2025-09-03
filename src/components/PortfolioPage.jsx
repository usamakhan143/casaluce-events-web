import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Portfolio */}
      <section className="relative h-screen lg:h-[calc(100vh+100px)] bg-charcoal flex flex-col">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/b61420c94787352d69fa3de5619fd83f4b0db063?width=2732')`
          }}
        ></div>
        
        <Header activePage="portfolio" />
        
        {/* Hero Content */}
        <div className="relative flex-1 flex flex-col items-center justify-center text-white px-4">
          <div className="text-center max-w-4xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal mb-4 font-seasons">
              <span className="block">Our</span>
              <span className="block font-normal font-footlight">Spectacular</span>
              <span className="block text-5xl md:text-6xl font-bold italic font-seasons-bold">Portfolio</span>
            </h2>
            <p className="text-lg md:text-xl mt-8 font-gotham">
              A Gallery of Celebrated Events and Cherished Memories
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Overview Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-lg uppercase tracking-widest mb-4 text-charcoal font-inter">Our Work</p>
            <h2 className="text-4xl md:text-6xl font-normal mb-6 text-charcoal font-seasons">
              Where Dreams Become Reality
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold italic mb-8 text-charcoal font-seasons-bold">
              Stories of Success, Moments of Joy
            </h3>
            <div className="space-y-4 text-charcoal max-w-4xl mx-auto">
              <p className="text-xl font-gotham">
                Delve into the world of events we've crafted and draw inspiration for your own celebration.
              </p>
              <p className="text-lg font-gotham">
                Our portfolio is a testament to our passion for event planning and our commitment to our clients. Each image in this gallery is a story of a dream turned into reality, showcasing our ability to cater to a diverse range of styles and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Statistics */}
      <section className="bg-sage py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-white font-seasons-light font-normal">
              Our Achievements
            </h2>
            <p className="section-subtitle text-white font-gotham">
              Numbers That Tell Our Story
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="text-center text-white">
              <div className="mb-4">
                <span className="text-5xl md:text-6xl font-bold font-gotham">500+</span>
              </div>
              <h3 className="text-xl font-bold mb-2 font-gotham">Events Planned</h3>
              <p className="text-lg font-gotham">
                Successful celebrations across all categories
              </p>
            </div>
            
            {/* Stat 2 */}
            <div className="text-center text-white">
              <div className="mb-4">
                <span className="text-5xl md:text-6xl font-bold font-gotham">98%</span>
              </div>
              <h3 className="text-xl font-bold mb-2 font-gotham">Client Satisfaction</h3>
              <p className="text-lg font-gotham">
                Happy clients who recommend our services
              </p>
            </div>
            
            {/* Stat 3 */}
            <div className="text-center text-white">
              <div className="mb-4">
                <span className="text-5xl md:text-6xl font-bold font-gotham">10+</span>
              </div>
              <h3 className="text-xl font-bold mb-2 font-gotham">Years Experience</h3>
              <p className="text-lg font-gotham">
                Delivering exceptional events since we started
              </p>
            </div>
            
            {/* Stat 4 */}
            <div className="text-center text-white">
              <div className="mb-4">
                <span className="text-5xl md:text-6xl font-bold font-gotham">50+</span>
              </div>
              <h3 className="text-xl font-bold mb-2 font-gotham">Vendor Partners</h3>
              <p className="text-lg font-gotham">
                Trusted professionals in our network
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Elegance Portfolio */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <button className="btn-outline mb-6 font-seasons-light">Wedding Elegance</button>
            <h2 className="text-4xl md:text-6xl font-normal mb-6 text-charcoal font-seasons-light">
              Romantic Celebrations
            </h2>
            <p className="text-lg text-charcoal max-w-4xl mx-auto font-gotham">
              From rustic countryside affairs to elegant urban celebrations, these photos highlight our versatility in creating the perfect ambiance for your big day. Each wedding is a unique love story brought to life through our careful planning and attention to detail.
            </p>
          </div>
          
          {/* Wedding Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="space-y-6">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/887e9b1f2d60acec8b281b4812697848dfdd36ca?width=762" alt="Elegant Wedding Ceremony" className="w-full h-80 object-cover rounded-lg" />
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/5adcd9b9eb4290f52280475a27c8afe65cc4fe38?width=762" alt="Wedding Reception" className="w-full h-64 object-cover rounded-lg" />
            </div>
            <div className="space-y-6">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/811a8c00e392b6f5e0eb11c240d849489fa5061f?width=762" alt="Wedding Details" className="w-full h-64 object-cover rounded-lg" />
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/5bb14e96fedcc8dc23e1d8a6104258f331fbf6e5?width=798" alt="Outdoor Wedding" className="w-full h-80 object-cover rounded-lg" />
            </div>
            <div className="space-y-6">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/640caa69b0991497c531da48bf9e6a6b24d72f06?width=706" alt="Wedding Couple" className="w-full h-96 object-cover rounded-lg" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3 text-charcoal font-gotham">Garden Romance</h3>
              <p className="text-base text-charcoal font-gotham">
                Outdoor ceremonies surrounded by natural beauty, creating an intimate and romantic atmosphere.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3 text-charcoal font-gotham">Classic Elegance</h3>
              <p className="text-base text-charcoal font-gotham">
                Timeless venue settings with sophisticated decor and refined attention to every detail.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3 text-charcoal font-gotham">Modern Chic</h3>
              <p className="text-base text-charcoal font-gotham">
                Contemporary designs that blend style with personality for today's modern couples.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Chic Portfolio */}
      <section className="bg-brown py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <button className="btn-primary mb-6 font-seasons-light">Corporate Chic</button>
            <h2 className="text-4xl md:text-6xl font-normal mb-6 text-white font-seasons-light">
              Professional Excellence
            </h2>
            <p className="text-lg text-white max-w-4xl mx-auto font-gotham">
              See how we transform business meetings and conferences into engaging, sophisticated experiences. Our corporate events blend professionalism with creativity to deliver memorable business gatherings that inspire and engage.
            </p>
          </div>
          
          {/* Corporate Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="space-y-6">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/743b4df08a9cf019c1b2e573b91586c30087e0f7?width=762" alt="Corporate Conference" className="w-full h-80 object-cover rounded-lg" />
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/48aa7868df75dee1dc399ed38f83e081873f254b?width=762" alt="Business Meeting" className="w-full h-64 object-cover rounded-lg" />
            </div>
            <div className="space-y-6">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/a90f80468ef4c92c8fcf245b67dffa3362d7f882?width=762" alt="Corporate Event" className="w-full h-64 object-cover rounded-lg" />
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/811cde8fc10efa675c04a2ae57e85def0534e093?width=798" alt="Company Celebration" className="w-full h-80 object-cover rounded-lg" />
            </div>
            <div className="space-y-6">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/8d1b78e6f683aae13d577b5af00f5af20c97890e?width=706" alt="Executive Event" className="w-full h-96 object-cover rounded-lg" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <h3 className="text-xl font-bold mb-3 font-gotham">Conferences & Seminars</h3>
              <p className="text-base font-gotham">
                Large-scale professional gatherings with seamless logistics and engaging environments.
              </p>
            </div>
            <div className="text-center text-white">
              <h3 className="text-xl font-bold mb-3 font-gotham">Product Launches</h3>
              <p className="text-base font-gotham">
                Dynamic events that showcase innovations and create buzz around new products.
              </p>
            </div>
            <div className="text-center text-white">
              <h3 className="text-xl font-bold mb-3 font-gotham">Awards Ceremonies</h3>
              <p className="text-base font-gotham">
                Prestigious celebrations that honor achievements with style and sophistication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Celebration Highlights Portfolio */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <button className="btn-outline mb-6 font-seasons-light">Celebration Highlights</button>
            <h2 className="text-4xl md:text-6xl font-normal mb-6 text-charcoal font-seasons-light">
              Life's Special Moments
            </h2>
            <p className="text-lg text-charcoal max-w-4xl mx-auto font-gotham">
              Whether it's a milestone birthday or a golden anniversary, these images showcase how we infuse fun, flair, and finesse into every special occasion. Every celebration tells a unique story, and we ensure each moment is perfectly captured and beautifully presented.
            </p>
          </div>
          
          {/* Celebration Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="space-y-6">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/0a284239772719e6828bfd38af23ce2a75be9d4e?width=762" alt="Birthday Celebration" className="w-full h-80 object-cover rounded-lg" />
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/f2af3ea5b53419d88014c21866f1a816b0cd6b91?width=762" alt="Anniversary Party" className="w-full h-64 object-cover rounded-lg" />
            </div>
            <div className="space-y-6">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/966991b8558bf114a5c7cfcb3c7f84d3ec7266fc?width=762" alt="Family Gathering" className="w-full h-64 object-cover rounded-lg" />
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/357310b47927110f38ba69ae94199b9fe2bef328?width=798" alt="Special Event" className="w-full h-80 object-cover rounded-lg" />
            </div>
            <div className="space-y-6">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/edb38ef5ac318ea8eaf0719a11bb81671c3e2c86?width=1432" alt="Holiday Celebration" className="w-full h-96 object-cover rounded-lg" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3 text-charcoal font-gotham">Milestone Birthdays</h3>
              <p className="text-base text-charcoal font-gotham">
                Memorable birthday celebrations that honor life's important moments with style and joy.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3 text-charcoal font-gotham">Anniversary Parties</h3>
              <p className="text-base text-charcoal font-gotham">
                Romantic celebrations of love and commitment, honoring years of shared memories.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3 text-charcoal font-gotham">Holiday Gatherings</h3>
              <p className="text-base text-charcoal font-gotham">
                Festive celebrations that bring families and friends together for cherished traditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials in Portfolio Context */}
      <section className="bg-sage py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-white font-seasons-light font-normal">
              What Our Clients Say
            </h2>
            <p className="section-subtitle text-white font-gotham">
              Real Stories from Real Celebrations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="text-center text-white bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8">
              <p className="text-lg italic mb-4 font-gotham">
                "Casaluce Events transformed our wedding into a fairytale. Every detail was taken care of, leaving us to simply enjoy our day."
              </p>
              <h4 className="text-sage font-bold font-gotham">Sarah & Michael</h4>
              <p className="text-sm font-gotham">Wedding Clients</p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="text-center text-white bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8">
              <p className="text-lg italic mb-4 font-gotham">
                "The professionalism and creativity brought to our annual conference were outstanding. Everything was executed flawlessly."
              </p>
              <h4 className="text-sage font-bold font-gotham">David Chen</h4>
              <p className="text-sm font-gotham">Corporate Client</p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="text-center text-white bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8">
              <p className="text-lg italic mb-4 font-gotham">
                "Our family reunion was absolutely perfect. The attention to detail made it a day we will always treasure."
              </p>
              <h4 className="text-sage font-bold font-gotham">Maria Rodriguez</h4>
              <p className="text-sm font-gotham">Family Event Client</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Summary */}
      <section className="bg-brown py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-6xl font-normal mb-6 font-seasons-light">
              Ready to Create Your Story?
            </h2>
            <p className="text-lg md:text-xl uppercase tracking-widest mb-8 font-gotham">
              Let's Add Your Event to Our Portfolio
            </p>
            <p className="text-lg max-w-4xl mx-auto mb-12 font-gotham">
              Each event we plan is a unique journey, and this portfolio is just a glimpse into the possibilities that await with Casaluce Events. Let these moments inspire you, and imagine what we can create together for your next event.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="btn-primary">
                <span>Start Planning Your Event</span>
              </button>
              <button className="btn-primary">
                <span>Schedule a Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        {/* Main Footer */}
        <div className="bg-brown py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-6 mb-4 md:mb-0">
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <svg className="w-5 h-5 text-brown" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001 12.017 0z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <svg className="w-5 h-5 text-brown" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <svg className="w-5 h-5 text-brown" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-white text-sm uppercase tracking-widest font-gotham">
                  <span>Casaluce Events - </span>
                  <span>Where Great Events Happen</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="bg-charcoal py-12">
          <div className="container mx-auto px-4">
            <p className="text-white text-sm leading-relaxed font-gotham">
              <span className="font-bold">Disclaimer:</span> The content provided in this template is for informational and example purposes only. It is your responsibility to customize this material to fit your specific needs and comply with any applicable laws, regulations, or guidelines. We recommend consulting with qualified professionals for any legal, ethical, or specialized advice. Use this template at your own risk, and always perform your own due diligence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;
