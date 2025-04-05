<script setup>
import { useI18n } from "vue-i18n";

import img3 from "../assets/images/dubi.jpg";
import img2 from "../assets/images/us.jpg";
import img1 from "../assets/images/app.webp";

const { t } = useI18n();
</script>

<template>
  <div class="parent" id="home-section">
    <div class="container-fluid">
      <div class="row content align-items-center">
        <div class="col-lg-6">
           <div class="info">
            <h1 class="heading" data-aos="fade-up" data-aos-delay="0">
              {{ t("company_name") }}
            </h1>
            <div  data-aos="fade-up" data-aos-delay="100">
              <p class="label">{{ t("hero_description") }}</p>
            </div>
            <p data-aos="fade-up" data-aos-delay="200" class="mt-5">
              <a href="#features-section">
                <button class="butt">
                  {{ t("learn_more") }}
                </button>
              </a>
            </p>
          </div> 
        </div>
        <div class="col-lg-6 parent-img">
          <div class="content-img">
            <img
              :src="img1"
              alt="Image"
              class="img1"
              data-aos="fade-up"
              data-aos-delay="0"
            />

            <img
              :src="img2"
              alt="Image"
              class="img2"
              data-aos="fade-up"
              data-aos-delay="0"
            />
          </div>

          <div>
            <img
              :src="img3"
              alt="Image"
              class="img3"
              data-aos="fade-up"
              data-aos-delay="0"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.parent {
  padding: 100px 30px 30px 80px;
  background-color: #eee;
}

.parent-img {
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
}

.info {
  width: 100%;
  max-width: 600px; 
  margin: 0 auto;
  text-align: start;
}

.content-img {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.butt {
  background-color: var(--primary-color);
  color: #fff;
  padding: 8px 20px;
  width: 200px;
  border-radius: 10px;
  border: none;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
}

.butt:hover {
  background-color: #06007ad5;
}

.img1,
.img2 {
  width: 290px;
  height: 250px;
}

.img1 {
  border-radius: 22px;
}

.img2 {
  border-radius: 0 0 0 80px;
}

.img3 {
  width: 290px;
  height: 510px;
  border-radius: 0 80px 0 0;
}

.heading {
font-size: 50px;
  font-weight: 700;
  margin-bottom: 50px;
}

.label {
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;
  color: #424242cc;
  /* text-shadow: 2px 2px 5px rgba(252, 249, 249, 0.3); */
}

.text-right {
  text-align: right;
}

.text-left {
  text-align: left;
}

@media (max-width: 767px) {
  .parent {
    padding: 150px 0 20px 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden; 
    width: 100%;
  }

  .label {
    font-size: 16px;
    line-height: 20px;
    text-align: center;
  }
  .parent {
    flex-direction: column;
  }

  .info {
    width: 100%;
    max-width: 90%;
    text-align: center;
  }
  .butt {
    margin-bottom: 30px;
  }
  .content-img {
    align-items: center;
  }
  .parent-img {
    display: flex;
    gap: 10px;
    justify-content: center;
    width: 100%;
  }
  .img3 {
    width: 150px;
    height: 315px;
  }

  .img1,
  .img2 {
    width: 150px;
    height: 155px;
  }

  .butt {
    width: 150px;
    padding: 6px 15px;
  }
}
</style>
