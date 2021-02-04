import BackgroundImage from "../image/contact-banner.jpg";
import Button from "./Button";
import ColMd4 from "./ColMd4";
import Row from "./Row";

function ContactBanner(){
    return(
        <div>
        <img src={BackgroundImage} className="banner-background" height="50%" width="98%" />
        <Row className="contact-banner-detail"  >
          <ColMd4 />
          <ColMd4 className="text-center">
            <h2 className="text-white">Contact Us</h2>
            <Button className="bg-transparent text-white border-white" name="Contact Us" />
          </ColMd4>
        </Row>
      </div>
    )
}
export default ContactBanner;