<template>
    <div>
        <div class="container">
            <div class="">
                <div class='col-lg-6 float-left'>
                    <div class='col-md-12'>
                    <strong class="text-header-color">Orders Details</strong> 
                    <hr>
                    <!-- {{myOrder}} -->
                    <app-payment-info :cartItems=myOrder.items></app-payment-info>
                    <!-- <div v-for="(item, index) in myOrder.items" v-bind:key="index">
                        <PaymentInfo :cartItems=myOrder.items></PaymentInfo>
                    </div> -->
                    </div>
                    <!-- <div class='col-md-12'>
                        <strong>Personal Details</strong>   
                        <hr>
                        <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>
                    </div> -->
                </div>
                <div class='col-lg-6 float-left'>
                    <!-- <div class='col-md-12'>
                        <strong>Delivery Address</strong>   
                        <hr>
                        <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>
                    </div> -->
                    <div class='col-md-12'>
                        <strong class="text-header-color">Delivery Details</strong>   
                        <hr>
                            <app-address-info :orderInfo=myOrder></app-address-info>
                    </div>
                </div>  
            </div> 
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import PaymentInfo from './PaymentInfo.vue'
import AddressInfo from './AddressInfo.vue'
import { setTimeout } from 'timers';
export default {
    data(){
        return{
            myOrder: {}
        }
    },
    components:{
        appPaymentInfo: PaymentInfo,
        appAddressInfo: AddressInfo
    },
    methods: {
        getMyOrder(orders){
            //let _orderList = localStorage.getItem('orders')
            if(orders){
                let _keys = Object.keys(orders)
                for(let i=0; i<_keys.length; i++){
                    if(orders[_keys[i]].user === this.$store.getters['getCurrentUser']){
                        this.myOrder = orders[_keys[i]]
                        console.log(this.myOrder)
                        break
                    }
                }
            }
        }
    },
    created(){
        axios.get('https://cart-orders.firebaseio.com/orders.json')
            .then(response => {
                localStorage.setItem('orders', JSON.stringify(response.data))
            })
            .catch(e => {
                alert(e)
            })
            this.getMyOrder(JSON.parse(localStorage.getItem('orders')))
    }    
}
</script>
<style lang="scss" scoped>
.text-header-color {
    color: #989ca0;
}
</style>

