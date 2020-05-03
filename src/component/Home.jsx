import React from "react";
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Logo from './logo.png';
/* import PropTypes from "prop-types"; */

const Home = (props) =>{
  return (
  <div className="TitleHome">
      <img src={Logo} class="rounded mx-auto d-block" alt="logoculture"></img>
      <Button  tag={Link} to="/categories" color="primary"> En route !</Button>
  </div>
  );
}

export default Home;
