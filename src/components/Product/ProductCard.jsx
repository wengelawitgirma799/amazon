import React, { useState, useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function ProductCard({
  product,
  flex,
  renderDesc,
  renderAdd,
  showSize,
  showButtons,
}) {
  const { image, title, id, rating, price, description, size } = product;

  const [state, dispatch] = useContext(DataContext);
  const [selectedSize, setSelectedSize] = useState("medium");

  //the add to cart consists of what to dispatch it contain the type AND ITEM
  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
        selectedSize,
        size: selectedSize,
      },
    });
  };

  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" className={classes.img_container} />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating?.rate} precision={0.1} />
          {/*count  */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        {showButtons && (
          <div>
            <button
              className={classes.buttonSize}
              onClick={() => setSelectedSize("small")}
            >
              S
            </button>
            <button
              className={classes.buttonSize}
              onClick={() => setSelectedSize("medium")}
            >
              M
            </button>
            <button
              className={classes.buttonSize}
              onClick={() => setSelectedSize("large")}
            >
              L
            </button>
            <p>Size: {size ? size : selectedSize}</p>
          </div>
        )}

        {showSize && <p>Size: {size ? size : selectedSize}</p>}
        {renderAdd && (
          <div>
            <button
              className={`${classes.button} ${classes.addToCartButton}`}
              onClick={addToCart}
              //add to cart function is called when button is clicked
            >
              Add to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
