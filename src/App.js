import React, { useState, useEffect } from "react";
import banner1 from "./assets/banner1.jpg";
import banner2 from "./assets/banner3.jpg";
import banner3 from "./assets/banner4.jpg";
import speakingImg from "./assets/speakingImg.jpeg";
import mockImg from "./assets/mockImg.jpeg";
import aiImg from "./assets/aiImg.jpeg";
import mentorImg from "./assets/mentorImg.jpeg";
import midbanner from "./assets/midbanner.png";
import contactus from "./assets/contactus.jpeg";
import './index.css';
import { FaGraduationCap, FaVideo } from "react-icons/fa";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import { FaQuoteLeft } from "react-icons/fa";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";



// Navbar
function Navbar({ onLoginClick, onSignupClick }) {
  return (
    <nav className="flex justify-between items-center px-6 py-4 
      bg-white/20 backdrop-blur-lg rounded-2xl shadow-md 
      text-blue-900 fixed w-[90%] left-1/2 transform -translate-x-1/2 top-4 z-50">
      
      {/* Left Menu - Explore Dropdown */}
      <div className="relative group">
        <button className="hover:text-blue-700 text-lg font-semibold flex items-center gap-1">
          Explore ▾
        </button>
        <ul className="absolute hidden group-hover:block bg-white text-blue-600 mt-2 rounded-xl shadow-lg w-44 overflow-hidden">
          <li>
            <a
              href="#home"
              className="block px-4 py-2 hover:bg-blue-600 hover:text-white"
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
              className="block px-4 py-2 hover:bg-blue-600 hover:text-white"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Academy Name Center */}
      <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        IELTS Academy
      </h1>

      {/* Right Auth Buttons */}
      <div className="flex gap-3">
        <button
          onClick={onLoginClick}
          className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg 
          hover:bg-blue-600 hover:text-white transition font-medium"
        >
          Login
        </button>
        <button
          onClick={onSignupClick}
          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white 
          rounded-lg hover:opacity-90 transition font-medium shadow-md"
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
      4000
    );
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={banners[current]}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
      />

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
          Crack IELTS with Confidence!
        </h1>
        <p className="mb-6 text-lg md:text-xl text-gray-200 max-w-2xl">
          Join 10,000+ students improving their English and achieving dream
          scores with expert mentorship.
        </p>
        <a href="#features">
          <button className="px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition">
            Get Started
          </button>
        </a>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {banners.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
// About

function About() {
  return (
    <section id="about" className="px-8 py-16 bg-white text-center">
      <h3 className="text-5xl font-bold mb-6">About IELTS Academy</h3>
      <p className="max-w-5xl mx-auto text-gray-600 mb-12">
        At IELTS Academy, we focus on personalized learning, practice-driven methods, 
        and advanced AI tools to help students achieve their dream IELTS score. 
        Our courses are designed to cater to learners of all levels, from beginners to advanced, 
        ensuring that every student receives tailored guidance. 
        With expert mentors who have years of experience in IELTS coaching, 
        we provide strategies, tips, and feedback that directly target your strengths 
        and areas for improvement.
      </p>

    
    </section>
  );
}
function LandscapeMobileVideo() {
  return (
    <div className="mx-auto relative w-[650px] h-[320px] bg-black rounded-[50px] border-[16px] border-gray-900 shadow-2xl overflow-hidden flex items-center justify-center">

      {/* Camera (right side in landscape) */}
      <div className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-800 rounded-full border-2 border-gray-700 shadow-inner"></div>
      <div className="absolute right-16 top-1/2 -translate-y-1/2 w-6 h-6 bg-gray-700 rounded-full"></div>

      {/* YouTube Video Embed */}
      <iframe
        className="w-full h-full rounded-[36px]"
        src="https://www.youtube.com/embed/ymm_mi6G3EM"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      {/* Glass reflection */}
      <div className="absolute inset-0 pointer-events-none rounded-[50px] bg-gradient-to-t from-white/10 via-transparent to-transparent"></div>
    </div>
  );
}

function AboutSection() {
  return (
    <section className="w-full bg-gradient-to-r from-pink-50 to-purple-50 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        
        {/* Left Images */}
        <div className="flex gap-6">
          <img
            src={image1}
            alt="student 1"
            className="rounded-[50%] object-cover w-48 h-64 md:w-56 md:h-72 shadow-lg"
          />
          <img
            src={image2}
            alt="student 2"
            className="rounded-[50%] object-cover w-48 h-64 md:w-56 md:h-72 shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            The Place Where You Can Achieve
          </h2>
          <p className="text-gray-600 mb-6">
            There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form.
          </p>

          {/* Features */}
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <FaGraduationCap className="text-blue-500 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Flexible Classes</h4>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit diam.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaVideo className="text-red-500 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Learn From Anywhere</h4>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit diam.
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <button className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition">
            Read more
          </button>
        </div>
      </div>
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



function Testimonials() {
  const reviews = [
    { 
      name: "Riya Sharma", 
      role: "IELTS Student",
      text: "Thanks to IELTS Academy, I scored 8.0 in IELTS! The speaking practice sessions really boosted my confidence.",
      avatar: "https://i.pravatar.cc/100?img=1",
    },
    { 
      name: "Arjun Mehta", 
      role: "IELTS Student",
      text: "Amazing mentors and mock tests helped me a lot. The AI feedback helped me pinpoint exactly where I needed to improve.",
      avatar: "https://i.pravatar.cc/100?img=2",
    },
    { 
      name: "Sneha Verma", 
      role: "IELTS Student",
      text: "The AI Band Score feedback was so helpful for improvement. I could track my progress and understand my mistakes clearly.",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
    { 
      name: "Rahul Singh", 
      role: "IELTS Student",
      text: "Best institute for IELTS prep, highly recommend! The personalized mentorship made a huge difference in my preparation.",
      avatar: "https://i.pravatar.cc/100?img=4",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevReview = () =>
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  const nextReview = () =>
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));

  return (
    <section id="testimonials" className="px-8 py-16 bg-white text-center">
      <h2 className="text-3xl font-bold">TESTIMONIAL</h2>
      <p className="text-gray-600 mb-10">What Our Students Say</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        {/* Left side - student avatars */}
        <div className="grid grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <img
              key={i}
              src={r.avatar}
              alt={r.name}
              className={`w-full h-40 object-cover rounded-3xl border-4 ${
                i === current ? "border-blue-600" : "border-transparent"
              }`}
            />
          ))}
        </div>

        {/* Right side - active testimonial */}
        <div className="text-left relative">
          <FaQuoteLeft className="text-4xl text-blue-600 mb-4" />
          <p className="text-lg italic text-gray-700 mb-6">
            {reviews[current].text}
          </p>
          <div className="flex items-center gap-4">
            <img
              src={reviews[current].avatar}
              alt={reviews[current].name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h4 className="font-semibold text-lg">{reviews[current].name}</h4>
              <p className="text-sm text-gray-500">{reviews[current].role}</p>
            </div>
          </div>

          {/* Arrows */}
          <div className="absolute top-0 right-0 flex gap-3">
            <button
              onClick={prevReview}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-200 hover:bg-blue-400 transition"
            >
              <MdArrowBackIos className="text-white" />
            </button>
            <button
              onClick={nextReview}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-200 hover:bg-blue-400 transition"
            >
              <MdArrowForwardIos className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}




function SupportBanner({ onContactClick }) {
  return (
    <section
  className="relative px-8 py-20 bg-cover bg-center text-white text-center flex flex-col items-center gap-4"
  style={{ backgroundImage: `url(${contactus})` }}
>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl font-bold text-white mb-2">Need Help or Have Questions?</h1>
        <p className="mb-4">
          Our team is here to support you on your IELTS journey. Reach out to us for
          guidance, queries, or support.
        </p>
        <button
          onClick={onContactClick}
          className="px-6 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition"
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
      <LandscapeMobileVideo />
      <AboutSection/>
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
