<template>
<v-container fluid>
  <v-card
    elevation="2"
  >
    <v-row>
      <v-col cols="6">
        <v-file-input
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Selecione a imagem para conversão"
          prepend-icon="mdi-camera"
          v-model="image"
        ></v-file-input>
      </v-col>
      <v-col cols="3">
      <v-btn
        :loading="loading3"
        :disabled="disBtn"
        color="blue-grey"
        class="ma-2 white--text"
        @click="Preview_image"
      >
        Upload
        <v-icon
          right
          dark
        >
          mdi-cloud-upload
        </v-icon>
      </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-img :src="url" contain></v-img>
      </v-col>
      <v-col cols="6">
        <v-flex class="text-center" v-if="loading3">
          <v-progress-circular
            :rotate="-90"
            :size="100"
            :width="15"
            :value="value"
            color="primary"
          >
            {{ value }}
          </v-progress-circular>
        </v-flex>
        <v-card v-if="!loading3">
          <v-responsive>
            <v-card-text>
              <pre>
                {{text}}
              </pre>
            </v-card-text>
          </v-responsive>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</v-container>
</template>
<script>
import Tesseract  from 'tesseract.js'
export default {
  data () {
    return {
      loading3: false,
      value: 0,
      url: null,
      disBtn: true,
      image: null,
      text: "Selecione uma imagem para fazer a extração de texto"
    }
  },
  watch: {
    image (val) {
      if(val) {
        this.disBtn = false
      }
      return;
    }
  },
  methods: {
    progress (packet) {
      this.value = Math.round((packet.progress)*100)
    },
    async Preview_image() {
      this.loading3 = true
      this.url= URL.createObjectURL(this.image)
      const worker = Tesseract.createWorker({
        logger: this.progress
        
      });
  
      await worker.load();
      await worker.loadLanguage('por');
      await worker.initialize('por', Tesseract.OEM.LSTM_ONLY);
      await worker.setParameters({
        tessedit_pageseg_mode: Tesseract.PSM.SINGLE_BLOCK,
      });
      const { data: { text } } = await worker.recognize(this.url);
      this.text = text;

      this.loading3 = false
    }
  },
  mounted ()  {
    
  }
}
</script>
