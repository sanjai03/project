import Header from "../components/Header";
import Footer from "../components/Footer"
import FirstBanner from "../image/download.jpg"
import Product from '../image/product1.jpg'

import ProductsBlock from '../components/ProductsBlock'
import SecondBanner from '../image/banner2.jpg'
import LatestPost from '../components/LatestPost'
import Heading from '../components/Heading'
import Gallary from '../image/gallary.jpg'
import axios from 'axios'
import Banner from "../components/Banner";
import About from '../components/About';
import { useState, useEffect } from 'react';
import Button from "../components/Button";
function Home() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {

        setPosts(res.data)
      })
  }, [])

  return (
    <div>
      <Header />
      <div className="container-fluid ">
        <Banner img={FirstBanner} imgClass="banner-background" contentClass="ht-300" >
        <div className="col-4 banner-content" >
              <h4>Welcome to</h4>
              <h2>using the art of herps</h2>
              <Button className="bg-transparent border-green text-white" name="Contact Us" />
            </div>
            <div className="col-5 banner-content" >
              <img src={Product} height="30%" width="90%" />
            </div>
          </Banner>
        
        <About />
        <ProductsBlock heading="Featured Products" />
        <Banner img={SecondBanner} imgClass="pos-abs" contentClass="banner2-detail" >
        <div className="col-4 "  >
              <Heading text="Our Story" />
              
              <p>Once he fully understood the science behind this special botanical, Mr. Manal bought
              a hand-operated, tablet-compressing machine and began his work. At night, his shoulders
                       would ache from producing a few hundred tablets, one small tablet at a time.</p>
              <Button className="bg-transparent border-white text-white" name="View More"/>
            </div>
            <div className="col-5 " >
              <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" height="100%" width="90%" ></iframe>
            </div>
        </Banner>
        
        <ProductsBlock heading="Best Sellers" />
        <div className="my-3">
          <Heading text='Our Gallery' />
          <img src={Gallary} width="100%" height="60%" />
        </div>

        {posts && posts.length && <LatestPost posts={posts} />}
      </div>
      <Footer />
    </div>
  )
}
export default Home;