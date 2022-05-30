<template>
  <div class="home">
    <Navbar/>
    <Slider/>
    <AllDeparts/>
  </div>
</template>

<script>
import Slider from '../components/pages/Slider.vue'
import Navbar from '../components/layout/Navbar.vue'
import AllDeparts from '../components/pages/AllDeparts.vue'
export default {
  name: "HomeView",
  components: {
    Slider,
    Navbar,
    AllDeparts
  },
};
</script>
