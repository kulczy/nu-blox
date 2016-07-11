import Modal from './Modal.vue';
import Modtitle from './Modtitle.vue';
import defaults from '../helpers/defaults.js';
import generateID from '../helpers/generate_id.js';

export default
{
    props: [ 'modules' ],
    components: { Modal, Modtitle },
    data: function() {
        return {
            clipboard: '',
            clipboardToRemove: ''
        };
    },

    methods: {

        // Add module - first paramert is place where add, and second is type of new module
        // You can add module from Modal component via events or add this function after click i Blox component
        addMod: function( col, type ) {
            var id = generateID();
            var name = $.grep( this.modules, function( e ) {
                return e.type === type;
            }); // Find module name
            var newModule = { 'type': 'module', 'id': id, 'moduleType': type, 'title': name[0].name };
            col._children.push( newModule );
            $( 'body' ).trigger( 'nuBlox.add', [ id, type ] ); // Trigger add event
        },

        addCol: function( row ) {
            var newColumn = defaults.col();
            row._children.push( newColumn );
        },

        addRow: function( index, layout ) {
            var newRow = defaults.row( layout );
            this.$root.mapJson._children.splice( index + 1, 0, newRow );
        },

        remove: function( toRemove, index, noConfirm ) {
            var confirmMsg = 'Na pewno chcesz usunąć wybrany element? Operacja jest nieodwracalna.'; // Confirm message
            toRemove = ( ! toRemove ) ? this.$root.mapJson : toRemove;  // Condition for removing row's
            if ( 'module' !== toRemove._children[index].type && 1 === toRemove._children.length ) { // Remove only if it is not last column or row
                $.nuAlert( 'warning', 'Nie można usunąć ostatniego elementu!' );
            } else {
                if ( 1 === noConfirm ) {
                    toRemove._children.splice( index, 1 );
                } else {
                    if ( true === confirm( confirmMsg ) ) {
                        toRemove._children.splice( index, 1 );
                    }
                }
            }
        },

        size: function( col, action ) {
            var oldSize = col.size_lg;
            if ( '+' === action && oldSize < 12 ) {
                oldSize++;
            } else if ( '-' === action && oldSize > 1 ) {
                oldSize--;
            }
            this.$root.mainVue.set( col, 'size_lg', oldSize );
        },

        edit: function( moduleId ) {
            $( 'body' ).trigger( 'nuBlox.edit', [ moduleId ] );
        },

        callModal: function( action, place, header ) {
            this.$broadcast( 'open-modal', action, place, header );
        },

        // Clipboard functions
        clipClear: function() {
            this.clipboard = '';
            this.clipboardToRemove = '';
        },

        clipCut: function( mod, col, index ) {
            this.clipboard = mod; // Sign copied module to var
            this.clipboardToRemove = [col, index]; // Sign copied module to remove later
        },

        clipPaste: function( col, index ) {
            this.remove( this.clipboardToRemove[0], this.clipboardToRemove[1], 1 ); // Remove module in old place
            col._children.splice( index + 1, 0, this.clipboard ); // Add module to new place
            this.clipClear(); // Clear clipboard
        }
    },

    ready: function() {
        this.$root.modules = this.modules;
    }
};
