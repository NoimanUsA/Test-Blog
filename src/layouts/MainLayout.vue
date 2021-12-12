<template>
  <q-layout view="hHh lpR lfr" class="bg-light-blue-10 text-grey-1">
    <q-header class="bg-primary text-white bg-light-blue-9 row justify-center shadow-4">
      <q-tabs align="left" name="navigation" class="col-8">
        <q-route-tab :to="{ name: 'notes' }">На главную</q-route-tab>
        <q-route-tab :to="{ name: 'write-note' }">Создать новую запись</q-route-tab>
      </q-tabs>
    </q-header>
    <q-page-container class="row justify-center col-sm-12 col-md-8">
      <q-page class="notes col-12 col-md-8 bg-light-blue-9 shadow-4 q-pa-md">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
};
</script>
