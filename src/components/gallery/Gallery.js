import "./gallery.scss"
import { FaHeart } from "react-icons/fa";
import NavBar from "../NavBar/NavBar";

const Gallery = () => {
  return (
      <>
    <NavBar/>
    <div className="container gallery-contain">
      <div className="popular">
        <p>Gallery</p>
      </div>
    </div>
    <div className="container gallery-pics">
        <div className="row">
            <div className="col-md-4">
                <div className="card-wrapper1 d-flex flex-column justify-content-between">
                <div className="restaurant1 ">
                    <div className="restaurantName d-flex justify-content-between align-items-center">
                    <h4 className="pic-title">Plant</h4>
                    
                    </div>
            
                </div>
                <div class="rating d-flex align-items-center heart">
                    <FaHeart className="heart"/>
                </div>
                </div>
            
                
            </div>
            <div class="col-md-4">
                <div class="card-wrapper2 d-flex flex-column justify-content-between">
                <div class="restaurant1 ">
                    <div class="restaurantName d-flex justify-content-between align-items-center">
                    <h4 class="pic-title">Cartoon</h4>
                    
                    </div>
                    
                </div>
                <div class="rating d-flex align-items-center">
                    <FaHeart className="heart"/>
                
                </div>
                </div>
                
            </div>
            <div class="col-md-4">
                <div class="card-wrapper3 d-flex flex-column justify-content-between">
                <div class="restaurant1 ">
                    <div class="restaurantName d-flex justify-content-between align-items-center">
                    <h4 class="pic-title">Shoe</h4>
                    
                    </div>
                
                </div>
                <div class="rating d-flex align-items-center">
                    <FaHeart className="heart"/>
                    
                </div>
                </div>
                
            </div>
            
            </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card-wrapper4 d-flex flex-column justify-content-between">
              <div className="restaurant1 ">
                <div className="restaurantName d-flex justify-content-between align-items-center">
                  <h4 className="pic-title">Interior</h4>
                  
                </div>
                
              </div>
              <div class="rating d-flex align-items-center">
                <FaHeart className="heart"/>
              </div>
            </div>
            
          </div>
          <div class="col-md-4">
            <div class="card-wrapper5 d-flex flex-column justify-content-between">
              <div class="restaurant1 ">
                <div class="restaurantName d-flex justify-content-between align-items-center">
                  <h4 class="pic-title">Filter</h4>
                  
                </div>
                
              </div>
              <div class="rating d-flex align-items-center">
                <FaHeart className="heart"/>
              </div>
            </div>
            
          </div>
          <div class="col-md-4">
            <div class="card-wrapper6 d-flex flex-column justify-content-between">
              <div class="restaurant1 ">
                <div class="restaurantName d-flex justify-content-between align-items-center">
                  <h4 class="pic-title">Robot</h4>
                  
                </div>
                
              </div>
              <div class="rating d-flex align-items-center">
                <FaHeart className="heart"/>
              </div>
            </div>
            
          </div>
         
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card-wrapper7 d-flex flex-column justify-content-between">
              <div className="restaurant1 ">
                <div className="restaurantName d-flex justify-content-between align-items-center">
                  <h4 className="pic-title">Cartoon</h4>
                  
                </div>
               
              </div>
              <div className="rating d-flex align-items-center  ">
                <FaHeart className="heart"/>
              </div>
            </div>
            
          </div>
          <div className="col-md-4">
            <div className="card-wrapper8 d-flex flex-column justify-content-between">
              <div className="restaurant1 ">
                <div className="restaurantName d-flex justify-content-between align-items-center">
                  <h4 className="pic-title">Food</h4>
                  
                </div>
                
              </div>
              <div className="rating d-flex align-items-center">
                <FaHeart className="heart"/>
              </div>
            </div>
            
          </div>
          <div className="col-md-4">
            <div className="card-wrapper9 d-flex flex-column justify-content-between">
              <div className="restaurant1 ">
                <div className="restaurantName d-flex justify-content-between align-items-center">
                  <h4 className="pic-title">Interior</h4>
                  
                </div>
                
              </div>
              <div className="rating d-flex align-items-center">
                <FaHeart className="heart"/>
                
              </div>
            </div>
            
          </div>
         
        </div>

    </div>
    </>
    
  )
}

export default Gallery