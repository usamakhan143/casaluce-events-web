import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - About Us */}
      <section className="relative h-screen lg:h-[calc(100vh+100px)] bg-charcoal flex flex-col">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/16120232/pexels-photo-16120232.jpeg?auto=compress&cs=tinysrgb&w=2732&h=1536&fit=crop')`
          }}
        ></div>
        
        <Header activePage="about" />
        
        {/* Hero Content */}
        <div className="relative flex-1 flex flex-col items-center justify-center text-white px-4">
          <div className="text-center max-w-4xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal mb-4 font-seasons">
              <span className="block">About</span>
              <span className="block font-normal font-footlight">Casaluce</span>
              <span className="block text-5xl md:text-6xl font-bold italic font-seasons-bold">Events</span>
            </h2>
            <p className="text-lg md:text-xl mt-8 font-gotham">
              Where Every Celebration is a Masterpiece
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.pexels.com/photos/2563495/pexels-photo-2563495.jpeg?auto=compress&cs=tinysrgb&w=2003&h=1335&fit=crop"
                alt="Our Story" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <p className="text-lg uppercase tracking-widest mb-4 text-charcoal font-inter">Our Story</p>
              <h2 className="text-4xl md:text-6xl font-normal mb-6 text-charcoal font-seasons">
                Where Dreams Meet Reality
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold italic mb-6 text-charcoal font-seasons-bold">
                Creating Joyful Memories Since Our Beginning
              </h3>
              <p className="text-lg leading-relaxed text-charcoal font-gotham mb-6">
                Casaluce Events was born from a simple yet powerful belief: every event should be as unique and special as the people celebrating it. Founded with a passion for bringing dreams to life, we've dedicated ourselves to creating exceptional experiences - from romantic weddings and sophisticated corporate gatherings to meaningful bat mitzvahs and milestone celebrations.
              </p>
              <p className="text-lg leading-relaxed text-charcoal font-gotham">
                Our journey began with a vision to transform ordinary occasions into extraordinary memories. Today, we stand as your trusted partner in celebration, committed to making every moment count and every event unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision Section */}
      <section className="bg-sage py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-white font-seasons-light font-normal">
              Our Mission & Vision
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="text-center text-white">
              <div className="mb-8">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e7ab0fde886817b610b31b318c4b443a402b1a51?width=136" 
                  alt="Mission Icon" 
                  className="w-20 h-20 mx-auto mb-6"
                />
              </div>
              <h3 className="text-2xl font-bold mb-6 font-seasons">Our Mission</h3>
              <p className="text-lg leading-relaxed font-gotham">
                To create personalized, memorable events that reflect our clients' unique stories and dreams. Whether planning an intimate wedding, a corporate conference, a meaningful bat mitzvah, or a milestone celebration, we are committed to delivering exceptional service, innovative solutions, and flawless execution that exceeds expectations and creates lasting joy.
              </p>
            </div>
            
            {/* Vision */}
            <div className="text-center text-white">
              <div className="mb-8">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e7ab0fde886817b610b31b318c4b443a402b1a51?width=136" 
                  alt="Vision Icon" 
                  className="w-20 h-20 mx-auto mb-6"
                />
              </div>
              <h3 className="text-2xl font-bold mb-6 font-seasons">Our Vision</h3>
              <p className="text-lg leading-relaxed font-gotham">
                To be the leading event planning company known for transforming visions into reality through creativity, innovation, and unparalleled attention to detail. We aspire to set new standards in the industry while making every celebration a cherished memory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-normal mb-6 text-charcoal font-seasons-light">
              Our Core Values
            </h2>
            <p className="text-lg md:text-xl uppercase tracking-widest text-center mb-8 text-charcoal font-gotham">
              The Foundation of Everything We Do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e7ab0fde886817b610b31b318c4b443a402b1a51?width=136" 
                  alt="Excellence Icon" 
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-charcoal font-gotham">Excellence</h3>
              <p className="text-lg leading-relaxed text-charcoal font-gotham">
                We strive for perfection in every detail, ensuring that each event meets the highest standards of quality and execution.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e7ab0fde886817b610b31b318c4b443a402b1a51?width=136" 
                  alt="Creativity Icon" 
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-charcoal font-gotham">Creativity</h3>
              <p className="text-lg leading-relaxed text-charcoal font-gotham">
                Innovation and creative thinking drive our approach, bringing fresh ideas and unique solutions to every celebration.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e7ab0fde886817b610b31b318c4b443a402b1a51?width=136" 
                  alt="Integrity Icon" 
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-charcoal font-gotham">Integrity</h3>
              <p className="text-lg leading-relaxed text-charcoal font-gotham">
                Honesty, transparency, and ethical practices guide all our interactions and business relationships.
              </p>
            </div>
            
            {/* Value 4 */}
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e7ab0fde886817b610b31b318c4b443a402b1a51?width=136" 
                  alt="Passion Icon" 
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-charcoal font-gotham">Passion</h3>
              <p className="text-lg leading-relaxed text-charcoal font-gotham">
                Our genuine love for event planning fuels our dedication to creating magical moments for our clients.
              </p>
            </div>
            
            {/* Value 5 */}
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e7ab0fde886817b610b31b318c4b443a402b1a51?width=136" 
                  alt="Collaboration Icon" 
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-charcoal font-gotham">Collaboration</h3>
              <p className="text-lg leading-relaxed text-charcoal font-gotham">
                We believe in working closely with our clients as partners, ensuring their vision is at the heart of everything we do.
              </p>
            </div>
            
            {/* Value 6 */}
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e7ab0fde886817b610b31b318c4b443a402b1a51?width=136" 
                  alt="Innovation Icon" 
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-charcoal font-gotham">Innovation</h3>
              <p className="text-lg leading-relaxed text-charcoal font-gotham">
                We continuously evolve and adapt, embracing new trends and technologies to enhance our event planning services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section - hidden by request */}
      <section className="hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-white font-seasons-light">Meet Our Team</h2>
            <p className="section-subtitle text-white font-gotham">
              The Creative Minds Behind Your Perfect Events
            </p>
            <p className="text-lg text-white max-w-4xl mx-auto font-gotham">
              Our passionate team of event planning professionals brings years of experience, creativity, and dedication to every celebration we craft.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/640caa69b0991497c531da48bf9e6a6b24d72f06?width=706" 
                  alt="Team Member" 
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white font-seasons">Sarah Johnson</h3>
              <p className="text-sage text-lg mb-4 font-gotham">Lead Event Planner</p>
              <p className="text-white text-base leading-relaxed font-gotham">
                With over 8 years of experience in luxury event planning, Sarah brings creativity and precision to every celebration she touches.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/8d1b78e6f683aae13d577b5af00f5af20c97890e?width=706" 
                  alt="Team Member" 
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white font-seasons">Michael Chen</h3>
              <p className="text-sage text-lg mb-4 font-gotham">Design Director</p>
              <p className="text-white text-base leading-relaxed font-gotham">
                Michael's innovative design approach transforms venues into stunning spaces that perfectly capture each client's unique style.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/edb38ef5ac318ea8eaf0719a11bb81671c3e2c86?width=1432" 
                  alt="Team Member" 
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white font-seasons">Emily Rodriguez</h3>
              <p className="text-sage text-lg mb-4 font-gotham">Operations Manager</p>
              <p className="text-white text-base leading-relaxed font-gotham">
                Emily ensures flawless execution on event days, coordinating all logistics with her exceptional organizational skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-sage py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-white font-seasons-light font-normal">
              Why Choose Casaluce Events?
            </h2>
            <p className="section-subtitle text-white font-gotham">
              Experience the Difference of Working with True Professionals
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/17057030/pexels-photo-17057030.jpeg?auto=compress&cs=tinysrgb&w=1536&h=1024&fit=crop"
                alt="Why Choose Us" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="text-white space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sage font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-gotham">Personalized Approach</h3>
                  <p className="text-lg leading-relaxed font-gotham">
                    Every event is unique, and we treat it as such. Our personalized planning process ensures your vision becomes reality.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sage font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-gotham">Experienced Team</h3>
                  <p className="text-lg leading-relaxed font-gotham">
                    Our seasoned professionals bring years of expertise and a proven track record of successful events.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sage font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-gotham">Vendor Network</h3>
                  <p className="text-lg leading-relaxed font-gotham">
                    Access to an extensive network of trusted vendors ensures the highest quality services for your event.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sage font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-gotham">Stress-Free Experience</h3>
                  <p className="text-lg leading-relaxed font-gotham">
                    We handle every detail so you can relax and enjoy your special occasion without any worries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-normal mb-6 text-charcoal font-seasons-light">
              Ready to Start Planning?
            </h2>
            <p className="text-lg md:text-xl uppercase tracking-widest text-center mb-8 text-charcoal font-gotham">
              Let's Create Something Amazing Together
            </p>
            <p className="text-lg text-charcoal max-w-4xl mx-auto mb-12 font-gotham">
              Contact us today for a complimentary consultation and let's begin the journey of bringing your event vision to life.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-outline">
                <span>Request a Quote</span>
              </Link>
              <Link to="/contact" className="btn-outline">
                <span>Schedule Your Free Consultation</span>
              </Link>
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
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-4 md:mb-0">
                <div className="flex space-x-6">
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
                <div className="flex space-x-6 whitespace-nowrap">
                  <a href="/privacy-policy" className="text-white text-sm hover:text-sage transition-colors font-gotham whitespace-nowrap">Privacy Policy</a>
                  <a href="/terms-and-conditions" className="text-white text-sm hover:text-sage transition-colors font-gotham whitespace-nowrap">Terms and Conditions</a>
                </div>
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

export default AboutUsPage;
