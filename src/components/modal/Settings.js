export default {
    props: [ 'place', 'newsettings' ],

    events: {
        modalSubmit() {
            this.place.settings = this.newsettings;
            $('#nublox-modal').modal('hide');
        }
    }
}
