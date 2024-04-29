<template>
    <div class="mt-5">
      <div class="row containerCards">
        <v-card v-for="(card, index) in cards" :key="index" class="col-md-3 mb-3 ml-2">
          <v-img :src="card.image" class="card-img-top img-fluid" alt="Card image cap" />  <v-card-title>{{ card.title }}</v-card-title>
          <v-card-text>
            <p>{{ card.description }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn :to="card.link" class="btn btn-primary">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CardsInfo",
    data() {
      return {
        cards: [
          {
            image: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2015/09/465117-tesla-model-x.jpg?tf=3840x",
            title: "Top Western Road Trips",
            description: "1,000 miles of wonder",
            link: "#"
          },
          {
            image: "https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2024/04/tesla-nouvelle-model-3-performance-1-1024x576.jpg?resize=928",
            title: "Another Card Title",
            description: "Replace this with your card description.",
            link: "#"
          },
          {
            image: "https://www.motor.com.co/__export/1671828035375/sites/motor/img/2022/12/23/tesla-roadster.webp_232547644.webp",
            title: "Another Card Title",
            description: "Replace this with your card description.",
            link: "#"
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .containerCards{
    display: flex;
  justify-content: center; /* Centra horizontalmente */
  align-items: center; /* Centra verticalmente */
  }
  /* No additional styles needed for responsiveness */
  </style>
  