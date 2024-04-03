import React, { useEffect, useState } from 'react';

import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import AddCategory from './AddCategory';
import { useDispatch, useSelector } from 'react-redux';
import { createCategory, getCategory } from '../../../redux/category/categoryThunks';
import EditCategory from './EditCategory';



const CustomButtonComponent = (props) => {

    return (
        <>
        <div className=''>
            <button className='bg-yellow-400 px-4 rounded-lg ' onClick={props.customProp}>Edit</button>
        </div>
        </>
    )
  };
const Category = () => {
   
    const [add, setAdd] = useState(false);
    const [edit, setEdit] = useState(false);

    function toggleAddCategory() {
        setAdd(!add);
    }
    function toggleEditCategory() {
        setEdit(!edit);
    }
    const dispatch = useDispatch()

    const {data} = useSelector((state) => state.category)
    console.log(data)
    useEffect(()=>{
      dispatch(getCategory())
    },[])
    

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        { field: "name", flex: 1 },
        {     field: "action", 
        cellRenderer: (params) => <CustomButtonComponent {...params} customProp={toggleEditCategory} />, 
        flex: 1 }
    ]);
    return (
        <div className="ag-theme-quartz" // applying the grid theme
            style={{ height: 500 }} // the grid will fill the size of the parent container
        >
            <div className="mb-4">
                <h1 className="text-center text-3xl text-white py-4">List Categories</h1>
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white " onClick={toggleAddCategory}>Add Category</button>
            </div>
            {add ? <AddCategory toggle={toggleAddCategory} /> : null}
            {edit ? <EditCategory toggle={toggleEditCategory} /> : null}

            {data
            ? 
            <AgGridReact className='w-[70%] mx-auto z-10'
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