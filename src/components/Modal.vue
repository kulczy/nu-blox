<script src="./Modal.js"></script>
<template>

    <div class="modal fade" id="nublox-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">

                <!-- header -->
                <div v-if="info.footer" class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">{{info.title}}</h4>
                </div>
                <div v-if="!info.footer" class="nublox-modal-close">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>

                <!-- content -->
                <div class="modal-body">
                    <slot name="content"></slot>
                </div>

                <!-- footer -->
                <div class="modal-footer" v-if="info.footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Anuluj</button>
                    <button type="button" class="btn btn-primary" @click="this.$broadcast('modalSubmit')">Zapisz</button>
                </div>

            </div>
        </div>
    </div>

</template>
