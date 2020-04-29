import React from "react";
import PropTypes from "prop-types";

function Oeuvre({ oeuvres }) {
  return (
    <div>
      <div>
        <ul>
          <li>
            Artiste:
            {oeuvres.displayArtistName}
          </li>
        </ul>
      </div>
    </div>
  );
}

Oeuvre.propTypes = {
  oeuvres: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Oeuvre;
