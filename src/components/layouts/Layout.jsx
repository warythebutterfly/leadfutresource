import React from 'react'
import Header from '../macros/Header'
import Footer from '../macros/Footer'

const Layout = ({children}) => {

  return (
    <main style={{ overflowX: 'hidden' }}>
      <Header />
        {children}
      <Footer />
    </main>
  )
}

export default Layout