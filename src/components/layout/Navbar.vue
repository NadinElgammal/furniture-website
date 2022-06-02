<template>
  <div class="nav" id="nav">
    <div>
      <img src="../../assets/navbar/Screenshot (4).png" class="logo" />
    </div>
    <div class="tabs">
      <ul>
        <li>تواصل معنا</li>
        <li>المدونة</li>
        <li>اقسامنا</li>
        <li>من نحن</li>
        <li>الرئيسية</li>
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