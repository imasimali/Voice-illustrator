import NavBar from "../NavBar/NavBar"
import {Button, Modal} from "react-bootstrap";
import { useState } from "react";
import { BsCardImage} from "react-icons/bs";
import "./imagecaptioning.scss"

const ImageCaptioning = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <NavBar/>
      <div className="container">
          <h2 className="heading">Generate Captions for Your Images</h2>
          <h3 class="speech">Your Image</h3>
          <p className="give"> Choose an image to generate captions for it</p>
          <div className="checked">
              <div className="upload">
                  <Button className="uploadBtn" onClick={handleShow}>Upload Image</Button>
              </div>
          </div>
         
          <div className="submit">
              <Button className="generateBtn" variant="light">GENERATE</Button>
          </div>
      </div>
      <Modal className="modal-wrapper"show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="image-title">Upload an Image</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div class="card-caption">
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

export default ImageCaptioning;