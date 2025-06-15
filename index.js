document.getElementById("eduBtn").addEventListener("click", (e) => {
  e.preventDefault();

  // Fade-out animation
  gsap.to("body", {
    opacity: 0,
    duration: 0.6,
    onComplete: () => {
      window.location.href = "education.html";
    }
  });
});

// Optional: Fade-in when landing on the page
window.addEventListener("DOMContentLoaded", () => {
  gsap.from("body", { opacity: 0, duration: 0.6 });
});

// -------------------------------------------experiance-----------------------

// --------------------------------------------------------------------------