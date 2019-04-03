<template>
    <div class="container">
  <h2>Final Billing and Payment(s)</h2>
  <p><strong>Note:</strong> Please provide valid information to process your order.</p>
  <div id="accordion">
    <div class="card primery">
      <div class="card-header">
        <a class="card-link" data-toggle="collapse" href="#collapseOne">
          Personal Info
        </a>
      </div>
      <div id="collapseOne" class="collapse show" data-parent="#accordion">
        <div class="card-body">
          <div class="row">
            <div class="col">
                <label for="name">First Name</label>
                <input type="text" class="form-control" placeholder="First name"
                v-model="orderInfo.personlaInfo.fname">
            </div>
            <div class="col">
                <label for="name">Last Name</label>
                <input type="text" class="form-control" placeholder="Last name"
                v-model="orderInfo.personlaInfo.lname">
            </div>
            <div class="col">
                <label for="email">Email address</label>
                <input type="email" class="form-control" placeholder="Enter valid email address"
                v-model="orderInfo.personlaInfo.email" disabled>
            </div>
            <div class="col">
                <label for="phone">Phone</label>
                <input type="number" class="form-control" placeholder="Enter valid phone number"
                v-model="orderInfo.personlaInfo.phone">
            </div>
        </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
        Delivery Address
      </a>
      </div>
      <div id="collapseTwo" class="collapse" data-parent="#accordion">
        <div class="card-body">
          <div class="row">
            <div class="col">
                <label for="address1">Address 1</label>
                <input type="text" class="form-control" placeholder="Please enter valid address"
                v-model="orderInfo.addressInfo.address1">
            </div>
            <div class="col">
                <label for="address2">Address 2</label>
                <input type="text" class="form-control" placeholder="Please enter valid address"
                v-model="orderInfo.addressInfo.address2">
            </div>
            <div class="col">
                <label for="landmark">Land Mark</label>
                <input type="text" class="form-control" placeholder="Enter valid landmark"
                v-model="orderInfo.addressInfo.landmark">
            </div>
            <div class="col">
                <label for="postalcode">Postal Code</label>
                <input type="number" class="form-control" placeholder="Enter valid postal code"
                v-model="orderInfo.addressInfo.postalCode">
            </div>
        </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
          Payment Method(s)
        </a>
      </div>
      <div id="collapseThree" class="collapse" data-parent="#accordion">
        <div class="card-body">
          <div class="row">
            <div class="col">
                <label for="card">Credit/Debit Card Number</label>
                <input type="number" class="form-control" placeholder="Enter valid card number"
                v-model="orderInfo.cardInfo.cnumber">
            </div>
            <div class="col">
                <label for="date">Expiry/Validity Date</label>
                <input type="date" class="form-control" placeholder="Enter date"
                v-model="orderInfo.cardInfo.expiry">
            </div>
            <div class="col">
                <label for="cvv">CVV</label>
                <input type="number" class="form-control" placeholder="Enter CVV"
                v-model="orderInfo.cardInfo.cvv">
            </div>
            <div class="col-12"><br>
                <button type="button" class="btn btn-success"
                @click="placeOrder">Place Order</button><br>
                <div v-if="isOrderPlaced">
                    <app-loader/>
                </div>
            </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Loader from './Loader.vue'
export default {
    data(){
        return{
            isOrderPlaced: false,
            orderInfo: {
                user:this.$store.getters['getCurrentUser'],
                items: this.$store.getters['getCartItems'],
                orderDate: new Date(),
                personlaInfo: {
                    fname: '',
                    lname: '',
                    email:this.$store.getters['getCurrentUser'],
                    phone:''
                },
                addressInfo:{
                    address1:'',
                    address2:'',
                    landmark:'',
                    postalCode:''
                },
                cardInfo:{
                    cnumber:'',
                    expiry:'',
                    cvv:''
                }
            }
        }
    },
    components: {
        appLoader: Loader
    },
    methods: {
        placeOrder(){
            this.isOrderPlaced = true
            console.log(this.orderInfo)
            axios.post('https://cart-orders.firebaseio.com/orders.json', this.orderInfo)
            .then(response => {
                console.log(response)
                this.isOrderPlaced = false
                //this.isFormSubmitted = false
                //this.$router.push('/my-orders')
                alert('Order placed successfully.')
            })
            .catch(e => {
                alert(e)
            })
        }
    }
}
</script>
<style lang="scss" scoped>

</style>

