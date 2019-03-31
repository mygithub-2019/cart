<template>
  <div class="container">
      <div v-for="(item, index) in electronicGoods" 
        v-bind:key="index">
            <div class="mb-3 float-left item">
                <img :src='item.image' width="100px" height="200px"/>
                <h5>{{ item.name }} <sup class="price-tag">{{ formatCurrenty(item.price) }}</sup></h5>
                <!-- <ul>
                    <li>{{ item.ram }}</li>
                    <li>{{ item.display }}</li>
                </ul> -->
                <p>{{ item.ram }}</p>
                <p>{{ item.display }}</p>
                <p @click="itemClicked(item)">more...</p>
                <button class="btn btn-success" @click="addItem(item)">
                  <i class="fas fa-cart-plus" title="Add To Cart"></i>
                  </button>&nbsp;
                <button class="btn btn-primary" @click="addItem(item, true)">
                  <i class="fas fa-money-bill-wave" title="Buy Now"></i>
                </button>
            </div>
      </div>
      <!--Modal -->
      <div id="my-modal" class="modal fade">
    <div class="modal-dialog" role="document">
      <ElectronicsMore :itemData=itemData></ElectronicsMore>
      <!-- <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"><p> {{ itemData.name }} Info</p></h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <ElectronicsMore :itemData=itemData></ElectronicsMore>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">
            <i class="fas fa-times-circle" title="Close"></i>
          </button>
          <button type="button" class="btn btn-primary" @click="addItem(itemData)">
            <i class="fas fa-cart-plus" title="Add To Cart"></i>
          </button>
        </div>
      </div> -->
    </div>
  </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import ElectronicsMore from './electronics/Electronics-More.vue'
import ElectronicsDBData from '../model/electronics.json'

var currencyFormatter = require('currency-formatter')
export default {
    data(){
        return {
            electronicGoods : ElectronicsDBData,
            itemData: ""
        }
    },
    components: {
      ElectronicsMore
    },
    methods : {
        addItem(item, nav){
            this.ADD_ITEM(item)
            if(nav){
              this.$router.push('/cart')
            }
        },
        ...mapMutations([
            'ADD_ITEM'
        ]),
        formatCurrenty(amt){
            return currencyFormatter.format(amt, { code: 'USD' })
        },
        itemClicked(data){
            this.itemData = data
            $("#my-modal").modal('show');
        }
    },
    created () {

    }
}
</script>
<style lang="scss" scoped>
.item{
    // border: 1px solid lightgray;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
}
.item:hover {
  background-color: #f1f1f5;;
  cursor: pointer;
  //border: 1px solid white
//   box-shadow: 5px 10px #efecec;
}
.price-tag{
    color: green;
}
</style>

