// js/modules/contact.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const thankYou = document.getElementById("thankYouAnimation");
  const thankYouMsg = thankYou.querySelector("p");

  const messages = [
    "✅ Message received! I'll be in touch!",
    "🏃 Running to my inbox. Thank you! ",
    "✨ Got it! Appreciate you reaching out.",
    "🛰️ Transmission successful. I'll reply soon!"
  ];

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        thankYouMsg.textContent = randomMessage;
        form.classList.add("hidden");
        thankYou.classList.add("active");
        setTimeout(() => {
          thankYou.classList.remove("active");
          form.reset();
          form.classList.remove("hidden");
        }, 2000);
      } else {
        alert("Oops! Something went wrong.");
      }
    } catch (error) {
      alert("Error sending the message.");
      console.error(error);
    }
  });
});
  