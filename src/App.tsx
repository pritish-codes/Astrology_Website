import React, { useState } from 'react';
import { Moon, Sun, Stars, Clock, Phone, Mail, Star, Award, Users, BookOpen } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const zodiacSigns = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 text-amber-900">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Moon className="text-amber-600" />
            <span className="text-2xl font-semibold text-amber-800">AstroGuruji</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-amber-900 hover:text-amber-600 transition-colors">Services</a>
            <a href="#about" className="text-amber-900 hover:text-amber-600 transition-colors">About</a>
            <a href="#contact" className="text-amber-900 hover:text-amber-600 transition-colors">Contact</a>
          </div>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full transition-colors">
            Book Consultation
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-pulse inline-block mb-6">
            <Stars className="w-16 h-16 text-amber-600" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 text-transparent bg-clip-text">
            <Typewriter
              options={{
                strings: ['Discover Your Cosmic Path', 'Unlock Your Destiny', 'Find Your True Purpose'],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </h1>
          <p className="text-xl md:text-2xl text-amber-800/80 mb-12 max-w-3xl mx-auto">
            Unlock the secrets of your destiny through ancient Vedic astrology and cosmic guidance
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-amber-700 hover:to-amber-800 transition-all transform hover:scale-105">
              Free Consultation
            </button>
            <button className="border-2 border-amber-600 text-amber-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-600/10 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-amber-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sun className="w-12 h-12" />,
                title: "Birth Chart Analysis",
                description: "Detailed analysis of your birth chart to reveal your life path"
              },
              {
                icon: <Moon className="w-12 h-12" />,
                title: "Relationship Compatibility",
                description: "Find harmony in relationships through astrological guidance"
              },
              {
                icon: <Star className="w-12 h-12" />,
                title: "Career Guidance",
                description: "Navigate your professional path with cosmic insights"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-2">
                <div className="text-amber-600 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-amber-800">{service.title}</h3>
                <p className="text-amber-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                className="absolute inset-0 bg-amber-600/10 rounded-3xl"
                initial={{ rotate: 0 }}
                whileInView={{ rotate: 3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              ></motion.div>
              <img 
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800"
                alt="Pandit Rajesh Kumar"
                className="relative z-10 rounded-3xl shadow-xl w-full object-cover aspect-[4/5]"
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg z-20"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex gap-4">
                  <div className="text-center px-4 border-r border-amber-200">
                    <p className="text-3xl font-bold text-amber-700">25+</p>
                    <p className="text-sm text-amber-600">Years</p>
                  </div>
                  <div className="text-center px-4">
                    <p className="text-3xl font-bold text-amber-700">10k+</p>
                    <p className="text-sm text-amber-600">Clients</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="lg:pl-12"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold mb-6 text-amber-800">Meet Pandit Rajesh Kumar</h2>
                <p className="text-lg text-amber-700 mb-8">
                  With over 25 years of experience in Vedic astrology, Pandit Rajesh Kumar has guided thousands of individuals towards their true path. His deep understanding of ancient scriptures combined with modern astrological techniques makes him one of India's most sought-after astrologers.
                </p>
              </motion.div>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform">
                  <Award className="w-8 h-8 text-amber-600 mb-3" />
                  <h3 className="font-semibold text-amber-800">Certified Expert</h3>
                  <p className="text-amber-600 text-sm">Internationally recognized</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform">
                  <Users className="w-8 h-8 text-amber-600 mb-3" />
                  <h3 className="font-semibold text-amber-800">10,000+ Clients</h3>
                  <p className="text-amber-600 text-sm">Worldwide consultations</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform">
                  <BookOpen className="w-8 h-8 text-amber-600 mb-3" />
                  <h3 className="font-semibold text-amber-800">Published Author</h3>
                  <p className="text-amber-600 text-sm">5 books on astrology</p>
                </div>
              </motion.div>
              <motion.button 
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all inline-flex items-center gap-2"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                Book a Personal Consultation
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Zodiac Signs */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 text-amber-800">Zodiac Signs</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {zodiacSigns.map((sign, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer hover:bg-amber-50">
                <p className="text-lg font-medium text-amber-700">{sign}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Contact Section */}
<section
  id="contact"
  className="relative py-20 px-6 bg-gradient-to-br from-white via-white/70 to-white/50"
>
  {/* Optional decorative element behind the form */}
  <div className="absolute inset-0 bg-[url('/path-to-pattern.svg')] bg-center bg-cover opacity-5 pointer-events-none" />

  <div className="relative container mx-auto">
    <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-2xl ring-1 ring-amber-100">
      <h2 className="text-4xl font-bold text-center mb-12 text-amber-800 drop-shadow">
        Connect With Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Clock className="text-2xl text-amber-600" />
            <div>
              <h3 className="font-semibold text-amber-800">Consultation Hours</h3>
              <p className="text-amber-700">10:00 AM - 7:00 PM IST</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-2xl text-amber-600" />
            <div>
              <h3 className="font-semibold text-amber-800">Phone</h3>
              <p className="text-amber-700">+91 98765 43210</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="text-2xl text-amber-600" />
            <div>
              <h3 className="font-semibold text-amber-800">Email</h3>
              <p className="text-amber-700">contact@astroguruji.com</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-amber-700 mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600 text-amber-900 placeholder-amber-400 transition-colors"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-amber-700 mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600 text-amber-900 placeholder-amber-400 transition-colors"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-amber-700 mb-2"
            >
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600 text-amber-900 placeholder-amber-400 transition-colors"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="border-t border-amber-200 pt-6 mt-6">
            <p className="text-sm text-amber-600 mb-4 italic">
              Providing your birth details allows us to offer more personalized
              and accurate insights.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="dateOfBirth"
                  className="block text-sm font-medium text-amber-700 mb-2"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600 text-amber-900 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="timeOfBirth"
                  className="block text-sm font-medium text-amber-700 mb-2"
                >
                  Time of Birth
                </label>
                <input
                  type="time"
                  id="timeOfBirth"
                  name="timeOfBirth"
                  value={formData.timeOfBirth}
                  onChange={handleInputChange}
                  className="w-full bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600 text-amber-900 transition-colors"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="placeOfBirth"
                className="block text-sm font-medium text-amber-700 mb-2"
              >
                Place of Birth
              </label>
              <input
                type="text"
                id="placeOfBirth"
                name="placeOfBirth"
                value={formData.placeOfBirth}
                onChange={handleInputChange}
                className="w-full bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600 text-amber-900 placeholder-amber-400 transition-colors"
                placeholder="City, State/Country"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-amber-700 mb-2"
            >
              What would you like guidance on?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600 text-amber-900 placeholder-amber-400 transition-colors"
              placeholder="Share your concerns or questions..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-amber-50 py-8 px-6 border-t border-amber-200">
        <div className="container mx-auto text-center text-amber-600">
          <p>© 2025 AstroGuruji. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;