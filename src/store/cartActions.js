
// import { cartActions } from "./cartSlice"

// export const fetchData = () => {
//     return async(dispatch) => {

//     const fetchHandler = async () => {
//         const res = await fetch("https://e-commerce-b8a83-default-rtdb.firebaseio.com/products.json")
//         const data = await res.json()
//         return data
//     }
// try{
//     const cartData = await fetchHandler()
// dispatch(cartActions.replaceToData(cartData))
// }catch(err){
//     console.log(err)
// }
//     }
// }

// export  const sendCartData = (cart) => {

//     return async () => {
//        const sendRequest = async () => {
//                 const res =  await fetch("https://e-commerce-b8a83-default-rtdb.firebaseio.com/products.json ",
//                                       {
//                                       method:'PUT',
//                                     body:JSON.stringify(cart)
//                                     }
//                                     )
//                                      await res.json()
//                  }
//      try{
// await sendRequest()
//      }catch(err){
//         console.log(err)
//         }
//  }
// }
