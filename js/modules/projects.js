// js/modules/projects.js

document.addEventListener("DOMContentLoaded", function () {
    // Change project images from static to GIF on hover
    document.querySelectorAll(".project-item").forEach(project => {
      const img = project.querySelector(".project-image");
      project.addEventListener("mouseenter", function () {
        img.src = img.getAttribute("data-gif");
      });
      project.addEventListener("mouseleave", function () {
        img.src = img.getAttribute("data-static");
      });
    });
  
    // Toggle hidden projects with the Show More button
    const showMoreBtn = document.getElementById("showMoreBtn");
    const projectsContainer = document.querySelector(".projects-container");
    showMoreBtn.addEventListener("click", function () {
      projectsContainer.classList.toggle("show-more");
      showMoreBtn.textContent = projectsContainer.classList.contains("show-more")
        ? "Show Less"
        : "More Projects";
    });
  });
  