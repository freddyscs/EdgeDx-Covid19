<template>
	<div>
	<!-- Welcome message-->
		<section v-if="survey === 0">
			<div class="row justify-content-center form-box padding-box" >
					<div class="col red" >
						<div class="row" >
							<h1 class="display-8">Welcome to EdgeDx</h1>
							<p class="text-muted">COVID-19 information platform</p>
							<p class="lead">This is a simple message for the user before start the test, a simple style component for calling extra attention to featured content or information.</p>
						</div>
						<div class="row" >
							<div class="input-group">
							  <input type="text" class="form-control" placeholder="Please enter test ID number">
							  <div class="input-group-append">
								<button class="btn btn-outline-secondary" type="button" v-on:click="next()">Start</button>
							  </div>
							</div>
						</div>
					</div>						
					<div class="col red align-self-center logo-margin" >
						<div class="row justify-content-center">
					   		<img src="../../assets/images/edgedx-large-60.png">
					   </div>
					</div>
				</div>
		</section>
		<!-- Welcome message-->
	<!-- Survey Section 1-->
		<section v-if="survey === 1">
		<div class="col justify-content-md-center bg-light form-box">
			<div class="row">
				<div class="col">
					<p class="lead padding-box">Have you felt any of this symptoms in the past 14 days?</p>
					<hr class="mb-3">
						<!-- Survey Section 1 fever-->
							<div class="custom-control custom-checkbox">
								<input type="checkbox" class="custom-control-input" id="chkFever" v-model="fever">
								<label class="custom-control-label" for="chkFever">Fever</label>
							</div>
							<section v-if="fever">
								<div class="row custom-control form-group">
									<label for="exampleFormControlSelect1">Please select the amount of days with fever</label>
									<select class="form-control col-md-4" id="feverDays" v-model="feverDays">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5 or more</option>
									</select>
								</div>
								<div class="row custom-control form-group">
									<label for="exampleFormControlSelect2">Have you measure the fever?</label>
									<select class="form-control col-md-4" id="feverMeasure" v-model="feverMeasure">
										<option>Yes</option>
										<option>No</option>
									</select>
								</div>
								<section v-if="feverMeasure === 'Yes'">
									<div class="row custom-control form-group">
										<label for="exampleFormControlSelect3">Please select the hightes fever measured</label>
										<select class="form-control col-md-4" id="feverHighest" v-model="feverHighest">
											<option>37</option>
											<option>38</option>
											<option>39</option>
											<option>40</option>
											<option>41 or more</option>
										</select>
									</div>
								</section>
							</section>
							<!-- Survey Section 1 fever-->
						<div class="custom-control custom-checkbox">
							<input type="checkbox" class="custom-control-input" id="chkCough" v-model="cough">
							<label class="custom-control-label" for="chkCough">Dry cough</label>
						</div>
						<section v-if="cough">
							<div class="row custom-control form-group">
								<label for="exampleFormControlSelect4">Please select the amount of days with dry cough</label>
								<select class="form-control col-md-4" id="coughDays" v-model="coughDays">
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5 or more</option>
								</select>
							</div>
							<div class="row custom-control form-group">
								<label for="exampleFormControlSelect5">Have you experienced continuous cough?  this means you have started coughing repeatedly.</label>
								<select class="form-control col-md-4" id="coughMeasure" v-model="coughMeasure">
									<option>Yes</option>
									<option>No</option>
								</select>
							</div>
						</section>	
						<div class="custom-control custom-checkbox">
							<input type="checkbox" class="custom-control-input" id="chkBreath" v-model="breath">
							<label class="custom-control-label" for="chkBreath">Have you experienced difficulty to Breath?</label>
						</div>
						<div class="custom-control custom-checkbox">
							<input type="checkbox" class="custom-control-input" id="chkSmell" v-model="smell">
							<label class="custom-control-label" for="chkSmell">Have you experienced loss of smell?</label>
						</div>
					<hr class="mb-4">
				</div>
			</div>
			<div class="row bg-light justify-content-center align-items-center padding-box" >
				<div class="input-group-append">
					<button class="btn btn-outline-dark btn-lg" type="button" v-on:click="next()">Continue</button>
				</div>
			</div>
		</div>
		</section>
		<!-- Survey Section 1-->
		<!-- Survey Section 2-->
		<section v-if="survey === 2">
			<div class="col justify-content-md-center bg-light form-box">
				<div class="row">
					<div class="col">
						<p class="lead padding-box">Do you have any of the following medical conditions?</p>
						<hr class="mb-3">
							<!-- Survey Section 2 medicar condition-->
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="chkCardio" v-model="cardio">
									<label class="custom-control-label" for="chkCardio">Cardiovascular disease</label>
								</div>
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="chkBloodPreasure" v-model="bloodPreasure">
									<label class="custom-control-label" for="chkBloodPreasure">Blood preasure</label>
								</div>
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="chkDiabetes" v-model="diabetes">
									<label class="custom-control-label" for="chkDiabetes">Diabetes</label>
								</div>
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="chkRespiratoryDisease" v-model="respiratoryDisease">
									<label class="custom-control-label" for="chkRespiratoryDisease">Respiratory Disease</label>
								</div>
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="chkCancer" v-model="cancer">
									<label class="custom-control-label" for="chkCancer">Cancer</label>
								</div>
							<!-- Survey Section 2 medicar condition-->
						<hr class="mb-4">
					</div>
				</div>
				<div class="row bg-light justify-content-center align-items-center padding-box" >
					<div class="input-group-append">
						<!--button class="btn btn-outline-dark btn-lg float-left" type="button" v-on:click="back()">Back</button-->
						<button class="btn btn-outline-secondary btn-lg" type="button" v-on:click="next()">Continue</button>
					</div>
				</div>
			</div>
			</section>
		<!-- Survey Section 2-->
		<!-- Survey Section 3-->
		<section v-if="survey === 3">
			<div class="col justify-content-md-center bg-light form-box">
				<div class="row">
					<div class="col">
						<p class="lead padding-box">Do you have, or have had any of this warning signs?</p>
						<hr class="mb-3">
							<!-- Survey Section 3 medicar condition-->
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="chkChest" v-model="chest">
									<label class="custom-control-label" for="chkChest">Persistance pain or preasure in the chest</label>
								</div>
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="chkExhaustation" v-model="exhaustation">
									<label class="custom-control-label" for="chkExhaustation">Exhaustation</label>
								</div>
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="chkArouse" v-model="arouse">
									<label class="custom-control-label" for="chkArouse">New confusion or inability to arouse</label>
								</div>
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="chkBluish" v-model="bluish">
									<label class="custom-control-label" for="chkBluish">Bluish lips or face</label>
								</div>
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="chkDiarrhea" v-model="diarrhea">
									<label class="custom-control-label" for="chkDiarrhea">Diarrhea</label>
								</div>
							<!-- Survey Section 3 medicar condition-->
						<hr class="mb-4">
					</div>
				</div>
				<div class="row bg-light justify-content-center align-items-center padding-box" >
					<div class="input-group-append">
						<!--button class="btn btn-outline-dark btn-lg float-left" type="button" v-on:click="back()">Back</button-->
						<button class="btn btn-outline-secondary btn-lg" type="button" v-on:click="next()">Continue</button>
					</div>
				</div>
			</div>
			</section>
		<!-- Survey Section 3-->
		<!-- Survey Section 4-->
		<section v-if="survey === 4">
			<div class="col justify-content-md-center bg-light form-box">
				<div class="row">
					<div class="col">
						<p class="lead padding-box">Personal information</p>
						<hr class="mb-3">
							<!-- Survey Section 4 medical condition-->
							<div class="row custom-control form-group">
								<label for="exampleFormControlSelect4">Please select the amount of days that you stayed sheltered home and avoiding close contacts (days)</label>
								<select class="form-control col-md-4" id="daysSheltered" v-model="daysSheltered">
									<option>0</option>
									<option>1-5</option>
									<option>6-10</option>
									<option>11-15</option>
									<option>16-20</option>
									<option>21-25</option>
									<option>26 or more</option>
								</select>
							</div>
							<div class="row custom-control form-group">
								<label for="exampleFormControlSelect4">Please select your age group (years)</label>
								<select class="form-control col-md-4" id="age" v-model="age">
									<option>0-9</option>
									<option>10-19</option>
									<option>20-29</option>
									<option>30-39</option>
									<option>40-49</option>
									<option>50-59</option>
									<option>60-69</option>
									<option>70-79</option>
									<option>80 or more</option>
								</select>
							</div>
							<div class="row custom-control form-group">
								<label for="exampleFormControlSelect4">Please specify your ethnicity.</label>
								<select class="form-control col-md-4" id="ethnicity" v-model="ethnicity">
									<option>White</option>
									<option>Hispanic or Latino</option>
									<option>Black or African American</option>
									<option>Native American or American Indian</option>
									<option>Asian / Pacific Islander</option>
									<option>Other</option>
								</select>
							</div>
							<div class="custom-control custom-checkbox">
								<input type="checkbox" class="custom-control-input" id="chkAcknowledge" v-model="acknowledge">
								<label class="custom-control-label" for="chkAcknowledge">I acknowledge that the information provided herein is accurate, complete and correct.</label>
							</div>
							<!-- Survey Section 4 medical condition-->
						<hr class="mb-4">
					</div>
				</div>
				<div class="row bg-light justify-content-center align-items-center padding-box" >
					<div class="input-group-append">
						<!--button class="btn btn-outline-dark btn-lg float-left" type="button" v-on:click="back()">Back</button-->
						<button class="btn btn-outline-secondary btn-lg" type="button" v-on:click="next()">Analyze Answers</button>
					</div>
				</div>
			</div>
			</section>
		<!-- Survey Section 4-->
		<!-- Survey Section 5-->
		<section v-if="survey === 5">
			<div class="col justify-content-md-center bg-light form-box">
				<div class="row">
					<div class="col">
						<p class="lead padding-box">Result</p>
						<hr class="mb-3">
							<!-- Survey Section 4 medicar condition-->
							<div class="row justify-content-center align-items-center">
								<section v-if="loading">
									<br><br>
									<div class="spinner-grow text-dark" role="status">
									<span class="sr-only">Loading...</span>
									</div>
								</section>
								<section v-if="success">
									<div class="padding-box">
									<div class="alert alert-success" role="alert">
										<h4 class="alert-heading">Well done!</h4>
										<p></p>
										<P>Protect yourself and others around you by knowing the facts and taking appropriate precautions. Follow advice provided by your local public health agency.</p>
										<p>To prevent the spread of COVID-19:</p>
										<li>Clean your hands often. Use soap and water, or an alcohol-based hand rub.</li>
										<li>Maintain a safe distance from anyone who is coughing or sneezing.</li>
										<li>Don’t touch your eyes, nose or mouth.</li>
										<li>Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.</li>
										<li>Stay home if you feel unwell.</li>
										<li>If you have a fever, a cough, and difficulty breathing, seek medical attention. Call in advance.</li>
										<li>Follow the directions of your local health authority.</li>
										<hr>
										<p class="mb-0">Avoiding unneeded visits to medical facilities allows healthcare systems to operate more effectively, therefore protecting you and others.</p>
									</div>
									</div>
								</section>
								<section v-if="warning">
									<div class="padding-box">
										<div class="alert alert-warning" role="alert">
											<h4 class="alert-heading">OH!</h4>
											<p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
											<hr>
											<p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
										</div>
									</div>
								</section>
								<section v-if="danger">
									<div class="alert alert-danger" role="alert">
										A simple danger alert check it out!
									  </div>
									<div class="padding-box">
										<div class="alert alert-danger" role="alert">
											<h4 class="alert-heading">OH!</h4>
											<p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
											<hr>
											<p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
										</div>
									</div>
								</section>
							</div>
							<!-- Survey Section 2 medicar condition-->
						<hr class="mb-4">
					</div>
				</div>
			</div>
		</section>
		<!-- Survey Section 5-->
	</div>	
</template>
<script>
export default {
    data: function() {
        return {
		survey: 1,
        fever: false,
		feverDays: false,
		feverHighest: false,
		feverMeasure: false,
		cough: false,
		coughMeasure: false,
		coughDays: false,
		breath: false,
		smell: false,
		cardio: false,
		diabetes: false,
		bloodPreasure: false,
		respiratoryDisease: false,
		cancer: false,
		chest: false,
		exhaustation: false,
		arouse: false,
		bluish: false,
		diarrhea: false,
		daysSheltered: false,
		age: false,
		ethnicity: false,
		acknowledge: false,
		checked: false,
		corona: 0,
		result: 0,
		loading: false,
		success: false,
		warning: false,
		danger: false
		}
	},
	props:
		['survey']
	,
	methods: {
    	testMethod: function() {
            return true
      	},
	  	next: function(){
			this.survey ++;
			if (this.survey === 5){
				this.analyse();
			}
	  	},
		back: function(){
			this.survey --;
		},
		reset: function(){
			this.corona = 0;
		},
		checkEmail: function (email) {
			return true
			/*
			var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if(re.test(this.email)){
				alert(re.test(this.email));
				return true;
				*/
		},
		analyse: function(){
			this.loading=true;
			this.calculateCorona();
			if (this.corona < 10){
				this.success = true;
			}
			if(this.corona >= 10 && this.corona <= 25 ){
				this.warning = true;
			}
			if(this.corona > 26){
				this.danger = true;
			}
			this.loading=false;
		},
		calculateCorona: function(){		
				//Fever analysis
				setTimeout(function(){ console.log("loarding") }, 3000);
				if (this.fever){
					this.corona ++;
					if (this.feverDays){			
						if (this.feverDays === '4' || this.feverDays === '5 or more')
						this.corona +=2;
					}
					if (this.feverHighest === '40' || this.feverHighest === '41 or more')
						this.corona ++;
				}
				//Cough analysis
				if (this.cough){
					this.corona ++;
					if (this.coughMeasure === 'Yes')
					this.corona += 2;
				}
				//Breath analysis
				if (this.breath)
					this.corona += 5;
				//Smell analysis
				if (this.smell)
					this.corona += 2;
				//Medical conditions
				if (this.cardio)
					this.corona ++;
				if (this.bloodPreasure)
					this.corona ++;
				if (this.diabetes)
					this.corona ++;
				if (this.respiratoryDisease)
					this.corona += 5;
				if (this.cancer)
					this.corona +=4;
				//Warning signals
				if (this.chest)
					this.corona += 5;
				if (this.exhaustation)
					this.corona ++;
				if (this.arouse)
					this.corona +=2;
				if (this.bluish)
					this.corona +=2;
				if (this.diarrhea)
					this.corona ++;
				//DaysSheltered
				if (this.daysSheltered){
					if (this.daysSheltered === '0')
					this.corona += 3;
					else if (this.daysSheltered === '1-5')
					this.corona ++;
					else if (this.daysSheltered === '6-10')
					this.corona ++;
					else if (this.daysSheltered === '11-15')
					this.corona ++;
					else if (this.daysSheltered === '16-20')
					this.corona ++;
					else if (this.daysSheltered === '21-25')
					this.corona ++;
					else if (this.daysSheltered === '26 or more')
					this.corona ++;

					return this.corona;
				}
				//Age
				if (this.age){
					if (this.age === '0-9')
					this.corona -= 5;
					else if (this.age === '10-19')
					this.corona -= 2;
					else if (this.age === '20-29')
					this.corona ++;
					else if (this.age === '30-39')
					this.corona += 2;
					else if (this.age === '40-49')
					this.corona += 3;
					else if (this.age === '50-59')
					this.corona += 4;
					else if (this.age === '50-59')
					this.corona += 5;
					else if (this.age === '60-69')
					this.corona += 6;
					else if (this.age === '70-79')
					this.corona += 7;
					else 
					this.corona += 8;

					return this.corona;
				}
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
 .logo-margin {
	margin: 3% auto;
 }
</style>