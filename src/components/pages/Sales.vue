<template>
    <div class="container">
      <h3 class="title">اخر العروض</h3>
    <div class="row">
      <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12" v-for="Product in Products" :key="Product.id">
        <div class="card">
            <div class="img-part">
              <img :src="Product.image">
              <div class="over-layer"></div>
            </div>
            <div class="an-text">
              <span class="black"> خصم</span><span class="color">25% </span>
              <span class="cap">
                على اسم القسم
              </span>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"Sales",
    data() {
    return {
      Products: [
        {
          id: 1,
          name: "Lorem ipsum dolor",
          image : "https://www.ikea.com/global/assets/navigation/images/lighting-li001.jpeg"       
        },
        {
          id: 2,
          name: "Lorem ipsum dolor",
          image:"https://www.ikea.com/images/two-soederhamn-1-seat-sofa-sections-and-one-3-seat-section-a-5423de3253be2ed29b163937b1d096e3.jpg"
        },
        {
          id: 3,
          name: "Lorem ipsum dolor",
          image:"https://www.ikea.com/images/aepplaryd-series-02bc9c98099081411d11fb64970f8d4e.jpg"
        },
        {
          id: 4,
          name: "Lorem ipsum dolor",
          image:"https://www.ikea.com/images/idanaes-living-room-series-5395f648c26917b5636b15cbdbfc4c21.jpg"
        }
      ],
    };
  },
}   
</script>

<style scoped>
.container{
  margin-bottom: 160px;
}
.card {
    position: relative;
    width: 100%;
    overflow: hidden;
    margin-bottom: 20px;
    transition: 0.5s;
    border-radius: 5  px !important;
    display: flex;
    align-content: center;
    transition: 0.3s;
}
.img-part {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;

}
img{
    width: 100%;
    object-fit: cover;
}

.an-text{
  position: absolute;
  text-align: center;
  width: 80%;
  top: 86%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: white;
}
.an-text .black{
  color: black;
  font-size: 18px;
  }
.an-text .color{
  color: #34a77c;
  font-size: 18px;
  }
.an-text .cap{
  display: block;
  color: black;
  font-size: 15px;
  }

.date{
  font-size: 12px;
}
.name{
    font-size : 14px;
    font-weight : bold;
}
.desc{
  font-size: 12px;
    color:#1B53EC;
}
.price{
    font-weight: bold;
    font-size: 13.5px;
}
.card:hover{
    transform:scale(1.04);
    z-index:2;
    /* transition: 0.3s; */
}
/* .card-cont{
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap:5px
} */
.title{
  text-align: center;
  margin: 50px;
}

.over-layer{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0.4;
}
</style>