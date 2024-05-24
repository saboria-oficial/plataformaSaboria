import React from 'react'
import '../css/blog.css'
import blog1 from '../assets/img2/blog1.png'
import blog2 from '../assets/img2/blog2.png'
import blog3 from '../assets/img2/blog3.png'
import blog4 from '../assets/img2/blog4.png'
import blog5 from '../assets/img2/blog5.png'
import blog6 from '../assets/img2/blog6.png'
import blog7 from '../assets/img2/blog7.png'
import blog8 from '../assets/img2/blog8.png'
import blog9 from '../assets/img2/blog9.png'
import blog10 from '../assets/img2/blog10.png'
import blog11 from '../assets/img2/blog11.png'
import blog12 from '../assets/img2/blog12.png'

const BlogPage = (props) => {
  const blogs = [
    { title: 'Receitas', image: blog1 },
    { title: 'Quais as principais restrições alimentares?', image: blog2 },
    { title: 'A importância de ler o rótulo das embalagens.', image: blog3},
    { title: 'Por que os restaurantes devem se preocupar?', image: blog4 },
    { title: 'Como os restaurantes devem lidar com este público?', image: blog5 },
    { title: 'Como evitar a contaminação cruzada.', image: blog6 },
    { title: 'Qual a diferença entre alergia e intolerância?', image: blog7 },
    { title: 'O impacto das restrições alimentares no cotidiano.', image: blog8 },
    { title: 'Depoimentos de pessoas que lidam com restrições alimentares.', image: blog9 },
    { title: 'A importância da integração  do público com restrição alimentar aos restaurantes.', image: blog10 },
    { title: 'Opções de alimentos para o público com restrição.', image: blog11 },
    { title: 'Depoimentos de pessoas que lidam com restrições alimentares.', image: blog12 }
  ];
  return (
    <div className='container-blog'>
      <h2 className="title-blog">BLOG</h2>
      <p className='line-blog'></p>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-item">
            <img src={blog.image} alt={blog.title} />
            <h2>{blog.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BlogPage;