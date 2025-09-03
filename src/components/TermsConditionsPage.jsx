import React from 'react';
import Header from './Header';

const TermsConditionsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[500px] py-8 bg-charcoal flex flex-col">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        <Header activePage="terms" />
        
        {/* Hero Content */}
        <div className="relative flex-1 flex flex-col items-center justify-center text-white px-4">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-normal mb-4 font-seasons">
              Terms and Conditions
            </h1>
            <p className="text-lg md:text-xl font-gotham">
              Service Agreement and Terms of Use
            </p>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Content */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-charcoal font-gotham space-y-8">
            <div className="text-center mb-12">
              <p className="text-lg">
                <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
              </p>
              <p className="text-base mt-2">
                By using our services, you agree to these terms and conditions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-seasons">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                These Terms and Conditions ("Terms") govern your use of Casaluce Events' event planning 
                services and website. By engaging our services or using our website, you agree to be 
                bound by these Terms. If you disagree with any part of these terms, you may not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-seasons">2. Services Description</h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Casaluce Events provides comprehensive event planning services including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Wedding planning and coordination</li>
                  <li>Corporate event management</li>
                  <li>Bat Mitzvah and Jewish celebration planning</li>
                  <li>Venue selection and booking assistance</li>
                  <li>Vendor coordination and management</li>
                  <li>Event design and styling</li>
                  <li>Day-of event coordination</li>
                </ul>
                <p className="leading-relaxed">
                  Specific services will be outlined in individual service agreements.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-seasons">3. Client Responsibilities</h2>
              <div className="space-y-4">
                <p className="leading-relaxed">As our client, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information about your event requirements</li>
                  <li>Make payments according to the agreed schedule</li>
                  <li>Respond to communications in a timely manner</li>
                  <li>Provide necessary access to venues and vendors</li>
                  <li>Notify us immediately of any changes to event plans</li>
                  <li>Respect our vendors and venue partners</li>
                  <li>Comply with venue rules and regulations</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-seasons">4. Payment Terms</h2>
              <div className="space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>A non-refundable retainer is required to secure our services</li>
                  <li>Payment schedules will be outlined in individual contracts</li>
                  <li>Final payment is due 30 days before the event date</li>
                  <li>Late payments may result in suspension of services</li>
                  <li>Additional charges may apply for scope changes or extra services</li>
                  <li>All payments are due in USD unless otherwise specified</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-seasons">5. Cancellation and Refund Policy</h2>
              <div className="space-y-4">
                <p className="leading-relaxed"><strong>Client Cancellation:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cancellation more than 180 days before event: 50% refund of paid fees (excluding retainer)</li>
                  <li>Cancellation 90-180 days before event: 25% refund of paid fees (excluding retainer)</li>
                  <li>Cancellation less than 90 days before event: No refund</li>
                  <li>Retainer fees are non-refundable in all circumstances</li>
                </ul>
                
                <p className="leading-relaxed mt-4"><strong>Force Majeure:</strong></p>
                <p className="leading-relaxed">
                  In cases of events beyond our control (natural disasters, government restrictions, 
                  venue closures), we will work with you to reschedule or provide alternative solutions. 
                  Refund policies may be adjusted based on circumstances.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-seasons">6. Limitation of Liability</h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Casaluce Events' liability is limited to the total amount paid for our services. 
                  We are not responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Actions or failures of third-party vendors</li>
                  <li>Venue-related issues beyond our control</li>
                  <li>Weather conditions affecting outdoor events</li>
                  <li>Personal property damage or loss</li>
                  <li>Injuries occurring during events</li>
                  <li>Technology failures or equipment malfunctions</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-seasons">7. Intellectual Property</h2>
              <p className="leading-relaxed">
                All original designs, concepts, and materials created by Casaluce Events remain our 
                intellectual property. You may use these materials for your event but may not reproduce 
                or distribute them for commercial purposes without written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-seasons">8. Photography and Media</h2>
              <p className="leading-relaxed">
                By engaging our services, you grant Casaluce Events permission to photograph your event 
                and use these images for marketing purposes, including our website and social media. 
                If you prefer not to have your event photographed for marketing, please notify us in writing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-seasons">9. Changes to Services</h2>
              <p className="leading-relaxed">
                Any changes to agreed services must be requested in writing and may result in additional 
                charges. We reserve the right to decline changes that may compromise event quality or 
                our ability to deliver services effectively.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-seasons">10. Dispute Resolution</h2>
              <p className="leading-relaxed">
                Any disputes arising from our services will be resolved through mediation and, if necessary, 
                binding arbitration in accordance with local laws. The prevailing party may recover 
                reasonable attorney fees and costs.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-seasons">11. Governing Law</h2>
              <p className="leading-relaxed">
                These Terms are governed by the laws of the jurisdiction in which Casaluce Events operates. 
                Any legal proceedings will be conducted in the appropriate courts of that jurisdiction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-seasons">12. Modifications to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms at any time. Updated terms will be posted 
                on our website with the effective date. Continued use of our services after changes 
                constitutes acceptance of the new terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-seasons">13. Contact Information</h2>
              <p className="leading-relaxed">
                If you have questions about these Terms and Conditions, please contact us:
              </p>
              <div className="mt-4 p-4 bg-white rounded-lg border">
                <p><strong>Casaluce Events</strong></p>
                <p>Email: christopher@casaluceevents.com</p>
                <p>Phone: (818) 277-7235</p>
                <p>Address: Cutler Bay, FL</p>
              </div>
            </div>

            <div className="bg-sage text-white p-6 rounded-lg">
              <p className="text-center font-bold">
                By engaging Casaluce Events for your event planning needs, you acknowledge that you have 
                read, understood, and agree to be bound by these Terms and Conditions.
              </p>
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

export default TermsConditionsPage;
