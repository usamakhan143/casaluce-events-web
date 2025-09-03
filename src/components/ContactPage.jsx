import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Contact */}
      <section className="relative h-screen lg:h-[calc(100vh+100px)] bg-charcoal flex flex-col">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/16120232/pexels-photo-16120232.jpeg?auto=compress&cs=tinysrgb&w=2732&h=1536&fit=crop')`
          }}
        ></div>
        
        <Header activePage="contact" />
        
        {/* Hero Content */}
        <div className="relative flex-1 flex flex-col items-center justify-center text-white px-4">
          <div className="text-center max-w-4xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal mb-4 font-seasons">
              <span className="block">Get in</span>
              <span className="block font-normal font-footlight">Touch</span>
              <span className="block text-5xl md:text-6xl font-bold italic font-seasons-bold">With Us</span>
            </h2>
            <p className="text-lg md:text-xl mt-8 font-gotham">
              Let's Make Your Event Unforgettable
            </p>
          </div>
        </div>
      </section>

      {/* Contact Overview Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-lg uppercase tracking-widest mb-4 text-charcoal font-inter">Contact Us</p>
            <h2 className="text-4xl md:text-6xl font-normal mb-6 text-charcoal font-gotham">
              Let's Start Planning Together
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold italic mb-8 text-charcoal font-gotham">
              We'd Love to Hear About Your Event
            </h3>
            <p className="text-lg leading-relaxed text-charcoal font-gotham max-w-4xl mx-auto">
              Ready to start planning your perfect event? We're here to help bring your vision to life. Contact us today to schedule your complimentary consultation and take the first step toward creating an unforgettable celebration.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="bg-sage py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="text-white space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-normal mb-6 font-seasons-light">
                  Contact Information
                </h2>
                <p className="text-lg md:text-xl uppercase tracking-wide mb-8 font-gotham">
                  Multiple Ways to Reach Us
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-sage" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-gotham">Phone</h3>
                  <p className="text-lg font-gotham">(818) 277-7235</p>
                  <p className="text-sm text-gray-200 font-gotham">Monday - Friday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-sage" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-gotham">Email</h3>
                  <p className="text-lg font-gotham">christopher@casaluceevents.com</p>
                  <p className="text-sm text-gray-200 font-gotham">We respond within 24 hours</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-sage" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-gotham">Office Address</h3>
                  <p className="text-lg font-gotham">Cutler Bay, FL</p>
                  <p className="text-sm text-gray-200 font-gotham">By appointment only</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-sage" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-3.22l-1.9 1.9a.75.75 0 01-1.06 0L7.22 15H5a2 2 0 01-2-2V5zm5.829 8H5V7h10v6h-2.829l-1.586 1.586L9.829 13z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-gotham">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-gray-200 transition-colors">
                      <span className="sr-only">Facebook</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-gray-200 transition-colors">
                      <span className="sr-only">Instagram</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-gray-200 transition-colors">
                      <span className="sr-only">Pinterest</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001 12.017 0z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-cream rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-charcoal font-seasons text-center">
                Send Us a Message
              </h3>
              <p className="text-charcoal text-center mb-8 font-gotham">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm uppercase tracking-widest text-charcoal mb-2 font-inter">First Name *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full border border-charcoal p-3 bg-white focus:outline-none focus:border-sage transition-colors font-gotham"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm uppercase tracking-widest text-charcoal mb-2 font-inter">Last Name *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full border border-charcoal p-3 bg-white focus:outline-none focus:border-sage transition-colors font-gotham"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-widest text-charcoal mb-2 font-inter">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    className="w-full border border-charcoal p-3 bg-white focus:outline-none focus:border-sage transition-colors font-gotham"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-widest text-charcoal mb-2 font-inter">Phone Number</label>
                  <input 
                    type="tel"
                    className="w-full border border-charcoal p-3 bg-white focus:outline-none focus:border-sage transition-colors font-gotham"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-widest text-charcoal mb-2 font-inter">Event Type</label>
                  <select className="w-full border border-charcoal p-3 bg-white focus:outline-none focus:border-sage transition-colors font-gotham">
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-widest text-charcoal mb-2 font-inter">Event Date</label>
                  <input 
                    type="date"
                    className="w-full border border-charcoal p-3 bg-white focus:outline-none focus:border-sage transition-colors font-gotham"
                  />
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-widest text-charcoal mb-2 font-inter">Expected Guest Count</label>
                  <select className="w-full border border-charcoal p-3 bg-white focus:outline-none focus:border-sage transition-colors font-gotham">
                    <option value="">Select guest count</option>
                    <option value="1-25">1-25 guests</option>
                    <option value="26-50">26-50 guests</option>
                    <option value="51-100">51-100 guests</option>
                    <option value="101-200">101-200 guests</option>
                    <option value="200+">200+ guests</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-widest text-charcoal mb-2 font-inter">Estimated Budget</label>
                  <select className="w-full border border-charcoal p-3 bg-white focus:outline-none focus:border-sage transition-colors font-gotham">
                    <option value="">Select budget range</option>
                    <option value="under-10k">Under $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-widest text-charcoal mb-2 font-inter">Tell Us About Your Event *</label>
                  <textarea 
                    rows="4" 
                    required
                    className="w-full border border-charcoal p-3 bg-white focus:outline-none focus:border-sage transition-colors resize-none font-gotham"
                    placeholder="Please describe your vision, any specific requirements, or questions you have about your event..."
                  ></textarea>
                </div>

                <div className="flex items-start space-x-3">
                  <input 
                    type="checkbox" 
                    id="newsletter" 
                    className="mt-1 w-4 h-4 text-sage focus:ring-sage border-charcoal rounded"
                  />
                  <label htmlFor="newsletter" className="text-sm text-charcoal font-gotham">
                    I would like to receive updates and event planning tips via email.
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="btn-outline w-full py-3 text-lg font-gotham"
                >
                  Send Message
                </button>

                <p className="text-xs text-charcoal text-center font-gotham">
                  By submitting this form, you agree to our privacy policy. We respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours & Location */}
      <section className="bg-brown py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Business Hours */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-normal mb-6 font-seasons-light">
                Business Hours
              </h2>
              <p className="text-lg md:text-xl uppercase tracking-wide mb-8 font-gotham">
                When We're Available to Help You
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white border-opacity-20">
                  <span className="font-gotham">Monday - Friday</span>
                  <span className="font-gotham">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white border-opacity-20">
                  <span className="font-gotham">Saturday</span>
                  <span className="font-gotham">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white border-opacity-20">
                  <span className="font-gotham">Sunday</span>
                  <span className="font-gotham">By Appointment Only</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-gotham">Holidays</span>
                  <span className="font-gotham">Closed</span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg">
                <h3 className="text-xl font-bold mb-3 font-gotham">Emergency Contact</h3>
                <p className="font-gotham mb-2">For events in progress or urgent matters:</p>
                <p className="text-lg font-bold font-gotham">(818) 277-7235</p>
                <p className="text-sm text-gray-200 font-gotham">Available 24/7 during event weekends</p>
              </div>
            </div>

            {/* Location & Directions */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-normal mb-6 font-seasons-light">
                Visit Our Office
              </h2>
              <p className="text-lg md:text-xl uppercase tracking-wide mb-8 font-gotham">
                Schedule an Appointment
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 font-gotham">Office Address</h3>
                  <p className="font-gotham leading-relaxed">
                    Cutler Bay, FL<br />
                    United States
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 font-gotham">Getting Here</h3>
                  <ul className="space-y-2 font-gotham">
                    <li>• Free parking available in our building</li>
                    <li>• Located near public transportation</li>
                    <li>• Wheelchair accessible entrance</li>
                    <li>• Easy access from major highways</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 font-gotham">Meeting Rooms</h3>
                  <p className="font-gotham">
                    Our office features comfortable consultation rooms where we can discuss your event plans in detail. We also have a design studio where you can view decor samples and color schemes.
                  </p>
                </div>

                <Link to="/contact" className="btn-primary">
                  <span>Schedule Office Visit</span>
                </Link>
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
              Your Perfect Event Awaits
            </p>
            <p className="text-lg text-charcoal max-w-4xl mx-auto mb-12 font-gotham">
              Don't wait to start planning your dream event. Contact us today and let's begin creating something truly spectacular together. Every great event starts with a conversation.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-outline">
                <span>Request a Quote</span>
              </Link>
              <button className="btn-outline">
                <span>Call Now: (818) 277-7235</span>
              </button>
              <Link to="/contact" className="btn-outline">
                <span>Schedule Free Consultation</span>
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

export default ContactPage;
