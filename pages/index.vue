<template>
  <div>
    <v-container fluid>
      <v-carousel
      :continuous="false"
      :cycle="cycle"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      height="400"
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
      >
        <v-sheet
          :color="colors[i]"
          height="100%"
          dark
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="text-h2">
              {{ slide }}
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    </v-container>
  <v-row justify="center" align="center">
    <v-col v-for="data in getMovie" :key="data.id" cols="12" sm="12" md="3">
      <v-card hover>
        <v-card-title>{{data.original_title}}</v-card-title>
        <v-card-text >
          <v-img class="mx-auto" :src="'https://image.tmdb.org/t/p/w500'+ data.poster_path" height="400" width="400"></v-img>  
        </v-card-text>
        <v-card-text>Views : {{data.popularity}}</v-card-text>
        <v-card-actions> <v-btn color="primary" class="mx-auto" @click="movieId(data.id)">More Info</v-btn> </v-card-actions>
        <v-card-text>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      colors: [
          'teal',
          'cyan darken-4',
          'teal darken-4',
         
        ],
        cycle: true,
        slides: [
          'Welcome to My website see Movie',
          'We have 100000 video',
          'Thank you',
          
        ],
  }
 },
  computed: {
    getMovie() {
      return this.$store.state.movie.movie
    }
  },
  mounted() {
    this.$store.dispatch('movie/getMovie', {
      api_key:this.$config.api_key
    })
  },
  methods: {
    movieId(id) {
      if (id) {
        this.$router.push(`/${id}`)
      }
    }
  }
}
</script>
