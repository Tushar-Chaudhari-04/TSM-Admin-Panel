// import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

// // const columns: GridColDef[] = [
// //   { field: "id", headerName: "ID", width: 40 },
// //   { field: "quantity", headerName: "Quantity", type: "number", width: 120 },
// //   { field: "discount", headerName: "Discount", type: "number", width: 120 },
// //   {
// //     field: "amount",
// //     headerName: "Amount",
// //     type: "number",
// //     width:120,
// //   },
// //   {
// //     field: "status",
// //     headerName: "Order Status",
// //     type: "string",
// //     width:200,
// //   },
// // ];

// // const rows = [
// //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
// //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
// //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
// //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
// //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
// //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
// //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
// //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
// //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// // ];

// interface DataType {
//   id: number;
//   quantity: number;
//   discount: number;
//   amount: number;
//   status: string; 
// }

// const TableComponent = ({data,columns}) => {
//   return (
//     <div style={{ height: 400,}}>
//       <DataGrid
//         rows={data}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 5 },
//           },
//         }}
//         pageSizeOptions={[5, 10]}
//         checkboxSelection
//       />
//     </div>
//   );
// };

// export default TableComponent;
