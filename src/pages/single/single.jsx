import React from 'react'
import './single.scss'
import Navbar from '../../component/navbar/navbar'
import Sidebar from '../../component/sidebar/sidebar'
import portfolioPic_3 from '../../assets/portfolioPic_3.jpg'
import Chart from '../../component/chart/chart'
import TableList from '../../component/table/table'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className='single-container'>
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className='title'>Information</h1>
            <div className='item'>
              <img src={portfolioPic_3} alt="" className='itemImg'/>
              <div className="details">
                <h1 className="itemTitle">John Doe</h1>
                <div className="detailItem">
                  <span className='itemKey'>Email: </span>
                  <span className='itemKey'>ribo@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>Phone: </span>
                  <span className='itemKey'>+234 111 222 3333</span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>Address: </span>
                  <span className='itemKey'>Asokoro District, Abuja</span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>Country: </span>
                  <span className='itemKey'>USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            
            <Chart className="chart-wrapper"/>
            
          </div>
        </div>
        <div className="bottom">
          <div className="title">Last Transactions</div>
          <TableList/>
        </div>
      </div>
    </div>
  )
}

export default Single