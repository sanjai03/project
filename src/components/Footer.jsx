import logo from '../image/logo.png'
import AddressContent from './AddressContent';
import ColMd4 from './ColMd4';
import Row from './Row';
function Footer(){
  let date = new Date();
  let year = date.getFullYear();
    return(
        <footer className="bg-dark">
            <Row className="footer-block py-2 my-3 col-9">
              <ColMd4>
                <div >
                  <img src={logo} alt="logo" className="footer-logo"  />
  
                </div>
                <p className="text-white">
                  Proper, balanced nutrition provides the nutrients you need every day to fuel your daily 
                  activities, promote and maintain a lifetime of good health and make your best shape a reality.
                  
                </p>
              </ColMd4>
              <ColMd4>
                <h2 className="text-success">CONTACT US</h2>
                  <AddressContent />
                </ColMd4>
              <ColMd4>
                <h2 className="text-success">SUBSCRIBE US</h2>
                <p className="text-white">stay updated with our latest news.we promise not to spam</p>
                <div className="bg-success text-white p-3 footer-btn">Your Email<i className="float-right fa fa-envelope"></i></div>
                </ColMd4>
              
            </Row>
            <div className="text-center text-white footer-bottom"> copyrights {year} herbal</div>
          </footer>
    )
}
export default Footer;