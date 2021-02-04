import Row from "./Row";

function ContactInformation(){
    return(
        <Row className="p-5">
          <div className="col-2"></div>
          <div className="col-8">
            <h2 className="text-center">Contact Information</h2>
            <p>
              Join ABC! You’ll have access to members-only sections of the website which include searchable
              databases; articles on herbs from past issues of our journal, HerbalGram; news about cutting-edge
              research; critical reviews of important studies; careful evaluation of clinical trials; new trends
              in the herbal and natural products community; and much more.
                    </p>
          </div>
        </Row>
    )
}
export default ContactInformation;