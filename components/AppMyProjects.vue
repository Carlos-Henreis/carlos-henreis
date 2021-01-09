<template>
<v-flex xs12 text-xs-center id="projects">
  <v-card>
    <v-card-title primary-title class="text-center">
      <v-container grid-list-md text-xs-center>
        <h2 class="display-2 mb-3">MY PROJECTS</h2>
        <h3>There are some projects that I dedicated recently with some topics of my interest, such as Tensorflow/Pandas, Machine Learning, etc.</h3>
      </v-container>
    </v-card-title>
    <v-card-text>
      <v-flex xs12>
        <v-card>
          <v-container grid-list-md text-xs-center>
            <v-layout row wrap>
              <v-flex xs12 sm6 lg4
                v-for="project in projects"
                :key="project.nome"
              >
                <v-card hover :href="project.link" height="100%" target="_blank">
                  <v-img
                    height="330px"
                    :src="project.image"
                  ></v-img> 

                  <v-divider />

                  <v-card-text>
                    <h3 v-html="project.nome" class="mb-2"></h3>
                    <v-chip
                      class="white--text"
                      color=info
                      small
                      v-for="tag in project.tags"
                      :key="tag"
                    >
                      {{ tag }}
                    </v-chip>
                  </v-card-text>
                  <v-slide-y-transition>
                    <v-card-text v-show="show">
                      <h4>More info</h4>
                      {{project.description}}
                    </v-card-text>
                  </v-slide-y-transition>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-card-text>
  </v-card>
</v-flex>
</template>

<script>
export default {
  data () {
    return {
      show: true,
      projects: [
        {
          nome: 'Draggable blur mask over image',
          description: 'Draggable blur mask over image (use canvas vue/vuetify)',
          tags: ['VueJs', 'Vuetify', 'Canvas'],
          type: 'code',
          link: this.folderFile +'draggable-blur-mask.html',
          image: this.folderImage + 'Blur.png'
        },
        {
          nome: 'Optimization of Hyperparameters in Deep Neural Networks',
          description: 'This paper presents a brief study on Hyperparameter Optimization methods in Deep Learning models focused on data classification. One of the great challenges when working with models of deep learning is the difficulty of finding the best configuration of the hyperparameters of these models, that is, which combination of values is the most adequate to obtain the best performance of the learning algorithm during training.',
          tags: ['Python', 'Tensorflow', 'Pandas'],
          type: 'article',
          link: this.folderFile + 'Monografia_TFG.pdf',
          image: this.folderImage + 'Optimization.png'
        },
        {
          nome: 'Floating Whatsapp Message Button with Vue/Vuetify',
          description: 'Add quick whatsapp floating button with message box to connect with your users. If some one click on that button a chat box will open with prefilled message',
          tags: ['Vue', 'Vuetify', 'whatsapp api'],
          type: 'code',
          link: 'https://codepen.io/carlos-henreis/pen/qvKWVp',
          image: this.folderImage + 'zapzap.png'
        },
        {
          nome: 'Workshop Tensorflow',
          description: 'This workshop is intended for an audience that is new to Tensorflow with a very basic knowledge in Machine Learning. It is part of the Hackathon Retail 4.0 2018 held at the Federal University of Itajubá - UNIFEI. The challenge of this Hackathon is to use the techniques of artificial intelligence and programming in Python to solve problems of retail 4.0. In the end a company brings problems to solve in groups that compete for the best solution.',
          tags: ['Python', 'Tensorflow', 'Pandas'],
          type: 'Workshop',
          link: 'https://github.com/Carlos-Henreis/tensorflow-workshop',
          image: this.folderImage + 'work.jpg'
        },
        {
          nome: 'Laravel VueJS',
          description: 'While Laravel does not dictate which JavaScript or CSS pre-processors you use, it does provide a basic starting point using Bootstrap and Vue that will be helpful for many applications. By default, Laravel uses NPM to install both of these frontend packages.',
          tags: ['VueJS', 'PHP', 'Laravel', 'Vuetify'],
          type: 'Code',
          link: 'https://github.com/Carlos-Henreis/Laravel_VueJS',
          image: this.folderImage + 'latavel.jpg'
        },
        {
          nome: 'Digit recognition',
          description: 'Building a small neural network to recognize handwritten numbers using TensorFlow',
          tags: ['Python', 'html5lib', 'protobuf', 'scikit-learn', 'tensorflow'],
          type: 'Code',
          link: 'https://github.com/Carlos-Henreis/PDI',
          image: this.folderImage + 'mnist-input.png'
        },
        {
          nome: 'Motion of the galaxy',
          description: 'Calculates the position of the stars of a galaxy according to the time',
          tags: ['Python', 'numpy', 'Matplotlib'],
          type: 'Code',
          link: 'https://github.com/Carlos-Henreis/galaxia',
          image: this.folderImage + 'galaxia.gif'
        },
        {
          nome: 'Scroll Back To Top Button with vuetify',
          description: 'This example demonstrates how to create a "scroll to top" button that becomes visible when the user starts to scroll the page.',
          tags: ['Vuetify', 'Vuejs', 'Material Design'],
          type: 'code',
          link: 'https://codepen.io/carlos-henreis/pen/vzXKBJ',
          image: this.folderImage + 'vue-elevator.gif'
        },
        {
          nome: 'Mines Weeper game',
          description: 'Mines Weeper game width vue/vuetify',
          tags: ['Vuetify', 'Vuejs', 'Material Design'],
          type: 'code',
          link: this.folderFile +'minesweeper.html',
          image: this.folderImage + 'mine.png'
        }
      ]
    }
  },
  props: {
    folderFile: {
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
    }
  },
  computed: {
    resumeFileEn () {
      return this.folderFile + 'curriculum-vitae-en-Carlos-Reis.pdf';
    },
    resumeFileBr () {
      return this.folderFile + 'curriculum vitae-br-Carlos-Reis.pdf';
    }
  },
  methods: {

  },
  mounted () {

  }
}
</script>