

function ColMd4(props){
    return(
        <div className={`col-md-6 ${props.className&&props.className}`}>{props.children}</div>
    )
    }
    export default ColMd4;