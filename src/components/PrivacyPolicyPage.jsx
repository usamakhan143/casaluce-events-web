import React from 'react';
import Header from './Header';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[500px] py-8 bg-charcoal flex flex-col">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        <Header activePage="privacy" />
        
        {/* Hero Content */}
        <div className="relative flex-1 flex flex-col items-center justify-center text-white px-4">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-normal mb-4 font-seasons">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl font-gotham">
              Your Privacy is Important to Us
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-charcoal font-gotham space-y-8">
            <div className="text-center mb-12">
              <p className="text-lg">
                <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-seasons">1. Information We Collect</h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  At Casaluce Events, we collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact us through our website forms or email</li>
                  <li>Schedule a consultation</li>
                  <li>Enter into a service agreement with us</li>
                  <li>Subscribe to our newsletter or marketing communications</li>
                  <li>Interact with us on social media platforms</li>
                </ul>
                <p className="leading-relaxed">
                  The types of information we may collect include your name, email address, phone number, 
                  mailing address, event details, preferences, and any other information you choose to provide.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-seasons">2. How We Use Your Information</h2>
              <div className="space-y-4">
                <p className="leading-relaxed">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our event planning services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you technical notices, updates, security alerts, and support messages</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Communicate with you about our services, promotions, and events</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-seasons">3. Information Sharing and Disclosure</h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  We may share information about you as follows:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf</li>
                  <li>With event venues, caterers, photographers, and other vendors as necessary to plan and execute your event</li>
                  <li>In response to a request for information if we believe disclosure is in accordance with applicable law</li>
                  <li>To protect the rights, property, and safety of Casaluce Events, our clients, or others</li>
                  <li>With your consent or at your direction</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-seasons">4. Data Security</h2>
              <p className="leading-relaxed">
                We take reasonable measures to help protect information about you from loss, theft, 
                misuse, unauthorized access, disclosure, alteration, and destruction. However, no 
                internet or electronic storage system is 100% secure, so we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-seasons">5. Your Choices</h2>
              <div className="space-y-4">
                <p className="leading-relaxed">You may:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Update, correct, or delete information about you by contacting us</li>
                  <li>Opt out of receiving promotional communications from us by following the unsubscribe instructions</li>
                  <li>Request access to information we have about you</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-seasons">6. Children's Privacy</h2>
              <p className="leading-relaxed">
                Our services are not directed to children under the age of 13, and we do not 
                knowingly collect personal information from children under 13.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-seasons">7. Changes to This Privacy Policy</h2>
              <p className="leading-relaxed">
                We may update this privacy policy from time to time. If we make material changes, 
                we will notify you by email or by posting a notice on our website prior to the 
                effective date of the changes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-seasons">8. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-white rounded-lg border">
                <p><strong>Casaluce Events</strong></p>
                <p>Email: christopher@casaluceevents.com</p>
                <p>Phone: (818) 277-7235</p>
                <p>Address: Cutler Bay, FL</p>
              </div>
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

export default PrivacyPolicyPage;
