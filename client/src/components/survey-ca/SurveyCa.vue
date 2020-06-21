<template>
    <div>
        <transition name="fade" appear>
            <edgedx-SurveyCaStart 
            v-show="sCaShowStart"
            @sCaStart="sCaStart = $event"></edgedx-SurveyCaStart>
        </transition>
        <transition name="fade" appear>
            <edgedx-SurveyCaPersonal 
            @sCaPersonal="sCaPersonal = $event"
            v-show="sCaShowPersonal" ></edgedx-SurveyCaPersonal>
        </transition>
        <transition name="fade" appear>
            <edgedx-SurveyCaSymptoms 
            @sCaSymptoms="sCaSymptoms = $event"
            v-show="sCaShowSymptoms" ></edgedx-SurveyCaSymptoms>
        </transition>
        <transition name="fade" appear>
            <edgedx-SurveyCaAppointment 
            @sCaAppointment="sCaAppointment = $event"
            @qrCode="qrCode = $event"
            :sId="surveyId"
            v-show="sCaShowAppointment" ></edgedx-SurveyCaAppointment>
        </transition>
        <transition name="fade" appear>
            <edgedx-SurveyCaDummyAppointment 
            :sId="surveyId"
            :qrCode="qrCode"
            v-show="sCaShowAppointmentDummy" ></edgedx-SurveyCaDummyAppointment>
        </transition>
    </div>
</template>

<script>
import SurveyCaStart from './SurveyCaStart.vue'

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

var qrCode = 'empty'
const UrlSurveyCa = "/surveyca";

export default {
    data: function() {
        return {
            sCaStart: Object,
            sCaPersonal: Object,
            sCaSymptoms: Object,
            sCaAppointment: Object,
            surveyCaContent:{},
            sCaShowStart: true,
            sCaShowPersonal: false,
            sCaShowSymptoms: false,
            sCaShowAppointment: false,
            sCaShowAppointmentDummy: false,
            surveyId: 0,
            qrCode: ''
        }
    },
    methods:{
        postSurvey: function(){
        
        //Creating Post array to save survey model
        this.surveyCaContent = {
            name : this.sCaPersonal.name + ' ' + this.sCaPersonal.middle,
            lastname : this.sCaPersonal.lastname,
            birth : this.sCaPersonal.dateOfBirth,
            gender : this.sCaPersonal.gender,
            phone : this.sCaPersonal.phoneNumber,
            street : this.sCaPersonal.street,
            city : this.sCaPersonal.city,
            state : this.sCaPersonal.state,
            zipcode : this.sCaPersonal.zipcode,
            latino : this.sCaPersonal.latino,
            race : this.sCaPersonal.race,
            contact : this.sCaSymptoms.contact,
            older :  this.sCaSymptoms.older,
            cawork1:  this.sCaSymptoms.caWork1,
            cawork2:  this.sCaSymptoms.caWork2,
            cawork3:  this.sCaSymptoms.caWork3,
            cawork4:  this.sCaSymptoms.caWork4,
            chksymptoms1: this.sCaSymptoms.chkSymptoms1,
            chksymptoms2: this.sCaSymptoms.chkSymptoms2,
            chksymptoms3: this.sCaSymptoms.chkSymptoms3,
            chksymptoms4: this.sCaSymptoms.chkSymptoms4,
            chksymptoms5: this.sCaSymptoms.chkSymptoms5,
            chksymptoms6: this.sCaSymptoms.chkSymptoms6,
            chksymptoms7: this.sCaSymptoms.chkSymptoms7,
            chksymptoms8: this.sCaSymptoms.chkSymptoms8,
            chksymptoms9: this.sCaSymptoms.chkSymptoms9,
            chksymptoms10: this.sCaSymptoms.chkSymptoms10,
            chksymptoms11: this.sCaSymptoms.chkSymptoms11,
            days: this.sCaSymptoms.days,
            conditions: this.sCaSymptoms.conditions,
            chkschronic1: this.sCaSymptoms.caSymptomsChronic1,
            chkschronic2: this.sCaSymptoms.caSymptomsChronic2,
            chkschronic3: this.sCaSymptoms.caSymptomsChronic3,
            chkschronic4: this.sCaSymptoms.caSymptomsChronic4,
            chkschronic5: this.sCaSymptoms.caSymptomsChronic5,
            chkschronic6: this.sCaSymptoms.caSymptomsChronic6,
            chkschronic7: this.sCaSymptoms.caSymptomsChronic7,
            chkschronic8: this.sCaSymptoms.caSymptomsChronic8,
            chkschronic9: this.sCaSymptoms.caSymptomsChronic9,
            chkschronic10: this.sCaSymptoms.caSymptomsChronic10,
            chkschronic11: this.sCaSymptoms.caSymptomsChronic11,
            chkschronic12: this.sCaSymptoms.caSymptomsChronic12,
            pregnant: this.sCaSymptoms.pregnant,

          }
            axios.post(UrlSurveyCa, this.surveyCaContent)
            .then(response => {
                this.info = response.data;
                console.log(this.info);
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
    props: {

        
    },
    watch: {
         // Transitions of the screens
        sCaStart: function () {
            this.sCaShowStart=false;
            this.sCaShowPersonal=true;
        },
        sCaPersonal: function(){
           // console.log("Recibiendo info personal:", this.sCaPersonal);
            this.sCaShowPersonal=false;
            this.sCaShowSymptoms=true;
        },
        sCaSymptoms: function(){
           // console.log("Recibiendo info symptoms:", this.sCaSymptoms);
            this.sCaShowSymptoms=false;
            this.sCaShowAppointment=true;
            this.postSurvey();
        },
        sCaAppointment: function(){
            this.sCaShowAppointment=false;
            this.sCaShowAppointmentDummy= true;
        }

    }
}
</script>
<style scoped>
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 0.75s;
}

.fade-leave{
  opacity: 1; 
}

.fade-leave-active{
  opacity: 0;
}
</style>