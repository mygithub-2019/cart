<template>
    <div>
        <!-- <div class="col-sm-12">
            <img :src=itemData.image width="100px" height="200px">
        </div>
        <div class="display icon-color">
            <div class="col-sm-3 float-left ">
            <p><i class="fas fa-copyright"></i></p>
            <p><i class="fas fa-memory"></i></p>
            <p><i class="fas fa-mobile-alt"></i></p>
            <p><i class="fas fa-camera"></i></p>
            <p><i class="fas fa-battery-full"></i></p>
            <p><i class="fas fa-microchip"></i></p>
            <p><i class="fas fa-tag"></i></p>
        </div>
        <div class="col-sm-9 float-left text-left text-color">
            <p>{{ itemData.name }}</p>
            <p>{{ itemData.ram }}</p>
            <p>{{ itemData.display }}</p>
            <p>{{ itemData.camera }}</p>
            <p>{{ itemData.battery }}</p>
            <p>{{ itemData.processor }}</p>
            <p>{{ itemData.price }}</p>
        </div>
        </div> -->
        <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"><p> {{ itemData.name }} Info</p></h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="col-sm-12">
            <img :src=itemData.image width="100px" height="200px">
        </div>
        <div class="display icon-color">
            <div class="col-sm-3 float-left ">
            <p><i class="fas fa-copyright"></i></p>
            <p><i class="fas fa-memory"></i></p>
            <p><i class="fas fa-mobile-alt"></i></p>
            <p><i class="fas fa-camera"></i></p>
            <p><i class="fas fa-battery-full"></i></p>
            <p><i class="fas fa-microchip"></i></p>
            <p><i class="fas fa-tag"></i></p>
        </div>
        <div class="col-sm-9 float-left text-left text-color">
            <p>{{ itemData.name }}</p>
            <p>{{ itemData.ram }}</p>
            <p>{{ itemData.display }}</p>
            <p>{{ itemData.camera }}</p>
            <p>{{ itemData.battery }}</p>
            <p>{{ itemData.processor }}</p>
            <p class="price-tag">{{ formatCurrenty(itemData.price) }}</p>
        </div>
        </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">
            <i class="fas fa-times-circle" title="Close"></i>
          </button>
          <button type="button" class="btn btn-primary" @click="addItem(itemData)">
            <i class="fas fa-cart-plus" title="Add To Cart"></i>
          </button>
        </div>
      </div>
    </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
var currencyFormatter = require('currency-formatter')

export default {
    props: ['itemData'],
    methods : {
        addItem(item){
            this.ADD_ITEM(item)
        },
        ...mapMutations([
            'ADD_ITEM'
        ]),
        formatCurrenty(amt){
            return currencyFormatter.format(amt, { code: 'USD' })
        }
    }
}
</script>
<style lang="scss" scoped>
.display {
    margin-top: 5px;
}
.text-color {
    color: #847d7d;
}
.icon-color {
    color: #28a7e8;
}
.price-tag {
    color: green;
}
</style>

