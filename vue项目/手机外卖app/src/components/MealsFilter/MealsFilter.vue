<script setup>
import { useMealsStore } from '../../store/meals';

const meals = useMealsStore()
</script>
<template>
    <div class="filter">
        <div class="filter-inner">
            <input 
            v-model="meals.keyword"
            class="filter-input" type="text" placeholder="请输入关键字">
            <i class="ri-search-line"></i>
        </div>
        
    </div>
</template>
<style scoped>
    .filter{
        padding: 20rem 40rem;
        border-bottom: 1px solid #e6e6e6;
        font-size: 30rem;
    }
    .filter-inner{
        height: 80rem;
        position: relative;
        display: flex;
        align-items: center;
    }
    .filter-inner i{
        position: absolute;
        color: rgb(184,184,184);
        font-size: 30rem;
        left: 30rem;
    }
    .filter-input{
        background-color: rgb(242,242,242);
        border: none;
        width: 100%;
        height: 100%;
        border-radius: 40rem;
        /* 轮廓线 */
        outline: none;
        padding: 0 40rem 0 80rem;
    }
</style>