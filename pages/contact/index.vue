<template>
  <div class="text-center pt-6">
    <v-container>
   <v-card elevation="0" width="800" class="mx-auto">
    <v-card-text>
      <v-row>
      <v-col cols="12"> 
        <h2 class="primary--text">*** Contack We're ***</h2>
        <div class="mt-10 mb-4 blod">c asperiores molestias similique at aut porro tempora consectetur. Accusantium dolorem eveniet nesciunt reprehenderit at, amet voluptatibus praesentium sint quas.</div>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field outlined dense  placeholder="Name" append-icon="mdi-account"></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field outlined dense  placeholder="Last Name" append-icon="mdi-account"></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field dense outlined placeholder="Email" append-icon="mdi-email"></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field dense outlined placeholder="Country" append-icon="mdi-city"></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field dense outlined placeholder="Phone" append-icon="mdi-phone"></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-textarea placeholder="Write your plobler to admin" outlined></v-textarea>
      </v-col>
      <v-col>
        <v-card-actions>
          <v-btn color="primary" dark>Send Now <v-icon class="ml-5">mdi-send</v-icon></v-btn>
          <v-spacer/>
          <v-btn color="primary" dark>Send To Email <v-icon  class="ml-4">mdi-email</v-icon></v-btn>
          <v-btn color="green" dark>Send To Whatsapp <v-icon class="ml-4">mdi-whatsapp</v-icon></v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
    </v-card-text>
   </v-card>
  </v-container>
  </div>
</template>

<script>
export default {
    name:'Contact'
}
</script>

<style>

</style>