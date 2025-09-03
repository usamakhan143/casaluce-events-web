import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const PackagesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Packages */}
      <section className="relative h-screen lg:h-[calc(100vh+100px)] bg-charcoal flex flex-col">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/b61420c94787352d69fa3de5619fd83f4b0db063?width=2732')`
          }}
        ></div>
        
        <Header activePage="packages" />
        
        {/* Hero Content */}
        <div className="relative flex-1 flex flex-col items-center justify-center text-white px-4">
          <div className="text-center max-w-4xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal mb-4 font-seasons">
              <span className="block">Our Event</span>
              <span className="block font-normal font-footlight">Planning</span>
              <span className="block text-5xl md:text-6xl font-bold italic font-seasons-bold">Packages</span>
            </h2>
            <p className="text-lg md:text-xl mt-8 font-gotham">
              Customized Options for Every Event and Every Budget
            </p>
          </div>
        </div>
      </section>

      {/* Package Overview Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-lg uppercase tracking-widest mb-4 text-charcoal font-inter">Our Packages</p>
            <h2 className="text-4xl md:text-6xl font-normal mb-6 text-charcoal font-seasons">
              Pricing <span className="font-footlight">&</span> Packages
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold italic mb-8 text-charcoal font-seasons-bold">
              Flexible Solutions Tailored to Your Needs
            </h3>
            <p className="text-lg leading-relaxed text-charcoal font-gotham max-w-4xl mx-auto">
              At Casaluce Events, we understand that every event is as unique as the individuals hosting it. That's why our pricing is as personalized as our event planning services. We offer three carefully designed packages that can be customized to match your specific requirements and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Main Packages Section */}
      <section className="bg-brown py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-white font-seasons-light">Choose Your Perfect Package</h2>
            <p className="section-subtitle text-white font-gotham">
              Three Distinct Levels of Service Excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Essential Package */}
            <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 hover:bg-opacity-15 transition-all">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4 text-white font-seasons">Essential Package</h3>
                <p className="text-black text-lg mb-6 font-gotham">Perfect for Intimate Gatherings</p>
              </div>
              
              <div className="text-left text-white space-y-4 mb-8">
                <h4 className="text-lg font-bold font-gotham mb-4">Package Includes:</h4>
                <ul className="space-y-3 font-gotham">
                  <li className="flex items-start space-x-3">
                    <span className="text-black mt-1">✓</span>
                    <span>Initial consultation and planning session</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-black mt-1">✓</span>
                    <span>Venue selection assistance and recommendations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-black mt-1">✓</span>
                    <span>Vendor recommendations and contact information</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-black mt-1">✓</span>
                    <span>Basic timeline development</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-black mt-1">✓</span>
                    <span>Day-of coordination (up to 8 hours)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-black mt-1">✓</span>
                    <span>Emergency contact availability</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <p className="text-black text-sm mb-4 font-gotham">Starting from</p>
                <p className="text-white text-2xl font-bold mb-6 font-gotham">Contact for Quote</p>
                <button className="btn-primary w-full">
                  Learn More
                </button>
              </div>
            </div>
            
            {/* Premium Package */}
            <div className="text-center bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-8 border-2 border-black hover:bg-opacity-25 transition-all">
              <div className="text-black text-sm uppercase tracking-widest mb-2 font-gotham">Most Popular</div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4 text-white font-seasons">Premium Package</h3>
                <p className="text-black text-lg mb-6 font-gotham">Comprehensive Event Planning</p>
              </div>
              
              <div className="text-left text-white space-y-4 mb-8">
                <h4 className="text-lg font-bold font-gotham mb-4">Everything in Essential Plus:</h4>
                <ul className="space-y-3 font-gotham">
                  <li className="flex items-start space-x-3">
                    <span className="text-black mt-1">✓</span>
                    <span>Complete design and decor consultation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-black mt-1">✓</span>
                    <span>Full vendor management and coordination</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-black mt-1">✓</span>
                    <span>Detailed timeline and logistics planning</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-black mt-1">✓</span>
                    <span>Entertainment coordination and booking</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-black mt-1">✓</span>
                    <span>Menu planning and catering coordination</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-black mt-1">✓</span>
                    <span>Rehearsal coordination (if applicable)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-black mt-1">✓</span>
                    <span>On-site event management (up to 12 hours)</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <p className="text-black text-sm mb-4 font-gotham">Starting from</p>
                <p className="text-white text-2xl font-bold mb-6 font-gotham">Contact for Quote</p>
                <button className="btn-primary w-full">
                  Learn More
                </button>
              </div>
            </div>
            
            {/* Luxury Package */}
            <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 hover:bg-opacity-15 transition-all">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4 text-white font-seasons">Luxury Experience</h3>
                <p className="text-black text-lg mb-6 font-gotham">Ultimate Event Experience</p>
              </div>
              
              <div className="text-left text-white space-y-4 mb-8">
                <h4 className="text-lg font-bold font-gotham mb-4">Everything in Premium Plus:</h4>
                <ul className="space-y-3 font-gotham">
                  <li className="flex items-start space-x-3">
                    <span className="text-black mt-1">✓</span>
                    <span>Exclusive access to premium vendors</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-black mt-1">✓</span>
                    <span>Personal event concierge service</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-black mt-1">✓</span>
                    <span>Bespoke design and styling services</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-black mt-1">✓</span>
                    <span>Custom service additions available</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-black mt-1">✓</span>
                    <span>24/7 dedicated support</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-black mt-1">✓</span>
                    <span>Post-event follow-up and feedback</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-black mt-1">✓</span>
                    <span>Unlimited planning consultations</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <p className="text-black text-sm mb-4 font-gotham">Starting from</p>
                <p className="text-white text-2xl font-bold mb-6 font-gotham">Contact for Quote</p>
                <button className="btn-primary w-full">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-white text-lg mb-6 font-gotham">
              All packages can be customized to meet your specific needs and budget requirements.
            </p>
            <button className="btn-primary">
              <span className="underline">Schedule Free Consultation</span>
            </button>
          </div>
        </div>
      </section>

      {/* Package Comparison */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-normal mb-6 text-charcoal font-seasons-light">
              Package Comparison
            </h2>
            <p className="text-lg md:text-xl uppercase tracking-widest text-center mb-8 text-charcoal font-gotham">
              Compare Features Across All Packages
            </p>
            <p className="text-lg text-charcoal max-w-4xl mx-auto font-gotham">
              See what's included in each package to find the perfect fit for your event needs.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Desktop Package Headers */}
            <div className="hidden md:grid md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-charcoal font-gotham mb-2">Features</h3>
              </div>
              <div className="text-center bg-white rounded-lg p-4 shadow-sm">
                <h3 className="text-xl font-bold text-charcoal font-seasons mb-2">Essential</h3>
                <p className="text-sm text-charcoal font-gotham">Intimate Gatherings</p>
              </div>
              <div className="text-center bg-brown rounded-lg p-4 shadow-md">
                <div className="text-white text-xs uppercase tracking-widest mb-1 font-gotham">Most Popular</div>
                <h3 className="text-xl font-bold text-white font-seasons mb-2">Premium</h3>
                <p className="text-sm text-white font-gotham">Comprehensive Planning</p>
              </div>
              <div className="text-center bg-white rounded-lg p-4 shadow-sm">
                <h3 className="text-xl font-bold text-charcoal font-seasons mb-2">Luxury</h3>
                <p className="text-sm text-charcoal font-gotham">Ultimate Experience</p>
              </div>
            </div>

            {/* Mobile Package Headers - Horizontal Scroll */}
            <div className="md:hidden mb-8 overflow-x-auto">
              <div className="min-w-max">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-40 text-center">
                    <h3 className="text-lg font-bold text-charcoal font-gotham mb-2">Features</h3>
                  </div>
                  <div className="flex-shrink-0 w-32 text-center bg-white rounded-lg p-3 shadow-sm">
                    <h3 className="text-lg font-bold text-charcoal font-seasons mb-1">Essential</h3>
                    <p className="text-xs text-charcoal font-gotham">Intimate Gatherings</p>
                  </div>
                  <div className="flex-shrink-0 w-32 text-center bg-brown rounded-lg p-3 shadow-md">
                    <div className="text-white text-xs uppercase tracking-widest mb-1 font-gotham">Most Popular</div>
                    <h3 className="text-lg font-bold text-white font-seasons mb-1">Premium</h3>
                    <p className="text-xs text-white font-gotham">Comprehensive Planning</p>
                  </div>
                  <div className="flex-shrink-0 w-32 text-center bg-white rounded-lg p-3 shadow-sm">
                    <h3 className="text-lg font-bold text-charcoal font-seasons mb-1">Luxury</h3>
                    <p className="text-xs text-charcoal font-gotham">Ultimate Experience</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Feature Comparison Rows */}
            <div className="hidden md:block space-y-3">
              {/* Row 1 */}
              <div className="grid md:grid-cols-4 gap-4 items-center bg-white rounded-lg p-4 shadow-sm">
                <div className="font-gotham text-charcoal font-medium">Initial Consultation</div>
                <div className="text-center"><span className="text-black text-xl">✓</span></div>
                <div className="text-center"><span className="text-black text-xl">✓</span></div>
                <div className="text-center"><span className="text-black text-xl">✓</span></div>
              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-4 gap-4 items-center bg-gray-50 rounded-lg p-4">
                <div className="font-gotham text-charcoal font-medium">Venue Selection</div>
                <div className="text-center"><span className="text-black text-xl">✓</span></div>
                <div className="text-center"><span className="text-black text-xl">✓</span></div>
                <div className="text-center"><span className="text-black text-xl">✓</span></div>
              </div>

              {/* Row 3 */}
              <div className="grid md:grid-cols-4 gap-4 items-center bg-white rounded-lg p-4 shadow-sm">
                <div className="font-gotham text-charcoal font-medium">Vendor Recommendations</div>
                <div className="text-center"><span className="text-black text-xl">✓</span></div>
                <div className="text-center"><span className="text-black text-xl">✓</span></div>
                <div className="text-center"><span className="text-black text-xl">✓</span></div>
              </div>

              {/* Row 4 */}
              <div className="grid md:grid-cols-4 gap-4 items-center bg-gray-50 rounded-lg p-4">
                <div className="font-gotham text-charcoal font-medium">Day-of Coordination</div>
                <div className="text-center text-charcoal font-gotham">8 hours</div>
                <div className="text-center text-charcoal font-gotham">12 hours</div>
                <div className="text-center text-charcoal font-gotham font-bold">Unlimited</div>
              </div>

              {/* Row 5 */}
              <div className="grid md:grid-cols-4 gap-4 items-center bg-white rounded-lg p-4 shadow-sm">
                <div className="font-gotham text-charcoal font-medium">Design & Decor Consultation</div>
                <div className="text-center text-gray-400 text-xl">-</div>
                <div className="text-center"><span className="text-black text-xl">✓</span></div>
                <div className="text-center"><span className="text-black text-xl">✓</span></div>
              </div>

              {/* Row 6 */}
              <div className="grid md:grid-cols-4 gap-4 items-center bg-gray-50 rounded-lg p-4">
                <div className="font-gotham text-charcoal font-medium">Full Vendor Management</div>
                <div className="text-center text-gray-400 text-xl">-</div>
                <div className="text-center"><span className="text-black text-xl">✓</span></div>
                <div className="text-center"><span className="text-black text-xl">✓</span></div>
              </div>

              {/* Row 7 */}
              <div className="grid md:grid-cols-4 gap-4 items-center bg-white rounded-lg p-4 shadow-sm">
                <div className="font-gotham text-charcoal font-medium">Entertainment Coordination</div>
                <div className="text-center text-gray-400 text-xl">-</div>
                <div className="text-center"><span className="text-black text-xl">✓</span></div>
                <div className="text-center"><span className="text-black text-xl">✓</span></div>
              </div>

              {/* Row 8 */}
              <div className="grid md:grid-cols-4 gap-4 items-center bg-gray-50 rounded-lg p-4">
                <div className="font-gotham text-charcoal font-medium">Personal Concierge</div>
                <div className="text-center text-gray-400 text-xl">-</div>
                <div className="text-center text-gray-400 text-xl">-</div>
                <div className="text-center"><span className="text-black text-xl">✓</span></div>
              </div>

              {/* Row 9 */}
              <div className="grid md:grid-cols-4 gap-4 items-center bg-white rounded-lg p-4 shadow-sm">
                <div className="font-gotham text-charcoal font-medium">24/7 Support</div>
                <div className="text-center text-gray-400 text-xl">-</div>
                <div className="text-center text-gray-400 text-xl">-</div>
                <div className="text-center"><span className="text-black text-xl">✓</span></div>
              </div>

              {/* Row 10 */}
              <div className="grid md:grid-cols-4 gap-4 items-center bg-gray-50 rounded-lg p-4">
                <div className="font-gotham text-charcoal font-medium">Premium Vendor Access</div>
                <div className="text-center text-gray-400 text-xl">-</div>
                <div className="text-center text-gray-400 text-xl">-</div>
                <div className="text-center"><span className="text-black text-xl">✓</span></div>
              </div>
            </div>

            {/* Mobile Feature Comparison - Horizontal Scroll */}
            <div className="md:hidden mb-8">
              <div className="text-center mb-4">
                <p className="text-sm text-charcoal font-gotham italic">← Scroll horizontally to compare →</p>
              </div>
              <div className="overflow-x-auto">
                <div className="min-w-max space-y-3">
                  {/* Row 1 */}
                  <div className="flex gap-3 bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex-shrink-0 w-40 font-gotham text-charcoal font-medium text-sm">Initial Consultation</div>
                    <div className="flex-shrink-0 w-32 text-center"><span className="text-black text-lg">✓</span></div>
                    <div className="flex-shrink-0 w-32 text-center"><span className="text-black text-lg">✓</span></div>
                    <div className="flex-shrink-0 w-32 text-center"><span className="text-black text-lg">✓</span></div>
                  </div>

                  {/* Row 2 */}
                  <div className="flex gap-3 bg-gray-50 rounded-lg p-3">
                    <div className="flex-shrink-0 w-40 font-gotham text-charcoal font-medium text-sm">Venue Selection</div>
                    <div className="flex-shrink-0 w-32 text-center"><span className="text-black text-lg">✓</span></div>
                    <div className="flex-shrink-0 w-32 text-center"><span className="text-black text-lg">✓</span></div>
                    <div className="flex-shrink-0 w-32 text-center"><span className="text-black text-lg">✓</span></div>
                  </div>

                  {/* Row 3 */}
                  <div className="flex gap-3 bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex-shrink-0 w-40 font-gotham text-charcoal font-medium text-sm">Vendor Recommendations</div>
                    <div className="flex-shrink-0 w-32 text-center"><span className="text-black text-lg">✓</span></div>
                    <div className="flex-shrink-0 w-32 text-center"><span className="text-black text-lg">✓</span></div>
                    <div className="flex-shrink-0 w-32 text-center"><span className="text-black text-lg">✓</span></div>
                  </div>

                  {/* Row 4 */}
                  <div className="flex gap-3 bg-gray-50 rounded-lg p-3">
                    <div className="flex-shrink-0 w-40 font-gotham text-charcoal font-medium text-sm">Day-of Coordination</div>
                    <div className="flex-shrink-0 w-32 text-center text-charcoal font-gotham text-sm">8 hours</div>
                    <div className="flex-shrink-0 w-32 text-center text-charcoal font-gotham text-sm">12 hours</div>
                    <div className="flex-shrink-0 w-32 text-center text-charcoal font-gotham font-bold text-sm">Unlimited</div>
                  </div>

                  {/* Row 5 */}
                  <div className="flex gap-3 bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex-shrink-0 w-40 font-gotham text-charcoal font-medium text-sm">Design & Decor Consultation</div>
                    <div className="flex-shrink-0 w-32 text-center text-gray-400 text-lg">-</div>
                    <div className="flex-shrink-0 w-32 text-center"><span className="text-black text-lg">✓</span></div>
                    <div className="flex-shrink-0 w-32 text-center"><span className="text-black text-lg">✓</span></div>
                  </div>

                  {/* Row 6 */}
                  <div className="flex gap-3 bg-gray-50 rounded-lg p-3">
                    <div className="flex-shrink-0 w-40 font-gotham text-charcoal font-medium text-sm">Full Vendor Management</div>
                    <div className="flex-shrink-0 w-32 text-center text-gray-400 text-lg">-</div>
                    <div className="flex-shrink-0 w-32 text-center"><span className="text-black text-lg">✓</span></div>
                    <div className="flex-shrink-0 w-32 text-center"><span className="text-black text-lg">✓</span></div>
                  </div>

                  {/* Row 7 */}
                  <div className="flex gap-3 bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex-shrink-0 w-40 font-gotham text-charcoal font-medium text-sm">Entertainment Coordination</div>
                    <div className="flex-shrink-0 w-32 text-center text-gray-400 text-lg">-</div>
                    <div className="flex-shrink-0 w-32 text-center"><span className="text-black text-lg">✓</span></div>
                    <div className="flex-shrink-0 w-32 text-center"><span className="text-black text-lg">✓</span></div>
                  </div>

                  {/* Row 8 */}
                  <div className="flex gap-3 bg-gray-50 rounded-lg p-3">
                    <div className="flex-shrink-0 w-40 font-gotham text-charcoal font-medium text-sm">Personal Concierge</div>
                    <div className="flex-shrink-0 w-32 text-center text-gray-400 text-lg">-</div>
                    <div className="flex-shrink-0 w-32 text-center text-gray-400 text-lg">-</div>
                    <div className="flex-shrink-0 w-32 text-center"><span className="text-black text-lg">✓</span></div>
                  </div>

                  {/* Row 9 */}
                  <div className="flex gap-3 bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex-shrink-0 w-40 font-gotham text-charcoal font-medium text-sm">24/7 Support</div>
                    <div className="flex-shrink-0 w-32 text-center text-gray-400 text-lg">-</div>
                    <div className="flex-shrink-0 w-32 text-center text-gray-400 text-lg">-</div>
                    <div className="flex-shrink-0 w-32 text-center"><span className="text-black text-lg">✓</span></div>
                  </div>

                  {/* Row 10 */}
                  <div className="flex gap-3 bg-gray-50 rounded-lg p-3">
                    <div className="flex-shrink-0 w-40 font-gotham text-charcoal font-medium text-sm">Premium Vendor Access</div>
                    <div className="flex-shrink-0 w-32 text-center text-gray-400 text-lg">-</div>
                    <div className="flex-shrink-0 w-32 text-center text-gray-400 text-lg">-</div>
                    <div className="flex-shrink-0 w-32 text-center"><span className="text-black text-lg">✓</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-8 md:mt-12">
              <p className="text-charcoal text-base md:text-lg mb-6 font-gotham">
                All packages can be customized to meet your specific needs and budget requirements.
              </p>
              <button className="btn-outline">
                <span className="underline">Compare Packages in Detail</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Process */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-normal mb-6 text-charcoal font-seasons-light">
              Our Pricing Process
            </h2>
            <p className="text-lg md:text-xl uppercase tracking-widest text-center mb-8 text-charcoal font-gotham">
              Getting to Your Personalized Quote
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Step 1 - Initial Consultation */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs bg-transparent border border-charcoal p-6 h-72 flex flex-col justify-center text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-xl font-gotham">1</span>
                  </div>
                </div>
                <h4 className="text-lg uppercase tracking-wide mb-4 text-charcoal font-medium leading-tight font-gotham">
                  Initial<br />Consultation
                </h4>
                <p className="text-charcoal text-sm leading-relaxed font-gotham">
                  Start with our complimentary 15-minute consultation to discuss your vision and requirements.
                </p>
              </div>
            </div>

            {/* Step 2 - Understanding Your Needs */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs bg-transparent border border-charcoal p-6 h-72 flex flex-col justify-center text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-brown rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-xl font-gotham">2</span>
                  </div>
                </div>
                <h4 className="text-lg uppercase tracking-wide mb-4 text-charcoal font-medium leading-tight font-gotham">
                  Understanding Your<br />Needs
                </h4>
                <p className="text-charcoal text-sm leading-relaxed font-gotham">
                  We assess your event size, scope, complexity, and budget to recommend the best package.
                </p>
              </div>
            </div>

            {/* Step 3 - Package Recommendation */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs bg-transparent border border-charcoal p-6 h-72 flex flex-col justify-center text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-xl font-gotham">3</span>
                  </div>
                </div>
                <h4 className="text-lg uppercase tracking-wide mb-4 text-charcoal font-medium leading-tight font-gotham">
                  Package<br />Recommendation
                </h4>
                <p className="text-charcoal text-sm leading-relaxed font-gotham">
                  Based on your needs, we recommend the most suitable package and customization options.
                </p>
              </div>
            </div>

            {/* Step 4 - Customized Proposal */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs bg-transparent border border-charcoal p-6 h-72 flex flex-col justify-center text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-xl font-gotham">4</span>
                  </div>
                </div>
                <h4 className="text-lg uppercase tracking-wide mb-4 text-charcoal font-medium leading-tight font-gotham">
                  Customized<br />Proposal
                </h4>
                <p className="text-charcoal text-sm leading-relaxed font-gotham">
                  We create a detailed proposal with transparent pricing and service breakdown.
                </p>
              </div>
            </div>

            {/* Step 5 - Final Agreement */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs bg-transparent border border-charcoal p-6 h-72 flex flex-col justify-center text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-brown rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-xl font-gotham">5</span>
                  </div>
                </div>
                <h4 className="text-lg uppercase tracking-wide mb-4 text-charcoal font-medium leading-tight font-gotham">
                  Final<br />Agreement
                </h4>
                <p className="text-charcoal text-sm leading-relaxed font-gotham">
                  Once approved, we finalize the contract and begin planning your perfect event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package FAQ */}
      <section className="bg-brown py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-white font-seasons-light">Package Questions</h2>
            <p className="section-subtitle text-white font-gotham">
              Frequently Asked Questions About Our Packages
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* FAQ 1 */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-white font-gotham">Can I switch packages during planning?</h3>
              <p className="text-white leading-relaxed font-gotham">
                Yes, packages can be adjusted during the planning process. We understand that event needs may evolve, and we're flexible in accommodating changes to ensure the best fit for your celebration.
              </p>
            </div>
            
            {/* FAQ 2 */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-white font-gotham">Are there any hidden fees?</h3>
              <p className="text-white leading-relaxed font-gotham">
                No hidden fees. We believe in complete transparency. All costs are clearly outlined in your proposal, including any optional add-ons or customizations you choose.
              </p>
            </div>
            
            {/* FAQ 3 */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-white font-gotham">What's included in the consultation?</h3>
              <p className="text-white leading-relaxed font-gotham">
                The complimentary consultation includes a discussion of your vision, budget review, timeline planning, and recommendation of the most suitable package for your needs.
              </p>
            </div>
            
            {/* FAQ 4 */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-white font-gotham">Can I add services from other packages?</h3>
              <p className="text-white leading-relaxed font-gotham">
                Absolutely! Packages can be customized with additional services. We can add specific features from higher-tier packages or create custom additions based on your unique requirements.
              </p>
            </div>
            
            {/* FAQ 5 */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-white font-gotham">What payment options are available?</h3>
              <p className="text-white leading-relaxed font-gotham">
                We offer flexible payment plans including installment options. Payment schedules are customized based on your event timeline and can be discussed during the proposal phase.
              </p>
            </div>
            
            {/* FAQ 6 */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-white font-gotham">Is travel included for destination events?</h3>
              <p className="text-white leading-relaxed font-gotham">
                Travel costs for destination events are calculated separately and included in your custom proposal. We provide detailed travel estimates during the consultation process.
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
              Ready to Choose Your Package?
            </h2>
            <p className="text-lg md:text-xl uppercase tracking-widest text-center mb-8 text-charcoal font-gotham">
              Let's Discuss Which Package Best Fits Your Vision
            </p>
            <p className="text-lg text-charcoal max-w-4xl mx-auto mb-12 font-gotham">
              Schedule your complimentary consultation to explore our packages in detail and receive a personalized recommendation based on your specific event needs and budget.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="btn-outline">
                <span className="underline">Schedule Free Consultation</span>
              </button>
              <button className="btn-outline">
                <span className="underline">Contact Us for Custom Quote</span>
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

export default PackagesPage;
