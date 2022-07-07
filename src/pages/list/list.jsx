import React from 'react'
import './list.scss'
import Sidebar from '../../component/sidebar/sidebar'
import Navbar from '../../component/navbar/navbar'
import Datatable from '../../component/datatable/datatable'
import ProductList from '../product/productList'
import Order from '../order/order'

export function  List()  {
  return (
    <div className='tablelist-container'>
      <Sidebar/>
      <div className='list-body'>
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}


export function ProList() {
  return (
    <div className='tablelist-container'>
      <Sidebar/>
      <div className='list-body'>
        <Navbar/>
        <ProductList/>
      </div>
    </div>
  )
}


export function OrderList() {
  return (
    <div className='tablelist-container'>
      <Sidebar/>
      <div className='list-body'>
        <Navbar/>
        <Order/>
      </div>
    </div>
  )
}