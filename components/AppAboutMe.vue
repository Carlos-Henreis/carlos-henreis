<template>
  <v-flex xs12 class="text-center" id="aboutMe">
    <v-card>
      <v-card-title primary-title class="text-center">
        <div>
          <h2 class="display-2 mb-3">INTRODUCTION</h2>
          <h3>Hi, I'm Carlos. I'm currently working with web development and studying various things related to computing such as Artificial Intelligence and Optimization of Hyperparameters. Below is a resumé about me.</h3>
          <div>
            <v-btn
              outlined
              color="primary"
              dark large
              :href="resumeFileEn" target="_blank"
            >
              <v-icon left dark>mdi-file-document-multiple-outline</v-icon>
              View Resumé (in english)
            </v-btn>
            <v-btn
              outlined
              color="primary"
              dark large
              :href="resumeFileBr" target="_blank"
            >
              <v-icon left dark>mdi-file-document-multiple-outline</v-icon>
              View Resumé (in portuguese)
            </v-btn>
          </div>
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    active: {
      type: Number,
      default: ''
    }
  },
  computed: {
    resumeFileEn () {
      return process.env.BASE_URL + '/curriculum-vitae-en-Carlos-Reis.pdf';
    },
    resumeFileBr () {
      return process.env.BASE_URL + '/curriculum vitae-br-Carlos-Reis.pdf';
    }
  },
  methods: {

  },
  mounted () {
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