import Vue from "vue";
import VueRouter from "vue-router";

import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import PatientForm from '../components/PatientForm.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import DoctorForm from '../components/DoctorForm.vue'
import Home from '../components/Home.vue'
import TaxDataForm from '../components/TaxDataForm.vue'
import MedicalConsultationForm from '../components/MedicalConsultationForm.vue'



Vue.use(VueRouter)

const routes = [
    {
        path: "/home",
        name: "home",
        component: Home
    },
    {
        path: "/registerPatient",
        name: "registerPatient",
        component: PatientForm
    },
    {
        path: "/registerDoctor",
        name: "registerDoctor",
        component: DoctorForm
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/register",
        name: "register",
        component: Register
    },
    {
        path: "/taxData",
        name: "taxData",
        component: TaxDataForm
    },
    {
        path: "/registerConsultation",
        name: "registerConsultation",
        component: MedicalConsultationForm
    },

];

const router = new VueRouter({
    mode: "history",
    routes: routes
});

export default router;
