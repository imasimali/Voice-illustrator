import "./footer.scss";
import Logo from "../../assets/images/Logo.png"


const Footer = () => {
  return (
    <>
    <section className="footer-contain">
            <div className="combine">
                <div className="info">
                    <p className ="about-txt">About</p>
                    <p className="contact-txt">Contact</p>
                    <p className="create-txt">Create</p>
                </div>
                <div className="two">
                    <div> <a className="log" href="#">
                        <img className="footer-img" src={Logo} alt="logo"/>
                        
                        
                    </a></div>
                    
                    <p className="text">2022, Voice Illustrator</p>
    
                </div>
                
            </div>
    </section>
    </>
  )
}

export default Footer