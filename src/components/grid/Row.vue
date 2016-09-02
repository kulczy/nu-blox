<script src="./Row.js"></script>
<template>

    <div class="nublox-row">

        <!-- looping col components -->
        <grid-col v-for="col in row._children" :col="col"></grid-col>

        <!-- row options -->
        <button type="button" @click="this.$dispatch('addColumn', row)">Add col</button>
        <button type="button" @click="this.$dispatch('openModal', '+row', {index:index, parent:parent})">Add row</button>

    </div>

</template>
