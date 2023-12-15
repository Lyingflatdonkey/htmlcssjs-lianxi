<script setup>
import Cart from "./components/Cart/Cart.vue";
import Meals from "./components/Meals/Meals.vue"
import MealsFilter from "./components/MealsFilter/MealsFilter.vue";
import {useMealsStore} from "@/store/meals"//引入store
//加载store中的属性
const meals = useMealsStore()
</script>

<template>
    <MealsFilter></MealsFilter>
    <Meals :meals="meals.filterMeals" :desc="true"></Meals>
    <Cart></Cart>
</template>

<style scoped>

</style>
