// components
import Panel from './components/Panel.vue';

// modal components
import Modal from './components/Modal.vue';
import Add from './components/modal/Add.vue';
import Settings from './components/modal/Settings.vue';

// helpers
import grid from './helpers/defaults';
import isJson from './helpers/isJson';
import defaultElements from './helpers/defaultInputs';
import generateID from './helpers/generateID';

export default {
    components: { Panel, Modal, Add, Settings },
    props: [ 'output', 'input', 'testtemplate' ],

    data() {
        return {
            outputArea: '', // textarea to hold output string
            bloxString: '', // output in String format
            bloxJson: '', // output in JSON format
            displayJson: '', // displayed JSON
            displayNav: [], // displayed mavigator
            displaySize: 'size_lg', // display size
            elements: {}, // all available modules and templates
            modalInfo: { title: null, footer: false, modalComp: null, place: null, newSettings: null, index: null }, // default data for modal
        }
    },

    watch: {
        'bloxJson': {
            deep: true,
            handler(val, oldVal) {
                this.bloxString = encodeURIComponent(JSON.stringify(val)); // Json to string
                this.outputArea.value = this.bloxString; // pass string to output element
                // this is for testing new templates
                if(this.testtemplate) this.testtemplate.value = encodeURIComponent(JSON.stringify(val._children[0]));
            }
        }
    },

    ready() {
        // assign output element to variable
        this.outputArea = document.getElementById(this.output);
        // textarea for testing new templates
        this.testtemplate = document.getElementById(this.testtemplate);
        // check if JSON exist
        if (isJson(this.outputArea.value)) {
            this.bloxJson = JSON.parse(decodeURIComponent(this.outputArea.value)); // decode JSON and assign to variable
        } else {
            this.bloxJson = grid.panel(); // create new empty row
            this.bloxJson._children[0]._children[0]._children.push(grid.mod()); // push empty text module
        }
        this.displayJson = this.bloxJson; // sync output JSON with display JSON
        this.displayNav.push(this.bloxJson); // add 'home' to display navbar

        // mix inputs data with defaults
        let allElements = {};
        allElements.modules = defaultElements.modules.concat(this.input.modules);
        allElements.templates = defaultElements.templates.concat(this.input.templates);
        allElements.rows = defaultElements.rows;
        allElements.clipboard = []; // create clipboard
        this.elements = allElements;
    },

    events: {
        openModal(action, place, index = 999) {
            $('#nublox-modal').modal();
            switch (action) {
                case 'add':
                    this.modalInfo = { title: 'Dodaj', modalComp: 'Add', place, index };
                    break;
                case 'settings':
                    const newSet = {}; for (var attrname in place.settings) { newSet[attrname] = place.settings[attrname]; } // create copy of setting
                    this.modalInfo = { title: 'Ustawienia', modalComp: 'Settings', footer: true, place, newSettings: newSet };
                    break;
            }
        },

        addModule(col, type, isPanel, index) {
            const newModule =  grid.mod(type);
            if (isPanel === false) {
                col._children.push(newModule);
            } else {
                let newRow = grid.row([12]);
                newRow._children[0]._children.push(newModule);
                col._children.splice( index + 1, 0, newRow );
            }
        },

        addColumn(row) {
            const newColumn = grid.col();
            row._children.push( newColumn );
        },

        addRow(arr, index, layout) {
            const newRow = grid.row( layout );
            arr.splice( index + 1, 0, newRow );
        },

        addTemplate(arr, index, template) {
            let tpl = JSON.parse(decodeURIComponent(template));
            let newTpl = this.addTemplate_ReplaceId(tpl);
            arr.splice( index + 1, 0, newTpl );
        },

        removeElement(arr, index) {
            const confirmMsg = 'Na pewno chcesz usunąć wybrany element? Operacja jest nieodwracalna.'; // Confirm message
            if (confirm(confirmMsg)) {
                arr.splice( index, 1 );
            }
        },

        editModule(mod) {
            const info = { id: mod.id, type: mod.moduleType, title: mod.title };
            $('body').trigger('nublox.edit', info);
        },

        toClipboard(element, arr, index) {
            this.elements.clipboard.push(element);
            arr.splice( index, 1 );
        },

        pasteClipboard(col, template, clipIndex, isPanel, index) {
            if (isPanel === false) {
                col._children.push(template);
            } else {
                if (template.type === 'row') {
                    col._children.splice( index + 1, 0, template );
                } else {
                    let newRow = grid.row([12]);
                    newRow._children[0]._children.push(template);
                    col._children.splice( index + 1, 0, newRow );
                }
            }
            this.elements.clipboard.splice( clipIndex, 1 );
            $('#nublox-modal').modal('hide');
        },

        reloadDisplayedJson(displayStart) {
            const display = { _children: [], navName: displayStart.title };
            display._children[0] = displayStart;
            this.displayJson = display; // update display
            this.displayNav.push(this.displayJson); // add to nav
        },

        reloadDisplayedJsonFromNav(displayStart, index) {
            this.displayJson = displayStart; // update display
            this.displayNav.splice(index + 1, 999); // remove children from navigator
        }
    },

    methods: {
        addTemplate_ReplaceId(template) {
            const prefix = template.type.substring(0,3);
            template.id = generateID(prefix);
            if(template._children) {
                for (let element of template._children) {
                    this.addTemplate_ReplaceId(element);
                }
            }
            return template;
        }
    }

}
