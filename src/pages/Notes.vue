<template>
  <q-page padding class="notes col-8 bg-light-blue-9">
    <div class="row justify-end"></div>
    <ul class="notes__list q-mt-md">
      <router-link
        class="notes__note q-pa-md column shadow-2 text-grey-1"
        v-for="note in notesList" :key="note._id" :to="{ name: 'note', params: { id: note._id } }"
      >
        <h4 class="text-h4">{{ note.title }}</h4>
        <div class="q-mt-md text-body">{{ note.shortDesc }}</div>
        <div class="q-mt-md">Комментариев : {{ note.comments.length }}</div>
      </router-link>
    </ul>
    <div class="row justify-center q-mt-md">
      <q-spinner size="40px" color="blue-10" v-if="loading"></q-spinner>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted, computed } from 'vue';
import { uuid } from 'vue-uuid';

export default defineComponent({
  name: 'Notes',
  setup() {
    const defaultNote = [
      {
        _id: uuid.v1(),
        title: 'Заголовок',
        shortDesc: 'Краткое описание записи не длиннее 200 символов',
        text: 'Длинный текст',
        comments: [],
      },
    ];
    const notesList = computed(() => {
      const notes = window.localStorage.getItem('notes');
      if (notes) return JSON.parse(notes);
      return defaultNote;
    });

    const loading = ref(true);

    onMounted(async () => {
      loading.value = false;
    });
    return {
      notesList,
      loading,
    };
  },
});
</script>

<style lang="scss" scoped>
.notes__note {
  border-radius: 10px;
  box-shadow: 0 1px 5px rgb(0 0 0 / 40%);
  &:hover {
    background-color: #0288d1;
  }
  &:active {
    transform: translateY(1px);
  }
}
</style>
