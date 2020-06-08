<template>
    <div>
        <b-calendar v-model="date" :date-disabled-fn="dateDisabled"  locale="en-US"></b-calendar>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            date: ''
        }
    },
    methods:{
         dateDisabled(ymd, date) {
        // Disable weekends (Sunday = `0`, Saturday = `6`) and
        // disable days that fall on the 13th of the month
        const weekday = date.getDay()
        const day = date.getDate()
        // Return `true` if the date should be disabled
        return weekday === 0 || weekday === 6 || day === 13
      }
    },
    Props: {
        
    }
}
</script>
<style scoped>
</style>