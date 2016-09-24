<script src="./Add.js"></script>
<template>

    <div class="nublox-modal-add">

        <!-- Nav tabs -->
        <ul class="nav nav-tabs nublox-addactive" role="tablist">
            <li role="presentation"><a href="#module" role="tab" data-toggle="tab">Moduł</a></li>
            <li role="presentation"><a href="#row" role="tab" data-toggle="tab">Wiersz</a></li>
            <li v-if="elements.templates.length" role="presentation"><a href="#template" role="tab" data-toggle="tab">Zestaw</a></li>
            <li v-if="elements.clipboard.length" role="presentation"><a href="#clipboard" role="tab" data-toggle="tab">Schowek</a></li>
        </ul>

        <!-- Tab panes -->
        <div class="tab-content nublox-addactive">
            <div role="tabpanel" class="tab-pane row" id="module">
                <div v-for="module in elements.modules" class="col-xs-6 col-sm-4 col-md-3">
                    <div class="nublox-add-mod" data-dismiss="modal" @click="this.$dispatch('addModule', this.place, module.type, isPanel, this.index)">
                        <div class="nublox-add-mod-image">{{{displayImage(module)}}}</div>
                        <div class="nublox-add-mod-name">{{module.name}}</div>
                    </div>
                </div>
            </div>
            <div role="tabpanel" class="tab-pane row" id="row">
                <div v-for="row in elements.rows" class="col-xs-6 col-sm-4 col-md-3">
                    <div class="nublox-add-mod" data-dismiss="modal" @click="this.$dispatch('addRow', this.place._children, this.index, row.template)">
                        <div class="nublox-add-mod-image">{{{displayRowImage(row)}}}</div>
                        <div class="nublox-add-mod-name">{{row.name}}</div>
                    </div>
                </div>
            </div>
            <div v-if="elements.templates.length" role="tabpanel" class="tab-pane row" id="template">
                <div v-for="template in elements.templates" class="col-xs-6 col-sm-4 col-md-3">
                    <div class="nublox-add-mod" data-dismiss="modal" @click="this.$dispatch('addTemplate', this.place._children, this.index, template.template)">
                        <div class="nublox-add-mod-image">{{{displayImage(template)}}}</div>
                        <div class="nublox-add-mod-name">{{template.name}}</div>
                    </div>
                </div>
            </div>
            <div v-if="elements.clipboard.length" role="tabpanel" class="tab-pane row" id="clipboard">
                <div v-for="template in elements.clipboard" class="col-xs-6 col-sm-4 col-md-3">
                    <div class="nublox-add-mod" @click="this.$dispatch('pasteClipboard', this.place, template, $index, isPanel, this.index)">
                        <div class="nublox-add-mod-image"><i class="fa fa-clipboard"></i></div>
                        <div class="nublox-add-mod-name">{{template.title}}</div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>
