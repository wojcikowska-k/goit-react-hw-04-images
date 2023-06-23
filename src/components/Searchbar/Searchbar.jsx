import { Component } from 'react';

class SearchBar extends Component {
  state = {
    searchValue: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchValue } = this.state;
    // console.log('searchValue:', searchValue);
    this.props.onSubmit(searchValue);

    this.setState({ searchValue: '' });
  };

  render() {
    const { searchValue } = this.state;
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            name="searchValue"
            value={searchValue}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
