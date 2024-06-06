import React from 'react'
//components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SideBar from '../../components/SideBar'
import ItemCardapio from '../../components/ItemCardapio'
//css
import '../../css/cardapio.css'
const Cardapio = () => {
  return (
    <div>
      <Header/>
      <div className="container-cardapio">
        <SideBar className="asside-cardapio"/>
        <div className="tabela-cardapio">
            <h2>Cardápio</h2>
            <ItemCardapio intolerancia="Intolerância" nome="Nome" preco="Preço" className="tabela-item"  />
            <ItemCardapio intolerancia="Lactose" nome="Pizza de Chocolate" preco="54,99" className="tabela-item"/>
            <ItemCardapio intolerancia="Lactose" nome="Pizza de Chocolate" preco="54,99" className="tabela-item"/>
            <ItemCardapio intolerancia="Lactose" nome="Pizza de Chocolate" preco="54,99" className="tabela-item"/>
            <ItemCardapio intolerancia="Lactose" nome="Pizza de Chocolate" preco="54,99" className="tabela-item"/>
            <ItemCardapio intolerancia="Lactose" nome="Pizza de Chocolate" preco="54,99" className="tabela-item"/>
            <ItemCardapio intolerancia="Lactose" nome="Pizza de Chocolate" preco="54,99" className="tabela-item"/>
            <ItemCardapio intolerancia="Lactose" nome="Pizza de Chocolate" preco="54,99" className="tabela-item"/>
            <ItemCardapio intolerancia="Lactose" nome="Pizza de Chocolate" preco="54,99" className="tabela-item"/>
            <ItemCardapio intolerancia="Lactose" nome="Pizza de Chocolate" preco="54,99" className="tabela-item"/>
            <span className='add-cardapio'>+ Item</span>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default Cardapio
