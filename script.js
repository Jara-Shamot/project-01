// script.js
document.addEventListener("DOMContentLoaded", function () {
  var burger = document.getElementById("burger");
  var navModal = document.getElementById("navModal");
  var closeModal = document.getElementById("closeModal");

  burger.addEventListener("click", function () {
    navModal.style.display = "block";
  });

  closeModal.addEventListener("click", function () {
    navModal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == navModal) {
      navModal.style.display = "none";
    }
  });

  // Optional: Add smooth scroll to sections
  document.querySelectorAll(".nav-list a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
      navModal.style.display = "none";
    });
  });
});

// Back to top button
document.addEventListener("DOMContentLoaded", function () {
  var backToTopButton = document.getElementById("backToTop");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  };

  // When the user clicks on the button, scroll to the top of the document
  backToTopButton.addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });
});
