<template>
  <v-flex xs12 class="text-center" id="interests">
    <v-card color="deep-purple darken-2" dark>
      <v-card-title primary-title class="text-center">
        <v-flex>
          <h1 class="display-2 mb-3">INTERESTS & SKILLS</h1>
        </v-flex>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-lg text-xs-center>
          <v-layout row wrap>
            <v-flex xs12 md6 d-flex>
              <v-card color="purple darken-4">
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">INTERESTS</h3>
                    <div>I have an academic/professional interest in Artificial Intelligence, Operational Research, development of Object Oriented Programming and methods that assist in decision making through Simulation of Discrete Events.</div>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex xs12 md6 d-flex>
              <v-card color="purple darken-4">
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">SKILLS</h3>
                    <div>
                      To demonstrate my skills will show some statistics of my contributions in github. I used gitbub api information regarding my github account.</div>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex xs12 d-flex>
              <v-card color="purple darken-4">
                <v-flex>
                  <v-card color="deep-purple lighten-1" dark>
                    <v-layout row wrap>
                      <v-flex class="elevation-5">
                        <b><v-icon small>mdi-xml</v-icon> Pushed to repos <p class="mt-5 headline">{{repos_pushed.length}}</p></b>
                      </v-flex>
                      <v-divider light vertical></v-divider>
                      <v-flex class="elevation-5">
                        <b><v-icon small>mdi-book-alphabet</v-icon> Main languages <p class="mt-5 headline">{{ languages.length }}</p></b>
                      </v-flex>
                      <v-divider light vertical></v-divider>
                      <v-flex class="elevation-5">
                        <b><v-icon small>mdi-bug</v-icon> Total issues <p class="mt-5 headline">{{ total_issues }}</p></b>
                      </v-flex>
                      <v-divider light vertical></v-divider>
                      <v-flex class="elevation-5">
                        <b><v-icon small>mdi-source-fork</v-icon> Total forks <p class="mt-5 headline">{{ total_forks }}</p></b>
                      </v-flex class="elevation-5">
                      <v-divider light vertical></v-divider>
                      <v-flex class="elevation-5">
                        <b><v-icon small>mdi-star</v-icon> Total stars <p class="mt-5 headline">{{ total_stars }}</p></b>
                      </v-flex class="elevation-5">
                      <v-divider light vertical></v-divider>
                      <v-flex class="elevation-5">
                        <b><v-icon small>mdi-account-group</v-icon> Followers <p class="mt-5 headline">{{ user.followers }}</p></b>
                      </v-flex>
                      <v-divider light vertical></v-divider>
                      <v-flex class="elevation-5">
                        <b><v-icon small>mdi-account-group</v-icon> Following <p class="mt-5 headline">{{ user.following }}</p></b>
                      </v-flex>
                    </v-layout>
                  </v-card>
                </v-flex>
                <v-flex text-lg-left class="ma-3">
                  <span class="display-1">Summary</span>
                  <p>Joined GitHub {{ user.created_at }}</p>
                  <div class="padh">
                    <p v-if="repos_pushed.length > 1">{{ user.name }} has {{ user.public_repos }} repositories on GitHub, the latest {{ repos.length }} with user activity were loaded from GitHub's web service for this evaluation. {{ user.name }} has pushed to <strong>{{ repos_pushed.length }}</strong> of these repositories.
                      <span v-if="repos_pushed_ratio > .8">This is a high ratio congratulations!</span>
                      <span v-else-if="repos_pushed_ratio < .4">This is a low ratio.</span>
                    </p>
                    <p v-if="languages.length > 1"><strong>{{ languages.length }}</strong> different main languages were identified across all repos pushed to. The main language is the one with the largest amount of code in a given repository, as identified by GitHub's <b><a class="linkGit" href="https://github.com/github/linguist">linguist</a></b>.
                      <span v-if="languages.length > 5">Assuming a basic level of proficiency in all these languages {{ user.name }} can be considered hyperpolyglot in the world of computer languages.</span>
                      <strong>{{ languages[0].key }}</strong> occurs most frequently ‒ {{ languages[0].values }} times ‒ as the main repo language.
                    </p>
                    <p v-if="total_forks / repos_pushed.length > 20">The total number of forks across all pushed to repositories indicates that the GitHub projects {{ user.name }} contributes to are actually used by other people as well.</p>
                  </div>
                  <div class="padh">
                    <h2 id="rankings">Rankings</h2>
                    <v-layout row wrap>
                      <v-flex v-if="languages.length > 1" xs12 md3 class="elevation-2">
                        <v-card color="deep-purple lighten-1" class="pa-3">
                          <h3>Languages</h3>
                            
                          <div class="chart-container">
                            <horizontal-bar-chart :height="216" :chart-data="datacollectionLanguages" :options="options"></horizontal-bar-chart>
                          </div>
                        </v-card>
                      </v-flex>
                      <v-flex v-if="issues.length > 1" xs12 md3 class="elevation-2">
                        <v-card color="deep-purple lighten-1" class="pa-3">
                          <h3>Issues</h3>
                          <div class="chart-container">
                            <horizontal-bar-chart :height="216" :chart-data="datacollectionIssues" :options="options"></horizontal-bar-chart>
                          </div>
                        </v-card>
                      </v-flex>
                      <v-flex v-if="forks.length > 1" xs12 md3 class="elevation-2">
                        <v-card color="deep-purple lighten-1" class="pa-3">
                          <h3>Forks</h3>
                          <div class="chart-container">
                            <horizontal-bar-chart :height="216" :chart-data="datacollectionForks" :options="options"></horizontal-bar-chart>
                          </div>
                        </v-card>
                      </v-flex>
                      <v-flex v-if="stars.length > 1" xs12 md3 class="elevation-2">
                        <v-card color="deep-purple lighten-1" class="pa-3">
                          <h3>Stars</h3>
                          <div class="chart-container">
                            <horizontal-bar-chart  :height="216" :chart-data="datacollectionStars" :options="options"></horizontal-bar-chart>
                          </div>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </div>
                </v-flex>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
import d3 from 'd3'
import HorizontalBarChart from '~/components/charts/HorizontalBarChart.vue'

export default {
  components: {
    HorizontalBarChart
  },
  data () {
    return {
      loading: false,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
                fontColor: 'white'
            }
          }],
          xAxes: [{
            ticks: {
                fontColor: 'white',
                beginAtZero:true
            }
          }]
        }
      },
      github_user: 'Carlos-Henreis',
      user: {
        "followers": 0,
        "following": 0,
        "created_at": "",
        "name": "",
        "login": "",
        "public_repos": 0,
      },
      git_api: 'https://api.github.com/users/',
      repos: [],
      response: {},
      sort_orders: {},
      sort_key: ''
    }
  },
  props: {
    active: {
      type: Number,
      default: ''
    }
  },
  computed: {
    datacollectionLanguages: function() {
      let language_ranking = this.languages
      let datacollectionLanguage = {
        labels: [],
        datasets: []
      }
      datacollectionLanguage.labels = language_ranking.map(d => d.key)
      datacollectionLanguage.datasets = [{
        label: 'Projects',
        backgroundColor: '#f87979',
        maxBarThickness: 8,
        data: language_ranking.map(d => d.values)
      }]
      return datacollectionLanguage
    },

    datacollectionIssues: function() {
      let issues_ranking = this.issues
      let datacollectionIssues = {
        labels: [],
        datasets: []
      }
      datacollectionIssues.labels = issues_ranking.map(d => d.name)
      datacollectionIssues.datasets = [{
        label: 'Projects',
        backgroundColor: '#f87979',
        maxBarThickness: 8,
        data: issues_ranking.map(d => d['open_issues_count'])
      }]
      return datacollectionIssues
    },
    datacollectionForks: function() {
      let forks_ranking = this.forks
      let datacollectionForks = {
        labels: [],
        datasets: []
      }
      datacollectionForks.labels = forks_ranking.map(d => d.name)
      datacollectionForks.datasets = [{
        label: 'Projects',
        backgroundColor: '#f87979',
        maxBarThickness: 8,
        data: forks_ranking.map(d => d['forks_count'])
      }]
      return datacollectionForks
    },

    datacollectionStars: function() {
      let stars_ranking = this.stars
      let datacollectionStars = {
        labels: [],
        datasets: []
      }
      datacollectionStars.labels = stars_ranking.map(d => d.name)
      datacollectionStars.datasets = [{
        label: 'Projects',
        backgroundColor: '#f87979',
        maxBarThickness: 8,
        data: stars_ranking.map(d => d['stargazers_count'])
      }]
      return datacollectionStars
    },

    // Only repos the user actually pushed at, i.e. no forks with no user commits.
    repos_pushed: function() {
      return this.repos.filter(d => d.pushed_at > d.created_at)
    },
    repos_pushed_ratio: function() {
      return this.repos.length ? this.repos_pushed.length / this.repos.length : 0
    },
    languages: function() {
      let langs = d3.nest()
        .key(d => d.language)
        .rollup(leaves => leaves.length)
        .entries(this.repos_pushed.filter(d => d.language))
        .sort((a, b) => b.value - a.value)
      return langs
    },
    issues: function() {
      return this.repoRanking('open_issues_count')
    },
    forks: function() {
      return this.repoRanking('forks_count')
    },
    stars: function() {
      return this.repoRanking('stargazers_count')
    },
    total_forks: function() {
      return d3.sum(this.forks, d => d.forks_count)
    },
    total_issues: function() {
      return d3.sum(this.issues, d => d.open_issues_count)
    },
    total_stars: function() {
      return d3.sum(this.stars, d => d.stargazers_count)
    }
  },
  methods: {
    fetchRepos: async function() {
      let that = this
      this.loading = true
      await this.$axios.$get(this.git_api+this.github_user+'/repos?sort=pushed&per_page=100').then(response => {
        that.response = response
        that.repos = response
        that.loading = false
      })
    },
    fetchUser: async function() {
      let that = this
      this.loading = true
      await this.$axios.$get(this.git_api+this.github_user).then(response => {
        that.user = response
        if (!that.user.name) that.user.name = that.user.login
        that.loading = false
      })
    },
    order: function(key) {
      // asc is default, because sort orders are initially unset
      return this.sort_orders[key] < 0 ? 'dsc' : 'asc'
    },
    repoRanking: function(property) {
      return this.repos_pushed.filter(d => d[property])
        .sort((a, b) => b[property] - a[property])
    },
    sortBy: function(key, type='number') {
      let default_value = type === 'string' ? '' : 0
      this.sort_key = key
      this.sort_orders[key] = (this.sort_orders[key] || 1) * -1
      this.repos.sort((a, b) => {
        let x = a[key] || default_value,
            y = b[key] || default_value
        if (type === 'string') {
            x = x.toLowerCase()
            y = y.toLowerCase()
        }
        return (x === y ? 0 : x > y ? 1 : -1) * this.sort_orders[key]
      })
    }
  },
  updated: function() {
    //this.rankingGraph(this.issues.slice(0, 10), 'open_issues_count', '#issues-ranking')
    //this.rankingGraph(this.forks.slice(0, 10), 'forks_count', '#forks-ranking')
    //this.rankingGraph(this.stars.slice(0, 10), 'stargazers_count', '#stars-ranking')
  },
  async fetch() {
    await this.fetchRepos()
    await this.fetchUser()
  },
  mounted: function () {
  }
}
</script>
<style>
.linkGit {
  /* unvisited link */
  color: white !important;
}
</style>