import React from 'react'
import './../../component/datatable/datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import {productRows } from "../../datatableSource";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
      };

    const productColumns = [
        { field: "id", headerName: "ID", width: 70 },
        {
          field: "product",
          headerName: "Product",
          width: 230,
          renderCell: (params) => {
            return (
              <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.name}
              </div>
            );
          },
        },
        {
          field: "price",
          headerName: "Price",
          width: 230,
        },
      
        {
          field: "stock",
          headerName: "Stock",
          width: 100,
        },
        {
          field: "status",
          headerName: "Status",
          width: 160,
          renderCell: (params) => {
            return (
              <div className={`cellWithStatus ${params.row.status}`}>
                {params.row.status}
              </div>
            );
          },
        },
        {
            field: "action", headerName: "Action", width: "150", renderCell: (params) => {
              return(
                <div className="cellAction">
                <Link to="" style={{ textDecoration: "none" }}>
                  <div className="viewButton">View</div>
                </Link>
                <div
                  className="deleteButton"
                  onClick={() => handleDelete(params.row.id)}
                >
                  Delete
                </div>
              </div>
              )
            } 
          }
      ];

    //   const actionColumn = [
    //     {
    //       field: "action",
    //       headerName: "Action",
    //       width: 200,
    //       renderCell: (params) => {
    //         return (
    //           <div className="cellAction">
    //             <Link to="/users/test" style={{ textDecoration: "none" }}>
    //               <div className="viewButton">View</div>
    //             </Link>
    //             <div
    //               className="deleteButton"
    //               onClick={() => handleDelete(params.row.id)}
    //             >
    //               Delete
    //             </div>
    //           </div>
    //         );
    //       },
    //     },
    //   ];

  return (
    <div className="datatable">
        <div className="datatableTitle">
        Add New Product
        <Link to="/products/newproduct" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={productColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default ProductList