<template>
    <v-carousel show-arrows="hover">
        <v-carousel-item src="https://s2.ppllstatics.com/lasprovincias/www/multimedia/2024/01/09/Imagen%20Tesla-Cybertruck-2025-1600-01-RFsglQtAHngqDTwwwqBropN-1200x840@Las%20Provincias.jpg" cover></v-carousel-item>

        <v-carousel-item src="https://www.las2orillas.co/wp-content/uploads/2023/12/kia-k3-2.jpg" cover></v-carousel-item>

        <v-carousel-item src="https://es.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2024/performance/camaro/highlights/2024-camaro-highlight-1.png?imwidth=960" cover></v-carousel-item>
    </v-carousel>
</template>
<script>
export default {
    name: "CarouselSlider",
    data() {
        return {
            colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4',
            ],
            slides: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth',
            ],
        }
    },
}
</script>