<template>
    <div>
        <div class="col-12 col-sm-12 justify-content-md-center bg-light  form-box padding-box">
                <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 100%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
				<div class="row">
					<div class="col">
						<p class="lead padding-box" >{{ $t('message.appointmentDTitleCa') }}</p>
						<hr class="mb-3">
					</div>
				</div>
                
                <div class="row justify-content-md-center separation"> 
					<div class="col-sm-12 col-md-6 align-content-md-center">
                        <div>
                            <b-card title="Kindred Hospital Los Angeles" sub-title="California-Los Angeles" v-show="appointmentReady">
                                <b-card-text>
                                {{ $t('message.appointmentDAddress') }}: 5525 W Slauson Ave, Los Angeles, CA 90056, United States
                                </b-card-text>
                                <b-card-text>{{ $t('message.appointmentDPhone') }}: +1 310-642-0325</b-card-text>
                                <b-card-text>{{ $t('message.appointmentDDate') }}: {{date}}</b-card-text>
                                <div class="row separation justify-content-center">
                                    <edgedx-qrcodevue :value="qrCode" size="150"></edgedx-qrcodevue>
                                </div>
                                <div class="row separation justify-content-center">
                                    {{sId}}
                                </div>
                                
                                <a href="#" class="card-link">{{ $t('message.appointmentDMore') }}</a>
                            </b-card>
                            <br>
                            <div class="text-center"  v-show="appointmentReady"> 
							    <a type="button" class="btn btn-success" href="/">{{ $t('message.back') }}</a>
		                	</div> 
                        </div>
					</div>
				</div>     
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
    created() {
    console.log('Component has been created!');
    //To do, traer fecha real del survey
    const today = new Date()
        const tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 2)
        var currentDateWithFormat = tomorrow.toJSON().slice(0,10).replace(/-/g,'/');
        this.date = currentDateWithFormat;
        
    },
    data: function() {
        return {
            appointmentReady: true
            
        }
    },
    methods:{
    },
    props: ['sId', 'qrCode']
    ,
    watch:{
    }
}
</script>
<style scoped>
.form-box {
	border: 1px solid #eee;
	box-shadow: 5px 5px 30px #aaa;
	margin: 2% auto;
 }
 .padding-box{
	 padding: 2%;
 }
.errorMsj{
	 color: coral;
	 /*border: 1px solid coral;*/
 }
</style>