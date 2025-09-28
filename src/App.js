import React, { useState, useEffect } from "react";
import banner1 from "./assets/banner1.png";
import banner2 from "./assets/banner2.jpeg";
import banner3 from "./assets/banner3.jpeg";
import speakingImg from "./assets/speakingImg.jpeg";
import mockImg from "./assets/mockImg.jpeg";
import aiImg from "./assets/aiImg.jpeg";
import mentorImg from "./assets/mentorImg.jpeg";
import midbanner from "./assets/midbanner.png";
import contactus from "./assets/contactus.png";
import './index.css';

// Navbar
function Navbar({ onLoginClick, onSignupClick }) {
  return (
    <nav className="flex justify-between items-center p-5 bg-blue-600 text-white fixed w-full top-0 z-50">
      {/* Left Menu */}
     {/* Explore Dropdown */}
<div className="relative group">
  <button className="hover:text-yellow-300 text-2xl font-semibold">
    Explore ▾
  </button>
  <ul className="absolute hidden group-hover:block bg-white text-blue-600 mt-2 rounded-lg shadow-lg w-40">
    <li>
      <a
        href="#home"
        className="block px-4 py-2 hover:bg-blue-600 hover:text-white rounded-t-lg"
      >
        Home
      </a>
    </li>
    <li>
      <a
        href="#about"
        className="block px-4 py-2 hover:bg-blue-600 hover:text-white"
      >
        About
      </a>
    </li>
    <li>
      <a
        href="#features"
        className="block px-4 py-2 hover:bg-blue-600 hover:text-white"
      >
        Courses
      </a>
    </li>
    <li>
      <a
        href="#testimonials"
        className="block px-4 py-2 hover:bg-blue-600 hover:text-white"
      >
        Testimonials
      </a>
    </li>
    <li>
      <a
        href="#contact"
        className="block px-4 py-2 hover:bg-blue-600 hover:text-white rounded-b-lg"
      >
        Contact
      </a>
    </li>
  </ul>
</div>


      {/* Academy Name Center */}
      <h1 className="text-4xl font-bold text-white absolute left-1/2 transform -translate-x-1/2">
        IELTS Academy
      </h1>

      {/* Right Auth Buttons */}
      <div className="flex gap-4">
        <button
          onClick={onLoginClick}
          className="px-4 py-2 border border-white rounded hover:bg-white hover:text-blue-600 transition"
        >
          Login
        </button>
        <button
          onClick={onSignupClick}
          className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-200 transition"
        >
          Signup
        </button>
      </div>
    </nav>
  );
}

// Hero with Carousel
function Hero() {
 const banners = [banner1, banner2, banner3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % banners.length),
      3000
    );
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between px-8 pt-32 pb-16 bg-gray-100"
    >
      <div className="max-w-lg">
        <h1 className="text-6xl font-bold mb-4 text-blue-700">
          Crack IELTS with Confidence!
        </h1>
        <p className="mb-6 text-gray-700 ">
          Join 10,000+ students improving their English and achieving dream
          scores with expert mentorship.
        </p>
        <a href="#features">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </a>
      </div>

      {/* Carousel */}
      <div className="relative w-full md:w-1/2 mt-8 md:mt-0">
        <img
          src={banners[current]}
          alt="Banner"
          className="w-full rounded-lg shadow-lg transition-all duration-700"
        />
        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
          {banners.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                current === index ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
// About
function About() {
  return (
    <section id="about" className="px-8 py-16 bg-white text-center">
      <h3 className="text-5xl font-bold mb-6">About IELTS Academy</h3>
      <p className="max-w-5xl mx-auto text-gray-600">
       At IELTS Academy, we focus on personalized learning, practice-driven methods, and advanced AI tools to help students achieve their dream IELTS score. Our courses are designed to cater to learners of all levels, from beginners to advanced, ensuring that every student receives tailored guidance. With expert mentors who have years of experience in IELTS coaching, we provide strategies, tips, and feedback that directly target your strengths and areas for improvement
      </p>
    </section>
  );
}


// Features
function Features() {
  const features = [
    {
      title: "Speaking Practice",
      desc: "Improve fluency and pronunciation with live interactive sessions, one-on-one coaching, and personalized feedback to boost your confidence in real exam scenarios.",
      img: speakingImg,
    },
    {
      title: "Mock Tests",
      desc: "Simulate the real IELTS exam environment with timed mock tests, instant scoring, detailed analysis, and expert tips to identify and improve weak areas.",
      img: mockImg,
    },
    {
      title: "AI Band Score",
      desc: "Receive instant AI-generated band score evaluations, highlighting your strengths and areas for improvement, and helping you focus on achieving higher scores efficiently.",
      img: aiImg,
    },
    {
      title: "Expert Mentorship",
      desc: "Learn from certified IELTS trainers with years of experience. Get guidance on strategies, test techniques, and personalized study plans to achieve your target band score.",
      img: mentorImg,
    },
  ];

  return (
    <section id="features" className="px-8 py-16 text-center">
      <h3 className="text-5xl font-bold mb-10">Why Choose Us?</h3>
      <div className="grid md:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="card p-6 border rounded-lg shadow hover:shadow-lg transition flex flex-col items-center"
          >
            <img
              src={f.img}
              alt={f.title}
              className="w-20 h-20 mb-4 object-contain"
            />
            <h4 className="font-semibold text-xl text-blue-600 mb-2">
              {f.title}
            </h4>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
function MidBanner() {
  return (
    <section className="px-8 py-16 flex justify-center">
      <img src={midbanner} alt="Banner" className="w-full max-w-12xl rounded-lg shadow-lg" />
    </section>
  );
}
// FAQ / Info Section
function InfoSection() {
  const faqs = [
    {
      question: "What level do I need to attend IELTS Coach classes?",
      answer: "We recommend all students to be CEFR B1 level and above.",
    },
    {
      question: "Is IELTS coach recommended for the Academic or the General IELTS test?",
      answer: "With IELTS coach you can prepare for both versions of the IELTS test.",
    },
    {
      question: "How long is a class?",
      answer: "Private classes have a duration of 25 mins and cost 2 credits. Group classes have a duration of 55 mins and cost 1 credit.",
    },
  ];

  return (
    <section className="px-8 py-16 bg-white text-center" id="faq">
      <h3 className="text-3xl font-bold mb-10">Want to know more?</h3>
      <div className="max-w-3xl mx-auto flex flex-col gap-6 text-left">
        {faqs.map((faq, i) => (
          <div key={i} className="border-l-4 border-blue-600 pl-4 py-2">
            <h4 className="font-semibold text-xl text-blue-600 mb-1">{faq.question}</h4>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}



// Testimonials
function Testimonials() {
  const reviews = [
    { 
      name: "Riya Sharma", 
      text: "Thanks to IELTS Academy, I scored 8.0 in IELTS! The speaking practice sessions really boosted my confidence.",
      avatar: "https://i.pravatar.cc/100?img=1",
      rating: 5,
    },
    { 
      name: "Arjun Mehta", 
      text: "Amazing mentors and mock tests helped me a lot. The AI feedback helped me pinpoint exactly where I needed to improve.",
      avatar: "https://i.pravatar.cc/100?img=2",
      rating: 5,
    },
    { 
      name: "Sneha Verma", 
      text: "The AI Band Score feedback was so helpful for improvement. I could track my progress and understand my mistakes clearly.",
      avatar: "https://i.pravatar.cc/100?img=3",
      rating: 4,
    },
    { 
      name: "Rahul Singh", 
      text: "Best institute for IELTS prep, highly recommend! The personalized mentorship made a huge difference in my preparation.",
      avatar: "https://i.pravatar.cc/100?img=4",
      rating: 5,
    },
    { 
      name: "Ananya Gupta", 
      text: "I loved the combination of live sessions, practice tests, and AI scoring. It made my preparation efficient and focused.",
      avatar: "https://i.pravatar.cc/100?img=5",
      rating: 4,
    },
    { 
      name: "Vikram Joshi", 
      text: "The platform is very user-friendly. I could practice anytime and the expert tips really helped me improve my reading and writing scores.",
      avatar: "https://i.pravatar.cc/100?img=6",
      rating: 5,
    },
  ];

  // Generate star icons
  const Star = ({ filled }) => (
    <svg
      className={`w-4 h-4 ${filled ? "text-yellow-400" : "text-gray-300"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.21c.969 0 1.371 1.24.588 1.81l-3.404 2.474a1 1 0 00-.364 1.118l1.287 3.975c.3.922-.755 1.688-1.54 1.118l-3.404-2.473a1 1 0 00-1.176 0L5.034 16.99c-.784.57-1.838-.196-1.539-1.118l1.286-3.975a1 1 0 00-.364-1.118L1.013 9.402c-.783-.57-.38-1.81.588-1.81h4.21a1 1 0 00.95-.69l1.288-3.975z" />
    </svg>
  );

  return (
    <section id="testimonials" className="px-8 py-16 bg-gray-100 text-center">
      <h3 className="text-3xl font-bold mb-10">What Our Students Say</h3>

      {/* Scrollable container */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 snap-x snap-mandatory">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="testimonial p-6 bg-white rounded-lg shadow min-w-[280px] md:min-w-[400px] snap-center flex flex-col items-center"
            >
              <img
                src={r.avatar}
                alt={r.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <p className="italic text-gray-700 mb-2">“{r.text}”</p>
              <h5 className="font-semibold text-blue-700">{r.name}</h5>

              {/* Stars */}
              <div className="flex gap-1 mt-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star key={n} filled={n <= r.rating} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Small hint */}
      <p className="mt-4 text-gray-500 text-sm">← Swipe to see more →</p>
    </section>
  );
}
function SupportBanner({ onContactClick }) {
  return (
    <section
      className="px-8 py-24 bg-cover bg-center text-white relative flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${contactus})` }} 
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

      <div className="relative text-center max-w-2xl z-10">
        <h3 className="text-6xl font-bold text-white mb-4">We are here to help</h3>
        <p className="mb-6 text-lg">
          In a chatty mood? Get in touch with our Customer Support Team with any questions you may have.
        </p>
        <button 
          onClick={onContactClick}
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
}



// Footer with functional Newsletter and custom background
function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Here you can also add API call to save the email
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 5000); // Hide success after 5 seconds
    }
  };

  return (
    <footer
      className="text-white px-8 py-12"
      style={{ backgroundColor: "#23085A" }} // Custom background color
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* About / Logo */}
        <div>
          <h2 className="text-2xl text-white font-bold mb-4">IELTS Academy</h2>
          <p className="text-gray-200">
            Helping students achieve their dream IELTS score with expert guidance, AI tools, and personalized mentorship.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#features" className="hover:underline">Courses</a></li>
            <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact / Newsletter / Social */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Stay Updated</h3>
          <p className="mb-2">Subscribe to our newsletter for latest updates:</p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded text-black flex-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 text-blue-600 px-4 py-2 rounded hover:bg-yellow-300 transition"
            >
              Subscribe
            </button>
          </form>

          {submitted && (
            <p className="mt-2 text-green-200 font-semibold">
              Thank you for subscribing!
            </p>
          )}

          <p className="mt-4">Contact Us:</p>
          <p>Email: <a href="mailto:info@ieltsacademy.com" className="hover:underline">info@ieltsacademy.com</a></p>
          <p>Phone: <a href="tel:+919876543210" className="hover:underline">+91-9876543210</a></p>

          <p className="mt-4">Follow us:</p>
          <div className="flex gap-4 mt-2">
            <a href="https://ieltsacademy.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">🌐</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">📘</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">🐦</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">📸</a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-300">
        © 2025 IELTS Academy. All rights reserved.
      </div>
    </footer>
  );
}



// Modal Component
function Modal({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-lg p-8 w-96 relative shadow-lg">
        <button
          className="absolute top-2 right-3 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
        {children}
      </div>
    </div>
  );
}

// App
function App() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="App">
      <Navbar onLoginClick={() => setLoginOpen(true)} onSignupClick={() => setSignupOpen(true)} />
      <Hero />
      <About />
      <Features />
      <MidBanner />
      <InfoSection /> 
      <Testimonials />
      <SupportBanner onContactClick={() => setContactOpen(true)} />
      <Footer />

      {/* Login Modal */}
      {loginOpen && (
        <Modal title="Login" onClose={() => setLoginOpen(false)}>
          <form className="flex flex-col gap-4">
            <input type="email" placeholder="Email" className="border p-2 rounded" required />
            <input type="password" placeholder="Password" className="border p-2 rounded" required />
            <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Login</button>
          </form>
        </Modal>
      )}

      {/* Signup Modal */}
      {signupOpen && (
        <Modal title="Signup" onClose={() => setSignupOpen(false)}>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Full Name" className="border p-2 rounded" required />
            <input type="email" placeholder="Email" className="border p-2 rounded" required />
            <input type="password" placeholder="Password" className="border p-2 rounded" required />
            <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Signup</button>
          </form>
        </Modal>
         )}

           {/* Contact Modal */}
      {contactOpen && <Modal title="Contact Us" onClose={() => setContactOpen(false)}>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Full Name" className="border p-2 rounded" required />
          <input type="email" placeholder="Email" className="border p-2 rounded" required />
          <textarea placeholder="Your Message" className="border p-2 rounded" rows={4} required></textarea>
          <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Send Message</button>
        </form>
      </Modal>}
    </div>
  );
}
   

export default App;
