import { useState } from 'react';
import { usePostsContext } from '../context/posts/posts.context';

const FilterSortComponent = () => {
  const { sortOptions, sort, handleChange } = usePostsContext();

  const handleSearch = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  return (
    <div className=''>
      <p>Sort</p>

      <select
        name='sort'
        value={sort}
        onChange={handleSearch}
        className='block w-52 py-2 px-3 rounded-md capitalize
                shadow-sm focus:outline-none focus:ring-primary-500
                focus:border-primary-500 border bg-white border-black text-black'>
        {sortOptions.map((item, index) => {
          return (
            <option key={index} value={item} className=''>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FilterSortComponent;
