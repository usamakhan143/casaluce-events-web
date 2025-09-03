import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const FAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How early should I contact you to start planning my event?",
      answer: "Ideally, we recommend reaching out at least [X months] before your event. This timeframe allows us to secure the best venues and vendors, and to plan each detail meticulously. However, we can also accommodate shorter timelines depending on the complexity and scale of your event."
    },
    {
      id: 2,
      question: "Can you work with my specific budget?",
      answer: "Absolutely! We believe every event can be beautiful, regardless of budget size. During our initial consultation, we'll discuss your budget and tailor our services to match it, ensuring we deliver the best possible experience within your financial parameters."
    },
    {
      id: 3,
      question: "Do you handle destination events?",
      answer: "Yes, we do! We are equipped to plan and manage events at both local and destination venues. Our team can handle the complexities of a destination event, including travel arrangements, accommodations, and local vendor coordination."
    },
    {
      id: 4,
      question: "What types of events do you specialize in?",
      answer: "We specialize in a wide range of events including weddings, corporate events, private parties, birthdays, anniversaries, and more. Each event is unique, and we tailor our services to meet the specific needs and style of each occasion."
    },
    {
      id: 5,
      question: "How do you select vendors for my event?",
      answer: "We have a curated list of trusted vendors known for their quality and reliability. We select vendors based on your event's specific needs, preferences, and budget. Our team ensures that each vendor aligns with our high standards and your event's overall theme and style."
    },
    {
      id: 6,
      question: "What happens if there are unexpected issues on the day of the event?",
      answer: "As experienced event planners, we are well-prepared to handle unexpected issues. We always have contingency plans in place and our team is adept at problem-solving on the spot to ensure your event runs smoothly."
    },
    {
      id: 7,
      question: "Can I be involved in the planning process?",
      answer: "Definitely! We encourage your involvement as much as you wish. Your input is valuable in making your event truly reflective of your taste and style. We provide regular updates and check-ins to ensure we are aligned with your vision."
    },
    {
      id: 8,
      question: "Can you accommodate special dietary requirements for catering?",
      answer: "Yes, we work closely with caterers who can accommodate a variety of dietary requirements, including vegetarian, vegan, gluten-free, kosher, halal, and any allergies. Let us know your needs, and we will ensure they are met."
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - FAQ */}
      <section className="relative h-screen lg:h-[calc(100vh+100px)] bg-charcoal flex flex-col">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/8b7e289ce91efbbe641f2c2f709509a79da8e3fd?width=2732')`
          }}
        ></div>
        
        <Header activePage="faq" />
        
        {/* Hero Content */}
        <div className="relative flex-1 flex flex-col items-center justify-center text-white px-4">
          <div className="text-center max-w-4xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal mb-4 font-seasons">
              <span className="block">Frequently</span>
              <span className="block font-normal font-footlight">Asked</span>
              <span className="block text-5xl md:text-6xl font-bold italic font-seasons-bold">Questions</span>
            </h2>
            <p className="text-lg md:text-xl mt-8 font-gotham">
              Everything You Need to Know About Our Services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Overview Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-lg uppercase tracking-widest mb-4 text-charcoal font-inter">Your Questions Answered</p>
            <h2 className="text-4xl md:text-6xl font-normal mb-6 text-charcoal font-seasons">
              Common Questions
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold italic mb-8 text-charcoal font-seasons-bold">
              About Our Event Planning Services
            </h3>
            <p className="text-lg leading-relaxed text-charcoal font-gotham max-w-4xl mx-auto">
              We understand that planning an event can raise many questions. Here are answers to the most common inquiries we receive from our clients to help you understand our process and services better.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.id} className="border border-brown rounded-lg overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-8 py-6 text-left bg-brown bg-opacity-5 hover:bg-opacity-10 transition-colors duration-200 flex justify-between items-center"
                >
                  <h3 className="text-lg font-bold text-charcoal font-gotham pr-4">
                    Q: {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-6 h-6 text-brown transform transition-transform duration-200 ${
                        openFAQ === faq.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {openFAQ === faq.id && (
                  <div className="px-8 py-6 bg-white border-t border-brown border-opacity-20">
                    <p className="text-charcoal text-base leading-relaxed font-gotham">
                      <span className="font-bold">A:</span> {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Support Section */}
      <section className="bg-sage py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-normal mb-6 font-seasons-light">
              Still Have Questions
            </h2>
            <p className="text-lg md:text-xl uppercase tracking-widest mb-8 font-gotham">
              We're Here to Help
            </p>
            <p className="text-lg mb-12 font-gotham">
              If you couldn't find the answer to your question above, don't hesitate to reach out to us directly. Our team is always ready to provide personalized answers and guidance for your specific event needs.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Phone Contact */}
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-sage" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 font-gotham">Call Us</h3>
                <p className="font-gotham">1234-567-890</p>
              </div>

              {/* Email Contact */}
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-sage" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 font-gotham">Email Us</h3>
                <p className="font-gotham">info@youremail.com</p>
              </div>

              {/* Consultation Contact */}
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-sage" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 font-gotham">Book Consultation</h3>
                <p className="font-gotham">Free Initial Meeting</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                <span className="underline">Contact Us Today</span>
              </Link>
              <button className="btn-primary">
                <span className="underline">Schedule Consultation</span>
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

export default FAQPage;
