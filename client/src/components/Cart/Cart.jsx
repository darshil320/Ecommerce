import React, { Fragment } from 'react'
import "./Cart.css"
import CartItemCard from "./CartItemCard.jsx"   
import { useSelector, useDispatch } from "react-redux"
import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";
import { useNavigate } from 'react-router-dom';


const Cart = () => {
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const {cartItems} = useSelector((state)=> state.cart);
          const increaseQuantity = (id, quantity, stock) => {
            const newQty = quantity + 1;
            if (newQty >= stock) {
              return;
            }
            dispatch(addItemsToCart(id, newQty));
          };
          
          const decreaseQuantity = (id, quantity) => {
            const newQty = quantity - 1;
            if (quantity <= 1) {
              return;
            }
            dispatch(addItemsToCart(id, newQty));
          };
          const deleteCartItems = (id) => {
            dispatch(removeItemsFromCart(id));
          }

          const checkoutHandler = () =>{
            navigate("/login?redirect=shipping")
          }

  return (
    <Fragment>
      <div className="cartPage">
        <div className="cartHeader">
          <p>Product</p>
          <p>Quantity</p>
          <p>SubTotal</p>
        </div>
        {cartItems &&
          cartItems.map((item) => (
            <div className="cartContainer">
              <CartItemCard item={item} deleteCartItems={deleteCartItems} />
              <div className="cartInput">
                <button
                  onClick={() => decreaseQuantity(item.product, item.quantity)}
                >
                  -
                </button>
                <input type="number" className='cartInput' value={item.quantity} readOnly />
                <button
                  onClick={() =>
                    increaseQuantity(item.product, item.quantity, item.stock)
                  }
                >
                  +
                </button>
              </div>
              <p className="cartSubtotal">{`₹${item.price * item.quantity}`}</p>
            </div>
          ))}
        <div className="cartGrossProfit">
          <div></div>
          <div className="cartGrossProfitBox">
            <p>Total</p>
            <p>{`₹${cartItems.reduce(
              (acc, item) => acc + item.quantity * item.price,
              0
            )}`}</p>
          </div>
          <div></div>
          <div className="checkOutBtn">
            <button onClick={checkoutHandler}>Check Out</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Cart