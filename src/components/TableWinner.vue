<template>
   <div class="mt-5">
    <h3>Ultimos Gandores</h3>
   </div> 
    <div class="containerWinnerList">
      <b-list-group>
        <b-list-group-item v-for="(item, index) in data" :key="index">
          <b-row>
            <b-col md="2">Nombre: {{ item.nombre }} {{ item.apellido }}</b-col>
          </b-row><br>
          <b-row>
            <b-col md="2">Celular: {{ item.celular }}</b-col>
          </b-row><br>
          <b-row>
            <b-col md="2">Correo Electrónico: {{ item.correo_electronico }}</b-col>
          </b-row>
         
          
          <hr>
        </b-list-group-item>
      </b-list-group>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'DataList',
    data() {
      return {
        data: [],
      };
    },
    async mounted() {
      const response = await axios.get('http://127.0.0.1:8000/clientes/by-status/1');
      this.data = response.data;
    },
  };
  </script>

  <style>
    .containerWinnerList{
        height: 340px;
        overflow-y: scroll;
    }
    </style>