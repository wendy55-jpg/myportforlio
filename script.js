// Hamburger menu toggle
document.getElementById('hamburger').addEventListener('click', function () {
    const header = document.getElementById('header');
    const gif = document.getElementById('gif');

    // Toggle the visibility of the header and gif
    if (header.classList.contains('hide-header')) {
        header.classList.remove('hide-header');
        gif.classList.remove('hide-header');
    } else {
        header.classList.add('hide-header');
        gif.classList.add('hide-header');
    }
});

// Add event listeners for each button
document.getElementById('aboutButton').addEventListener('click', function () {
    navigateToSection('about');
});
document.getElementById('educationButton').addEventListener('click', function () {
    navigateToSection('education');
});
document.getElementById('skillsButton').addEventListener('click', function () {
    navigateToSection('skills');
});
document.getElementById('projectsButton').addEventListener('click', function () {
    navigateToSection('projects');
});
document.getElementById('contactButton').addEventListener('click', function () {
    navigateToSection('contact');
});

function navigateToSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
        section.classList.remove('show-section');
    });

    // Show the selected section
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.add('show-section');

    // Hide the header and gif
    document.getElementById('header').classList.add('hide-header');
    document.getElementById('gif').classList.add('hide-header');
}
