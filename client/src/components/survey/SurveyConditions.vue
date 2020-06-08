<template>
    <div>
			<div class="col justify-content-md-center bg-light form-box">
				<div class="row">
					<div class="col">
						<p class="lead padding-box">{{ $t('message.conditionsTitle') }}</p>
						<hr class="mb-3">
							<!-- Survey Section 2 medicar condition-->
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="chkCardio" v-model="sConditions.cardio">
									<label class="custom-control-label" for="chkCardio">{{ $t('message.conditionsCardio') }}</label>
								</div>
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="chkBloodPreasure" v-model="sConditions.bloodPreasure">
									<label class="custom-control-label" for="chkBloodPreasure">{{ $t('message.conditionsBlood') }}</label>
								</div>
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="chkDiabetes" v-model="sConditions.diabetes">
									<label class="custom-control-label" for="chkDiabetes">{{ $t('message.conditionsDiabetes') }}</label>
								</div>
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="chkRespiratoryDisease" v-model="sConditions.respiratoryDisease">
									<label class="custom-control-label" for="chkRespiratoryDisease">{{ $t('message.conditionsRespiratory') }}</label>
								</div>
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="chkCancer" v-model="sConditions.cancer">
									<label class="custom-control-label" for="chkCancer">{{ $t('message.conditionsCancer') }}</label>
								</div>
							<!-- Survey Section 2 medicar condition-->
						<hr class="mb-4">
					</div>
				</div>
				<div class="row bg-light justify-content-center align-items-center padding-box" >
					<div class="input-group-append">
						<!--button class="btn btn-outline-dark btn-lg float-left" type="button" v-on:click="back()">Back</button-->
						<button class="btn btn-outline-secondary btn-lg" type="button" v-on:click="next()">{{ $t('message.continue') }}</button>
					</div>
				</div>
			</div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
        sConditions:{
            id: false,
            cardio: false,
            diabetes: false,
            bloodPreasure: false,
            respiratoryDisease: false,
            cancer: false
			},
			corona:0
        }
    },
    Props: {
        sConditions: Object
    },
    methods:{
          next(){
			//Medical conditions
				if (this.sConditions.cardio)
					this.corona ++;
				if (this.sConditions.bloodPreasure)
					this.corona ++;
				if (this.sConditions.diabetes)
					this.corona ++;
				if (this.sConditions.respiratoryDisease)
					this.corona += 5;
				if (this.sConditions.cancer)
					this.corona +=4;
			//Sending variables to Survey component
			this.$emit('sConditions', this.sConditions);
			this.$emit('sConditionsCorona', this.corona);
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