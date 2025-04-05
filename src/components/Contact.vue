<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { send } from "emailjs-com";
import Swal from "sweetalert2";

const { t } = useI18n();

const contactForm = ref({
  firstName: "",
  lastName: "",
  email: "",
  message: "",
});

const isLoading = ref(false);

const sendEmail = async () => {
  if (!contactForm.value.email.includes("@")) {
    Swal.fire({
      title: t("invalidEmail"),
      icon: "warning",
      confirmButtonText: t("ok"),
    });
    return;
  }

  isLoading.value = true;
  try {
    await send(
      "service_9soot3a",
      "template_scymzhe",
      {
        firstName: contactForm.value.firstName,
        lastName: contactForm.value.lastName,
        from_email: contactForm.value.email,
        message: contactForm.value.message,
        to_email: "Absherbelkhair2@gmail.com",
      },
      "QR_yTc93M0JDJwxC-"
    );

    Swal.fire({
      title: t("emailSent"),
      icon: "success",
      confirmButtonText: t("ok"),
    });

    contactForm.value = { firstName: "", lastName: "", email: "", message: "" };
  } catch (error) {
    Swal.fire({
      title: t("emailNotSent"),
      icon: "error",
      confirmButtonText: t("ok"),
    });
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="untree_co-section bg-light" id="contact-section">
    <div class="container">
      <div class="row mb-4" data-aos="fade-up">
        <div class="col-12 text-center mb-5">
          <h2 class="heading">{{ t("heading") }}</h2>
          <p>{{ t("subHeading") }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <form
            class="contact-form"
            @submit.prevent="sendEmail"
            data-aos="fade-up"
          >
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label for="fname">{{ t("firstName") }}</label>
                  <input
                    type="text"
                    class="form-control"
                    id="fname"
                    v-model.trim="contactForm.firstName"
                    required
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label for="lname">{{ t("lastName") }}</label>
                  <input
                    type="text"
                    class="form-control"
                    id="lname"
                    v-model.trim="contactForm.lastName"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="email">{{ t("email") }}</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model.trim="contactForm.email"
                required
              />
            </div>
            <div class="form-group">
              <label for="message">{{ t("message") }}</label>
              <textarea
                class="form-control"
                id="message"
                v-model.trim="contactForm.message"
                cols="30"
                rows="5"
              ></textarea>
            </div>
           <div class="btn-wrap">
            <button
              type="submit"
              class="butt"
              data-aos="fade-up"
              :disabled="isLoading"
            >
              {{ isLoading ? t("sending") : t("buttonSendMessage") }}
            </button>
           </div>
          </form>
        </div>
        <!-- <div class="col-lg-4 text-lg-end contact-info" data-aos="fade-up">
          <h3 class="h5 mb-4">{{ t("contactInfoHeading") }}</h3>
          <address>
            <span class="icon-home mr-2"></span>
            {{ t("address") }}
          </address>
          <ul class="list-unstyled ul-links mb-4">
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
            <li>
              <a
                class="d-flex align-items-center"
                href="mailto:abisheirbelkhaier2@gmail.com"
              >
                <span class="mt-1 icon-envelope mr-2"></span>
                <span>abisheirbelkhaier2@gmail.com</span>
              </a>
            </li>
          </ul>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.untree_co-section {
  padding: 50px 0;
  position: relative;
  background-color: #eee;
}

.untree_co-section .heading {
  font-size: 38px;
  color: #000;
}

.untree_co-section .heading strong {
  font-weight: 700;
}

.untree_co-section .caption {
  color: #407bff;
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
}

.form-control {
  border: none;
  font-size: 16px;
  height: 45px;
  background: transparent;
  border-bottom: 1px solid #43434d;
  border-radius: 0;
  color: #000;
}
.btn-wrap{
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-control:focus {
  border-color: #407bff;
  box-shadow: none;
}

.list-unstyled li a {
  color: #000;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.butt {
  background-color: var(--primary-color);
  color: #fff;
  padding: 8px 20px;
  margin-top: 15px;
  border: 1px solid var(--primary-color);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.butt:disabled {
  background-color: gray;
}

@media (max-width: 991.98px) {
  .untree_co-section {
    padding: 50px 0;
  }
  .untree_co-section .heading {
    font-size: 28px;
  }
}

@media (max-width: 767px) {
  .contact-info {
    margin-top: 40px;
  }
}
</style>
