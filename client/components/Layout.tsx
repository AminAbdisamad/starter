import * as React from 'react'
import { Header } from './Header'
// import Footer from "./Footer";
import Head from 'next/head'
import { NextSeo } from 'next-seo'
// import Meta from "./Meta";

const Page: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div>
      {/* <Meta name='Home' path='/' /> */}
      <Header />
      {/* <h1>Header</h1> */}
      {children}
      {/* <Footer /> */}
      <h1>Footer</h1>
    </div>
  )
}
export default Page
