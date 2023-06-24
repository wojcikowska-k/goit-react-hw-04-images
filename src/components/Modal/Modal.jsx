const Modal = ({ bigImageURL, alt, closeModal }) => {
  return (
    <div class="Overlay" onClick={closeModal}>
      <div class="Modal">
        <img src={bigImageURL} alt={alt} />
      </div>
    </div>
  );
};

export default Modal;
