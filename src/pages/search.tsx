import { useState } from "react";
import ProductCard from "../components/products-card";

const Search = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const isNextPage = page < 4; // Placeholder value, should be updated based on actual data
  const isPrevPage = page > 1; // Placeholder value, should be updated based on actual data

  const addToCartHandler = () => {
    // Implement your addToCartHandler logic here
  };

  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>Sort</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Price (Low to High)</option>
            <option value="dsc">Price (High to Low)</option>
          </select>
        </div>

        <div>
          <h4>Max Price: {maxPrice || ""}</h4>
          <input
            type="range"
            min={100}
            max={100000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>

        <div>
          <h4>Category</h4>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">None</option>
            <option value="all">All</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </aside>

      <main>
        <h1>Search</h1>
        <input

          type="text"
          value={search}
          placeholder="Search by name..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="search-product-list">
          <ProductCard
            productId="skflas"
            name="keyboard"
            price={10000}
            stock={20}
            handler={addToCartHandler}
            photo="https://m.media-amazon.com/images/I/61oCoa9FtqL._SX425_.jpg"
          />
          {/* Render more ProductCard components based on search results */}
        </div>

        <article>
          <button disabled={!isPrevPage} onClick={() => setPage((prev) => prev - 1)}>Prev</button>
          <span>
            {page} of {page} {/* Replace "4" with the actual total number of pages */}
          </span>
          <button disabled={!isNextPage} onClick={() => setPage((prev) => prev + 1)}>Next</button>
        </article>
      </main>
    </div>
  );
};

export default Search;
