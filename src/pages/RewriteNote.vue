<template>
  <div>
    <h1 class="text-h4">Редактирование</h1>
    <q-form class="q-mt-md row q-gutter-md" @submit.prevent="updateCurrentNote">
      <q-input
        class="col-md-8 col-11"
        dense
        v-model="note.title"
        name="title"
        color="light-blue-10"
        bg-color="grey-1"
        label
        outlined
        clearable
        :error="errors.title"
      >
        <template #label> Заголовок </template>
      </q-input>

      <q-input
        class="col-md-8 col-11"
        dense
        v-model="note.shortDesc"
        name="title"
        color="light-blue-10"
        bg-color="grey-1"
        label
        outlined
        clearable
        :error="errors.shortDesc"
      >
        <template #label> Краткое описание </template>
      </q-input>
      <q-input
        class="col-md-8 col-11"
        dense
        v-model="note.text"
        name="header"
        color="light-blue-10"
        bg-color="grey-1"
        label
        outlined
        type="textarea"
        clearable
        :error="errors.text"
      >
        <template #label> Текст записи </template>
      </q-input>
      <div class="row col-12">
        <q-btn type="submit" color="light-blue-8" glossy>Сохранить</q-btn>
      </div>
    </q-form>
  </div>
</template>

<script>
import { getNote, updateNote } from 'src/helpers/notes';
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

export default {
  name: 'Note',
  setup() {
    const router = useRouter();
    const noteId = useRoute().params.id;
    const note = ref({});
    const errors = ref({
      text: false,
      title: false,
      shortDesc: false,
    });
    function updateCurrentNote() {
      const { title, text, shortDesc } = note.value;
      if (!title || !text || !text) {
        errors.value = {
          text: !text,
          title: !title,
          shortDesc: !shortDesc,
        };
        return false;
      }

      updateNote(noteId, note.value);
      router.push({
        name: 'note',
        params: { id: noteId },
      });

      return true;
    }
    onMounted(() => {
      note.value = getNote(noteId);
    });
    return {
      note,
      noteId,
      updateCurrentNote,
      errors,
    };
  },
};
</script>
