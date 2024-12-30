import '../styles/checkout.css'
export const OrderSummary = ({ subtotal, shipping, handleShowModal }) => {
  const total = subtotal + shipping;

  return (
    <div className="order-summary">
      <div className="order-summary__container">
        <h2 className="order-summary__title">Resumen del pedido</h2>
        <div className="order-summary__details">
          <div className="order-summary__row">
            <span className="order-summary__label">Subtotal</span>
            <span className="order-summary__value">${subtotal.toFixed(2)}</span>
          </div>
          <div className="order-summary__row">
            <span className="order-summary__label">Envío</span>
            <span className="order-summary__value">${shipping.toFixed(2)}</span>
          </div>
          <hr className="order-summary__divider" />
          <div className="order-summary__row order-summary__row--total">
            <span className="order-summary__label">Total</span>
            <span className="order-summary__value">${total.toFixed(2)}</span>
          </div>
        </div>
        <button className="order-summary__button" onClick={handleShowModal}>
          Proceder al pago
        </button>
      </div>
    </div>
  );
};
