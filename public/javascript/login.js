// ----- ----- ----- ----- Below code is executed in the login template

const loginForm = document.getElementById('login-form');

async function loginFormHandler(event) {
  event.preventDefault();
  // Extract the values from the login form
  const email = document.getElementById('email-login').value;
  const password = document.getElementById('password-login').value;
  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

// Add the event handler for the form submission
loginForm.addEventListener('submit', loginFormHandler);
