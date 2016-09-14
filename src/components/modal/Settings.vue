<script src="./Settings.js"></script>
<template>

    <div>

        <!-- size  -->
        <div v-if="place.type === 'col'">
            <div>Szerokość kolumn:</div>
            <form class="form-inline">
                <div class="row">
                    <div class="col-xs-3 col-sm-2">
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-addon"><i class="fa fa-mobile-phone"></i></div>
                                <select class="form-control" v-model="newsettings.size_xs" number>
                                    <option v-for="option in [1,2,3,4,5,6,7,8,9,10,11,12]" v-bind:value="option">
                                        {{ option }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-3 col-sm-2">
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-addon"><i class="fa fa-tablet"></i></div>
                                <select class="form-control" v-model="newsettings.size_sm" number>
                                    <option v-for="option in [1,2,3,4,5,6,7,8,9,10,11,12]" v-bind:value="option">
                                        {{ option }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-3 col-sm-2">
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-addon"><i class="fa fa-laptop"></i></div>
                                <select class="form-control" v-model="newsettings.size_md" number>
                                    <option v-for="option in [1,2,3,4,5,6,7,8,9,10,11,12]" v-bind:value="option">
                                        {{ option }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-3 col-sm-2">
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-addon"><i class="fa fa-tv"></i></div>
                                <select class="form-control" v-model="newsettings.size_lg" number>
                                    <option v-for="option in [1,2,3,4,5,6,7,8,9,10,11,12]" v-bind:value="option">
                                        {{ option }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

        <!-- class -->
        <div>
            <div>Klasa:</div>
            <input type="text" class="form-control" v-model="newsettings.class">
        </div>

        <!-- padding -->
        <div>
            <div>Padding:</div>
            <div class="row">
                <div class="col-xs-3"><input type="text" class="form-control" v-model="newsettings.padding_top" placeholder="top"></div>
                <div class="col-xs-3"><input type="text" class="form-control" v-model="newsettings.padding_right" placeholder="right"></div>
                <div class="col-xs-3"><input type="text" class="form-control" v-model="newsettings.padding_bottom" placeholder="bottom"></div>
                <div class="col-xs-3"><input type="text" class="form-control" v-model="newsettings.padding_left" placeholder="left"></div>
            </div>
        </div>

        <!-- margin -->
        <div>
            <div>Margin:</div>
            <div class="row">
                <div class="col-xs-3"><input type="text" class="form-control" v-model="newsettings.margin_top" placeholder="top"></div>
                <div class="col-xs-3"><input type="text" class="form-control" v-model="newsettings.margin_right" placeholder="right"></div>
                <div class="col-xs-3"><input type="text" class="form-control" v-model="newsettings.margin_bottom" placeholder="bottom"></div>
                <div class="col-xs-3"><input type="text" class="form-control" v-model="newsettings.margin_left" placeholder="left"></div>
            </div>
        </div>

    </div>

</template>
