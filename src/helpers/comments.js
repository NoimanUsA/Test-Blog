const getComments = () => {
  const comments = window.localStorage.getItem('comments');
  if (comments) return JSON.parse(comments);
  return {};
};

const updateStorageComments = (newComments) => {
  window.localStorage.removeItem('comments');
  window.localStorage.setItem('comments', JSON.stringify(newComments));
};
const getNoteComments = (id) => {
  const comments = getComments();
  return comments[id] || [];
};

const updateComments = (noteId, newComments) => {
  const comments = getComments();
  comments[noteId] = newComments;
  updateStorageComments(comments);
};
export { updateComments, getComments, getNoteComments };
