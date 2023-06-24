const ImageGalleryItem = props => {
  const { id, webformatURL, tags, openModal, largeImageURL } = props;

  return (
    <div>
      <li
        className="ImageGalleryItem"
        key={id}
        onClick={openModal(largeImageURL)}
      >
        <img
          className="ImageGalleryItem-image"
          src={webformatURL}
          alt={tags}
          loading="lazy"
        />
      </li>
    </div>
  );
};

export default ImageGalleryItem;
