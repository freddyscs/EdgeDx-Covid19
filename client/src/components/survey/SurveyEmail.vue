<!-- Survey Welcome message and email validation-->
<template>
    <div class="col">
			<div class="row justify-content-center form-box padding-box" >
					<div class="col-md-6 col-sm-12" >
						<div class="row" >
							<h1 class="display-8">{{ $t('message.welcome') }}</h1>
							<p class="text-muted">{{ $t('message.welcomeInformation') }}</p>
							<p class="lead">{{ $t('message.welcomeDescription') }}</p>
							<p class="text-muted"><small>{{ $t('message.welcomeCheck') }}</small></p>
						</div>
						<div class="row" >
							<div class="input-group">
							  <input type="text" class="form-control"  v-bind:placeholder="$t('message.welcomeEmailPlaceholder')"  
							  id="email" 
							  @blur="$v.email.$touch()"
							  v-model="email"> 
							  <div class="input-group-append">
								<button class="btn btn-outline-secondary" type="button" v-on:click="start()" :disabled="$v.email.$invalid" >{{ $t('message.welcomeButton') }}</button>
							  </div>
							</div>
							 <div v-if="$v.email.$error" class="errorMsj"><p>{{ $t('message.welcomeValidEmail') }}</p></div>
						</div>
					</div>						
					<div class="col-md-6 col-sm-12 align-self-center logo-margin" >
						<div class="row justify-content-center">
					   		<img src="../../assets/images/covid-19.png">
					   </div>
					</div>
				</div>
    </div>
</template>
<script>
import {required, email} from 'vuelidate/lib/validators'
export default {
   data: function() {
        return { 
		email: '',
        sEmail: {
            id: false,
            address : ""
         }
		}
	},
	validations: {
		email:{
			required,
			email
		}
	}
	,
    Props: {
        sEmail : Object
    },
    methods:{
        start(){
            this.sEmail.id = true;
            this.$emit('sEmail', this.sEmail);
        }
	},
	watch:{
		email: function(){
			this.sEmail.address = this.email;
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
</style>