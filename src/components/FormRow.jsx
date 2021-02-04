import Row from "./Row";

function FormRow(props){
    return(
        <Row className="form-group">
                <label className="col-sm-2 col-form-label">{props.label}</label>
                <div className="col-sm-10">{props.children}</div>
                </Row>
    )
}
export default FormRow;