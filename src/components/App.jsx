import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './Searchbar/Searchbar';
import Button from './Button/Button';
import Modal from './Modal/Modal';

//get all data from API
const API_URL = 'https://pixabay.com/api/?';
const API_KEY = '35750210-01538b5c80567ccad47fd3a82';

const fetchImagesWithQuery = async (searchValue, page) => {
  const respone = await axios.get(API_URL, {
    params: {
      key: API_KEY,
      q: searchValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 12,
    },
  });
  return respone.data.hits;
};

export const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState('1');
  const [isOpen, setIsOpen] = useState(false);
  const [bigImageURL, setBigImageURL] = useState('');
  const [alt, setAlt] = useState('');

  //putting starting values from submit
  const valueFromSubmit = e => {
    setSearchValue(e);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    const asyncFunction = async () => {
      if (searchValue === '') return;
      setIsLoading(true);
      try {
        const images = await fetchImagesWithQuery(searchValue, page);
        if (page === 1) {
          setImages(images);
        } else {
          setImages(prev => [...prev, ...images]);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    asyncFunction();
  }, [searchValue, page]);

  const incrementPageNumber = () => {
    setPage(page + 1);
  };

  const openModal = (largeImageURL, tags) => {
    setIsOpen(true);
    setBigImageURL(largeImageURL);
    setAlt(tags);
  };

  const closeModal = () => setIsOpen(false);

  if (error) {
    return <div>Error - something went wrong</div>;
  }

  return (
    <div>
      <SearchBar onSubmit={valueFromSubmit} />
      <ImageGallery images={images} openModal={openModal} isOpen={isOpen} />
      {isLoading && <Loader />}
      {images.length >= 12 && (
        <Button incrementPageNumber={incrementPageNumber} />
      )}
      {isOpen && (
        <Modal bigImageURL={bigImageURL} alt={alt} closeModal={closeModal} />
      )}
    </div>
  );
};
