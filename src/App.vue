<template>
  <div id="app">
    <router-view />
  </div>
</template>


<script>
export default {
  mounted() {
    // define app
    let myApp = document.querySelector("#app");
    // define app languages
    let langs = ['en', 'ar'];
    // define current app language
    let lang = localStorage.lang;
    // if localStorage lang is set and it is a valid language
    if(!lang || lang === '' || !langs.includes(lang)) {
      // set default language
      localStorage.setItem('lang', 'ar');
      // reload page
      this.$router.go(this.$router.currentRoute);
    }
    // if localStorage lang is a valid language
    if(langs.includes(lang)) {
      // set the language
      if(lang === 'en') {
        myApp.classList.add('english-style');
      }
      if(lang === 'ar') {
        myApp.style.fontFamily = "'El Messiri', sans-serif";
        myApp.style.direction = "rtl";
      }
    }
  }
}
</script>

<style lang="scss">
//arabic font
@import url('https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500&family=Raleway:wght@300;400;500;600;700;900&display=swap');
//english font
@import url('https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500&family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
</style>
