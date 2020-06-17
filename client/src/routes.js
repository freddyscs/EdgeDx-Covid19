import Login from './components/login/Login.vue' 
import Survey from './components/survey/Survey.vue'
import Results from './components/results/results-covid.vue'
import Dashboard from './components/dashboard/dashboard.vue'
import SurveyCa from './components/survey-ca/SurveyCa.vue'

export const routes = [
    {path: '/', component: Survey},
    {path: '/home', component: Survey},
    {path: '/login', component: Login},
    {path: '/results', component: Results},
    {path: '/dashboard', component: Dashboard},
    {path: '/ca', component: SurveyCa}
];