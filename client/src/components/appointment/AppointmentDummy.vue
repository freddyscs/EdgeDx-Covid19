<template>
    <div>
        <div class="col-12 col-sm-12 justify-content-md-center bg-light form-box">
				<div class="row">
					<div class="col">
						<p class="lead padding-box" v-show="!appointmentReady">{{ $t('message.appointmentDTitle') }}</p>
                        <p class="lead padding-box" v-show="appointmentReady">{{ $t('message.appointmentDTitleChanged') }}</p>
						<hr class="mb-3">
					</div>
				</div>
                
                <div class="row justify-content-md-center separation"> 
					<div class="col-sm-12 col-md-6 align-content-md-center">
                        <div v-show="!appointmentReady">
                            <div class="row custom-control form-group">
                                    <label for="exampleFormControlSelect4">{{ $t('message.appointmentDZipcode') }} </label>
                                    <input type="text" class="form-control col-md-11 col-sm-8"  v-bind:placeholder="$t('message.appointmentDZipCodePlaceholder')" @blur="$v.zipcode.$touch()" v-model="zipcode"> 
                                    <div v-if="$v.zipcode.$error" class="errorMsj"><p>{{ $t('message.appointmentDInvalidZipcode') }}</p></div>
                            </div>
                        </div>
                        <div>
                            <b-card title="Kindred Hospital Los Angeles" sub-title="California-Los Angeles" v-show="appointmentReady">
                                <b-card-text>
                                {{ $t('message.appointmentDAddress') }}: 5525 W Slauson Ave, Los Angeles, CA 90056, United States
                                </b-card-text>
                                <b-card-text>{{ $t('message.appointmentDPhone') }}: +1 310-642-0325</b-card-text>
                                <b-card-text>{{ $t('message.appointmentDDate') }}: {{date}}</b-card-text>
                                <div class="row separation justify-content-md-center">
                                    <edgedx-qrcodevue :value="qrCode" size="150"></edgedx-qrcodevue>
                                </div>
                                <div class="row separation justify-content-md-center">
                                    {{sId}}
                                </div>
                                
                                <a href="#" class="card-link">{{ $t('message.appointmentDMore') }}</a>
                            </b-card>
                            <br>
                            <div class="text-center"  v-show="appointmentReady"> 
							    <a type="button" class="btn btn-secundary" href="/">{{ $t('message.back') }}</a>
		                	</div> 
                            <div class="text-center" v-show="!appointmentReady">
                                <button class="btn btn-outline-secondary btn-lg" type="button" v-on:click="create()" :disabled="$v.zipcode.$invalid">{{ $t('message.appointmentDGenerate') }}</button>
                            </div>
                        </div>
					</div>
				</div>     
		    </div>   
        </div>	
               
</template>

<script>
import {required, minLength, numeric, maxLength} from 'vuelidate/lib/validators'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)


const Url = "/places";
const UrlAppointment = "/appointments";

export default {
    created() {
    console.log('Component has been created!');
    },
    data: function() {
        return {
            date: '',
            qrCode: 'empty',
            zipcode: '',
            appointmentReady: false
        }
    },
    validations: {
		zipcode:{
            required,
            minLength: minLength(5),
            maxLength: maxLength(5),
            numeric
        },
	},
    methods:{
        create(){
            const today = new Date()
            const tomorrow = new Date(today)
            tomorrow.setDate(tomorrow.getDate() + 1)
            var currentDateWithFormat = tomorrow.toJSON().slice(0,10).replace(/-/g,'/');
            this.date = currentDateWithFormat;
            this.qrCode = "EDGEDX-APPOINTMENT_DAY:"+currentDateWithFormat+"-PLACE:1-SURVEY_ID:"+this.sId;
            this.appointmentReady = true;
            this.appointmentContent= {
                    appointment_date: this.date,
                    id_survey: this.sId,
                    id_place: 1
                    
                };
                //Aqui se envia la información para crear la cita.
                axios.post(UrlAppointment, this.appointmentContent)
                .then(function (response) {
                    //console.log(response.data);
                    //this.qrCode = "This is your appointment ID: A";
                    //lert(this.info);
                    //console.log(this.info);
                    //alert("Appointment created with ID:"+response.data.id);
                })
        }

    },
    props: ['sId']
    ,
}
</script>
<style scoped>
.errorMsj{
	 color: coral;
	 /*border: 1px solid coral;*/
 }
</style>