<script src="./Col.js"></script>
<template>

    <div class="nublox-col nublox-col-{{col.settings[displaysize]}}">

        <!-- column options -->
        <div class="nublox-col-options">
            <div>
                <div class="dropdown">
                    <div class="nublox-col-drop" data-toggle="dropdown"><i class="fa fa-ellipsis-v"></i></div>
                    <ul class="dropdown-menu">
                        <li><span @click="this.$dispatch('openModal', 'settings', col)"><i class="fa fa-cog"></i> Ustawienia</span></li>
                        <li v-if="row.length > 1"><span @click="this.$dispatch('removeElement', row, index)"><i class="fa fa-trash"></i> Usuń</span></li>
                    </ul>
                </div>
            </div>
            <div>
                <!-- {{col.settings.size_lg}} / 12 -->
                {{col.settings[displaysize]}} / 12
            </div>
        </div>

        <!-- load row or module component -->
        <div class="nublox-col-wrapper" @click.self="(placeholder ? this.$dispatch('openModal', 'add', col) : null)" :class="{ 'nublox-col-wrapper-placeholder': placeholder }">
            <div v-dragable-for="element in col._children" options='{ "group": "modules", "handle": ".nublox-sort-handle", "animation": "150" }' class="nublox-mod-wrapper">
                <template v-if="element.type == 'row'">
                    <grid-mod-row :mod="element" :index="$index" :col="col._children"></grid-mod-row>
                </template>
                <template v-if="element.type == 'module'">
                    <grid-mod :mod="element" :index="$index" :col="col._children"></grid-mod>
                </template>
            </div>
        </div>

        <!-- add module -->
        <div v-if="!placeholder" class="nublox-col-addmodule">
            <div @click="this.$dispatch('openModal', 'add', col)" class="nublox-col-addmodule-btn"><i class="fa fa-plus"></i></div>
        </div>

    </div>

</template>
