<template>
    <div>
        <div class="col-md-6 float-left">
            
            <strong class="float-left text-color"><i class="fas fa-address-card"></i> Shipping To:</strong><br>
            <table>
                <tr>
                    <td><strong>{{orderInfo.personlaInfo.fname}} {{orderInfo.personlaInfo.lname}}</strong></td>
                </tr>
                <tr>
                    <td>{{orderInfo.addressInfo.address1}} {{orderInfo.addressInfo.address2}}</td>
                </tr>
                <tr>
                    <td>{{orderInfo.addressInfo.landmark}}</td>
                </tr>
                <tr>
                    <td>{{orderInfo.addressInfo.postalCode}}</td>
                </tr>
                <tr>
                    <td>{{orderInfo.personlaInfo.phone}}</td>
                </tr>
            </table>
        </div>
        <div class="col-md-6 float-left">
            <strong class="float-left text-color">
                <i class="fas fa-truck"></i> Will be delivered on:</strong>
                <div><br>
                <p><strong  class="text-color-danger">Purchase on: {{ orderInfo.orderDate}}</strong></p>
                <p><strong class="text-color-success">Seven working day's of Purchase.</strong></p>
                </div>
            <br>
        </div>

    </div>
</template>
<script>
export default {
    props:[
        'orderInfo'
    ]
}
</script>
<style lang="scss" scoped>
table{
    tr{
        td{
            text-align: left;
        }
    }
}
.text-color {
    color: #007bffc2;
}
.text-color-success {
    color: green;
}
.text-color-danger {
    color: red;
}
</style>

