const loginForm = document.getElementById('login-form');

async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.getElementById('email-login').value;
  const passwrd = document.getElementById('password-login').value;
  console.log(email, passwrd);
}

loginForm.addEventListener('submit', loginFormHandler);
