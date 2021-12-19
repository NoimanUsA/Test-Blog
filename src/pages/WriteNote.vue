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
      >
        <template #label> Текст записи </template>
      </q-input>
      <div class="row col-12">
        <q-btn :disable="disableButton" type="submit" color="light-blue-8" glossy>Сохранить</q-btn>
      </div>
    </q-form>
  </div>
</template>

<script>
import { computed, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  name: 'CreateNote',

  setup() {
    const { dispatch } = useStore();
    const router = useRouter();
    const title = ref(null);
    const text = ref(null);
    const shortDesc = ref(null);
    const disableButton = computed(() => {
      if (!title.value || !text.value || !shortDesc.value) return true;
      return false;
    });

    function updateNotes() {
      const newNote = {
        title: title.value,
        text: text.value,
        shortDesc: shortDesc.value,
        comments: [],
      };

      dispatch('CREATE_NOTE', newNote);
      router.push('/notes');
      return true;
    }

    onMounted(() => {
      dispatch('FETCH_NOTES');
    });
    return {
      title,
      text,
      shortDesc,
      updateNotes,
      disableButton,
    };
  },
};
</script>
