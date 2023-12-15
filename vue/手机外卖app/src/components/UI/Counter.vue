<script setup>
import {ref} from "vue"
import {useMealsStore} from "../../store/meals"
const meals =  useMealsStore()
const props = defineProps(["meal","add"])
const emits = defineEmits(['gooladd'])
const add = (event) =>{
    meals.addMealToCart(props.meal)
    //创建元素
    emits("gooladd",event)
}
</script>
<template>
    <div class="counter">
        <template v-if="props.meal.count> 0" >
        <button class="sub" @click="meals.subMealFromCart(props.meal)"><i class="ri-subtract-line"></i></button>
        <span class="count">{{ props.meal.count }}</span>
        </template>
        <button class="add" @click="add($event)"><i class="ri-add-line"></i></button>

    </div>
</template>
<style scoped>
.counter{
    display: flex;
    align-items: center;
    position: relative;
}
.sub,.add{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36rem;
    height: 36rem;
    background-color: brown;
    border: none;
    border-radius: 50%;
    /* 字体加粗 */
    /* font-weight: bold; */
    
    /* text-align: center; */
    
    font-size: 36rem;
    
    /* line-height: 50%; */
    
}
.add{
    background-color: rgb(234, 178, 0);
    position: relative;
}
.sub{
    background-color: #fff;
    border: 1rem solid #464646;
}
.count{
    font-size: 30rem;
    margin: 0 10rem;
}
</style>
