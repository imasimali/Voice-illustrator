import { Dropdown, Form, Button} from "react-bootstrap";
import "./speechtoImage.scss";
import { FaMicrophone } from "react-icons/fa";
import NavBar from "../NavBar/NavBar";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";


const SpeechtoImage = () =>{
    return(
        <div>
            <NavBar/>
            <div className="container backdrop">
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                        <h3 className="heading">Turn your speech into Images</h3>
                        <h5 className="languages">Choose your language:</h5>
                        <Dropdown>
                            <Dropdown.Toggle className="lang-dropdown" variant="success" id="dropdown-basic">
                                English
                                <span><FiChevronDown/></span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="lang-options">
                                <Dropdown.Item href="#/action-1">Afrikaans</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Albanian</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Amharic</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Arabic</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Armenian</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Azerbaijani</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Basque</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Belarusian</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Bengali</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Bosnian</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Bulgarian</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Burmese</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Catalan</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Cebuano</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Chewa</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Chinese (Simplified)</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Chinese (Traditional)</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Corsican</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Croatian</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Czech</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Danish</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Dutch</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">English</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Esperanto</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Estonian</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Filipino</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Finnish</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">French</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Galician</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Georgian</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">German</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Greek</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Gujrati</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Haitan Creole</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Hausa</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Hawaiian</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Hebrew</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Hindi</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Hmong</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Hungarian</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Icelandic</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Igbo</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Indonesian</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Irish</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Italian</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Japanese</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Javanese</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Kannada</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Kazakh</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Khmer</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Kinyarwanda</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Korean</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Kurdish</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Kyrgyz</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Lao</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Latin</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Latvian</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Lithuanian</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Luxembourgish</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Macedonian</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Malagasy</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Malay</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Malayalam</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Maltese</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Maori</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Marathi</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Mongolian</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Nepali</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Norwegian</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Odia</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Pashto</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Persian</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Polish</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Portuguese</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Punjabi</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Romanian</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Russian</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Samoan</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Scottish Gaelic</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Serbian</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Shona</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Sindhi</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Sinhala</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Slovak</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Slovenian</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Somali</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Sotho</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Spanish</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Sundanese</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Swahili</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Swedish</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Tajik</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Tamil</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Tatar</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Telugu</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Thai</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Turkish</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Turkmen</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Ukranian</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Urdu</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Uyghur</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Uzbek</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Vietnamese</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Welsh</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">West Frisian</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Xhosa</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Yiddish</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Yoruba</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Zulu</Dropdown.Item>
                              
                            </Dropdown.Menu>
                        </Dropdown>
                        <h5 className="speech-heading">Speech prompt</h5>
                        <p className="speech-descrip">Give your speech for the AI to generate your image</p>
                        <Form className="form speech-text">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <div className=" input-wrapper d-flex align-items-center">
                                    <Form.Control
                                        className="inputs"
                                        type="text"
                                         placeholder="Your Idea"
                                    />
                                 </div>
                            </Form.Group>
          
                        </Form>
                        <Button className="microphone-btn"><FaMicrophone className="micro"/></Button>
                        <Link to="/loading"><Button className="create-btn"  variant="light">CREATE</Button></Link>
                        
                        
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
            </div>
            
    

        </div>


    );
};


export default SpeechtoImage;