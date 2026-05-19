import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import BlogList from '../components/BlogList'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const Home = () => {
  useDocumentTitle('Blogify — Your Blogging Space')

  return (
    <>
      <Navbar/>
      <Header/>
      <BlogList />
      <Newsletter />
      <Footer />
      <BackToTop />
    </>
  )
}

export default Home
