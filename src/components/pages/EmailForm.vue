<template>
    <div class="container">
      <div class="row bg">
        <div class="rhs col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <div class="headd">
            <span class="black-text">
              اسهل طريقة للحصول على
            </span>
            <span class="pink-text">
              كل ما يحتاجه منزلك
            </span>
          </div>
          <span class="subH">
            اكتب البريد الالكتروني ليصلك كل جديد
          </span> <br><br><br><br>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="اكتب بريدك الالكتروني" aria-label="Recipient's username" aria-describedby="basic-addon2">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">ارسال</button>
            </div>
          </div>
        </div>
        <div class="lhs col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <div class="photo">
            <img src="../../assets/pngwing.com (2).png" alt=""/>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
    name:"EmailForm",
}
</script>
<style scoped>
  .bg{
    background-color: #E9F5F1;
    justify-content: center;
    align-items: center;
  }
  .rhs{
    padding-right: 32px;
  }
  .headd{
    display: flex;
    justify-content: start;
    gap: 4px;
    font-size: 25px;
    font-weight: bold;
    margin: 40px 0 30px  ;
}
.headd span:first-of-type{
    color: black
}
.headd span:last-of-type{
    color: #df9180
}
.subH{
  color: #707070;
  font-size:20px;
}
</style>