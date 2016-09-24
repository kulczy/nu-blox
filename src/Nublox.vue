<style lang="less" src="./less/Nublox.less"></style>
<script src="./Nublox.js"></script>
<template>

    <div id="nublox">

        <!-- navbar -->
        <div id="nublox-navbar" class="row">
            <div class="col-xs-8">
                <div class="nublox-navbar-breadcrumb">
                    <ol class="breadcrumb">
                        <li v-for="item in displayNav">
                            <span @click="this.$emit('reloadDisplayedJsonFromNav', item, $index)">{{ (item.navName) ? item.navName : 'Home' }}</span>
                        </li>
                    </ol>
                </div>
            </div>
            <div class="col-xs-4 text-right nublox-readonly">
                <div class="nublox-navbar-display">
                    <span>Rozmiaru ekranu:</span>
                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-default" v-bind:class="{ 'btn-success': displaySize === 'size_lg'}" @click="displaySize = 'size_lg'"><i class="fa fa-tv"></i></button>
                        <button type="button" class="btn btn-default" v-bind:class="{ 'btn-success': displaySize === 'size_md'}" @click="displaySize = 'size_md'"><i class="fa fa-laptop"></i></button>
                        <button type="button" class="btn btn-default" v-bind:class="{ 'btn-success': displaySize === 'size_sm'}" @click="displaySize = 'size_sm'"><i class="fa fa-tablet"></i></button>
                        <button type="button" class="btn btn-default" v-bind:class="{ 'btn-success': displaySize === 'size_xs'}" @click="displaySize = 'size_xs'"><i class="fa fa-mobile-phone"></i></button>
                    </div>
                    <span @click="this.$dispatch('openModal', 'settings', bloxJson)" class="nublox-navbar-settings">
                        <i class="fa fa-ellipsis-v"></i>
                    </span>
                </div>
            </div>
        </div>

        <!-- main panel -->
        <panel :json="displayJson" :displaysize="displaySize"></panel>

        <!-- modal -->
        <modal :info="modalInfo">
            <span slot="content">
                <component v-if="modalInfo.modalComp !== 'Settings'" :is="modalInfo.modalComp" :place="modalInfo.place" :elements="elements" :index="modalInfo.index"></component>
                <component v-if="modalInfo.modalComp === 'Settings'" :is="modalInfo.modalComp" :place="modalInfo.place" :newsettings="modalInfo.newSettings"></component>
            </span>
        </modal>

    </div>

</template>
