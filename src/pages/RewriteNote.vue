<template>
  <div>
    <h1 class="text-h4">Редактирование</h1>
    <q-form class="q-mt-md row q-gutter-md" @submit.prevent="updateNote">
      <q-input
        class="col-md-8 col-11"
        dense
        v-model="newData.title"
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
        v-model="newData.shortDesc"
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
        v-model="newData.text"
        name="header"
        color="light-blue-10"
        bg-color="grey-1"
        label
        outlined
        type="textarea"
        clearable
      >
        <template #label> Текст записи </template>
      </q-input>
      <div class="row col-12">
        <q-btn type="submit" :disable="disableButton" color="light-blue-8" glossy>Сохранить</q-btn>
      </div>
    </q-form>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import { computed, ref, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Note',
  setup() {
    const { dispatch, state } = useStore();
    const router = useRouter();
    const noteId = useRoute().params.id;
    const note = computed(() => (state.notes ? state.notes[noteId] : {}));
    const newData = ref({
      title: note.value.title,
      text: note.value.text,
      shortDesc: note.value.shortDesc,
    });
    const disableButton = computed(() => {
      if (!newData.value.title || !newData.value.text || !newData.value.shortDesc) return true;
      return false;
    });

    function updateNote() {
      dispatch('UPDATE_NOTE', { noteId, newData: newData.value });
      router.push({
        name: 'note',
        params: { id: noteId },
      });

      return true;
    }
    onMounted(() => {
      dispatch('FETCH_NOTES');
    });
    return {
      newData,
      updateNote,
      disableButton,
    };
  },
};
</script>
