<template>
    <div>
        <div class="col bg-light form-box">
				<div class="row">
					<div class="col padding-box">
                           <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style="width: 50%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
						<h2 class="padding-box">{{ $t('message.caPresonalTitle') }}</h2>
                        <p class="lead padding-subtitle">{{ $t('message.caPresonalSubTitle') }}</p>
						<hr class="mb-3">
							<!-- Survey CA Section 1 Personal information-->
                            <div class="row custom-control form-group">
                                <label>{{ $t('message.caName') }}.</label>
                                <div class="col-sm-6 col-md-4">
                                 <input type="text" class="form-control" v-bind:placeholder="$t('message.caNameInput')"  id="name">
                                </div>
                            </div>
                            <div class="row custom-control form-group">
                                <div class="col-sm-4 col-md-2">
                                <input type="text" class="form-control" v-bind:placeholder="$t('message.caNamemMiddleInput')"  id="middle">
                                </div>
                            </div>
                            <div class="row custom-control form-group">
                                <div class="col-sm-8 col-md-4">
                               <input type="text" class="form-control" v-bind:placeholder="$t('message.caLastNameInput')"  id="last">
                                </div>
                            </div>
							<div class="row custom-control form-group">
								<label for="exampleFormControlSelect4">{{ $t('message.dateOfBirth') }}</label>
								 <b-form-datepicker id="example-datepicker"  v-model="date" class="col-sm-10 col-md-4"  v-bind:placeholder="$t('message.appointmentDatePicker')"></b-form-datepicker>
							</div>
                            <div class="row custom-control form-group">
								<label for="exampleFormControlSelect4">{{ $t('message.presonalGender') }}</label>
                                <button type="button" class="btn btn-sm btn-outline-info " data-toggle="modal" @click="showDialog('gender')" data-target="#exampleModalCenter">?</button>
								<select class="form-control col-md-4 col-sm-10" id="gender" >
									<option>{{ $t('message.presonalGenderMale') }}</option>
									<option>{{ $t('message.presonalGenderFemale') }}</option>
									<option>{{ $t('message.presonalGenderInter') }}</option>
								</select>
							</div>
                            <div class="row custom-control form-group col-md-4 col-sm-6" >
                                        <label for="exampleFormControlSelect4">{{ $t('message.sCaPhone') }}</label>
										<div >
											<vue-tel-input 
											:preferred-countries="['us']"
											defaultCountry="US"
											v-bind:placeholder="$t('message.resultsPhonePlaceholder')"
											:valid-characters-only="true"
											@input="onInput"/>											 
							                </div>
							</div>
                            <div class="row custom-control form-group">
                                    <label for="exampleFormControlSelect4">{{ $t('message.homeAddress') }} </label>
                                    <button type="button" class="btn btn-sm btn-outline-info " data-toggle="modal" @click="showDialog('address')" data-target="#exampleModalCenter">?</button>
                                    <input type="text" class="form-control form-group col-md-4 col-sm-6"  v-bind:placeholder="$t('message.sCaStreet')" v-model="street"> 
                                    <input type="text" class="form-control form-group col-md-4 col-sm-6"  v-bind:placeholder="$t('message.sCaCity')" v-model="city"> 
                                    <select class="form-control form-group  col-md-4 col-sm-6" v-model="state" >
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
                                    <input type="text" class="form-control form-group col-md-3 col-sm-4"  v-bind:placeholder="$t('message.appointmentDZipCodePlaceholder')" v-model="zipcode"> 
                            </div>
                            
                            
							<div class="row custom-control form-group">
								<label for="exampleFormControlSelect4">{{ $t('message.CaEthnicity') }}</label>
                                <button type="button" class="btn btn-sm btn-outline-info " data-toggle="modal" @click="showDialog('race')" data-target="#exampleModalCenter">?</button>
								<select class="form-control col-md-4" id="ethnicity" v-model="latino">
									<option>{{ $t('message.yes') }}</option>
									<option>{{ $t('message.no') }}</option>
									<option>{{ $t('message.NotSure') }}</option>
									<option>{{ $t('message.PreferNotToShare') }}</option>
								</select>
							</div>
                            <div class="row custom-control form-group">
								<label for="exampleFormControlSelect4">{{ $t('message.CaRace') }}</label>
								<select class="form-control col-md-4" id="ethnicity" v-model="race">
									<option>{{ $t('message.presonalEthnicityWhite') }}</option>
									<option>{{ $t('message.presonalEthnicityBlack') }}</option>
									<option>{{ $t('message.presonalEthnicityNative') }}</option>
									<option>{{ $t('message.presonalEthnicityAsian') }}</option>
									<option>{{ $t('message.presonalEthnicityOther') }}</option>
                                    <option>{{ $t('message.NotSure') }}</option>
									<option>{{ $t('message.PreferNotToShare') }}</option>
								</select>
							</div>
							<!-- Survey Section 4 medical condition-->
						<hr class="mb-4">
					</div>
				</div>
				<div class="row bg-light justify-content-center align-items-center padding-box" >
					<div class="input-group-append">
						<!--button class="btn btn-outline-dark btn-lg float-left" type="button" v-on:click="back()">Back</button-->
						<!--button class="btn btn-outline-secondary btn-lg" type="button" v-on:click="next()" :disabled="!acknowledge">Analyze Answers</button-->
						<button class="btn btn-outline-success btn-lg" type="button" v-on:click="next()">{{ $t('message.continue') }}</button>
					</div>
				</div>
			</div>	
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            sCaPersonal:{
                name: '',
                middle: '',
                lastname: '',
                dateOfBirth: '',
                gender: '',
                phoneNumber: '',
                street: '',
                city: '',
                state: '',
                zipcode: '',
                latino: '',
                race: ''
            },
            date: '',
            street: '',
            city: '',
            zipcode: '',
            latino: 'Select',
            state: 'California',
            race: '',
            phone: {
                number: '',
                valid: false,
                country: undefined,
            },
        }
    },
    Props: {
        sCaPersonal: Object,
    },
    methods:{
        showDialog: function(item){
            if(item === 'gender'){
                alert("Genero");
            }else if (item === 'race'){
                alert("Raza")    
            }else if (item === 'address'){
                alert("address")    
            }
        },
        onInput(formattedNumber, { number, valid, country }) {
				this.phone.number = number.e164;
				//this.phone.number = number.input;
				this.phone.valid = valid;
				this.phone.country = country && country.name;
				
				if (this.phone.valid === true){
				this.invalid=false;
				}else{
					this.invalid=true;
				}
            },
        next(){
            this.sCaPersonal.number = 1;
            this.$emit('sCaPersonal', this.sCaPersonal);
        }
    },
    Props: {
        
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
</style>