<template>
  <teleport to="body">
    <div v-if="show" class="modal-overlay">
      <div class="modal-form">
        <button class="close-modal" @click="$emit('close')">×</button>
        <h3>{{ t("formtitle") }}: {{ formData.service }}</h3>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="service">{{ t("formservice") }}:</label>
            <input type="text" id="service" v-model="formData.service" required />
          </div>
          <div class="form-group">
            <label for="name">{{ t("formname") }}:</label>
            <input type="text" id="name" v-model="localFormData.name" required />
          </div>
          <div class="form-group">
            <label for="number">{{ t("formphone") }}:</label>
            <input 
              type="text" 
              id="number" 
              v-model="localFormData.number" 
              required 
              @input="validatePhone"
            />
            <p v-if="!isPhoneValid" class="error-message">{{t("egyptGulf")}}</p>
          </div>
          <div class="form-group">
            <label for="email">{{ t("formemail") }}:</label>
            <input 
              type="email" 
              id="email" 
              v-model="localFormData.email" 
              required 
              @input="validateEmail"
            />
            <p v-if="!isEmailValid" class="error-message">{{ `${t("egyptGulf")}` }}</p>
          </div>
          <button type="submit" class="service-but" :disabled="!isFormValid">
            {{ t("formsubmit") }}
          </button>
        </form>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref, watch, defineEmits, computed } from "vue";

const { t } = useI18n();

const props = defineProps({
  show: Boolean,
  formData: Object,
});

const localFormData = ref({ ...props.formData });
const emit = defineEmits(["close", "submit"]);

watch(
  () => props.formData,
  (newVal) => {
    localFormData.value = { ...newVal };
  },
  { deep: true }
);


const isPhoneValid = ref(true);
const validatePhone = () => {
  const phoneRegex = /^(\+20|0020|01[0-9]{9})$|^(\+966|00966|05[0-9]{8})$|^(\+971|00971|05[0-9]{8})$|^(\+965|00965|[569][0-9]{7})$|^(\+973|00973|3[0-9]{7})$|^(\+974|00974|[3-7][0-9]{7})$|^(\+968|00968|9[0-9]{7})$/;
  isPhoneValid.value = phoneRegex.test(localFormData.value.number);
};


const isEmailValid = ref(true);
const validateEmail = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  isEmailValid.value = emailRegex.test(localFormData.value.email);
};


const isFormValid = computed(() => {
  return (
    localFormData.value.name &&
    isPhoneValid.value &&
    isEmailValid.value
  );
});

const handleSubmit = () => {
  if (isFormValid.value) {
    emit("submit", { ...localFormData.value });
  }
};
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}
.modal-form {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  position: relative;
}
.close-modal {
  background: transparent;
  border: none;
  font-size: 30px;
  position: absolute;
  top: 6px;
  right: 10px;
  cursor: pointer;
}
.close-modal:focus {
  outline: none;
}
.form-group {
  margin-bottom: 15px;
}
.form-group label {
  display: block;
  margin-bottom: 5px;
}
.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #4d4c4c;
  border-radius: 4px;
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
.service-but:disabled {
  background-color: gray;
  border-color: gray;
  color: #fff;
}
.error-message {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}
</style>
