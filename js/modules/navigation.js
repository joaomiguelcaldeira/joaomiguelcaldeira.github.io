// js/modules/navigation.js

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for nav links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    // Update active navigation link on scroll
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section");
  
    function updateActiveLink() {
      let currentSection = null;
  
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section;
        }
      });
  
      // Ensure "Contact" is active when user is at the bottom
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        currentSection = document.getElementById("contact");
      }
  
      if (currentSection) {
        navLinks.forEach((link) => {
          link.classList.remove("active-link");
          if (link.getAttribute("href") === `#${currentSection.id}`) {
            link.classList.add("active-link");
          }
        });
      }
    }
  
    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();

    // Toggle topnav on small screens
    document.querySelector('.menu-toggle').addEventListener('click', () => {
      document.querySelector('.sidebar').classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        document.querySelector('.sidebar').classList.remove('active');
      });
    });
  });
  