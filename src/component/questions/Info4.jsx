import React from 'react';
import { Link } from "react-router-dom";

const Info4 = (props) =>{
    return (
    <div>
        <h2>Self-Portrait with a Straw Hat (obverse: The Potato Peeler)</h2>
        <h3>1503-1506</h3>
        <h3> Léonard de Vinci </h3>
        <img
              className="info-image"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
              alt=""
            />
              <div className="input-group-append">
                  <Link to="/categories/peinture/resultat">
                    <button
                      renderAs="button"
                      type="button"
                      class="btn btn-primary btn-b"
                    >
                      Voir mes résultats !
                    </button>
                  </Link>
        </div>
        
    </div>
    );
  }


  export default Info4;