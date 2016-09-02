<script src="./AddModule.js"></script>
<template>

    <button type="button" data-dismiss="modal" @click="this.$dispatch('addRow', this.place._children, 999, [12])">Dodaj wiersz</button>
    <button type="button" data-dismiss="modal" @click="this.$dispatch('addModule', this.place, 'button')">Dodaj modul</button>

</template>
