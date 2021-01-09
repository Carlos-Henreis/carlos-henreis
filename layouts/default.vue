<template>
  <v-app>
    <v-main>
      <nuxt />
    </v-main>
    <app-fab />
  </v-app>
</template>

<script>
import AppFab from '~/components/AppFab.vue'

export default {
  components: {
    AppFab,
  },
  data () {
    return {
    }
  }
}
</script>
<style>
/* Hide side scrollbar if content does not need it */
html {
  overflow-y: auto;
}
.application {
  font-family: 'Quicksand', sans-serif;
}
</style>

