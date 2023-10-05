import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentItemAction } from "../redux/actions/dataActions";

import { CartIcon, MinusIcon, PlusIcon } from "../utils/images";

const Cart = () => {
  const dispatch = useDispatch();
  const currentItems = useSelector((state) => state.currentItems);
  const [riderTip, setRiderTip] = useState(0);
  const [serviceFee] = useState(0.99);
  const [deliveryFee] = useState(0.99);

  const updateCartItemQuantity = (item, newQuantity) => {
    console.log("item--------", item);

    if (newQuantity <= 0) {
      const updatedCart = currentItems.cart.filter(
        (cartItem) => cartItem.id !== item.id
      );
      dispatch(updateCurrentItemAction({ ...currentItems, cart: updatedCart }));
    } else {
      const updatedCart = currentItems.cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, qty: newQuantity };
        }
        return cartItem;
      });
      dispatch(updateCurrentItemAction({ ...currentItems, cart: updatedCart }));
    }
  };

  const calculateSubtotal = () => {
    return currentItems.cart.reduce(
      (total, item) => total + item.qty * item.price,
      0
    );
  };

  const total = calculateSubtotal() + riderTip + serviceFee + deliveryFee;

  return (
    <div className="cart-wrapper">
      {currentItems.cart.length === 0 ? (
        <div className="text-center">
          <CartIcon />
          <p>Your basket is empty</p>
        </div>
      ) : (
        <>
          <h3>Your Order</h3>
          <ul className="cart-ul">
            {currentItems.cart.map((item, index) => (
              <li key={index} className="hstack gap-1">
                <span>{item.name}</span>{" "}
                <div className="ms-auto hstack qty-btn-wrapper">
                  <button
                    onClick={() =>
                      updateCartItemQuantity(item, Math.max(item.qty - 1, 0))
                    }
                  >
                    <MinusIcon />
                  </button>
                  <div className="qty">{item.qty}</div>
                  <button
                    onClick={() => updateCartItemQuantity(item, item.qty + 1)}
                  >
                    <PlusIcon />
                  </button>
                  <p>£{item.qty * item.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <hr />
          <div className="hstack">
            <p className="price">Subtotal</p>
            <p className="price ms-auto">£{calculateSubtotal()}</p>
          </div>
          <div className="hstack">
            <p className="price">Service fee</p>
            <p className="price ms-auto">£{serviceFee.toFixed(2)}</p>
          </div>
          <div className="hstack">
            <p className="price">Delivery fee</p>
            <p className="price ms-auto">£{deliveryFee.toFixed(2)}</p>
          </div>
          <a href="/#">How fees work</a>
          <hr />
          <div className="hstack">
            <p className="price">Rider tip</p>
            <div className="ms-auto hstack gap-1 qty-btn-wrapper">
              <button onClick={() => setRiderTip(Math.max(riderTip - 1, 0))}>
                <MinusIcon />
              </button>
              <button onClick={() => setRiderTip(riderTip + 1)}>
                <PlusIcon />
              </button>
              <div className="qty">£{riderTip.toFixed(2)}</div>
            </div>
          </div>
          <div className="hstack mb-3">
            <p className="price">Total</p>
            <p className="price ms-auto">
              <strong>£{total.toFixed(2)}</strong>
            </p>
          </div>
        </>
      )}

      <button
        className="btn btn-primary"
        disabled={currentItems.cart.length === 0}
      >
        Go to checkout
      </button>
    </div>
  );
};

export default Cart;
