
<template>
  <div class="container">
    <h3>Home consultorio online</h3>
    <p v-if="userLogged">Bienvenido: {{username}}</p>
    <p v-else>Debes iniciar sesión</p>

  </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  data(){
    return{
      user:{},
      userLogged:false,
      username:''
    }
  },
  methods: {
    userLoggedF() {
      this.user= Cookies.get('userLogged');
      if (this.user==null){
        this.userLogged=false
      }
      else{
        this.userLogged=true
        let aux=JSON.parse(this.user)
        this.username=aux['username'];
      }
    }
  },
  mounted() {
    this.userLoggedF();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
