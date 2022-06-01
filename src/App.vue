<template>
  <div id="app">
    <router-view />
  </div>
</template>


<script>
export default {
  mounted(){
    if(!window.localStorage.lang || window.localStorage.lang === ""){
      window.localStorage.setItem("lang" , "AR")
      this.$router.go(this.$router.currentRoute)
    }
    if(window.localStorage.lang==="AR"){
      let myApp = document.querySelector("#app")
      myApp.classList.add("arabic-style")
    }
  }
}
</script>

<style lang="scss">

#app {
  font-family: 'El Messiri', sans-serif;
}


@import url('https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500&family=Raleway:wght@300;400;500;600;700;900&display=swap');
</style>
