import React from 'react'
import Feature from '../../components/feature/Feature'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import Header from '../../components/header/Header'
import NavBar from '../../components/NavBar/NavBar'
import PropertyList from '../../components/propertyList/PropertyList'
import './Home.css'

function Home() {
  return (
    <div>
        <NavBar/>
        <Header/>
        <div className="homeContainer">
          <Feature/>
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList/>
          <h1 className="homeTitle">Home guests love</h1>
          <FeaturedProperties/>
        </div>
    </div>

  )
}

export default Home