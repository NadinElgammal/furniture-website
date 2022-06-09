<template>
  <div class="nav" id="nav">
    <div class="bars-icon-div">
      <button class="bars-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><i class="fa-solid fa-bars"></i></button>
    </div>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="tabs-canvas">
            <ul>
              <li> <router-link :to="{name:'Home'}" class="op">الرئيسية</router-link></li>
              <li><router-link :to="{name:'Home'}" class="op">من نحن</router-link></li>
              <li><router-link :to="{name:'AllDeparts'}" class="op">اقسامنا</router-link></li>
              <li><router-link :to="{name:'Home'}" class="op">المدونة</router-link></li>
              <li><router-link :to="{name:'Home'}" class="op">تواصل معنا</router-link></li>
            </ul>
        </div>
      </div>
    </div>

    <div>
      <img src="../../assets/navbar/Screenshot (4).png" class="logo" />
    </div>
    <div class="tabs-nav">
            <ul>
              <li> <router-link :to="{name:'Home'}" class="op">الرئيسية</router-link></li>
              <li><router-link :to="{name:'Home'}" class="op">من نحن</router-link></li>
              <li><router-link :to="{name:'AllDeparts'}" class="op">اقسامنا</router-link></li>
              <li><router-link :to="{name:'Home'}" class="op">المدونة</router-link></li>
              <li><router-link :to="{name:'Home'}" class="op">تواصل معنا</router-link></li>
            </ul>
        </div>
    <div class="icons">
      <div class="person-icon">
        <i class="fa-solid fa-user" style="color: #34a77c; margin: 10px"></i>
      </div>
      <div class="bell-icon">
        <i class="fa-solid fa-bell" style="color: #34a77c; margin: 10px"></i>
      </div>
      <div class="bag-icon">
        <i
          class="fa-solid fa-bag-shopping"
          style="color: #34a77c; margin: 10px"
        ></i>
      </div>
      <div class="search-icon">
        <i
          class="fa-solid fa-magnifying-glass"
          style="color: #34a77c; margin: 10px"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",

  mounted() {
    let nav = document.querySelector("#nav");
    let navH = nav.offsetHeight;
    console.log(navH);
    document.addEventListener("scroll", () => {
      if (window.scrollY >= navH + 40) {
        nav.classList.add("fixedNavbar");
        nav.classList.remove("unFixedNavbar");
      }
      if (window.scrollY <= 1) {
        nav.classList.remove("fixedNavbar");
        nav.classList.add("unFixedNavbar");
      }
    });
  },
};
</script>

<style scoped>
@import url("../../assets/css/navbar.css");
</style>