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
                <div class="text-center alert alert-danger" role="alert" v-show="invalidCredentials">
								{{ $t('message.loginInvalidCredentials') }}
						    </div>
            </div>
            <button type="button" class="btn btn-lg btn-primary btn-block"  v-on:click="login()" >{{ $t('message.SignIn') }}</button>
            <button type="button" class="btn btn-lg btn-primary btn-block"  v-on:click="killToken()" >kill token</button>
        </form>
        {{token}}
        freddyscs@hotmail.com|1234567890
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
          token: localStorage.getItem('token') || null,
          email: '',
          password: '',
          credentials: {},
          invalidCredentials: false
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
            localStorage.setItem('token', this.info.token);
            const auth = {headers: {Authorization:'Bearer ' + localStorage.getItem('token')} };
            this.getData(auth);
            
            })
            .catch(error => {
            this.invalidCredentials = true;
            console.log("this is the error", error);
            
            
            })
            .finally(() => {
              //console.log("Final");
            });

      },
      getData: function(auth){
        axios.get('/users',auth).then(result => { 
            console.log("Data from server:"+result.data)
            }).catch(error => {
            console.log(error);
            })
            .finally(() => {
              //console.log("Final");
            });
            this.$router.push({ path: '/dashboard' })


      },
      killToken: function(){
        
        this.token = localStorage.removeItem('token');
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