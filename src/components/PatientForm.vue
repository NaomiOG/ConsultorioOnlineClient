<template>
  <div class="container" style="margin-left:6%; margin-right: 10%">
    <br>
    <div class="row">
      <div class="col-md-8 order-md-1">
        <h4 class="mb-3">Nuevo Paciente</h4>
      </div>
    </div>
    <form method="post" @submit.prevent="onSubmit">
      <div class="form-group">
        <label >Nombre</label>
        <input v-model="name" type="text" class="form-control" id="inputName" placeholder="Name">
      </div>
      <div class="form-group">
        <label for="inputLastname">Apellidos</label>
        <input v-model="lastname" type="text" class="form-control" id="inputLastname" placeholder="Apellidos">
      </div>
      <div class="form-group">
        <label for="inputAddress">Address</label>
        <input v-model="address" type="text" class="form-control" id="inputAddress" placeholder="Dirección">
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputPhone">Phone</label>
          <input v-model="phone" type="next" class="form-control" id="inputPhone" placeholder="Teléfono">
        </div>
        <div class="form-group col-md-6">
          <label for="inputBirthdate">Fecha de nacimiento</label>
          <input type="date" v-model="birthdate" class="form-control" id="inputBirthdate" placeholder="Fecha de nacimiento">
        </div>
      </div>
      <div class="form-group">
        <label for="inputPhone">Email</label>
        <input type="email" class="form-control" v-model="email" id="inputEmail" placeholder="Email">
      </div>
      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="inputCity">Ciudad</label>
          <input type="text" class="form-control" id="inputCity" v-model="city">
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">Estado</label>
          <input type="text" class="form-control" id="inputState" v-model="state">
        </div>
        <div class="form-group col-md-4">
          <label for="inputCountry">País</label>
          <input type="text" v-model="country" class="form-control" id="inputCountry">
        </div>
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-primary">Guardar</button>
      </div>
    </form>


  </div>

</template>

<script>
import axios from "axios";

export default {

  data(){
    return{
      name:'',
      lastname:'',
      address:'',
      city:'',
      state:'',
      country:'',
      birthdate:'',
      phone:'',
      email:'',
      id_user:3,
      status_covid:'',
      isLoading:false
    }
  },
  mounted() {

  },
  methods:{
    onSubmit(){
      this.isLoading = true
      this.sendCreatePatient()

    },
    sendCreatePatient(){

      if (this.name==""||this.lastname==""||this.address==""||this.email==""||this.country==""||this.birthdate==""||this.city==""
          ||this.phone==""||this.state=="") {
        alert("Completa todos los campos")
      }
      else {
        const formData = new FormData()
        formData.append('name', this.name)
        formData.append('lastname', this.lastname)
        formData.append('address', this.address)
        formData.append('city', this.city)
        formData.append('state', this.state)
        formData.append('country', this.country)
        formData.append('birthdate',this.birthdate)
        formData.append('phone',this.phone)
        formData.append('email', this.email)
        formData.append('id_user', this.id_user)
        formData.append('status_covid',this.status_covid)

        let object = {};
        formData.forEach(function(value, key){
          object[key] = value;
        });
        let json = JSON.stringify(object);

        axios.post("http://127.0.0.1:8000/patient",json
        ).then(response => {
          this.name=''
          console.log(response.data)
          alert('Los datos del paciente se han almacenado correctamente')
          this.isLoading = false
        })
            .catch(error => {
              alert(error)
              console.log(json)
              this.isLoading = false
            })


      }

    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>