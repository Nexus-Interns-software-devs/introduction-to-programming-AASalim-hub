// LAB-08 STARTER CODE: Contact Manager
// Week 2 - Thursday: Data Structures Application

/*
 * YOUR TASK:
 * Build a CLI Contact Manager application
 * 
 * REQUIREMENTS:
 * 1. Add new contacts (name, email, phone)
 * 2. View all contacts
 * 3. Search contacts by name
 * 4. Update existing contacts
 * 5. Delete contacts
 * 
 * BONUS:
 * - Save to JSON file
 * - Load from JSON file
 * - Validate email format
 * - Prevent duplicate emails
 */

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Global data
let contacts = [];
let nextId = 1;

/**
 * Display main menu
 */
function showMenu() {
  console.log("\n=== CONTACT MANAGER ===");
  console.log("1. Add Contact");
  console.log("2. View All Contacts");
  console.log("3. Search by Name");
  console.log("4. Update Contact");
  console.log("5. Delete Contact");
  console.log("6. Exit");
  
  readline.question("\nChoose option (1-6): ", handleMenuChoice);
}

/**
 * Handle menu choice
 */
function handleMenuChoice(choice) {
  switch(choice) {
    case '1':
      addContact();
      break;
    case '2':
      viewContacts();
      break;
    case '3':
      searchContacts();
      break;
    case '4':
      updateContact();
      break;
    case '5':
      deleteContact();
      break;
    case '6':
      console.log("Goodbye!");
      readline.close();
      break;
    default:
      console.log("Invalid choice!");
      showMenu();
  }
}

/**
 * Add a new contact
 * TODO: Implement this function
 */
function addContact() {
  // Get name, email, phone from user
  // Create contact object with id
  // Add to contacts array
  // Increment nextId
}

/**
 * View all contacts
 * TODO: Implement this function
 */
function viewContacts() {
  // Check if contacts array is empty
  // Loop through and display each contact
}

/**
 * Search contacts by name
 * TODO: Implement this function
 */
function searchContacts() {
  // Get search query from user
  // Filter contacts (case-insensitive)
  // Display results
}

/**
 * Update a contact
 * TODO: Implement this function
 */
function updateContact() {
  // Get contact ID
  // Find contact
  // Get new values
  // Update contact
}

/**
 * Delete a contact
 * TODO: Implement this function
 */
function deleteContact() {
  // Get contact ID
  // Find and remove contact
  // Confirm deletion
}

// Start the app
showMenu();
