<template>
  <div class="container">
    <h2>جميع الاقسام</h2>
    <h6>
      جميع الاقسام والمفروشات اللازمة لبيتك احصل عليها الان من خلال الطلب من
      موقعنا او التواصل معنا
    </h6>
    <br><br>
    <!-- <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="cards-wrapper">
            <div class="card">
              <img src="https://i.pinimg.com/550x/ca/bc/cb/cabccb6ee8313a7ae269ef0fa8859db5.jpg" class="card-img-top" alt="  " />
            </div>
            <div class="card d-none d-md-block">
              <img src="https://i5.walmartimages.com/asr/42a5f73e-d423-46c0-b4ff-f7693627de17.d41dbab1a623594c146dc1713672ba9d.jpeg" class="card-img-top" alt="  " />            </div>
            <div class="card d-none d-md-block">
              <img src="https://homedesignlover.com/wp-content/uploads/2013/01/2-main-street.jpg" class="card-img-top" alt="  " />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="cards-wrapper">
            <div class="card">
              <img src="" class="card-img-top" alt="" />
            </div>
            <div class="card d-none d-md-block">
              <img src="    " class="card-img-top" alt="    " />
            </div>
            <div class="card d-none d-md-block">
              <img src="" class="card-img-top" alt="    " />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="cards-wrapper">
            <div class="card">
              <img src="" class="card-img-top" alt="" />
            </div>
            <div class="card d-none d-md-block">
              <img src="" class="card-img-top" alt="" />
            </div>
            <div class="card d-none d-md-block">
              <img src="" class="card-img-top" alt="" />
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div> -->
    <carousel>
      <template slot="prev"><span class="prev">prev</span></template>
    <img src="https://i.pinimg.com/550x/ca/bc/cb/cabccb6ee8313a7ae269ef0fa8859db5.jpg">

    <img src="https://i5.walmartimages.com/asr/42a5f73e-d423-46c0-b4ff-f7693627de17.d41dbab1a623594c146dc1713672ba9d.jpeg">

    <img src="https://homedesignlover.com/wp-content/uploads/2013/01/2-main-street.jpg">

    <img src="https://placeimg.com/200/200/any?4">
    <template slot="next"><span class="next">next</span></template>

</carousel>
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
h2 {
  color: black;
}
h6 {
  color: #707070;
}

.cards-wrapper {
  display: flex;
  justify-content: center;
  gap: 70px;
}
.card img {
  max-width: 100%;
  max-height: 100%;
}
.card {
  margin: 0 0.5em;
  box-shadow: 2px 6px 8px 0 rgba(22, 22, 26, 0.18);
  border: none;
  border-radius: 0;
  
}
.carousel-inner {
  padding: 1em;
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
@media (min-width: 768px) {
  .card img {
    height: 11em;
  }
}
</style>