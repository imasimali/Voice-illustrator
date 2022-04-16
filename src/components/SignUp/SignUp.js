import { Button, Form } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { RiLockFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import "./signup.scss";

const SignUp = () => {
  return (
    <div>
      <div className="container back">
        <h3 className="title">VoiceIllustrator</h3>
        <h1 className="login">SIGN UP</h1>
        <Form className="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <div className=" input-wrapper d-flex align-items-center">
              <FaUserCircle />
              <Form.Control
                className="inputs"
                type="email"
                placeholder="Enter Username"
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <div className=" input-wrapper d-flex align-items-center">
              <MdEmail />
              <Form.Control
                className="inputs"
                type="email"
                placeholder="Enter email"
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <div className=" input-wrapper d-flex align-items-center">
              <RiLockFill />
              <Form.Control
                className="inputs"
                type="password"
                placeholder="Password"
              />
            </div>
          </Form.Group>
        </Form>
        <Button className="SignupBtn">Sign Up</Button>
        <div className="link">
          <Link to="/login">Already have an account? Login </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
