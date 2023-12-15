import { defineStore } from "pinia"
export const useMealsStore =  defineStore("meals",{
    state:() =>({
        data:[
            {
                id:1,
                title:"汉堡包",
                desc:"百分百纯牛肉配搭脆酸瓜洋葱粒与美味番茄",
                price:12,
                img:"/images/1.jpg"
            },{
                id:2,
                title:"双层芝士堡",
                desc:"百分百纯牛肉配双层香软芝士",
                price:20,
                img:"/images/2.jpg"
            },{
                id:3,
                title:"巨无霸",
                desc:"百分百纯牛肉配生菜、洋葱等",
                price:24,
                img:"/images/3.jpg"
            },{
                id:4,
                title:"麦辣鸡腿堡",
                desc:"黄金脆皮，鲜嫩的鸡腿肉",
                price:21,
                img:"/images/4.jpg"
            },{
                id:5,
                title:"板翘鸡腿堡",
                desc:"原块鸡排滑嫩多汁，与新鲜生菜",
                price:22,
                img:"/images/5.jpg"
            },{
                id:6,
                title:"麦香鸡腿堡",
                desc:"新鲜生菜与黄金脆皮，鲜嫩的鸡腿肉",
                price:12,
                img:"/images/6.jpg"
            },{
                id:7,
                title:"吉士汉堡包",
                desc:"百分百纯牛肉配搭脆香软芝士与美味番茄",
                price:12,
                img:"/images/7.jpg"
            },
        ],
        keyword:"",
    }),
    getters:{
        filterMeals:state =>{
            // return state.data.filter(
            //     (item) => item.title.indexOf(state.keyword) != -1)
            return state.data.filter((item) => {
                //检擦title里是否包含该字段有
                return item.title.indexOf(state.keyword) != -1
            })
        },
        cartMeals: (state) => {
            //购物袋中的汉堡 种类
            return state.data.filter( item => item.count > 0)
        },
        //计算总商品数量
        totalCount: state => {
            //如果购物车中没有商品则显示0
            if(state.cartMeals.length <= 0 ) return 0
            //购物车中有商品，计算商品总数量
            return state.cartMeals.reduce((result,item) => result + item.count , 0)
        },
        //计算商品总价格
        amount: state => {
            if(state.cartMeals.length <= 0 ) return 0
            //购物车中有商品，计算商品总价格
            return state.cartMeals.reduce((result,item) => result + (item.price*item.count) , 0)
        }
    },
    actions:{
        addMealToCart(meal){
            //修改购买食物的数量
            //meal还没有添加到购物袋中
            if(isNaN(meal.count)){
                meal.count = 0
            }
                meal.count++

        },
        subMealFromCart(meal){
            if(isNaN(meal.count) || meal.count <= 0) return
            meal.count--
        },
        clearCart(){
            this.cartMeals.forEach(item => item.count = 0)
        }
    }
})