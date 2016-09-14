<script src="./Panel.js"></script>
<template>

    <div id="nublox-panel">

        <!-- looping row components -->
        <grid-row v-for="row in json._children" :row="row" :index="$index" :parent="json" :displaysize="displaysize"></grid-row>

    </div>

</template>
