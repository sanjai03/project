import BackgroundImage from "../image/contact-banner-2.jpg";
import HerbaLifeBuildingImage from '../image/herbaLifeBuilding.jpg'
import AddressContent from "./AddressContent";
import ColMd6 from "./ColMd6";
import Row from "./Row";
import SpanTextWhite from "./SpanTextWhite";

function AddressBanner(){
    return(
        <div>
          <Row>
          <img src={BackgroundImage}  height="50%" width="50%" />
          <img src={HerbaLifeBuildingImage}  height="50%" width="50%" />
          </Row>
          <Row className="address">
            <ColMd6 className="bg-danger ml-1 p-5">
              <h2 className="text-white">Address Information</h2>
              <AddressContent />
              <SpanTextWhite className="mr-3"><i className=" fa text-white fa-facebook"></i></SpanTextWhite>
              <SpanTextWhite className="mr-3"><i className=" fa text-white fa-telegram"></i></SpanTextWhite>
              <SpanTextWhite className="mr-3"><i className=" fa text-white fa-linkedin"></i></SpanTextWhite>
              <SpanTextWhite className="mr-3"><i className=" fa text-white fa-instagram"></i></SpanTextWhite>
              <SpanTextWhite className="mr-3"><i className=" fa text-white fa-youtube"></i></SpanTextWhite>       
            </ColMd6>
          </Row>
        </div>
    )
}
export default AddressBanner;