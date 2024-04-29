<template>
  <v-toolbar-items>
    <v-btn value="Ganadores" @click="exportWinners">
      <v-progress-circular v-if="isExporting" indeterminate size="24" color="primary" />
      <span>Exportar Ganadores</span>
    </v-btn>

    <v-btn value="Pendientes" @click="exportPending">
      <v-progress-circular v-if="isExporting" indeterminate size="24" color="primary" />
      <span>Exportar Pendientes</span>
    </v-btn>

    <v-btn value="Todos" @click="exportAll">
      <v-progress-circular v-if="isExporting" indeterminate size="24" color="primary" />
      <span>Exportar Todos</span>
    </v-btn>
  </v-toolbar-items>
</template>

<script>
import axios from 'axios';
import ExcelJS from 'exceljs';
import { BiEmojiWinkFill } from "oh-vue-icons/icons";
import VueContentLoader from 'vue-content-loader';


export default {
  name: 'ExcelExports',
  data() {
    return {
      all: BiEmojiWinkFill,
    }
  },
  methods: {
    async exportWinners() {
      const response = await axios.get('http://127.0.0.1:8000/clientes/by-status/1');
      const data = response.data;
      this.convertirAExcel(data);
    },

    async exportPending() {
      const response = await axios.get('http://127.0.0.1:8000/clientes/by-status/0');
      const data = response.data;
      this.convertirAExcel(data);
    },

    async exportAll() {
      const response = await axios.get('http://127.0.0.1:8000/clientes');
      const data = response.data;
      this.convertirAExcel(data);
    },
    async convertirAExcel(arrayData) {
      this.loading = true;
      // Crear un nuevo workbook y worksheet
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Datos');

      // Añadir encabezados de columnas
      const headers = Object.keys(arrayData[0]);
      worksheet.addRow(headers);

      // Añadir filas con los datos del array
      arrayData.forEach(row => {
        const rowData = Object.values(row);
        worksheet.addRow(rowData);
      });

      // Escribir el workbook en un buffer
      const buffer = await workbook.xlsx.writeBuffer();

      // Crear un blob a partir del buffer
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

      // Crear un objeto URL a partir del blob
      const url = window.URL.createObjectURL(blob);

      // Crear un enlace para descargar el archivo Excel
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'datos.xlsx');
      document.body.appendChild(link);

      // Hacer clic en el enlace para iniciar la descarga
      link.click();

      // Liberar el objeto URL
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
      this.loading = false;
    }
  }
}
</script>