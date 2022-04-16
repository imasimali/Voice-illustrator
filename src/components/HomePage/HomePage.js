import {Button} from "react-bootstrap";
import homepage from "../../assets/images/homepage.jpg"
import NavBar from "../NavBar/NavBar";
import "./homepage.scss"
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <>
    <NavBar/>
    <div className="container homepage">
        <div className="name-wrapper">
            <h1 className="name">AI Image Generator</h1>
            <p className="name-descrip">Create an image with the help of Artificial Intelligence</p>
        </div>
        <div className="button-wrapper">
              <Link to="/Options" className="createbtn">Create</Link>
              <Link to="/Gallery" className="gallery-btn">Gallery</Link>
            </div>
        <div className="image-wrapper">
            <img className="home-img" src={homepage} alt="homepage"/>
        </div>
        <div className="explain">
            <h2 className="AI"> AI Generated Images </h2>
            <div className="txt-wrapper">
                <p className="detail">
                    Voice Illustrator is a studio with a new twist
                - all our Images are computer generated with your speech!
                  We use Artificial Intelligence to generate your idea into an image.
                </p>
           </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default HomePage