<script src="./Modal.js"></script>
<template>

    <div class="modal fade" id="nuBlox-modal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">

                <!-- header -->
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                    <h4 class="modal-title">{{ header }}</h4>
                </div>

                <!-- body -->
                <div class="modal-body">
                    <pick></pick>
                </div>

                <!-- footer -->
                <div class="modal-footer" v-if="modalAction === 'settings'">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>

            </div>
        </div>
    </div>

</template>
