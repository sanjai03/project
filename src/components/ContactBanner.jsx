import ContactBanner1 from "../image/contact-banner.jpg";

function ContactBanner(){
    return(
        <div>
        <img src={ContactBanner1} className="banner-background" height="50%" width="100%" />
        <div className="row contact-banner-detail"  >
          <div className="col-4"></div>
          <div align="center" className="col-4">
            <h2 className="text-white">Contact Us</h2>
            <button className="button-1">Contact Us</button>
          </div>
        </div>
      </div>
    )
}
export default ContactBanner;