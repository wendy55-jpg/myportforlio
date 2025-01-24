// Hamburger menu functionality
document.getElementById('hamburger').addEventListener('click', function() {
    // Toggle visibility of buttons
    const buttons = document.querySelectorAll('.button-56');
    buttons.forEach(button => button.classList.toggle('show-section'));

    // Toggle visibility of header (name, portfolio, gif)
    const header = document.getElementById('header');
    const gif = document.getElementById('gif');
    if (header.classList.contains('hide-header')) {
        header.classList.remove('hide-header');
        gif.classList.remove('hide-header');
    } else {
        header.classList.add('hide-header');
        gif.classList.add('hide-header');
    }
});

// Button click functionality to scroll to section
document.getElementById('aboutButton').addEventListener('click', function() {
    showSection('about');
});

document.getElementById('educationButton').addEventListener('click', function() {
    showSection('education');
});

document.getElementById('skillsButton').addEventListener('click', function() {
    showSection('skills');
});

document.getElementById('projectsButton').addEventListener('click', function() {
    showSection('projects');
});

document.getElementById('contactButton').addEventListener('click', function() {
    showSection('contact');
});

function showSection(sectionId) {
    // Hide all sections first
    const sections = document.querySelectorAll(".section");
    sections.forEach(function(section) {
        section.classList.remove("show-section");
        section.classList.add("hide-section");
    });

    // Show the clicked section
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.remove("hide-section");
    sectionToShow.classList.add("show-section");

    // Scroll to the section
    sectionToShow.scrollIntoView({ behavior: "smooth" });
}
