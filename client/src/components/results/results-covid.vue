<template>
    <div>
         <div class="container">
		<div class="justify-content-center align-items-center form-box padding-box">
			   <!-- if URL is empty, then app will show the browser -->
			   <section v-if="url === null">
			   <br>
			   <br>
			   <!-- Welcome message-->
			   <transition name="fade" appear>
			   <div class="row" >
				   <div class="col-md-6 col-sm-12  align-self-center logo-margin" >
						<div class="row justify-content-center">
					   		<img src="../../assets/images/search-medium.png">
					   </div>
					</div>
					<div class="col toCenter padding" >
						<div class="row" >
							<h1 class="display-8">{{ $t('message.resultsTitle') }}</h1>
							<p>{{ $t('message.resultsSubTitle') }}</p>
                            <p class="text-muted"><small>{{ $t('message.resultsDemo') }}</small></p>
						</div>
						<div class="row" >
							<div class="input-group">
							  <input type="text" class="form-control"  v-bind:placeholder="$t('message.resultsPlaceholder')" v-model="testId">
							  <div class="input-group-append">
								<button class="btn btn-outline-secondary" type="button" v-on:click="search()">{{ $t('message.resultsSearchButton') }}</button>
							  </div>
							</div>
						</div>
					</div>				
				</div>
				</transition>
					<!-- Welcome message-->
				
			   </section>
				    <!-- No results found-->
					  <section v-else>
						  <section v-if="errored">
								<br>
								<br>
								<div class="alert alert-warning" role="alert">
								{{ $t('message.resultsNotAvailable') }}		
								</div>
								<div class="text-center"> 
									<button type="button" class="btn btn-secundary" @click="restart()">{{ $t('message.back') }}</button>
								</div> 
						
						  </section>
						  <section v-else>
							<div v-if="loading" class="row justify-content-center align-items-center">
							
									<br><br>
									<div class="spinner-grow text-dark" role="status">
									<span class="sr-only">{{ $t('message.loading') }}</span>
									</div>
							</div>
					<!-- No results found -->
					<section v-else-if="resultless">
						<br>
						<br>
						<div class="text-center alert alert-warning" role="alert" v-show="!registerNotification">
								{{ $t('message.resultsNotFound', {testId}) }} 
						</div>
						<!-- EMAIL-->
						<!-- Welcome message-->
						<div class="row justify-content-center form-box padding-box"  v-show="!registerNotification">
							<div class="row" >
								<div class="col toCenter padding" >
									<div class="row" >
										<p>{{ $t('message.resultsEmailAddress') }}</p>
									</div>
									<div class="row" >
										<div class="input-group">
											<input type="text" class="form-control"  v-bind:placeholder="$t('message.resultsEmailPlaceholder')"
											 id="email" 
												@blur="$v.email.$touch()"
												v-model="email">
											<div class="input-group-append">
											<!--button class="btn btn-outline-secondary" type="button" v-on:click="register()"  :disabled="$v.email.$invalid"  >Save</button-->
											</div>
											 
										</div>
										<div v-if="$v.email.$error" class="errorMsj"><p>{{ $t('message.resultsInvalidEmailAddress') }}</p></div>
									</div>
									<br>
									<div class="row" >
										<p>{{ $t('message.resultsBasicPhone') }}</p>
									</div>
									<div class="row" >
										<div class="input-group">
											<!--input type="text" class="form-control" v-bind:placeholder="$t('message.resultsPhonePlaceholder')"
											 id="phone" 
											 @blur="$v.phone.$touch()"
											v-model="phone"-->
											<vue-tel-input
											:preferred-countries="['us', 'ca']"
											defaultCountry="US"
											:valid-characters-only="true"
											@input="onInput"/>
											<div class="input-group-append">
											<!--button class="btn btn-outline-secondary" type="button" v-on:click="register()"  :disabled="$v.phone.$error"  >Save</button-->
											</div>
											 
										</div>
										<div v-if="$v.phone.$error" class="errorMsj"><p>{{ $t('message.resultsInvalidPhone') }}</p></div>
									</div>
								</div>	
							</div>
						</div>
						<div class="text-center alert alert-success" role="alert" v-show="registerNotification" >
								{{ $t('message.resultsEmailSent') }}
						</div>	
						<div class="text-center"> 
								<button type="button" class="btn btn-info" @click="restart()">{{ $t('message.back') }}</button>
								<button type="button" class="btn btn-info" @click="register()" :disabled="invalid" v-show="btnRegisterDisplay">{{ $t('message.register') }}</button>
							</div>
						<!-- EMAIL -->
					</section>
				  <!-- No results found-->
				  <!-- Results found-->
					<!--div v-else v-for="data in info"-->
                    <div v-else v-for="data in info">
					  <!-- Cards -->
							<div class="text-center"> 
								<!--button type="button" class="btn btn-light" @click="restart()">Back</button-->
							</div> 
							<br>
							<div class="row justify-content-center">
								<div class="col-sm-6">
									<div class="card text-center">
									  <div class="card-header">
										{{ $t('message.resultSummary') }}<b>{{data.sample_id}}</b>
									  </div>
									  <div class="card-body">
										<h6 class="card-title">{{ $t('message.resultSampleDate') }}: 01/20/2020</h6>
										<h6 class="card-title">{{ $t('message.resultDate') }}: 05/20/2020</h6>
										<div v-if="data.test_result === 'SARS CoV-2 DETECTED'">
											<div class="alert alert-danger" role="alert">
											{{ $t('message.resultAssayResult') }}: {{ data.test_result }}
											</div>
										</div>
										<div v-else>
											<div class="alert alert-info" role="alert">
											{{ $t('message.resultAssayResult') }}: {{ data.test_result }}
											</div>
										</div>
										<p class="card-text">{{ $t('message.resultDisclaimer') }}</p>
									  </div>
									  
									</div>
									<br>
									<div class="text-center"> 
											<button type="button" class="btn btn-primary" @click="restart()">{{ $t('message.back') }}</button>
										</div> 
								</div>
							</div>
							<!-- Cards -->
                    </div>
				 </section>
			 </section>
			 <!-- Results found-->
		</div>	 
	</div>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import {required, email, minLength, numeric, maxLength} from 'vuelidate/lib/validators'

//const baseUrl = "http://myrawdata.com:8080/rawdata/api/getTestResult/";
const baseUrl = "http://www.myrawdata.com:3000/genexperts/?filter[where][sample_id]="
const registerUrl = "http://www.myrawdata.com:3000/result-notifications"
function buildUrl (key) {
  return baseUrl + key 
}


export default {
     data () {
    return {
	  url: null,	
      info: null,
	  nueva: '',
	  email: '',
      loading: true,
      errored: false,
	  resultless: null,
	  phone: {
        number: '',
        valid: false,
        country: undefined,
      },
	  company: 'EdgeDx',
	  testId: null,
	  registerContent: {},
	  registerNotification: null,
	  validEmail: null,
	  validPhone: null,
      logo: '../../assets/images/edgedx-large-60.png',
	  invalid: true,
	  btnRegisterDisplay: true
	  }
  },
  validations: {
		email:{
			required,
			email
		},
		phone: {
			minLength: minLength(14),
			maxLength: maxLength(14),
	}
	
	},
  methods:{
			getdata: function(link){
				//Getting data from API and error handling
				axios
				  .get(link)
				  .then(response => {
                    //this.info.push(response.data);
                    this.info = response.data;
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
			search: function(){
                this.url = this.testId;
                this.getdata(buildUrl(this.url));
			},
			restart: function(){
				this.url = null;	
				this.info = null;	
				this.loading = true;
				this.errored = false;
				this.resultless = null;
				this.testId = null;
				this.email = '';
				this.registerNotification = false;
				this.btnRegisterDisplay = true;
				this.phone.number = '';
				this.phone.valid = false;
				this.phone.country = undefined;
			},
			register: function(){

				 this.registerContent= {
                    email: this.email,
                    sample_id: this.testId,
					notification_sent: 0,
					phone_number: this.phone.number
                };
				//Aqui se envia la información para crear la cita.
				//console.log(this.registerContent);
                axios.post(registerUrl, this.registerContent)
                .then(function (response) {
				})
				this.registerNotification = true;
				this.btnRegisterDisplay = false;

			},
			validate: function(){
				
				this.validEmail = this.$v.email.valid;
				this.validPhone = this.phone.valid;
			},
			onInput(formattedNumber, { number, valid, country }) {
				//this.phone.number = number.e164;
				this.phone.number = number.input;
				this.phone.valid = valid;
				this.phone.country = country && country.name;
				
				if (this.phone.valid === true){
				this.invalid=false;
				}else{
					this.invalid=true;
				}
			},


  },
  watch:{
		email: function(){
			if (this.$v.email.$invalid === false){
				this.invalid=false;
			}else{
				this.invalid=true;
			}
		}
	}
}    
		
		
</script>
<style scoped>
.form-box {
	margin: 2% auto;
 }
 .padding-box{
	 padding: 2%;
 }
 .logo-margin {
	margin: 3% auto;
 }
 .errorMsj{
	 color: coral;
	 /*border: 1px solid coral;*/
 }
 .p {
	 text-align: center;
 }
  .padding-box{
	 padding: 2%;
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