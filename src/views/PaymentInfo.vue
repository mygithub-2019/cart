<template>
    <div>
        <table class="table table-borderless">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(cartItem, index) in cartItems" v-bind:key=index>
                    <td scope="row">{{ index + 1 }}</td>
                    <td>{{ cartItem.name }}</td>
                    <td>{{ cartItem.quantity }} X ${{ cartItem.price }}</td>
                    <td>{{ getTotalAmount(cartItem.quantity, cartItem.price) }}</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Total Cart Amount</td>
                    <td><b>{{ getCartTotalAmount(cartItems) }}</b></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
var currencyFormatter = require('currency-formatter')

export default {
    props:[
        'cartItems'
    ],
    methods: {
        getTotalAmount (qty, amt) {
            const totalAmount = qty * parseInt(amt.replace(',',''));
            return currencyFormatter.format(totalAmount, { code: 'USD' });
        },
        getCartTotalAmount(data){
            let amount = 0
            for(let i = 0; i < data.length; i++){
                amount += data[i].price * data[i].quantity
            }
            return currencyFormatter.format(amount, { code: 'USD' })
        }
    }
}
</script>
<style lang="scss" scoped>
table { 
    color: gray;
    tr th {
        color: #585656
    }
}
</style>

