<template>
  <div class="notes">
    <div class="row justify-end"></div>
    <ul class="notes__list q-mt-md row q-gutter-md" v-if="notesLength > 0">
      <router-link
        class="column notes__note q-pa-md shadow-2 text-grey-1 rounded-borders"
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
    <div v-else class="text-h4 text-center">Нет ни одной записи...</div>
  </div>
</template>

<script>
import { defineComponent, computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Notes',
  setup() {
    const { dispatch, state } = useStore();

    const notesList = computed(() => state.notes || {});
    const notesLength = computed(() => Object.keys(notesList.value).length);
    function getCommentsLength(noteId) {
      return notesList.value[noteId].comments.length;
    }
    onMounted(() => {
      dispatch('FETCH_NOTES');
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
