import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Increased height by 100px on desktop */}
      <section className="relative h-screen lg:h-[calc(100vh+100px)] bg-charcoal flex flex-col">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/b61420c94787352d69fa3de5619fd83f4b0db063?width=2732')`
          }}
        ></div>
        
        {/* Brown header bar with logo, company name, tagline and navigation */}
        <div className="relative bg-brown bg-opacity-75 py-8">
          <div className="flex flex-col items-center">
            {/* Increased logo size for better visibility */}
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/97ab182b1821b6041552ea1a2fc5b38e8e23788b?width=246" 
              alt="Casaluce Events Logo" 
              className="h-24 w-24 mb-4"
            />
            <h1 className="text-white text-3xl md:text-4xl font-light font-seasons text-center">
              Casaluce Events
            </h1>
            <p className="text-white text-xs md:text-sm uppercase tracking-widest text-center mt-2 mb-6">
              Crafting Events You'll Love
            </p>
            
            {/* Navigation with better spacing between menu items */}
            <nav className="w-full">
              <div className="text-center text-white text-sm uppercase tracking-widest">
                <span className="hidden lg:inline space-x-4">
                  <span className="mx-2">HOME</span>
                  <span className="mx-2">|</span>
                  <span className="mx-2">ABOUT US</span>
                  <span className="mx-2">|</span>
                  <span className="mx-2">SERVICES</span>
                  <span className="mx-2">|</span>
                  <span className="mx-2">PORTFOLIO</span>
                  <span className="mx-2">|</span>
                  <span className="mx-2">HOW WE WORK</span>
                  <span className="mx-2">|</span>
                  <span className="mx-2">PACKAGES</span>
                  <span className="mx-2">|</span>
                  <span className="mx-2">TESTIMONIAL</span>
                  <span className="mx-2">|</span>
                  <span className="mx-2">FAQ</span>
                  <span className="mx-2">|</span>
                  <span className="mx-2">CONTACT</span>
                </span>
                <span className="lg:hidden">MENU</span>
              </div>
            </nav>
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="relative flex-1 flex flex-col items-center justify-center text-white px-4">
          <div className="text-center max-w-4xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-4 font-seasons">
              <span className="block">Transforming Your</span>
              <span className="block font-light">Dreams into delightful</span>
              <span className="block text-5xl md:text-6xl font-bold italic">Realities</span>
            </h2>
          </div>
          
          <button className="mt-12 btn-primary">
            Explore More
          </button>
        </div>
      </section>

      {/* About Section - Updated company name */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/c182888d8929cf8c1416ee509b1d0e21eb251299?width=2003" 
                alt="Event planning" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <p className="text-lg uppercase tracking-widest mb-4 text-charcoal">Welcome to</p>
              <h2 className="text-4xl md:text-6xl font-light mb-6 text-charcoal font-seasons">
                Casaluce Events
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold italic mb-6 text-charcoal font-seasons">
                Where Every Celebration is a Masterpiece
              </h3>
              <p className="text-lg uppercase tracking-wide mb-8 text-charcoal">
                Creating Joyful Memories, One Event at a Time
              </p>
              <p className="text-lg leading-relaxed text-charcoal">
                Welcome to the vibrant world of Casaluce Events, where your event dreams are not just planned but passionately brought to life. Our mission is to create events that are not only memorable but also reflect the unique essence of each client we work with. Whether it's weaving the romance into your wedding day, infusing energy into corporate events, or adding a splash of fun to private parties, we're dedicated to making every occasion extraordinary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="bg-sage py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-white font-seasons font-light">
              What makes us different?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center text-white">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/e7ab0fde886817b610b31b318c4b443a402b1a51?width=136" 
                alt="Icon" 
                className="w-16 h-16 mx-auto mb-6"
              />
              <h3 className="text-xl font-bold mb-4">Tailored Experiences:</h3>
              <p className="text-lg leading-relaxed">
                We believe that no two events should be the same. Our approach is to understand your unique story, preferences, and aspirations. We then craft a customized experience that aligns with your vision, ensuring that your event is as unique as you are.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="text-center text-white">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/e7ab0fde886817b610b31b318c4b443a402b1a51?width=136" 
                alt="Icon" 
                className="w-16 h-16 mx-auto mb-6"
              />
              <h3 className="text-xl font-bold mb-4">Experienced Hands at Work:</h3>
              <p className="text-lg leading-relaxed">
                Boasting [X] years in the event planning industry, our team brings a wealth of knowledge, skills, and insights to your event. We're equipped to handle any challenge and transform it into an opportunity to excel.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="text-center text-white">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/e7ab0fde886817b610b31b318c4b443a402b1a51?width=136" 
                alt="Icon" 
                className="w-16 h-16 mx-auto mb-6"
              />
              <h3 className="text-xl font-bold mb-4">Unwavering Attention to Detail:</h3>
              <p className="text-lg leading-relaxed">
                Our team pays meticulous attention to every element of your event. From the overarching theme to the nuances of the event flow, every aspect is thoughtfully planned and executed. This commitment to detail ensures a seamless and stress-free experience for you and your guests.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="text-center text-white">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/e7ab0fde886817b610b31b318c4b443a402b1a51?width=136" 
                alt="Icon" 
                className="w-16 h-16 mx-auto mb-6"
              />
              <h3 className="text-xl font-bold mb-4">Creative Flair and Innovation:</h3>
              <p className="text-lg leading-relaxed">
                At Casaluce Events, we constantly stay abreast of the latest trends and innovations in event planning. Our creative team brings fresh ideas and perspectives, ensuring your event is not just current but also has a unique twist that sets it apart.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="text-center text-white">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/e7ab0fde886817b610b31b318c4b443a402b1a51?width=136" 
                alt="Icon" 
                className="w-16 h-16 mx-auto mb-6"
              />
              <h3 className="text-xl font-bold mb-4">Responsive and Reliable Communication:</h3>
              <p className="text-lg leading-relaxed">
                We pride ourselves on being responsive and accessible to our clients. Our communication lines are always open, ensuring you feel supported and informed throughout the planning process.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="text-center text-white">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/e7ab0fde886817b610b31b318c4b443a402b1a51?width=136" 
                alt="Icon" 
                className="w-16 h-16 mx-auto mb-6"
              />
              <h3 className="text-xl font-bold mb-4">Sustainable and Ethical Practices:</h3>
              <p className="text-lg leading-relaxed">
                In today's world, sustainability is key. We strive to incorporate eco-friendly and ethical practices in our event planning, ensuring that your celebration is not only beautiful but also responsible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="bg-brown h-96">
        <div 
          className="h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/6f552d13bedcce5d7bad5dd01b9ad607242fdc15?width=2732')`
          }}
        ></div>
      </section>

      {/* Philosophy Section - Updated company name */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg uppercase tracking-widest mb-4 text-charcoal">Our Philosophy:</p>
              <h2 className="text-4xl md:text-6xl font-light mb-6 text-charcoal font-seasons">
                Your Vision, Our Mission
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-charcoal">
                <p>
                  At Casaluce Events, we don't just plan events; we create experiences that resonate and leave a lasting impression. Our philosophy revolves around understanding your vision and turning it into a reality. We work tirelessly to ensure that every element, from the venue to the decor, the food to the entertainment, comes together perfectly to create an event that is both stunning and uniquely yours.
                </p>
                <p className="text-base">
                  Let Casaluce Events be your partner in celebrating life's special moments. Together, we'll create an event that's not just an occasion, but a cherished memory.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/bab97470ae9a38b35a6ba33d7c013f9267cd4aa2?width=1536" 
                alt="Event planning philosophy" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Updated company name */}
      <section className="bg-brown py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-white font-seasons">Our Services</h2>
            <p className="section-subtitle text-white">
              Your Event, Your Way: Tailored Celebrations for Every Milestone
            </p>
            <p className="text-lg text-white max-w-4xl mx-auto">
              At Casaluce Events, we understand that each event is a unique tapestry woven with personal dreams and professional touches. Here's how we cater to different types of events:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Weddings */}
            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/5bb14e96fedcc8dc23e1d8a6104258f331fbf6e5?width=798" 
                  alt="Wedding" 
                  className="w-full h-80 object-cover rounded-t-3xl"
                />
              </div>
              <button className="btn-primary mb-4">Weddings</button>
              <p className="text-white text-lg leading-relaxed">
                Imagine your perfect wedding day, and let us bring it to life. From fairy-tale venues to heartfelt vows, every moment will be crafted to reflect your love story. Our services include venue scouting, vendor coordination, theme and decor design, itinerary planning, and on-the-day event management.
              </p>
            </div>
            
            {/* Corporate Events */}
            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/811cde8fc10efa675c04a2ae57e85def0534e093?width=798" 
                  alt="Corporate Events" 
                  className="w-full h-80 object-cover rounded-t-3xl"
                />
              </div>
              <button className="btn-primary mb-4">Corporate Events</button>
              <p className="text-white text-lg leading-relaxed">
                Elevate your business gatherings with our professional event planning services. We specialize in organizing conferences, meetings, seminars, and corporate celebrations. Our approach combines your brand's ethos with our planning expertise.
              </p>
            </div>
            
            {/* Special Occasions */}
            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/357310b47927110f38ba69ae94199b9fe2bef328?width=798" 
                  alt="Special Occasions" 
                  className="w-full h-80 object-cover rounded-t-3xl"
                />
              </div>
              <button className="btn-primary mb-4">Special Occasions</button>
              <p className="text-white text-lg leading-relaxed">
                Life is full of reasons to celebrate, and we're here to make each one unforgettable. Birthdays, anniversaries, retirements, or just because - no matter the occasion, we bring joy and creativity to your special day.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <button className="btn-primary">
              <span className="underline">Packages</span>
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Updated company name */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-charcoal font-seasons">Portfolio</h2>
            <p className="section-subtitle text-charcoal">
              Our Work Speaks for Itself: A Gallery of Celebrated Events
            </p>
            <div className="space-y-4 text-charcoal max-w-4xl mx-auto">
              <p className="text-xl">
                Delve into the world of events we've crafted and draw inspiration for your own celebration.
              </p>
              <p className="text-lg">
                Our portfolio is a testament to our passion for event planning and our commitment to our clients. Each image in this gallery is a story of a dream turned into reality, showcasing our ability to cater to a diverse range of styles and preferences.
              </p>
            </div>
          </div>
          
          {/* Wedding Elegance */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <button className="btn-outline mb-4">Wedding Elegance</button>
              <p className="text-charcoal text-lg">
                From rustic countryside affairs to elegant urban celebrations, these photos highlight our versatility in creating the perfect ambiance for your big day.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/887e9b1f2d60acec8b281b4812697848dfdd36ca?width=762" alt="Wedding 1" className="w-full h-80 object-cover rounded-lg" />
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/5adcd9b9eb4290f52280475a27c8afe65cc4fe38?width=762" alt="Wedding 2" className="w-full h-80 object-cover rounded-lg" />
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/811a8c00e392b6f5e0eb11c240d849489fa5061f?width=762" alt="Wedding 3" className="w-full h-80 object-cover rounded-lg" />
            </div>
          </div>
          
          {/* Corporate Chic */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <button className="btn-outline mb-4">Corporate Chic</button>
              <p className="text-charcoal text-lg">
                See how we transform business meetings and conferences into engaging, sophisticated experiences.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/743b4df08a9cf019c1b2e573b91586c30087e0f7?width=762" alt="Corporate 1" className="w-full h-80 object-cover rounded-lg" />
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/48aa7868df75dee1dc399ed38f83e081873f254b?width=762" alt="Corporate 2" className="w-full h-80 object-cover rounded-lg" />
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/a90f80468ef4c92c8fcf245b67dffa3362d7f882?width=762" alt="Corporate 3" className="w-full h-80 object-cover rounded-lg" />
            </div>
          </div>
          
          {/* Celebration Highlights */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <button className="btn-outline mb-4">Celebration Highlights</button>
              <p className="text-charcoal text-lg">
                Whether it's a milestone birthday or a golden anniversary, these images showcase how we infuse fun, flair, and finesse into every special occasion.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/0a284239772719e6828bfd38af23ce2a75be9d4e?width=762" alt="Celebration 1" className="w-full h-80 object-cover rounded-lg" />
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/f2af3ea5b53419d88014c21866f1a816b0cd6b91?width=762" alt="Celebration 2" className="w-full h-80 object-cover rounded-lg" />
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/966991b8558bf114a5c7cfcb3c7f84d3ec7266fc?width=762" alt="Celebration 3" className="w-full h-80 object-cover rounded-lg" />
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-charcoal text-lg max-w-4xl mx-auto">
              Each event we plan is a unique journey, and this portfolio is just a glimpse into the possibilities that await with Casaluce Events. Let these moments inspire you, and imagine what we can create together for your next event.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section - Updated company name */}
      <section className="bg-sage py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-white font-seasons">How We Work</h2>
            <p className="section-subtitle text-white">
              Your Event Planning Journey with Us: From Vision to Victory
            </p>
            <p className="text-lg text-white max-w-4xl mx-auto">
              Embarking on an event planning journey with Casaluce Events is a seamless and enjoyable experience. Here's how we collaborate with you at every step:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center text-white">
              <button className="btn-primary mb-6">Free Consultation</button>
              <p className="text-lg leading-relaxed">
                Your journey begins with a complimentary 15-minute consultation. This is where we listen to your ideas, understand your vision, and discuss how we can bring it to life.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center text-white">
              <button className="btn-primary mb-6">Detailed Planning</button>
              <p className="text-lg leading-relaxed">
                Following our initial meeting, we develop a comprehensive plan covering every aspect of your event. This includes venue selection, theme development, vendor management, and logistics planning. We keep you informed and involved at every stage.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center text-white">
              <button className="btn-primary mb-6">Event Day Coordination</button>
              <p className="text-lg leading-relaxed">
                When your big day arrives, our team is on the ground, working diligently to ensure everything unfolds seamlessly. From managing vendors to handling any last-minute adjustments, we're there to guarantee your event is executed flawlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Background Section */}
      <section className="bg-sage h-96">
        <div 
          className="h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/3f8121e4857ecd7cfe777c79cfcdb825cd6fed2a?width=2789')`
          }}
        ></div>
      </section>

      {/* Pricing & Packages Section - Updated to match Figma design */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-light mb-6 text-charcoal font-seasons">
              Pricing & Packages
            </h2>
            <p className="section-subtitle text-charcoal">
              Customized Options for Every Event and Every Budget
            </p>
            <p className="text-lg text-charcoal max-w-4xl mx-auto mb-12">
              At Casaluce Events, we understand that every event is as unique as the individuals hosting it. That's why our pricing is as personalized as our event planning services. Here's how we work together to determine the perfect package for your needs:
            </p>
          </div>
          
          {/* Three main packages with rounded shapes */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Essential Package */}
            <div className="text-center relative">
              <div className="relative w-full h-[500px] mb-8">
                <svg viewBox="0 0 325 461" className="w-full h-full">
                  <path d="M162.584 1.34473C180.995 1.34473 198.713 4.99519 215.042 11.4863C215.259 11.6039 215.469 11.6652 215.625 11.7109C215.805 11.7633 215.922 11.7999 216.035 11.8662L216.064 11.8828L216.093 11.8955C276.958 37.6735 321.966 105.446 323.515 184.906L323.543 186.786V460.398H1.45239V186.989C2.32238 106.105 46.8639 37.4708 108.897 12.1016L108.896 12.1006C125.357 5.60372 144.178 1.3448 162.584 1.34473Z" stroke="#454648" fill="none"/>
                </svg>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-light mb-3 text-charcoal font-seasons">Essential Package</h3>
                  <p className="text-charcoal leading-relaxed text-xs">
                    Ideal for clients seeking support with fundamental aspects of event planning. This package includes venue selection assistance, vendor recommendations, and day-of coordination.
                  </p>
                </div>
              </div>
            </div>

            {/* Premium Package - removed image */}
            <div className="text-center relative">
              <div className="relative w-full h-[500px] mb-8">
                <svg viewBox="0 0 324 461" className="w-full h-full">
                  <path d="M162.086 1.34473C180.497 1.34473 198.215 4.99519 214.544 11.4863C214.761 11.6039 214.971 11.6652 215.127 11.7109C215.307 11.7633 215.424 11.7999 215.538 11.8662L215.566 11.8828L215.595 11.8955C276.46 37.6735 321.468 105.446 323.017 184.906L323.045 186.786V460.398H0.95459V186.989C1.82457 106.105 46.3661 37.4708 108.399 12.1016L108.398 12.1006C124.859 5.60372 143.68 1.3448 162.086 1.34473Z" stroke="#454648" fill="none"/>
                </svg>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-light mb-3 text-charcoal font-seasons">Premium Package</h3>
                  <p className="text-charcoal leading-relaxed text-xs">
                    Our most popular choice, designed for a comprehensive event planning experience. It encompasses all offerings in the Essentials Package, plus additional services like design and decor consultation, entertainment arrangements, and more.
                  </p>
                </div>
              </div>
            </div>

            {/* Luxury Experience */}
            <div className="text-center relative">
              <div className="relative w-full h-[500px] mb-8">
                <svg viewBox="0 0 325 461" className="w-full h-full">
                  <path d="M162.589 1.34473C180.999 1.34473 198.717 4.99519 215.047 11.4863C215.264 11.6039 215.473 11.6652 215.63 11.7109C215.809 11.7633 215.926 11.7999 216.04 11.8662L216.068 11.8828L216.098 11.8955C276.963 37.6735 321.97 105.446 323.52 184.906L323.548 186.786V460.398H1.45703V186.989C2.32701 106.105 46.8685 37.4708 108.901 12.1016L108.9 12.1006C125.362 5.60372 144.182 1.3448 162.589 1.34473Z" stroke="#454648" fill="none"/>
                </svg>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-light mb-3 text-charcoal font-seasons">Luxury Experience</h3>
                  <p className="text-charcoal leading-relaxed text-xs">
                    For the ultimate in event planning, this package provides everything in the Premium Package, along with exclusive access to top-tier vendors, bespoke design services, and a dedicated event management team.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h3 className="text-xl uppercase tracking-widest text-center mb-8 text-charcoal">
              Getting to Your Personalized Quote:
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="bg-white border border-gray-400 p-6 h-48 flex flex-col justify-center">
                  <h4 className="text-lg uppercase tracking-wide mb-4 text-charcoal">Initial Consultation</h4>
                  <p className="text-charcoal">
                    Start with our complimentary 15-minute consultation. Here, we'll discuss your event vision, requirements, and preferences.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="text-center">
                <div className="bg-white border border-gray-400 p-6 h-48 flex flex-col justify-center">
                  <h4 className="text-lg uppercase tracking-wide mb-4 text-charcoal">Understanding Your Needs</h4>
                  <p className="text-charcoal">
                    Based on our initial consultation, we'll gather information about the size, scope, and complexity of your event.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="text-center">
                <div className="bg-white border border-gray-400 p-6 h-48 flex flex-col justify-center">
                  <h4 className="text-lg uppercase tracking-wide mb-4 text-charcoal">Customized Proposal</h4>
                  <p className="text-charcoal">
                    We will then create a customized proposal for you, outlining the services that best fit your event's requirements and your budget.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Additional Steps in 3 columns with image in the middle */}
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Step 4 */}
              <div className="text-center">
                <div className="bg-white border border-gray-400 p-6 h-32 flex flex-col justify-center">
                  <h4 className="text-lg uppercase tracking-wide mb-4 text-charcoal">Flexible Adjustments</h4>
                  <p className="text-charcoal text-sm">
                    We understand that plans can evolve. Our proposals are flexible, and we're happy to adjust the scope of services to better suit your changing needs and budget.
                  </p>
                </div>
              </div>

              {/* Premium Package Image - centered between columns */}
              <div className="text-center">
                <div className="bg-white border border-gray-400 p-6 h-32 flex flex-col justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/6ffafc40fc229a4a052fcaf8f37c8ca8e07b5a94?width=646"
                    alt="Premium package highlight"
                    className="w-16 h-16 mx-auto object-cover"
                  />
                </div>
              </div>

              {/* Step 5 */}
              <div className="text-center">
                <div className="bg-white border border-gray-400 p-6 h-32 flex flex-col justify-center">
                  <h4 className="text-lg uppercase tracking-wide mb-4 text-charcoal">Transparent Pricing Philosophy</h4>
                  <p className="text-charcoal text-sm">
                    Our pricing model is built on transparency. You will receive a clear, itemized breakdown of all costs, ensuring you understand exactly what you're paying for.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div 
              className="bg-cover bg-center py-16 px-8 rounded-lg relative"
              style={{
                backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/3cd30b5b4311ad00aebae57d82bdcdfaa05274a6?width=2208')`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
              <div className="relative z-10">
                <p className="text-white text-xl mb-6">
                  Ready to Get Started?<br />
                  Schedule your free consultation and receive your personalized event planning proposal.
                </p>
                <button className="btn-primary">
                  <span className="underline">Contact Us</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Updated company name */}
      <section className="bg-brown py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/640caa69b0991497c531da48bf9e6a6b24d72f06?width=706" alt="Happy client 1" className="w-full h-64 object-cover rounded-lg" />
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/8d1b78e6f683aae13d577b5af00f5af20c97890e?width=706" alt="Happy client 2" className="w-full h-64 object-cover rounded-lg" />
              <div className="col-span-2">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/edb38ef5ac318ea8eaf0719a11bb81671c3e2c86?width=1432" alt="Happy clients" className="w-full h-64 object-cover rounded-lg" />
              </div>
            </div>
            
            <div className="text-white">
              <h2 className="section-title text-white font-seasons mb-8">Happy Clients</h2>
              <p className="section-subtitle text-white mb-8">
                What They're Saying: Testimonials that Speak Volumes
              </p>
              <p className="text-lg mb-8">
                At Casaluce Events, our clients' satisfaction is the heartbeat of our business. Here are some of the kind words shared by those who have experienced our services:
              </p>
              
              <div className="space-y-8">
                <div>
                  <p className="text-lg italic mb-4">
                    "Casaluce Events transformed our wedding into a fairytale. Every detail was taken care of, leaving us to simply enjoy our day. We couldn't have asked for more!"
                  </p>
                  <p className="text-sm uppercase tracking-widest">-CLIENT NAME</p>
                  <hr className="border-white my-4 w-32" />
                </div>
                
                <div>
                  <p className="text-lg italic mb-4">
                    "The professionalism and creativity Casaluce Events brought to our annual conference were outstanding. From planning to execution, everything was flawless."
                  </p>
                  <p className="text-sm uppercase tracking-widest">-CLIENT NAME</p>
                  <hr className="border-white my-4 w-32" />
                </div>
                
                <div>
                  <p className="text-lg italic mb-4">
                    "Thanks to Casaluce Events, our family reunion was an absolute joy. The attention to detail and personal touches made it a day we will always cherish."
                  </p>
                  <p className="text-sm uppercase tracking-widest">-CLIENT NAME</p>
                </div>
              </div>
              
              <p className="text-lg mt-8">
                These testimonials are just a snapshot of the happy memories we've helped create. We're excited to add your story to our collection of satisfied clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Fixed to match Figma design with images */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-light mb-6 text-charcoal font-seasons">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="section-subtitle text-charcoal">
              All You Need to Know About Our Event Planning Services
            </p>
          </div>
          
          <div className="space-y-12">
            {/* First Question - Full width with left image */}
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/8b7e289ce91efbbe641f2c2f709509a79da8e3fd?width=839" 
                  alt="FAQ Image 1" 
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
              <div className="lg:col-span-3 border border-gray-400 p-6">
                <h3 className="text-lg font-bold mb-3 text-charcoal">Q: How early should I contact you to start planning my event?</h3>
                <p className="text-charcoal leading-relaxed">
                  A: Ideally, we recommend reaching out at least [X months] before your event. This timeframe allows us to secure the best venues and vendors, and to plan each detail meticulously. However, we can also accommodate shorter timelines depending on the complexity and scale of your event.
                </p>
              </div>
            </div>
            
            {/* Two Questions Side by Side */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-400 p-6">
                <h3 className="text-lg font-bold mb-3 text-charcoal">Q: Can you work with my specific budget?</h3>
                <p className="text-charcoal leading-relaxed">
                  A: Absolutely! We believe every event can be beautiful, regardless of budget size. During our initial consultation, we'll discuss your budget and tailor our services to match it.
                </p>
              </div>
              
              <div className="border border-gray-400 p-6">
                <h3 className="text-lg font-bold mb-3 text-charcoal">Q: Do you handle destination events?</h3>
                <p className="text-charcoal leading-relaxed">
                  A: Yes, we do! We are equipped to plan and manage events at both local and destination venues. Our team can handle the complexities of a destination event.
                </p>
              </div>
            </div>
            
            {/* Second Image Question - Right side image */}
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3 border border-gray-400 p-6">
                <h3 className="text-lg font-bold mb-3 text-charcoal">Q: What types of events do you specialize in?</h3>
                <p className="text-charcoal leading-relaxed">
                  A: We specialize in a wide range of events including weddings, corporate events, private parties, birthdays, anniversaries, and more. Each event is unique, and we tailor our services to meet the specific needs and style of each occasion.
                </p>
              </div>
              <div className="lg:col-span-1">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/59cccaa3238ee3bc607f64bce3b2b5c047379a9c?width=839" 
                  alt="FAQ Image 2" 
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Two More Questions Side by Side */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-400 p-6">
                <h3 className="text-lg font-bold mb-3 text-charcoal">Q: How do you select vendors for my event?</h3>
                <p className="text-charcoal leading-relaxed">
                  A: We have a curated list of trusted vendors known for their quality and reliability. We select vendors based on your event's specific needs and preferences.
                </p>
              </div>
              
              <div className="border border-gray-400 p-6">
                <h3 className="text-lg font-bold mb-3 text-charcoal">Q: What happens if there are unexpected issues on the day of the event?</h3>
                <p className="text-charcoal leading-relaxed">
                  A: As experienced event planners, we are well-prepared to handle unexpected issues. We always have contingency plans in place.
                </p>
              </div>
            </div>
            
            {/* Third Image Question - Left side image */}
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/5d48b1e56bfb2f679484c6d71c6c9f849c517860?width=839" 
                  alt="FAQ Image 3" 
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
              <div className="lg:col-span-3 border border-gray-400 p-6">
                <h3 className="text-lg font-bold mb-3 text-charcoal">Q: Can I be involved in the planning process?</h3>
                <p className="text-charcoal leading-relaxed">
                  A: Definitely! We encourage your involvement as much as you wish. Your input is valuable in making your event truly reflective of your taste and style. We provide regular updates and check-ins to ensure we are aligned with your vision.
                </p>
              </div>
            </div>
            
            {/* Final Question - Right side image */}
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3 border border-gray-400 p-6">
                <h3 className="text-lg font-bold mb-3 text-charcoal">Q: Can you accommodate special dietary requirements for catering?</h3>
                <p className="text-charcoal leading-relaxed">
                  A: Yes, we work closely with caterers who can accommodate a variety of dietary requirements, including vegetarian, vegan, gluten-free, kosher, halal, and any allergies. Let us know your needs, and we will ensure they are met.
                </p>
              </div>
              <div className="lg:col-span-1">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/fbc4734a8e8d964fc9aba2d30938c0bc133c695a?width=839" 
                  alt="FAQ Image 4" 
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section - Updated to match Figma design */}
      <section className="bg-sage py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-white font-seasons mb-8">Get in Touch</h2>
            <p className="section-subtitle text-white mb-8">
              Let's Make Your Event Unforgettable
            </p>
            <p className="text-lg text-white mb-8 max-w-4xl mx-auto">
              We'd love to hear about your event and how we can help make it amazing.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-sage" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span className="text-lg">1234-567-890</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-sage" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="text-lg">info@youremail.com</span>
              </div>
            </div>
            
            <div className="bg-cream p-8 rounded-lg">
              <h3 className="text-xl uppercase tracking-widest text-center mb-8 text-charcoal">Contact Us</h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-charcoal mb-2">Name</label>
                  <input type="text" className="w-full border border-gray-400 p-3 bg-transparent focus:outline-none focus:border-brown" />
                </div>
                
                <div>
                  <label className="block text-xs uppercase tracking-widest text-charcoal mb-2">Email</label>
                  <input type="email" className="w-full border border-gray-400 p-3 bg-transparent focus:outline-none focus:border-brown" />
                </div>
                
                <div>
                  <label className="block text-xs uppercase tracking-widest text-charcoal mb-2">Message</label>
                  <textarea rows="4" className="w-full border border-gray-400 p-3 bg-transparent focus:outline-none focus:border-brown resize-none"></textarea>
                </div>
                
                <button type="submit" className="btn-outline w-full">
                  Send Message
                </button>
              </form>
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
                <p className="text-white text-sm uppercase tracking-widest">
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
            <p className="text-white text-sm leading-relaxed">
              <span className="font-bold">Disclaimer:</span> The content provided in this template is for informational and example purposes only. It is your responsibility to customize this material to fit your specific needs and comply with any applicable laws, regulations, or guidelines. We recommend consulting with qualified professionals for any legal, ethical, or specialized advice. Use this template at your own risk, and always perform your own due diligence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
