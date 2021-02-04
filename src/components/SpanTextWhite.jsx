

function SpanTextWhite(props){
    return(
        <span className={"text-white "+props.className}>{props.children}</span>
    )
}

export default SpanTextWhite;