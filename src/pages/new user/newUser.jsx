import React, { useState } from 'react'
import Navbar from '../../component/navbar/navbar'
import Sidebar from '../../component/sidebar/sidebar'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import userPhoto from '../../assets/userPhoto.png'
import './newUser.scss'

const NewUser = () => {
  const [file, setFile] = useState("")


  return (
    <div className='newUser'>
      <Sidebar/>
      <div className="newUser-container">
        <Navbar/>
        <div className="top">
          <h1 className='title'>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "https://www.pinpng.com/pngs/m/341-3415688_no-avatar-png-transparent-png.png"} alt="" />
          </div>
          <div className="right">
            <form>
            <div className="formInput">
              <label htmlFor='file'>
               Image: <DriveFolderUploadOutlinedIcon className='icon'/>
              </label>
                <input type="file"  id='file' onChange={e=> setFile(e.target.files[0])} style={{display:'none'}}/>
              </div>
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder='jonD' />
              </div>
              <div className="formInput">
              <label>Email</label>
                <input type="email" placeholder='Johndoe@gmail.com' />
              </div>
              <div className="formInput">
              <label>Phone</label>
                <input type="text" placeholder='+234 111 222 333 4444' />
              </div>
              <div className="formInput">
              <label>Address</label>
                <input type="text" placeholder='Croda St. 267 road, newYork' />
              </div>
              <div className="formInput">
              <label>Country</label>
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

export default NewUser