import React from 'react';
import "./Product.css";
import  ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../redux/action';


const Product = ({
    id, 
    title, 
    image, 
    price, 
    rating, 
    specification, 
    detail,
}) => {

    const dispatch = useDispatch();

    const onAddItemToBasket = () => {
        const item = {
            id,
            title,
            image,
            price,
            rating,
            specification,
            detail,
        };
        dispatch(addToBasket(item));
    };
  return (
    <div className="product">
      <div className="info">
        <Link to={`/product/${id}`} className="title">
            <p>{title}</p>
        </Link>
        <p className="price">
            <strong>$</strong>
            <strong>{price}</strong>
        </p>
        <div className="rating">
            {Array(rating)
            .fill()
            .map((_, index) => (
                <p key={index}>⭐</p>
            ))}
        </div>
        </div>
        <img src={image} alt=""/>
        <button onClick={onAddItemToBasket}>
            <i>
                <ShoppingCartOutlinedIcon />
            </i>
            Add to Basket
        </button>
      
    </div>
  );
}

export default Product;
