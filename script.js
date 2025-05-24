// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Enhanced header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const scrolled = window.scrollY;

  if (scrolled > 100) {
    header.style.background = "rgba(10, 10, 10, 0.95)";
    header.style.backdropFilter = "blur(25px)";
    header.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
  } else {
    header.style.background = "rgba(10, 10, 10, 0.9)";
    header.style.backdropFilter = "blur(20px)";
    header.style.boxShadow = "none";
  }
});

// Enhanced floating particles
function createParticle() {
  const particle = document.createElement("div");
  const types = ["gold", "green", "blue"];
  const type = types[Math.floor(Math.random() * types.length)];

  particle.className = `particle ${type}`;
  particle.style.left = Math.random() * 100 + "vw";

  const size = Math.random() * 8 + 4;
  particle.style.width = size + "px";
  particle.style.height = size + "px";

  particle.style.animationDuration = Math.random() * 8 + 8 + "s";
  particle.style.animationDelay = Math.random() * 2 + "s";

  document.querySelector(".particle-container").appendChild(particle);

  setTimeout(() => {
    if (particle.parentNode) {
      particle.remove();
    }
  }, 15000);
}

// Create particles more frequently
setInterval(() => {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => createParticle(), i * 200);
  }
}, 800);

// Enhanced download button functionality
document.getElementById("downloadApp").addEventListener("click", function (e) {
  e.preventDefault();

  const button = this;
  const originalText = button.textContent;

  // Animation sequence
  button.textContent = "📥 Preparing Download...";
  button.style.background = "linear-gradient(45deg, #2ecc71, #27ae60)";
  button.style.transform = "scale(0.98)";

  setTimeout(() => {
    button.textContent = "🚀 Downloading...";
    button.style.background = "linear-gradient(45deg, #3498db, #2980b9)";

    setTimeout(() => {
      button.textContent = "✅ Download Complete!";
      button.style.background = "linear-gradient(45deg, #2ecc71, #27ae60)";
      button.style.transform = "scale(1.05)";

      setTimeout(() => {
        button.textContent = originalText;
        button.style.background = "linear-gradient(45deg, #ffeec3, #f2d385)";
        button.style.transform = "scale(1)";
      }, 3000);
    }, 2000);
  }, 1000);
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("visible");
      }, index * 100); // Stagger animations
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Parallax effect for blobs
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallax = scrolled * 0.5;

  document.querySelector(
    ".blob1"
  ).style.transform = `translateY(${parallax}px) rotate(${scrolled * 0.1}deg)`;
  document.querySelector(".blob2").style.transform = `translateY(${
    parallax * -0.8
  }px) rotate(${scrolled * -0.1}deg)`;
  document.querySelector(".blob3").style.transform = `translateY(${
    parallax * 1.2
  }px) rotate(${scrolled * 0.15}deg)`;
});

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease";

  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

// Mouse movement effects
document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;

  document.querySelector(".blob1").style.transform += ` translate(${
    mouseX * 20
  }px, ${mouseY * 20}px)`;
  document.querySelector(".blob2").style.transform += ` translate(${
    mouseX * -15
  }px, ${mouseY * -15}px)`;
  document.querySelector(".blob3").style.transform += ` translate(${
    mouseX * 10
  }px, ${mouseY * 10}px)`;
});

// Terms & Conditions Modal Logic
const termsModal = document.getElementById("termsModal");
const openTerms = document.getElementById("openTerms");
const closeTerms = document.getElementById("closeTerms");

openTerms.addEventListener("click", (e) => {
  e.preventDefault();
  termsModal.style.display = "flex";
});

closeTerms.addEventListener("click", () => {
  termsModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === termsModal) {
    termsModal.style.display = "none";
  }
});

// Developer Modal Logic
const developerModal = document.getElementById("developerModal");
const openDeveloper = document.getElementById("openDeveloper");
const closeDeveloper = document.getElementById("closeDeveloper");

if (openDeveloper) {
  openDeveloper.addEventListener("click", (e) => {
    e.preventDefault();
    developerModal.style.display = "flex";
  });
}

if (closeDeveloper) {
  closeDeveloper.addEventListener("click", () => {
    developerModal.style.display = "none";
  });
}

window.addEventListener("click", (e) => {
  if (e.target === developerModal) {
    developerModal.style.display = "none";
  }
});

// Privacy Policy Modal Logic
const privacyModal = document.getElementById("privacyModal");
const openPrivacy = document.getElementById("openPrivacy");
const closePrivacy = document.getElementById("closePrivacy");

if (openPrivacy) {
  openPrivacy.addEventListener("click", (e) => {
    e.preventDefault();
    privacyModal.style.display = "flex";
  });
}

if (closePrivacy) {
  closePrivacy.addEventListener("click", () => {
    privacyModal.style.display = "none";
  });
}

window.addEventListener("click", (e) => {
  if (e.target === privacyModal) {
    privacyModal.style.display = "none";
  }
});

