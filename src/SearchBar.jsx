import React, { Component } from "react";

export class SearchBar extends Component {
  render() {
    const { searchValue, inStock, handleChange } = this.props;

    return (
      <form>
        <input
          type="text"
          name="searchProduct"
          placeholder="Search..."
          value={searchValue}
          onChange={handleChange}
        />
        <div>
          <input
            type="checkbox"
            name="inStock"
            value={inStock}
            onChange={handleChange}
          />
          Only show products in stock
        </div>
      </form>
    );
  }
}

export default SearchBar;
