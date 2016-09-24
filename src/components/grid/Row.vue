<script src="./Row.js"></script>
<template>

    <div class="nublox-row">

        <!-- row options -->
        <div class="nublox-row-options nublox-readonly">
            <div class="dropdown">
                <div class="nublox-row-drop" data-toggle="dropdown"><i class="fa fa-ellipsis-v"></i></div>
                <ul class="dropdown-menu">
                    <li><span @click="this.$dispatch('openModal', 'settings', row)"><i class="fa fa-cog"></i> Ustawienia</span></li>
                    <li v-if="parentChildren.length > 1"><span @click="this.$dispatch('toClipboard', row, parentChildren, index)"><i class="fa fa-cut"></i> Przenieś do schowka</span></li>
                    <li v-if="parentChildren.length > 1"><span @click="this.$dispatch('removeElement', parentChildren, index)"><i class="fa fa-trash"></i> Usuń</span></li>
                </ul>
            </div>
            <div class="nublox-row-addcol" @click="this.$dispatch('addColumn', row)"><i class="fa fa-pause"></i></div>
        </div>

        <!-- looping col components -->
        <grid-col v-for="col in row._children" :col="col" :index="$index" :row="row._children" :displaysize="displaysize"></grid-col>

        <!-- add row -->
        <div v-if="parentType" class="nublox-row-addmodule nublox-readonly">
            <div @click="this.$dispatch('openModal', 'add', parent, index)" class="nublox-row-addmodule-btn"><i class="fa fa-plus"></i></div>
        </div>

    </div>

</template>
