import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Catagory.module.css';

function CategoryCard({ data }) {
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name}`}>  {/* This link should match the route */}
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt={data.title} />
        <p>Shop Now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
