import { CartList } from "../components/CartList";
import { OrderSummary } from "../components/OrderSummary";
import { CheckoutForm } from "../components/CheckoutForm";
import { MainLayout } from "../layout/MainLayout";
import { useCartStore } from "../store/cartStore";
import { useState } from "react";
import { ModalCheckout } from "../components/ModalCheckout";
import { useNavigate } from "react-router-dom";

export function CheckoutPage() {

  const clearCart = useCartStore((state) => state.clearCart);
  const navigate = useNavigate();
  const handleCloseModal = () => {
    setShowModal(false);
    clearCart();
    navigate("/");
  };
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const cartItems = useCartStore((state) => state.cartItems);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5.99;

  return (
    <MainLayout>
      <div className="checkout-page">
        <h1 className="checkout-page__title">Checkout</h1>
        <div className="checkout-page__grid">
          <div className="checkout-page__main">
            <CartList />
            <CheckoutForm />
          </div>
          <div className="checkout-page__sidebar">
            <OrderSummary
              subtotal={subtotal}
              shipping={shipping}
              handleShowModal={handleShowModal}
            />
          </div>
        </div>
      </div>
      {showModal && (
        <ModalCheckout showModal={showModal} handleCloseModal={handleCloseModal} />
      )}
    </MainLayout>
  );
}
