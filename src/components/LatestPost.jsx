import PostCard from './PostCard'
import image from '../image/nutrion.jpg'
import Row from './Row'
import Button from './Button'
import ColMd4 from './ColMd4'
function LatestPost(props){
    
    return(
        <Row className=" my-3">
        <div className="col-1"></div>
        <div className ="col-10 mb-3 row">
        <div className="col-10"><h4 className="text-success">RECENT NEWS</h4><h2 className="align-left">Our Latest News</h2></div>
        <div className="col-2"><Button className="border-green text-success bg-white" name="View More"/></div>
        {
            props.posts.map((post)=>
                
                   ( <ColMd4 key={post.id} className=" mb-3">
                        <PostCard name={post.title} id={post.id} desc={post.body} />
                    </ColMd4>
                   )
                
            )
        }
        
        </div>
</Row>
    )
}
export default LatestPost