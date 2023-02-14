import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsModalVisible } from "../../store/modalSlice";
import { formatPrice } from "../../helpers/Helpers";
import "./SingleProduct.scss";
import { FaMinus, FaPlus, FaShoppingCart, FaTimes } from "react-icons/fa";
import { addToCart } from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";
const SingleProduct = () => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const increaseQty = () => {
    setQty((prev) => {
      let newQty = prev + 1;
      return newQty;
    });
  };
  const decreaseQty = () => {
    setQty((prev) => {
      let newQty = prev - 1;
      if (newQty < 1) newQty = 1;
      return newQty;
    });
  };
  const addToCartHandler = (product) => {
    let totalPrice = qty * product.price;
    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice,
    };
    dispatch(addToCart(tempProduct));
    dispatch(setIsModalVisible(false));
    navigate("/cart");
  };
  const { data: product } = useSelector((state) => state.modal);
  return (
    <div className="overlay-bg">
      <div className="product-details-modal bg-white">
        <button
          className="modal-close-btn flex flex-center fs-14"
          onClick={() => dispatch(setIsModalVisible(false))}
        >
          <FaTimes />
        </button>
        <div className="details-content grid">
          {/* details left */}
          <div className="details-left">
            <div className="details-img">
              <img src={product.images} alt={product.title} />
            </div>
          </div>
          {/* details right */}
          <div className="details-right">
            <div className="details-info">
              <h3 className="title text-regal-blue fs-22 fw-5">
                {product.title}
              </h3>
              <p className="description text-pine-green">
                {product.description}
              </p>
              <div className="price fw-7 fs-24">
                Price : {formatPrice(product.price)}
              </div>
              <div className="qty flex">
                <span className="text-light-blue qty-text">Qty : </span>
                <div className="qty-change flex">
                  <button
                    className="qty-dec fs-14 text-light-blue"
                    onClick={() => decreaseQty()}
                  >
                    <FaMinus />
                  </button>
                  <span className="qty-value flex flex-center">{qty}</span>
                  <button
                    className="qty-inc fs-14 text-light-blue"
                    onClick={() => increaseQty()}
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
              <button
                className="btn-primary add-to-cart-btn"
                onClick={() => addToCartHandler(product)}
              >
                <span className="btn-icon">
                  <FaShoppingCart />
                </span>
                <span className="btn-text">Add To Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
