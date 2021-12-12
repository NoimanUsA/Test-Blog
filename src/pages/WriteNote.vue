<template>
  <div>
    <h1 class="text-h4">Создание новой записи</h1>
    <q-form class="q-mt-md row q-gutter-md" @submit.prevent="updateNotes">
      <q-input
        class="col-md-8 col-11"
        dense
        v-model="title"
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
        v-model="shortDesc"
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
        v-model="text"
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
import { ref } from 'vue';
import { addNote } from 'src/helpers/notes';
import { useRouter } from 'vue-router';

export default {
  name: 'CreateNote',

  setup() {
    const router = useRouter();
    const title = ref(null);
    const text = ref(null);
    const shortDesc = ref(null);
    const errors = ref({
      text: false,
      title: false,
      shortDesc: false,
    });

    function updateNotes() {
      if (!title.value || !text.value || !shortDesc.value) {
        errors.value = {
          text: !text.value,
          title: !title.value,
          shortDesc: !shortDesc.value,
        };
        return false;
      }
      const newNote = {
        title: title.value,
        text: text.value,
        shortDesc: shortDesc.value,
      };
      addNote(newNote);
      router.push('/');
      return true;
    }

    return {
      title,
      text,
      shortDesc,
      updateNotes,
      errors,
    };
  },
};
</script>
