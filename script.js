// Select all buttons and add event listeners for each of them
document.querySelector(".button-56:nth-child(1)").addEventListener("click", function() {
    showSection("about");
});

document.querySelector(".button-56:nth-child(2)").addEventListener("click", function() {
    showSection("education");
});

document.querySelector(".button-56:nth-child(3)").addEventListener("click", function() {
    showSection("skills");
});

document.querySelector(".button-56:nth-child(4)").addEventListener("click", function() {
    showSection("projects");
});

document.querySelector(".button-56:nth-child(5)").addEventListener("click", function() {
    showSection("contact");
});

// Function to show the correct section
function showSection(sectionId) {
    // Hide all sections first
    const sections = document.querySelectorAll(".section");
    sections.forEach(function(section) {
        section.classList.remove("show-section");
        section.classList.add("hide-section");
    });

    // Hide the header content (name, portfolio text, gif)
    const header = document.querySelector(".header");
    header.classList.add("hide-header");  // Hides header when a button is clicked

    // Show the clicked section
    const sectionToShow = document.getElementById(sectionId);
   
