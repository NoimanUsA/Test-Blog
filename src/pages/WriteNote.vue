<template>
  <q-page class="column">
    <h1 class="text-h4">Создание новой записи</h1>
    <q-form class="q-mt-md" @submit="addNote">
      <q-input
        v-model="title"
        name="title"
        color="light-blue-10"
        error="true"
        bg-color="grey-1"
        label
        outlined
        class="col-6"
      >
        <template #label> Заголовок записи </template>
      </q-input>

      <q-input
        v-model="text"
        name="header"
        color="light-blue-10"
        error="true"
        bg-color="grey-1"
        label
        outlined
        type="textarea"
        class="col-10"
      >
        <template #label> Текст записи </template>
      </q-input>
      <q-btn-group push spread glossy class="col-6">
        <q-btn type="submit" color="light-blue-8">Сохранить</q-btn>
        <q-btn @click='clearInputs' color="red-8">Очистить</q-btn>
      </q-btn-group>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { uuid } from 'vue-uuid';

export default defineComponent({
  name: 'CreateNote',

  setup() {
    const title = ref(null);
    const text = ref(null);

    function addNote() {
      const notesList = JSON.parse(window.localStorage.getItem('notes')) || [];
      const shortDesc = text.value.length > 100 ? `${text.value.slice(0, 200)}...` : text.value;
      notesList.push({
        _id: uuid.v1(),
        title: title.value,
        text: text.value,
        shortDesc,
        comments: [],
      });
      window.localStorage.setItem('notes', JSON.stringify(notesList));
    }

    function clearInputs() {
      title.value = null;
      text.value = null;
    }
    return {
      title,
      text,
      addNote,
      clearInputs,
    };
  },
});
</script>
