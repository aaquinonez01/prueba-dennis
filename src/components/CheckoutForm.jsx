import '../styles/checkout.css'

export const CheckoutForm = () => {
  return (
    <div className="checkout-form">
      <h2 className="checkout-form__title">Información de pago</h2>
      <form className="checkout-form__form">
        {/* Nombre y Apellido */}
        <div className="checkout-form__grid">
          <div className="checkout-form__field">
            <label htmlFor="firstName" className="checkout-form__label">Nombre</label>
            <input type="text" id="firstName" name="firstName" placeholder="Juan" className="checkout-form__input" />
          </div>
          <div className="checkout-form__field">
            <label htmlFor="lastName" className="checkout-form__label">Apellido</label>
            <input type="text" id="lastName" name="lastName" placeholder="Pérez" className="checkout-form__input" />
          </div>
        </div>

        {/* Email */}
        <div className="checkout-form__field">
          <label htmlFor="email" className="checkout-form__label">Email</label>
          <input type="email" id="email" name="email" placeholder="juan@example.com" className="checkout-form__input" />
        </div>

        {/* Dirección */}
        <div className="checkout-form__field">
          <label htmlFor="address" className="checkout-form__label">Dirección</label>
          <input type="text" id="address" name="address" placeholder="Calle Principal 123" className="checkout-form__input" />
        </div>

        {/* Ciudad, Provincia y Código Postal */}
        <div className="checkout-form__grid checkout-form__grid--3-cols">
          <div className="checkout-form__field">
            <label htmlFor="city" className="checkout-form__label">Ciudad</label>
            <input type="text" id="city" name="city" placeholder="Madrid" className="checkout-form__input" />
          </div>
          <div className="checkout-form__field">
            <label htmlFor="state" className="checkout-form__label">Provincia</label>
            <input type="text" id="state" name="state" placeholder="Madrid" className="checkout-form__input" />
          </div>
          <div className="checkout-form__field">
            <label htmlFor="zip" className="checkout-form__label">Código Postal</label>
            <input type="text" id="zip" name="zip" placeholder="28001" className="checkout-form__input" />
          </div>
        </div>

        {/* Información de pago */}
        <div className="checkout-form__field">
          <label htmlFor="cardNumber" className="checkout-form__label">Número de tarjeta</label>
          <input type="text" id="cardNumber" name="cardNumber" placeholder="1234 5678 9012 3456" className="checkout-form__input" />
        </div>
        <div className="checkout-form__grid">
          <div className="checkout-form__field">
            <label htmlFor="expDate" className="checkout-form__label">Fecha de expiración</label>
            <input type="text" id="expDate" name="expDate" placeholder="MM/AA" className="checkout-form__input" />
          </div>
          <div className="checkout-form__field">
            <label htmlFor="cvv" className="checkout-form__label">CVV</label>
            <input type="text" id="cvv" name="cvv" placeholder="123" className="checkout-form__input" />
          </div>
        </div>

        {/* Métodos de pago */}
        <fieldset className="checkout-form__fieldset">
          <legend className="checkout-form__legend">Método de pago</legend>
          <div className="checkout-form__radio-group">
            <div className="checkout-form__radio">
              <input id="card" name="paymentMethod" type="radio" defaultChecked className="checkout-form__radio-input" />
              <label htmlFor="card" className="checkout-form__radio-label">Tarjeta de crédito</label>
            </div>
            <div className="checkout-form__radio">
              <input id="paypal" name="paymentMethod" type="radio" className="checkout-form__radio-input" />
              <label htmlFor="paypal" className="checkout-form__radio-label">PayPal</label>
            </div>
          </div>
        </fieldset>

        {/* Botón de enviar */}
        <button type="submit" className="checkout-form__submit">
          Realizar pedido
        </button>
      </form>
    </div>
  );
};
