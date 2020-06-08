import Login from './components/login/Login.vue' 
import Survey from './components/survey/Survey.vue'
import Results from './components/results/results-covid.vue'

export const routes = [
    {path: '/', component: Survey},
    {path: '/home', component: Survey},
    {path: '/login', component: Login},
    {path: '/results', component: Results}

];