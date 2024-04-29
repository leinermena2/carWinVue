<template>
    <v-card>
      <v-card-title>
        <v-icon>{{ icon }}</v-icon>
        <span class="ml-2">{{ text }}</span>
      </v-card-title>
  
      <v-card-text>
        <v-card-subtitle>Ganador:</v-card-subtitle>
        <v-card-text v-if="!loading && !newWinnerInput">Dar click al botón</v-card-text>
        <v-card-text v-else-if="!loading && newWinnerInput">{{ newWinnerInput }}</v-card-text>
        <v-progress-circular v-else indeterminate></v-progress-circular>
      </v-card-text>
  
      <v-card-actions>
        <v-btn color="secondary" @click="hacerSorteo">
          <span>Obtener un nuevo ganador</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  import { ref } from 'vue';
  import axios from 'axios';
  import Swal from 'sweetalert2';

  export default {
    name: 'MyButtonCard',
    props: {
      icon: {
        type: String,
        default: 'mdi-account-circle',
      },
      text: {
        type: String,
        required: true,
      },
    },
    setup() {
      const winner = ref(null);
      const loading = ref(false);
  
      const hacerSorteo = async () => {
        if (!loading.value) {
          const { isConfirmed } = await Swal.fire({
            title: '¿Estás seguro?',
            text: 'Se generará un nuevo ganador.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, estoy seguro',
          });
  
          if (isConfirmed) {
            loading.value = true;
            try {
              const response = await axios.get('http://127.0.0.1:8000/clientes/ganador');
              const { status, message } = response.data;
              if (status === 200) {
                winner.value = response?.data?.ganador;
                Swal.fire('Genial', message + ' Le hemos enviado un correo electrónico al ganador', 'success');
              } else {
                Swal.fire('Error', message, 'error');
              }
            } catch (error) {
              console.error(error);
              Swal.fire('Error', 'Ha ocurrido un error al obtener el ganador', 'error');
            } finally {
              loading.value = false;
            }
          }
        }
      };
  
      return {
        winner,
        loading,
        hacerSorteo,
      };
    },
  };
  </script>
  
  <style scoped></style>