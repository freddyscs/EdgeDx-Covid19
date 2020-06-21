import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue'
import QrcodeVue from 'qrcode.vue'
import Vuelidate from 'vuelidate'
import Header from './components/commons/Header.vue'
import Footer from './components/commons/Footer.vue'
import Loading from './components/commons/Loading.vue'
import Form from './components/form/Form.vue'
import FormBase from './components/form/FormBase.vue'
import FormStart from './components/form/FormStart.vue'
import Survey from './components/survey/Survey.vue'
import SurveyEmail from './components/survey/SurveyEmail.vue'
import SurveySymptoms from './components/survey/SurveySymptoms.vue'
import SurveyConditions from './components/survey/SurveyConditions.vue'
import SurveySigns from './components/survey/SurveySigns.vue'
import SurveyPersonal from './components/survey/SurveyPersonal.vue'
import SurveyCalculation from './components/survey/SurveyCalculation.vue'
import SurveyGreen from './components/survey/SurveyGreen.vue'
import SurveyOrange from './components/survey/SurveyOrange.vue'
import SurveyRed from './components/survey/SurveyRed.vue'
import Appointment from './components/appointment/Appointment.vue'
import AppointmentDate from './components/appointment/AppointmentDate.vue'
import AppointmentDummy from './components/appointment/AppointmentDummy.vue'
import Login from './components/login/Login.vue'
import Dashboard from './components/dashboard/dashboard.vue'
import VueRouter from 'vue-router';
import Results from './components/results/results-covid.vue'
import { routes } from './routes';
import VueI18n from 'vue-i18n';
import VueTelInput from 'vue-tel-input'
import SurveyCa from './components/survey-ca/SurveyCa.vue'
import SurveyCaStart from './components/survey-ca/SurveyCaStart.vue'
import SurveyCaPersonal from './components/survey-ca/SurveyCaPersonal.vue'
import SurveyCaSymptoms from './components/survey-ca/SurveyCaSymptoms.vue'
import SurveyCaAppointment from './components/survey-ca/SurveyCaAppointment.vue'
import SurveyCaDummyAppointment from './components/survey-ca/SurveyCaDummyAppointment.vue'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Axios from 'axios';


 

Vue.component('edgedx-header', Header)
Vue.component('edgedx-footer', Footer)
Vue.component('edgedx-loading', Loading)
Vue.component('edgedx-form', Form)

Vue.component('edgedx-FormBase', FormBase)
Vue.component('edgedx-FormStart', FormStart)
//General Survey
Vue.component('edgedx-Survey', Survey)
Vue.component('edgedx-SurveyEmail', SurveyEmail)
Vue.component('edgedx-SurveySymptoms', SurveySymptoms)
Vue.component('edgedx-SurveyConditions', SurveyConditions)
Vue.component('edgedx-SurveySigns', SurveySigns)
Vue.component('edgedx-SurveyPersonal', SurveyPersonal)
Vue.component('edgedx-SurveyCalculation', SurveyCalculation)
Vue.component('edgedx-SurveyGreen', SurveyGreen)
Vue.component('edgedx-SurveyOrange', SurveyOrange)
Vue.component('edgedx-SurveyRed', SurveyRed)
Vue.component('edgedx-Appointment', Appointment)
Vue.component('edgedx-AppointmentDate', AppointmentDate)
Vue.component('edgedx-AppointmentDummy', AppointmentDummy)
Vue.component('edgedx-qrcodevue', QrcodeVue)
//California Survey
Vue.component('edgedx-SurveyCa', SurveyCa)
Vue.component('edgedx-SurveyCaStart', SurveyCaStart)
Vue.component('edgedx-SurveyCaPersonal', SurveyCaPersonal)
Vue.component('edgedx-SurveyCaSymptoms', SurveyCaSymptoms)
Vue.component('edgedx-SurveyCaAppointment', SurveyCaAppointment)
Vue.component('edgedx-SurveyCaDummyAppointment', SurveyCaDummyAppointment)




Vue.component('edgedx-login', Login)
Vue.component('edgedx-results', Results)
Vue.component('edgedx-dashboard', Dashboard)


Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.use(VueTelInput);

Axios.defaults.baseURL = 'http://www.myrawdata.com:3000/';
Axios.defaults.headers.common['Authorization'] = '';

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

//languages
import es from './components/languages/es.json';
import en from './components/languages/en.json';
import fr from './components/languages/fr.json';
import am from './components/languages/am.json';
import sw from './components/languages/sw.json';

const messages = {
  en: {
    message: en
  },
  es:{
    message: es
  },
  fr:{
    message: fr
  },
  am:{
    message: am
  },
  sw:{
    message: sw
  }
};

const i18n = new VueI18n({
  locale: navigator.language.split('-')[0],
  fallbackLocale: 'en',
  messages
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
  i18n
})
