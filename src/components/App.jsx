import axios from 'axios';
import { Component } from 'react';
import { Loader } from 'components/Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './Searchbar/Searchbar';

//get all data from API
const API_URL = 'https://pixabay.com/api/?';
const API_KEY = '35750210-01538b5c80567ccad47fd3a82';

const fetchImagesWithQuery = async searchValue => {
  const respone = await axios.get(API_URL, {
    params: {
      key: API_KEY,
      q: searchValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: 1,
      per_page: 12,
    },
  });
  return respone.data.hits;
};

// let page = 1;

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    searchValue: '',
  };

  //checking if any data has changed
  // shouldComponentUpdate(nextProps) {
  //   if (nextProps.searchValue !== this.props.searchValue) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  //putting new results into state
  async componentDidUpdate(prevProps, prevState) {
    const { searchValue } = this.state;

    if (searchValue === prevState.searchValue) return;

    try {
      this.setState({ isLoading: true });
      const images = await fetchImagesWithQuery(searchValue);
      this.setState({ images });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  valueFromSubmit = e => {
    this.setState({ searchValue: e });
    // console.log('event from submit:', e);
  };

  render() {
    const { images, error, isLoading } = this.state;

    if (error) {
      return <div>Error - something went wrong</div>;
    }

    if (isLoading) {
      return <Loader />;
    }
    return (
      <div>
        <SearchBar onSubmit={this.valueFromSubmit} />
        <ImageGallery images={images} />
      </div>
    );
  }
}
