import { Link } from "react-router-dom";

function List(props) {
    
   return(
    <li className="nav-item">
    <Link to={"/"+props.href} className={props.icon === undefined?"nav-link text-white":"nav-link text-white fa fa-"+props.icon}>{props.text}</Link>
  </li>
   ) 
}
export default List