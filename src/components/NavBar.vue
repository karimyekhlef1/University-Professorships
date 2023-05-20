<template>
    <header class="header">
      
      <div class="brand">
        Vue JS
      </div>
        <!-- <ul class="links">
          <li v-for="link in Links" :key="link.name">
            <router-link :to="link.path" exact >{{link.name}}</router-link>

          </li>
        </ul>  -->

        <!-- <div class="btn-links" @click="setPhone()" v-if="!phone">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="btn-close" @click="setPhone()"  v-if="phone">
          <span class="span1"></span>
          <span class="span2"></span>

        </div>
        <ul class="links-phone" v-if="phone">
          <li v-for="link in Links" :key="link.name">
            <router-link :to=link.path exact >{{link.name}}</router-link>
          </li>
        </ul> -->
    </header>

</template>
<script>
import routes from '../router/routers'
// import routes from '../router/index'
console.log(routes)
export default {
  name:'NavBar',
  data(){
    return {
      Links:routes,
      phone:false

    }
  },
  methods :{
    setPhone (){
      return this.phone= !this.phone
    }
  }


}
</script>
<style>
.header{
  background-color: rgba(19, 12, 12, 0.521);
  height:  80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* position: ab; */
  width: 100%;


}
.header .links{
  display: flex;
  width: 50%;
  justify-content: center;
  
  
}
.links-phone
{
  display: none;
}
.header .links li{
list-style: none;  
margin-right: 20px;
margin-left: 20px;

font-size: large;
  
}
 /* .header .brand{
  font-weight: 900;
  margin-left: 20px;
  background-color: rgb(248, 248, 248) ;
  padding: 15px;
  border-radius: 15px;
} */
.phone{
  width: 60px;

}
.btn-links{
  display: none;
}

li a{
  padding: 10px;
  width: 60px;
  text-align: center;
  border-bottom: 3px solid  rgb(62, 226, 150);
  text-decoration: none;
  color: #2c3e50;
}
li a.router-link-active{

border-bottom: 3px solid  black;

}
li a:hover{

  padding: 10px;
  width: 60px;
  text-align: center;
  border-bottom: 3px solid  black;
  transition: border-bottom 1s;
}
.links li a{
  color:#2c3e50;
  font-weight: 600;
}
@media (max-width :768px) {
  .header .links{
     display: none;
  
  
}
.btn-links{
  display: flex;
  flex-direction: column;
  /* margin-right: 20px; */
  width: 80px;

}
.btn-close{
  display: flex;
  flex-direction: column;
  /* margin-right: 20px; */
  width: 80px;


}
.btn-close span{
  width: 40px;
  height: 6px;
  background-color: black;
  margin: 1px;
  border-radius: 12px;

}
.btn-close .span1{
   transform: rotate(45deg);
   position: absolute;
   transition: transform 0.3s;
}
.btn-close .span2{
  transform: rotate(-45deg);

}
.btn-links span{
  width: 40px;
  height: 6px;
  background-color: black;
  margin: 1px;
  border-radius: 12px;

}
.links-phone
{
  display: flex;
  flex-direction: column;
  list-style: none;  
  top: 61px;
  position: fixed;
  background-color: rgb(62, 226, 150);
  width: 30%;
  height: 100vh;
  align-items: center;
  right: 0;
  
  transition: display  0.3s;

}

.links-phone li
{
  margin-top: 20px;
  width: 100%;
  display: flex;
}

.links-phone li a{
  padding: 10px;
  width: 100%;
  text-align: center;
  border-bottom: 3px solid  rgb(62, 226, 150);
  text-decoration: none;
  color: #2c3e50;
}

.links-phone li a:hover{
text-align: center;
border-bottom: 3px solid  black;
transition: border-bottom 1s;
}
.links-phone li a.router-link-active{

border-bottom: 3px solid  black;

}


  
}


</style>