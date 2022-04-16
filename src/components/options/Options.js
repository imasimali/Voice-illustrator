
import "./options.scss";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Options = () => {
  return (
      <>
      <NavBar/>
      <div className="title">Choose your creations</div>
      <div className="container option-wrapper">
        <div className="card">
            <div className="cardimage card-1 "> </div>
            <Link to="/StyleTransfer" className="buttons">Style Transfer</Link>
            <p>Give your pictures effects and styles and turn it into a masterpiece.</p>
            
            </div>
        <div className="card">
            <div className="cardimage card-2 "></div>
            <Link to="/SpeechtoImage" className="buttons">Speech to Image</Link>
            <p>Create art with just your speech.</p>
            
            </div>
        <div className="card">
            <div className="cardimage card-3"></div>
            <Link to="/ImageCaptioning" className="buttons">Image Captioning</Link>
            <p>Generate captions to images.</p>
            
        
        </div>
      </div>
     
      
      </>

  );
};

export default Options;
