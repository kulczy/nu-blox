import generateID from './generateID';

module.exports = {

    // default module
    mod( moduleType = 'text' ) {
        return { 'type': 'module', 'id': generateID('mod'), 'moduleType': moduleType, 'title': moduleType+' (kliknij żeby zmienić tytuł)', settings: {} };
    },

    // default column
    col( size = 12 ) {
        return { 'id': generateID('col'), 'type': 'col', '_children': [], settings: {'size_lg': size, 'size_md': size, 'size_sm': size, 'size_xs': size} };
    },

    // default row
    row( layout = [12] ) {
        const row = { 'id': generateID('row'), 'type': 'row', '_children': [], 'title': 'wiersz (kliknij żeby zmienić tytuł)', settings: {} };
        for ( var i = 0; i < layout.length; i++ ) {
            row._children.push( this.col( layout[i] ) );
        }
        return row;
    },

    // default panel
    panel() {
        const panel = { 'id': generateID('pan'), 'type': 'panel', '_children': [], settings: {} };
        panel._children.push( this.row() );
        return panel;
    }
};
