import Button from "./Button"

function ProductCard(props){
    return(
        <div className="p-3 mb-4 card">
                    <img src={props.img} width="100%" className="px-1 py-1" />
    <p className=" product-txt px-1">{props.name}</p>
    <p className="product-txt px-1 text-center text-success">{props.rate}</p>
                    <Button   className={ props.buttonColour==='red'?"ml-5 text-white bg-danger col-6":'ml-5 text-white bg-success col-6'}>Buy</Button>
                  </div>
    )
}
export default ProductCard