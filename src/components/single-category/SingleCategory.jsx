import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../../helpers/Helpers";
import { setIsModalVisible, setModalData } from "../../store/modalSlice";
import { STATUS } from "../../utils/status";
import Error from "../error/Error";
import ImageLoading from "../image-loading/ImageLoading";
import Loader from "../loader/Loader";
import SingleProduct from "../single-product/SingleProduct";
import "./SingleCategory.scss";
import Zoom from "@mui/material/Zoom";
import { Fade } from "@mui/material";
const SingleCategory = ({ products, status }) => {
  const dispatch = useDispatch();
  const { isModalVisible } = useSelector((state) => state.modal);
  const viewModalHandler = (data) => {
    setToggle(!toggle);
    dispatch(setModalData(data));
    dispatch(setIsModalVisible(true));
  };
  const [toggle, setToggle] = useState(false);
  if (status === STATUS.ERROR) return <Error />;
  if (status === STATUS.LOADING) return <Loader />;
  return (
    <section className="cat-single py-5 bg-ghost-white">
      {isModalVisible && <SingleProduct />}
      <div className="container">
        <div className="cat-single-content">
          <div className="section-title">
            <h3 className="text-uppercase fw-7 text-regal-blue ls-1">
              {products[0].category.name}
            </h3>
          </div>
          <div className="product-items grid">
            {products.map((product) => (
              <div
                className="product-item bg-white"
                key={product.id}
                onClick={() => viewModalHandler(product)}
              >
                <div className="product-item-img">
                  {<ImageLoading src={product.images[0]} alt="" />}
                  {/* <img src={product.images[0]} alt="" /> */}
                  <div className="product-item-cat text-white fs-13 text-uppercase bg-gold fw-6">
                    {product.category.name}
                  </div>
                </div>
                <div className="product-item-body">
                  <h6 className="product-item-title text-pine-green fw-4 fs-15">
                    {product.title}
                  </h6>
                  <div className="product-item-price text-regal-blue fw-7 fs-18">
                    {formatPrice(product.price)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleCategory;
