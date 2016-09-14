import gridRow from './Row.vue';
import gridMod from './Mod.vue';
import gridModRow from './ModRow.vue';

export default {
    components: { gridRow, gridMod, gridModRow },
    props: [ 'col', 'index', 'row', 'displaysize' ],

    computed: {
        placeholder() {
            return (this.col._children.length < 1) ? true : false;
        }
    },

    ready() {
        const _self = this;

        // init resize
        $(_self.$el).resizable({
            grid: [ 0, 100000000 ],
            handles: 'se',
            containment: 'parent',
            stop: function( event, ui ) {
                let panelWidth = $('#nublox').width();
                let elementWidth = ui.size.width;
                let colWidth = panelWidth/12;
                let finalCols = Math.round(elementWidth/colWidth);
                if (finalCols < 1) finalCols = 1;
                if (finalCols > 12) finalCols = 12;
                $(this).removeAttr('style');
                _self.changeSize(finalCols);
            }
        });
    },

    methods: {
        changeSize(size) {
            this.col.settings[this.displaysize] = size;
        }
    }
}
