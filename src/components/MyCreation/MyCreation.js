import "./MyCreation.scss";
import {Button} from "react-bootstrap";
import NavBar from "../NavBar/NavBar";

const MyCreation = () => {
    return (
        <>
            <NavBar/>
            <h3 className="creation-heading">Your Creation</h3>
            <div className="dashed-border">
                <div className="creation-inner">
                    <div className="creation-wrap">
                        <div className="creation-image creation "> </div>
                    </div>
            </div>
            <div class="creation-buttons">
                <Button className="creative-btn" variant="light">Publish</Button>
                <Button className="creative-btn" variant="light">Download</Button>
                <Button className="creative-btn" variant="light">Share</Button>
            
            </div>
            
        </div>
        </>
    );
};

export default MyCreation;