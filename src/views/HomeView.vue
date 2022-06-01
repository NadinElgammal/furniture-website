<template>
  <div class="home">
    <Navbar/>
    <Slider/>
    <AllDeparts/>
    <AllProducts/>
    <SelectDepart/>
  </div>
</template>

<script>
import Slider from '../components/pages/Slider.vue'
import Navbar from '../components/layout/Navbar.vue'
import AllDeparts from '../components/pages/AllDeparts.vue'
import AllProducts from '../components/pages/AllProducts.vue'
import SelectDepart from '../components/pages/SelectDepart.vue'
export default {
  name: "HomeView",
  components: {
    Slider,
    Navbar,
    AllDeparts,
    AllProducts,
    SelectDepart
  },
};
</script>
