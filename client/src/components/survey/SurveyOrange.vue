<template>
    <div class="form-box"> 
       <div class="padding-box">
			<div class="alert alert-warning" role="alert">
				<h4 class="alert-heading">{{ $t('message.orangeTitle') }}</h4>
			<p>{{ $t('message.orangeSubTitle') }}</p>
			<hr>
			<p class="mb-0">{{ $t('message.orangeContent') }}</p>
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