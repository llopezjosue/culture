import React from 'react';
import { Link } from "react-router-dom";

const Info3 = (props) =>{
    return (
    <div>
        <h2>Self-Portrait with a Straw Hat (obverse: The Potato Peeler)</h2>
        <h3>1947</h3>
        <h3> Pablo Picasso </h3>
        <img
              className="info-image"
              src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/488221/1009264/restricted"
              alt=""
            />
              <div className="input-group-append">
                  <Link to="/categories/peinture/question-4">
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


  export default Info3;