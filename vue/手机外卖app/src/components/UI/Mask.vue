<script setup>
const props = defineProps(["isShow"])
const emit = defineEmits(["hide"])
</script>
<template>
    <!-- 
        Teleport（胎里扣t）可以将组件渲染到网页的指定位置
     -->
    <Teleport to="#hello">
        <div :="$attrs" 
        @click.self="$emit('hide')" class="Mask" v-show="props.isShow">
        <slot></slot>
    </div>
    </Teleport>
</template>
<style scoped>
.Mask{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0,0,0,.3);
    z-index: 9999;
}
</style>