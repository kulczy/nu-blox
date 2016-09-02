import generateID from './generateID';

module.exports = {

    // default module
    mod( moduleType = 'text' ) {
        return { 'type': 'module', 'id': generateID('mod'), 'moduleType': moduleType, 'title': moduleType };
    },

    // default column
    col( size = 12 ) {
        return { 'id': generateID('col'), 'type': 'col', '_children': [], 'size_lg': size };
    },

    // default row
    row( layout = [12] ) {
        const row = { 'id': generateID('row'), 'type': 'row', '_children': [] };
        for ( var i = 0; i < layout.length; i++ ) {
            row._children.push( this.col( layout[i] ) );
        }
        return row;
    },

    // default panel
    panel() {
        const panel = { 'id': generateID('pan'), 'type': 'panel', '_children': [] };
        panel._children.push( this.row() );
        return panel;
    }
};
