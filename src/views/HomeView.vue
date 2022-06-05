<template>
  <div class="home">
    <Navbar/>
    <Slider/>
    <AllDeparts/>
    <AllProducts/>
    <SelectDepart/>
    <Ad/>
    <Sales/>
    <EmailForm/>
  </div>
</template>

<script>
import Slider from '../components/pages/Slider.vue'
import Navbar from '../components/layout/Navbar.vue'
import AllDeparts from '../components/pages/AllDeparts.vue'
import AllProducts from '../components/pages/AllProducts.vue'
import SelectDepart from '../components/pages/SelectDepart.vue'
import Ad from "../components/pages/ad.vue"
import Sales from "../components/pages/Sales.vue"
import EmailForm from "../components/pages/EmailForm.vue"
export default {
  name: "HomeView",
  components: {
    Slider,
    Navbar,
    AllDeparts,
    AllProducts,
    SelectDepart,
    Ad,
    Sales,
    EmailForm
  },
};
</script>
