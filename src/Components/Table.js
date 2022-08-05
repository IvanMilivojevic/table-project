import { useState } from "react";
import Filters from "./Filters";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import Pagination from "./Pagination";
import ColumnSelector from "./ColumnSelector";

const Table = ({ startingTableData, startingColumns }) => {
  const [activeColumns, setActiveColumns] = useState(startingColumns);
  const [pageSize, setPageSize] = useState(5);
  const [activePage, setActivePage] = useState(1);
  const [sortValues, setSortValues] = useState({ column: "", direction: "ASC" });
  const [filterValues, setFilterValues] = useState({ group: "", defaultShippingStatus: "" });
  const [searchValue, setSearchValue] = useState("");

  const columnSelectHandler = columnKey => {
    setActiveColumns(prevActiveColumns => {
      const updatedColumns = [...prevActiveColumns];
      const findIndexColumnKey = updatedColumns.findIndex(key => key === columnKey);

      if (findIndexColumnKey >= 0) {
        updatedColumns.splice(findIndexColumnKey, 1);
      } else {
        updatedColumns.push(columnKey);
      }

      return updatedColumns;
    });
  };

  const setPageHandler = page => {
    setActivePage(page);
  };

  const setPageSizeHandler = value => {
    setPageSize(value);
    setActivePage(1);
  };

  const sortHandler = (key, value) => {
    setSortValues(prevState => ({ ...prevState, [key]: value }));
    setActivePage(1);
  };

  const filterHandler = (key, value) => {
    setFilterValues(prevState => ({ ...prevState, [key]: value }));
    setActivePage(1);
  };

  const searchHandler = value => {
    setSearchValue(value);
    setActivePage(1);
  };

  let modifiedData = [...startingTableData];

  if (searchValue) {
    modifiedData = modifiedData.filter(record => {
      return (
        record.defaultBrand?.name?.toUpperCase().includes(searchValue.toUpperCase()) ||
        record.titleDE?.toUpperCase().includes(searchValue.toUpperCase())
      );
    });
  }

  if (filterValues.group || filterValues.defaultShippingStatus) {
    modifiedData = modifiedData.filter(record => {
      if (filterValues.group && !filterValues.defaultShippingStatus) {
        return record.group?.name === filterValues.group;
      } else if (!filterValues.group && filterValues.defaultShippingStatus) {
        return record.defaultShippingStatus?.name === filterValues.defaultShippingStatus;
      }
      return (
        record.group?.name === filterValues.group &&
        record.defaultShippingStatus?.name === filterValues.defaultShippingStatus
      );
    });
  }

  if (sortValues.column) {
    modifiedData.sort((recordA, recordB) => {
      let value = 0;

      if (recordA[sortValues.column] > recordB[sortValues.column]) {
        value = 1;
      } else if (recordA[sortValues.column] < recordB[sortValues.column]) {
        value = -1;
      }

      return sortValues.direction === "DESC" ? value * -1 : value;
    });
  }

  return (
    <div>
      <ColumnSelector
        startingColumns={startingColumns}
        activeColumns={activeColumns}
        columnSelectHandler={columnSelectHandler}
      />
      <Filters
        sortValues={sortValues}
        sortHandler={sortHandler}
        filterValues={filterValues}
        filterHandler={filterHandler}
        searchValue={searchValue}
        searchHandler={searchHandler}
        activeTableData={startingTableData}
      />
      {modifiedData.length > 0 ? (
        <>
          <table>
            <TableHead activeColumns={activeColumns} sortValues={sortValues} />
            <TableBody
              modifiedData={modifiedData}
              activeColumns={activeColumns}
              pageSize={pageSize}
              activePage={activePage}
              sortValues={sortValues}
            />
          </table>
          <Pagination
            recordsNumber={modifiedData.length}
            pageSize={pageSize}
            setPageSizeHandler={setPageSizeHandler}
            activePage={activePage}
            setPageHandler={setPageHandler}
          />
        </>
      ) : (
        <div className="no-results">NO RESULTS TO DISPLAY...</div>
      )}
    </div>
  );
};

export default Table;
