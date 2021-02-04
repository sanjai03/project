import axios from 'axios'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from "../components/Header";
function Post() {
    const[post,setPost]=useState({})
    let {id} = useParams()
    const url = "https://jsonplaceholder.typicode.com/posts/"+id;

     useEffect(()=>{
        axios.get(url)
      .then((res)=>{
    
        setPost(res.data)
      })
     },[])
    
return(
  <div>
  <Header />
<div className="pad-black"><h1>{post.title}</h1>
<p>{post.body}</p>
</div>
<Footer />
</div>
)
    
}
export default Post