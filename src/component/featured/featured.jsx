import React from 'react'
import './featured.scss'
import "react-circular-progressbar/dist/styles.css"
import { CircularProgressbar } from 'react-circular-progressbar';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Featured = () => {
  return (
    <div className='featured-container'>
        <div className="top">
            <h1 className='title'>Total Revenue</h1>
            <MoreVertOutlinedIcon/>
        </div>
        <div className="bottom">
            <div className='featured-chart'>
                <CircularProgressbar value={70} text="70%" strokeWidth={3}/>
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">$420</p>
            <p className="desc">
                Previous transaction processing. Last payments may not be included.
            </p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownOutlinedIcon fontSize="small"/>
                        <div className="resultAmount">$12.4k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                        <div className="resultAmount">$12.4k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                        <div className="resultAmount">$12.4k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured