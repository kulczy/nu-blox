<style lang="less" src="../less/nu.less"></style>
<script src="./Blox.js"></script>
<template>

    <div id="nuBlox">

        <!-- clipboard clear -->
        <button type="button" class="btn btn-success" v-if="clipboard" v-on:click="clipClear">Wyczyść schowek</button>
        <button type="button" class="btn btn-default" v-else disabled>Wyczyść schowek</button>
        <br /><br />

        <!-- rows -->
        <div class="nuBlox-row" v-for="row in $root.mapJson._children" transition="animRow">
            <!-- row settings -->
            <div class="nuBlox-row-options text-right">
                <button class="nb-btn" v-on:click="addCol(row)"><i class="fa fa-columns"></i></button>
                <button class="nb-btn nb-btn-addrow" v-on:click="callModal('rows', $index, 'Add row')"><i class="fa fa-navicon"></i></button>
                <button class="nb-btn" v-on:click="remove('', $index)"><i class="fa fa-trash"></i></button>
            </div><!-- /row settings -->

            <!-- col -->
            <div class="nuBlox-col nuBlox-col-{{ col.size_lg }}" v-for="col in row._children" transition="animCol">
                <!-- col settings -->
                <div class="nuBlox-col-options">
                    <span class="nb-col-size">{{col.size_lg}} / 12</span>
                    <button class="nb-btn" v-on:click="size(col, '-')"><i class="fa fa-arrow-left"></i></button>
                    <button class="nb-btn" v-on:click="size(col, '+')"><i class="fa fa-arrow-right"></i></button>
                    <button class="nb-btn" v-on:click="remove(row, $index)"><i class="fa fa-trash"></i></button>
                </div><!-- /col settings -->

                <!-- top clipboard area -->
                <div class="nb-clip-area-out" v-on:click="clipPaste(col, -1)" v-if="clipboard">
                    <i class="fa fa-paste"></i>
                </div><!-- /clipboard area -->

                <div class="nb-modules-wrapper">
                    <!-- module -->
                    <div class="nuBlox-mod" v-bind:class="{ 'nb-mod-margin': clipboard }" v-for="module in col._children" transition="animModule">
                        <!-- module settings -->
                        <div class="nuBlox-mod-options">
                            <button class="nb-btn" v-on:click="edit(module.id)"><i class="fa fa-pencil"></i></button>
                            <button class="nb-btn" v-on:click="clipCut(module, col, $index)"><i class="fa fa-cut"></i></button>
                            <button class="nb-btn" v-on:click="remove(col, $index)"><i class="fa fa-trash"></i></button>
                        </div><!-- /module settings -->

                        <div class="nuBlox-mod-info">
                            <div class="nb-mod-info-icon"><i class="fa fa-{{ module.moduleType | toIcon }}"></i></div>
                            <modtitle :tit.sync="module.title" :id="module.id"></modtitle>
                            <div class="nb-mod-info-type">{{ module.moduleType }}</div>
                        </div>

                        <!-- clipboard area -->
                        <div class="nb-clip-area" v-on:click="clipPaste(col, $index)" v-if="clipboard">
                            <i class="fa fa-paste"></i>
                        </div><!-- /clipboard area -->
                    </div><!-- /module -->

                    <!-- space holder - add module -->
                    <button class="nb-btn nb-btn-add" v-on:click="callModal('modules', col, 'Add module')"><i class="fa fa-plus"></i></button>
                </div>

                <!-- add module -->
                <div class="nb-col-addmodule text-right">
                    <button class="nb-btn" v-on:click="callModal('modules', col, 'Add module')"><i class="fa fa-plus"></i></button>
                </div>

            </div><!-- /col -->
        </div><!-- /rows -->

        <!-- modal component -->
        <modal v-on:add-module="addMod" v-on:add-row="addRow"></modal>
        <!-- /modal component -->
    </div>

</template>
