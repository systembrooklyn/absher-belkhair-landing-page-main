<script setup>
import { useI18n } from "vue-i18n";
import { ref, onMounted, watch } from "vue";
import flagEg from "../assets/images/eg.png";
import flagEn from "../assets/images/en.png";
import logo from "../assets/images/Subheading (3).png";

const { t, locale } = useI18n();
const selectedLanguage = ref(locale.value);
const isDropdownOpen = ref(false);
const isSidebarOpen = ref(false);
const activeSection = ref("home-section");

const sections = ref([
  { link: "home-section", text: () => t("home") },
  { link: "features-section", text: () => t("features") },
  { link: "about-section", text: () => t("about") },
  { link: "contact-section", text: () => t("contact") },
]);

const selectLanguage = ref([
  { value: "en", label: "English", img: flagEn },
  { value: "ar", label: "العربية", img: flagEg },
]);

onMounted(() => {
  const savedLanguage = localStorage.getItem("language") || "en";
  selectedLanguage.value = savedLanguage;
  locale.value = savedLanguage;
  document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr";

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    { threshold: 0.6 }
  );

  sections.value.forEach((section) => {
    const sectionElement = document.getElementById(section.link);
    if (sectionElement) observer.observe(sectionElement);
  });

  return () => observer.disconnect();
});

const setActiveSection = (section) => {
  activeSection.value = section;
  isSidebarOpen.value = false;
  document
    .getElementById(section)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const changeLanguage = (lang) => {
  selectedLanguage.value = lang.value;
  localStorage.setItem("language", lang.value);
  locale.value = lang.value;
  document.documentElement.dir = lang.value === "ar" ? "rtl" : "ltr";
  isDropdownOpen.value = false;
};

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<template>
  <nav class="main-nav">
    <div class="container">
      <div class="nav-container">
        <div class="nav-logo">
          <a href="#home-section">
            <img :src="logo" alt="Logo" />
          </a>
        </div>
        <div class="nav-right">
          <div class="lang-selector">
            <div
              class="lang-dropdown"
              @click="isDropdownOpen = !isDropdownOpen"
            >
              <img
                :src="
                  selectLanguage.find((lang) => lang.value === selectedLanguage)
                    ?.img
                "
                class="flag"
              />
              <span>{{
                selectLanguage.find((lang) => lang.value === selectedLanguage)
                  ?.label
              }}</span>
              <span class="arrow">&#9662;</span>
            </div>
            <ul v-if="isDropdownOpen" class="lang-options">
              <li
                v-for="lang in selectLanguage"
                :key="lang.value"
                @click="changeLanguage(lang)"
              >
                <img :src="lang.img" class="flag" />
                <span>{{ lang.label }}</span>
              </li>
            </ul>
          </div>

          <ul class="main-menu">
            <li v-for="section in sections" :key="section.link">
              <a
                :href="'#' + section.link"
                :class="{ active: activeSection === section.link }"
                @click="setActiveSection(section.link)"
              >
                {{ section.text() }}
              </a>
            </li>
          </ul>
        </div>

       
        <div class="burger-menu" @click="toggleSidebar">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </nav>


  <div
    class="burger-menu"
    :class="{ open: isSidebarOpen }"
    @click="toggleSidebar"
  >
    <span></span>
    <span></span>
    <span></span>
  </div>

 
  <transition name="slide">
    <div v-if="isSidebarOpen" class="mobile-sidebar open">
      <button class="close-icon" @click="toggleSidebar">×</button>
      <ul class="mobile-menu">
        <li v-for="section in sections" :key="section.link">
          <a
            :href="'#' + section.link"
            :class="{ active: activeSection === section.link }"
            @click="setActiveSection(section.link)"
          >
            {{ section.text() }}
          </a>
        </li>
      </ul>
    </div>
  </transition>
</template>

<style scoped>
:global(html) {
  scroll-behavior: smooth;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.main-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  padding: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo img {
  width: 60px;
  height: 60px;
}
.nav-right {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: auto;
}

.main-menu {
  list-style: none;
  display: flex;
  gap: 20px;
  align-items: center;
  margin-left: auto;
}

.main-menu li {
  display: inline-block;
}

.main-menu li a {
  text-decoration: none;
  color: #333;
  font-size: 16px;
  padding: 10px 15px;
  transition: color 0.3s, border-bottom 0.3s;
  white-space: nowrap;
}

.main-menu li a.active,
.mobile-menu li a.active {
  color: var(--primary-color, #007bff);
  border-bottom: 2px solid var(--primary-color, #007bff);
  font-weight: bold;
}

.lang-selector {
  position: relative;
  margin-right: 20px;
}

.lang-dropdown {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: var(--primary-color);
  color: #fff;
  cursor: pointer;
  font-size: 14px;
}

.flag {
  width: 20px;
  height: 20px;
  object-fit: cover;
}

.arrow {
  font-size: 12px;
}

.lang-options {
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  list-style: none;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.lang-options li {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  cursor: pointer;
  transition: background 0.2s;
}

.lang-options li:hover {
  background: #f0f0f0;
}
@media (max-width: 991px) {
  .burger-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 24px;
    cursor: pointer;
  }

  .burger-menu span {
    display: block;
    height: 5px;
    margin-bottom: 4px;
    width: 100%;
    background: #777777;
    border-radius: 3px;
    transition: 0.3s;
  }

 
  .burger-menu.open span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .burger-menu.open span:nth-child(2) {
    opacity: 0;
  }

  .burger-menu.open span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  .main-menu {
    display: none;
  }


  .mobile-sidebar {
    position: fixed;
    top: 8%;
    right: 0;
    width: 250px;
    height: 100vh;
    background: #fff;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
    z-index: 200;
    padding-top: 50px;
    transform: translateX(100%);
    transition: transform 0.4s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .mobile-sidebar.open {
    transform: translateX(0);
  }

  .mobile-menu {
    list-style: none;
    padding: 0;
    width: 50%;
    text-align: center;
    margin-top: 50px;
  }

  .mobile-menu li {
    margin-bottom: 20px;
  }

  .mobile-menu li a {
    text-decoration: none;
    color: #333;
    font-size: 18px;
    padding: 10px;
    display: block;
  }

 
  .mobile-menu li a.active {
    color: var(--primary-color, #007bff);
    border-bottom: 2px solid var(--primary-color, #007bff);
  }


  .close-icon {
    position: absolute;
    top: 40px;
    right: 15px;
    background: transparent;
    border: none;
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
    color: #000; 
    transition: color 0.3s;
  }

  .close-icon:hover {
    color: var(--primary-color, #007bff);
    border: none;
    outline: none;
  }
}
</style>
