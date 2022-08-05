const TableBody = ({ modifiedData, activeColumns, pageSize, activePage, sortValues }) => {
  const { column: sortedColumn } = sortValues;
  const slicedTableData = modifiedData.slice(pageSize * (activePage - 1), pageSize * activePage);

  return (
    <tbody>
      {slicedTableData.map(record => (
        <tr key={record.id}>
          {activeColumns.map(columnKey => {
            if (record[columnKey] === undefined) {
              return <td key={columnKey} />;
            }

            const isSortedColumn = sortedColumn === columnKey;
            let recordValue;

            if (columnKey === "canAddToOrderOnlyWithArticleType") {
              recordValue = record[columnKey].map(item => item.acronym).join(", ");
            } else if (
              columnKey === "defaultBrand" ||
              columnKey === "defaultDropshipper" ||
              columnKey === "defaultShippingStatus" ||
              columnKey === "group"
            ) {
              recordValue = record[columnKey].name;
            } else if (
              columnKey === "bundleMinusDifferenceArticle" ||
              columnKey === "bundlePlusDifferenceArticle"
            ) {
              recordValue = record[columnKey].titleWithArticleNumber;
            } else if (columnKey === "defaultDeliveryTime") {
              recordValue = record[columnKey].titleDE;
            } else {
              recordValue = record[columnKey];
            }

            recordValue = typeof recordValue === "boolean" ? recordValue.toString() : recordValue;

            return (
              <td key={columnKey} className={isSortedColumn ? "sorted-cell" : undefined}>
                {recordValue}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
