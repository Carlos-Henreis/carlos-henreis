<template>
  <v-app-bar
    fixed
    flat
    tabs 
    dark 
    dense 
    color="grey darken-4"
    elevation=10
  >
    <v-app-bar-nav-icon class="hidden-lg-and-up" @click="drawerFlag = !drawerFlag"></v-app-bar-nav-icon>

    <v-toolbar-title
      @click="$vuetify.goTo('#top')"
      v-ripple
      v-html="appName"
    />
    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-md-and-down">
      <v-tabs
        right
        slot="activators"
        v-model="activeFlag"
        dark
        color="grey darken-4"
      >
        <v-tabs-slider color="primary"></v-tabs-slider>
        <v-tab @click="$vuetify.goTo('#aboutMe', { offset: -65 })">About Me</v-tab>
        <v-divider light vertical></v-divider>
        <v-tab @click="$vuetify.goTo('#academic', { offset: -65 })">Academic</v-tab>
        <v-divider light vertical></v-divider>
        <v-tab @click="$vuetify.goTo('#professionalExperience', { offset: -65 })">Professional Experience</v-tab>
        <v-divider light vertical></v-divider>
        <v-tab @click="$vuetify.goTo('#interests', { offset: -65 })">Interests & Skills</v-tab>
        <v-divider light vertical></v-divider>
        <v-tab @click="$vuetify.goTo('#projects', { offset: -65 })">My Projects</v-tab>
        <v-divider light vertical></v-divider>
        <v-tab @click="$vuetify.goTo('#hobbies', { offset: -65 })">Hobbies</v-tab>
        <v-divider light vertical></v-divider>
      </v-tabs>
    </v-toolbar-items>
  </v-app-bar>
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
      },
      active: {
        type: Number,
        default: ''
      },
      drawer: {
        type: Boolean,
        default: false
      }
    },
    methods: {

    },
    computed: {
      drawerFlag: {
        get () {
          return this.drawer
        },
        set (val) {
          this.$emit('reset-drawer', val)
        }
      },
      activeFlag: {
        get () {
          return this.active
        },
        set (val) {
          this.$emit('reset-active', val)
        }
      }
    },
    mounted () {

    }
}
</script>