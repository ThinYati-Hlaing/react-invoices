import React, { useState } from 'react'
import Header from './components/Header'
import CheckoutForm from './components/CheckoutForm'
import RecordTable from './components/RecordTable'
import RecordGroup from './components/RecordGroup'
import Footer from './components/Footer'
import Drawer from './components/Drawer'
import ProductCreateForm from './components/ProductCreateForm'
import { Toaster } from 'react-hot-toast'

const App = () => {

  return (
    <div className="max-w-[700px] px-5 lg:px-0 mx-auto min-h-screen flex flex-col">
      <Header />
      <CheckoutForm />
      <RecordTable />
      <Footer />
      <Drawer />
      <Toaster position="bottom-left" reverseOrder={false} />
    </div>
  )
}

export default App