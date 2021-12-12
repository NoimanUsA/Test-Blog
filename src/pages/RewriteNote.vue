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
      >
        <template #label> Краткое описание </template>
      </q-input>
      <q-input
        class="col-md-8 col-11"
        dense
        v-model="note.text"
        name="header"
        color="light-blue-10"
        error="false"
        bg-color="grey-1"
        label
        outlined
        type="textarea"
        clearable
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

    function updateCurrentNote() {
      updateNote(noteId, note.value);
      router.push({
        name: 'note',
        params: { id: noteId },
      });
    }
    onMounted(() => {
      note.value = getNote(noteId);
    });
    return {
      note,
      noteId,
      updateCurrentNote,
    };
  },
};
</script>
