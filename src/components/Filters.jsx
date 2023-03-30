import { useState } from 'react';
import './Filters.css';

const Filters = ({ onChange }) => {
  const [minPrice, setMinPrice] = useState(0);

  const handleChangeMinPrice = (e) => {
    setMinPrice(e.target.value);
    onChange(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  };

  const handleChangeCategory = (e) => {
    onChange(prevState => ({
    ...prevState,
    category: e.target.value
    }))
  };

  return (
    <section className="filters">

      <div>
        <label htmlFor="price">Minimal Price</label>
        <input type="range" id="price" min="0" max="1000" onChange={handleChangeMinPrice} />
        <span>${minPrice}</span>
      </div>

      <div><label htmlFor="category">Category</label>
        <select id="category" onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </section>
  )
}

export default Filters
