import React from 'react';
import { Link } from "react-router-dom";

const Info2 = (props) =>{
    return (
    <div>
        <h2>Self-Portrait with a Straw Hat (obverse: The Potato Peeler)</h2>
        <h3>1887</h3>
        <h3> Vincent van Gogh </h3>
        <img
              className="info-image"
              src="https://images.metmuseum.org/CRDImages/ep/original/DT1502_cropped2.jpg"
              alt=""
            />
              <div className="input-group-append">
                  <Link to="/categories/peinture/question-3">
                    <button
                      renderAs="button"
                      type="button"
                      class="btn btn-primary btn-b"
                    >
                      Question suivante
                    </button>
                  </Link>
        </div>
        
    </div>
    );
  }


  export default Info2;