import React, { useState } from 'react';

import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import AddProduct from './AddProduct';

const CustomButtonComponent = (props) => {
    return (
        <div>
            <button className='bg-yellow-400 px-4 rounded-lg ' onClick={() => window.alert('Edit') }>Edit</button>
            <button className='bg-red-600 px-4 rounded-lg ' onClick={() => window.alert('Edit') }>Delete</button>
        </div>
    )
  };

const ListProduct = () => {
    const [seen, setSeen] = useState(false);

    function togglePop() {
        setSeen(!seen);
    }

    const [rowData, setRowData] = useState([
        { id: "1", Category: "Seafood", Name : "qweqeq", Price: 200, Description: "adadasdadasdasdada" },
        { id: "2", Category: "Meats",  Name : "qweqweqweq", Price: 200, Description: "adadasdadasdasdada" },
        { id: "3", Category: "Vegetables", Name : "Seaqweqwqweqwfood", Price: 200, Description: "adadasdadasdasdada" },
    ]);

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        { field: "id", flex: 1 },
        { field: "Category", flex: 1 },
        { field: "Name", flex: 1 },
        { field: "Price", flex: 1 },
        { field: "Description", flex: 1 },
        { field: "action", cellRenderer: CustomButtonComponent, flex: 1 }
    ]);

    return (
        <div className="ag-theme-quartz" // applying the grid theme
            style={{ height: 500 }} // the grid will fill the size of the parent container
        >
            <div className="mb-4">
                <h1 className="text-center text-3xl text-white py-4">List Products</h1>
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white " onClick={togglePop}>Add Product</button>
            </div>
            {seen ? <AddProduct toggle={togglePop} /> : null}

            <AgGridReact className='w-[90%] mx-auto z-10'
                rowData={rowData}
                columnDefs={colDefs}
            />

        </div>
    )
}

export default ListProduct;