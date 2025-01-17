// Select elements
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('menu');
const menu = document.querySelector('nav ul');
const menuItems = document.querySelectorAll('nav ul li a');

// Add event listener to toggle the menu visibility
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open'); // Add/remove the 'open' class
});

// Close menu on link click or outside click
document.addEventListener('click', (e) => {
    if ((menu && !menu.contains(e.target) && e.target !== menuToggle) || e.target.tagName === 'A') {
        menu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', false);
    }
});

// Prevent default link behavior for smooth scrolling
menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        const href = item.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});


// Create and add the Footer Element:

// Step 1: Create and append the footer element  to my webpage
const body = document.querySelector("body"); // Select the body element
const footer = document.createElement("footer"); // Create a footer element
body.appendChild(footer); // Append the footer to the body

// Step 2: Get the current year
const today = new Date(); // Create a new Date object
const thisYear = today.getFullYear(); // Get the current year dynamically

// Step 3: Create the copyright text
const copyright = document.createElement("p"); // Create a paragraph element
copyright.innerHTML = `&copy; Vika Sherstobitov, ${thisYear}`; // Use Unicode for © and add your name and year

// Step 4: Append the copyright text to the footer
footer.appendChild(copyright); // Append the paragraph to the footer


// Add skills section
// Step 1: Create an array of technical skills
const skills = [
    "Operating systems - Windows",
    "QC Software - DefectTracker, Jira",
    "Source Control - Git, GitHub",
    "CI/CD - Circle CI",
    "Databases - MS SQL Server, MySQL",
    "IDE - IntelliJ IDEA",
    "Programming/query languages - Java, SQL, HTML/CSS, JavaScript",
    "Test Automation - Selenium, Cucumber, TestNG, Gherkin",
    "ERP - Microsoft Dynamics - Axapta",
    "Other - Maven, BDD, Postman, Copilot",
  ];
  
  // Step 2: Select the skills section by ID
  const skillsSection = document.getElementById("skills");
  
  // Step 3: Select the <ul> element within the skills section
  const skillsList = skillsSection.querySelector("ul");
  
  // Step 4: Iterate over the skills array and create list items
  skills.forEach((skillText) => {
    // Create a new <li> element
    const skill = document.createElement("li");
  
    // Set the inner text to the current skill
    skill.innerText = skillText;
  
    // Append the skill to the <ul>
    skillsList.appendChild(skill);
  });

