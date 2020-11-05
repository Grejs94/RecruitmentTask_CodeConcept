import React from "react";
import { useTable } from "react-table";

import { ItemsList } from "./MakeData";
import * as Styles from "./styles";

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  console.log(useTable);

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        {footerGroups.map((group) => (
          <tr {...group.getFooterGroupProps()}>
            {group.headers.map((column) => (
              <td {...column.getFooterProps()}>{column.render("Footer")}</td>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  );
}

const TableComponent = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "",
        accessor: "deleteIcon",
      },
      {
        Header: "",
        accessor: "productPicture",
      },
      {
        Header: "Product Name",
        accessor: "name",
      },

      {
        Header: "Unit Price",
        accessor: "price",
      },
      {
        Header: "Qty",
        accessor: "icons",
        Footer: "Qty",
      },
    ],
    []
  );

  return (
    <Styles.Wrapper>
      <Table columns={columns} data={ItemsList} />
    </Styles.Wrapper>
  );
};

export default TableComponent;
