import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Download from './components/Download';
import Footer from './components/Footer';
import Modals from './components/Modals';

function App() {
  const [activeModal, setActiveModal] = useState(null);

  // 1. Particle System Logic
  useEffect(() => {
    const container = document.querySelector(".particle-container");
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement("div");
      const types = ["gold", "green", "blue"];
      const type = types[Math.floor(Math.random() * types.length)];

      particle.className = `particle ${type}`;
      particle.style.left = Math.random() * 100 + "vw";
      
      const size = Math.random() * 8 + 4;
      particle.style.width = size + "px";
      particle.style.height = size + "px";

      const isMobile = window.innerWidth <= 768;
      particle.style.animationDuration = (isMobile ? Math.random() * 12 + 12 : Math.random() * 8 + 8) + "s";
      particle.style.animationDelay = Math.random() * 2 + "s";

      container.appendChild(particle);

      setTimeout(() => {
        if (particle.parentNode) particle.remove();
      }, 20000);
    };

    const interval = setInterval(() => {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => createParticle(), i * 200);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  // 2. Blob Mouse Movement Logic
  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      requestAnimationFrame(() => {
        const blob1 = document.querySelector(".blob1");
        const blob2 = document.querySelector(".blob2");
        const blob3 = document.querySelector(".blob3");

        if(blob1) blob1.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
        if(blob2) blob2.style.transform = `translate(${mouseX * -15}px, ${mouseY * -15}px)`;
        if(blob3) blob3.style.transform = `translate(${mouseX * 10}px, ${mouseY * 10}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 3. Scroll Animation Logic (Observer)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 100); 
        }
      });
    }, { threshold: 0.15 });

    const hiddenElements = document.querySelectorAll(".fade-in");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // 4. Body Opacity Load Animation
  useEffect(() => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.5s ease";
    setTimeout(() => {
      document.body.style.opacity = "1";
    }, 100);
  }, []);

  // 5. Lock Scroll when Modal Open
  useEffect(() => {
    if (activeModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [activeModal]);

  return (
    <>
      <div className="animated-bg"></div>
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      <Navbar /> 
      
      <div className="main-content-wrapper">
        <Hero />
        <Features />
        <HowItWorks />
        <Download />
      </div>

      <Footer onOpenModal={setActiveModal} />

      <Modals activeModal={activeModal} onClose={() => setActiveModal(null)} />
      
      <div className="particle-container"></div>
    </>
  );
}

export default App;