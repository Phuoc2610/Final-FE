import React, { useState } from 'react';

import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

const CustomButtonComponent = (props) => {
    return (
        <div>
            <button className='bg-green-600 px-4 rounded-lg mx-2' onClick={() => window.alert('Detele') }>Detail</button>
            <button className='bg-red-600 px-4 rounded-lg' onClick={() => window.alert('clicked') }>Detele</button>
        </div>
    )
  };
const User = () => {
    const [rowData, setRowData] = useState([
        { id: "1", fullname: "Nguyen Van A", email: "VanA@gmail.com",  },
        { id: "2", fullname: "Nguyen Van B", email: "VanB@gmail.com",  },
        { id: "3", fullname: "Nguyen Van C", email: "VanC@gmail.com",  },
    ]);

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        { field: "id", flex: 1 },
        { field: "fullname", flex: 1 },
        { field: "email",flex: 1 },
        { field: "action", cellRenderer: CustomButtonComponent, flex: 1 }
    ]);

    return (
        <div className="ag-theme-quartz" // applying the grid theme
            style={{ height: 500 }} // the grid will fill the size of the parent container
        >
            <div>
                <h1 className="text-center text-3xl text-white py-4">List User</h1>

            </div>

            <AgGridReact className='w-[90%] mx-auto'
                rowData={rowData}
                columnDefs={colDefs}
            />

        </div>
    )
}

export default User;