const Modal = ({ largeImageURL, tags }) => {
  <div class="Overlay">
    <div class="Modal">
      <h1 className="test">TEST</h1>
      <img src={largeImageURL} alt={tags} />
    </div>
  </div>;
};

export default Modal;
