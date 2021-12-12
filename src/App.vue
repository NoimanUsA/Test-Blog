<template>
  <MainLayout></MainLayout>
</template>
<script>
import { defineComponent } from 'vue';
import MainLayout from 'layouts/MainLayout.vue';

export default defineComponent({
  name: 'App',
  components: {
    MainLayout,
  },
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}
</style>
