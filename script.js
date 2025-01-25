// Smooth Scroll for Navbar Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior

        const targetId = this.getAttribute('href'); // Get the target section's ID
        const targetElement = document.querySelector(targetId);

        if (targetElement) { // Ensure the target element exists
            targetElement.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'start',    // Align the section to the top
            });

            // Optionally, update the URL without refreshing the page
            history.pushState(null, null, targetId);
        }
    });
});
