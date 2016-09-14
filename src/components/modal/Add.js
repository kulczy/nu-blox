export default {
    props: [ 'place', 'elements', 'index' ],

    computed: {
        isPanel() {
            return (this.place.type === 'panel') ? true : false;
        },
    },

    watch: {
        place: {
            deep: true,
            handler: function () { this.activateFirstTab(); },
        },
        elements: {
            deep: true,
            handler: function () { this.activateFirstTab(); },
        }
    },

    ready() {
        this.activateFirstTab();
    },

    methods: {
        activateFirstTab() {
            $(this.$el).find('.nublox-addactive').each(function(index, el) {
                $(this).children('').removeClass('active');
                $(this).children('').first().addClass('active');
            });
        }
    }
}
