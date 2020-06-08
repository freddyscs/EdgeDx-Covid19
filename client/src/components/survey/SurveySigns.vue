<template>
    <div>
			<div class="col justify-content-md-center bg-light form-box">
				<div class="row">
					<div class="col">
						<p class="lead padding-box">{{ $t('message.signsTitle') }}</p>
						<hr class="mb-3">
							<!-- Survey Section 3 medicar condition-->
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="chkChest" v-model="sSigns.chest">
									<label class="custom-control-label" for="chkChest">{{ $t('message.signsChest') }}</label>
								</div>
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="chkExhaustation" v-model="sSigns.exhaustation">
									<label class="custom-control-label" for="chkExhaustation">{{ $t('message.signsExhaustation') }}</label>
								</div>
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="chkArouse" v-model="sSigns.arouse">
									<label class="custom-control-label" for="chkArouse">{{ $t('message.signsArause') }}</label>
								</div>
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="chkBluish" v-model="sSigns.bluish">
									<label class="custom-control-label" for="chkBluish">{{ $t('message.signsBluish') }}</label>
								</div>
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="chkDiarrhea" v-model="sSigns.diarrhea">
									<label class="custom-control-label" for="chkDiarrhea">{{ $t('message.signsDiarrhea') }}</label>
								</div>
							<!-- Survey Section 3 medicar condition-->
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
        sSigns:{
            id: false,
            chest: false,
            exhaustation: false,
            arouse: false,
            bluish: false,
            diarrhea: false
            },
            corona:0
        }
    },
    methods:{
          next(){
            
            	//Warning signals
				if (this.sSigns.chest)
					this.corona += 5;
				if (this.sSigns.exhaustation)
					this.corona ++;
				if (this.sSigns.arouse)
					this.corona +=2;
				if (this.sSigns.bluish)
					this.corona +=2;
				if (this.sSigns.diarrhea)
					this.corona ++;
            this.$emit('sSigns', this.sSigns);
            this.$emit('sSignsCorona', this.corona);
        }
    },
    Props: {
        sSigns: Object
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