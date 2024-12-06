// Step 1: Import React
import * as React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import '../styles/Layout.css'



// Step 2: Define your component
const Layout = ({children}) => {
  return (
    <>
    
    <Navbar />
      <main>
        {children}  
      </main>
    <Footer />
    </>
  )
}

// Step 3: Export your component
export default Layout