import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Services */}
      <section className="relative h-screen lg:h-[calc(100vh+100px)] bg-charcoal flex flex-col">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('/images/main-banner.jpg')`
          }}
        ></div>
        
        <Header activePage="services" />
        
        {/* Hero Content */}
        <div className="relative flex-1 flex flex-col items-center justify-center text-white px-4">
          <div className="text-center max-w-4xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal mb-4 font-seasons">
              <span className="block">Our</span>
              <span className="block font-normal font-footlight">Comprehensive</span>
              <span className="block text-5xl md:text-6xl font-bold italic font-seasons-bold">Services</span>
            </h2>
            <p className="text-lg md:text-xl mt-8 font-gotham">
              Tailored Event Planning Solutions for Every Occasion
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-lg uppercase tracking-widest mb-4 text-charcoal font-inter">What We Offer</p>
            <h2 className="text-4xl md:text-6xl font-normal mb-6 text-charcoal font-seasons">
              Complete Event Planning Services
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold italic mb-8 text-charcoal font-seasons-bold">
              From Concept to Celebration
            </h3>
            <p className="text-lg leading-relaxed text-charcoal font-gotham max-w-4xl mx-auto">
              At Casaluce Events, we specialize in three core areas: elegant weddings, professional corporate events, and meaningful Jewish celebrations including bat mitzvahs. Our experienced team understands the unique traditions and requirements of each event type, ensuring every detail is handled with cultural sensitivity and modern flair.
            </p>
          </div>
        </div>
      </section>

      {/* Main Service Categories */}
      <section className="bg-brown py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-white font-seasons-light">Our Signature Services</h2>
            <p className="section-subtitle text-white font-gotham">
              Expert Planning for Weddings, Corporate Events, and Jewish Celebrations
            </p>
            <p className="text-lg text-white max-w-4xl mx-auto font-gotham">
              From intimate bat mitzvahs to grand corporate galas, we specialize in creating meaningful events that honor tradition while embracing modern elegance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Weddings */}
            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="/images/portfolio/wedding-event.jpg"
                  alt="Wedding Planning Services" 
                  className="w-full h-80 object-cover rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-t-3xl flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2 font-seasons">Wedding Planning</h3>
                    <p className="text-sm font-gotham">Making Your Dream Day Perfect</p>
                  </div>
                </div>
              </div>
              <div className="text-white space-y-4">
                <h4 className="text-xl font-bold font-gotham">Complete Wedding Services Include:</h4>
                <ul className="text-left text-base leading-relaxed font-gotham space-y-2">
                  <li>• Venue selection and booking</li>
                  <li>• Vendor coordination and management</li>
                  <li>• Theme and decor design</li>
                  <li>• Timeline and itinerary planning</li>
                  <li>• Bridal party coordination</li>
                  <li>• Rehearsal dinner planning</li>
                  <li>• Day-of wedding coordination</li>
                  <li>• Photography and videography coordination</li>
                </ul>
              </div>
            </div>
            
            {/* Corporate Events */}
            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="/images/portfolio/corporate-events.webp"
                  alt="Corporate Event Planning" 
                  className="w-full h-80 object-cover rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-t-3xl flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2 font-seasons">Corporate Events</h3>
                    <p className="text-sm font-gotham">Professional Excellence in Business Gatherings</p>
                  </div>
                </div>
              </div>
              <div className="text-white space-y-4">
                <h4 className="text-xl font-bold font-gotham">Corporate Services Include:</h4>
                <ul className="text-left text-base leading-relaxed font-gotham space-y-2">
                  <li>• Conference and seminar planning</li>
                  <li>• Product launch events</li>
                  <li>• Annual company celebrations</li>
                  <li>• Team building activities</li>
                  <li>• Executive retreats</li>
                  <li>• Awards ceremonies</li>
                  <li>• Networking events</li>
                  <li>• Brand activation events</li>
                </ul>
              </div>
            </div>
            
            {/* Bat Mitzvahs & Jewish Celebrations */}
            <div className="text-center">
              <div className="relative mb-6">
                <img
                  src="/images/portfolio/1.webp"
                  alt="Bat Mitzvah & Jewish Celebration Planning"
                  className="w-full h-80 object-cover rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-t-3xl flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2 font-seasons">Bat Mitzvahs & Jewish Celebrations</h3>
                    <p className="text-sm font-gotham">Honoring Tradition with Modern Elegance</p>
                  </div>
                </div>
              </div>
              <div className="text-white space-y-4">
                <h4 className="text-xl font-bold font-gotham">Jewish Celebration Services Include:</h4>
                <ul className="text-left text-base leading-relaxed font-gotham space-y-2">
                  <li>• Bat Mitzvah ceremonies and receptions</li>
                  <li>• Bar Mitzvah celebrations</li>
                  <li>��� Jewish wedding ceremonies</li>
                  <li>• Rosh Hashanah and Yom Kippur events</li>
                  <li>• Passover Seders</li>
                  <li>• Shabbat celebrations</li>
                  <li>• Baby naming ceremonies</li>
                  <li>• Jewish holiday parties</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Approach Section */}
      <section className="bg-sage py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-white font-seasons-light font-normal">
              Our Service Approach
            </h2>
            <p className="section-subtitle text-white font-gotham">
              How We Bring Your Vision to Life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center text-white">
              <div className="mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold text-sage">1</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 font-gotham">Discovery & Consultation</h3>
              <p className="text-lg leading-relaxed font-gotham">
                We begin with an in-depth consultation to understand your vision, preferences, budget, and unique requirements.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center text-white">
              <div className="mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold text-sage">2</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 font-gotham">Concept Development</h3>
              <p className="text-lg leading-relaxed font-gotham">
                Our creative team develops a comprehensive concept that captures your vision and creates a unique event experience.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center text-white">
              <div className="mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold text-sage">3</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 font-gotham">Planning & Coordination</h3>
              <p className="text-lg leading-relaxed font-gotham">
                We handle all logistics, vendor management, timeline creation, and detailed planning to ensure flawless execution.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="text-center text-white">
              <div className="mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold text-sage">4</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 font-gotham">Event Execution</h3>
              <p className="text-lg leading-relaxed font-gotham">
                On event day, our team manages every detail so you can relax and enjoy your perfectly executed celebration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-normal mb-6 text-charcoal font-seasons-light">
              Additional Services
            </h2>
            <p className="text-lg md:text-xl uppercase tracking-widest text-center mb-8 text-charcoal font-gotham">
              Comprehensive Support for Every Aspect of Your Event
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e7ab0fde886817b610b31b318c4b443a402b1a51?width=136" 
                  alt="Design Icon" 
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-charcoal font-gotham">Event Design & Styling</h3>
              <p className="text-lg leading-relaxed text-charcoal font-gotham">
                Complete design services including color schemes, floral arrangements, lighting design, and decor coordination.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e7ab0fde886817b610b31b318c4b443a402b1a51?width=136" 
                  alt="Catering Icon" 
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-charcoal font-gotham">Catering & Menu Planning</h3>
              <p className="text-lg leading-relaxed text-charcoal font-gotham">
                Custom menu development, dietary accommodations, bar service, and coordination with top-rated catering partners.
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e7ab0fde886817b610b31b318c4b443a402b1a51?width=136" 
                  alt="Entertainment Icon" 
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-charcoal font-gotham">Entertainment Coordination</h3>
              <p className="text-lg leading-relaxed text-charcoal font-gotham">
                DJ services, live music booking, entertainment acts, audiovisual equipment, and performance coordination.
              </p>
            </div>
            
            {/* Service 4 */}
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e7ab0fde886817b610b31b318c4b443a402b1a51?width=136" 
                  alt="Transportation Icon" 
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-charcoal font-gotham">Transportation & Logistics</h3>
              <p className="text-lg leading-relaxed text-charcoal font-gotham">
                Guest transportation, parking coordination, accommodation booking, and travel arrangement services.
              </p>
            </div>
            
            {/* Service 5 */}
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e7ab0fde886817b610b31b318c4b443a402b1a51?width=136" 
                  alt="Photography Icon" 
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-charcoal font-gotham">Photography & Videography</h3>
              <p className="text-lg leading-relaxed text-charcoal font-gotham">
                Professional photography and videography services, photo booth coordination, and memory preservation solutions.
              </p>
            </div>
            
            {/* Service 6 */}
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e7ab0fde886817b610b31b318c4b443a402b1a51?width=136" 
                  alt="Invitation Icon" 
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-charcoal font-gotham">Invitation & Communication</h3>
              <p className="text-lg leading-relaxed text-charcoal font-gotham">
                Custom invitation design, RSVP management, guest communication, and event marketing materials.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Our Services */}
      <section className="bg-sage py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/event.jpeg"
                alt="Why Choose Our Services" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="text-white">
              <h2 className="text-4xl md:text-6xl font-normal mb-6 font-seasons-light">
                Why Choose Our Services?
              </h2>
              <p className="text-lg md:text-xl uppercase tracking-wide mb-8 font-gotham">
                Experience the Casaluce Events Difference
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sage font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-gotham">Comprehensive Service Portfolio</h3>
                    <p className="text-lg leading-relaxed font-gotham">
                      From intimate gatherings to grand celebrations, we offer complete event planning services under one roof.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sage font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-gotham">Expert Team & Vendor Network</h3>
                    <p className="text-lg leading-relaxed font-gotham">
                      Our experienced professionals work with trusted vendors to ensure the highest quality service delivery.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sage font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-gotham">Personalized Approach</h3>
                    <p className="text-lg leading-relaxed font-gotham">
                      Every service is tailored to your unique vision, preferences, and budget requirements.
                    </p>
                  </div>
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
              Ready to Plan Your Event?
            </h2>
            <p className="text-lg md:text-xl uppercase tracking-widest text-center mb-8 text-charcoal font-gotham">
              Let's Discuss Your Vision and Create Something Amazing
            </p>
            <p className="text-lg text-charcoal max-w-4xl mx-auto mb-12 font-gotham">
              Schedule a complimentary consultation to discuss your event needs and discover how our comprehensive services can bring your vision to life.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-outline">
                <span>Request a Quote</span>
              </Link>
              <Link to="/contact" className="btn-outline">
                <span>Schedule Free Consultation</span>
              </Link>
              <button className="btn-outline">
                <span>View Our Portfolio</span>
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

export default ServicesPage;
