<template>
<div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade" data-ride="carousel" data-interval="4000" data-pause="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 img" src="../../assets/slider/living-room-gac2c91831_1920.jpg" alt="Second slide">
      
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 img" src="../../assets/slider/living-room-g20a5cd03b_1920.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 img" src="../../assets/slider/room-ge9e063c9e_1920.jpg" alt="Third slide">
    </div>
    <div class="text">
      <h1>
        كل ما يحتاجه بيتك في موقعنا 
      </h1>
      <br>
      <h5>
        جميع الاقسام والمفروشات اللازمة لبيتك احصل عليها الان من خلال الطلب من موقعنا او التواصل معنا 
      </h5>
      <br><br>
      <button class="btn">
        تسوق الان 
      </button>
    </div>
  </div>
  <br><br><br><br>
</div>
</template>


<script>
export default {
  name: "Slider",
  methods:{
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
h1,h5{
  color: white;
}
.text{
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: end;
  top: 300px;
  right: 200px;
  z-index: 9;
  
}
.btn{
  background-color: #DF9180;
  color: white;
  font-size: 22px;
  border-radius: 0;
  width: 200px;
  height: 50px;
}
</style>