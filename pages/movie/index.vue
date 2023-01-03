<template>
  <div>
    <div class="primary--text pt-10 pb-10 text-center">
      <h2>*** Actions <v-icon color="red">mdi-movie</v-icon> ***</h2>
    </div>
    <v-row>
      <v-col v-for="data in video" :key="data.id" cols="12" md="3">
        <v-card @click="movieId(data.id)">
          <v-card-title>{{ data.title }}</v-card-title>
          <v-card-text>
            <v-img
              :src="'https://image.tmdb.org/t/p/w500' + data.poster_path"
              width="400"
              height="400"
            ></v-img>
          </v-card-text>
          <v-card-text>Views :{{ data.popularity }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <div class="primary--text pt-10 pb-10 text-center">
      <h2>*** Cartoon <v-icon color="red">mdi-movie</v-icon> ***</h2>
    </div>
    <v-row>
      <v-col v-for="data in movie" :key="data.id" cols="12" md="3">
        <v-card @click="movieId(data.id)">
          <v-card-title>{{ data.title }}</v-card-title>
          <v-card-text>
            <v-img
              :src="'https://image.tmdb.org/t/p/w500' + data.poster_path"
              width="400"
              height="400"
            ></v-img>
          </v-card-text>
          <v-card-text>Views :{{ data.popularity }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Index',
  computed: {
    video() {
      return this.$store.state.movie.video
    },
    movie() {
      return this.$store.state.movie.movie
    },
  },
  mounted() {
    this.$store.dispatch('movie/video');
    this.$store.dispatch('movie/getMovie')
  },
  methods: {
    movieId(id) {
      // console.log('-------->',id)
      if (id) {
        this.$router.push(`/Movie/${id}`);
      }
    }
  }
}
</script>
