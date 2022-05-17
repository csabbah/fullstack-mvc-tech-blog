// ----- ----- ----- ----- Below code is executed in the login template

const signupForm = document.getElementById('signup-form');

async function signupFormHandler(event) {
  event.preventDefault();
  // Extract the values from the signp form
  const username = document.getElementById('username-signup').value;
  const email = document.getElementById('email-signup').value;
  const password = document.getElementById('password-signup').value;
}

// Add the event handler for the form submission
signupForm.addEventListener('submit', signupFormHandler);
