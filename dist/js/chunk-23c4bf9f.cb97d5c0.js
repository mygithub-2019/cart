(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23c4bf9f"],{2040:function(e,a,r){"use strict";var s=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",[r("div",{staticClass:"spinner-grow text-muted"}),r("div",{staticClass:"spinner-grow text-primary"}),r("div",{staticClass:"spinner-grow text-success"}),r("div",{staticClass:"spinner-grow text-info"}),r("div",{staticClass:"spinner-grow text-warning"}),r("div",{staticClass:"spinner-grow text-danger"}),r("div",{staticClass:"spinner-grow text-secondary"}),r("div",{staticClass:"spinner-grow text-dark"}),r("div",{staticClass:"spinner-grow text-light"}),r("p",{staticClass:"text-secondary"},[e._v("Please wait, "+e._s(e.loadingMsg)+"...")])])},t=[],o={props:["loadingMsg"]},n=o,d=r("2877"),l=Object(d["a"])(n,s,t,!1,null,null,null);a["a"]=l.exports},e786:function(e,a,r){"use strict";r.r(a);var s=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"container"},[r("h2",[e._v("Final Billing and Payment(s)")]),e._m(0),r("div",{attrs:{id:"accordion"}},[r("div",{staticClass:"card primery"},[e._m(1),r("div",{staticClass:"collapse show",attrs:{id:"collapseOne","data-parent":"#accordion"}},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("label",{attrs:{for:"name"}},[e._v("First Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderInfo.personlaInfo.fname,expression:"orderInfo.personlaInfo.fname"}],staticClass:"form-control",attrs:{type:"text",placeholder:"First name"},domProps:{value:e.orderInfo.personlaInfo.fname},on:{input:function(a){a.target.composing||e.$set(e.orderInfo.personlaInfo,"fname",a.target.value)}}})]),r("div",{staticClass:"col"},[r("label",{attrs:{for:"name"}},[e._v("Last Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderInfo.personlaInfo.lname,expression:"orderInfo.personlaInfo.lname"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Last name"},domProps:{value:e.orderInfo.personlaInfo.lname},on:{input:function(a){a.target.composing||e.$set(e.orderInfo.personlaInfo,"lname",a.target.value)}}})]),r("div",{staticClass:"col"},[r("label",{attrs:{for:"email"}},[e._v("Email address")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderInfo.personlaInfo.email,expression:"orderInfo.personlaInfo.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Enter valid email address",disabled:""},domProps:{value:e.orderInfo.personlaInfo.email},on:{input:function(a){a.target.composing||e.$set(e.orderInfo.personlaInfo,"email",a.target.value)}}})]),r("div",{staticClass:"col"},[r("label",{attrs:{for:"phone"}},[e._v("Phone")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderInfo.personlaInfo.phone,expression:"orderInfo.personlaInfo.phone"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Enter valid phone number"},domProps:{value:e.orderInfo.personlaInfo.phone},on:{input:function(a){a.target.composing||e.$set(e.orderInfo.personlaInfo,"phone",a.target.value)}}})])])])])]),r("div",{staticClass:"card"},[e._m(2),r("div",{staticClass:"collapse",attrs:{id:"collapseTwo","data-parent":"#accordion"}},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("label",{attrs:{for:"address1"}},[e._v("Address 1")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderInfo.addressInfo.address1,expression:"orderInfo.addressInfo.address1"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Please enter valid address"},domProps:{value:e.orderInfo.addressInfo.address1},on:{input:function(a){a.target.composing||e.$set(e.orderInfo.addressInfo,"address1",a.target.value)}}})]),r("div",{staticClass:"col"},[r("label",{attrs:{for:"address2"}},[e._v("Address 2")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderInfo.addressInfo.address2,expression:"orderInfo.addressInfo.address2"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Please enter valid address"},domProps:{value:e.orderInfo.addressInfo.address2},on:{input:function(a){a.target.composing||e.$set(e.orderInfo.addressInfo,"address2",a.target.value)}}})]),r("div",{staticClass:"col"},[r("label",{attrs:{for:"landmark"}},[e._v("Land Mark")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderInfo.addressInfo.landmark,expression:"orderInfo.addressInfo.landmark"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter valid landmark"},domProps:{value:e.orderInfo.addressInfo.landmark},on:{input:function(a){a.target.composing||e.$set(e.orderInfo.addressInfo,"landmark",a.target.value)}}})]),r("div",{staticClass:"col"},[r("label",{attrs:{for:"postalcode"}},[e._v("Postal Code")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderInfo.addressInfo.postalCode,expression:"orderInfo.addressInfo.postalCode"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Enter valid postal code"},domProps:{value:e.orderInfo.addressInfo.postalCode},on:{input:function(a){a.target.composing||e.$set(e.orderInfo.addressInfo,"postalCode",a.target.value)}}})])])])])]),r("div",{staticClass:"card"},[e._m(3),r("div",{staticClass:"collapse",attrs:{id:"collapseThree","data-parent":"#accordion"}},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("label",{attrs:{for:"card"}},[e._v("Credit/Debit Card Number")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderInfo.cardInfo.cnumber,expression:"orderInfo.cardInfo.cnumber"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Enter valid card number"},domProps:{value:e.orderInfo.cardInfo.cnumber},on:{input:function(a){a.target.composing||e.$set(e.orderInfo.cardInfo,"cnumber",a.target.value)}}})]),r("div",{staticClass:"col"},[r("label",{attrs:{for:"date"}},[e._v("Expiry/Validity Date")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderInfo.cardInfo.expiry,expression:"orderInfo.cardInfo.expiry"}],staticClass:"form-control",attrs:{type:"date",placeholder:"Enter date"},domProps:{value:e.orderInfo.cardInfo.expiry},on:{input:function(a){a.target.composing||e.$set(e.orderInfo.cardInfo,"expiry",a.target.value)}}})]),r("div",{staticClass:"col"},[r("label",{attrs:{for:"cvv"}},[e._v("CVV")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderInfo.cardInfo.cvv,expression:"orderInfo.cardInfo.cvv"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Enter CVV"},domProps:{value:e.orderInfo.cardInfo.cvv},on:{input:function(a){a.target.composing||e.$set(e.orderInfo.cardInfo,"cvv",a.target.value)}}})]),r("div",{staticClass:"col-12"},[r("br"),r("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:e.placeOrder}},[e._v("Place Order")]),r("br"),e.isOrderPlaced?r("div",[r("app-loader")],1):e._e()])])])])])])])},t=[function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("p",[r("strong",[e._v("Note:")]),e._v(" Please provide valid information to process your order.")])},function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"card-header"},[r("a",{staticClass:"card-link",attrs:{"data-toggle":"collapse",href:"#collapseOne"}},[e._v("\n        Personal Info\n      ")])])},function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"card-header"},[r("a",{staticClass:"collapsed card-link",attrs:{"data-toggle":"collapse",href:"#collapseTwo"}},[e._v("\n      Delivery Address\n    ")])])},function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"card-header"},[r("a",{staticClass:"collapsed card-link",attrs:{"data-toggle":"collapse",href:"#collapseThree"}},[e._v("\n        Payment Method(s)\n      ")])])}],o=r("bc3a"),n=r.n(o),d=r("2040"),l={data:function(){return{isOrderPlaced:!1,orderInfo:{user:this.$store.getters["getCurrentUser"],items:this.$store.getters["getCartItems"],orderDate:new Date,personlaInfo:{fname:"",lname:"",email:this.$store.getters["getCurrentUser"],phone:""},addressInfo:{address1:"",address2:"",landmark:"",postalCode:""},cardInfo:{cnumber:"",expiry:"",cvv:""}}}},components:{appLoader:d["a"]},methods:{placeOrder:function(){var e=this;this.isOrderPlaced=!0,console.log(this.orderInfo),n.a.post("https://cart-orders.firebaseio.com/orders.json",this.orderInfo).then(function(a){console.log(a),e.isOrderPlaced=!1,alert("Order placed successfully.")}).catch(function(e){alert(e)})}}},i=l,c=r("2877"),p=Object(c["a"])(i,s,t,!1,null,"590e6aa6",null);a["default"]=p.exports}}]);
//# sourceMappingURL=chunk-23c4bf9f.cb97d5c0.js.map