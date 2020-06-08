<template>
    <div>
        <form class="form-signin">
            <img class="mb-4" src="../../assets/images/edgedx-large-60.png" alt="">
            <h1 class="h3 mb-3 font-weight-normal">{{ $t('message.PleaseSignIn') }}</h1>
            <label for="inputEmail" class="sr-only">{{ $t('message.Email') }}</label>
            <input type="email" id="inputEmail" v-model="email" class="form-control" :placeholder="$t('message.EmailAddress')" required autofocus>
            <label for="inputPassword" class="sr-only">{{ $t('message.Password') }}</label>
            <input type="password" id="inputPassword" v-model="password" class="form-control" :placeholder="$t('message.Password')" required>
            <div class="checkbox mb-3">
                <label>
                <input type="checkbox" value="remember-me"> Remember me
                </label>
            </div>
            <button type="button" class="btn btn-lg btn-primary btn-block"  v-on:click="login()" >{{ $t('message.SignIn') }}</button>
        </form>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

const UrlLogin = "/users/login";
export default {
    data: function() {
        return {
          email: '',
          password: '',
          credentials: {},
        }
    },
    methods:{
      login: function(){
        this.credentials = {
            email: this.email,
            password: this.password
        }
        axios.post(UrlLogin, this.credentials)
        .then(response => {
            this.info = response.data;
            console.log(this.info.token);
            let token = this.info.token;
            //Axios.defaults.headers.common['Authorization'] = 'Bearer ' + autho;
            const auth = {
                    headers: {Authorization:'Bearer ' + token} 
                }

            axios.get('/users',auth).then(result => { 
            console.log(result.data)
            })

            alert(result.data);
            })
            .catch(error => {
            console.log(error);
            
            })
            .finally(() => {
              //console.log("Final");
            });

      }

    },
    Props: {
        
    }
}
</script>
<style scoped>
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>