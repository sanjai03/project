function Input(props){
    console.log(props.errors)
    return(
        <input   type={props.type?props.type:"text"}   ref={props.register(props.validate)} className={props.className} placeholder={props.placeholder} name={props.name}  />
    )
}
export default Input;