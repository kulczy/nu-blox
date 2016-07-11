<script src="./Pick.js"></script>
<template>

    <!-- modules list -->
    <div class="row" v-if="$parent.modalAction === 'modules'">
        <div class="col-xs-3" v-for="module in $root.modules">
            <div class="nuBlox-mod nb-mod-pick" v-on:click="pickedModule( module.type )">
                <div class="nuBlox-mod-info">
                    <div class="nb-mod-info-icon"><i class="fa fa-{{ module.icon }}"></i></div>
                    <div class="nb-mod-info-title">{{ module.name }}</div>
                </div>
            </div>
        </div>
    </div>

    <!-- rows list -->
    <div class="row" v-if="$parent.modalAction === 'rows'">
        <div class="col-xs-3" v-for="row in rowLayouts">
            <div class="nuBlox-mod nb-mod-pick" v-on:click="pickedRows( row )">
                <div class="row rowSelect">
                    <div v-for="col in row" track-by="$index">
                        <div class="rowSelectCol col-xs-{{ col }}">
                            <span></span><span></span><span></span><span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
