import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

//creating gallery out of results, using component of one item
const ImageGallery = ({ images, openModal, isOpen }) => {
  return (
    <ul className="ImageGallery">
      {images.map(image => {
        const { id, webformatURL, tags } = image;
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            openModal={openModal}
            isOpen={isOpen}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
