<template>
    <div>
        <div class="col bg-light form-box">
				<div class="row">
					<div class="col padding-box">
                           <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style="width: 25%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
						<h2 class="padding-box">{{ $t('message.caPresonalTitle') }}</h2>
                        <p class="lead padding-subtitle">{{ $t('message.caPresonalSubTitle') }}</p>
						<hr class="mb-3">
							<!-- Survey CA Section 1 Personal information-->
                            <div class="row custom-control form-group">
                                <label>{{ $t('message.caName') }}.</label>
                                <div class="col-10 col-md-4">
                                    <input type="text" class="form-control"  @blur="$v.sCaPersonal.name.$touch()" v-bind:placeholder="$t('message.caNameInput')"  id="name"  v-model="sCaPersonal.name">
                                    <div v-if="$v.sCaPersonal.name.$error" class="errorMsj"><p>{{ $t('message.caValidName') }}</p></div>  
                                </div>
                            </div>
                            <div class="row custom-control form-group">
                                <div class="col-4 col-md-2">
                                    <input type="text" class="form-control" @blur="$v.sCaPersonal.middle.$touch()" v-bind:placeholder="$t('message.caNamemMiddleInput')"  id="middle"  v-model="sCaPersonal.middle">
                                    <div v-if="$v.sCaPersonal.middle.$error" class="errorMsj"><p>{{ $t('message.caValidMiddleName') }}</p></div>   
                                </div>
                            </div>
                            <div class="row custom-control form-group">
                                <div class="col-10 col-md-4">
                                    <input type="text" class="form-control" @blur="$v.sCaPersonal.lastname.$touch()" v-bind:placeholder="$t('message.caLastNameInput')"  id="lastname"  v-model="sCaPersonal.lastname">
                                    <div v-if="$v.sCaPersonal.lastname.$error" class="errorMsj"><p>{{ $t('message.caValidLastname') }}</p></div>   
                                </div>
                            </div>
							<div class="row custom-control form-group">
								<div class="col-8 col-md-2">
                                    <label for="exampleFormControlSelect4">{{ $t('message.dateOfBirth') }}</label>
                                    <input type="text" class="form-control" v-bind:placeholder="$t('message.appointmentDateBirth')"  id="day"  v-model="sCaPersonal.dateOfBirth">
                    
                                    <div v-if="noBirthShow" class="errorMsj"><p>{{ $t('message.caValidDateofBirth') }}</p></div> 
                                </div>  					
                    			 <!--b-form-datepicker id="example-datepicker"  v-model="date" class="col-md-6 col-11"  v-bind:placeholder="$t('message.appointmentDatePicker')"></b-form-datepicker-->
							</div>
                            <div class="row custom-control form-group">
								<label for="exampleFormControlSelect4">{{ $t('message.presonalGender') }}</label>
                                <button type="button" class="btn btn-sm btn-outline-info " data-toggle="modal" @click="showDialog('gender')" data-target="#exampleModalCenter" >?</button>
								<select class="form-control col-md-3 col-10" id="gender" v-model="gender">
									<option>-</option>
                                    <option>{{ $t('message.presonalGenderMale') }}</option>
									<option>{{ $t('message.presonalGenderFemale') }}</option>
									<option>{{ $t('message.presonalGenderInter') }}</option>
								</select>
                                <div v-if="noGenderShow" class="errorMsj"><p>{{ $t('message.caValidGender') }}</p></div> 
							</div>
                              
                            <div class="row custom-control form-group col-md-4 col-12" >
                                        <label for="exampleFormControlSelect4">{{ $t('message.sCaPhone') }}</label>
										<div >
											<vue-tel-input 
											:preferred-countries="['us']"
											defaultCountry="US"
											v-bind:placeholder="$t('message.resultsPhonePlaceholder')"
											:valid-characters-only="true"
											@input="onInput"/>											 
							                </div>
                                            
										<div v-if="phoneError" class="errorMsj"><p>{{ $t('message.resultsInvalidPhone') }}</p></div>
							</div>
                            <div class="row custom-control form-group">
                                    <label for="exampleFormControlSelect4">{{ $t('message.homeAddress') }} </label>
                                    <button type="button" class="btn btn-sm btn-outline-info " data-toggle="modal" @click="showDialog('address')" data-target="#exampleModalCenter">?</button>
                                    <input type="text" class="form-control form-group col-md-4 col-10"  @blur="$v.sCaPersonal.street.$touch()"  v-bind:placeholder="$t('message.sCaStreet')" v-model="sCaPersonal.street"> 
                                    <div v-if="$v.sCaPersonal.street.$error" class="errorMsj"><p>{{ $t('message.caValidStreet') }}</p></div>   

                                    <input type="text" class="form-control form-group col-md-4 col-10" @blur="$v.sCaPersonal.city.$touch()"  v-bind:placeholder="$t('message.sCaCity')" v-model="sCaPersonal.city"> 
                                    <div v-if="$v.sCaPersonal.city.$error" class="errorMsj"><p>{{ $t('message.caValidCity') }}</p></div>   
                                    <select class="form-control form-group   col-md-4 col-10" v-model="sCaPersonal.state" >
                                        <option>Alabama</option>
                                        <option>Alaska</option>
                                        <option>Arizona</option>
                                        <option>Arkansas</option>
                                        <option>California</option>
                                        <option>Colorado</option>
                                        <option>Connecticut</option>
                                        <option>Delaware</option>
                                        <option>Florida</option>
                                        <option>Georgia</option>
                                        <option>Hawaii</option>
                                        <option>Idaho</option>
                                        <option>Illinois</option>
                                        <option>Indiana</option>
                                        <option>Iowa</option>
                                        <option>Kansas</option>
                                        <option>Kentucky</option>
                                        <option>Louisiana</option>
                                        <option>Maine</option>
                                        <option>Maryland</option>
                                        <option>Massachusetts</option>
                                        <option>Michigan</option>
                                        <option>Minnesota</option>
                                        <option>Mississippi</option>
                                        <option>Missouri</option>
                                        <option>Montana</option>
                                        <option>Nebraska</option>
                                        <option>Nevada</option>
                                        <option>New Hampshire</option>
                                        <option>New Jersey</option>
                                        <option>New Mexico</option>
                                        <option>New York</option>
                                        <option>North Carolina</option>
                                        <option>North Dakota</option>
                                        <option>Ohio</option>
                                        <option>Oklahoma</option>
                                        <option>Oregon</option>
                                        <option>Pennsylvania</option>
                                        <option>Rhode Island</option>
                                        <option>South Carolina</option>
                                        <option>South Dakota</option>
                                        <option>Tennessee</option>
                                        <option>Texas</option>
                                        <option>Utah</option>
                                        <option>Vermont</option>
                                        <option>Virginia</option>
                                        <option>Washington</option>
                                        <option>West Virginia</option>
                                        <option>Wisconsin</option>
                                        <option>Wyoming</option>
								</select>
                                <div v-if="$v.sCaPersonal.state.$error" class="errorMsj"><p>{{ $t('message.caValidCity') }}</p></div>   
                                    
                                    <input type="text" class="form-control form-group col-md-3 col-10"  @blur="$v.sCaPersonal.zipcode.$touch()" v-bind:placeholder="$t('message.appointmentDZipCodePlaceholder')" v-model="sCaPersonal.zipcode"> 
                                    <div v-if="$v.sCaPersonal.zipcode.$error" class="errorMsj"><p>{{ $t('message.caValidZipcode') }}</p></div>   
                            </div>
                            
                            
							<div class="row custom-control form-group">
								<label for="exampleFormControlSelect4">{{ $t('message.CaEthnicity') }}</label>
                                <button type="button" class="btn btn-sm btn-outline-info " data-toggle="modal" @click="showDialog('race')" data-target="#exampleModalCenter">?</button>
								<select class="form-control col-md-4 col-10" id="ethnicity" v-model="latino">
									<option>-</option>
                                    <option>{{ $t('message.yes') }}</option>
									<option>{{ $t('message.no') }}</option>
									<option>{{ $t('message.NotSure') }}</option>
									<option>{{ $t('message.PreferNotToShare') }}</option>
								</select>
                                <div v-if="noLatinoShow" class="errorMsj"><p>{{ $t('message.caSelectOption') }}</p></div> 
							</div>
                            <div class="row custom-control form-group">
								<label for="exampleFormControlSelect4">{{ $t('message.CaRace') }}</label>
								<select class="form-control col-md-4 col-10" id="ethnicity" v-model="race">
                                    <option>-</option>
									<option>{{ $t('message.presonalEthnicityWhite') }}</option>
									<option>{{ $t('message.presonalEthnicityBlack') }}</option>
									<option>{{ $t('message.presonalEthnicityNative') }}</option>
									<option>{{ $t('message.presonalEthnicityAsian') }}</option>
									<option>{{ $t('message.presonalEthnicityOther') }}</option>
                                    <option>{{ $t('message.NotSure') }}</option>
									<option>{{ $t('message.PreferNotToShare') }}</option>
								</select>
                                <div v-if="noRaceShow" class="errorMsj"><p>{{ $t('message.caSelectOption') }}</p></div> 
							</div>
							<!-- Survey Section 4 medical condition-->
						<hr class="mb-4">
					</div>
				</div>
				<div class="row bg-light justify-content-center align-items-center padding-box" >
					<div class="input-group-append">
						<!--button class="btn btn-outline-dark btn-lg float-left" type="button" v-on:click="back()">Back</button-->
						<!--button class="btn btn-outline-secondary btn-lg" type="button" v-on:click="next()" :disabled="!acknowledge">Analyze Answers</button-->
						<button class="btn btn-success btn-lg" 
                        :disabled="
                        (this.$v.sCaPersonal.name.$invalid === true ||
                        this.$v.sCaPersonal.middle.$invalid === true ||
                        this.$v.sCaPersonal.lastname.$invalid === true ||
                        this.$v.sCaPersonal.street.$invalid === true ||
                        this.$v.sCaPersonal.city.$invalid === true ||
                        this.$v.sCaPersonal.zipcode.$invalid === true)"
                        type="button" v-on:click="next()">{{ $t('message.continue') }}</button>
					</div>
				</div>
			</div>
    </div>
</template>

<script>
import {required, email, maxLength, minLength, numeric} from 'vuelidate/lib/validators'

export default {
    data: function() {
        return {
            sCaPersonal:{
                name: '',
                middle: '',
                lastname: '',
                dateOfBirth: '',
                gender: '-',
                phoneNumber: '',
                street: '',
                city: '',
                state: 'California',
                zipcode: '',
                latino: '',
                race: ''
                
            },
            date: '',
            street: '',
            city: '',
            zipcode: '',
            state: 'California',
            race: '-',
            gender:'-',
            latino: '-',
            phone: {
                number: '',
                valid: false,
                country: undefined,
            },
            noNameShow: false,
            noMiddleShow: false,
            noLastnameShow: false,
            phoneError: false,
            noGenderShow: false,
            noRaceShow: false,
            noLatinoShow: false,
            invalid: true,
            noBirthShow: false
        }
    },
    validations: {
		sCaPersonal:{
            name:{
			    required
            },
            middle:{
                required
            },
            lastname:{
                required
            },
            street:{
                required
            },
            city:{
                required
            },
            zipcode:{
                required,
                minLength: minLength(5),
                maxLength: maxLength(5),
                numeric
            },
            state:{
                required
            }
        }
	},
    Props: {
        sCaPersonal: Object,
    },
    methods:{
        showDialog: function(item){
            if(item === 'gender'){
                alert("The lab that processes tests uses sex as one of the ways it makes sure its processes are accurate.");
            }else if (item === 'race'){
                alert("These questions are part of federal reporting guidelines to help agencies better respond to health challenges and make sure funds are used in a nondiscriminatory manner.")    
            }else if (item === 'address'){
                alert("Your information will be used to contact you if needed")    
            }
        },
        onInput(formattedNumber, { number, valid, country }) {
				this.phone.number = number.e164;
				//this.phone.number = number.input;
				this.phone.valid = valid;
				this.phone.country = country && country.name;
				
				if (this.phone.valid === true){
				    this.phoneError=false;
				}else{
					this.phoneError=true;
				}
            },
        next(){
            //add validations
             if(this.gender === '-'){
                this.noGenderShow = true;
            }else if(!this.validateDate){
                this.noBirthShow = true;
            }else if (this.phone.valid === false){
				    this.phoneError=true;
			}else if(this.latino === '-'){
                this.noLatinoShow = true;
            }else if(this.race === '-'){
                this.noRaceShow = true;
            }else{
            //After Validations
            //Adding dateofbirth
            //this.sCaPersonal.dateOfBirth = this.date;
            this.sCaPersonal.phoneNumber = this.phone.number;
            
            //console.log("emitido", this.sCaPersonal)
            this.$emit('sCaPersonal', this.sCaPersonal);
            }                 
           
        },
        validateDate(){
        var reg =  "^(0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])[-/.](19|20)\\d\\d$";
                if (this.sCaPersonal.dateOfBirth.match(reg)) {
                    if(this.sCaPersonal.dateOfBirth.substr(6,10)>2021){
                        return false;
                    }else{
                        return true;
                    }
                }else {
                    return false;
                }
        }
    },
    Props: {
        
    },
    watch:{
        'sCaPersonal.dateOfBirth':function(){
           if(this.validateDate()){
            this.noBirthShow=false;
           }else{
            this.noBirthShow=true;
           }
       }
        ,
        gender: function(){
            if(this.gender === '-'){
                this.noGenderShow = true;
            }else{
                this.noGenderShow = false;
                this.sCaPersonal.gender = this.gender;
            }
        },
        race: function(){
            if(this.race === '-'){
                this.noRaceShow = true;
            }else{
                this.noRaceShow = false;
                this.sCaPersonal.race = this.race;
            }
        },
        latino: function(){
            if(this.latino === '-'){
                this.noLatinoShow = true;
            }else{
                this.noLatinoShow = false;
                this.sCaPersonal.latino = this.latino;
            }
        }
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
 .padding-subtitle{
	 padding: 0% 2% 0% 2%;
 } 
 .errorMsj{
	 color: coral;
 }
</style>