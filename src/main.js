import './assets/main.css'
import './index.css'
import VueKinesis from "vue-kinesis";
import router from '@/router';

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.use(VueKinesis);
app.use(router)

app.mount("#app");