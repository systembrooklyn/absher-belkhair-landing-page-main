<script setup>
import { useI18n } from "vue-i18n";
import logo from "../assets/images/Subheading (3).png";
const { t } = useI18n();

const socialItems = [
  {
    link: "https://www.instagram.com/ab_documents?igsh=MW1pZDF2bWpodXc1aQ==",
    icon: "fa-brands fa-instagram",
  },
  {
    link: "https://www.facebook.com/share/1Fq4rr8Kjs/?mibextid=wwXIfr",
    icon: "fa-brands fa-facebook",
  },
  {
    link: "https://www.tiktok.com/@absher.belkhair?_t=ZS-8uBV52MObUS&_r=1",
    icon: "fa-brands fa-tiktok",
  },
  { link: "https://wa.me/971529670703", icon: "fa-brands fa-whatsapp" },
];
</script>

<template>
  <div class="site-footer">
    <div class="footer-dots"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="widget">
            <h3>{{ t("column1Heading") }}</h3>
            <p>{{ t("column1Text") }}</p>
          </div>
          <div class="widget">
            <h3>{{ t("connectHeading") }}</h3>
            <ul class="list-unstyled social">
              <li
                v-for="(item, index) in socialItems"
                :key="index"
                style="margin-right: 5px"
              >
                <a :href="item.link" target="_blank">
                  <i :class="item.icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="widget">
  <h3 class="d-flex align-items-center">
    
    {{ t("column4Heading") }}
  </h3>
  <address>
    <span class="icon-home mr-2"></span> 
    {{ t("address") }}</address>
  
  <ul class="list-unstyled links mb-4">
    <li>
      <a :href="'tel:' + t('phone1')" class="d-flex align-items-center">
        <span class="mt-1 icon-phone mr-2"></span>
        <span v-html="t('phone1')"></span>
      </a>
    </li>
    <li>
      <a :href="'tel:' + t('phone2')" class="d-flex align-items-center">
        <span class="mt-1 icon-phone mr-2"></span>
        <span v-html="t('phone2')"></span>
      </a>
    </li>
  </ul>
</div>

        </div>

        <div class="col-lg-4">
          <h3 class="mb-4">{{ t("mapHeading") }}</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.3842451008372!2d55.33611372584396!3d25.257656529251538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ce923dd170f%3A0xe05fb3a7f45e0b08!2sGolden%20Business%20Center!5e0!3m2!1sar!2seg!4v1740073430240!5m2!1sar!2seg"
            width="300"
            height="250"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div class="row">
        <div class="col-12 mt-5 text-center foot-logo">
          <p>
            {{ t("copyrightText") }}
            <img :src="logo" alt="">
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.site-footer {
  background: #efefef;
  font-size: 16px;
  color: #888;
  padding: 70px 0 0 0;
}
.foot-logo img {
  width: 25px;
}
.site-footer a {
  color: #407bff;
  position: relative;
  display: inline-block;
}

.site-footer .btn:before {
  display: none;
}

.site-footer .widget {
  margin-bottom: 40px;
  display: block;
  position: relative;
  z-index: 1;
}

.site-footer .widget h3 {
  font-size: 16px;
  color: #000000;
  margin-bottom: 30px;
}

.site-footer .widget .links {
  width: 150px;
}

.site-footer .widget .links li {
  margin-bottom: 10px;
}

.site-footer .widget .links li a {
  color: #777;
}

.site-footer .social li {
  display: inline-block;
}

.site-footer .social li a {
  display: inline-block;
  width: 30px;
  height: 30px;
  position: relative;
  background: #777;
  border-radius: 50%;
  color: #ffffff;
}

.site-footer .social li a:before {
  display: none;
}

.site-footer .social li a > i {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.site-footer .social li a:hover {
  background: #06007a;
  color: #ffffff;
}
</style>
