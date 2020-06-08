<template>
    <div>
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
    </div>
</template>

<script>
export default {
    data: function() {
        return {
        corona: 0,
		result: 0,
		loading: false,
		success: true,
		warning: false,
		danger: false
        }
    },
    methods: {
    analyse: function(){
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
            this.corona = 10;
        },
    next(){
            this.$emit('sPersonal', this.sPersonal);
            }
    },
    Props: {
        sCalculation: Object
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