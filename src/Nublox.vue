<style lang="less" src="./less/Nublox.less"></style>
<script src="./Nublox.js"></script>
<template>

    <div id="nublox">

        <!-- navbar -->
        <div id="nublox-navbar">
            <span v-for="item in displayNav">
                <span @click="this.$emit('reloadDisplayedJsonFromNav', item, $index)">{{ (item.navName) ? item.navName : 'Home' }}</span> /
            </span>
        </div>

        <!-- main panel -->
        <!-- <panel :json="bloxJson"></panel> -->
        <panel :json="displayJson"></panel>

        <!-- modal -->
        <modal :info="modalInfo">
            <span slot="content">
                <component :is="modalInfo.modalComp" :place="modalInfo.place"></component>
            </span>
        </modal>

    </div>

</template>
