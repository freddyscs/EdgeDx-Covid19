<template>
    <div>
		<div class="col justify-content-md-center bg-light form-box">
			<div class="row">
				<div class="col">
					<p class="lead padding-box">{{ $t('message.symptomsTitle') }}</p>
					<hr class="mb-3">
						<!-- Survey Section 1 fever-->
							<div class="custom-control custom-checkbox">
							<input type="checkbox" class="custom-control-input" id="chkSmell" v-model="sSymptoms.smell">
							<label class="custom-control-label" for="chkSmell">{{ $t('message.symtomsSmell') }}</label>
							</div>
							<div class="custom-control custom-checkbox">
							<input type="checkbox" class="custom-control-input" id="chkTaste" v-model="sSymptoms.taste">
							<label class="custom-control-label" for="chkTaste">{{ $t('message.symtomsTaste') }}</label>
							</div>
							<div class="custom-control custom-checkbox">
								<input type="checkbox" class="custom-control-input" id="chkFever" v-model="sSymptoms.fever">
								<label class="custom-control-label" for="chkFever">{{ $t('message.symtomsFever') }}</label>
							</div>
							 <transition name="fade">
							<section v-if="sSymptoms.fever">
								<div class="row custom-control form-group">
									<label for="exampleFormControlSelect1">{{ $t('message.symtomsFeverDays') }}</label>
									<select class="form-control col-md-4" id="feverDays" v-model="sSymptoms.feverDays">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>{{ $t('message.symtoms5orMore') }}</option>
									</select>
								</div>
								<div class="row custom-control form-group">
									<label for="exampleFormControlSelect2">{{ $t('message.symtomsMeasureFever') }}</label>
									<select class="form-control col-md-4" id="feverMeasure" v-model="sSymptoms.feverMeasure">
										<option>{{ $t('message.yes') }}</option>
										<option>{{ $t('message.no') }}</option>
									</select>
								</div>
								<transition name="fade">
								<section v-if="sSymptoms.feverMeasure === $t('message.yes')">
									<div class="row custom-control form-group">
										<label for="exampleFormControlSelect3">{{ $t('message.symtomsMeasureFeverHightes') }}</label>
										<select class="form-control col-md-4" id="feverHighest" v-model="sSymptoms.feverHighest">
											<option>{{ $t('message.symtomsFever1') }}</option>
											<option>{{ $t('message.symtomsFever2') }}</option>
											<option>{{ $t('message.symtomsFever3') }}</option>
											<option>{{ $t('message.symtomsFever4') }}</option>
											<option>{{ $t('message.symtomsFever5') }}</option>
										</select>
									</div>
								</section>
								</transition>
							</section>
							 </transition>
							<!-- Survey Section 1 fever-->
						<div class="custom-control custom-checkbox">
							<input type="checkbox" class="custom-control-input" id="chkCough" v-model="sSymptoms.cough">
							<label class="custom-control-label" for="chkCough">{{ $t('message.symtomsCough') }}</label>
						</div>
						 <transition name="fade">
						<section v-if="sSymptoms.cough">
							<div class="row custom-control form-group">
								<label for="exampleFormControlSelect4">{{ $t('message.symtomsCoughDays') }}</label>
								<select class="form-control col-md-4" id="coughDays" v-model="sSymptoms.coughDays">
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>{{ $t('message.symtoms5orMore') }}</option>
								</select>
							</div>
							<div class="row custom-control form-group">
								<label for="exampleFormControlSelect5">{{ $t('message.symtomsContinuousCough') }}</label>
								<select class="form-control col-md-4" id="coughMeasure" v-model="sSymptoms.coughMeasure">
									<option>{{ $t('message.coughYes') }}</option>
									<option>{{ $t('message.no') }}</option>
								</select>
							</div>
						</section>
						 </transition>	
						<div class="custom-control custom-checkbox">
							<input type="checkbox" class="custom-control-input" id="chkBreath" v-model="sSymptoms.breath">
							<label class="custom-control-label" for="chkBreath">{{ $t('message.symtomsBreatging') }}</label>
						</div>
					<hr class="mb-4">
				</div>
			</div>
			<div class="row bg-light justify-content-center align-items-center padding-box" >
				<div class="input-group-append">
					<button class="btn btn-outline-dark btn-lg" type="button" v-on:click="next()">{{ $t('message.continue') }}</button>
				</div>
			</div>
		</div>
    </div>
</template>
<script>
export default {
   data: function() {
        return {
            sSymptoms : {
                id: false,
                fever: false,
                feverDays: false,
                feverHighest: false,
                feverMeasure: false,
                cough: false,
                coughMeasure: false,
                coughDays: false,
                breath: false,
				smell: false,
				taste: false
			
			},
			corona:0
		}
    },
    Props: {
        sSymptoms : Object
    },
    methods:{
        next(){
			this.sSymptoms.id=true;
			//Fever analysis
				if (this.sSymptoms.fever){
					this.corona ++;
					if (this.sSymptoms.feverDays){			
						if (this.sSymptoms.feverDays === '4' || this.sSymptoms.feverDays === this.$t('message.symtoms5orMore'))
						this.corona +=2;
					}
					if (this.sSymptoms.feverHighest === this.$t('message.symtomsFever4') || this.sSymptoms.feverHighest === this.$t('message.symtomsFever5'))
						this.corona ++;
				}
			//Cough analysis
				if (this.sSymptoms.cough){
					this.sSymptoms.corona ++;
					if (this.sSymptoms.coughMeasure === this.$t('message.coughYes'))
					this.corona += 2;
				}
			//Taste analysis
				if (this.sSymptoms.taste)
					this.corona += 5;
			//Breath analysis
				if (this.sSymptoms.breath)
					this.corona += 5;
				//Smell analysis
				if (this.sSymptoms.smell)
					this.corona += 2;

			//Sending variables to Survey component
			this.$emit('sSymptoms', this.sSymptoms);
			this.$emit('sSymptomsCorona', this.corona)
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