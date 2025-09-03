import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const HowWeWorkPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - How We Work */}
      <section className="relative h-screen lg:h-[calc(100vh+100px)] bg-charcoal flex flex-col">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/b61420c94787352d69fa3de5619fd83f4b0db063?width=2732')`
          }}
        ></div>
        
        <Header activePage="how-we-work" />
        
        {/* Hero Content */}
        <div className="relative flex-1 flex flex-col items-center justify-center text-white px-4">
          <div className="text-center max-w-4xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal mb-4 font-seasons">
              <span className="block">How We</span>
              <span className="block font-normal font-footlight">Create Your</span>
              <span className="block text-5xl md:text-6xl font-bold italic font-seasons-bold">Perfect Event</span>
            </h2>
            <p className="text-lg md:text-xl mt-8 font-gotham">
              Your Event Planning Journey from Vision to Victory
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Overview */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-lg uppercase tracking-widest mb-4 text-charcoal font-inter">Our Methodology</p>
            <h2 className="text-4xl md:text-6xl font-normal mb-6 text-charcoal font-seasons">
              A Seamless Journey Together
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold italic mb-8 text-charcoal font-seasons-bold">
              From Initial Consultation to Final Celebration
            </h3>
            <p className="text-lg leading-relaxed text-charcoal font-gotham max-w-4xl mx-auto">
              At Casaluce Events, we've perfected a comprehensive approach that ensures every detail is carefully considered and flawlessly executed. Our proven methodology transforms your vision into reality through collaborative planning, meticulous attention to detail, and seamless event-day coordination.
            </p>
          </div>
        </div>
      </section>

      {/* Main Process Steps */}
      <section className="bg-sage py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-white font-seasons-light font-normal">
              Our 6 Step Process
            </h2>
            <p className="section-subtitle text-white font-gotham">
              A Systematic Approach to Event Excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center text-white bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8">
              <div className="mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold text-sage font-gotham">1</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 font-gotham">Discovery & Consultation</h3>
              <p className="text-lg leading-relaxed font-gotham mb-4">
                We begin with an in-depth consultation to understand your vision, preferences, budget, and unique requirements.
              </p>
              <ul className="text-left text-sm space-y-2 font-gotham">
                <li>• Initial meeting and vision discussion</li>
                <li>• Budget planning and expectations</li>
                <li>• Timeline establishment</li>
                <li>• Style and theme preferences</li>
              </ul>
            </div>
            
            {/* Step 2 */}
            <div className="text-center text-white bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8">
              <div className="mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold text-sage font-gotham">2</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 font-gotham">Concept Development</h3>
              <p className="text-lg leading-relaxed font-gotham mb-4">
                Our creative team develops a comprehensive concept that captures your vision and creates a unique event experience.
              </p>
              <ul className="text-left text-sm space-y-2 font-gotham">
                <li>• Design mood boards and concepts</li>
                <li>• Venue research and recommendations</li>
                <li>• Theme development and styling</li>
                <li>• Initial vendor identification</li>
              </ul>
            </div>
            
            {/* Step 3 */}
            <div className="text-center text-white bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8">
              <div className="mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold text-sage font-gotham">3</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 font-gotham">Planning & Design</h3>
              <p className="text-lg leading-relaxed font-gotham mb-4">
                Detailed planning begins with venue selection, vendor coordination, and comprehensive design development.
              </p>
              <ul className="text-left text-sm space-y-2 font-gotham">
                <li>• Venue booking and contracts</li>
                <li>• Vendor selection and management</li>
                <li>• Detailed design specifications</li>
                <li>• Menu planning and tastings</li>
              </ul>
            </div>
            
            {/* Step 4 */}
            <div className="text-center text-white bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8">
              <div className="mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold text-sage font-gotham">4</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 font-gotham">Coordination & Logistics</h3>
              <p className="text-lg leading-relaxed font-gotham mb-4">
                We handle all logistics, create detailed timelines, and ensure seamless coordination between all parties.
              </p>
              <ul className="text-left text-sm space-y-2 font-gotham">
                <li>• Timeline development and scheduling</li>
                <li>• Vendor coordination meetings</li>
                <li>• Logistics planning and management</li>
                <li>• Regular client updates and approvals</li>
              </ul>
            </div>
            
            {/* Step 5 */}
            <div className="text-center text-white bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8">
              <div className="mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold text-sage font-gotham">5</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 font-gotham">Final Preparations</h3>
              <p className="text-lg leading-relaxed font-gotham mb-4">
                In the weeks leading up to your event, we finalize all details and conduct thorough preparations.
              </p>
              <ul className="text-left text-sm space-y-2 font-gotham">
                <li>• Final headcount and seating charts</li>
                <li>• Rehearsal coordination</li>
                <li>• Setup and decoration planning</li>
                <li>• Emergency contingency plans</li>
              </ul>
            </div>
            
            {/* Step 6 */}
            <div className="text-center text-white bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8">
              <div className="mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold text-sage font-gotham">6</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 font-gotham">Event Execution</h3>
              <p className="text-lg leading-relaxed font-gotham mb-4">
                On event day, our team manages every detail so you can relax and enjoy your perfectly executed celebration.
              </p>
              <ul className="text-left text-sm space-y-2 font-gotham">
                <li>• On-site coordination and management</li>
                <li>• Vendor supervision and direction</li>
                <li>• Timeline execution and oversight</li>
                <li>• Problem-solving and adjustments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline and Planning Phases */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-normal mb-6 text-charcoal font-seasons-light">
              Planning Timeline
            </h2>
            <p className="text-lg md:text-xl uppercase tracking-widest text-center mb-8 text-charcoal font-gotham">
              When We Recommend Starting Your Event Planning
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* 12+ Months */}
              <div className="flex items-start space-x-6 p-6 bg-white rounded-lg shadow-sm">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg font-gotham">12+</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2 font-gotham">12+ Months Before</h3>
                  <p className="text-charcoal font-gotham mb-3">
                    <strong>Large-Scale Events & Destination Weddings</strong>
                  </p>
                  <p className="text-charcoal text-sm font-gotham">
                    Perfect for complex events requiring extensive planning, popular venues, or international coordination. Allows maximum flexibility and vendor selection.
                  </p>
                </div>
              </div>
              
              {/* 6-12 Months */}
              <div className="flex items-start space-x-6 p-6 bg-white rounded-lg shadow-sm">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-brown rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg font-gotham">6-12</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2 font-gotham">6-12 Months Before</h3>
                  <p className="text-charcoal font-gotham mb-3">
                    <strong>Traditional Weddings & Major Corporate Events</strong>
                  </p>
                  <p className="text-charcoal text-sm font-gotham">
                    Ideal timeframe for most events. Provides sufficient time for planning while securing preferred vendors and venues.
                  </p>
                </div>
              </div>
              
              {/* 3-6 Months */}
              <div className="flex items-start space-x-6 p-6 bg-white rounded-lg shadow-sm">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg font-gotham">3-6</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2 font-gotham">3-6 Months Before</h3>
                  <p className="text-charcoal font-gotham mb-3">
                    <strong>Intimate Celebrations & Corporate Functions</strong>
                  </p>
                  <p className="text-charcoal text-sm font-gotham">
                    Suitable for smaller events with focused requirements. Still allows for quality planning and execution.
                  </p>
                </div>
              </div>
              
              {/* Rush Events */}
              <div className="flex items-start space-x-6 p-6 bg-white rounded-lg shadow-sm border-l-4 border-sage">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm font-gotham">RUSH</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2 font-gotham">Last-Minute Events</h3>
                  <p className="text-charcoal font-gotham mb-3">
                    <strong>We Can Still Help!</strong>
                  </p>
                  <p className="text-charcoal text-sm font-gotham">
                    While we recommend longer planning periods, our experienced team can accommodate shorter timelines with focused planning and our extensive vendor network.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communication & Collaboration */}
      <section className="bg-brown py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/bab97470ae9a38b35a6ba33d7c013f9267cd4aa2?width=1536" 
                alt="Team Communication" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="text-white">
              <h2 className="text-4xl md:text-6xl font-normal mb-6 font-seasons-light">
                Communication & Collaboration
              </h2>
              <p className="text-lg md:text-xl uppercase tracking-wide mb-8 font-gotham">
                Keeping You Informed Every Step of the Way
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sage font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-gotham">Regular Updates</h3>
                    <p className="text-lg leading-relaxed font-gotham">
                      Weekly progress reports and scheduled check-ins to keep you informed of all developments and decisions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sage font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-gotham">24/7 Accessibility</h3>
                    <p className="text-lg leading-relaxed font-gotham">
                      Direct access to your dedicated event coordinator for questions, concerns, or last-minute changes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sage font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-gotham">Collaborative Planning</h3>
                    <p className="text-lg leading-relaxed font-gotham">
                      Your input and approval at every major decision point ensures the final event reflects your vision perfectly.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sage font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-gotham">Digital Project Management</h3>
                    <p className="text-lg leading-relaxed font-gotham">
                      Access to our online portal where you can track progress, view documents, and communicate with the team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="bg-sage py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-white font-seasons-light font-normal">
              Quality Assurance
            </h2>
            <p className="section-subtitle text-white font-gotham">
              Our Commitment to Excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* QA 1 */}
            <div className="text-center text-white">
              <div className="mb-6">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e7ab0fde886817b610b31b318c4b443a402b1a51?width=136" 
                  alt="Quality Check Icon" 
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 font-gotham">Multiple Reviews</h3>
              <p className="text-lg leading-relaxed font-gotham">
                Every aspect of your event undergoes multiple quality reviews before implementation.
              </p>
            </div>
            
            {/* QA 2 */}
            <div className="text-center text-white">
              <div className="mb-6">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e7ab0fde886817b610b31b318c4b443a402b1a51?width=136" 
                  alt="Vendor Standards Icon" 
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 font-gotham">Vendor Standards</h3>
              <p className="text-lg leading-relaxed font-gotham">
                All vendors meet our strict quality standards and are regularly evaluated for performance.
              </p>
            </div>
            
            {/* QA 3 */}
            <div className="text-center text-white">
              <div className="mb-6">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e7ab0fde886817b610b31b318c4b443a402b1a51?width=136" 
                  alt="Contingency Planning Icon" 
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 font-gotham">Contingency Planning</h3>
              <p className="text-lg leading-relaxed font-gotham">
                Comprehensive backup plans ensure your event proceeds smoothly regardless of unforeseen circumstances.
              </p>
            </div>
            
            {/* QA 4 */}
            <div className="text-center text-white">
              <div className="mb-6">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e7ab0fde886817b610b31b318c4b443a402b1a51?width=136" 
                  alt="Post Event Follow-up Icon" 
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 font-gotham">Post-Event Follow-up</h3>
              <p className="text-lg leading-relaxed font-gotham">
                We conduct post-event evaluations to ensure satisfaction and gather feedback for continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-normal mb-6 text-charcoal font-seasons-light">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg md:text-xl uppercase tracking-widest text-center mb-8 text-charcoal font-gotham">
              Let's Begin Planning Your Perfect Event
            </p>
            <p className="text-lg text-charcoal max-w-4xl mx-auto mb-12 font-gotham">
              Our proven process ensures your event will be everything you've envisioned and more. Schedule your complimentary consultation to begin this exciting journey with us.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="btn-outline">
                <span>Schedule Free Consultation</span>
              </button>
              <button className="btn-outline">
                <span>Learn About Our Services</span>
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

export default HowWeWorkPage;
