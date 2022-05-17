const signupForm = document.getElementById('signup-form');

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.getElementById('username-signup').value;
  const email = document.getElementById('email-signup').value;
  const password = document.getElementById('password-signup').value;
  console.log(username, email, password);
}

signupForm.addEventListener('submit', signupFormHandler);
