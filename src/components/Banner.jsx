import Row from "./Row"

function Banner(props){
    return(
        <div>
          <img className={props.imgClass} src={props.img} height="50%" width="95%" />
          <Row className={props.contentClass}>
            <div className="col-2"></div>
            {props.children}
          </Row>
        </div>
    )
}
export default Banner