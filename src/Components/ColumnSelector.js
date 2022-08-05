import { generateColumnTitle } from "../helpers/utils";

const ColumnSelector = ({ startingColumns, activeColumns, columnSelectHandler }) => {
  return (
    <div className="column-selector">
      <div className="selector-title">Select columns to be active:</div>
      {startingColumns.map(columnKey => (
        <label key={columnKey}>
          <input
            type="checkbox"
            onChange={() => columnSelectHandler(columnKey)}
            checked={activeColumns.includes(columnKey)}
          />
          {generateColumnTitle(columnKey)}
        </label>
      ))}
    </div>
  );
};

export default ColumnSelector;
