import gridRow from './Row.vue';
import gridMod from './Mod.vue';
import gridModRow from './ModRow.vue';

export default {
    components: { gridRow, gridMod, gridModRow },
    props: [ 'col' ],

    ready() {
        const _self = this;

        // init resize
        $(_self.$el).resizable({
            grid: [ 0, 100000000 ],
            containment: 'parent',
            stop: function( event, ui ) {
                var panelWidth = $('#nublox').width();
                var elementWidth = ui.size.width;
                var colWidth = panelWidth/12;
                var finalCols = Math.round(elementWidth/colWidth);
                if (finalCols < 1) finalCols = 1;
                if (finalCols > 12) finalCols = 12;
                $(this).removeAttr('style');
                _self.changeSize(finalCols);
            }
        });
    },

    methods: {
        changeSize(size) {
            this.col.size_lg = size;
        }
    }
}
