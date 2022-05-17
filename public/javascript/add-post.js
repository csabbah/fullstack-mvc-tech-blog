const addPostForm = document.getElementById('addPost-form');

async function newPostHandler(event) {
  event.preventDefault();

  const post_title = document.getElementById('add-post-title').value;
  const post_desc = document.getElementById('add-post-desc').value;
  console.log(post_title, post_desc);
}

addPostForm.addEventListener('submit', newPostHandler);
