import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer.jsx'
import Carrosel from '../../components/Carrosel.jsx'
import Image1 from '../../assets/img2/carrossel.webp'
import Image2 from '../../assets/img2/carrosel2.webp/'
import Image3 from '../../assets/img2/carrosel3.webp'
const home = () => {
  return (
    <div>
      <Header/>
      <Carrosel img1={Image1} img2={Image2} img3={Image3}/>
      <Footer/>

    </div>
  )
}

export default home
