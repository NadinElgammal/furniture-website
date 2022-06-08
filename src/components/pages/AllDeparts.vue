<template>
  <div class="container">
    <h3>جميع الاقسام</h3>
    <h6>
      جميع الاقسام والمفروشات اللازمة لبيتك احصل عليها الان من خلال الطلب من
      موقعنا او التواصل معنا
    </h6>
    <br><br>
    <carousel :nav="false" :dots="false" :responsive="{0: {items:1}, 768: {items: 3}}" :autoplay="true">
      <div class="cardd"><img src="https://i5.walmartimages.com/asr/42a5f73e-d423-46c0-b4ff-f7693627de17.d41dbab1a623594c146dc1713672ba9d.jpeg"><br><span>اسم القسم </span></div>
      <div class="cardd"><img src="https://i.pinimg.com/550x/ca/bc/cb/cabccb6ee8313a7ae269ef0fa8859db5.jpg"><br><span>اسم القسم </span></div>
      <div class="cardd"><img src="https://homedesignlover.com/wp-content/uploads/2013/01/2-main-street.jpg"><br><span>اسم القسم </span></div>
      <div class="cardd"><img src="https://i5.walmartimages.com/asr/42a5f73e-d423-46c0-b4ff-f7693627de17.d41dbab1a623594c146dc1713672ba9d.jpeg"><br><span>اسم القسم </span></div>
      <div class="cardd"><img src="https://i.pinimg.com/550x/ca/bc/cb/cabccb6ee8313a7ae269ef0fa8859db5.jpg"><br><span>اسم القسم </span></div>
      <div class="cardd"><img src="https://i5.walmartimages.com/asr/42a5f73e-d423-46c0-b4ff-f7693627de17.d41dbab1a623594c146dc1713672ba9d.jpeg"><br><span>اسم القسم </span></div>
      <!-- <div class="cardd"><img src="https://homedesignlover.com/wp-content/uploads/2013/01/2-main-street.jpg"><br><span>اسم القسم </span></div> -->
    </carousel>
<br><br><br><br>
  </div>
</template>
<script>
import carousel from 'vue-owl-carousel'
export default {
  name: "AllDeparts",
  components: { carousel },

};
</script>

<style scoped>
  h3 {
    color: black;
    text-align: center;
  }
  h6 {
    color: #707070;
    text-align: center;
  }
  .cards-wrapper {
    display: flex;
    justify-content: center;
    gap: 70px;
  }
  .cardd img {
    width: 500px;
    height: 400px;
    object-fit: cover;
    object-position: center;
  }
  .cardd{
  text-align: center;
  }
  
  .carousel-control-prev,
  .carousel-control-next {
    background-color: #e1e1e1;
    width: 5vh;
    height: 5vh;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-5  0%);
  }
  @media (max-width: 768px) {
    .card img {
      height: 11em;
    }
  }
  
  .owl-carousel .owl-item img {
    width:100%;
  }
  
@import url("../../assets/css/AllDeparts.css");
</style>