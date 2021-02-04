
function Button(props){
    return(
        <button className={"px-4 " +props.className}  >{props.name}</button>
    )
}

export default Button;