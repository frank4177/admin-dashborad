import React, { useState } from "react";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import NotificationsNone from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ListIcon from "@mui/icons-material/List";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import portfolioPic_3 from '../../assets/portfolioPic_3.jpg'
import { toggl } from "../../redux/action";
import {useDispatch} from "react-redux"
import { useSelector } from "react-redux";




const Navbar = () => {
  const darkMode = useSelector(state=>state.darkmode.darkmode)
  const dispatch = useDispatch()
  const [darkmode, setDarkmode] = useState(false)

  
  

  const handleDelete = (darkmode) => {
   
    toggl(darkmode, dispatch)
    }


  return (
    <div className="navbar-container">
      <div>Currently </div>
      <div className="navbar-wrapper">
        <div className="search">
          <input type="text" placeholder="search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon"/>
            english
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon" onClick={()=>handleDelete()}/>
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <NotificationsNone className="icon"/>
            <div className="counter">1</div>

          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className="icon"/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <LanguageOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <ListIcon className="icon"/>
          </div>
          <div className="item">
            <img src={portfolioPic_3} alt="" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
