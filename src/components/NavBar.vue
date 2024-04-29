<template>
  <v-toolbar color="primary" dark>
    <v-toolbar-title>
      <div>
        <v-btn>CarWin</v-btn>
      </div>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <ExcelExports />
    </v-toolbar-items>
  </v-toolbar>
</template>
  
  <script>
  import axios from 'axios';
  import ExcelExports from "./ExcelExport.vue"
  export default {
    name: 'NavBar',
    components:{ 
      ExcelExports
    },
    data() {
      return {
      }
    },
    methods: {
      async hacerSorteo() {
        const response = await axios.get('http://127.0.0.1:8000/clientes/ganador');
        const data = response.data;
        //const {status, message} = response;
        //const winner = response?.ganador;
        console.log(response.status);
        console.log(data);
      }
    },
  };
  </script>
  
  <style scoped>
  .v-toolbar-title {
    display: flex;
    align-items: center;
  }
  
  .v-img {
    width: 30px; /* Adjust logo size as needed */
    margin-right: 10px; /* Adjust spacing as needed */
  }
  </style>
  