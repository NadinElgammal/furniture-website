<template>
  <div class="container">
    <div class="row">
      <div class="rhs col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <div class="head">
          <span class="black-text">
            اسهل طريقة للحصول على
          </span>
          <span class="pink-text">
            كل ما يحتاجه منزلك
          </span>
        </div>
        <br>
        <div class="cards">
          <div class="row">
            <div
              class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
              v-for="product in products"
              :key="product.id"
            >
              <div class="card">
                <div class="row">
                  <div class="img-part col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                    <img :src="product.image"/>
                  </div>
                  <div class="text-partt col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
                    <h6>
                      {{ product.name }}
                    </h6>
                    
                    <div class="price-part">
                      <span class="price"> ${{ product.price }} </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lhs col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <div class="photo">
          <img src="https://www.ikea.com/eg/en/images/products/kallax-shelving-unit-high-gloss-white__1113779_pe871547_s5.jpg" alt=""/>
        <div class="over-layer"></div>
      </div>
        <div class="marks">
            <span class="mark mark1">1</span>
            <span class="mark mark2">2</span>
            <span class="mark mark3">3</span>
            <span class="mark mark4">4</span>
            <span class="mark mark5">5</span>
            </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "SelectDepart",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "اسم و وصف المنتج",
          price: 405,
          image:
            "https://www.ikea.com/eg/en/images/products/gladom-tray-table-dark-grey-beige__0998388_pe823016_s5.jpg",
          sale: "%15",
        },
        {
          id: 2,
          name: "اسم و وصف المنتج",
          price: 246,
          image:
            "https://www.ikea.com/eg/en/images/products/skruvsta-swivel-chair-ysane-white__0724712_pe734595_s5.jpg",
          news: "جديد",
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
          sale: "%15",
        },
        {
          id: 6,
          name: "اسم و وصف المنتج",
          price: 165,
          image:
            "https://www.ikea.com/eg/en/images/products/vimle-cover-for-3-seat-sofa-saxemara-light-blue__0949435_pe799741_s5.jpg",
        },
      ],
    };
  },
};
</script>
<style lang="css" scoped>
@import "../../assets/css/selectDepart.css";
</style>