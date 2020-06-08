<template>
    <div>
        <div class="col justify-content-md-center bg-light form-box">
				<div class="row">
					<div class="col">
						<p class="lead padding-box">{{ $t('message.presonalTitle') }}</p>
						<hr class="mb-3">
							<!-- Survey Section 4 medical condition-->
							<div class="row custom-control form-group">
								<label for="exampleFormControlSelect4">{{ $t('message.presonalCloseContact') }}</label>
								<select class="form-control col-md-4" id="daysSheltered" v-model="sPersonal.daysSheltered">
									<option>0</option>
									<option>1-5</option>
									<option>6-10</option>
									<option>11-15</option>
									<option>16-20</option>
									<option>21-25</option>
									<option>{{ $t('message.presonal26orMore') }}</option>
								</select>
							</div>
							<div class="row custom-control form-group">
								<label for="exampleFormControlSelect4">{{ $t('message.presonalAge') }}</label>
								<select class="form-control col-md-4" id="age" v-model="sPersonal.age">
									<option>0-9</option>
									<option>10-19</option>
									<option>20-29</option>
									<option>30-39</option>
									<option>40-49</option>
									<option>50-59</option>
									<option>60-69</option>
									<option>70-79</option>
									<option>{{ $t('message.presonal80orMore') }}</option>
								</select>
							</div>
							<div class="row custom-control form-group">
								<label for="exampleFormControlSelect4">{{ $t('message.presonalEthnicity') }}</label>
								<select class="form-control col-md-4" id="ethnicity" v-model="sPersonal.ethnicity">
									<option>{{ $t('message.presonalEthnicityWhite') }}</option>
									<option>{{ $t('message.presonalEthnicityHispanic') }}</option>
									<option>{{ $t('message.presonalEthnicityBlack') }}</option>
									<option>{{ $t('message.presonalEthnicityNative') }}</option>
									<option>{{ $t('message.presonalEthnicityAsian') }}</option>
									<option>{{ $t('message.presonalEthnicityOther') }}</option>
								</select>
							</div>
							<div class="row custom-control form-group">
								<label for="exampleFormControlSelect4">{{ $t('message.presonalGender') }}</label>
								<select class="form-control col-md-4" id="gender" v-model="sPersonal.gender">
									<option>{{ $t('message.presonalGenderMale') }}</option>
									<option>{{ $t('message.presonalGenderFemale') }}</option>
									<option>{{ $t('message.presonalGenderOther') }}</option>
								</select>
							</div>
							<!--div class="row custom-control form-group">
								<label for="exampleFormControlSelect4">Please enter your zipcode.</label>
								<input type="text" class="form-control col-md-4" placeholder="Zip code" v-model="zipcode"> 
							</div-->
							<div class="custom-control custom-checkbox">
								<input type="checkbox" class="custom-control-input" id="chkAcknowledge" v-model="acknowledge">
								<label class="custom-control-label" for="chkAcknowledge">{{ $t('message.presonalAcknowledge') }}</label>
							</div>
							<!-- Survey Section 4 medical condition-->
						<hr class="mb-4">
					</div>
				</div>
				<div class="row bg-light justify-content-center align-items-center padding-box" >
					<div class="input-group-append">
						<!--button class="btn btn-outline-dark btn-lg float-left" type="button" v-on:click="back()">Back</button-->
						<!--button class="btn btn-outline-secondary btn-lg" type="button" v-on:click="next()" :disabled="!acknowledge">Analyze Answers</button-->
						<button class="btn btn-outline-secondary btn-lg" type="button" v-on:click="next()" :disabled="!acknowledge">{{ $t('message.presonalButtonAnalyze') }}</button>
					</div>
				</div>
			</div>	
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            sPersonal : {
                id: false,
                daysSheltered: false,
                age: false,
                ethnicity: false,
				acknowledge: false,
				gender: false,
				checked: false,
				zipcode: '',
				invalid: true
            },
			corona:0,
			acknowledge: false
        }
    },
    methods:{
        next(){
                //DaysSheltered
				if (this.sPersonal.daysSheltered){
					if (this.sPersonal.daysSheltered === '0')
					this.corona += 3;
					else if (this.sPersonal.daysSheltered === '1-5')
					this.corona ++;
					else if (this.sPersonal.daysSheltered === '6-10')
					this.corona ++;
					else if (this.sPersonal.daysSheltered === '11-15')
					this.corona ++;
					else if (this.sPersonal.daysSheltered === '16-20')
					this.corona ++;
					else if (this.sPersonal.daysSheltered === '21-25')
					this.corona ++;
					else if (this.sPersonal.daysSheltered === this.$t('message.presonal26orMore'))
					this.corona ++;
				}
				//Age
				if (this.sPersonal.age){
					if (this.sPersonal.age === '0-9')
					this.corona -= 5;
					else if (this.sPersonal.age === '10-19')
					this.corona -= 2;
					else if (this.sPersonal.age === '20-29')
					this.corona ++;
					else if (this.sPersonal.age === '30-39')
					this.corona += 2;
					else if (this.sPersonal.age === '40-49')
					this.corona += 3;
					else if (this.sPersonal.age === '50-59')
					this.corona += 4;
					else if (this.sPersonal.age === '50-59')
					this.corona += 5;
					else if (this.sPersonal.age === '60-69')
					this.corona += 6;
					else if (this.sPersonal.age === '70-79')
					this.corona += 7;
					else 
                    this.corona += 8;
                }
                //Sending variables to Survey component
                this.$emit('sPersonal', this.sPersonal);
                this.$emit('sPersonalCorona', this.corona);
        }
    },
    Props: {
        sPersonal: Object
	},
	watch: {
		acknowledge: function(){
			this.sPersonal.acknowledge = true;
			
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
</style>