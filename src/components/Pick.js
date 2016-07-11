export default
{
    data: function() {
        return {
            rowLayouts: [ [12], [6, 6], [4, 4, 4], [3, 3, 3, 3] ]
        };
    },

    methods:
    {
        pickedModule: function( type ) {
            this.$dispatch( 'add-module', this.$parent.insertPlace, type );
            $( '#nuBlox-modal' ).modal( 'hide' );
        },

        pickedRows: function( layout ) {
            this.$dispatch( 'add-row', this.$parent.insertPlace, layout );
            $( '#nuBlox-modal' ).modal( 'hide' );
        }
    }
};
