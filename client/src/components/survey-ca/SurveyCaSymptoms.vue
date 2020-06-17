<template>
     <div>
        <div class="col bg-light form-box">
				<div class="row">
					<div class="col padding-box">
                        <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style="width: 75%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
						<h2 class="padding-box">{{ $t('message.caSymptomsTitle') }}</h2>
						<hr class="mb-3">
							<!-- Survey CA Section 2 symptoms-->
                            <!-- Q1-->
                            <div class="row custom-control form-group">
									<label for="exampleFormControlSelect2">{{ $t('message.caSymptomsContact1') }}</label>
                                    <label for="exampleFormControlSelect2">{{ $t('message.caSymptomsContact2') }}</label>
									<select class="form-control col-md-4" id="contact" >
										<option>{{ $t('message.yes') }}</option>
										<option>{{ $t('message.no') }}</option>
									</select>
								</div>
                            <!-- Q1-->
                            <!-- Q2-->
                                <div class="row custom-control form-group">
									<label for="exampleFormControlSelect2">{{ $t('message.caSymptomsAge') }}</label>
									<select class="form-control col-md-4" id="older" >
										<option>{{ $t('message.yes') }}</option>
										<option>{{ $t('message.no') }}</option>
									</select>
								</div>
                            <!-- Q2-->
                            <!-- Q3-->
                                <div class="col padding-box">
                                    <label for="exampleFormControlSelect4">{{ $t('message.caWork') }}</label>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkWork1">
                                        <label class="custom-control-label" for="chkWork1">{{ $t('message.caWork1') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkWork2" >
                                        <label class="custom-control-label" for="chkWork2">{{ $t('message.caWork2') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkWork3">
                                        <label class="custom-control-label" for="chkWork3">{{ $t('message.caWork3') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkWork4" >
                                        <label class="custom-control-label" for="chkWork4">{{ $t('message.caNone') }}</label>
                                    </div>
                                </div>
							<!-- Q3-->
                            <!-- Q4-->
                                <div class="col padding-box">
                                    <label for="exampleFormControlSelect4">{{ $t('message.caSymptoms') }}</label>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptoms1">
                                        <label class="custom-control-label" for="chkSymptoms1">{{ $t('message.caSymptoms1') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptoms2" >
                                        <label class="custom-control-label" for="chkSymptoms2">{{ $t('message.caSymptoms2') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptoms3">
                                        <label class="custom-control-label" for="chkSymptoms3">{{ $t('message.caSymptoms3') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptoms4">
                                        <label class="custom-control-label" for="chkSymptoms4">{{ $t('message.caSymptoms4') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptoms5">
                                        <label class="custom-control-label" for="chkSymptoms5">{{ $t('message.caSymptoms5') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptoms6">
                                        <label class="custom-control-label" for="chkSymptoms6">{{ $t('message.caSymptoms6') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptoms7">
                                        <label class="custom-control-label" for="chkSymptoms7">{{ $t('message.caSymptoms7') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptoms8">
                                        <label class="custom-control-label" for="chkSymptoms8">{{ $t('message.caSymptoms8') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptoms9">
                                        <label class="custom-control-label" for="chkSymptoms9">{{ $t('message.caSymptoms9') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptoms10">
                                        <label class="custom-control-label" for="chkSymptoms10">{{ $t('message.caSymptoms10') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptoms11">
                                        <label class="custom-control-label" for="chkSymptoms11">{{ $t('message.caNone') }}</label>
                                    </div>
                                </div>
							<!-- Q4-->
                            <!-- Q5-->
                            <div class="row custom-control form-group">
									<label for="exampleFormControlSelect1">{{ $t('message.caSymptomsDays') }}</label>
                                    <button type="button" class="btn btn-sm btn-outline-info " data-toggle="modal" @click="showDialog('days')" data-target="#exampleModalCenter">?</button>
									<select class="form-control col-md-4" id="days">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>{{ $t('message.symtoms5orMore') }}</option>
									</select>
							</div>
                            <!-- Q5-->
                             <!-- Q6-->
                                <div class="row custom-control form-group">
									<label for="exampleFormControlSelect2">{{ $t('message.caConditions') }}</label>
									<select class="form-control col-md-4" id="conditions" >
										<option>{{ $t('message.yes') }}</option>
										<option>{{ $t('message.no') }}</option>
									</select>
								</div>
                            <!-- Q6-->
                            <!-- Q7-->
                            <div class="col padding-box">
                                    <label for="exampleFormControlSelect4">{{ $t('message.caSymptomsChronic') }}</label>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptomsC1">
                                        <label class="custom-control-label" for="chkSymptomsC1">{{ $t('message.caSymptomsChronic1') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptomsC2" >
                                        <label class="custom-control-label" for="chkSymptomsC2">{{ $t('message.caSymptomsChronic2') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptomsC3">
                                        <label class="custom-control-label" for="chkSymptomsC3">{{ $t('message.caSymptomsChronic3') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptomsC4">
                                        <label class="custom-control-label" for="chkSymptomsC4">{{ $t('message.caSymptomsChronic4') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptomsC5">
                                        <label class="custom-control-label" for="chkSymptomsC5">{{ $t('message.caSymptomsChronic5') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptomsC6">
                                        <label class="custom-control-label" for="chkSymptomsC6">{{ $t('message.caSymptomsChronic6') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptomsC7">
                                        <label class="custom-control-label" for="chkSymptomsC7">{{ $t('message.caSymptomsChronic7') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptomsC8">
                                        <label class="custom-control-label" for="chkSymptomsC8">{{ $t('message.caSymptomsChronic8') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptomsC9">
                                        <label class="custom-control-label" for="chkSymptomsC9">{{ $t('message.caSymptomsChronic9') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptomsC10">
                                        <label class="custom-control-label" for="chkSymptomsC10">{{ $t('message.caSymptomsChronic10') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptomsC11">
                                        <label class="custom-control-label" for="chkSymptomsC11">{{ $t('message.caSymptomsChronic10') }}</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkSymptomsc12">
                                        <label class="custom-control-label" for="chkSymptomsc12">{{ $t('message.caNone') }}</label>
                                    </div>
                            </div>
                            <!-- Q7-->
                            <!-- Q8-->
                                <div class="row custom-control form-group">
									<label for="exampleFormControlSelect2">{{ $t('message.caPregnant') }}</label>
									<select class="form-control col-md-4" id="pregnant" >
										<option>{{ $t('message.yes') }}</option>
										<option>{{ $t('message.no') }}</option>
                                        <option>{{ $t('message.noApply') }}</option>
									</select>
								</div>
                            <!-- Q8-->
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
        }
    },
    methods:{
         showDialog: function(item){
            if(item === 'days'){
                alert("If you are not sure, please put down your best estimate.");
            }
        },
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