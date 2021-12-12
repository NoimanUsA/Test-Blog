<template>
  <div class="note">
    <div rounded class="note q-pa-md column shadow-2 text-grey-1 rounded-borders">
      <h2 class="text-h4">{{ note.title }}</h2>
      <div class="q-mt-lg">{{ note.text }}</div>
      <div class="row q-mt-xl q-gutter-xs">
        <q-btn
          :to="{
            name: 'rewrite-note',
            params: { id: note.id },
          }"
          glossy
          >Редактировать</q-btn
        >
        <q-btn @click="removeCurrentNote" color="red-8" glossy>Удалить</q-btn>
      </div>
    </div>
    <div rounded class="note q-pa-md q-mt-md column shadow-2 text-grey-1 rounded-borders">
      <h2 class="text-h4">Комментарии</h2>
      <div class="text-h4 q-mt-xl" v-if="comments.length === 0">Здесь пока нет комментариев</div>
      <div class="note__comments column q-gutter-md q-mt-md">
        <div
          class="note__comment q-pa-md column shadow-2 text-grey-1 rounded-borders"
          v-for="comment in comments"
          :key="comment.id"
        >
          <div class="text-h5">{{ comment.author }}</div>
          <div class="q-mt-md">{{ comment.text }}</div>
          <div class="row q-mt-md">
            <q-btn @click="removeComment(comment.id)" color="red-8" glossy>Удалить</q-btn>
          </div>
        </div>
      </div>
      <q-form class="q-mt-md column q-gutter-md" @submit.prevent="addNewComment">
        <q-input
          v-model="newCommentAuthor"
          dense
          name="title"
          color="light-blue-10"
          bg-color="grey-1"
          label
          outlined
          class="col-6"
          clearable
        >
          <template #label> Ваше имя </template>
        </q-input>
        <q-input
          v-model="newCommentText"
          dense
          name="header"
          color="light-blue-10"
          class="row col-7"
          error="false"
          bg-color="grey-1"
          label
          outlined
          type="textarea"
          clearable
        >
          <template #label> Текст комментария </template>
        </q-input>
        <div class="row">
          <q-btn :disabled="!errors" type="submit" color="light-blue-8" glossy>Сохранить</q-btn>
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import { getNote, removeNote } from 'src/helpers/notes';
import { getNoteComments, updateComments } from 'src/helpers/comments';

import { useRoute, useRouter } from 'vue-router';
import { computed, ref, onMounted } from 'vue';
import { uuid } from 'vue-uuid';

export default {
  name: 'Note',
  setup() {
    const router = useRouter();
    const noteId = useRoute().params.id;
    const note = ref({});
    const comments = ref([]);
    const newCommentAuthor = ref(null);
    const newCommentText = ref(null);
    const errors = computed(() => newCommentText.value && newCommentAuthor.value);

    function addNewComment() {
      const commentId = uuid.v1();
      comments.value.push({
        author: newCommentAuthor.value,
        text: newCommentText.value,
        id: commentId,
      });
      updateComments(noteId, comments.value);
    }

    function removeComment(id) {
      const filtered = comments.value.filter((item) => item.id !== id);
      comments.value = filtered;
      updateComments(noteId, comments.value);
    }

    function removeCurrentNote() {
      removeNote(noteId);
      router.push('/');
    }
    onMounted(() => {
      note.value = getNote(noteId);
      if (!note.value) router.push('/');
      comments.value = getNoteComments(noteId);
    });

    return {
      note,
      noteId,
      comments,
      newCommentAuthor,
      newCommentText,
      addNewComment,
      removeComment,
      removeCurrentNote,
      errors,
    };
  },
};
</script>
