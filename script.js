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
  "My name is Adam Benelcadi",
  "Welcome to my Matrix",
  "I love coding in JavaScript, Python, and C",
  "Learning algorithms and problem-solving",
  "Building projects to learn more every day"
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

