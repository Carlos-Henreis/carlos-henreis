<template>
  <v-fab-transition>
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      :style="{
        bottom: $vuetify.breakpoint.smOnly ? '64px' : ''
      }"
      fab
      dark
      fixed
      bottom
      right
      color="primary"
      @click="toTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
    data () {
      return {
        fab: false
      }
    },
    methods: {
      onScroll () {
        if (typeof window === 'undefined') return
        const top = window.pageYOffset ||   document.documentElement.offsetTop || 0
        this.fab = top > 30
      },
      toTop () {
        this.$vuetify.goTo(0)
      }
    },
    mounted () {
    }
}
</script>