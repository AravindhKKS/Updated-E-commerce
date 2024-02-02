import { useDispatch } from 'react-redux';
import'./Cartitem.css'
import { Add, Remove } from "@mui/icons-material";
import { cartActions } from '../../store/cartSlice';

const Cattitem = ({id,img,title,rs,quantity,totalPrice}) => {
  const style = {
    width: "12px",
    height: "12px",
    padding: "10px",
    border: "1px solid lightgray",
    cursor: "pointer",
  };
const dispatch = useDispatch()
const RemoveToQuantity = () => {
  dispatch(cartActions.removeToItem(id))
}

  const AddToQuantity = () => {
dispatch(cartActions.addToItem({
  id,
  img,
  title,
  rs
}))
  }
  return (
    <>
     <div className="cartProduct">
            <div className="cartImage">
              <img
                src={img}
                alt=""
              />
              <p className="productName">{title}</p>
            </div>
            <div className="price">₹ {rs}</div>
            <div className="quntity">
              <Remove className="carticon" style={style} onClick={RemoveToQuantity}/>
              <span>{quantity}</span>
              <Add className="carticon" style={style} onClick={AddToQuantity} />
            </div>
            <div className="subtotal">₹ {totalPrice}</div>
          </div>
    </>
  )
}

export default Cattitem


