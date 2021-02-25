<template> 
<v-container grid-list-lg text-xs-center>
<v-layout row wrap>
  <v-flex xs12>
  <v-card>
    <v-system-bar></v-system-bar>
    <v-toolbar flat>
      <v-toolbar-title>ASCII text art</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-banner
      single-line
    >
     ASCII generator: Convert text to ASCII text art  

    </v-banner>
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
        >
          <v-textarea
            id="styled-input"
            label="Write here for symbol fonts..."
            auto-grow
            outlined
            rows="1"
            row-height="15"
            v-model="text"
          ></v-textarea>
        </v-col>
      </v-row>
    </v-container>    
    <v-card-text class="grey lighten-4" v-if="textFormatter.length > 0">
      <v-sheet
        elevation="10"
        v-for="(txf, indx) in textFormatter"
        :key=indx
      >
        <pre>{{txf}}</pre>
      </v-sheet>
    </v-card-text>
  </v-card>
  </v-flex>
</v-layout>
</v-container>
</template>
<script>
import figlet  from 'figlet'

export default {
  data () {
    return {
      fonts: [ "3D Diagonal", "Dancing Font", "Ghost", "Graffiti", "Patorjk's Cheese", "Standard", "Pagga", "Pawp" ],
      text: '',
      textFormatter: []
    }
  },
  watch: {
    text: function (val) {
      const that = this;
      if (val.length > 1) {
        this.fonts.forEach(function (element, index) {
          console.log(element)
          figlet(val, element, function(err, data) {
              if (err) {
                  console.log('Something went wrong...');
                  console.dir(err);
                  return;
              }
              if (that.textFormatter.length-1 < index) {
                that.textFormatter.push(data);
              } else {
                that.textFormatter[index] = data
              }
          });
        });
        console.log(that.textFormatter);
        return
      }
    }
  },
  methods: {
   
  },
  mounted ()  {
    const path = "../fonts";
    figlet.defaults({fontPath: path});
  }
}
</script>
<style>
#styled-input {
  height: 40px;
  font-size: 20pt;
}
.styled-input label[for] {
  height: 40px;
  font-size: 20pt;
}
</style>
