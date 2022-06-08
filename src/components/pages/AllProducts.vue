<template>
    <div class="container">
    <h3 class="text-center">جميع المنتجات</h3>
    <div class="departs text-center">
      <a href=""> كل المنتجات </a> |
      <a href=""> وصل حديثا </a> |
      <a href=""> الاكثر مبيعا </a> 
    </div>
    
    <br><br>
    <div class="row">
          <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12" v-for="product in products" :key="product.id">
            <div class="card">
              <div class="img-partt">
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
                <span class="price2" style="text-decoration: line-through;">
                  ${{product.price}}
                </span>
                <span class="price" >
                  ${{product.price}}
                </span>
                </div>
                <div class="label">
                  <span class="sale" v-if="product.sale">{{product.sale}}</span>
                  <span class="news" v-if="product.news">{{product.news}}</span>
                </div>
                </div>
                <div class="options">
                  <div class="like">
                    <i class="fa-solid fa-heart" style="color:#707070; margin:10px"></i>
                  </div>
                  <div class="bag">
                    <i class="fa-solid fa-bag-shopping" style="color:#707070; margin:10px"></i>
                  </div>
                  <div class="search">
                    <i class="fa-solid fa-magnifying-glass" style="color:#707070; margin:10px"></i>
                  </div>
              </div>
            </div>
          </div>
        </div>
        
        <br><br><br>  
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
          sale: "%15" ,
          news: null
        },
        {
          id: 2,
          name: "اسم و وصف المنتج",
          price: 246,
          image:
            "https://www.ikea.com/eg/en/images/products/skruvsta-swivel-chair-ysane-white__0724712_pe734595_s5.jpg",
          sale: null,
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
          sale: "%15" ,
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
          news: "جديد",
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
          news: "جديد",
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
<style lang="css" scoped>
@import "../../assets/css/AllProducts.css";
</style>