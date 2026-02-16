window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// --- NAVBAR ---
function toggleMenu() {
  document.getElementById("navbar").classList.toggle("active");
}

// --- FOND MATRIX ---
const background = document.getElementById("typing-background");
const lines = [
  "010101110011010101001110101010111001010101010111001010101010101011001010101011010101010101001101010101011010101010101001010101101010101010101011010101011010101010101",
  "010101110011010101001110101010111001010101010111001010101010101011001010101011010101010101001101010101011010101010101001010101101010101010101011010101011010101010101",
  "010101110011010101001110101010111001010101010111001010101010101011001010101011010101010101001101010101011010101010101001010101101010101010101011010101011010101010101",
  "010101110011010101001110101010111001010101010111001010101010101011001010101011010101010101001101010101011010101010101001010101101010101010101011010101011010101010101",
  "010101110011010101001110101010111001010101010111001010101010101011001010101011010101010101001101010101011010101010101001010101101010101010101011010101011010101010101"
];
let content = "";
for (let i = 0; i < 100; i++) {
  content += lines[Math.floor(Math.random() * lines.length)] + "\n";
}
background.textContent = content;

// --- EFFET DE FRAPPE ---
const target = document.getElementById("typewriter");
const text = "Nom : Benelcadi\nPrénom : Adam\nÂge : 19 ans";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    const char = text.charAt(i);
    if (char === "\n") {
      target.innerHTML += "<br>";
    } else {
      target.innerHTML += char;
    }
    i++;
    setTimeout(typeEffect, 100);
  } else {
    target.style.borderRight = "none";
  }
}

// Délai avant le début de la frappe
setTimeout(() => {
  target.style.width = "auto";
  typeEffect();
}, 1500);


// --- MENU MOBILE ---
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});


document.addEventListener("DOMContentLoaded", () => {
  // --- ANIMATION DES CERTIFICATIONS EXISTANTES ---
  const certificates = document.querySelectorAll(".certifications-container > div");

  const observerCertificates = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  certificates.forEach(cert => observerCertificates.observe(cert));

  // --- ANIMATION DES PROJETS ---
  const projects = document.querySelectorAll(".project-card");

  const observerProjects = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  projects.forEach(project => observerProjects.observe(project));
});

