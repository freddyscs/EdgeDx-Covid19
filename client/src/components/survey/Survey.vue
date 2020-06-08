<template>
    <div class="box">
    <!--Variables
     EMAIL ID: {{sEmail.id}}, Correo {{sEmail.address}}
    <hr>
    id:{{sSymptoms.id}},    fever: {{sSymptoms.fever}},     feverDays: {{sSymptoms.feverDays}},     feverHighest: {{sSymptoms.feverHighest}},
    feverMeasure: {{sSymptoms.feverMeasure}},    cough: {{sSymptoms.cough}},    coughMeasure: {{sSymptoms.coughMeasure}},
    coughDays: {{sSymptoms.coughDays}},    breath: {{sSymptoms.breath}},    smell: {{sSymptoms.smell}}
    <hr>
    id:{{sConditions.id}},        cardio: {{sConditions.cardio}},		diabetes: {{sConditions.diabetes}},		bloodPreasure: {{sConditions.bloodPreasure}},
		respiratoryDisease: {{sConditions.respiratoryDisease}},		cancer: {{sConditions.cancer}}
    <hr>
    id: {{sSigns.id}},             chest: {{sSigns.chest}},             exhaustation: {{sSigns.exhaustation}},             arouse: {{sSigns.arouse}},
            bluish: {{sSigns.bluish}},             diarrhea: {{sSigns.diarrhea}}
    <hr>
     id: {{sPersonal.id}},                 daysSheltered: {{sPersonal.daysSheltered}},                age: {{sPersonal.age}},    
                 ethnicity: {{sPersonal.ethnicity}},                acknowledge: {{sPersonal.acknowledge}},                checked: {{sPersonal.checked}}
    <hr
    CORONA: {{sCorona}} SurveyID: {{surveyId}}-->
    <transition name="fade" appear>
    <edgedx-SurveyEmail v-show="sEmailShow"
    @sEmail="sEmail = $event">
    </edgedx-SurveyEmail>
    </transition>
    <transition name="fade">
    <edgedx-SurveySymptoms v-show="sSymptomsShow"
    @sSymptoms="sSymptoms = $event"
    @sSymptomsCorona="sCorona = $event">
    </edgedx-SurveySymptoms>
    </transition>
    <transition name="fade">
    <edgedx-SurveyConditions v-show="sConditionsShow"
    @sConditions="sConditions = $event"
    @sConditionsCorona="sCorona = sCorona + $event">
    </edgedx-SurveyConditions>
    </transition>
    <transition name="fade">
    <edgedx-SurveySigns v-show="sSignsShow"
    @sSigns="sSigns = $event"
    @sSignsCorona="sCorona = sCorona + $event">
    </edgedx-SurveySigns>
    </transition>
    <transition name="fade">
    <edgedx-SurveyPersonal v-show="sPersonalShow"
    @sPersonal="sPersonal = $event"
    @sPersonalCorona="sCorona= sCorona + $event"
    ></edgedx-SurveyPersonal>
    </transition>
    <transition name="fade">
    <edgedx-SurveyCalculation v-show="sCalculationShow"
    @sCalculation="sCalculation = $event"
    ></edgedx-SurveyCalculation>
    </transition>
    <transition name="fade">
    <edgedx-SurveyGreen v-show="sGreenShow"></edgedx-SurveyGreen>
    </transition>
    <transition name="fade">
    <edgedx-SurveyOrange v-show="sOrangeShow"></edgedx-SurveyOrange>
    </transition>
    <transition name="fade">
    <edgedx-SurveyRed 
    @sRed="sRed = $event"
    v-show="sRedShow"></edgedx-SurveyRed>
    </transition>
    <transition name="fade">
    <edgedx-Appointment
    :survey="surveyId"
    v-show="sAppointmentShow"
    ></edgedx-Appointment>
    </transition>
    <transition name="fade">
    <edgedx-loading v-show="loadingShow"></edgedx-loading>
    </transition>
    <transition name="fade">
    <edgedx-results v-show="sResults"></edgedx-results>
    </transition>
    </div>
</template>
<script>
import Loading from '../commons/Loading.vue'
import SurveyEmail from './SurveyEmail.vue'
import SurveySymptoms from './SurveySymptoms.vue'
import SurveyConditions from './SurveyConditions.vue'
import SurveySigns from './SurveySigns.vue'
import SurveyPersonal from './SurveyPersonal.vue'
import SurveyCalculation from './SurveyCalculation.vue'
import SurveyGreen from './SurveyGreen.vue'
import SurveyOrange from './SurveyOrange.vue'
import SurveyRed from './SurveyRed.vue'
import Appointment from '../appointment/Appointment.vue'
import AppointmentDate from '../appointment/AppointmentDate.vue'

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

const UrlSurvey = "/surveys";
export default {
     data() {
        return {
          sEmail: Object,
          sSymptoms: Object,
          sConditions: Object,
          sSigns: Object,
          sPersonal: Object,
          sCalculation: Object,
          sRed: Object,
          sAppointment: Object,
          sCorona: 0,
          sEmailShow: true,
          sSymptomsShow: false,
          sConditionsShow: false,
          sSignsShow: false,
          sPersonalShow: false,
          sCalculationShow: false,
          sGreenShow: false,
          sOrangeShow: false,
          sRedShow: false,
          sAppointmentShow: false,
          loadingShow: false,
          sResults: true,
          surveyContent: {},
          surveyId: 0,
          info: ''
    }
    }, 
    methods:{
      postSurvey(){
        
        //Creating Post array to save survey model
        this.surveyContent = {
            email: this.sEmail.address,
            fever: this.sSymptoms.fever.toString(),
            taste: this.sSymptoms.taste.toString(),
            feverDays: this.sSymptoms.feverDays.toString(),
            feverMeasure: this.sSymptoms.feverMeasure.toString(),
            feverHighest: this.sSymptoms.feverHighest.toString(),
            cough: this.sSymptoms.cough.toString(),
            coughMeasure: this.sSymptoms.coughMeasure.toString(),
            coughDays: this.sSymptoms.coughDays.toString(),
            breath: this.sSymptoms.breath.toString(),
            smell: this.sSymptoms.smell.toString(),
            cardio: this.sConditions.cardio.toString(),
            diabetes: this.sConditions.diabetes.toString(),
            bloodPreasure: this.sConditions.bloodPreasure.toString(),
            respiratoryDisease: this.sConditions.respiratoryDisease.toString(),
            cancer: this.sConditions.respiratoryDisease.toString(),
            chest: this.sSigns.chest.toString(),
            exhaustation: this.sSigns.exhaustation.toString(),
            arouse: this.sSigns.arouse.toString(),
            bluish: this.sSigns.bluish.toString(),
            diarrhea: this.sSigns.diarrhea.toString(),
            daysSheltered: this.sPersonal.daysSheltered.toString(),
            age: this.sPersonal.age.toString(),
            ethnicity: this.sPersonal.ethnicity.toString(),
            acknowledge: this.sPersonal.acknowledge.toString(),
            corona: this.sCorona
          }
      //console.log("sender:"+JSON.stringify(this.surveyContent));
      axios.post(UrlSurvey, this.surveyContent)
      .then(response => {
					this.info = response.data;
          //lert(this.info);
          //console.log(this.info);
          this.surveyId = this.info.id;
          //alert(this.surveyId);
					if(this.info.length===0){
					console.log("vacio");
					}
				  })
				  .catch(error => {
					console.log(error);
					
				  })
				  .finally(() => {
            //console.log("Final");
					});

      }
    },
    watch: {
    // Transitions of the screens
    sEmail: function () {
      this.sEmailShow=false;
      this.sSymptomsShow=true;
      this.sResults=false;
      },
    sSymptoms: function(){
      this.sSymptomsShow=false;
      this.sConditionsShow=true;
    },
    sConditions: function(){
      this.sConditionsShow=false;
      this.sSignsShow=true;
    },
    sSigns: function(){
      this.sSignsShow=false;
      this.sPersonalShow=true;
    },
    sPersonal: function(){
      this.sPersonalShow=false;
      this.loadingShow = true;
      this.postSurvey();
      //Based on corona result, show the respective panel
      if (this.sCorona < 10){
        this.sGreenShow = true;
        console.log("green");
			}
			if(this.sCorona >= 10 && this.sCorona <= 25 ){
        this.loadingShow = false;
        this.sOrangeShow = true;
        console.log("orange");
			}
			if(this.sCorona >= 26){
        this.sRedShow = true;
        console.log("red");
      }
      this.loadingShow = false;
      
    },
    sRed: function(){
      this.sRedShow = false;
      this.sAppointmentShow = true;
    }
    

    }
}
</script>
<style>
.box {
	margin: 2% auto;
}
.fade-enter{
  opacity: 0;
}

.fade-enter-active{
  transition: opacity 0.75s;
}

.fade-leave{
  /*opacity: 1; */
}

.fade-leave-active{
  opacity: 0;
}
</style>