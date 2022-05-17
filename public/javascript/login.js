// ----- ----- ----- ----- Below code is executed in the login template

const loginForm = document.getElementById('login-form');

async function loginFormHandler(event) {
  event.preventDefault();
  // Extract the values from the login form
  const email = document.getElementById('email-login').value;
  const password = document.getElementById('password-login').value;
}

// Add the event handler for the form submission
loginForm.addEventListener('submit', loginFormHandler);
