import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactBanner from '../components/ContactBanner';
import AddressBanner from '../components/AddressBanner'
import ContactSubmitForm from '../components/ContactSubmitForm'
import  ContactInformation from "../components/ContactInformation";
function Contact() {
 
  
  return (
    <>
      <Header />
      <div className="container-fluid" >
        <ContactBanner />
        <ContactInformation />
        <AddressBanner />
        <div id="map-container-google-1" className="z-depth-1-half map-container mb-5">
          <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
            allowfullscreen></iframe>
        </div>
        <div>
          <h2 className="text-center">Submission Form</h2>
          <div className="row">
            <div className="col-3"></div>
              <ContactSubmitForm />
           
          </div>
        </div>
      </div>
      <Footer />
    </>
  )

}

export default Contact;