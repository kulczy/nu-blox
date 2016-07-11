module.exports = {
    col: function( size = 12 ) {
        return { 'type': 'col', '_children': [], 'size_lg': size };
    },
    row: function( layout = [12] ) {
        var row = { 'type': 'row', '_children': [] };
        for ( var i = 0; i < layout.length; i++ ) {
            row._children.push( this.col( layout[i] ) );
        }
        return row;
    },
    panel: function() {
        var panel = { 'type': 'panel', '_children': [] };
        panel._children.push( this.row() );
        return panel;
    }
};
