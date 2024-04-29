<template>
  <div class="form-container">
      <h2 class="form-title">Formulario de Registro</h2>

      <form @submit.prevent="handleSubmit">
          <div class="form-group">
              <label for="nombre">Nombre:</label>
              <input type="text" id="nombre" v-model="usuario.nombre" :required="true" class="form-control"
                  @input="validateNombre" />
              <span class="error-message" v-if="nombreError">{{ nombreError }}</span>
          </div>

          <div class="form-group">
              <label for="apellido">Apellido:</label>
              <input type="text" id="apellido" v-model="usuario.apellido" :required="true" class="form-control"
                  @input="validateApellido" />
              <span class="error-message" v-if="apellidoError">{{ apellidoError }}</span>
          </div>

          <div class="form-group">
              <label for="cedula">Cédula:</label>
              <input type="number" id="cedula" v-model="usuario.cedula" :required="true" class="form-control"
                  @input="validateCedula" />
              <span class="error-message" v-if="cedulaError">{{ cedulaError }}</span>
          </div>

          <div class="form-group">
              <label for="departamento">Departamento:</label>
              <select @change="handleGetDepartament()" id="departamento" v-model="usuario.departamento" :required="true" class="form-control">
                  <option value="">Seleccione un departamento</option>
                  <option v-for="departamento in colombia" :key="departamento.id" :value="departamento.id">{{
          departamento.departamento }}</option>
              </select>
          </div>

          <div class="form-group">
              <label for="ciudad">Ciudad:</label>
              <select id="ciudad" v-model="usuario.ciudad" :required="true" class="form-control"
                  :disabled="!usuario.departamento">
                  <option value="">Seleccione una ciudad</option>
                  <option v-for="ciudad in ciudadesFiltradas" :key="ciudad.id" :value="ciudad">{{ ciudad }}
                  </option>
              </select>
          </div>

          <div class="form-group">
              <label for="celular">Celular:</label>
              <input type="number" id="celular" v-model="usuario.celular" :required="true" class="form-control"
                  @input="validateCelular" />
              <span class="error-message" v-if="celularError">{{ celularError }}</span>
          </div>

          <div class="form-group">
              <label for="correo">Correo Electrónico:</label>
              <input type="email" id="correo" v-model="usuario.correo" :required="true" class="form-control"
                  @input="validateCorreo" />
              <span class="error-message" v-if="correoError">{{ correoError }}</span>
          </div>

          <div class="form-group">
            <v-switch label="Autorizo el tratamiento de mis datos de acuerdo con la finalidad establecida en
              la política de protección de datos personales." id="habeasData" v-model="usuario.habeasData" />
          </div>

          <button type="submit" class="btn btn-primary btnSend">Enviar</button>
      </form>
  </div>
</template> q


<script>
//import axios from 'axios';
import colombiaData from './colombia.json';
import { ref } from 'vue';

const departamento_ = ref(null);
export default {
  name: "FormularioRegistro",
  data() {
    return {
      colombia: colombiaData,
      usuario: {
        nombre: "",
        apellido: "",
        cedula: "",
        departamento: "",
        ciudad: "",
        celular: "",
        correo: "",
        habeasData: false
      },
      nombreError: "",
      apellidoError: "",
      cedulaError: "",
      celularError: "",
      correoError: "",
      departamentos: colombiaData,
      ciudadesFiltradas: []
    };
  },
  methods: {
    validateNombre() {
      if (this.usuario.nombre.length < 3) {
        this.nombreError = "El nombre debe tener al menos 3 caracteres.";
      } else {
        this.nombreError = "";
      }
    },
    validateApellido() {
      if (this.usuario.apellido.length < 3) {
        this.apellidoError = "El apellido debe tener al menos 3 caracteres.";
      } else {
        this.apellidoError = "";
      }
    },
    validateCedula() {
      const cedula = this.usuario.cedula;
      if (!/^[0-9]{9,10}$/.test(cedula)) {
        this.cedulaError = "La cédula debe tener entre 9 y 10 dígitos.";
      } else {
        this.cedulaError = "";
      }
    },
    validateCelular() {
      const celular = this.usuario.celular;
      if (!/^[0-9]{10}$/.test(celular)) {
        this.celularError = "El número de celular debe tener 10 dígitos.";
      } else {
        this.celularError = "";
      }
    },
    validateCorreo() {
      const correo = this.usuario.correo;
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        this.correoError = "El correo electrónico no es válido.";
      } else {
        this.correoError = "";
      }
    },
    handleSubmit() {
    if (
        !this.nombreError &&
        !this.apellidoError &&
        !this.cedulaError &&
        !this.celularError &&
        !this.correoError
    ) {
     /*    axios.post("https://your-api-endpoint.com/register", this.usuario).then((response: []) => {
            console.log("User registered successfully:", response.data);
        }); */
    } else {
        console.error("Form validation failed.");
    }
    },
    handleDepartamentoChange(dep) {
      const departamentoId = parseInt(dep);
      const departamentoSeleccionado = this.colombia.find(departamento => departamento.id === departamentoId);
      if (departamentoSeleccionado) {
        this.ciudadesFiltradas = departamentoSeleccionado.ciudades;
      } else {
        this.ciudadesFiltradas = [];
      }
    },
    handleCiudadChange() {
      console.log('Ciudad seleccionada:', this.usuario.ciudad);
    },
    handleGetDepartament() {
      departamento_.value = document.querySelector('#departamento').value;
      this.handleDepartamentoChange(document.querySelector('#departamento').value)
    }
  },
  mounted() {
    
  },
};
</script>


<style>
.btnSend {
    width: 100%;
    border-radius: 20px;
    color: white;
    font-weight: bold;
}
</style>