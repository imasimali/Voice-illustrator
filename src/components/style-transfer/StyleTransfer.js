import "./styletransfer.scss"
import {Button, Modal} from "react-bootstrap";
import { useState } from "react";
import { BsCardImage} from "react-icons/bs";
import NavBar from "../NavBar/NavBar";

const StyleTransfer = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <NavBar/>
    <div className="container style-wrapper">
        <h4 className="style-heading">Add Styles to Your Images</h4>
        <h5 className="sub-title">Your Image</h5>
        <p className="description">Choose an image to apply styles to</p>
        <div className="check-drop">
            <div className="upload">
                <Button className="Upload-btn" variant="dark" onClick={handleShow}>Upload Image</Button>
            </div>
        </div>
        <h5 className="sub-title">Style Image</h5>
        <p className="description">Choose a style to apply to your image</p>
        <div className="check-drop">
            <div className="upload">
                <Button className="Upload-btn" variant="dark" onClick={handleShow}>Choose style</Button>
            </div>
        </div>
       
        <Button className="createstyle-btn" variant="light">CREATE</Button>
            
        
    </div>
    <Modal className="modal-wrapper"show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="image-title">Upload an Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div class="card-transfer">
            {/* <h2>Upload an input image</h2> */}
            <div class="choose-wrapper">
                <button class="choose">Choose an image</button>

            </div>
            <div class="dashed">
                <BsCardImage className="img"/>
            </div>
            <div class="upload-wrapper">
                <button class="upload-txt">Upload</button>

            </div>
            </div>
            </Modal.Body>
      </Modal>
    </>
  )
}

export default StyleTransfer