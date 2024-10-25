import React, { useContext } from "react";
import LayOut from "../../components/Layout/LayOut";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";
import classes from "./Cart.module.css";
import { Link } from 'react-router-dom';
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { Type } from '../../Utility/action.type';
import {IoIosArrowDown} from 'react-icons/io';
import {IoIosArrowUp} from 'react-icons/io';
function Cart() {
  const [{user,basket}, dispatch ]= useContext(DataContext);  // Correct access to state
  //const { basket, user } = state;  // Destructure basket and user from state

  // Calculate the total price of items in the basket
  const total = basket.reduce((amount, item) => item.price * item.amount + amount, 0);

  // Increment item quantity in the basket
  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  // Decrement item quantity in the basket
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart__container}>
          <h2>Hello, {user ? user.name : "Guest"}</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {basket?.length === 0 ? (
            <p>Oops! No item in your cart</p>
          ) : (
            basket?.map((item, i) => (
              <section key={i} className={classes.cart_product}>
                <ProductCard
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                />
                <div>
                  <button className={classes.btn}onClick={() => increment(item)}><IoIosArrowUp size={30}/></button>
                  <button  className={classes.btn}onClick={() => decrement(item.id)}><IoIosArrowDown size={30}/></button>
                </div>
              </section>
            ))
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} /> {/* Now using the calculated total */}
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payment">Continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;
