<template>
  <div class="home">
    <Navbar/>
    <Slider/>
  </div>
</template>

<script>
import Slider from '../components/pages/Slider.vue'
import Navbar from '../components/layout/Navbar.vue'
export default {
  name: "HomeView",
  components: {
    Slider,
    Navbar

  },
};
</script>
