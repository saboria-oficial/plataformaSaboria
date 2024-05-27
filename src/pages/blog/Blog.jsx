import React from 'react';
import '../../css/blog.css';
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer';
import CardBlog from '../../components/CardBlog';

const Blog = () => {
  return (
    <>
    <Header/>
        <CardBlog/>
    <Footer/>
    </>
  )
}

export default Blog



