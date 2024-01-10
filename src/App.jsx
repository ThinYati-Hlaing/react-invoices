import React, { useState } from 'react'
import Header from './components/Header'
import CheckoutForm from './components/CheckoutForm'
import RecordTable from './components/RecordTable'
import RecordGroup from './components/RecordGroup'
import Footer from './components/Footer'
import Drawer from './components/Drawer'
import ProductCreateForm from './components/ProductCreateForm'

const App = () => {

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  }

  const [products, setProduct] = useState([
    { id: 1, name: "Apple", price: 1.5 },
    { id: 2, name: "Banana", price: 0.75 },
    { id: 3, name: "Orange", price: 1.2 },
    { id: 4, name: "Grapes", price: 2.0 },
    // Add more fruits as needed
  ]);

  const addProduct = (newProduct) => {
    setProduct([...products, newProduct])
  }

  return (
    <div className="max-w-[700px] px-5 lg:px-0 mx-auto min-h-screen flex flex-col">
      <Header />
      <CheckoutForm products={products} />
      <RecordTable />
      <Footer handleDrawer={handleDrawer} />
      <Drawer addProduct={addProduct} products={products} openDrawer={openDrawer} handleDrawer={handleDrawer} />
    </div>
  )
}

export default App