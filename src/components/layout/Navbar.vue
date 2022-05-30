<template>
        <div class="nav" id="nav">
            <div class="icons">
                <div class="person-icon">
                    <i class="fa-solid fa-user" style="color:#34A77C; margin:10px"></i>
                </div>
                <div class="bell-icon">
                    <i class="fa-solid fa-bell" style="color:#34A77C; margin:10px"></i>
                </div>
                <div class="bag-icon">
                    <i class="fa-solid fa-bag-shopping" style="color:#34A77C; margin:10px"></i>
                </div>
                <div class="search-icon">
                    <i class="fa-solid fa-magnifying-glass" style="color:#34A77C; margin:10px"></i>
                </div>
            </div>
            
            <div class="tabs">
                <ul>
                    <li>
                        تواصل معنا 
                    </li>
                    <li>
                        المدونة 
                    </li>
                    <li>
                        اقسامنا
                    </li>
                    <li>
                        من نحن 
                    </li>
                    <li>
                        الرئيسية
                    </li>
                </ul>
            </div>
            <div>
                <img src="../../assets/navbar/Screenshot (4).png" class="logo">
            </div>
        </div>
</template>

<script>
export default {
    name:"Navbar",
    mounted(){
        let nav = document.querySelector("#nav")
        let navH = nav.offsetHeight
        console.log(navH)
        document.addEventListener("scroll" , ()=>{
            if(window.scrollY >= navH + 40){
                nav.classList.add("fixedNavbar")
                nav.classList.remove("unFixedNavbar")
            }
            if(window.scrollY <= 1){
                nav.classList.remove("fixedNavbar")
                nav.classList.add("unFixedNavbar")
            }
        })
    }
}
</script>

<style scoped>
    .nav{
        display: flex;
        justify-content: space-around;
        align-content: center;
        flex-direction: row;
        position: absolute;
        width: 95% ;
        height: 100px;
        background-color: white;
        top: 40px;
        left: 40px;
        z-index:10;
    }
    .icons{
        display: flex;
        gap: 20px;
        align-items: center;
    }
    .person-icon , .bag-icon , .bell-icon , .search-icon{
        background-color: #FCFCFC;
        border-radius: 50px;
        width: 40px;
        height: 40px;
    }
    .tabs{
        display: flex;
        padding: 0;
    }
    ul{
        display: flex;
        align-items: center;
        list-style-type: none;
        padding: 0;
        margin: 0;
        gap: 20px;

    }
    .logo{
        width: 80px;
    }

    li{
        font-weight: bold;
    }
    li:hover{
        color: #DF9180;
        transition: 0.3s;
    }
    
    .fixedNavbar{
        top: 0;
        left: 0;
        width: 100%;
        position: fixed;
        animation: fixedNav 0.5s linear;
    }
    @keyframes fixedNav {
            0%{
                /* transform: translateY(px); */
                top:-140px;
            }
            100%{
                /* transform : translateY(140px); */
                top:0px;
            }
        }

    .unFixedNavbar{
        top:40px;
        left: 40px;
        width: 95%;
        position: absolute;
        animation: unFixedNavbar 0.3s linear;
    }
    @keyframes unFixedNavbar {
            0%{
                /* transform: translateY(px); */
                top: 0px;
            }
            100%{
                /* transform : translateY(140px); */
                top: 40px;
            }
        }
</style>