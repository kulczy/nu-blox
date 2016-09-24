import Vue from 'vue'
import Nublox from './Nublox.vue'

import VueDragableFor from 'vuedragablefor'
Vue.use(VueDragableFor)

new Vue({
    el: 'body',
    components: { Nublox },

    data() {
        return {
            imgpath: ''
        }
    },
});
