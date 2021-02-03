function Input(props){
    return(
        <input type={"text"} type={props.type}  ref={props.ref} className={props.className} placeholder={props.placeholder} name={props.name}  />
    )
}
export default Input;