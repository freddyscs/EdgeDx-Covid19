<template>
     <div>
        <div class="col bg-light form-box">
				<div class="row">
					<div class="col padding-box">
                        <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style="width: 50%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
						<h2 class="padding-box">{{ $t('message.caSymptomsTitle') }}</h2>
						<hr class="mb-3">
							<!-- Survey CA Section 2 symptoms-->
                            <!-- Q1-->
                            <div class="row custom-control form-group">
									<label for="exampleFormControlSelect2">{{ $t('message.caSymptomsContact1') }}</label>
                                    <label for="exampleFormControlSelect2">{{ $t('message.caSymptomsContact2') }}</label>
									<select class="form-control col-md-4 col-10" id="contact" v-model="sCaSymptoms.contact" >
                                        <option>-</option>
										<option>{{ $t('message.yes') }}</option>
										<option>{{ $t('message.no') }}</option>
									</select>
                                     <div v-if="noContactShow" class="errorMsj"><p>{{ $t('message.caSelectOption') }}</p></div> 
								</div>
                            <!-- Q1-->
                            <!-- Q2-->
                                <div class="row custom-control form-group">
									<label for="exampleFormControlSelect2">{{ $t('message.caSymptomsAge') }}</label>
									<select class="form-control col-md-4 col-10" id="older"  v-model="sCaSymptoms.older" >
                                        <option>-</option>
										<option>{{ $t('message.yes') }}</option>
										<option>{{ $t('message.no') }}</option>
									</select>
                                    <div v-if="noOlderShow" class="errorMsj"><p>{{ $t('message.caSelectOption') }}</p></div>
								</div>
                            <!-- Q2-->
                            <!-- Q3-->
                                <div class="col padding-box">
                                    <label for="exampleFormControlSelect4">{{ $t('message.caWork') }}</label>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkWork1" v-model="sCaSymptoms.caWork1">
                                        <label class="custom-control-label" for="chkWork1">{{ $t('message.caWork1') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkWork2" v-model="sCaSymptoms.caWork2">
                                        <label class="custom-control-label" for="chkWork2">{{ $t('message.caWork2') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkWork3" v-model="sCaSymptoms.caWork3">
                                        <label class="custom-control-label" for="chkWork3">{{ $t('message.caWork3') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkWork4" v-model="sCaSymptoms.caWork4" >
                                        <label class="custom-control-label" for="chkWork4">{{ $t('message.caNone') }}</label>
                                    </div>
                                    <div v-if="noWorkShow" class="errorMsj "><p>{{ $t('message.caSelectOption') }}</p></div>
                                </div>
							<!-- Q3-->
                            <!-- Q4-->
                                <div class="col padding-box">
                                    <label for="exampleFormControlSelect4">{{ $t('message.caSymptoms') }}</label>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptoms1" v-model="sCaSymptoms.chkSymptoms1">
                                        <label class="custom-control-label" for="chkSymptoms1">{{ $t('message.caSymptoms1') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptoms2" v-model="sCaSymptoms.chkSymptoms2">
                                        <label class="custom-control-label" for="chkSymptoms2">{{ $t('message.caSymptoms2') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptoms3" v-model="sCaSymptoms.chkSymptoms3">
                                        <label class="custom-control-label" for="chkSymptoms3">{{ $t('message.caSymptoms3') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptoms4" v-model="sCaSymptoms.chkSymptoms4">
                                        <label class="custom-control-label" for="chkSymptoms4">{{ $t('message.caSymptoms4') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptoms5" v-model="sCaSymptoms.chkSymptoms5">
                                        <label class="custom-control-label" for="chkSymptoms5">{{ $t('message.caSymptoms5') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptoms6" v-model="sCaSymptoms.chkSymptoms6">
                                        <label class="custom-control-label" for="chkSymptoms6">{{ $t('message.caSymptoms6') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptoms7" v-model="sCaSymptoms.chkSymptoms7">
                                        <label class="custom-control-label" for="chkSymptoms7">{{ $t('message.caSymptoms7') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptoms8" v-model="sCaSymptoms.chkSymptoms8">
                                        <label class="custom-control-label" for="chkSymptoms8">{{ $t('message.caSymptoms8') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptoms9" v-model="sCaSymptoms.chkSymptoms9">
                                        <label class="custom-control-label" for="chkSymptoms9">{{ $t('message.caSymptoms9') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptoms10" v-model="sCaSymptoms.chkSymptoms10">
                                        <label class="custom-control-label" for="chkSymptoms10">{{ $t('message.caSymptoms10') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptoms11" v-model="sCaSymptoms.chkSymptoms11">
                                        <label class="custom-control-label" for="chkSymptoms11">{{ $t('message.caNone') }}</label>
                                    </div>
                                    <div v-if="noSymptomsShow" class="errorMsj "><p>{{ $t('message.caSelectOption') }}</p></div>
                                </div>
							<!-- Q4-->
                            <!-- Q5-->
                            <div class="row custom-control form-group">
									<label for="exampleFormControlSelect1">{{ $t('message.caSymptomsDays') }}</label>
                                    <button type="button" class="btn btn-sm btn-outline-info " data-toggle="modal" @click="showDialog('days')" data-target="#exampleModalCenter">?</button>
									<select class="form-control col-md-4 col-10" id="days" v-model="sCaSymptoms.days">
                                        <option>-</option>
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>{{ $t('message.symtoms5orMore') }}</option>
									</select>
                                     <div v-if="noDaysShow" class="errorMsj"><p>{{ $t('message.caSelectOption') }}</p></div>
							</div>
                            <!-- Q5-->
                             <!-- Q6-->
                                <div class="row custom-control form-group">
									<label for="exampleFormControlSelect2">{{ $t('message.caConditions') }}</label>
									<select class="form-control col-md-4 col-10" id="conditions" v-model="sCaSymptoms.conditions">
                                        <option>-</option>
										<option>{{ $t('message.yes') }}</option>
										<option>{{ $t('message.no') }}</option>
									</select>
                                     <div v-if="noConditionShow" class="errorMsj"><p>{{ $t('message.caSelectOption') }}</p></div>
								</div>
                            <!-- Q6-->
                            <!-- Q7-->
                            <div class="col padding-box">
                                    <label for="exampleFormControlSelect4">{{ $t('message.caSymptomsChronic') }}</label>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptomsC1" v-model="sCaSymptoms.caSymptomsChronic1">
                                        <label class="custom-control-label" for="chkSymptomsC1">{{ $t('message.caSymptomsChronic1') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptomsC2"  v-model="sCaSymptoms.caSymptomsChronic2">
                                        <label class="custom-control-label" for="chkSymptomsC2">{{ $t('message.caSymptomsChronic2') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptomsC3"  v-model="sCaSymptoms.caSymptomsChronic3">
                                        <label class="custom-control-label" for="chkSymptomsC3">{{ $t('message.caSymptomsChronic3') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptomsC4"  v-model="sCaSymptoms.caSymptomsChronic4">
                                        <label class="custom-control-label" for="chkSymptomsC4">{{ $t('message.caSymptomsChronic4') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptomsC5"  v-model="sCaSymptoms.caSymptomsChronic5">
                                        <label class="custom-control-label" for="chkSymptomsC5">{{ $t('message.caSymptomsChronic5') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptomsC6"  v-model="sCaSymptoms.caSymptomsChronic6">
                                        <label class="custom-control-label" for="chkSymptomsC6">{{ $t('message.caSymptomsChronic6') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptomsC7"  v-model="sCaSymptoms.caSymptomsChronic7">
                                        <label class="custom-control-label" for="chkSymptomsC7">{{ $t('message.caSymptomsChronic7') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptomsC8"  v-model="sCaSymptoms.caSymptomsChronic8">
                                        <label class="custom-control-label" for="chkSymptomsC8">{{ $t('message.caSymptomsChronic8') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptomsC9"  v-model="sCaSymptoms.caSymptomsChronic9">
                                        <label class="custom-control-label" for="chkSymptomsC9">{{ $t('message.caSymptomsChronic9') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptomsC10"  v-model="sCaSymptoms.caSymptomsChronic10">
                                        <label class="custom-control-label" for="chkSymptomsC10">{{ $t('message.caSymptomsChronic10') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptomsC11"  v-model="sCaSymptoms.caSymptomsChronic11">
                                        <label class="custom-control-label" for="chkSymptomsC11">{{ $t('message.caSymptomsChronic11') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptomsc12"  v-model="sCaSymptoms.caSymptomsChronic12">
                                        <label class="custom-control-label" for="chkSymptomsc12">{{ $t('message.caNone') }}</label>
                                    </div>
                                    <div v-if="noSymptomsChronicShow" class="errorMsj "><p>{{ $t('message.caSelectOption') }}</p></div>
                            </div>
                            <!-- Q7-->
                            <!-- Q8-->
                                <div class="row custom-control form-group">
									<label for="exampleFormControlSelect2">{{ $t('message.caPregnant') }}</label>
									<select class="form-control col-md-4 col-10" id="pregnant" v-model="sCaSymptoms.pregnant">
                                        <option>-</option>
										<option>{{ $t('message.yes') }}</option>
										<option>{{ $t('message.no') }}</option>
                                        <option>{{ $t('message.noApply') }}</option>
									</select>
                                     <div v-if="noPregnantShow" class="errorMsj"><p>{{ $t('message.caSelectOption') }}</p></div>
								</div>
                            <!-- Q8-->
						<hr class="mb-4">
					</div>
				</div>
				<div class="row bg-light justify-content-center align-items-center padding-box" >
					<div class="input-group-append">
						<!--button class="btn btn-outline-dark btn-lg float-left" type="button" v-on:click="back()">Back</button-->
						<!--button class="btn btn-outline-secondary btn-lg" type="button" v-on:click="next()" :disabled="!acknowledge">Analyze Answers</button-->
						<button class="btn btn-success btn-lg" type="button" v-on:click="next()">{{ $t('message.continue') }}</button>
					</div>
				</div>
			</div>	
    </div>
</template>

<script>
export default {
    data: function() {
        return {
        sCaSymptoms:{
            contact: '-',
            older: '-',
            caWork1: false,
            caWork2: false,
            caWork3: false,
            caWork4: false,
            chkSymptoms1: false,
            chkSymptoms2: false,
            chkSymptoms3: false,
            chkSymptoms4: false,
            chkSymptoms5: false,
            chkSymptoms6: false,
            chkSymptoms7: false,
            chkSymptoms8: false,
            chkSymptoms9: false,
            chkSymptoms10: false,
            chkSymptoms11: false,
            days: '-',
            conditions: '-',
            caSymptomsChronic1: false,
            caSymptomsChronic2: false,
            caSymptomsChronic3: false,
            caSymptomsChronic4: false,
            caSymptomsChronic5: false,
            caSymptomsChronic6: false,
            caSymptomsChronic7: false,
            caSymptomsChronic8: false,
            caSymptomsChronic9: false,
            caSymptomsChronic10: false,
            caSymptomsChronic11: false,
            caSymptomsChronic12: false,
            pregnant: '-'

        },
        noContactShow: false,
        noOlderShow: false,
        noDaysShow: false,
        noConditionShow: false,
        noPregnantShow: false,
        noWorkShow: false,        
        noSymptomsShow: false,
        noSymptomsChronicShow: false

        }
    },
    methods:{
         showDialog: function(item){
            if(item === 'days'){
                alert("If you are not sure, please put down your best estimate.");
            }
        },
        next(){            
            //validations
            //add validations
            if(this.sCaSymptoms.contact === '-'){
                this.noContactShow = true;
            }else if(this.sCaSymptoms.older === '-'){
				    this.noOlderShow=true;
            }else if(this.sCaSymptoms.caWork1 === false && 
                        this.sCaSymptoms.caWork2 === false && 
                        this.sCaSymptoms.caWork3 === false && 
                        this.sCaSymptoms.caWork4 === false ){
                 this.noWorkShow=true;
            }else if(this.sCaSymptoms.chkSymptoms1 === false && 
                        this.sCaSymptoms.chkSymptoms2 === false && 
                        this.sCaSymptoms.chkSymptoms3 === false && 
                        this.sCaSymptoms.chkSymptoms4 === false &&
                        this.sCaSymptoms.chkSymptoms5 === false && 
                        this.sCaSymptoms.chkSymptoms6 === false && 
                        this.sCaSymptoms.chkSymptoms7 === false &&
                        this.sCaSymptoms.chkSymptoms8 === false && 
                        this.sCaSymptoms.chkSymptoms9 === false && 
                        this.sCaSymptoms.chkSymptoms10 === false && 
                        this.sCaSymptoms.chkSymptoms11 === false ){
                this.noSymptomsShow=true;
            }else if(this.sCaSymptoms.days === '-'){
				    this.noDaysShow=true;
			}else if(this.sCaSymptoms.conditions === '-'){
				    this.noConditionShow=true;
			}else if(this.sCaSymptoms.caSymptomsChronic1 === false && 
                        this.sCaSymptoms.caSymptomsChronic2 === false && 
                        this.sCaSymptoms.caSymptomsChronic3 === false && 
                        this.sCaSymptoms.caSymptomsChronic4 === false &&
                        this.sCaSymptoms.caSymptomsChronic5 === false && 
                        this.sCaSymptoms.caSymptomsChronic6 === false && 
                        this.sCaSymptoms.caSymptomsChronic7 === false &&
                        this.sCaSymptoms.caSymptomsChronic8 === false && 
                        this.sCaSymptoms.caSymptomsChronic9 === false && 
                        this.sCaSymptoms.caSymptomsChronic10 === false && 
                        this.sCaSymptoms.caSymptomsChronic11 === false && 
                        this.sCaSymptoms.caSymptomsChronic12 === false ){
                this.noSymptomsChronicShow=true;
            }else if(this.sCaSymptoms.pregnant === '-'){
				    this.noPregnantShow=true;
            }else{
                //console.log("emitidoSymptoms", this.sCaSymptoms)
                 this.$emit('sCaSymptoms', this.sCaSymptoms);
            }
                     
            
            
            
        }
    },
    Props: {
        
    },
    watch:{
         'sCaSymptoms.contact': function(){
            if(this.sCaSymptoms.contact === '-'){
                this.noContactShow = true;
            }else{
                this.noContactShow = false;
            }
        },'sCaSymptoms.older': function(){
            if(this.sCaSymptoms.older === '-'){
                this.noOlderShow = true;
            }else{
                this.noOlderShow = false;
            }
        },'sCaSymptoms.days': function(){
            if(this.sCaSymptoms.days === '-'){
                this.noDaysShow = true;
            }else{
                this.noDaysShow = false;
            }
        },'sCaSymptoms.conditions': function(){
            if(this.sCaSymptoms.conditions === '-'){
                this.noConditionShow = true;
            }else{
                this.noConditionShow = false;
            }
        },'sCaSymptoms.pregnant': function(){
            if(this.sCaSymptoms.pregnant === '-'){
                this.noPregnantShow = true;
            }else{
                this.noPregnantShow = false;
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
 }.errorMsj{
	 color: coral;
 }
</style>