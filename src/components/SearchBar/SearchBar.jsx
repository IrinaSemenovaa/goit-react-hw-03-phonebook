import { Component } from 'react';
import { searchInputStyles, inputContainerStyles } from './SearchInputStyles';

class SearchBar extends Component {
  render() {
    return (
      <div className={inputContainerStyles}>
        <input
          type="text"
          onChange={this.props.handleFilterChange}
          value={this.props.filter}
          className={searchInputStyles}
        />
      </div>
    );
  }
}

export default SearchBar;
