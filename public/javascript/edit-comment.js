async function editComment(comment_id, newComment) {
  const postId = window.location.pathname.split('/')[2];
  const response = await fetch(`/api/comments/${comment_id}`, {
    method: 'PUT',
    body: JSON.stringify({
      comment_text: newComment,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace(`/post/${postId}`);
  } else {
    alert(response.statusText);
  }
}

const editBtn = document.querySelectorAll('.edit-comment');
editBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    let commentId = btn.dataset.commentId;
    console.log(commentId);
  });
});
