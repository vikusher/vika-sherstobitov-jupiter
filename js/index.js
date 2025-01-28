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


// Select the form element
const messageForm = document.forms['leave_message'];

// Add an event listener for the "submit" event
messageForm.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Retrieve values from the form fields
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  // Select the #messages section
  const messageSection = document.getElementById('messages');
  
  // Select the <ul> element within the #messages section
  const messageList = messageSection.querySelector('ul');
  
  // Create a new <li> element
  const newMessage = document.createElement('li');

  // Set the inner HTML of the newMessage element
  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span class="message-text"> - ${usersMessage}</span>
  `;

  // Create a new <button> element for removing the message
  const removeButton = document.createElement('button');
  removeButton.innerText = 'Remove';
  removeButton.className = 'remove'; // Add the "remove" class
  removeButton.type = 'button';

  // Add an event listener to the removeButton for the "click" event
  removeButton.addEventListener('click', function() {
    // Use DOM traversal to find the button's parent element
    const entry = removeButton.parentNode;
    // Remove the entry element from the DOM
    entry.remove();
    // Toggle visibility after removing a message
    toggleMessageSection();
  });

  // Create a new <button> element for editing the message
  const editButton = document.createElement('button');
  editButton.innerText = 'Edit';
  editButton.className = 'edit'; // Add the "edit" class
  editButton.type = 'button';

  // Add an event listener to the editButton for the "click" event
  editButton.addEventListener('click', function() {
    // Select the message text span
    const messageText = newMessage.querySelector('.message-text');
    const currentMessage = messageText.innerText.replace(' - ', '').trim();

    // Create a textarea for editing
    const textarea = document.createElement('textarea');
    textarea.value = currentMessage;

    // Replace the message text span with the textarea
    newMessage.replaceChild(textarea, messageText);

    // Change the "edit" button to "save"
    editButton.innerText = 'Save';
    

    // Update the event listener for saving the edited message
    editButton.addEventListener('click', function saveEditedMessage() {
      // Get the updated message from the textarea
      const updatedMessage = textarea.value;

      // Create a new span element with the updated message
      const updatedSpan = document.createElement('span');
      updatedSpan.className = 'message-text';
      updatedSpan.innerText = ` - ${updatedMessage}`;

      // Replace the textarea with the updated span
      newMessage.replaceChild(updatedSpan, textarea);

      // Change the "save" button back to "edit"
      editButton.innerText = 'Edit';

      // Remove the save event listener to avoid duplication
      editButton.removeEventListener('click', saveEditedMessage);
    });
  });

  //  Function to check the number of messages and toggle the visibility:
  function toggleMessageSection() {
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    
    // Check if there are any <li> elements in the message list
    if (messageList.children.length === 0) {
      messageSection.style.display = 'none'; // Hide the message section
    } else {
      messageSection.style.display = 'block'; // Show the message section
    }
  }

  // When the page loads, ensure the "Messages" section is hidden if there are no existing messages:
  document.addEventListener('DOMContentLoaded', () => {
    toggleMessageSection();
  });


  // Append the removeButton and editButton to the newMessage element
  newMessage.appendChild(editButton);
  newMessage.appendChild(removeButton);

  // Append the newMessage to the messageList element
  messageList.appendChild(newMessage);

  // Toggle visibility after adding a message
  toggleMessageSection();

  // Reset the form after submission
  messageForm.reset();
});

//DOM Selectors (Getting HTML elements)
const projectSection = document.getElementById("projects");
console.log("projectSection: " , projectSection);

const projectList = projectSection.querySelector("ul");
console.log("projectList :" , projectList);

//Fetch (getting Projects from GitHub API)
// Chain a then method to your fetch call and pass it a
// function that returns the response JSON data
fetch("https://api.github.com/users/vikusher/repos")
 .then((res) => {
  return res.json();
})
.then((repositories) => {
 // add repositories to DOM
 console.log("repositories: ", repositories); 

 //Loop through repositories array and:
for (let i=0; i < repositories.length; i++) {
   // get specific project data out
  const project = repositories[i].name;
  // create DOM (HTML) elements
  const li = document.createElement("li");
  // - put the data from the project into the DOM element (li)
  li.innerText = project;
  // add DOM elements to my page
  projectList.appendChild(li);
}

})
.catch((error) => {
  // add error to
 console.log(error);
});
