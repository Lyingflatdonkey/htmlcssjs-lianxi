<script setup>
import Mask from './Mask.vue';

const props = defineProps(["msg"])
const emits = defineEmits(["ok","hide"])
</script>
<template>
    <Mask @hide="$emit('hide')">
        <div class="dialog">
            <p class="msg">{{ props.msg }}</p>
            <div class="btn">
                <button class="cancel" @click="$emit('hide')">取消</button>
                <button @click="() => {
                    $emit('ok')
                    $emit('hide')
                }" class="ok">确认</button>
            </div>
        </div>
    </Mask>
</template>
<style scoped>
.dialog{
    width: 700rem;
    height: 400rem;
    border-radius: 40rem;
    background-color: #fff;
    position: absolute;
    top:45%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.msg{
    height: 300rem;
    font-size: 32rem;
    text-align: center;
    line-height: 260rem;
}
button{
    width: 300rem;
    height: 80rem;
    border-radius: 40rem;
    border: 1px solid #000;
    background-color: #fff;
    font-size: 31rem;
}
.btn{
    display: flex;
    justify-content: space-around;
}
.ok{
    background-color: rgb(248,188,0);
    border: none;
    color: #fff;
}
</style>
