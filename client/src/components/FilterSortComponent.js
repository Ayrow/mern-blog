const FilterSortComponent = ({ sortOptions, sort, handleChange, search }) => {
  const handleSearch = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  return (
    <div className='flex justify-between'>
      <div>
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
      {search && (
        <div>
          <p>Search user</p>
          <input
            type='text'
            name='search'
            onChange={handleSearch}
            id=''
            className=' border border-blue-900'
          />
        </div>
      )}
    </div>
  );
};

export default FilterSortComponent;
