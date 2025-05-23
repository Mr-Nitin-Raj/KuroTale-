// Navbar toggle for mobile
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const navMenu = document.getElementById("nav-menu");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("hidden");
    });
  }
});

// Search bar functionality (basic)
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");

  if (searchInput && searchButton) {
    searchButton.addEventListener("click", () => {
      const query = searchInput.value.toLowerCase();
      alert("Search feature coming soon! You searched: " + query);
    });
  }
});

// Text-to-speech for novel content
function speakText(id) {
  const content = document.getElementById(id).innerText;
  const utterance = new SpeechSynthesisUtterance(content);
  utterance.rate = 1;
  utterance.pitch = 1;
  speechSynthesis.speak(utterance);
}
