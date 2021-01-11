<template>
  <v-app>
    <v-card>
      <h4>Consultas Previas</h4>
      <v-card-title>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar"
            single-line
            hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
          :headers="headers"
          :items="consultations"
          :search="search"
      >

        <template v-slot:item.prescription="{ item }">
          <v-btn
              class="mx-2 btn-info"
              fab
              dark
              small
              color="#17bbb5"
              @click.native="openPrescription(item)"
          >
            <a :href="'http://127.0.0.1:8000/prescriptions/receta.pdf'" class="algo" target="_blank">
            <v-icon
                dark
                color="#fff"
            >
              mdi-clipboard-text-search-outline
            </v-icon></a>
          </v-btn>
        </template>

        <template v-slot:item.online_store>
          <v-btn
              class="mx-2 btn-info"
              fab
              dark
              small
              color="#17bbb5"
          >
            <a :href="'https://www.linio.com.mx/'" class="algo" target="_blank">
              <v-icon
                  class="mx-4"
                  dark
                  color="#fff"
              >
                mdi-cart
              </v-icon>
            </a>
          </v-btn>
        </template>
      </v-data-table>

    </v-card>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      loading: true,
      id_patient: 3,
      consultations: [],
      search: '',
      headers: [
        {text: 'Fecha', value: 'consultation_date'},
        { text: 'Especialidad', value: 'speciality' },
        { text: 'Doctor', value: 'doctor_name' },
        { text: 'Estatus de atención', value: 'atention_status' },
        { text: 'Ver receta', value: 'prescription' },
        { text: 'Surtir en línea', value: 'online_store' },
      ],
    }
  },
  mounted() {
    this.readDataFromAPI();
  },
  methods: {
    //Reading data from API method.
    readDataFromAPI() {
      this.loading = true;
      axios
          .get("http://127.0.0.1:8000/medicalconsultation/patient/"+this.id_patient)
          .then((response) => {
            console.log(response.data);
            this.consultations = response.data;
          })
          .catch(function (error) {
            if (error.response) {
              console.log(error.response.headers);
            }
            else if (error.request) {
              console.log(error.request);
            }
            else {
              console.log(error.message);
            }
            console.log(error.config);
          });
    },
    openPrescription(idConsultation){
      console.log(idConsultation.id);
    },
  },
  //this will trigger in the onReady State

}
</script>

<style>
a.algo{
  text-decoration: #ff0;
}


</style>

