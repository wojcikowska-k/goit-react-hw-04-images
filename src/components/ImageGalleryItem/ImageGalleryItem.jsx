const ImageGalleryItem = props => {
  //   console.log('props: ', props);
  const { id, largeImageURL, webformatURL, tags } = props;
  return (
    <li className="ImageGalleryItem" key={id}>
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
