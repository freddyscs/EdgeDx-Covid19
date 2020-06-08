<template> 
    <div>
        <div class="col-12 col-sm-12 justify-content-md-center bg-light form-box">
				<div class="row">
					<div class="col">
						<p class="lead padding-box">{{ $t('message.appointmentTitle') }}</p>
						<hr class="mb-3">
					</div>
				</div>
                <div class="row justify-content-md-center separation" v-show="appointmentSelectShow">
					<div class="col-sm-12 col-md-6 align-content-md-center">
						<!--b-calendar v-model="date" :date-disabled-fn="dateDisabled"  locale="en-US"></b-calendar-->
                        <b-form-datepicker id="example-datepicker" v-model="date" :min="min" class="mb-2" size="lg" v-bind:placeholder="$t('message.appointmentDatePicker')"></b-form-datepicker>
						<div v-show="date != ''">
                        <label for="place">{{ $t('message.appointmentPlace') }}</label>
                            <select class="select-picker form-control form-control-sm"  v-model="selected">
                            <option 
                            v-for="data in info"  
                            :key="data.id"
                            :value="data.id"
                            >{{data.name}}</option>
                            </select>
                        </div>
					</div>
				</div>   
                <div class="row justify-content-md-center separation"> 
					<div class="col-sm-12 col-md-6 align-content-md-center" v-show="appointmentInfoShow">
                        <div>
                            <b-card v-for="appo in this.appointmentInfo" :key="appo.id" :title="appo.name" :sub-title="appo.state + '-' + appo.city">
                                <b-card-text>
                                {{ $t('message.appointmentAddress') }}: {{appo.address}}
                                </b-card-text>
                                <b-card-text>{{ $t('message.appointmentPhone') }}: {{appo.phone}}</b-card-text>
                                <div class="row separation justify-content-md-center">
                                    <edgedx-qrcodevue :value="qrCode" size="150"></edgedx-qrcodevue>
                                </div>
                                <a href="#" class="card-link">{{ $t('message.appointmentMoreInformation') }}</a>
                            </b-card>
                            <br>
                            <div class="text-center"> 
							    <a type="button" class="btn btn-secundary" href="/">{{ $t('message.back') }}</a>
		                	</div> 
                            
                        </div>
					</div>
				</div>     
                <div class="row bg-light justify-content-center align-items-center padding-box" v-show="appointmentButtonShow" >
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary btn-lg" type="button" v-on:click="postAppointment()">{{ $t('message.appointmentCreate') }}</button>
                </div>
		    </div>   
        </div>	
           
     
    </div>
</template>

<script>
/*Date: {{date}} - Place: {{selected}} - Survey: {{sId}}*/
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)


const Url = "/places";
const UrlAppointment = "/appointments";

export default {
    data: function() {
        const now = new Date()
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
        // Two days prior
        const minDate = new Date(today)
        minDate.setDate(now.getDate() + 1)

        return {
            date: '',
            info: '',
            selected: '',
            id_survey: 0,
            id_place: 0,
            appointmentContent: {},
            appointmentSelectShow: true,
            appointmentInfoShow: false,
            appointmentButtonShow: true,
            appointmentTitle: "Please select a date and place to generate appointment",
            qrCode: 'empty',
            appointmentInfo: Object,
            min: '',
            value: '',
            min: minDate
        }
    },
    methods:{
         pastDisabled() {
            const now = new Date()
            const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
            const minDate = new Date(today)
            minDate.setMonth(minDate.getMonth() - 2)
            minDate.setDate(15)
            return minDate
      },
      getdata: function(link){
				//Getting data from API and error handling
				axios
				  .get(link)
				  .then(response => {
					this.info = response.data;
                    //alert(this.info);
                    console.log(this.info);
					if(this.info.length===0){
						this.resultless = true;
					}
				  })
				  .catch(error => {
					console.log(error);
					this.errored = true;
				  })
				  .finally(() => {
					  this.loading = false;
					});
            },
            test(id){
               // alert("id del hosp"+this.selected)
            },
            next(uno,dos,tres){
                //Creating json information to post.
                alert(uno+dos+tres);
                
            },
            postAppointment(){
                this.appointmentContent= {
                    appointment_date: this.date,
                    id_survey: this.sId,
                    id_place: this.selected 
                    
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
                //console.log(JSON.stringify(this.appointmentContent));
                this.appointmentTitle = "Appointment confirmation"
                this.appointmentSelectShow = false;
                this.appointmentInfoShow = true;
                this.appointmentButtonShow = false;
            }
    },
    props: ['sId']
    ,
    watch: {
        date: function() {
            this.getdata(Url);
        },
        selected: function (){
            console.log("Selected:"+this.selected);
            //Generating QR CODE Information
                const key = "id";
                this.appointmentInfo = this.info.filter(d=>d[key]==this.selected);
                console.log(this.appointmentInfo);
                this.qrCode = "EDGEDX-APPOINTMENT_DAY:"+this.date+"-PLACE:"+this.selected+"-SURVEY_ID:"+this.sId;
        }
    }
}
</script>
<style scoped>
.form-box {
	border: 1px solid #ccc;
	box-shadow: 5px 5px 30px #aaa;
	margin: 2% auto;
 }
 .padding-box{
	 padding: 2%;
 }
 .red{
     border: 2px red;
 }
 .separation {
     margin: 2% auto;
 }
</style>