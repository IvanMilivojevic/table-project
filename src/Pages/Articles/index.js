import { useEffect, useState } from "react";
import Table from "../../Components/Table";

const Articles = () => {
  const [startingTableData, setStartingTableData] = useState([]);

  const allColumns = [];

  startingTableData.forEach(record => {
    Object.keys(record).forEach(key => {
      if (!allColumns.includes(key)) {
        allColumns.push(key);
      }
    });
  });

  useEffect(() => {
    fetch("/assets/article-types.json")
      .then(res => res.json())
      .then(data => {
        setStartingTableData(data);
      })
      .catch(error => console.log(error));
  }, []);

  return startingTableData.length > 0 ? (
    <Table startingTableData={startingTableData} startingColumns={allColumns} />
  ) : (
    <div>LOADING...</div>
  );
};

export default Articles;
