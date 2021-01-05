<template>
  <v-app>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <app-fab />
  </v-app>
</template>

<script>
import AppFab from '~/components/AppFab.vue'

export default {
  components: {
    AppFab
  },
  data () {
    return {
    }
  }
}
</script>
