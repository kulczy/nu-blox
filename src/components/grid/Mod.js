export default {
    props: [ 'mod', 'index', 'col' ],

    data() {
        return {
            titleIsEditing: false
        }
    },

    ready() {
        const _self = this;

        // fix dropdown z-index
        $(_self.$el).on('show.bs.dropdown', function () {
            $(this).addClass('dropdown-z-index');
        }).on('hide.bs.dropdown', function () {
            $(this).removeClass('dropdown-z-index');
        });

        // input show hide
        this.titleInput = $(_self.$el).find('input');
        this.titleInput.blur(function(){
            _self.titleIsEditing = false;
        }).keyup(function(e){
            if(e.keyCode == 13) {
                _self.titleIsEditing = false;
            }
        });
    },

    methods: {
        startEditTitle() {
            const _self = this;
            _self.titleIsEditing = true;
            setTimeout(function(){
                _self.titleInput.select();
            }, 1);
        }
    }
}
