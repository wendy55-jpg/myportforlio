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


function scrollToSection(sectionId) {
    const sectionToScroll = document.getElementById(sectionId);
    
    sectionToScroll.scrollIntoView({
        behavior: "smooth",
        block: "start" // Scroll to the start of the section
    });
}
