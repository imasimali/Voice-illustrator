import { Button, Form } from "react-bootstrap";
// import { FaUserCircle } from "react-icons/fa";
import { RiLockFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import "./loginform.scss";

const LoginForm = () => {
  return (
    <div>
      <div className="container back">
        <h3 className="title">VoiceIllustrator</h3>
        <h1 className="login">Login</h1>
        <Form className="form">
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
        <Button className="loginBtn">Login Now</Button>
        <div className="links d-flex justify-content-between">
          <Link to="/sign-up">Sign Up </Link>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
