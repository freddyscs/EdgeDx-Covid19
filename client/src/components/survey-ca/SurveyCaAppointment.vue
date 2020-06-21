<template>
    <div class="col form-box padding-box">
            <div class="progress">
                <div class="progress-bar bg-success" role="progressbar" style="width: 75%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
			<div class="row justify-content-center" >
				<div class="col-md-6 col-sm-12 align-self-center logo-margin" >
				<div class="row justify-content-center">
					<img src="../../assets/images/medical-appointment-sm.png">
				 </div>
			</div>
			</div>
			<div class="row padding-box" >
				<h1 class="display-8">{{ $t('message.CaAppointmentMessage1') }}</h1>
			</div>
            <div class="row padding-box" >
                <p class="lead">{{ $t('message.CaAppointmentMessage2') }}</p>
				<p class="text-muted"><small>{{ $t('message.CaAppointmentMessage3') }}</small></p>
			</div>
            
			<div class="row justify-content-center padding-box" >
				<button class="btn btn-success" type="button"  v-on:click="start()" >{{ $t('message.redAppointment') }}</button>
            </div>					
            <div class="row justify-content-center" >
				<p class="text-muted"><small>{{ $t('message.help') }}</small></p>
            </div>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
const UrlAppointment = "/appointments";

export default {
    data: function() {
        return {
            sCaAppointment:{
                create:false
            }
        }
    
    },
    methods:{
         start:function(){
            const today = new Date()
            const tomorrow = new Date(today)
            tomorrow.setDate(tomorrow.getDate() + 2)
            var currentDateWithFormat = tomorrow.toJSON().slice(0,10).replace(/-/g,'/');
            this.date = currentDateWithFormat;
            this.appointmentContent= {
                    appointment_date: this.date + ' sCA',
                    id_survey: this.sId,
                    id_place: 1
                };
            this.qrCode = "EDGEDX-APPOINTMENT_DAY:"+currentDateWithFormat+"-PLACE:1-SURVEY_ID:"+this.sId;
            
            axios.post(UrlAppointment, this.appointmentContent).then(response => {
                this.info = response.data;
                console.log(this.info);
                this.surveyId = this.info.id;
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

            this.sCaAppointment.create=true;
            this.$emit('sCaAppointment', this.sCaAppointment);
            this.$emit('qrCode',  this.qrCode)
        }
    },
    props: ['sId']
    
}
</script>
<style scoped>
.form-box {
	border: 1px solid #eee;
	box-shadow: 5px 5px 30px #aaa;
	margin: 2% auto;
 }
 .padding-box{
	 padding: 4%;
 }
 .logo-margin{
     margin: 2% 0% 0% 0%;
 }
</style>