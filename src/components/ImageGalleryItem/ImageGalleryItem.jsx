const ImageGalleryItem = props => {
  const { id, largeImageURL, webformatURL, tags, openModal } = props;

  return (
    <li className="ImageGalleryItem" key={id} onClick={openModal}>
      <a href={largeImageURL}>
        <img
          className="ImageGalleryItem-image"
          src={webformatURL}
          alt={tags}
          loading="lazy"
        />
      </a>
    </li>
  );
};

export default ImageGalleryItem;
