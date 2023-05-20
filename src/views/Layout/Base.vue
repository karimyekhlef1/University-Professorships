<template>
  <v-app>
    <v-main>
      <div class="BGMILA">
        <header class="header">
          <div class="brand ">
              <img src="../../assets/logoUNV.jpg"/>
              <div class="brandName">
                <span>Abdelhafid Boussouf</span>
                <p>University </p>
              </div>
           </div>
          
        </header>
        <div class="unvDes">
          <div class="unvDesTop">
            University <br>
            Professorships
          </div>
          <div class="unvDesEnd">
            The title of University Professor was created in 1935 to honor individuals whose groundbreaking work crosses the boundaries of multiple disciplines
          </div>
        </div>
      </div>
      <router-view />
    </v-main>

    <main-footer />
  </v-app>
</template>

<script>
import MainFooter from '@/components/MainFooter.vue';
import NavBar from '@/components/NavBar.vue';
export default {
  name: 'Base',
  components: {
    MainFooter,
    NavBar,
},
};
</script> 
<style>
.header{
  background-color: rgba(39, 37, 37, 0.178);
}
.brandName{
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    margin-left: 8px; 
}
.brandName span{
 font-weight: 900;
 font-size: 24px;
}
.header .brand{
  font-size: 16px;

  font-weight: 700;
  margin-left: 20px;
  padding: 15px;
  display: flex;
}
.header .brand img{
  width: 60px;
  height: 80px;
  padding: 4px;

}
.BGMILA{
     color: rgb(255, 255, 255);
     font-family:  Canela Deck Web;
    width: 100%;
    height: 80vh;
    background-image:url(../../assets/uvMIla.jpg);
    background-size: cover;
    background-position: center;
    filter: blur(200px);
  -webkit-filter: blur(200px);
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(10%);
  }
  .unvDes{
    width: 100%;
    display: flex;
    padding: 60px;
    height: 60vh;
  }
  .unvDesTop{
    font-size: 50px;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 60px;
    width: 50%;
  }
  .unvDesEnd{
    width: 100%;
    padding: 80px;
    display: flex;
    align-items: end;
    font-size: 25px;
    font-weight: 700;
  }
  @media (max-width :768px) {

  .unvDes{
    width: 100%;
    display: flex;
    padding: 10px;
    flex-direction: column
  }
  .unvDesTop{
    font-size: 50px;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0px;
    width: 100%;
  }
  .unvDesEnd{
    width: 100%;
    padding: 0px;
    font-weight: normal;
    font-size: 18px;
    display: flex;
    align-items: end;
  }
  }
</style>