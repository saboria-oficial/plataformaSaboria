import React from 'react';
import '../../css/blog.css';
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer';
import CardBlog from '../../components/CardBlog';
//image
import blog1 from '../../assets/img2/blog1.png'
import blog2 from '../../assets/img2/blog2.png'
import blog3 from '../../assets/img2/blog3.png'
import blog4 from '../../assets/img2/blog4.png'
import blog5 from '../../assets/img2/blog5.png'
import blog6 from '../../assets/img2/blog6.png'
import blog7 from '../../assets/img2/blog7.png'
import blog8 from '../../assets/img2/blog8.png'
import blog9 from '../../assets/img2/blog9.png'
import blog10 from '../../assets/img2/blog10.png'
import blog11 from '../../assets/img2/blog11.png'
import blog12 from '../../assets/img2/blog12.png'
const Blog = () => {
  return (
    <>
    <Header/>
    <div className='container-blog'>
     <div className="banner-blog"></div>
     <div className="content-blog">
      <section className="materias-blog">
        <h2>Para você cliente</h2>
       <div className="line-blog">
        <CardBlog image={blog1} title="Receitas"/>
        <CardBlog image={blog2} title="Quais as principais 
restrições alimentares?"/>
        <CardBlog image={blog3} title="A importância de ler o rótulo 
das embalagens"/>
       </div>
       <h2>Receitas sem leite</h2>
       <div className="line-blog">
       <CardBlog image={blog4} title="Por que os restaurantes devem 
se preocupar?"/>
        <CardBlog image={blog5} title="Como os restaurantes devem 
lidar com este público?"/>
        <CardBlog image={blog6} title="Como evitar a contaminação cruzada"/>
       </div>
       <div className="line-blog">
       <CardBlog image={blog7} title="Qual a diferença entre 
alergia e intolerância?"/>
        <CardBlog image={blog8} title="O impacto das restrições alimentares no cotidiano"/>
        <CardBlog image={blog9} title="Depoimentos de pessoas que lidam com restrições alimentares"/>
       </div>
      </section>
      <aside className="aside-blog">
        <h2>Principais matérias</h2>
      <CardBlog image={blog10} title="A importância da integração  do público com restrição alimentar 
aos restaurantes"/>
        <CardBlog image={blog11} title="Opções de alimentos para o público com restrição"/>
        <CardBlog image={blog12} title="Depoimentos de pessoas que lidam com restrições alimentares"/>
      </aside>
     </div>
    
    </div>
    <Footer/>
    </>
  )
}

export default Blog



