<template>
    <div>
        <div class="col justify-content-md-center bg-light form-box">
		<div class="padding-box">
			<div class="alert alert-danger" role="alert">
				<h4 class="alert-heading">{{ $t('message.redTitle') }}</h4>
				<p>{{ $t('message.redSubTitle') }}</p>
				<hr>
		        <p class="mb-0">{{ $t('message.redContent') }}</p>
			</div>
		</div>
        <div class="row bg-light justify-content-center align-items-center padding-box" >
			<div class="input-group-append">
				<button class="btn btn-outline-secondary btn-lg" type="button" v-on:click="next()">{{ $t('message.redAppointment') }}</button>
			</div>
		</div>
     </div>
    </div>
</template>

<script>
import Appointment from '../appointment/Appointment.vue'
export default {
    data: function() {
        return {
            sRed:{
                id:1,
                showAppointment: false
            }
        }
    },
    methods:{
        next(){
            //Sending variables to Survey component
            this.sRed.showAppointment = true;
            this.$emit('sRed', this.sRed);
            console.log("emitido");
        }

    },
    Props: {
        sRed: Object
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