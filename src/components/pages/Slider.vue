<template>
<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel" data-interval="4000" data-pause="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 img" src="../../assets/slider/living-room-g20a5cd03b_1920.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 img" src="../../assets/slider/living-room-gac2c91831_1920.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 img" src="../../assets/slider/room-ge9e063c9e_1920.jpg" alt="Third slide">
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: "Slider",
  methods:{
//  
  }
};
</script>



<style scoped>
.carousel-item{
  height: 100vh;
  min-height: 300px;
}
.img{
  filter: brightness(0.5);
}
</style>