import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import LayOut from "../../components/Layout/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import Loader from "../../Components/Loader/Loder";
import ProductCard from "../../components/Product/ProductCard";
function Results() {
  const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();
  useEffect(() => {
     setIsLoading(true);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
         setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
         setIsLoading(false);
      });
  }, []);
//what will this page3 do is that it take the baseurl from endpoints and fetch the data using axios then pass all this data to product card to be displayed i mean it pass it as props
  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category / {categoryName}</p>
          <hr />
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderDesc={false}
                renderAdd={true}
              />
            ))}
          </div>
        </section>
      )}
    </LayOut>
  );
}

export default Results;
