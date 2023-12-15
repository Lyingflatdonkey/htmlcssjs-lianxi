<script setup>
import Mask from '../UI/Mask.vue';
import Meals from "../Meals/Meals.vue"
import {ref} from "vue"
import {useMealsStore} from "../../store/meals"
import Dialog from '../UI/Dialog.vue';
const meals = useMealsStore()
const showDialog = ref(false)
const emits = defineEmits(['hide'])
//清空购物车方法
const okHander = () => {
    meals.clearCart()
    emits('hide')
}
</script>
<template>
    <Mask @hide="$emit('hide')" style="z-index: 999;">
        <Dialog :is-show="showDialog " 
        :msg="'确认清空购物车吗？'"
        @hide="showDialog = false"
        @ok="okHander"
        ></Dialog>
        <div class="cart-details">
            <div class = "header"> 
                <h3>餐品详情</h3>
                <a href="javaScript:;" @click="showDialog = true">
                    <i class="ri-delete-bin-line"></i>
                    清空购物车
                </a>
            </div>
            <Meals :meals="meals.cartMeals" :desc="false"></Meals>
        </div>
    </Mask>
</template>
<style scoped>
.cart-details{
    width: 750rem;
    position: absolute;
    bottom: 0;
    background-color: #fff;
    /* 圆角 */
    border-top-left-radius: 40rem ;
    border-top-right-radius: 40rem ;
}
.meals{
    height: calc(280rem * 3.5);
    /* max-height: calc(280rem * 3.5);
    height: auto;
    min-height: calc(280rem * 3.5) ; */
}
.header{
    display: flex;
    justify-content: space-between;
    padding: 20rem 40rem;
    background-color: #fff;
    border-top-left-radius: 40rem ;
    border-top-right-radius: 40rem ;
}
.header h3 {
    font-size: 28rem;
}
.header a {
    display: flex;
    align-items: center;
    color: #9f9f9f;
    font-size: 22rem;
}
.header i{
    font-size: 26rem;
    margin-right: 6rem;
}
</style>