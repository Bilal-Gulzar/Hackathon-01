// Get the toggle button by Id
var toggleSkillsButton = document.getElementById("toggle-skills");
var skillsList = document.getElementById("skills-list");
if (toggleSkillsButton && skillsList) {
    // Add a click event listener to the button
    toggleSkillsButton.addEventListener("click", function () {
        // Check if the skills list is currently hidden
        if (skillsList.classList.contains("hidden")) {
            // Show the skills list and update the button text
            skillsList.classList.remove("hidden");
            toggleSkillsButton.textContent = "Hide Skills";
        }
        else {
            // Hide the skills list and update the button text
            skillsList.classList.add("hidden");
            toggleSkillsButton.textContent = "Show Skills";
        }
    });
}
