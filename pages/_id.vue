<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" block>
        <v-img
          :src="'https://image.tmdb.org/t/p/w500' + movieDetail.poster_path"
          width="500"
          height="600"
        ></v-img>
      </v-col>
      <v-col cols="12" md="6" block>
        <v-card elevation="0" hover>
          <v-card-text>Name Movie : {{ movieDetail.title }}</v-card-text>
          <v-card-text>{{ movieDetail.overview }}</v-card-text>
          <v-card-text
            >Release Date : {{ movieDetail.release_date }}</v-card-text
          >
          <v-card-text>Run Time: {{ movieDetail.runtime }}</v-card-text>
          <v-card-text>
            <div>Vore Average : {{ movieDetail.vote_average }}</div>
            <div>Vote Count : {{ movieDetail.vote_count }}</div>
          </v-card-text>
          <v-card-text>
            <v-row>
              <v-col
                v-for="data in movieDetail.production_companies"
                :key="data.id"
              >
                <v-img
                  :src="
                    data.logo_path == null
                      ? 'https://th.bing.com/th/id/OIP.2ysWaZVQWKbuTngNt9YKoAHaGV?w=227&h=194&c=7&r=0&o=5&dpr=1.5&pid=1.7'
                      : 'https://image.tmdb.org/t/p/w500' + data.logo_path
                  "
                  width="100"
                  height="100"
                ></v-img>
                <br />
                <div>{{ !data ? 'No data ' : data.name }}</div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    movieDetail() {
      return this.$store.state.movie.movieDetail
    },
  },
 async mounted() {
   this.$store.dispatch('movie/getOneMovie', this.id)
   await this.$store.dispatch('movie/getAction',this.id)
  },
}
</script>

<style></style>
