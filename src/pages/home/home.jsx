import React from 'react'
import './home.scss'
import Sidebar from '../../component/sidebar/sidebar'
import Navbar from '../../component/navbar/navbar'
import Widget from '../../component/widgets/widget'
import Featured from '../../component/featured/featured'
import Chart from '../../component/chart/chart'
import TableList from '../../component/table/table'
import NewUsers from '../../component/new users/newUsers'

const Home = () => {
  


  return (
    <div className='home-container'>
        <div className='home-wrapper'>

          <div className='home-sidebar'>
          <Sidebar/>
          </div>

          <div className="home-body">
          <Navbar/>
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
          </div>
          <div className='charts'>
            <Featured/>
            <Chart/>
          </div>
          <div className="list-container">
            <div className='table-wrap'>
            <div className='list-title'>Latest Transaction</div>
            <TableList/>
            </div>
            <NewUsers/>
          </div>
          </div>
         
        </div>
    </div>
  )
}

export default Home