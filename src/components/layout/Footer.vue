<template>
    <div class="container">
        <div class="row">
                <div class="part1 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                    <img class="logo1" src="../../assets/navbar/Screenshot (4).png">
                    <span class="caption">وصف موجز عن هدف الموقع و بعض التفاصيل عن الشركة القائمة</span>
                    <div class="social-icons">
                        <div class="inastgram">
                            <i class="fa-brands fa-instagram" style="color: #DF9180; margin: 10px; font-size:25px"></i>
                        </div>
                        <div class="twitter">
                            <i class="fa-brands fa-twitter" style="color: #DF9180; margin: 10px; font-size:25px"></i>
                        </div>
                        <div class="facebook">
                            <i class="fa-brands fa-facebook" style="color: #DF9180; margin: 10px; font-size:25px"></i>
                        </div>
                        <div class="whatsapp">
                            <i class="fa-brands fa-whatsapp" style="color: #DF9180; margin: 10px; font-size:25px"></i>
                        </div>
                    </div>
                </div>
                <div class="part2 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                    <h4>معلومات</h4>
                    <span class="gray">من نحن</span>
                    <span class="gray">الشروط والاحكام</span>
                    <span class="gray">الشحن والتوصيل</span>
                    <span class="gray">سياسيات الخصوصية</span>
                    <span class="gray">الشروط والاحكام</span>
                </div>
                <div class="part3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                    <h4>خدمة العملاء</h4>
                    <span class="gray">تواصل معنا</span>
                    <span class="gray">ارجاع الطلب</span>
                    <span class="gray">الغاء الطلب</span>
                </div>
                <div class="part4 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                    <h4>اضافات</h4>
                    <span class="gray">الشركات</span>
                    <span class="gray">قسائم الهداية</span>
                    <span class="gray">العروض المميزة</span> 
                </div>
        </div>
        <hr>
        <div class="bottom-nav">
            <ul>
                <li class="gray"> <router-link :to="{name:'Home'}" class="op">الرئيسية</router-link></li>
                <li class="gray"><router-link :to="{name:'Home'}" class="op">من نحن</router-link></li>
                <li class="gray"><router-link :to="{name:'AllDeparts'}" class="op">اقسامنا</router-link></li>
                <li class="gray"><router-link :to="{name:'Home'}" class="op">المدونة</router-link></li>
                <li class="gray"><router-link :to="{name:'Home'}" class="op">تواصل معنا</router-link></li>
            </ul>
        </div>
        <div style="position:relative">
            <div class="copy-right">
                <span> جميع الحقوق محفوظة للموقع </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Footer"
}
</script>
<style scoped>
    
    .logo1{
        display: block;
        width: 120px;
        margin:0 0 30px;
    }
    .social-icons{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin:25px 0 0;
    }
    .inastgram , .twitter , .facebook , .whatsapp{
        background-color: #FCFCFC;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 50px;
        width: 45px;
        height: 45px;
    }
    .part1{
        padding: 0 12px 0 30px;
    }
    .part2 ,.part3 , .part4{
        display: flex;
        flex-direction: column;
        margin: 25px 0;
        gap: 15px;
    }
    .bottom-nav{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        margin: 25px 0;
    }
    .copy-right{
        display: flex;
        position: absolute;
        justify-content: center;
        align-items: center;
        background-color: #34a77c;
        color: white;
        bottom: 40px;
        top: 0;
        width: 100%;
        height: 80px;
    }
    .gray{
        color: #707070;
    }
</style>