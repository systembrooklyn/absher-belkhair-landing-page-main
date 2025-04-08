<script setup>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Service from "./components/Service.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import { useI18n } from "vue-i18n";
import { watchEffect } from "vue";
import ImageSwiper from "./components/ImageSwiper.vue";

const { locale , t } = useI18n();

watchEffect(() => {
  document.body.classList.toggle("rtl", locale.value === "ar");
  document.body.classList.toggle("ltr", locale.value === "en");
});
</script>

<template>
  <Header />
  <Hero />
  <Service />
  <div class="text-center container con ">
    <h2 class="swiper-title">{{ t("partnershipsTitle") }}</h2>
    <p class="swiper-subtitle">{{ t("partnershipsSubtitle") }}</p>
  </div>
<ImageSwiper/>
  <About />
  <Contact />
  <Footer />
</template>

<style scoped>
.con{
  margin-top: 80px;
  margin-bottom: 20px;
}
.swiper-title {
  font-size: 30px;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 8px;
}

.swiper-subtitle {
  font-size: 18px;
  color: #666;
  /* margin-bottom: 30px; */
}
</style>