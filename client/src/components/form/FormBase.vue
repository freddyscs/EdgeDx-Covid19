<template>
    <div>
      Base {{ company }} otro: {{author.id}} variableExtr:{{author.title}}
      <edgedx-FormStart :company="company" @nombreMetodo="author = $event" @variableExtra="variableExtr = $event"></edgedx-FormStart>
      BASE
    </div>
</template>
<script>
import FormStart from './FormStart.vue'
export default {
    data: function() {
        return {
            company: 'EdgeDx',
            otro: 'vacios',
            variableExtr: 'vacio',
            author: Object

        }
    }
}
</script>
<style scoped>

</style>