import "./myprofile.scss";
import { FaUserCircle } from "react-icons/fa";
import NavBar from "../NavBar/NavBar";
import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";

const MyProfile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <NavBar />
      <section className="myPage">
        <div className="profile">
          <FaUserCircle className="userPic" />
        </div>
        <h2 className="n-ame">Asim Ali</h2>
        <p className="user">@imasimali</p>
        <div className="edit">
          <Button className="editbtn" variant="light" onClick={handleShow}>
            Edit Profile
          </Button>
        </div>
        <h3 className="creations">Your creations</h3>
      </section>
      <section class="container profile-creations">
        <div class="profile-card">
          <div class="profileImage profile-1"> </div>
        </div>
        <div class="profile-card">
          <div class="profileImage profile-2"></div>
        </div>
        <div class="profile-card">
          <div class="profileImage profile-3"></div>
        </div>
        <div class="profile-card">
          <div class="profileImage profile-1"> </div>
        </div>
        <div class="profile-card">
          <div class="profileImage profile-2"></div>
        </div>
        <div class="profile-card">
          <div class="profileImage profile-3"></div>
        </div>
      </section>
      <Modal className="modal-wrapper" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="image-title">Manage Your Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card-modal">
            <h5 className="change">Change profile picture</h5>
            <div className="wraps">
              <div className="pic">
                <FaUserCircle className="pic-prof" />
              </div>
              <button className="pic-choose">Choose picture</button>
            </div>
            <div className="about-wrap">
              <Form>
                <Form.Group className="mb-3 about" controlId="formBasicEmail">
                  <Form.Label>About me</Form.Label>
                  <Form.Control
                    className="inputBx"
                    type="text"
                    placeholder="Write a short bio"
                  />
                </Form.Group>
              </Form>
            </div>

            <div className="about-wrap">
              <h5 className="about">Logging In</h5>
              <p className="disc"> Manage how you log in </p>
              <button className="choose">Change Password</button>
            </div>
            <div className="about-wrap">
              <h5 className="about">Delete Your Account</h5>
              <p className="disc"> Permanently delete all your data </p>
              <button className="choose">Delete My Account</button>
            </div>

            <button class="done">Done</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MyProfile;
