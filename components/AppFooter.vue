<template>
<v-footer
  dark
  height="auto"
  id="footer"
>
  <v-card
    class="flex"
    flat
    tile
  >
    <v-card-title class="blue darken-4">
      <strong class="subheading">More about me</strong>

      <v-spacer></v-spacer>

      <v-btn
        class="mx-3"
        dark
        href="https://www.linkedin.com/in/Carlos-Henreis" target="_blank"
        icon
      >
        <v-icon size="24px">mdi-linkedin</v-icon>
      </v-btn>
    <v-btn
        class="mx-3"
        dark
        href="http://www.github.com/Carlos-Henreis" target="_blank"
        icon
      >
        <v-icon size="24px">mdi-github</v-icon>
      </v-btn>
    <v-btn
        class="mx-3"
        dark
        href="http://lattes.cnpq.br/7813456161666411" target="_blank"
        icon
      >
        <v-icon size="24px">mdi-school</v-icon>
      </v-btn>
    <v-btn
        class="mx-3"
        dark
    href="https://www.instagram.com/carloshenrique.reis.35/" target="_blank"
        icon
      >
        <v-icon size="24px">mdi-instagram</v-icon>
      </v-btn>

    </v-card-title>

    <v-card-actions class="grey darken-3 justify-center">
      <span>Made with <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a> & <a class="white--text" href="https://vuejs.org">VueJs</a> by <a class="white--text" href="https://github.com/Carlos-Henreis/">Carlos-Henreis</a> — &copy; {{ new Date().getFullYear() }}</span>
    </v-card-actions>
  </v-card>
</v-footer>
</template>
<script>
export default {
data () {
  return {

  }
},
props: {
  appName: {
    type: String,
    default: ''
  },

  folderImage: {
    type: String,
    default: ''
  }
},
computed: {
  imageLattes () {
    return this.folderImage + 'icon-lattes-34.png';
  },
  imageGithub () {
    return this.folderImage + 'icon-github-32.png';
  },
  imageLinkedIn () {
    return this.folderImage + 'icon-linkedin-34.png';
  }
},
methods: {

},
mounted () {

}
}
</script>