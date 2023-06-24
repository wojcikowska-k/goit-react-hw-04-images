import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

//creating gallery out of results, using component of one item
const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className="ImageGallery">
      {images.map(image => {
        const { id, largeImageURL, webformatURL, tags } = image;
        return (
          <ImageGalleryItem
            key={id}
            largeImageURL={largeImageURL}
            webformatURL={webformatURL}
            tags={tags}
            openModal={openModal}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
