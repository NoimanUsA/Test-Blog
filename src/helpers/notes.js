import { uuid } from 'vue-uuid';

const getNotes = () => {
  const notes = window.localStorage.getItem('notes');
  if (notes) return JSON.parse(notes);
  return false;
};

const getNote = (id) => {
  const notes = getNotes();
  return notes[id];
};

const updateStorageNotes = (newNotes) => {
  window.localStorage.removeItem('notes');
  window.localStorage.setItem('notes', JSON.stringify(newNotes));
};

const addNote = (newNote) => {
  const id = uuid.v1();
  const notes = getNotes() || {};
  notes[id] = {
    ...newNote,
    id,
  };
  updateStorageNotes(notes);
};

const updateNote = (noteId, note) => {
  const notes = getNotes();
  notes[noteId] = note;
  updateStorageNotes(notes);
};

const removeNote = (id) => {
  const notes = getNotes() || {};
  delete notes[id];
  updateStorageNotes(notes);
};

export {
  addNote, getNotes, removeNote, getNote, updateNote,
};
