import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMinus, faPlus, faBars, faCarSide } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add([ faMinus, faPlus, faCarSide, faBars ])

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
