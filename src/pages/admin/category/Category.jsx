import React, { useEffect, useState } from 'react';

import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import AddCategory from './AddCategory';
import { useDispatch, useSelector } from 'react-redux';
import { createCategory, getCategory } from '../../../redux/category/categoryThunks';

const CustomButtonComponent = (props) => {
    return (
        <div>
            <button className='bg-yellow-400 px-4 rounded-lg ' onClick={() => window.alert('Edit') }>Edit</button>
        </div>
    )
  };

  
const Category = () => {
    const [seen, setSeen] = useState(false);

    function togglePop() {
        setSeen(!seen);
    }
    const dispatch = useDispatch()

    const {data} = useSelector((state) => state.category)
    console.log(data)
    useEffect(()=>{
      dispatch(getCategory())
    },[])
    

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        { field: "id", flex: 1 },
        { field: "name", flex: 1 },
        { field: "action", cellRenderer: CustomButtonComponent, flex: 1 }
    ]);

    return (
        <div className="ag-theme-quartz" // applying the grid theme
            style={{ height: 500 }} // the grid will fill the size of the parent container
        >
            <div className="mb-4">
                <h1 className="text-center text-3xl text-white py-4">List Categories</h1>
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white " onClick={togglePop}>Add Category</button>
            </div>
            {seen ? <AddCategory toggle={togglePop} /> : null}
            {data
            ? 
            <AgGridReact className='w-[90%] mx-auto z-10'
                rowData={data}
                columnDefs={colDefs}
            />
            :
            "" 
        }

        </div>
    )
}

export default Category;