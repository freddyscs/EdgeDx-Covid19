<template>
    <div class="form-box">
        <div class="padding-box">
	    	<div class="alert alert-success" role="alert">
				<h4 class="alert-heading">{{ $t('message.greenTitle') }}</h4>
				<p></p>
				<P>{{ $t('message.greenContent1') }}</p>
				<p>{{ $t('message.greenContent2') }}</p>
				<li>{{ $t('message.greenContent3') }}</li>
				<li>{{ $t('message.greenContent4') }}</li>
				<li>{{ $t('message.greenContent5') }}</li>
				<li>{{ $t('message.greenContent6') }}</li>
				<li>{{ $t('message.greenContent7') }}</li>
				<li>{{ $t('message.greenContent8') }}</li>
				<li>{{ $t('message.greenContent9') }}</li>
				<li>{{ $t('message.greenContent10') }}</li>
				<hr>
				<p class="mb-0">{{ $t('message.greenContent11') }}</p>
			</div>
			<div class="text-center"> 
							<a type="button" class="btn btn-secundary" href="/">{{ $t('message.back') }}</a>
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

    },
    Props: {
        
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