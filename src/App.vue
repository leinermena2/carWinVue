

<script>
import Navbar from './components/NavBar.vue'
import CarouselSlider from './components/Carousel.vue'
import CardsInfo from './components/Cards.vue'
import FormularioRegistro from './components/Form.vue'
import MyButtonCard from './components/ButtonCard.vue'
import DataTable from './components/TableWinner.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    CarouselSlider,
    CardsInfo,
    FormularioRegistro,
    MyButtonCard,
    DataTable
  }
}
</script>

<template>
  <Navbar />
  <CarouselSlider />
  <CardsInfo />
  <div class="container formContainer">
    <v-row>
      <v-col cols="6">
        <MyButtonCard icon="mdi-plus-circle" text="Add New Item" />
        <DataTable />
      </v-col>
      <v-col cols="6">
        <FormularioRegistro />
      </v-col>
    </v-row>
  </div>
 
</template>

<style>
 #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

} 

.formContainer{
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 20px
}
</style>
