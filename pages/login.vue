<template>
  <v-container>
    <v-row>
      <v-col cols="5">
        <h2 class="text-center primary--text">Login To M-H Moive</h2>
        <v-card-text class="primary--text">Name:</v-card-text>
        <v-text-field
          v-model="user.email"
          name="name"
          id="id"
          outlined
          dense
          placeholder="input Email"
        ></v-text-field>
        <v-card-text class="primary--text">Password:</v-card-text>
        <v-text-field
          v-model="user.password"
          name="password"
          id="id"
          type="password"
          outlined
          dense
          placeholder="input password"
          hint="At least 8 characters"
          min="8"
        ></v-text-field>
        <div class="text-center">
          <v-btn width="160" height="40" color="primary" dark @click="login">Login </v-btn>
        </div>
        <v-row>
          <v-card-text class="mr-4 mt-10">
            <v-icon class="mr-6" color="blue">mdi-facebook</v-icon>
            Facebook
          </v-card-text>
        </v-row>
        <v-row>
          <v-card-text>
            <v-icon class="mr-6" color="red">mdi-google</v-icon>Google
          </v-card-text>
        </v-row>
        <v-row>
          <v-card-text>
            <v-icon color="blue" class="mr-6">mdi-twitter</v-icon>Twitter
          </v-card-text>
        </v-row>
        <h4 class="mt-10 text-center">
          Create New Account?
          <span><v-btn text class="primary">Click Here</v-btn></span>
        </h4>
        <p class="mt-1 text-center red--text">If you forget password!</p>
      </v-col>
      <v-col cols="7" >
        <v-img
        class="text-center"
          height="700"
          
          width="700"
          src="https://th.bing.com/th/id/OIP.52ymc_dhdiL0sZHme84iPAHaLG?w=204&h=306&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          alt="login"
          contain
        >
        <div class="fill-height repeating-gradient"></div>
      </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "InspirePage",
  layout: "blank",
  middleware:'unAuth',
  data() {
    return {
      user: {
        email: '',
        password:''
      }
    }
  },
  methods: {
    login() {
      this.$store.dispatch("auth/login", {...this.user});
    }
  }
 
};
</script>
