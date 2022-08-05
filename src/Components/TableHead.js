import { generateColumnTitle } from "../helpers/utils";

const TableHead = ({ activeColumns, sortValues }) => {
  const { column: sortedColumn, direction } = sortValues;

  return (
    <thead>
      <tr>
        {activeColumns.map(columnKey => (
          <th key={columnKey}>
            {generateColumnTitle(columnKey)}
            {sortedColumn === columnKey && direction === "ASC" ? <span>&#8593;</span> : null}
            {sortedColumn === columnKey && direction === "DESC" ? <span>&#8595;</span> : null}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
