<template>
  <v-app>
    <v-card>
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
          :items="doctors"
          :search="search"
      ></v-data-table>
    </v-card>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      loading: true,
      doctors: [],
      search: '',
      headers: [
        {text: 'Name', value: 'name'},
        { text: 'Lastname', value: 'lastname' },
        { text: 'Speciality', value: 'speciality' },
        { text: 'City', value: 'city' },
        { text: 'State', value: 'state' },
        { text: 'Country', value: 'country' },
        { text: 'Email', value: 'email' },
      ],
    }
  },
  methods: {
    //Reading data from API method.
    readDataFromAPI() {
      this.loading = true;
      axios
          .get("http://127.0.0.1:8000/doctor")
          .then((response) => {
            console.log(response.data.request);
            this.doctors = response.data;
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
  },
  //this will trigger in the onReady State
  mounted() {
    this.readDataFromAPI();
  },
}
</script>

<style>


</style>

