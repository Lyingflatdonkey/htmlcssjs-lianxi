<script setup>
import Meal from "./Meal.vue"
const props = defineProps(["meals"])
</script>
<template>
    <div class="meals">
        <!-- 商品信息 -->
        <Meal v-for="item in  props.meals" :meal="item" :desc="$attrs.desc"></Meal>
        <!-- 没搜索到商品时显示以下内容 -->
        <h2 v-if=" !props.meals || props.meals.length === 0" style="font-size: 30rem;height: 280rem;text-align: center;">没有找到商品</h2>
    </div>
</template>
<style scoped>
.meals{
    height:calc(100vh - 121rem);
    overflow: auto;
    padding-bottom: 140rem ;
    width: 100%;
}
</style>