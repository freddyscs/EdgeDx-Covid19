<template>
    <div>DASHBOARD {{token}}
        <button type="button" class="btn btn-lg btn-primary btn-block"  v-on:click="killToken()" >kill token</button>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
             token: localStorage.getItem('token') || null,
          
        }
    },
    methods:{
        killToken: function(){
        
        this.token = localStorage.removeItem('token');
      }
    },
    Props: {
        
    }
}
</script>
<style scoped>

</style>