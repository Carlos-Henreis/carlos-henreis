<template>
  <v-navigation-drawer
    v-model="drawerFlag"
    fixed
    class="hidden-lg-and-up"
    temporary
  >
    <v-list dense>
      <v-list-item-group
        color="primary"
      >
        
      </v-list-item-group>
    </v-list>

    <v-list 
      nav
      dense
      class="pt-0"
    >
      <v-list-item-group
        color="primary"
      >
        <v-list-item
          @click="$vuetify.goTo('#aboutMe', { offset: -55 }); drawerFlag = !drawerFlag"
        >
          <v-list-item-icon>
            <v-icon> mdi-information</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>About Me</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
          @click="$vuetify.goTo('#academic', { offset: -55 }); drawerFlag = !drawerFlag"
        >
          <v-list-item-icon>
            <v-icon>mdi-school</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Academic</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
          @click="$vuetify.goTo('#professionalExperience', { offset: -55 }); drawerFlag = !drawerFlag"
        >
          <v-list-item-icon>
            <v-icon> mdi-laptop</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>rofessional Experience</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
          @click="$vuetify.goTo('#interests', { offset: -55 }); drawerFlag = !drawerFlag"
        >
          <v-list-item-icon>
            <v-icon> mdi-wrench</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Interests & Skills</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
          @click="$vuetify.goTo('#projects', { offset: -55 }); drawerFlag = !drawerFlag"
        >
          <v-list-item-icon>
            <v-icon> mdi-folder-star</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>My Projects</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
          @click="$vuetify.goTo('#hobbies', { offset: -55 }); drawerFlag = !drawerFlag"
        >
          <v-list-item-icon>
            <v-icon> mdi-face</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Hobbies</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ["drawer"],
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
    }
  },
  mounted () {

  }
}
</script>