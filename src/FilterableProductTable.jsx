import React, { Component } from "react";
import "./FilterableProductTable.css";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const productListMock = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

const fetchAPI = () => Promise.resolve(productListMock);

export class FilterableProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
      searchValue: "",
      inStock: false,
    };
  }
  componentDidMount() {
    fetchAPI().then((productList) => {
      this.setState({ productList });
    });
  }

  handleChange = (event) => {
    const { name } = event.target;
    if (name === "searchProduct") {
      console.log(event.target.value);

      this.setState({ searchValue: event.target.value });
    } else if (name === "inStock") {
      this.setState({ inStock: event.target.checked });
    }
  };

  render() {
    const { productList, searchValue, inStock } = this.state;
    return (
      <div className="FilterableProductTable">
        <SearchBar
          searchValue={searchValue}
          inStock={inStock}
          handleChange={this.handleChange}
        />
        <ProductTable
          productList={productList}
          searchValue={searchValue}
          inStock={inStock}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
