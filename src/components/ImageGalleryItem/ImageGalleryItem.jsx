import Modal from '../Modal/Modal';

const ImageGalleryItem = props => {
  const { id, largeImageURL, webformatURL, tags, openModal, isOpen } = props;

  return (
    <div>
      <li className="ImageGalleryItem" key={id} onClick={openModal}>
        <img
          className="ImageGalleryItem-image"
          src={webformatURL}
          alt={tags}
          loading="lazy"
        />
      </li>

      {isOpen && <Modal largeImageURL={largeImageURL} tags={tags} />}
    </div>
  );
};

export default ImageGalleryItem;
