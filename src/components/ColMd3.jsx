

function ColMd3(props){
return(
    <div className={`col-md-3 ${props.className!=undefined&&props.className}`}>{props.children}</div>
)
}
export default ColMd3;