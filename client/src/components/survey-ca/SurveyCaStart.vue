<template>
    <div class="col form-box padding-box">
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
			<div class="row justify-content-center" >
				<div class="col-md-6 col-sm-12 align-self-center logo-margin" >
				<div class="row justify-content-center">
					<img src="../../assets/images/california-flag-sm.png">
				 </div>
			</div>
			</div>
			<div class="row padding-box" >
				<h1 class="display-8">{{ $t('message.welcome') }}</h1>
			</div>
            <div class="row padding-box" >
                <p class="lead">{{ $t('message.welcomeDescription') }}</p>
				<p class="text-muted"><small>{{ $t('message.welcomeCheckCa') }}</small></p>
			</div>
            
			<div class="row justify-content-center padding-box" >
				<button class="btn btn-success" type="button"  v-on:click="start()" >{{ $t('message.welcomeButton') }}</button>
            </div>					
            <div class="row justify-content-center" >
				<p class="text-muted"><small>{{ $t('message.help') }}</small></p>
            </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
        sCaStart: {
            id: false
         }
        }
    },
    Props: {
        sCaStart: Object,
    },
    methods:{
        start(){
            this.sCaStart.id = true;
            this.$emit('sCaStart', this.sCaStart);
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
</style>