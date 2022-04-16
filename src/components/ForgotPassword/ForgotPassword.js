import { Button, Form } from "react-bootstrap";
// import { FaUserCircle } from "react-icons/fa";
// import { RiLockFill } from "react-icons/ri";
import { MdEmail} from "react-icons/md";
// import { Link } from "react-router-dom";
import "./forgot.scss"

const ForgotPassword = () => {
    return (
        <div>
            <div className="container back">
        <h3 className="title">VoiceIllustrator</h3>
        <h1 className="forgot">Forgot Password?</h1>
        <p className="message">No worries! Enter your email and we will send a reset.</p>
        <Form className="form form1">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <div className=" input-wrapper d-flex align-items-center">
            <MdEmail/>
            <Form.Control className="inputs" type="email" placeholder="Enter email" />
            </div>
            
          </Form.Group>
        </Form>
        <Button className="ForgotBtn">Reset Password</Button>
      
      </div>
        </div>
    )
}

export default ForgotPassword
