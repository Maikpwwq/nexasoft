"use strict";
exports.__esModule = true;
/** @jsxImportSource react */
var x_data_grid_1 = require("@mui/x-data-grid");
var TableReactApp = function () {
    var columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "firstName", headerName: "First name", width: 130 },
        { field: "lastName", headerName: "Last name", width: 130 },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            width: 90
        },
        {
            field: "fullName",
            headerName: "Full name",
            description: "This column has a value getter and is not sortable.",
            sortable: false,
            width: 160,
            valueGetter: function (params) {
                return (params.row.firstName || "") + " " + (params.row.lastName || "");
            }
        },
    ];
    var rows = [
        { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
        { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
        { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
        { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
        { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
        { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
        { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
        { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
        { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    ];
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Hello from React"),
        React.createElement("div", { style: { height: 400, width: "100%" } },
            React.createElement(x_data_grid_1.DataGrid, { rows: rows, columns: columns, pageSizeOptions: [5], 
                // rowsPerPageOptions={[5]} and pageSize are deprecated
                checkboxSelection: true, 
                // disableSelectionOnClick
                disableRowSelectionOnClick: true }))));
};
exports["default"] = TableReactApp;
