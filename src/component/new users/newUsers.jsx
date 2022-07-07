import { useEffect, useState } from 'react'
import './newUsers.css'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';



export default function NewUsers() {
    const [users, setUsers] = useState([]);



    return (
        <div className="widgetSm">
           <span className="widgetSmTitle">New Users</span>
           <ul className="widgetSmList">
               <li className="widgetSmListItem">
                   <img src="https://www.pinpng.com/pngs/m/341-3415688_no-avatar-png-transparent-png.png" alt="#" className="widgetSmImg"/>
                   <div className="widgetSmUser">
                       <span className="widgetSmUsername">Johnny</span>
                       <span className="widgetSmUserTitle">Johnny@gmail.com</span>
                   </div>
                   <button className="widgetSmButton">
                       <VisibilityOutlinedIcon className="widgetSmIcon"/> Display
                   </button>
               </li>

               <li className="widgetSmListItem">
                   <img src="https://www.pinpng.com/pngs/m/341-3415688_no-avatar-png-transparent-png.png" alt="#" className="widgetSmImg"/>
                   <div className="widgetSmUser">
                       <span className="widgetSmUsername">Johnny</span>
                       <span className="widgetSmUserTitle">Johnny@gmail.com</span>
                   </div>
                   <button className="widgetSmButton">
                       <VisibilityOutlinedIcon className="widgetSmIcon"/> Display
                   </button>
               </li>

               <li className="widgetSmListItem">
                   <img src="https://www.pinpng.com/pngs/m/341-3415688_no-avatar-png-transparent-png.png" alt="#" className="widgetSmImg"/>
                   <div className="widgetSmUser">
                       <span className="widgetSmUsername">Johnny</span>
                       <span className="widgetSmUserTitle">Johnny@gmail.com</span>
                   </div>
                   <button className="widgetSmButton">
                       <VisibilityOutlinedIcon className="widgetSmIcon"/> Display
                   </button>
               </li>
           </ul>
        </div>
    )
}
