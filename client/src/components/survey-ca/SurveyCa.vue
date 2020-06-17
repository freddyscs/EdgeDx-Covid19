<template>
    <div>
        <transition name="fade" appear>
            <edgedx-SurveyCaStart 
            v-show="sCaShowStart"
            @sCaStart="sCaStart = $event"></edgedx-SurveyCaStart>
        </transition>
        <transition name="fade" appear>
            <edgedx-SurveyCaPersonal 
            @sCaPersonal="sCaPersonal = $event"
            v-show="sCaShowPersonal" ></edgedx-SurveyCaPersonal>
        </transition>
        <transition name="fade" appear>
            <edgedx-SurveyCaSymptoms 
            @sCaSymptoms="sCaSymptoms = $event"
            v-show="sCaShowSymptoms" ></edgedx-SurveyCaSymptoms>
        </transition>
    </div>
</template>

<script>
import SurveyCaStart from './SurveyCaStart.vue'

export default {
    data: function() {
        return {
            sCaStart: Object,
            sCaPersonal: Object,
            sCaSymptoms: Object,
            sCaShowStart: true,
            sCaShowPersonal: false,
            sCaShowSymptoms: false,
        }
    },
    methods:{

    },
    props: {

        
    },
    watch: {
         // Transitions of the screens
        sCaStart: function () {
            this.sCaShowStart=false;
            this.sCaShowPersonal=true;
        },
        sCaPersonal: function(){
            console.log("Recibiendo info personal:", this.sCaPersonal);
            this.sCaShowPersonal=false;
            this.sCaShowSymptoms=true;
        }
    }
}
</script>
<style scoped>
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 0.75s;
}

.fade-leave{
  opacity: 1; 
}

.fade-leave-active{
  opacity: 0;
}
</style>