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

  // Smoother animation with reduced particles on mobile
  const isMobile = window.innerWidth <= 768;
  particle.style.animationDuration = (isMobile ? Math.random() * 12 + 12 : Math.random() * 8 + 8) + "s";
  particle.style.animationDelay = Math.random() * 2 + "s";

  document.querySelector(".particle-container").appendChild(particle);

  setTimeout(() => {
    if (particle.parentNode) {
      particle.remove();
    }
  }, 20000); // Increased timeout to match longer animation
}

// Create particles more frequently
setInterval(() => {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => createParticle(), i * 200);
  }
}, 800);

document
  .getElementById("downloadApp")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const button = this;
    const icon = document.getElementById("downloadIcon");
    const text = document.getElementById("downloadText");

    const originalIcon = "images/androidicon.svg";
    const preparingIcon = "images/preparing.svg";
    const successIcon = "images/success.svg";
    const originalText = "Download for Android";

    // Step 1: Preparing
    icon.src = preparingIcon;
    text.textContent = "Preparing Download...";
    button.style.transform = "scale(0.98)";

    // Step 2: Start browser download after short delay
    setTimeout(() => {
      // Create download link and trigger browser's native download
      const a = document.createElement("a");
      a.href = "downloads/FindIT.apk"; // your file path
      a.download = "FindIT.apk"; // filename for download
      document.body.appendChild(a);
      a.click();
      a.remove();

      // Step 3: Show success state
      icon.src = successIcon;
      text.textContent = "Download Started!";
      button.classList.add("green");
      button.style.transform = "scale(1.02)";

      // Step 4: Reset after delay
      setTimeout(() => {
        icon.src = originalIcon;
        text.textContent = originalText;
        button.classList.remove("green");
        button.style.transform = "scale(1)";
      }, 3000);
    }, 1000); // 1 second preparation delay
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

  requestAnimationFrame(() => {
    document.querySelector(".blob1").style.transform = 
      `translateY(${parallax}px) rotate(${scrolled * 0.1}deg)`;
    document.querySelector(".blob2").style.transform = 
      `translateY(${parallax * -0.8}px) rotate(${scrolled * -0.1}deg)`;
    document.querySelector(".blob3").style.transform = 
      `translateY(${parallax * 1.2}px) rotate(${scrolled * 0.15}deg)`;
  });
}, { passive: true });

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

  requestAnimationFrame(() => {
    document.querySelector(".blob1").style.transform = 
      `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
    document.querySelector(".blob2").style.transform = 
      `translate(${mouseX * -15}px, ${mouseY * -15}px)`;
    document.querySelector(".blob3").style.transform = 
      `translate(${mouseX * 10}px, ${mouseY * 10}px)`;
  });
}, { passive: true });

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

// Hamburger menu functionality
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close menu when clicking on a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });
}

// Update modal functions to lock scroll
function openModal(modal) {
  document.body.classList.add('modal-open');
  modal.style.display = "flex";
  document.documentElement.style.overflow = 'hidden';
}

function closeModal(modal) {
  document.body.classList.remove('modal-open');
  modal.style.display = "none";
  document.documentElement.style.overflow = '';
}

// Open modal on "Contact Us" click
document.querySelectorAll("a").forEach(link => {
  if (link.textContent.trim().toLowerCase() === "contact us") {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("contactModal").style.display = "flex";
    });
  }
});

// Close modal
document.getElementById("closeContact").addEventListener("click", () => {
  document.getElementById("contactModal").style.display = "none";
});

window.addEventListener("click", (e) => {
  const modal = document.getElementById("contactModal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});