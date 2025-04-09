// js/modules/timeline.js

document.addEventListener("DOMContentLoaded", function () {
  const experienceBox = document.getElementById("experienceBox");
  const experienceItems = document.querySelectorAll(".experience-item");
  const timeline = document.getElementById("timeline");

  if (!timeline) {
    console.error("Timeline element not found.");
    return;
  }
  
  // Clear any existing timeline circles
  timeline.innerHTML = "";

  // Create a timeline circle for each experience item
  experienceItems.forEach((item) => {
    let circle = document.createElement("div");
    circle.classList.add("timeline-circle");
    timeline.appendChild(circle);
  });

  // Function to update the position and height of timeline circles
  function updateCircles() {
    const circles = document.querySelectorAll(".timeline-circle");
    experienceItems.forEach((item, index) => {
      let itemTop = item.offsetTop + (item.offsetHeight / 2);
      circles[index].style.top = `${itemTop}px`;
    });
    if (experienceItems.length) {
      const lastItem = experienceItems[experienceItems.length - 1];
      timeline.style.height = `${lastItem.offsetTop + lastItem.offsetHeight}px`;
    }
  }

  updateCircles();
  if (experienceBox) {
    experienceBox.addEventListener("scroll", updateCircles);
  }

  // Intersection Observer: add "visible" class when items or circles are in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  experienceItems.forEach((item) => observer.observe(item));
  const circles = document.querySelectorAll(".timeline-circle");
  circles.forEach((circle) => observer.observe(circle));

  // Add glow effect to timeline circles when hovering over experience items
  experienceItems.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
      if (circles[index]) {
        circles[index].classList.add("glow");
      }
    });
    item.addEventListener("mouseleave", () => {
      if (circles[index]) {
        circles[index].classList.remove("glow");
      }
    });
  });
});
