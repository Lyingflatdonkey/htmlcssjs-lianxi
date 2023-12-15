<script setup>
import {useMealsStore} from "../../store/meals"
import Counter from "../UI/Counter.vue";
const props = defineProps(["isShowCheckout"])
const emits = defineEmits(['close'])
const meals = useMealsStore()
</script>
<template>
    <div class="checkout" v-show="props.isShowCheckout">
        <div class="close" @click="$emit('close')"><i class="ri-close-line"></i></div>
        <!-- 订单详情 -->
        <div class="details">
            <header>餐品详情</header>
            <div class="list">
                <div class="item" v-for="item in meals.cartMeals">
                    <div class="img-wrap">
                        <img :src="item.img" :alt="item.title">
                    </div>
                    <div class="info">
                        <h2 class="title">{{ item.title }}</h2>
                        <div class="count">
                            <Counter :meal="item"></Counter>
                            <span class="amount">{{ item.count * item.price }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <footer>合计￥<span>{{ meals.amount }}</span></footer>
        </div>
        <!-- 结算按钮 -->
        <div class="bar">
            <div class="total-amount">
            <div v-show="meals.totalCount <= 0" class="no-goods">未选购商品</div>
            
        <p 
            @click="showDetails = true" 
            v-show="meals.totalCount > 0" 
            class="has-goods">{{ meals.amount }}
        </p>
        </div>   
        <button class="checkout-btn">去支付</button>
        </div>
    </div>
</template>
<style scoped>
.checkout{
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(240,240,240);
    font-size: 36rem;
    z-index: 99999;
    padding: 0 20rem;
}
.close{
    height: 60rem;
    line-height: 60rem;
    font-size: 38rem;
    font-weight: bold;
}
.details{
    background-color: #fff;
    border-radius: 40rem;
    padding: 0 20rem;
}
.details header{
    height: 100rem;
    line-height: 100rem;
    font-size: 32rem;
    font-weight: bold;
    border-bottom: 1px dashed #e6e6e6 ;
}
.details footer{
    font-size: 26rem;
    text-align: right;
    height: 120rem;
    line-height: 120rem;
    border-top: 1px dashed #e6e6e6;
}
.details footer span {
    font-size: 30rem;
    font-weight: bold;
}
.list{
    max-height: 800rem;
    overflow: auto;
}
.item{
    display: flex;
}
.img-wrap{
    padding: 10rem;
    line-height: 160rem;
    width: 160rem;
    height: 160rem;
}
img{
    width: 100%;
    height: auto;
    cursor: pointer;
}
.title{
    font-size: 26rem;
    margin: 20rem 0;
}
.info{
    width: 500rem;
    padding: 10rem 0 10rem 0;
}
.count{
    display: flex;
    justify-content: space-between;
}
.amount{
    font-size: 26rem;
    font-weight: bold;
}
.amount::before{
    content: "￥";
    font-weight: normal;
}
/*  */
.bar{
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
.total-amount{
    margin-left: 80rem;
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
    content: "合计:￥";
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