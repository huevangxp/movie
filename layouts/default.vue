<template>
  <v-app dark>
    <v-app-bar  fixed app elevation="0" color="primary">
      <v-btn icon dark large><v-icon>mdi-film</v-icon></v-btn>
        <v-spacer/>
          <v-card-actions>
            <v-btn dark text to="/">Home</v-btn>
            <v-btn dark text to="/movie">Movie</v-btn>
            <v-btn dark text to="/about">About</v-btn>
            <v-btn dark text to="/contact">Contact</v-btn>
          </v-card-actions>
      <v-spacer/>
      <v-text-field
        placeholder="Search"
        outlined
        dense
        hide-details="4"
        class="white"
        append-icon="mdi-magnify"
      ></v-text-field>
      <v-spacer/>
      <v-btn dark text @click="logout">Logout</v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer  app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  middleware:'auth',
  data() {
    return {
      changeTheme:false,
    }
  }, 
  methods: {
    logout() {
      this.$cookies.remove('token');
      this.$router.push("/login")
    }
  },
  
  
}
</script>
