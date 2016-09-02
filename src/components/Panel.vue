<script src="./Panel.js"></script>
<template>

    <div id="nublox-panel">

        <!-- looping row components -->
        <grid-row v-for="row in json._children" :index="$index" :parent="json._children"></grid-row>

    </div>

</template>
