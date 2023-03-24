import React, { Fragment } from 'react'
import Header from '../../Components/header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Featured from '../../Components/featured/Featured'
import './Home.css'
import PropertyList from '../../Components/propertylist/PropertyList'
import FeaturedProperties from '../../Components/featuredProperties/FeaturedProperties'
import MailList from '../../Components/mailList/MailList'
import Footer from '../../Components/footer/Footer'
const Home = () => {
  return (
    <Fragment>
    <Navbar/>
    <Header/>
    <div className="homeContainer">
      <Featured/>
      <h1 className='homeTitle'>Browse by property type</h1>
      <PropertyList/>
      <h1 className='homeTitle'>Home guests love</h1>
      <FeaturedProperties/>
      <MailList/>
          <Footer/>
          </div>
    </Fragment>
  )
}

export default Home