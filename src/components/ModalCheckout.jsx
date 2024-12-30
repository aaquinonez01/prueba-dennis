import '../styles/checkout.css'
export const ModalCheckout = ({showModal, handleCloseModal}) => {

  return (
    <div className="modal">
    <div className="modal__content">
      <h2 className="modal__title">Compra realizada exitosamente</h2>
      <p className="modal__message">
        Gracias por tu compra. Tu pedido ha sido procesado correctamente.
      </p>
      <button
        onClick={handleCloseModal}
        className="modal__button"
      >
        Volver a la página principal
      </button>
    </div>
  </div>
  )
}
