import React, { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export class ProductTable extends Component {
  render() {
    const { productList, searchValue, inStock } = this.props;
    let lastCategory = null;

    const rows = [];
    productList.forEach((product) => {
      if (inStock && !product.stocked) return;
      if (product.name.toLowerCase().indexOf(searchValue) === -1) return;
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            key={product.category}
            category={product.category}
          />
        );
      }
      rows.push(<ProductRow key={product.name} product={product} />);
      lastCategory = product.category;
    });

    // const rows = productList.map((product) => {
    //   if (product.category !== lastCategory) {
    //     lastCategory = product.category;
    //     return (
    //       <ProductCategoryRow
    //         key={product.category}
    //         category={product.category}
    //       />
    //     );
    //   }
    //   return <ProductRow key={product.name} product={product} />;
    // });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ProductTable;
