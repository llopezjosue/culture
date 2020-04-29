import React from "react";
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
/* import PropTypes from "prop-types"; */

function Categories(props) {
  return <div>
  <h1>categorie</h1>
  <Button to="/categories/peinture" tag={NavLink} outline color="primary"> Peinture !</Button>
  </div>;
}

/* Categories.propTypes = {}; */

export default Categories;
