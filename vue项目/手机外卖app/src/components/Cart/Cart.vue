<script setup>
import cartBag from "../../assets/购物袋.png"
import Checkout from "../Checkout/Checkout.vue";
import cartDetails from "./cartDetails.vue"
import {useMealsStore} from "@/store/meals.js"
import {ref} from "vue"
const meals = useMealsStore()
const showDetails = ref(false)
//结算页面
const showCheckout = ref(false)
const sum = ref(0)
//通过订阅来实现购物车圆点延迟变化
meals.$subscribe((mutation) => {
    if(mutation.events.key != 'count') return 
    setTimeout(() => {
        sum.value = meals.totalCount
    },900)
})
</script>
<template>
    <!-- 购物车页面 -->
    <cartDetails :is-show="showDetails" @hide="showDetails = false"></cartDetails>
    <div class="cart-bar">
        <div @click="showDetails = true " class="cart-bag">
            <img :src="cartBag" alt="">
            <span v-show="sum > 0" class="botal-count">{{ sum }}</span>
        </div> 
        <div class="total-amount">
            <div v-show="sum <= 0" class="no-goods">未选购商品</div>
        <p 
            @click="showDetails = true" 
            v-show="sum > 0" 
            class="has-goods">{{ meals.amount }}
        </p>
        </div>   
        <button @click="showCheckout = meals.totalCount > 0" class="checkout-btn">去结算</button>
            <!-- 结算页面 -->
    </div>
    <Checkout :isShowCheckout="showCheckout" @close="showCheckout = false"></Checkout>
</template>
<style scoped>
.cart-bar{
    /* 固定定位 */
    width: 710rem;
    height: 100rem;
    /* left: calc(calc(750rem - 710rem) / 2); */
    left: 0;
    right: 0;
    margin: 0 auto;;
    bottom: 40rem;
    position:fixed;
    background-color: rgb(58,58,58);
    font-size: 20rem;
    border-radius:60rem;
    z-index: 9999;
}
.cart-bag{
    position: absolute;
    width: 120rem;
    height: auto;
    bottom: -20rem;
    left: -20rem;
    transition: all .1s ease;
}
.cart-bag .botal-count{
    position: absolute;
    width: 40rem;
    height: 40rem;
    text-align: center;
    line-height: 40rem;
    border-radius: 50%;
    background-color: brown;
    right: 0;
    top: 20rem;
    padding: 2rem;
    color:#fff;
    font-weight: bold;
}
.total-amount{
    margin-left: 140rem;
    line-height: 100rem;
}
.no-goods,.has-goods{
    color: rgb(148,148,148);
    font-size: 33rem;
    font-weight: bold;
}
.has-goods{
    color: #fff;
}
.has-goods::before{
    content: "￥";
    font-size: 26rem;
}
.checkout-btn{
    position: absolute;
    top: 0;
    right: 0;
    width: 200rem;
    height: 100%;
    border-radius: 60rem;
    border: none;
    background-color: rgb(248,188,0);
    font-size: 36rem;
}
</style>