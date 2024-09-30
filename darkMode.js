document.addEventListener("DOMContentLoaded", function () {
        
    const toggleThemeButton = document.getElementById("toggle-theme");
    const themeIcon = document.getElementById('toggle-theme-icon');

    toggleThemeButton.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
      } else {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
      }
    });
  });