import ProductCard from './ProductCard'
import Row from './Row';
import Product from '../image/product2.jpg'
import ColMd3 from './ColMd3';
function ProductsBlock(props){
    return(
      <Row className="my-3 text-center">              <div className="col-12" ><h2 className="text-center">{props.heading}</h2></div>
      <div className="col-1"></div>
      <Row className=" col-10">
        <ColMd3 >
        <ProductCard name="Product1" rate="2135" buttonColour="red" img={Product} />
        </ColMd3>
        <ColMd3>
        <ProductCard name="Product1" rate="2135" buttonColour="green" img={Product} />               
         </ColMd3>
        <ColMd3>
        <ProductCard name="Product1" rate="2135" buttonColour="green" img={Product} />
        </ColMd3>
        <ColMd3>
        <ProductCard name="Product1" rate="2135" buttonColour="green" img={Product} />
        </ColMd3>
        </Row>


        </Row>

    )
}
export default ProductsBlock;