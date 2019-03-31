<template>
    <div>
      <!-- Empty Cart Info-->
        <div v-show='getCartEmptyStatus'>
          <img src='../assets/images/emptycart.png' 
          alt="Cart is empty...!"
          width="350px" height="350px"/>
          <p><a href="/electronics">Click here and do shopping...</a></p>
        </div>
        <div class="col-sm-12 float-right"  v-show='!getCartEmptyStatus'>
            <div class="col-sm-6 float-left">
              <div>
            <div>
              <p class="float-left">My Cart ({{ getCartItems.length }})</p><br>
              <hr>
            </div>
            <div style="height: 400px; overflow: auto;max-width: 550px;">
            <div class="card mb-3" style="max-width: 540px;"
                v-for="(item, index) in getCartItems" v-bind:key=index>
              <div class="row no-gutters">
                <div class="col-md-4">
                    <div>
                        <img class="card-img cus-image" 
                          :src='item.image' alt="no image found"
                        />
                    </div>
                    <div class="form-row align-items-center" style="margin-left: 10%;">
                        <div class="col-auto">
                        <button type="submit" class="btn btn-danger mb-2"
                        @click="decrementItem(item)"
                        v-bind:disabled="item.quantity <= 1">-</button>
                        </div>
                        <div class="col-auto">
                            <input type="text" 
                                class="form-control mb-2" 
                                id="inlineFormInput"
                                style="width: 50px;" 
                                v-model="item.quantity"
                                v-bind:disabled="item.quantity <= 1">
                        </div>
                        <div class="col-auto">
                        <button type="submit" class="btn btn-success mb-2"
                        @click="incrementItem(item)">+</button>
                        </div>
                      </div>
                </div>
                <div class="col-md-8">
                  <div class="card-header">
                    <h5 class="card-title">{{ item.name }}
                        <sup>{{formatCurrenty(item.price)}}(<strong>{{ item.quantity }}</strong>)</sup></h5>
                  </div>
                  <div class="card-body">
                    <!-- <p class="card-text">{{ item.quantity + ' X ' + formatCurrenty(item.price) }}</p> -->
                    <p style="font-size: 15px;">Seller: {{ item.seller }}</p>
                    <p class="card-text"><small class="text-muted">Sum: 
                        <strong>{{ getTotalAmount(item.quantity, item.price) }}</strong>
                    </small></p>
                  </div>
                  <div class="card-footer">
                      <button class="btn btn-danger" @click="removeItem(index)">Remove</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </div>
            </div>
            <div class="col-sm-6 float-left">
              <div>
              <p class="float-left">PRICE DETAILS</p><br>
              <hr>
              <PaymentInfo :cartItems=getCartItems></PaymentInfo>
              <!-- <div v-for="(item, index) in getCartItems" v-bind:key=index>
                <div class="col-sm-6 float-left">
                  {{index + 1}}. {{item.name}}
                </div>
                <div class="col-sm-6 float-left">
                  {{item.quantity}} X {{ item.price }} = {{ getTotalAmount(item.quantity, item.price) }}
                </div>
                <span><span class="float-left">{{index + 1}}. {{item.name}}</span>
                  <p>{{item.quantity}} X {{ item.price }} = {{ getTotalAmount(item.quantity, item.price) }}</p>
                </span>
              </div> -->
              <!-- <hr>

              <div class="col-sm-6 float-left">
                  Total Cart Amount: 
                </div>
                <div class="col-sm-6 float-left">
                  {{ getCartTotalAmount(getCartItems) }}
                </div> -->
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import EditCartItem from './EditCartItem.vue'
import PaymentInfo from './PaymentInfo.vue'
var currencyFormatter = require('currency-formatter')

export default {
    components : {
      EditCartItem,
      PaymentInfo
    },
    computed: {
    ...mapGetters([
      'getCartItems',
      'getCartEmptyStatus'
    ])
  },
  methods : {
    getTotalAmount (qty, amt) {
      const totalAmount = qty * parseInt(amt.replace(',',''));
      return currencyFormatter.format(totalAmount, { code: 'USD' });
    },
    formatCurrenty(amt){
      return currencyFormatter.format(amt, { code: 'USD' })
    },
    incrementItem(data){
        data.quantity ++
    },
    decrementItem(data){
        data.quantity --
    },
    ...mapActions([
      'removeItemAction'
    ]),
    removeItem(index){
      this.removeItemAction(index)
    }
  }
}
</script>
<style lang="scss" scoped>
.cus-image{
    height: 166px;
    width: 80px;
    margin: 7px;
}
</style>
