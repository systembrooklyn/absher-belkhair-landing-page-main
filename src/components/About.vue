<script setup>
import { useI18n } from "vue-i18n";
import logo from "../assets/images/Subheading (3).png";
const { t } = useI18n();

const totalMembers = "50";
const totalTeam = "20";
</script>

<template>
  <div class="content">
    <div id="about-section">
      <div class="container-fluid">
        <div class="about-content">
          <div
            class="con-img text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img :src="logo" alt="Image" class="img-fluid" />
          </div>
          <div class="info">
            <div class="mb-4 " data-aos="fade-up" data-aos-delay="0">
              <h2 class="heading">{{ t("headingabout") }}</h2>
            </div>
            <div class="mb-4" data-aos="fade-up" data-aos-delay="100">
              <h6>{{ t("innovativeTitle") }}</h6>
              <p>
                {{ t("para1") }}
              </p>
              <p>
                {{ t("para2_part1") }}
                <span class="highlight">
                  {{ t("para2_highlight") }}
                </span>
                {{ t("para2_part2") }}
              </p>
            </div>
            <div class="count-numbers">
              <div data-aos="fade-up" data-aos-delay="0">
                <span class="counter d-block">
                  <span :data-number="totalMembers">{{ totalMembers }}</span>
                  <span>M</span>
                </span>
                <span class="caption-2">{{ t("members") }}</span>
              </div>
              <div data-aos="fade-up" data-aos-delay="100">
                <span class="counter d-block">
                  <span :data-number="totalTeam">{{ totalTeam }}</span>
                </span>
                <span class="caption-2">{{ t("team") }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  padding: 80px 30px 30px 30px;
  background-image: url("../assets//images//freepik__upload__87458.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin-top: 50px;
  align-items: center;
  display: flex;
}
.about-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.con-img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
}
.con-img img {
  width: 70%;
  border-radius: 30px;
}
.heading {
  font-weight: 900;
  font-size: 50px;
}
.count-numbers {
  display: flex;
  justify-content: space-around;
  font-weight: 600;
  font-size: 20px;
}

.info {
  color: #3b3b3b;
  width: 70%;
  font-size: 20px;
}
@media (max-width: 767px) {
  .about-content {
    flex-direction: column;
  }
  .content {
    padding: 40px 0px 30px 0px;
  }
  .info {
    width: 90%;
  }
  .con-img {
    width: 90%;
  }
  .about-content img{
    width: 90%;
  }
  .heading{
    margin-top: 30px;
    font-size: 50px;
    font-weight: 900;
  }
}
</style>
