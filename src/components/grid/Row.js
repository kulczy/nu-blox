import gridCol from './Col.vue';
import grid from '../../helpers/defaults';

export default {
    components: { gridCol },
    props: [ 'index', 'parent' ],

    computed: {
        row() {
            return this.parent[this.index];
        }
    }
}
