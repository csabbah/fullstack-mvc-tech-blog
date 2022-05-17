// ----- ----- ----- ----- Below code is executed in the dashboard template

const addPostForm = document.getElementById('addPost-form');

async function newPostHandler(event) {
  event.preventDefault();

  // Extract the values from the form
  const post_title = document.getElementById('add-post-title').value;
  const post_desc = document.getElementById('add-post-desc').value;

  // Execute the fetch using above values and insert them into the body (to be extracted in the route i.e. req.body.post_title)
  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      post_title,
      post_desc,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // If the response is ok, simply refresh the page
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    // Otherwise alert the user accordingly
    alert(response.statusText);
  }
}

// Add the event handler for the form submission
addPostForm.addEventListener('submit', newPostHandler);
