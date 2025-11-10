document.addEventListener("DOMContentLoaded", function () {
  // Fade-in effect for sections
  const sections = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );
  sections.forEach((section) => observer.observe(section));
  

  // Typewriter effect for dynamic text in the home section
  const textElement = document.getElementById("dynamic-text");
  const textArray = ["Hi, I'm João!", "Software Engineer", "AI Enthusiast", "Nice to meet you!"];
  let textIndex = 1;
  function updateText() {
    textElement.style.opacity = 0;
    setTimeout(() => {
      textElement.textContent = textArray[textIndex];
      textElement.style.opacity = 1;
      textIndex = (textIndex + 1) % textArray.length;
    }, 500);
  }
  setInterval(updateText, 2000);

  // Terminal text typing effect in the about section
  const commandText = "joaocaldeira@Caldeira-Mac ~ % cat about_me.txt\n";
  const aboutText = `
My name is João Caldeira and I enjoy solving problems and automating away boring tasks with AI as my sidekick.

I have a particular interest in financial markets and algorithmic trading strategies (profitable ones 🤞).

Applying algorithms to real-world problems is one of the most satisfying things there is for me.

Striving for my software applications to be more robust and scalable than yesterday.

When I'm not coding, you'll likely find me stargazing and imagining exploring space, keeping active through sports and regular gym sessions, or catching up with the latest AI news and developments.
  `;
  const fullText = commandText + aboutText;
  const terminalElement = document.getElementById("terminal-text");

  const isMobile = window.innerWidth < 1223;
  
  if (isMobile) {
    // On mobile, show the complete text immediately
    terminalElement.textContent = fullText;
  } else {
    let index = 0;
    function typeText() {
      if (index < fullText.length) {
        terminalElement.textContent += fullText[index];
        index++;
        setTimeout(typeText, 25);
      }
    }
    typeText();
  }
});
