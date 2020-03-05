<template>
    <div class="card_highlight">
        <v-carousel 
            hide-delimiters 
            cycle
            height="450"
            hide-delimiter-background
            show-arrows-on-hover
            >
                <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                ></v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
export default {
    name: "CardCarouselHighlight",
    data() {
        return {
            items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
        }
    },
}
</script>