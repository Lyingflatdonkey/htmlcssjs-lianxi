<script setup>
import Counter from '../UI/Counter.vue';
import {useMealsStore} from "../../store/meals"
const meals =  useMealsStore()
const props = defineProps(["meal","desc"])
const addgool = (event) =>{
    const sumOffsetleft = (addbtn) => {
    if(addbtn.offsetParent === null) return 0
    const btnRect = addbtn.getBoundingClientRect()
    // return btnRect.left + sumOffsetleft(addbtn.offsetParent)
    return addbtn.offsetLeft * 2 + sumOffsetleft(addbtn.offsetParent)
    }
    const sumOffsetTop = (addbtn) => {
    if(addbtn.offsetParent === null) return 0
    const btnRect = addbtn.getBoundingClientRect()
    return btnRect.top - btnRect.height / 2  + sumOffsetTop(addbtn.offsetParent)
    }
    const div = document.createElement("div")
    div.className = "plus"
    div.innerHTML = `<i class="ri-add-line"></i>`
    // const addbtn = event.target
    const addbtn = event.target.parentNode
    const carRect = document.getElementsByClassName('cart-bag')[0].getBoundingClientRect()
    const left = sumOffsetleft(addbtn) - addbtn.getBoundingClientRect().width/2 - 18,
    top = sumOffsetTop(addbtn) - addbtn.getBoundingClientRect().height / 2 - 36,
    x = carRect.left + carRect.width - left,
    y = carRect.top * 2  - top - 18
    div.style.setProperty('--left',`${left}rem`)
    div.style.setProperty('--top',`${top}rem`)
    div.style.setProperty('--x',`${x}rem`)
    div.style.setProperty('--y',`${y}rem`)
    // 动画完成清除元素
    div.addEventListener("animationend",()=> {
        div.remove()
    })
    document.body.appendChild(div)  
}
// const addgool = (event) =>{
//     const sumOffsetleft = (addbtn) => {
//         if(addbtn.offsetParent === null) return 0
//             const btnRect = addbtn.getBoundingClientRect()
//             console.log(addbtn.offsetLeft);
//             // console.log(addbtn.style.getPropertyValue('display'));
//             return btnRect.left + sumOffsetleft(addbtn.offsetParent)
//             }
//     const sumOffsetTop = (addbtn) => {
//         if(addbtn.offsetParent === null) return 0
//             const btnRect = addbtn.getBoundingClientRect()
//             console.log(addbtn.offsetTop);
//             return btnRect.top - btnRect.height / 2 + sumOffsetTop(addbtn.offsetParent)
//         }
//     const div = document.createElement("div")
//     div.className = "plus"
//     div.innerHTML = `<i class="ri-add-line"></i>`
//     const addbtn = event.target.parentNode
//     const carRect = document.getElementsByClassName('cart-bag')[0].getBoundingClientRect()
//     const left = sumOffsetleft(addbtn) + addbtn.getBoundingClientRect().width/2,
//     top = sumOffsetTop(addbtn)  - addbtn.getBoundingClientRect().height - 18,
//     x = carRect.left + carRect.width - left,
//     y = carRect.top * 2  - top - 18
//     div.style.setProperty('--left',`${left}rem`)
//     div.style.setProperty('--top',`${top}rem`)
//     div.style.setProperty('--x',`${x}rem`)
//     div.style.setProperty('--y',`${y}rem`)
//     // 动画完成清除元素
//     div.addEventListener("animationend",()=> {
//         div.remove()
//         document.getElementsByClassName('cart-bag')[0].style.setProperty('width',`130rem`)
//         setTimeout(() => {
//             document.getElementsByClassName('cart-bag')[0].style.setProperty('width',`120rem`)
//         },100)
//     })
//     document.body.appendChild(div)
    
// }
</script>
<template>
    <div class="meal">
        <div class="img"><img :src="props.meal.img " :alt="props.meal.title ">
    </div>
    <div class="info">
        <div class="desc">
            <h2>{{ props.meal.title  }}</h2>
            <p v-show="props.desc">{{ props.meal.desc }}</p>
        </div>   
        <div class="price-btn">
            <span class="price">{{ props.meal.price }}</span>
            <Counter :meal="props.meal" @gooladd="addgool"></Counter>
        </div>
    </div>
        

    </div>
</template>
<style scoped>
.meal{
   
    display: flex;
    align-items: center;
    height: 280rem;
    border-bottom: 1px #e6e6e6 solid;
    font-size: 20rem;
    padding: 0 40rem;

    width: 100%;
}
.img{
    /* width: 200rem; */
    width: 30%;
}
/* img{
    width: 100%;
    height: auto;
    cursor: pointer;
} */
.info{
    width: 70%;
}
.desc{
    /* width: 450rem; */
    margin-left: 20rem;
}
.info h2{
    color: #000;
    font-size: 34rem;
    font-weight: normal;
    
}
.info p{
    color: #5b5b5b;
    font-size: 24rem;

}
.price-btn{
    display: flex;
    margin-top: 50rem;
    justify-content: space-between;
}
.price{
    font-size: 30rem;
    font-weight: bold;
}
.price::before{
    content: "￥";
}
</style>
<style>
/* 添加动画的元素 */
.plus{
    position: absolute;
    left: var(--left);
    top: var(--top);
    width: 36rem;
    height: 36rem;
    z-index: 9999;
    border-radius: 50%;
}
.plus .ri-add-line {
    position: absolute;
    text-align: center;
    line-height: 36rem;
    font-size: 36rem;
    border-radius: 50%;
    background-color: rgb(234, 178, 0);
}
@keyframes moveY {
    to{
        transform: translateY(var(--y));
    }
}
@keyframes moveX {
    to{
        transform: translateX(var(--x));
    }
}
.plus{
    animation: moveY 1s cubic-bezier(0.5,-0.6,1,1);
}
.plus .ri-add-line{
    animation: moveX 1s linear;
}
</style>