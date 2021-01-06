<template>
  <v-img id="top" :gradient="gradient" dark class="elevation-5 pt-5" height="none">
    <v-container fluid fill-height grid-list-xl>
      <v-layout row wrap align-center>
        <v-flex xs12 md8 my-4 class="text-center">
          <v-card id="introduction-card" flat>
            <h1 class="display-2 mb-3">Carlos Henrique Reis</h1>
            <h2>
              Bachelor of Science in Computer Science
              <em style="display:block;font-size:1rem;">Universidade Federal de Itajubá – UNIFEI (Federal University of Itajubá)</em>
            </h2>
          </v-card>
        </v-flex>

        <v-flex xs12 md4 text-xs-center my-4 class="text-center">
          <transition>
            <v-avatar
              class="grey lighten-4"
              v-if="isAvatarVisible"
              :size="avatarSize"
            >
              <img :src="imageProfile" />
            </v-avatar>
          </transition>
        </v-flex>

      </v-layout>
    </v-container>
  </v-img>
</template>

<script>
export default {
  data () {
    return {
      avatarSize: 250,
      gradient: 'to right, #004, #1CB5E0',
      isAvatarVisible: false
    }
  },
  props: {
    folderImage: {
      type: String,
      default: ''
    }
  },
  computed: {
    imageProfile () {
      return this.folderImage + 'profile.png';
    }
  },
  methods: {

  },
  mounted () {
    // To trigger animation
    this.isAvatarVisible = true;
  }
}
</script>
<style>
/* Remove background of card in v-jumbotron */
#introduction-card {
  background-color: rgba(0, 0, 0, 0);
}

/* Animation */
.v-enter-active, .v-leave-active {
  transition: all 1s ease;
}

.v-enter, .v-leave-to {
  transform: scale(0.1);
  opacity: 0;
}
* {
    box-sizing: border-box;
}
</style>