<template>
<v-flex xs12 text-xs-center id="hobbies" v-scroll="onScroll">
  <v-card color="grey lighten-2">
    <v-card-title primary-title class="justify-center">
      <h2 class="display-2 mb-1">HOBBIES</h2>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs12 d-flex>
            <v-card elevation-4 color="primary" dark class="rounded-card">
              <v-card-text class="text-center">
                <span class="title kmd" id="title">
                  In my moments off I like to practice Mountain Running, I try to cross roads, paths and trails in the mountains of the South of Minas Gerais, Serra Mantiqueira and Serra do Mar.
                </span>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 d-flex>
            <v-card elevation-4 color="primary" dark class="rounded-card">
              <v-card-text class="text-center">
                <span class="title kmd" id="title">
                  Origami, people ask me how I have the patience to make them, I say: I do not know, mainly because I'm an impatient person, but I love making my origamis. Part of them I put on my Instagram (my posts can be seen below):
                </span>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <v-card>
              <v-container
                fluid
                grid-list-md
              >
                <v-layout row wrap>
                  <v-flex
                    xs12
                  >
                    <v-card>
                      <v-container grid-list-md class="text-center">
                        <v-layout row wrap>
                          <v-flex xs12 md5>
                            <v-avatar
                              size="125px"
                              color="grey lighten-4"
                            >
                              <img :src="ur_profile" alt="avatar">
                            </v-avatar>
                          </v-flex>
                          <v-flex xs12 md5>
                            <v-card-title primary-title>
                              <div>
                                <div class="text-h5">{{username}}</div>
                                <div><b class="text-h6">{{full_name}}</b></div>
                                <div class="subtitle-1" style="white-space: pre-line">{{biography}}</div>
                                <div>
                                  <v-container grid-list-md text-xs-center>
                                    <v-layout row wrap>
                                      <v-flex md4>
                                        <div class="subtitle-1">{{count_pub}} <br>posts</div>
                                      </v-flex>
                                      <v-flex md4>
                                        <div class="subtitle-1">{{count_follow}} <br> followers</div>
                                      </v-flex>
                                      <v-flex md4>
                                        <div class="subtitle-1">{{count_followed_by}} <br> followers</div>
                                      </v-flex>
                                    </v-layout>
                                  </v-container>
                                </div>
                              </div>
                            </v-card-title>
                          </v-flex>
                        </v-layout>
                        </v-container>
                    </v-card>
                  </v-flex>
                  <v-flex
                    v-for="(card, index) in grams"
                    md4 xs12
                    :key="index"
                  >
                    <v-card>
                      <v-img
                        aspect-ratio="0.75"
                        :src="card.node.thumbnail_resources[1].src"
                        height="200px"
                      >
                      
                        <v-container
                          fill-height
                          fluid
                          pa-2
                        >
                          <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                              <span class="headline white--text" v-text="card.node.edge_media_to_caption.edges[0].node.text.split('#')[0].substring(0,40)+'...'"></span>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-img>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-icon
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          mdi-home
        </v-icon>
      </template>
      <span slot="badge">{{card.node.edge_media_to_caption.edges[0].node.text.split('#').length-2 < 0 ? 0 : card.node.edge_media_to_caption.edges[0].node.text.split('#').length-2}}</span>
    </v-tooltip>
                        <v-tooltip bottom>
                            <v-badge
                              left class="pr-3"
                              overlap
                              slot="activator"
                            >
                              <span slot="badge">{{card.node.edge_media_to_caption.edges[0].node.text.split('#').length-2 < 0 ? 0 : card.node.edge_media_to_caption.edges[0].node.text.split('#').length-2}}</span>
                              <v-icon
                                large
                                color="green lighten-1"
                              >
                                mdi-pound-box-outline
                              </v-icon>
                            </v-badge>
                            <span v-for="tag in card.node.edge_media_to_caption.edges[0].node.text.split('#').slice(1, -1)">#{{tag}}</br></span>
                          </v-tooltip>
                        <v-badge left class="pr-3" overlap>
                          <span slot="badge">{{card.node.edge_media_preview_like.count}}</span>
                          <v-icon
                            large
                            color="red lighten-1"
                          >
                            mdi-heart
                          </v-icon>
                        </v-badge>
                        <v-badge left overlap>
                          <span slot="badge">{{card.node.edge_media_to_comment.count}}</span>
                          <v-icon
                            large
                            color="primary lighten-1"
                          >
                            mdi-message
                          </v-icon>
                        </v-badge>
                        <v-btn color="primary" outlined dark :href="'https://www.instagram.com/p/'+card.node.shortcode+'/'" target="_blank">See on instagram</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
          <v-flex class="text-center" v-if="loading">
            <v-progress-circular
              :size="70"
              :width="10"
              color="primary"
              indeterminate
            ></v-progress-circular>
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
      loading: false,
      end: false,
      url: "https://www.instagram.com/carlos.henrique.reis.98/?__a=1",
      username: "",
      count_pub: 0,
      count_follow: 0,
      count_followed_by: 0,
      grams: [],
      next_url: '',
      ur_profile: '',
      biography: '',
      full_name: '',
      userId: null,
      error: false
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
    getPosts () {
      this.loading = true
      let that = this
      this.$axios.$get(this.url)
      .then(function(response){
        that.grams = response.graphql.user.edge_owner_to_timeline_media.edges
        that.ur_profile = response.graphql.user.profile_pic_url_hd;
        that.username = response.graphql.user.username;
        that.biography = response.graphql.user.biography;
        that.full_name = response.graphql.user.full_name;
        that.count_pub = response.graphql.user.edge_owner_to_timeline_media.count;
        that.count_follow = response.graphql.user.edge_follow.count;
        that.count_followed_by = response.graphql.user.edge_followed_by.count;
        that.next_url = response.graphql.user.edge_owner_to_timeline_media.page_info.end_cursor
        that.userId = response.graphql.user.id

        that.loading = false
      })
    },
    getMorePosts () {
      this.loading = true
      this.$axios.$get('https://instagram.com/graphql/query/?query_id=17888483320059182&id='+this.userId+'&first=12&after='+this.next_url).then(response => {
        console.dir(response)
        this.grams = this.grams.concat(response.data.user.edge_owner_to_timeline_media.edges)
        this.next_url = response.data.user.edge_owner_to_timeline_media.page_info.end_cursor
        this.loading = false
      })
    },
    onScroll () {
      let heightFooter = document.body.offsetHeight-document.getElementById('footer').offsetTop
      let pageTop = window.scrollY

      if (((pageTop + (window.innerHeight - heightFooter)) == document.getElementById('footer').offsetTop) && !this.end) {
        if (typeof this.next_url === 'undefined') {
          this.end = true
        } else if (typeof this.next_url === 'string' && this.next_url.length > 0 && !this.loading) {
          this.getMorePosts()
        }
      }
    }
  },
  created() {
    this.end = false
    this.next_url = ''
    this.getPosts()
  }
}
</script>
<style>
.kmd {
  /* unvisited link */
  color: white !important;
}
</style>