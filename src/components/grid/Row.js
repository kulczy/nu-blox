import gridCol from './Col.vue';
import grid from '../../helpers/defaults';

export default {
    components: { gridCol },
    props: [ 'row', 'index', 'parent', 'displaysize' ],

    computed: {
        parentChildren() {
            return this.parent._children;
        },

        parentType() {
            return (this.parent.type === 'panel') ? true : false;
        }
    }
}
