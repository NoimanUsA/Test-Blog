<template>
  <div class="notes">
    <div class="row justify-end"></div>
    <ul class="notes__list q-mt-md row q-gutter-md" v-if="notesLength > 0">
      <router-link
        class="column notes__note q-pa-md col-md-4 col-sm-12 shadow-2 text-grey-1 rounded-borders"
        v-for="(note, id) in notesList"
        :key="id"
        :to="{
          name: 'note',
          params: {
            id: id,
          },
        }"
      >
        <div class="text-h5">{{ note.title }}</div>

        <div class="q-mt-md text-body">{{ note.shortDesc }}</div>
        <div class="q-mt-md">Комментариев : {{ getCommentsLength(id) }}</div>
      </router-link>
    </ul>
    <div v-else class="text-h3">Нет ни одной записи</div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import { getNotes } from 'src/helpers/notes';
import { getComments } from 'src/helpers/comments';

export default defineComponent({
  name: 'Notes',
  setup() {
    const notesList = ref([]);
    const notesLength = ref(0);
    const comments = ref([]);
    function getCommentsLength(id) {
      return comments.value[id] ? comments.value[id].length : 0;
    }
    onMounted(() => {
      notesList.value = getNotes();
      comments.value = getComments();
      notesLength.value = Object.keys(notesList.value).length;
    });
    return {
      notesList,
      notesLength,
      getCommentsLength,
    };
  },
});
</script>

<style lang="scss" scoped>
.notes__note {
  &:hover {
    background-color: #0288d1;
  }
}
</style>
