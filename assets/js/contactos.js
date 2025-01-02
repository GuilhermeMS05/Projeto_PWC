function validateForm() {
  let isValid = true;
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var messageText = document.getElementById("message");

  if (nameInput.value.length < 3) {
    showError("name", "Erro no nome!")
    isValid = false;
  } else {
    hideError("name");
  }

  if (!validateEmail(emailInput.value)) {
    showError("email", "Erro no email!")
    isValid = false;
  } else {
    hideError("email");
  }

  if (messageText.value.trim() == "") {
    showError("message", "Erro na mensagem!")
    isValid = false;
  } else {
    hideError("message");
  }

  return isValid;
}

function validateEmail(email) {
  var regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regexEmail.test(email); //Esta função test() devolve true ou false
}

function showError(fieldId, message) {
  var errorDiv = document.getElementById(`${fieldId}-error`);
  errorDiv.textContent = message;
  errorDiv.style.display = "block";
}

function hideError(fieldId) {
  var errorDiv = document.getElementById(`${fieldId}-error`);
  errorDiv.style.display = "none";
}

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateForm()) {
      var success = document.getElementById("success-message");
      success.style.opacity = "1";
      setTimeout(() => {
        success.style.opacity = "0";
      }, 3000);
    }
  });
