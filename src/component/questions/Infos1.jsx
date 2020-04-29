import React from 'react';
import { Link } from "react-router-dom";

const Info1 = (props) =>{
    return (
    <div>
        <h2>The Accommodations of Desire</h2>
        <h3>1929</h3>
        <h3>Salvador Dali</h3>
        <img
              className="info-image"
              src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/490036/1006978/restricted"
              alt=""
            />
        <div className="input-group-append">
                  <Link to="/categories/peinture/question-2">
                    <button
                      renderAs="button"
                      type="button"
                      class="btn btn-outline-secondary"
                    >
                      Vérifier
                    </button>
                  </Link>
        </div>
        
    </div>
    );
  }


  export default Info1;