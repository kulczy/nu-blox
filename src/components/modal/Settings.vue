<script src="./Settings.js"></script>
<template>

    <div>

        <!-- size  -->
        <div v-if="place.type === 'col'" class="nublox-settings-option">
            <div class="nublox-settings-title">Szerokość kolumn:</div>
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

        <div class="nublox-settings-option">
            <div class="row">
                <div class="col-xs-8">
                    <div class="nublox-settings-title">Klasy:</div>
                    <input type="text" class="form-control" v-model="newsettings.class">
                </div>
                <div class="col-xs-4">
                    <div class="nublox-settings-title">ID:</div>
                    <input type="text" class="form-control" v-model="newsettings.id">
                </div>
            </div>
        </div>

        <div class="nublox-settings-option">
            <div class="nublox-settings-title">Style CSS:</div>
            <textarea class="form-control" v-model="newsettings.style" rows="5"></textarea>
        </div>







    </div>

</template>
