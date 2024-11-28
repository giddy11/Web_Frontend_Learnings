// Modal elements
const modal = document.getElementById("modal");
const pleaseDiv = document.getElementById("Please");
const successDiv = document.querySelector(".success");
const okBtn = document.querySelector(".btn");
const name = document.getElementById("name");
const email = document.getElementById("email");


// Password validation elements
const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirm-password");
const messageContainer = document.getElementById("message");

// Buttons
const registerBtn = document.getElementById("register");
const submitButton = document.getElementById("submit-btn");

// Modal control functions
const showModal = (contentToShow) => {
  modal.style.display = "flex";
  pleaseDiv.style.display = contentToShow === "please" ? "flex" : "none";
  successDiv.style.display = contentToShow === "success" ? "flex" : "none";
};

const hideModal = () => {
  modal.style.display = "none";
};

// Password validation function
const validatePasswords = () => {
  const password = passwordField.value;
  const confirmPassword = confirmPasswordField.value;

  if (!password || !confirmPassword) {
    updateMessage("Please fill in both fields.", "red");
    return false;
  }

  if (password !== confirmPassword) {
    updateMessage("Passwords do not match!", "red");
    clearMessageAfterDelay();
    return false;
  }

  updateMessage("Passwords match!", "green");
  return true;
};

// Helper to update the validation message
const updateMessage = (message, color) => {
  messageContainer.textContent = message;
  messageContainer.style.color = color;
};

// Helper to clear the message after a delay
const clearMessageAfterDelay = () => {
    setTimeout(() => {
      messageContainer.textContent = "";
    }, 5000); // Clears the message after 5 seconds
  };

  const clear = () => {
    messageContainer.textContent = "";
    confirmPasswordField.value = "";
    passwordField.value = "";
    name.value = "";
    email.value = "";
  };

// Event listeners
registerBtn.addEventListener("click", (event) => {
    event.preventDefault();
  
    if (validatePasswords()) {
      showModal("please");
      setTimeout(() => showModal("success"), 3000);
    }
  });

// okBtn.addEventListener("click", hideModal);

okBtn.addEventListener("click", () => {
    hideModal();
    clear();
});

confirmPasswordField.addEventListener("input", validatePasswords);