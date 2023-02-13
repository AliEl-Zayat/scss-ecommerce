import "./Home.scss";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "../../components/slider/Slider";
import Category from "../../components/category/Category";
import ProductList from "../../components/product-list/ProductList";
import {
  fetchCategories,
  fetchProductsByCategory,
} from "../../store/categorySlice";
import SingleCategory from "../../components/single-category/SingleCategory";
import { fetchProducts } from "../../store/productSlice";
const Home = () => {
  const dispatch = useDispatch();
  const { data: categories, status: categoryStatus } = useSelector(
    (state) => state.category
  );
  const { data: products, status: productStatus } = useSelector(
    (state) => state.product
  );
  const { catProductAll: productsByCategory, catProductAllStatus } =
    useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    dispatch(fetchProductsByCategory(1, "all"));
    dispatch(fetchProductsByCategory(2, "all"));
  }, []);

  return (
    <div className="home-page">
      <Slider />
      <Category categories={categories} status={categoryStatus} />

      <ProductList products={products} status={categoryStatus} />
      {/* Category one products */}
      <section>
        {productsByCategory[0] && (
          <SingleCategory
            products={productsByCategory[0]}
            status={catProductAllStatus}
          />
        )}
      </section>
      {/* Category two products*/}
      {productsByCategory[1] && (
        <SingleCategory
          products={productsByCategory[1]}
          status={catProductAllStatus}
        />
      )}
    </div>
  );
};
export default Home;
