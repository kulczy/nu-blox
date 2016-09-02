<script src="./Col.js"></script>
<template>

    <div class="nublox-col nublox-col-{{col.size_lg}}">
        <div v-dragula="col._children" bag="modules">

            <!-- load row or module component -->
            <div v-for="element in col._children">
                <!-- <template v-if="element.type == 'row'">
                    <grid-row :index="$index" :parent="col._children"></grid-row>
                </template> -->
                <template v-if="element.type == 'row'">
                    <grid-mod-row :mod="element"></grid-mod-row>
                </template>
                <template v-if="element.type == 'module'">
                    <grid-mod :mod="element"></grid-mod>
                </template>
            </div>

            <!-- column options -->
            <button type="button" @click="this.$dispatch('openModal', '+mod', col)">Add mod</button>

        </div>
    </div>

</template>
