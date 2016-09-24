<script src="./ModRow.js"></script>
<template>

    <div class="nublox-mod nublox-mod-row">
        <div class="nublox-mod-info">
            <div class="nublox-mod-title">
                <span v-show="!titleIsEditing" @click="startEditTitle">{{mod.title}}</span>
                <div v-show="titleIsEditing" class="nublox-mod-title-edit nublox-mod-title-edit-row"><input type="text" v-model="mod.title"></div>
            </div>
            <div class="nublox-mod-type">wiersz</div>
        </div>

        <!-- options -->
        <div class="nublox-mod-drop nublox-sort-handle dropdown nublox-readonly">
            <div class="nublox-mod-drop" data-toggle="dropdown"><i class="fa fa-ellipsis-v"></i></div>
            <ul class="dropdown-menu">
                <li><span @click="this.$dispatch('openModal', 'settings', mod)"><i class="fa fa-cog"></i> Ustawienia</span></li>
                <li><span @click="this.$dispatch('toClipboard', mod, col, index)"><i class="fa fa-cut"></i> Przenieś do schowka</span></li>
                <li><span @click="this.$dispatch('removeElement', col, index)"><i class="fa fa-trash"></i> Usuń</span></li>
            </ul>
        </div>
        <div @click="this.$dispatch('reloadDisplayedJson', mod)" class="nublox-mod-edit"><i class="fa fa-angle-right"></i></div>
    </div>

</template>
