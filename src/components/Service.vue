<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import ServiceModal from "./ServiceModal.vue";
import Swal from "sweetalert2";
import axios from "axios";

const { t } = useI18n();


const serNum = ref(1);
const alertMessage = ref("");
const isModalOpen = ref(false);
const goToServices = () => {
  if (serNum.value < 3) {
    serNum.value++;
  }
};


const formData = ref({
  service: "",
  name: "",
  number: "",
  email: "",
});








const openModal = (serviceName) => {
  formData.value.service = serviceName;
  isModalOpen.value = true;
};


const closeModal = () => {
  isModalOpen.value = false;
};


// const sendToGoogleSheets = async (data) => {
//   const googleScriptURL = "https://script.google.com/macros/s/AKfycbxsc84h_04GjcH_JoHzr2qpeCRn7kylu2Ur55wrAE0YbRczUsjhwjThgd3OLp2mQ7Ir/exec"; 
// console.log(data);

//   try {
//     const response = await axios.post(googleScriptURL, data, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     console.log("Response:", response.data);

//     if (response.data.status === "Success") {
//       Swal.fire({
//         title: "Success",
//         text: response.data.message,
//         icon: "success",
//         confirmButtonText: "OK",
//       });

//       closeModal();
//       formData.value = { service: "", name: "", number: "", email: "" };
//     } else {
//       throw new Error(response.data.message || "Unknown error from server");
//     }
//   } catch (error) {
//     closeModal();
//     Swal.fire({
//       title: "Error",
//       text: error.response ? error.response.data.message : "Request failed",
//       icon: "error",
//       confirmButtonText: "OK",
//     });
//   }
// };

const sendToTelegram = async (data) => {
  console.log(data);

  const TELEGRAM_BOT_TOKEN = "8046340694:AAGYQ4RKhAYeWZ6aUMu0mNQtqKHztN6OGiU";
  const CHAT_ID = "-1002496196460";
  const message = `
  📝 *طلب خدمة جديد* 📝
  📌 *الخدمة:* ${data.service}
  👤 *الاسم:* ${data.name}
  📞 *رقم الهاتف:* ${data.number}
  ✉️ *البريد الإلكتروني:* ${data.email}
  `;

  const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    const response = await axios.post(TELEGRAM_API_URL, {
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "Markdown",
    });

    console.log("Response:", response.data);

    if (response.data.ok) {
      Swal.fire({
        title: "Success",
        text: t("success"),
        icon: "success",
        confirmButtonText: "OK",
      });

      closeModal();
      formData.value = { service: "", name: "", number: "", email: "" };
    } else {
      throw new Error("Telegram API Error");
    }
  } catch (error) {
    Swal.fire({
      title: "Error",
      text: t("error"),
      icon: "error",
      confirmButtonText: "OK",
    });
    console.error("Axios Error:", error.response ? error.response.data : error.message);
  }
};






</script>

<template>
  <div v-if="alertMessage" class="alert">
    {{ alertMessage }}
  </div>

  <div id="features-section">
    <div class="head">
      <h2>{{ t("services") }}</h2>
      <p>
        {{ t("servicesDesc") }}
      </p>
    </div>
    <div class="parent" v-if="serNum >= 1">
      <div class="card" data-aos="fade-up" data-aos-delay="0">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-buildings"
            viewBox="0 0 16 16">
            <path
              d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z" />
            <path
              d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z" />
          </svg>
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ t("businessSetup") }}</h5>
          <p class="card-text w-50">
            {{ t("businessSetupDesc") }}
          </p>
          <button class="service-but" @click="openModal(t('businessSetup'))">{{ t("getService") }}</button>
        </div>
      </div>
      <div class="card mt-5" data-aos="fade-up" data-aos-delay="0">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-hearts"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4m13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z" />
          </svg>
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ t("familyVisa") }}</h5>
          <p class="card-text">
            {{ t("familyVisaDesc") }}
          </p>
          <button class="service-but" @click="openModal(t('familyVisa'))">{{ t("getService") }}</button>
        </div>
      </div>
      <div class="card mt-5" data-aos="fade-up" data-aos-delay="0">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-vcard"
            viewBox="0 0 16 16">
            <path
              d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5" />
            <path
              d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96q.04-.245.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 1 1 12z" />
          </svg>
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ t("employmentVisa") }}</h5>
          <p class="card-text">
            {{ t("employmentVisaDesc") }}
          </p>
          <button class="service-but" @click="openModal(t('employmentVisa'))">{{ t("getService") }}</button>
        </div>
      </div>


    </div>
    <div class="parent" v-if="serNum >= 2">

      <div class="card mt-5" data-aos="fade-up" data-aos-delay="0">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-star"
            viewBox="0 0 16 16">
            <path
              d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
          </svg>
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ t("goldenResidency") }}</h5>
          <p class="card-text">
            {{ t("goldenResidencyDesc") }}
          </p>
          <button class="service-but" @click="openModal(t('goldenResidency'))">{{ t("getService") }}</button>
        </div>
      </div>
      <div class="card mt-5" data-aos="fade-up" data-aos-delay="0">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
            class="bi bi-airplane-engines" viewBox="0 0 16 16">
            <path
              d="M8 0c-.787 0-1.292.592-1.572 1.151A4.35 4.35 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0M7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1s.458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7z" />
          </svg>
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ t("touristVisa") }}</h5>
          <p class="card-text">
            {{ t("touristVisaDesc") }}
          </p>
          <button class="service-but" @click="openModal(t('touristVisa'))">{{ t("getService") }}</button>
        </div>
      </div>
      <div class="card mt-5" data-aos="fade-up" data-aos-delay="0">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-keyboard"
            viewBox="0 0 16 16">
            <path
              d="M14 5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM2 4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
            <path
              d="M13 10.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm0-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm-5 0A.25.25 0 0 1 8.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 8 8.75zm2 0a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25zm1 2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm-5-2A.25.25 0 0 1 6.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 6 8.75zm-2 0A.25.25 0 0 1 4.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 4 8.75zm-2 0A.25.25 0 0 1 2.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 2 8.75zm11-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm-2 0a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm-2 0A.25.25 0 0 1 9.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 9 6.75zm-2 0A.25.25 0 0 1 7.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 7 6.75zm-2 0A.25.25 0 0 1 5.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 5 6.75zm-3 0A.25.25 0 0 1 2.25 6h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5A.25.25 0 0 1 2 6.75zm0 4a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm2 0a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-5.5a.25.25 0 0 1-.25-.25z" />
          </svg>
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ t("typingServices") }}</h5>
          <p class="card-text">
            {{ t("typingServicesDesc") }}
          </p>
          <button class="service-but" @click="openModal(t('typingServices'))">{{ t("getService") }}</button>
        </div>
      </div>
    </div>
    <div class="parent" v-if="serNum >= 3">

      <div class="card mt-5" data-aos="fade-up" data-aos-delay="0">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-postage"
            viewBox="0 0 16 16">
            <path
              d="M4.75 3a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h6.5a.75.75 0 0 0 .75-.75v-8.5a.75.75 0 0 0-.75-.75zM11 12H5V4h6z" />
            <path
              d="M3.5 1a1 1 0 0 0 1-1h1a1 1 0 0 0 2 0h1a1 1 0 0 0 2 0h1a1 1 0 1 0 2 0H15v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1h-1.5a1 1 0 1 0-2 0h-1a1 1 0 1 0-2 0h-1a1 1 0 1 0-2 0h-1a1 1 0 1 0-2 0H1v-1a1 1 0 1 0 0-2v-1a1 1 0 1 0 0-2V9a1 1 0 1 0 0-2V6a1 1 0 0 0 0-2V3a1 1 0 0 0 0-2V0h1.5a1 1 0 0 0 1 1M3 3v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1" />
          </svg>
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ t("visaStamping") }}</h5>
          <p class="card-text">
            {{ t("visaStampingDesc") }}
          </p>
          <button class="service-but" @click="openModal(t('visaStamping'))">{{ t("getService") }}</button>
        </div>
      </div>
      <div class="card" data-aos="fade-up" data-aos-delay="0">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-badge"
            viewBox="0 0 16 16">
            <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492z" />
          </svg>
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ t("emiratesID") }}</h5>
          <p class="card-text">
            {{ t("emiratesIDDesc") }}
          </p>
          <button class="service-but" @click="openModal(t('emiratesID'))">{{ t("getService") }}</button>
        </div>
      </div>
      <div class="card" data-aos="fade-up" data-aos-delay="0">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-heart-pulse"
            viewBox="0 0 16 16">
            <path
              d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857q.09.083.176.171a3 3 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01zM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5" />
            <path
              d="M10.464 3.314a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162z" />
          </svg>
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ t("medicalExamination") }}</h5>
          <p class="card-text">
            {{ t("medicalExaminationDesc") }}
          </p>
          <button class="service-but" @click="openModal(t('medicalExamination'))">{{ t("getService") }}</button>
        </div>
      </div>

    </div>
    <div class="text-center">
      <button class="Discover" v-if="serNum < 3" @click="goToServices">
        {{ t("DiscoverServices") }}
      </button>
    </div>
    <ServiceModal :show="isModalOpen" :formData="formData" @close="closeModal" @submit="sendToTelegram" />
  </div>
</template>

<style scoped>
.parent {
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.head {
  width: 50%;
  margin: auto;
  text-align: center;
  padding: 50px 0 40px 0;
}

.head h2 {
  font-weight: 600;
  font-size: 48px;
}

.head p {
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
}

.card {
  min-width: 250px;
    max-width: 350px;
  text-align: center;
}


.icon {
  margin: auto;
  width: 100px;
  height: 100px;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: black;
  margin-top: 20px;
  max-width: 80%;
    white-space: normal; 
}

  

.card-text {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  width: 300px;
  color: #242424;
  margin-top: 20px;
}
.card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 15px;
}

.service-but {
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  width: 200px;
  padding: 4px 20px;
  font-weight: 600;
  font-size: 16px;
  border-radius: 8px;
  margin-top: 20px;
  transition: all 0.3s ease-in-out;
}

.service-but:hover {
  background-color: var(--primary-color);
  color: #fff;
}

.Discover {
  background-color: var(--primary-color);
  color: #fff;
  font-weight: 600;
  padding: 8px 20px;
  border-radius: 10px;
  width: 250px;
  margin: 70px auto 0 auto;
  display: block;
  transition: background-color 0.3s ease-in-out;
}

.Discover:hover {
  background-color: #06007ad5;
}

@media (max-width: 767px) {
  .parent {
    width: 100%;
    padding: 0;
  }

  .head {
    width: 80%;
    margin: 0 auto 100px auto;
  }

  .col {
    display: flex;
    justify-content: center;
  }

  .card {
    margin-top: 40px;
  }
}

@media (min-width: 1540px) {
  .card {
    width: 600px;
  }
}
</style>
