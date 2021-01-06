<template>
<v-flex xs12 text-xs-center id="professionalExperience" class="text-center">
  <v-card>
      <h2 class="display-2 mt-3">PROFESSIONAL EXPERIENCE</h2>
    <v-card-text>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs12 md6 d-flex>
            <v-card elevation-4 light>
              <v-card-title>
                <span class="title text-left">
                  <b><v-icon left>mdi-briefcase</v-icon> Software developer</b></br>
                  <v-icon left>mdi-calendar-range</v-icon> June 2020 - currently</br>
                  <v-icon left>mdi-domain</v-icon>MOVA Peer-To-Peer Lending - Investimentos e Financiamentos</br>
                </span>
              </v-card-title>
              <v-card-text class="ml-3 text-left subheading">
                <p>
                  <v-icon>mdi-chevron-right</v-icon>
                  Responsible for development in MOVA Peer-To-Peer Lending. Mova is a fintech specialists in online investments and financing based on Peer-To-Peer Lending
                </p>
                <p>
                  <v-icon>mdi-chevron-right</v-icon>
                  Using the following technologies:
                  <ul class="ml-3">
                    <li>PHP</li>
                    <li>TDD e BDD</li>
                    <li>Docker</li>
                    <li>GCloud</li>
                  </ul>
                </p>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 md6 d-flex>
            <v-card elevation-4 light>
              <v-card-title>
                <span class="title text-left">
                  <b><v-icon left>mdi-briefcase</v-icon> Tech Lead Machine Learning</b></br>
                  <v-icon left>mdi-calendar-range</v-icon> November 2019 ‒ June 2020</br>
                  <v-icon left>mdi-domain</v-icon>Smarkio Tecnologia Ltda, Itajubá-Brazil</br>
                </span>
              </v-card-title>
              <v-card-text class="ml-3 text-left subheading">
                <p>
                  <v-icon>mdi-chevron-right</v-icon>
                  Tech Lead Machine Learning in the Natural Language Processing area. Conducting descriptive, diagnostic, predictive and/or prescriptive analyzes, creating and applying statistical models, machine learning and optimizers for the identification, recommendation and implementation of opportunities for improvement in the NLP process in chatbots and creation of metrics and monitoring of performance of the solutions created
                </p>
                <p>
                  <v-icon>mdi-chevron-right</v-icon>
                  Using the following technologies:
                  <ul class="ml-3">
                    <li>Python</li>
                    <li>Watson Assistant</li>
                    <li>IBM Cloud</li>
                    <li>DialogFlow</li>
                  </ul>
                </p>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 md6 d-flex>
            <v-card elevation-4 light>
              <v-card-title>
                <span class="title text-left">
                  <b><v-icon left>mdi-briefcase</v-icon> Software developer</b></br>
                  <v-icon left>mdi-calendar-range</v-icon> ‒ August 2018 ‒ November 2019</br>
                  <v-icon left>mdi-domain</v-icon>Smarkio Tecnologia Ltda, Itajubá-Brazil</br>
                </span>
              </v-card-title>
              <v-card-text class="ml-3 text-left subheading">
                <p>
                  <v-icon>mdi-chevron-right</v-icon>
                  Working with integrations between our platform and our clients' services
                </p>
                <p>
                  <v-icon>mdi-chevron-right</v-icon>
                  Using the following technologies:
                  <ul class="ml-3">
                    <li>PHP</li>
                    <li>NodeJS</li>
                    <li>jQuery/AJAX</li>
                    <li>Web Services (XML, REST, SOAP, WSDL, etc)</li>
                    <li>AWS Lambda</li>
                    <li>FaaS (Function as a Service)</li>
                    <li>Serverless Framework</li>
                  </ul>
                </p>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 md6 d-flex>
            <v-card elevation-4 light>
              <v-card-title>
                <span class="title text-left">
                  <b><v-icon left>mdi-briefcase</v-icon> Software Developer Internship</b></br>
                  <v-icon left>mdi-calendar-range</v-icon> November 2017 ‒ August 2018</br>
                  <v-icon left>mdi-domain</v-icon> Tuuris.com, Itajubá-Brazil</br>
                </span>
              </v-card-title>
              <v-card-text class="ml-3 text-left subheading">
                <p>
                  <v-icon>mdi-chevron-right</v-icon>
                  Responsible for development in Tuuris.com. Tuuris is a platform that allows you to customize and compare prices and travel itinerary offered by travel agencies.
                </p>
                <p>
                  <v-icon>mdi-chevron-right</v-icon>
                  Using the following technologies:
                  <ul class="ml-3">
                    <li>Ruby On Rails</li>
                    <li>GraphQL</li>
                    <li>VueJs</li>
                    <li>TDD e BDD</li>
                    <li>Docker</li>
                    <li>Mysql</li>
                  </ul>
                </p>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
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
  },
  methods: {

  },
  mounted () {

  }
}
</script>