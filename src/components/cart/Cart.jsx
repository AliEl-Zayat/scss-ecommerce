import { FaChevronRight, FaHome, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartTotal } from "../../store/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const {
    data: cartProducts,
    totalItems,
    totalAmount,
    deliveryCharge,
  } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  const emptyCartMsg = <h4 className="text-red fw-6">No items found!</h4>;

  return (
    <div className="cart-page">
      <div className="container">
        <div className="breadcrumb">
          <ul className="breadcrumb-items flex">
            <li className="breadcrumb-item">
              <Link to="/">
                <FaHome />
                <span className="breadcrumb-separator">
                  <FaChevronRight />
                </span>
              </Link>
            </li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
      <div className="bg-ghost-white py-5">
        <div className="container">
          <div className="section-title bg-ghost-white">
            <h3 className="text-uppercase fw-7 text-regal-blue ls-1">
              My Cart
            </h3>
          </div>
          {cartProducts.length === 0
            ? emptyCartMsg
            : cartProducts.map((cartProduct) => (
                <div className="cart-content grid">
                  <div className="cart-left">
                    <div className="cart-item-img flex flex-column bg-white">
                      <img
                        src={cartProduct.images[0]}
                        alt={cartProduct.title}
                      />
                      <button className="btn-square rmv-from-cart-btn">
                        <span className="btn-square-icon">
                          <FaTrash />
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-info">
                    <h6 className="fs-16 fw-5 text-light-blue">
                      {cartProduct.title}
                    </h6>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};
export default Cart;
