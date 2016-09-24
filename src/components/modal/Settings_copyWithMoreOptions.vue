<script src="./Settings.js"></script>
<template>

    <div>

        <div class="row">
            <div class="col-xs-12 col-md-6">

                <!-- border -->
                <p class="nublox-settings-head">Ramka:</p>
                <div class="nublox-settings-option">
                    <div class="row">
                        <div class="col-xs-6">
                            <div class="nublox-settings-title">Szerokość (px):</div>
                            <input type="number" class="form-control" v-model="newsettings.border_size" placeholder="rozmiar">
                        </div>
                        <div class="col-xs-6">
                            <div class="nublox-settings-title">Kolor:</div>
                            <input type="text" class="form-control" v-model="newsettings.border_color" placeholder="#000000">
                        </div>
                    </div>
                </div>

                <!-- background -->
                <p class="nublox-settings-head">Tło:</p>
                <div class="nublox-settings-option">
                    <div class="row">
                        <div class="col-xs-4">
                            <div class="nublox-settings-title">Kolor:</div>
                            <input type="text" class="form-control" v-model="newsettings.background_color" placeholder="#000000">
                        </div>
                        <div class="col-xs-8">
                            <div class="nublox-settings-title">Obraz:</div>
                            <input type="text" class="form-control" v-model="newsettings.background_image" placeholder="path">
                        </div>
                        <div class="col-xs-4">
                            <div class="nublox-settings-title">Pozycja X:</div>
                            <select class="form-control" v-model="newsettings.background_position_x">
                                <option v-for="option in ['left', 'center', 'right']" v-bind:value="option">
                                    {{ option }}
                                </option>
                            </select>
                        </div>
                        <div class="col-xs-4">
                            <div class="nublox-settings-title">Pozycja Y:</div>
                            <select class="form-control" v-model="newsettings.background_position_y">
                                <option v-for="option in ['top', 'center', 'bottom']" v-bind:value="option">
                                    {{ option }}
                                </option>
                            </select>
                        </div>
                        <div class="col-xs-4">
                            <div class="nublox-settings-title">Background size:</div>
                            <select class="form-control" v-model="newsettings.background_size">
                                <option v-for="option in ['auto', 'cover']" v-bind:value="option">
                                    {{ option }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>


            </div>
            <div class="col-xs-12 col-md-6">
                <div class="nublox-settings-box">
                    <span class="nublox-settings-box-title-margin">margin</span>
                    <span class="nublox-settings-box-title-padding">padding</span>
                    <input type="number" class="form-control nublox-settings-box-input-padding-top" v-model="newsettings.padding_top" placeholder="top">
                    <input type="number" class="form-control nublox-settings-box-input-padding-right" v-model="newsettings.padding_right" placeholder="right">
                    <input type="number" class="form-control nublox-settings-box-input-padding-bottom" v-model="newsettings.padding_bottom" placeholder="bottom">
                    <input type="number" class="form-control nublox-settings-box-input-padding-left" v-model="newsettings.padding_left" placeholder="left">
                    <input type="number" class="form-control nublox-settings-box-input-margin-top" v-model="newsettings.margin_top" placeholder="top">
                    <input type="number" class="form-control nublox-settings-box-input-margin-right" v-model="newsettings.margin_right" placeholder="right">
                    <input type="number" class="form-control nublox-settings-box-input-margin-bottom" v-model="newsettings.margin_bottom" placeholder="bottom">
                    <input type="number" class="form-control nublox-settings-box-input-margin-left" v-model="newsettings.margin_left" placeholder="left">
                </div>
            </div>
        </div>











        <!-- oooooooooooooooooooooooooooooooooooooooooooo -->

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
        <div class="nublox-settings-option">
            <div class="nublox-settings-title">Class:</div>
            <input type="text" class="form-control" v-model="newsettings.class">
        </div>

        <!-- ID -->
        <div class="nublox-settings-option">
            <div class="nublox-settings-title">ID:</div>
            <input type="text" class="form-control" v-model="newsettings.id">
        </div>







    </div>

</template>
