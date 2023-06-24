import axios from 'axios';
import { Component } from 'react';
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

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    searchValue: '',
    page: 1,
    isOpen: false,
  };

  //putting starting values from submit
  valueFromSubmit = e => {
    this.setState({ searchValue: e, page: 1, images: [] });
  };

  //putting new results into state
  async componentDidUpdate(prevProps, prevState) {
    const { searchValue, page } = this.state;

    if (searchValue === prevState.searchValue && page === prevState.page)
      return;

    try {
      this.setState({ isLoading: true });
      const images = await fetchImagesWithQuery(searchValue, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  incrementPageNumber = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = e => {
    this.setState({ isOpen: true });
  };

  render() {
    const { images, error, isLoading, isOpen } = this.state;

    if (error) {
      return <div>Error - something went wrong</div>;
    }

    return (
      <div>
        <SearchBar onSubmit={this.valueFromSubmit} />
        <ImageGallery images={images} openModal={this.openModal} />
        {isLoading && <Loader />}
        <Button incrementPageNumber={this.incrementPageNumber} />
        {isOpen && (
          <Modal largeImageURL={images.largeImageURL} tags={images.tags} />
        )}
      </div>
    );
  }
}
