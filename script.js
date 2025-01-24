function showContent(section) {
    // Hide current content (name, portfolio text, and gif) with animation
    const currentContent = document.querySelector('.content');
    currentContent.classList.add('hide-section');

    // Wait for the content to fade out before showing new content
    setTimeout(function () {
        // Hide all sections
        const sections = document.querySelectorAll('.section');
        sections.forEach(sec => sec.style.display = 'none');

        // Show the selected section with animation
        const selectedSection = document.getElementById(section);
        selectedSection.classList.add('show-section');

        // Reset the visibility of the content area after the animation
        currentContent.classList.remove('hide-section');
    }, 1000); // This timeout should match the duration of the fadeOut animation
}
