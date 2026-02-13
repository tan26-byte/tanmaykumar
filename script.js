// Section switching
const links = document.querySelectorAll("#sidebar .nav-link");
const sections = document.querySelectorAll(".content-section");

links.forEach(link => {
    link.addEventListener("click", function () {

        const target = this.getAttribute("data-section");

        // Remove active state
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");

        // Hide all sections
        sections.forEach(section => section.classList.remove("active"));

        // Show selected section
        document.getElementById(target).classList.add("active");
    });
});


// Dark Mode Toggle
const toggleBtn = document.getElementById("themeToggle");
const htmlTag = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    htmlTag.setAttribute("data-bs-theme", savedTheme);
    toggleBtn.textContent = savedTheme === "dark" ? "Light Mode" : "Dark Mode";
}

toggleBtn.addEventListener("click", () => {
    const currentTheme = htmlTag.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    htmlTag.setAttribute("data-bs-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    toggleBtn.textContent = newTheme === "dark" ? "Light Mode" : "Dark Mode";
});
