import React from 'react'
import "./loading.scss"

const Loading = () => {
  return (
    <>
    <div className="container load-wrapper">
    <div className="loading-card">
            <div class="card-l">
            <div className="spinner-container">
                <div className="loading-spinner"></div>
            </div>
            </div>
           
            <h2 className="loading-txt"> Generating your Creation</h2>
        
    </div>

    </div>
     
    </>
  )
}

export default Loading