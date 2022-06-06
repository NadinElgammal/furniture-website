<template>
  <div class="container">
    <div class="content">
      <img src="../../assets/ad/leather-three-seat-sofas-10691.jpg" class="bg">
      <div class="overlay"></div>
      <div class="an-text">
        <span class="white"> اسهل طريقة للحصول على </span><span class="pink"> كل ما يحتاجه منزلك </span>
        <span class="caption">
          جميع الاقسام والمفروشات اللازمة لبيتك احصل عليها الان من خلال الطلب من
          موقعنا او التواصل معنا
        </span>
        <button class="btnn">
        تسوق الان 
        </button>
      </div>
      </div>
  </div>
</template>


<script>
export default {
  name: "Ad",
};
</script>

<style scoped>
.content{
  position: relative;
  text-align: center;
}
.bg {
  width: 100%;
  height: auto;
}
.overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0.6;
  }
.an-text{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%)
}
.an-text .white{
  color: white;
  font-size: 22px;
  font-weight: 600;
  }
.an-text .pink{
  color: #DF9180;
  font-size: 22px;
  font-weight: 600;
  }
.an-text .caption{
  display: block;
  color: white;
  font-size: 15px;
  margin: 30px 0 30px ;
  }
.btnn{
  background-color: #34a77c;
  border: none;
  color: white;
  font-size: 20px;
  border-radius: 5px;
  width: 180px;
  height: 50px;
  }
</style>