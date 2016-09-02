import Vue from 'vue'
import Nublox from './Nublox.vue'

import VueDragula from 'vue-dragula'
Vue.use(VueDragula);

new Vue({
    el: 'body',
    components: { Nublox },

    created: function () {
        Vue.vueDragula.options('modules', {
            moves: function (el, source, handle, sibling) {
                return handle.classList.contains('drag-handle');
            },
        })
    }
});
