<template>
<v-flex xs12 text-xs-center id="professionalExperience" class="text-center">
  <v-card>
      <h2 class="display-2 mt-3">PROFESSIONAL EXPERIENCE</h2>
    <v-card-text>
      <v-container fluid>
        <v-row dense >
          <v-col
            v-for="card in cards"
            cols=12
            :key="card.title"
            xs=12
            :md="card.md"
            class="d-flex"
          >
            <v-card elevation-4 light>
              <v-card-title>
                <span class="title text-left">
                  <b><v-icon left>mdi-briefcase</v-icon> {{card.title}}</b></br>
                  <v-icon left>mdi-calendar-range</v-icon> {{card.time}}</br>
                  <v-icon left>mdi-domain</v-icon> {{card.job}}</br>
                </span>
              </v-card-title>
              <v-card-text class="ml-3 text-left subheading">
                <p>
                  <v-icon>mdi-chevron-right</v-icon>
                  {{card.about}}
                </p>
                <p>
                  <v-icon>mdi-chevron-right</v-icon>
                  Using the following technologies:
                  <ul class="ml-3">
                    <li v-for="tec in card.tec" :key="tec">{{ tec }}</li>
                  </ul>
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</v-flex>
</template>

<script>
export default {
  data () {
    return {
      cards: [
        { title: 'Software Engineer', time: 'November 2020 - currently', job: 'Itaú Unibanco, Brazil', about: 'Currently working as a Software engineering at Itaú Unibanco', tec: ['JAVA', 'Spring Framework', 'Serverless Framework', 'AWS', 'TDD e BDD', 'Agile Methodology'], xs: 12, md: 12},
        { title: 'Software developer', time: 'June 2020 - November 2020', job: 'MOVA Peer-To-Peer Lending - Investimentos e Financiamentos', about: 'Responsible for development in MOVA Peer-To-Peer Lending. Mova is a fintech specialists in online investments and financing based on Peer-To-Peer Lending', tec: ['PHP', 'TDD e BDD', 'Docker', 'GCloud'], xs: 12, md: 6},
        { title: 'Tech Lead Machine Learning', time: 'November 2019 ‒ June 2020', job: 'Smarkio Tecnologia Ltda, Itajubá-Brazil', about: ' Tech Lead Machine Learning in the Natural Language Processing area. Conducting descriptive, diagnostic, predictive and/or prescriptive analyzes, creating and applying statistical models, machine learning and optimizers for the identification, recommendation and implementation of opportunities for improvement in the NLP process in chatbots and creation of metrics and monitoring of performance of the solutions created', tec: ['Python', 'Watson Assistant', 'IBM Cloud', 'DialogFlow'], xs: 12, md: 6},
        { title: 'Junior Software developer', time: 'August 2018 ‒ November 2019', job: 'Smarkio Tecnologia Ltda, Itajubá-Brazil', about: ' Working with integrations between our platform and our clients\' services', tec: ['PHP', 'NodeJS', 'jQuery/AJAX', 'Web Services (XML, REST, SOAP, WSDL, etc)', 'AWS Lambda', 'FaaS (Function as a Service)', 'Serverless Framework'], xs: 12, md: 6},
        { title: 'Internship Software Developer', time: 'November 2017 ‒ August 2018', job: 'Tuuris.com, Itajubá-Brazil', about: ' Responsible for development in Tuuris.com. Tuuris is a platform that allows you to customize and compare prices and travel itinerary offered by travel agencies.', tec: ['Ruby On Rails', 'GraphQL', 'TDD e BDD', 'Docker', 'Mysql'], xs: 12, md: 6},
      ],
    }
  },
  props: {
    active: {
      type: Number,
      default: ''
    }
  },
  computed: {
  },
  methods: {

  },
  mounted () {

  }
}
</script>
<style>
.v-card {
  width: 33333px !important; 
}
</style>