import Nav from '../components/Nav'
import Mainpage from '../components/Mainpage'
import ProductList from '../components/ProductList'
import Product from '../components/Product'
import React from 'react'
export default function Home() {
  return (
    <div >
      <Nav/>
      <Mainpage/>
      <Product/>
      <ProductList/>
    </div>
  )
}
