<template>
    <div class="container">
    <h3>جميع المنتجات</h3>
    <a href=""> كل المنتجات </a> |
    <a href=""> وصل حديثا </a> |
    <a href=""> الاكثر مبيعا </a> 
    <br><br>
    <div class="row">
          <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12" v-for="product in products" :key="product.id">
            <div class="card">
              <div class="img-part">
                <img :src="product.image">
              </div>
              <div class="text-part">
                <h6>
                  {{product.name}} 
                </h6>
                <div class="colors">
                <span class="dot" style="background-color:#2E2D2D"></span>
                <span class="dot" style="background-color:#4A6D77"></span>
                <span class="dot" style="background-color:#A1D0BE"></span>
                <span class="dot" style="background-color:#E9D8E6"></span>
                <span class="dot" style="background-color:#F8E0E3"></span>
                </div>
                <div class="price-part">
                <span class="price" >
                  ${{product.price}}
                </span>
                <span class="price2" style="text-decoration: line-through;">
                  ${{product.price}}
                </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
export default {
  name: "AllProducts",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "اسم و وصف المنتج",
          price: 405,
          image:
            "https://www.ikea.com/eg/en/images/products/gladom-tray-table-dark-grey-beige__0998388_pe823016_s5.jpg",
        },
        {
          id: 2,
          name: "اسم و وصف المنتج",
          price: 246,
          image:
            "https://www.ikea.com/eg/en/images/products/skruvsta-swivel-chair-ysane-white__0724712_pe734595_s5.jpg",
        },
        {
          id: 3,
          name: "اسم و وصف المنتج",
          price: 454,
          image:
            "https://www.ikea.com/eg/en/images/products/radviken-armchair-dark-brown-black__0325825_pe517684_s5.jpg",
        },
        {
          id: 4,
          name: "اسم و وصف المنتج",
          price: 543,
          image:
            "https://www.ikea.com/eg/en/images/products/alex-drawer-unit-black-brown__0977786_pe813770_s5.jpg",
        },
        {
          id: 5,
          name: "اسم و وصف المنتج",
          price: 165,
          image:
            "https://www.ikea.com/eg/en/images/products/micke-desk-anthracite-red__0921882_pe787985_s5.jpg",
        },
        {
          id: 6,
          name: "اسم و وصف المنتج",
          price: 165,
          image:
            "https://www.ikea.com/eg/en/images/products/vimle-cover-for-3-seat-sofa-saxemara-light-blue__0949435_pe799741_s5.jpg",
        },
        {
          id: 7,
          name: "اسم و وصف المنتج",
          price: 165,
          image:
            "https://www.ikea.com/eg/en/images/products/forsa-work-lamp-nickel-plated__0609296_pe684433_s5.jpg",
        },
        {
          id: 8,
          name: "اسم و وصف المنتج",
          price: 165,
          image:
            "https://www.ikea.com/eg/en/images/products/starkvind-table-with-air-purifier-additional-gas-filter-stained-oak-veneer-white__1052011_pe845876_s5.jpg",
        },
        {
          id: 9,
          name: "اسم و وصف المنتج",
          price: 165,
          image:
            "https://www.ikea.com/eg/en/images/products/skruvsta-swivel-chair-ysane-white__0724712_pe734595_s5.jpg",
        },
        {
          id: 10,
          name: "اسم و وصف المنتج",
          price: 165,
          image:
            "https://www.ikea.com/eg/en/images/products/gladom-tray-table-dark-grey-beige__0998388_pe823016_s5.jpg",
        },
        {
          id: 11,
          name: "اسم و وصف المنتج",
          price: 246,
          image:
            "https://www.ikea.com/eg/en/images/products/skruvsta-swivel-chair-ysane-white__0724712_pe734595_s5.jpg",
        },
        {
          id: 12,
          name: "اسم و وصف المنتج",
          price: 405,
          image:
            "https://www.ikea.com/eg/en/images/products/starkvind-table-with-air-purifier-additional-gas-filter-stained-oak-veneer-white__1052011_pe845876_s5.jpg",
        },
      ],
    };
  },
};
</script>
<style scoped>
.img-part {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
img {
  width: 100%;
  object-fit: cover;
}
.card{
  padding: 0;
  margin: 10px;
}
.text-part{
  display: flex;
  flex-direction: column;
  align-items: end;
  margin: 20px;
}
.price-part{
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.price{
  font-size: 18px;
  color: #34A77C;
  font-weight: bold;
}
.dot {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  display: inline-block;
  margin: 3px;
}
a{
  text-decoration: none;
  color: #707070;
}
a:hover{
  color: #DF9180;
}
</style>