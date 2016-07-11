<script src="./Modtitle.js"></script>
<template>

    <div class="nb-mod-info-title-input">
        <!-- <input type="text" data-nublox-title="" v-model="tit" :disabled="disable" v-on:blur="unedit" v-on:keyup.enter="unedit"> -->
        <label data-nublox-title-id="{{ id }}" data-nublox-title-title="{{ tit }}">
            <span v-on:click="edit" v-if="disable">{{ tit }}</span>
            <input type="text" v-model="tit" v-if="!disable" v-on:blur="unedit" v-on:keyup.enter="unedit">
        </label>
    </div>

</template>
