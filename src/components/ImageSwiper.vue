<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import sw1 from "../assets/images/sw1.jpg";
import sw2 from "../assets/images/sw2.jpg";
import sw3 from "../assets/images/sw3.jpg";
import sw4 from "../assets/images/sw4.jpg";
import sw5 from "../assets/images/sw5.jpg";

const images = [
  { id: 1, url: sw1 },
  { id: 2, url: sw2 },
  { id: 3, url: sw3 },
  { id: 4, url: sw4 },
  { id: 5, url: sw5 },
];

const config = {
  height: 100,
  itemsToShow: 4,
  gap: 5,
  autoplay: 4000,
  wrapAround: true,
  pauseAutoplayOnHover: true,
};
</script>

<template>
  <Carousel v-bind="config" >
    <Slide v-for="image in images" :key="image.id">
      <img :src="image.url" alt="image" class="img-fluid imgSlid" />
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<style scoped>
.imgSlid {
  width: 200px;
  height: 100px;
  object-fit: contain;
}
</style>