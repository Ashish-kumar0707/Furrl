import Nav from '../components/Nav'
import Mainpage from '../components/Mainpage'
import ProductList from '../components/ProductList'
import Product from '../components/Product'
import React from 'react'
export default function Home() {
  return (
    <div style={{
        padding: 0,
        margin: 0,
        boxSizing: 'border-box'
    }} >
      <Nav/>
      <Mainpage/>
      <Product/>
      <ProductList/>
    </div>
  )
}
