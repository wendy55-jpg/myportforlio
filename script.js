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

function showSection(sectionId) {
    // Hide all sections first
    const sections = document.querySelectorAll(".section");
    sections.forEach(function(section) {
        section.classList.remove("show-section");
        section.classList.add("hide-section");
    });

    // Hide the header (name, portfolio, gif)
    const headerElements = document.querySelectorAll(".header, .gif");
    headerElements.forEach(function(headerElement) {
        headerElement.classList.add("hide-header");
    });

    // Show the clicked section
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.remove("hide-section");
    sectionToShow.classList.add("show-section");
}
