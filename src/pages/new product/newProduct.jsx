import React, { useState } from 'react'
import Navbar from '../../component/navbar/navbar'
import Sidebar from '../../component/sidebar/sidebar'
import portfolioPic_3 from '../../assets/portfolioPic_3.jpg'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import './newProduct.scss'

const NewProduct = () => {
  const [file, setFile] = useState("")

  return (
    <div className='newUser'>
      <Sidebar/>
      <div className="newUser-container">
        <Navbar/>
        <div className="top">
          <h1 className='title'>Add New Product</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : portfolioPic_3} alt="" />
          </div>
          <div className="right">
            <form>
            <div className="formInput">
              <label htmlFor='file'>
               image: <DriveFolderUploadOutlinedIcon className='icon'/>
              </label>
                <input type="file"  id='file' onChange={e=> setFile(e.target.files[0])} style={{display:'none'}}/>
              </div>
              <div className="formInput">
                <label>Title</label>
                <input type="text" placeholder='jonD' />
              </div>
              <div className="formInput">
              <label>Description</label>
                <input type="email" placeholder='Johndoe@gmail.com' />
              </div>
              <div className="formInput">
              <label>Category</label>
                <input type="text" placeholder='+234 111 222 333 4444' />
              </div>
              <div className="formInput">
              <label>Price</label>
                <input type="text" placeholder='Croda St. 267 road, newYork' />
              </div>
              <div className="formInput">
              <label>Stock</label>
                <input type="text" placeholder='USA ' />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default NewProduct;