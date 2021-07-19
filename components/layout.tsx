import Header from './header'
import Footer from './footer'
import { NextPage } from 'next'

const Layout:NextPage = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
export default Layout
