export default
{
    props: [ 'tit', 'id' ],
    data: function() {
        return {
            disable: true
        };
    },

    methods: {
        edit: function( e ) {
            this.disable = false;
        },

        unedit: function() {
            this.disable = true;
        }
    },

    watch: {
        'tit': function( val, oldVal ) {
            if ( 0 === val.length ) {
                this.tit = oldVal;
            } else {
                this.tit = val;
            }
        }
    }
};
