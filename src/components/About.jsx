import LeafImage from '../image/leaf.jpg';
import Button from './Button';
import ColMd4 from './ColMd4';
import Row from './Row';

function About(){
    return(
        <Row className="my-3 mt-5" >
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <h4 className="text-success">About Us</h4>
            <h2 className="text-bold">History About Herballife</h2>
            <p>
              Herbalife Nutrition is a global nutrition company whose purpose is to make the world
              healthier and happier. The Company has been on a mission for nutrition - changing people's
              lives with great nutrition products and programs - since 1980.
                  </p>
            <p>
              The Herbalife diet is pricey and involves highly processed shakes and many supplements,
              some of which have been linked to negative health effects. Short-term use likely causes
              weight loss, but long-term effectiveness is yet to be studied.
                  </p>
                  <Button className="bg-white border-green text-success" name="View More"/>

          </div>
          <ColMd4>
            <img src={LeafImage} height="100%" width="100%" />
          </ColMd4>
        </Row>
    )
}

export default About