<template>
    <div>
        <!--edgedx-AppointmentDate :sId="survey"></edgedx-AppointmentDate-->
        <edgedx-AppointmentDummy :sId="survey"></edgedx-AppointmentDummy>
    </div>
</template>

<script>
import AppointmentDate from './AppointmentDate.vue'
import AppointmentDummy from './AppointmentDummy.vue'
export default {
    data: function() {
        return {
            
        }
    },
    methods:{

    },
    props: ['survey']
}
</script>
<style scoped>
</style>