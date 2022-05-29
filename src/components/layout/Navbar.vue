<template>
        <div class="nav">
            <div class="icons">
                <div class="person-icon">
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="bell-icon">
                    <i class="fa-solid fa-bell"></i>
                </div>
                <div class="bag-icon">
                    <i class="fa-solid fa-bag-shopping"></i>
                </div>
                <div class="search-icon">
                    <i class="fa-solid fa-magnifying-glass"></i>
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
                <img src="../../assets/navbar/Screenshot (4).png" alt="">
            </div>
        </div>
</template>

<script>
export default {
    name:"Navbar"
}
</script>

<style scoped>
    .nav{
        display: flex;
        flex-direction: row;
        position: fixed;
        width: 100% - 20px ;
        height: 120px;
        background-color: white;
        margin: 20px;
        z-index:10;
    }
    .icons{
        display: flex;
    }
    .tabs{
        display: flex;
    }
    ul{
        display: flex;
        list-style-type: none;
    }
</style>