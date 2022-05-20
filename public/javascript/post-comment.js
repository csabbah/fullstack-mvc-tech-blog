// ----- ----- ----- ----- Below code is executed in the single-post template

const addCommentForm = document.getElementById('comment-form');

async function newCommentHandler(event) {
  event.preventDefault();

  // Extract the values from the form
  const comment_text = document.getElementById('comment-field').value;
  const commentStatusEl = document.getElementById('comment-status');

  if (comment_text.length <= 4) {
    // If any add post input value is under 4 character length, notify the user and restrict submission
    commentStatusEl.textContent =
      'Please make sure the comment contains character count above 4';
    commentStatusEl.style.color = 'red';
    setTimeout(() => {
      commentStatusEl.textContent = 'Required character count above 4';
      commentStatusEl.style.color = 'black';
    }, 4000);
  } else {
    commentStatusEl.textContent = 'Successfully posted!';
    commentStatusEl.style.color = 'Green';

    // Add the function here to add a new post, need to refer the post ID
    // Extract post id via dataset
    console.log(comment_text);
  }
}

// Add the event handler for the form submission
addCommentForm.addEventListener('submit', newCommentHandler);
