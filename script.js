document.getElementById("about-link").addEventListener("click", function(event) {
    event.preventDefault();
    toggleSectionVisibility("about");
});

document.getElementById("education-link").addEventListener("click", function(event) {
    event.preventDefault();
    toggleSectionVisibility("educations");
});

document.getElementById("workExperience-link").addEventListener("click", function(event) {
    event.preventDefault();
    toggleSectionVisibility("work");
});

document.getElementById("projects-link").addEventListener("click", function(event) {
    event.preventDefault();
    toggleSectionVisibility("projects");
});

document.getElementById("certificate-link").addEventListener("click", function(event) {
    event.preventDefault();
    toggleSectionVisibility("certificates");
});

document.getElementById("publication-link").addEventListener("click", function(event) {
    event.preventDefault();
    toggleSectionVisibility("publications");
});

function toggleSectionVisibility(sectionId) {
    var sections = document.querySelectorAll("section");
    sections.forEach(function(section) {
        if (section.id === sectionId) {
            if (section.classList.contains("hidden")) {
                section.classList.remove("hidden");
            }
        } else {
            section.classList.add("hidden");
        }
    });
}



