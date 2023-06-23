import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

//creating gallery out of results, using component of one item
const ImageGallery = ({ images }) => {
  return (
    <ul className="ImageGallery">
      {images.map(image => {
        const { id, largeImageURL, webformatURL, tags } = image;
        return (
          <ImageGalleryItem
            id={id}
            largeImageURL={largeImageURL}
            webformatURL={webformatURL}
            tags={tags}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
