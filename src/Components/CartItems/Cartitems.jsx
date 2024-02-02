import '../CartItem/Cartitem.css'
import Cartitem from '../CartItem/Cartitem'
import { KeyboardBackspace } from "@mui/icons-material";
import { useSelector } from 'react-redux'

const Cartitems = () => {
    const ItemList = useSelector((state) => state.cart.itemList)
  
  let total = 0 
  ItemList.forEach((item) =>{
    total += item.totalPrice
  }) 

  return (
    <div>
    <div className="cartWrapper">
        <div className="cartLeft">
          <div className="cartTitleContainer">
            <div className="cartTitle">PRODUCT</div>
            <div className="cartTitle">PRICE</div>
            <div className="cartTitle">QUNTITY</div>
            <div className="cartTitle">SUBTOTAL</div>
          </div>
          <ul>

      {ItemList.map((item) => (
        <li key={item.id}>
            <Cartitem id={item.id} img={item.img} title={item.title} rs={item.rs} quantity={item.quantity} totalPrice={item.totalPrice} />
        </li>
      ))}
    </ul> 
          <div className="cartButton">
            <button className="continue">
              <KeyboardBackspace style={{ marginRight: "10px" }} />
              CONTINUE SHOPPING
            </button>
            <button className="update">UPDATE CART</button>
          </div>
        </div>
        <div className="cartRight">
          <div className="CardSummary">
            <div className="summaryTitle">ORDER SUMMARY</div>
            <div className="summaryItem">
              <div className="summaryItemText">Subtotal</div>
              <div className="summaryItemPrice">Rs:{total} </div>
            </div>
            <div className="summaryItem">
              <div className="summaryItemText">Estimated Shipping</div>
              <div className="summaryItemPrice">Rs: 0</div>
            </div>
            <div className="summaryItem">
              <div className="summaryItemText">Shipping Discount</div>
              <div className="summaryItemPrice">Rs: 0</div>
            </div>
            <div
              className="summaryItem"
              style={{ fontWeight: "500", fontSize: "24px" }}
            >
              <div className="summaryItemText total">Total</div>
              <div className="summaryItemTotal">Rs:{total}</div>
            </div>
            <button className="summaryButton">CHECKOUT NOW</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cartitems