import Vue from 'vue';
import Nublox from './components/Blox.vue';
import defaults from './helpers/defaults.js';

new Vue({
    el: 'body',
    components: { Nublox },
    filters: {},
    data: {
        mapString: '', // Main data on string format
        mapJson: '', // Main data on json format
        modules: '', // Available modules
        mainVue: Vue // Vue instance
    },
    watch: {
        'mapJson': {
            deep: true,
            handler: function( val, oldVal ) {
                this.mapString = encodeURIComponent( JSON.stringify( val ) ); // Json to string
            }
        }
    },
    ready: function() {
        if ( this.mapString ) {
            this.mapJson = JSON.parse( decodeURIComponent( this.mapString ) ); // Decode string to JSON if exist
        } else {
            this.mapJson = defaults.panel(); // Create default panel if JSON not exist
        }
    }
});

Vue.filter( 'toIcon', function( value ) {
    var i = 0;
    for ( i; i < this.modules.length; i++ ) {
        if ( this.modules[i].type === value ) {
            return this.modules[i].icon;
        }
    }
});
