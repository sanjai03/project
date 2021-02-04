

function ColMd4(props){
return(
    <div className={`col-md-4 ${props.className!=undefined&&props.className}`}>{props.children}</div>
)
}
export default ColMd4;