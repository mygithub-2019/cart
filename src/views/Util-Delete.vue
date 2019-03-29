<template>
    <div>
        <div class="form-row align-items-center" style="margin-left: 30%;">
                    <div class="col-auto">
                    <button type="submit" class="btn btn-danger mb-2"
                    @click="decrementItem(item)">-</button>
                    </div>
                    <div class="col-auto">
                    <input type="text" class="form-control mb-2 disable" 
                        id="inlineFormInput"
                        style="width: 50px;" 
                        v-model="item.quantity"
                    >
                    </div>
                    <div class="col-auto">
                    <button type="submit" class="btn btn-success mb-2"
                    @click="incrementItem(item)">+</button>
                    </div>
                  </div>
                  <!-- <table class="table table-dark table-hover">
            <thead>
            <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in getCartItems" v-bind:key=index>
                <td>{{ item.name}}</td>
                <td>{{ item.quantity + ' X ' + formatCurrenty(item.price) }}</td>
                <td>{{ getTotalAmount(item.quantity, item.price) }}</td>
            </tr>
            <tr style="background-color: #68b0dc;">
                <td><strong> Amount</strong></td>
                <td></td>
                <td> <strong>{{ 1 }}</strong></td>
            </tr>
            </tbody>
        </table> -->
    </div>
</template>
