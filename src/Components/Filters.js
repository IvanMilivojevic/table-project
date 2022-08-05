const Filters = ({
  sortValues,
  sortHandler,
  filterValues,
  filterHandler,
  searchValue,
  searchHandler,
  activeTableData
}) => {
  const { column, direction } = sortValues;
  const { group, defaultShippingStatus } = filterValues;
  const filterOptionsGroup = [];
  const filterOptionsDefaultShippingStatus = [];

  activeTableData.forEach(record => {
    if (record.group?.name && !filterOptionsGroup.includes(record.group.name)) {
      filterOptionsGroup.push(record.group.name);
    }
    if (
      record.defaultShippingStatus?.name &&
      !filterOptionsDefaultShippingStatus.includes(record.defaultShippingStatus.name)
    ) {
      filterOptionsDefaultShippingStatus.push(record.defaultShippingStatus.name);
    }
  });

  return (
    <div className="filters">
      Sort By:
      <select
        name="column"
        onChange={e => sortHandler(e.target.name, e.target.value)}
        value={column}
      >
        <option value=""></option>
        <option value="acronym">Acronym</option>
        <option value="sortOrder">Sort Order</option>
      </select>
      Sort Direction:
      <select
        name="direction"
        onChange={e => sortHandler(e.target.name, e.target.value)}
        value={direction}
      >
        <option value="ASC">ASC</option>
        <option value="DESC">DESC</option>
      </select>
      Filter By Group:
      <select
        name="group"
        onChange={e => filterHandler(e.target.name, e.target.value)}
        value={group}
      >
        <option value=""></option>
        {filterOptionsGroup.map(filter => (
          <option key={filter} value={filter}>
            {filter}
          </option>
        ))}
      </select>
      Filter By Default Shipping Status:
      <select
        name="defaultShippingStatus"
        onChange={e => filterHandler(e.target.name, e.target.value)}
        value={defaultShippingStatus}
      >
        <option value=""></option>
        {filterOptionsDefaultShippingStatus.map(filter => (
          <option key={filter} value={filter}>
            {filter}
          </option>
        ))}
      </select>
      Search...
      <input type="text" onChange={e => searchHandler(e.target.value)} value={searchValue} />
    </div>
  );
};

export default Filters;
