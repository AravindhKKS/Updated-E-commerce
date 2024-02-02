 import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
    itemList: [],
    totalquantity :0,
    changed:false,
    selectProduct:null,
},
reducers:{
    addToItem(state,action){
        state.changed= true
     const newItem = action.payload
     const existingItem = state.itemList.find((item) => item.id === newItem.id)
if(existingItem){
    existingItem.quantity++
    existingItem.totalPrice += newItem.rs
}else{
    state.itemList.push({
        id : newItem.id,
        title:newItem.title,
        img:newItem.img,
        rs: newItem.rs,
        totalPrice:newItem.rs,
        quantity:1,
        bg:newItem.bg
        
    })
    state.totalquantity++
}
   },
    removeToItem(state,action){
    state.changed = true
const id  = action.payload
const existingItem = state.itemList.find((item) => item.id === id )
if(existingItem.quantity === 1){
state.itemList = state.itemList.filter((item) => item.id !== id) 
state.totalquantity--
}else{
    existingItem.quantity--
    existingItem.totalPrice -= existingItem.rs
}
    },
    replaceToData(state,action){
        state.totalquantity= action.payload.totalquantity
        state.itemList = action.payload.itemList
        },

   selectProduct(state, action) {
    state.selectProduct = action.payload
   }
}

})


export const cartActions = cartSlice.actions

export default cartSlice;