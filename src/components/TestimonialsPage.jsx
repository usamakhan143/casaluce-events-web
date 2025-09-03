import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Testimonials */}
      <section className="relative h-screen lg:h-[calc(100vh+100px)] bg-charcoal flex flex-col">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/b61420c94787352d69fa3de5619fd83f4b0db063?width=2732')`
          }}
        ></div>
        
        <Header activePage="testimonials" />
        
        {/* Hero Content */}
        <div className="relative flex-1 flex flex-col items-center justify-center text-white px-4">
          <div className="text-center max-w-4xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal mb-4 font-seasons">
              <span className="block">Client</span>
              <span className="block font-normal font-footlight">Stories and</span>
              <span className="block text-5xl md:text-6xl font-bold italic font-seasons-bold">Testimonials</span>
            </h2>
            <p className="text-lg md:text-xl mt-8 font-gotham">
              Real Experiences from Real Celebrations
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Overview Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-lg uppercase tracking-widest mb-4 text-charcoal font-inter">Our Happy Clients</p>
            <h2 className="text-4xl md:text-6xl font-normal mb-6 text-charcoal font-gotham">
              What They're Saying
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold italic mb-8 text-charcoal font-seasons-bold">
              Testimonials that Speak Volumes
            </h3>
            <p className="text-lg leading-relaxed text-charcoal font-gotham max-w-4xl mx-auto">
              At Casaluce Events, our clients' satisfaction is the heartbeat of our business. Here are some of the kind words shared by those who have experienced our services and trusted us with their most important celebrations.
            </p>
          </div>
        </div>
      </section>


      {/* Wedding Testimonials */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <button className="btn-outline mb-6 font-seasons-light">Wedding Testimonials</button>
            <h2 className="text-4xl md:text-6xl font-normal mb-6 text-charcoal font-seasons-light">
              Love Stories Come True
            </h2>
            <p className="text-lg text-charcoal max-w-4xl mx-auto font-gotham">
              Hear from couples who trusted us with their most important day and see how we made their wedding dreams a reality.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Wedding Testimonial 1 */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="mb-6">
                <div className="flex text-sage text-xl mb-4">
                  ★★★★★
                </div>
                <p className="text-charcoal text-lg italic leading-relaxed font-gotham mb-6">
                  "Casaluce Events transformed our wedding into a fairytale. Every detail was taken care of, leaving us to simply enjoy our day. We couldn't have asked for more!"
                </p>
              </div>
              <div className="border-t pt-4">
                <h4 className="text-charcoal font-bold font-gotham">Sarah & Michael</h4>
                <p className="text-charcoal text-sm font-gotham">Garden Wedding, June 2023</p>
              </div>
            </div>

            {/* Wedding Testimonial 2 */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="mb-6">
                <div className="flex text-sage text-xl mb-4">
                  ★★★★★
                </div>
                <p className="text-charcoal text-lg italic leading-relaxed font-gotham mb-6">
                  "From the initial consultation to the last dance, everything was perfect. The attention to detail and personal touches made our day truly magical."
                </p>
              </div>
              <div className="border-t pt-4">
                <h4 className="text-charcoal font-bold font-gotham">Emily & James</h4>
                <p className="text-charcoal text-sm font-gotham">Beach Wedding, September 2023</p>
              </div>
            </div>

            {/* Wedding Testimonial 3 */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="mb-6">
                <div className="flex text-sage text-xl mb-4">
                  ★★★★★
                </div>
                <p className="text-charcoal text-lg italic leading-relaxed font-gotham mb-6">
                  "The team made our dream wedding come true within our budget. Their creativity and professionalism exceeded all our expectations."
                </p>
              </div>
              <div className="border-t pt-4">
                <h4 className="text-charcoal font-bold font-gotham">Lisa & David</h4>
                <p className="text-charcoal text-sm font-gotham">Vineyard Wedding, October 2023</p>
              </div>
            </div>

            {/* Wedding Testimonial 4 */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="mb-6">
                <div className="flex text-sage text-xl mb-4">
                  ★★★★★
                </div>
                <p className="text-charcoal text-lg italic leading-relaxed font-gotham mb-6">
                  "Planning a wedding from abroad seemed impossible until we found Casaluce Events. They handled everything seamlessly and made our day stress-free."
                </p>
              </div>
              <div className="border-t pt-4">
                <h4 className="text-charcoal font-bold font-gotham">Anna & Roberto</h4>
                <p className="text-charcoal text-sm font-gotham">Destination Wedding, August 2023</p>
              </div>
            </div>

            {/* Wedding Testimonial 5 */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="mb-6">
                <div className="flex text-sage text-xl mb-4">
                  ★★★★★
                </div>
                <p className="text-charcoal text-lg italic leading-relaxed font-gotham mb-6">
                  "The coordination on our wedding day was flawless. Our guests are still talking about how beautiful and well-organized everything was."
                </p>
              </div>
              <div className="border-t pt-4">
                <h4 className="text-charcoal font-bold font-gotham">Rachel & Mark</h4>
                <p className="text-charcoal text-sm font-gotham">City Wedding, November 2023</p>
              </div>
            </div>

            {/* Wedding Testimonial 6 */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="mb-6">
                <div className="flex text-sage text-xl mb-4">
                  ★★★★★
                </div>
                <p className="text-charcoal text-lg italic leading-relaxed font-gotham mb-6">
                  "Casaluce Events understood our vision perfectly and brought it to life. The vendors they recommended were all amazing and professional."
                </p>
              </div>
              <div className="border-t pt-4">
                <h4 className="text-charcoal font-bold font-gotham">Jennifer & Alex</h4>
                <p className="text-charcoal text-sm font-gotham">Rustic Wedding, July 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Testimonials */}
      <section className="bg-brown py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <button className="btn-primary mb-6 font-seasons-light">Corporate Testimonials</button>
            <h2 className="text-4xl md:text-6xl font-normal mb-6 text-white font-seasons-light">
              Professional Excellence
            </h2>
            <p className="text-lg text-white max-w-4xl mx-auto font-gotham">
              Discover how we've helped businesses create impactful events that drive results and build lasting relationships.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Corporate Testimonial 1 */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8">
              <div className="mb-6">
                <div className="flex text-sage text-xl mb-4">
                  ★★★★★
                </div>
                <p className="text-white text-lg italic leading-relaxed font-gotham mb-6">
                  "The professionalism and creativity Casaluce Events brought to our annual conference were outstanding. From planning to execution, everything was flawless. Our attendees were impressed, and we achieved all our event objectives."
                </p>
              </div>
              <div className="border-t border-white border-opacity-20 pt-4">
                <h4 className="text-white font-bold font-gotham">David Chen</h4>
                <p className="text-white text-sm font-gotham">CEO, Tech Innovations Inc.</p>
              </div>
            </div>

            {/* Corporate Testimonial 2 */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8">
              <div className="mb-6">
                <div className="flex text-sage text-xl mb-4">
                  ★★★★★
                </div>
                <p className="text-white text-lg italic leading-relaxed font-gotham mb-6">
                  "Our product launch event was a huge success thanks to Casaluce Events. They managed every detail perfectly and created an atmosphere that truly showcased our brand. We've already booked them for our next event."
                </p>
              </div>
              <div className="border-t border-white border-opacity-20 pt-4">
                <h4 className="text-white font-bold font-gotham">Maria Rodriguez</h4>
                <p className="text-white text-sm font-gotham">Marketing Director, Global Solutions</p>
              </div>
            </div>

            {/* Corporate Testimonial 3 */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8">
              <div className="mb-6">
                <div className="flex text-sage text-xl mb-4">
                  ★★★★★
                </div>
                <p className="text-white text-lg italic leading-relaxed font-gotham mb-6">
                  "Working with Casaluce Events for our company's 25th anniversary celebration was the best decision we made. They transformed our vision into reality and created an unforgettable experience for our employees and clients."
                </p>
              </div>
              <div className="border-t border-white border-opacity-20 pt-4">
                <h4 className="text-white font-bold font-gotham">Robert Johnson</h4>
                <p className="text-white text-sm font-gotham">President, Heritage Financial</p>
              </div>
            </div>

            {/* Corporate Testimonial 4 */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8">
              <div className="mb-6">
                <div className="flex text-sage text-xl mb-4">
                  ★★★★★
                </div>
                <p className="text-white text-lg italic leading-relaxed font-gotham mb-6">
                  "The team's ability to coordinate multiple stakeholders and manage complex logistics for our international conference was impressive. Everything ran smoothly, and the feedback from participants was overwhelmingly positive."
                </p>
              </div>
              <div className="border-t border-white border-opacity-20 pt-4">
                <h4 className="text-white font-bold font-gotham">Susan Miller</h4>
                <p className="text-white text-sm font-gotham">Event Manager, World Trade Organization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Events Testimonials */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <button className="btn-outline mb-6 font-seasons-light">Special Events Testimonials</button>
            <h2 className="text-4xl md:text-6xl font-normal mb-6 text-charcoal font-gotham">
              Celebrating Life's Moments
            </h2>
            <p className="text-lg text-charcoal max-w-4xl mx-auto font-gotham">
              From milestone birthdays to anniversary celebrations, see how we've helped families create cherished memories.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Special Event Testimonial 1 */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="mb-6">
                <div className="flex text-sage text-xl mb-4">
                  ★★★★★
                </div>
                <p className="text-charcoal text-lg italic leading-relaxed font-gotham mb-6">
                  "Thanks to Casaluce Events, our family reunion was an absolute joy. The attention to detail and personal touches made it a day we will always cherish."
                </p>
              </div>
              <div className="border-t pt-4">
                <h4 className="text-charcoal font-bold font-gotham">Patricia Wilson</h4>
                <p className="text-charcoal text-sm font-gotham">Family Reunion, September 2023</p>
              </div>
            </div>

            {/* Special Event Testimonial 2 */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="mb-6">
                <div className="flex text-sage text-xl mb-4">
                  ★★★★★
                </div>
                <p className="text-charcoal text-lg italic leading-relaxed font-gotham mb-6">
                  "My 50th birthday party was beyond my wildest dreams. Every guest commented on how beautifully everything was organized and how much fun they had."
                </p>
              </div>
              <div className="border-t pt-4">
                <h4 className="text-charcoal font-bold font-gotham">Michelle Thompson</h4>
                <p className="text-charcoal text-sm font-gotham">Milestone Birthday, October 2023</p>
              </div>
            </div>

            {/* Special Event Testimonial 3 */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="mb-6">
                <div className="flex text-sage text-xl mb-4">
                  ★★★★★
                </div>
                <p className="text-charcoal text-lg italic leading-relaxed font-gotham mb-6">
                  "Our 25th anniversary celebration was perfect in every way. The team understood exactly what we wanted and delivered an elegant, intimate evening we'll never forget."
                </p>
              </div>
              <div className="border-t pt-4">
                <h4 className="text-charcoal font-bold font-gotham">John & Carol Davis</h4>
                <p className="text-charcoal text-sm font-gotham">Anniversary Celebration, December 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-sage py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-6xl font-normal mb-6 font-seasons-light">
              Ready to Create Your Story
            </h2>
            <p className="text-lg md:text-xl uppercase tracking-widest mb-8 font-gotham">
              Join Our Growing Family of Happy Clients
            </p>
            <p className="text-lg max-w-4xl mx-auto mb-12 font-gotham">
              These testimonials are just a snapshot of the happy memories we've helped create. We're excited to add your story to our collection of satisfied clients and create an unforgettable experience for your next event.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="btn-primary">
                <span className="underline">Start Planning Your Event</span>
              </button>
              <button className="btn-primary">
                <span className="underline">Read More Reviews</span>
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

export default TestimonialsPage;
