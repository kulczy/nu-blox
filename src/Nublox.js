// components
import Panel from './components/Panel.vue';

// modal components
import Modal from './components/Modal.vue';
import AddRow from './components/modal/AddRow.vue';
import AddModule from './components/modal/AddModule.vue';

// helpers
import grid from './helpers/defaults';
import isJson from './helpers/isJson';

export default {
    components: { Panel, Modal, AddRow, AddModule },
    props: [ 'output' ],

    data() {
        return {
            outputArea: '', // textarea to hold output string
            bloxString: '', // output in String format
            bloxJson: '', // output in JSON format
            displayJson: '', // displayed JSON
            displayNav: [], // displayed mavigator
            modalInfo: { title: '', footer: false, modalComp: '', place: null} // default data for modal
        }
    },

    // computed: {
    //     b: function () {
    //         return this.a + 1
    //     }
    // },

    watch: {
        'bloxJson': {
            deep: true,
            handler(val, oldVal) {
                this.bloxString = encodeURIComponent(JSON.stringify(val)); // Json to string
                this.outputArea.value = this.bloxString; // pass string to output element
            }
        }
    },

    ready() {
        // assign output element to variable
        this.outputArea = document.getElementById(this.output);
        // check if JSON exist
        if (isJson(this.outputArea.value)) {
            this.bloxJson = JSON.parse(decodeURIComponent(this.outputArea.value)); // decode JSON and assign to variable
        } else {
            this.bloxJson = grid.panel(); // create new empty row
            this.bloxJson._children[0]._children[0]._children.push(grid.mod()); // push empty text module
        }
        this.displayJson = this.bloxJson; // sync output JSON with display JSON
        this.displayNav.push(this.bloxJson); // add 'home' to display navbar
    },

    events: {
        openModal(action, place) {
            $('#nublox-modal').modal();
            switch (action) {
                case '+mod':
                    this.modalInfo = { title: 'Dodaj moduł', modalComp: 'AddModule', place };
                    break;
                case '+row':
                    this.modalInfo = { title: 'Dodaj wiersz', modalComp: 'AddRow', place };
                    break;

            }
        },

        addModule(col, type) {
            const newModule =  grid.mod(type);
            col._children.push(newModule);
        },

        addColumn(row) {
            const newColumn = grid.col();
            row._children.push( newColumn );
        },

        addRow(arr, index, layout) {
            const newRow = grid.row( layout );
            arr.splice( index + 1, 0, newRow );
        },

        reloadDisplayedJson(displayStart) {
            const display = { _children: [], navName: 'Siemka' };
            display._children[0] = displayStart;
            this.displayJson = display; // update display
            this.displayNav.push(this.displayJson); // add to nav
        },

        reloadDisplayedJsonFromNav(displayStart, index) {
            this.displayJson = displayStart; // update display
            this.displayNav.splice(index + 1, 999); // remove children from navigator
        }
    }
}
