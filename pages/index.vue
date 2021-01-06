<template>
  <div v-scroll="onScroll">
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
    <app-header
      :folder-image="folderImage"
    ></app-header>
    <app-about-me
      :folder-file="folderFile"
      :active="active"
    ></app-about-me>
    <app-academic
      :active="active"
    ></app-academic>
    <app-professional-experience
      :active="active"
    ></app-professional-experience>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import AppNavbar from '~/components/AppNavbar.vue'
import AppNavigationDrawer from '~/components/AppNavigationDrawer.vue'
import AppHeader from '~/components/AppHeader.vue'
import AppAboutMe from '~/components/AppAboutMe.vue'
import AppAcademic from '~/components/AppAcademic.vue'
import AppProfessionalExperience from '~/components/AppProfessionalExperience.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
    AppNavbar,
    AppNavigationDrawer,
    AppHeader,
    AppAboutMe,
    AppAcademic,
    AppProfessionalExperience
  },
  data () {
    return {
      appName: 'Portfolio of Carlos Henrique Reis',
      folderImage: 'https://carlos-henreis.github.io/files/images/',
      folderFile: 'https://carlos-henreis.github.io/files/',
      drawer: false,
      active: 0,
      list: ['aboutMe', 'academic', 'professionalExperience'],
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
      console.log(item);
      return document.getElementById(item).offsetTop
    },
    onScroll () {
      this.currentOffset = window.pageYOffset
    }
  }
}
</script>
