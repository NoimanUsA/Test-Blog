import { store } from 'quasar/wrappers';
import { createStore } from 'vuex';
import { uuid } from 'vue-uuid';

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(() => {
  const Store = createStore({
    state: {
      notes: null,
    },
    getters: {},
    mutations: {
      setNotes(state, notes) {
        state.notes = notes;
      },
      addNote(state, newNote) {
        const id = uuid.v1();
        newNote.id = id;
        state.notes[newNote.id] = newNote;
      },
      updateNote(state, { noteId, newData }) {
        state.notes[noteId] = {
          ...state.notes[noteId],
          ...newData,
        };
      },
      removeNote(state, noteId) {
        delete state.notes[noteId];
      },
      addComment(state, { newComment, noteId }) {
        const commentId = uuid.v1();
        state.notes[noteId].comments.push({
          ...newComment,
          id: commentId,
        });
      },
      removeComment(state, { noteId, commentId }) {
        state.notes[noteId].comments = state.notes[noteId].comments
          .filter((comment) => comment.id !== commentId);
      },
    },
    actions: {
      FETCH_NOTES({ commit, state }) {
        if (state.notes) return;
        const notes = window.localStorage.getItem('notes');
        if (!notes) {
          commit('setNotes', {});
          return;
        }
        commit('setNotes', JSON.parse(notes));
      },

      CREATE_NOTE({ dispatch, commit }, newNote) {
        commit('addNote', newNote);
        dispatch('UPDATE_NOTES');
      },

      UPDATE_NOTE({ dispatch, commit }, payload) {
        commit('updateNote', payload);
        dispatch('UPDATE_NOTES');
      },

      REMOVE_NOTE({ commit, dispatch }, noteId) {
        commit('removeNote', noteId);
        dispatch('UPDATE_NOTES');
      },

      CREATE_COMMENT({ dispatch, commit }, payload) {
        commit('addComment', payload);
        dispatch('UPDATE_NOTES');
      },

      REMOVE_COMMENT({ commit, dispatch }, payload) {
        commit('removeComment', payload);
        dispatch('UPDATE_NOTES');
      },

      UPDATE_NOTES({ state }) {
        window.localStorage.setItem('notes', JSON.stringify(state.notes));
      },
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
