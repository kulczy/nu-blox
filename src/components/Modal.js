import Pick from './Pick.vue';

export default
{
    components: { Pick },

    data: function() {
        return {
            modalAction: '',
            insertPlace: '',
            header: ''
        };
    },

    events:
    {
        'open-modal': function( action, place, header ) {
            this.modalAction = action;
            this.insertPlace = place;
            this.header = header;
            $( '#nuBlox-modal' ).modal();
        }
    }
};
