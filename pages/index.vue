<template>
  <div v-scroll="onScroll">
    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1500px;">
      </v-container>
    </v-sheet>
    <app-navbar
      :drawer="drawer"
      :active="active"
      @reset-drawer="drawer = $event"
      @reset-active="active = $event"
      :app-name="appName"
      :folder-image="folderImage"
    ></app-navbar>
    <app-navigation-drawer
      :drawer="drawer"
      @reset-drawer="drawer = $event"
    ></app-navigation-drawer>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import AppNavbar from '~/components/AppNavbar.vue'
import AppNavigationDrawer from '~/components/AppNavigationDrawer.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
    AppNavbar,
    AppNavigationDrawer
  },
  data () {
    return {
      appName: 'Portfolio of Carlos Henrique Reis',
      folderImage: 'https://carlos-henreis.github.io/files/images/',
      folderFile: 'https://carlos-henreis.github.io/files/',
      drawer: false,
      active: 0,
      list: ['aboutMe', 'academic', 'professionalExperience', 'interests', 'projects', 'hobbies'],
      currentOffset: 0
    }
  },
  watch: {
    currentOffset: function (val) {
      if (val < this.getItemOffset(this.list[0]) - 65) {
        this.active = 0
        return
      }
      let that = this
      let index = this.list.findIndex(item => {
        return  that.getItemOffset(item) - 65 > val
      })
      const lastIndex = this.list.length

      this.active = index > -1 ? index-1 : lastIndex-1
    }
  },
  methods: {
    getItemOffset (item) {
      return document.getElementById(item).offsetTop
    },
    onScroll () {
      this.currentOffset = window.pageYOffset
    }
  }
}
</script>
