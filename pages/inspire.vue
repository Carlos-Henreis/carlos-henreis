<template>
  <v-row>
    <v-col class="text-center">
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>
<script>
import Instagram  from 'instagram-nodejs-without-api'
export default {
  data () {
    return {
    }
  },
  watch: {
    
  },
  methods: {
   
  },
  mounted ()  {
    const instagram = new Instagram();    
    instagram.getCsrfToken().then((csrf) =>
    {
      instagram.csrfToken = csrf;
    }).then(() =>
    {
      return instagram.auth('carlos.henrique.reis.98', '¨6MyiiOsQZA').then(sessionId =>
      {
        instagram.sessionId = sessionId

        return instagram.getUserDataByUsername('username-for-get').then((t) =>
        {
          return instagram.getUserFollowers(t.graphql.user.id).then((t) =>
          {
            console.log(t); // - instagram followers for user "username-for-get"
          })
        })

      })
    }).catch(console.error);
  }
}
</script>
