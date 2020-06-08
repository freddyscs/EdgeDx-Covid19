<template>
    <div>
        Aqui empieza el codigo de {{company}}
        <button @click="nombreMetodo()">boton</button>
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
    </div>
</template>

<script>
import FormStart from './FormStart.vue'
export default {
    data: function() {
        return {
            marico: 'elquelolea',
            variableExtra: 'Natural',
            author: {
                id: 1,
                title: 'My Journey with Vue'
                }
        }
    
    },
    Props: {
        author: Object
    },
    methods: {
        nombreMetodo(){
            this.author.title = 'elqueloleeea'
            this.$emit('nombreMetodo', this.author )
        }
    }
}
</script>
<style scoped></style>