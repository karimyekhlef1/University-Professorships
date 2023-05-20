<template>
  <v-main>
    <v-btn @click="ObenDialog">
    hello
  </v-btn>
  <v-dialog v-model="dialog" max-width="500">
    <v-card>
      <v-card-title>
        <span class="headline">Dialog Title</span>
      </v-card-title>

      <v-card-text>
        <p>Dialog Content Here</p>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" flat @click.native="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  </v-main>

  
   
  </template>
  
  <script>
  export default{
    name:'HelpPage',
    data: () => ({
    dialog: false,
  }),
   methods:{
    ObenDialog(){
      this.dialog = !this.dialog
    }
   },
   created(){
    alert('thats create')

   },
   beforeCreate(){
    alert('click fro creating ')
   }
  }
  </script>
  
  <style scoped>

  </style>
  