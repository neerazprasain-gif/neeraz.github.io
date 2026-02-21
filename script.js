// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Hero button interaction
document.getElementById("connectBtn").addEventListener("click", () => {
  alert("Thanks for reaching out! You can connect with me via Discord: dashwalker609 ");
});

// Contact form submission (basic demo)
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if(name && email && message) {
    alert(`Thank you, ${name}! Your message has been received.`);
    this.reset();
  } else {
    alert("Please fill in all fields before submitting.");
  }
});

// Neon glow animation for hero text
const heroTitle = document.querySelector(".hero h2");
setInterval(() => {
  heroTitle.style.textShadow = `0 0 ${Math.floor(Math.random()*20)+5}px #5865F2`;
}, 500);
// Neon glow pulse for project cards
const projectCards = document.querySelectorAll(".project-card");
setInterval(() => {
  projectCards.forEach(card => {
    card.style.boxShadow = `0 0 ${Math.floor(Math.random()*20)+10}px #5865F2`;
  });
}, 1000);
// Neon pulse effect for Discord button
const discordBtn = document.querySelector(".discord-btn");
setInterval(() => {
  discordBtn.style.boxShadow = `0 0 ${Math.floor(Math.random()*20)+10}px #5865F2`;
}, 800);
// Dark mode toggle with memory
const toggleBtn = document.getElementById("darkModeToggle");

// Load saved preference
if(localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  toggleBtn.textContent = "🌙 Dark Mode";
} else {
  toggleBtn.textContent = "☀️ Light Mode";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if(document.body.classList.contains("light-mode")) {
    toggleBtn.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  } else {
    toggleBtn.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
  }
});
function showChannel(channel) {
  const content = document.getElementById("channelContent");
  if(channel === "general") {
    content.innerHTML = "<h3>#general</h3><p>Welcome to the community! 🎉</p>";
  } else if(channel === "rules") {
    content.innerHTML = "<h3>#rules</h3><p>1. Be respectful<br>2. No spam<br>3. Follow Discord TOS</p>";
  } else if(channel === "events") {
    content.innerHTML = "<h3>#events</h3><p>Upcoming: Game Night this Friday!</p>";
  }
}

function showRole(role) {
  const content = document.getElementById("channelContent");
  if(role === "admin") {
    content.innerHTML = "<h3 class='role-admin'>Admin Role</h3><p>Full permissions, server management, and oversight.</p>";
  } else if(role === "moderator") {
    content.innerHTML = "<h3 class='role-moderator'>Moderator Role</h3><p>Helps enforce rules, manage channels, and support members.</p>";
  } else if(role === "member") {
    content.innerHTML = "<h3 class='role-member'>Member Role</h3><p>Regular community participant with access to general channels.</p>";
  }
}