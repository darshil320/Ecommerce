import React from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";
import {GoTrash} from 'react-icons/go'
import {HiOutlineHeart} from 'react-icons/hi'

const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    <div className="CartItemCard">
      <img src={item.image} alt="ssa" />
      <div>
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        <span>{`Price: ₹${item.price}`}</span>
        <div className="cartIcons">
          <p onClick={() => deleteCartItems(item.product)}>
            <GoTrash />
          </p>
          <p>
            <HiOutlineHeart />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
