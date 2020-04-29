import React from "react";
import { NavLink, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './Categories.css';
/* import PropTypes from "prop-types"; */

function Categories(props) {
  return (
  <div>
    <h1>Choose your travel destination !</h1>
    <Container fluid={true}>
      <Row xs="1" sm="2" md="2">
        <Col className="container-image">
          <Link to="/categories/peinture" tag={NavLink}  className="categories-link">
            <img
              className="categorie-image"
              src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/45434/134438/main-image"
              alt=""
            />
            <div className="text">
              <p className="title-categorie">Peinture</p>
            </div>
          </Link>
        </Col>
        <Col className="container-image">
          <Link to="/list-categories/breakfast" className="categories-link">
            <img
              className="categorie-image"
              src="https://www.telegraph.co.uk/content/dam/Travel/2016/August/monument.jpg?imwidth=1400"
              alt=""
            />
            <div className="text">
              <p className="title-categorie">Sculpture</p>
            </div>
          </Link>
        </Col>
        <Col className="container-image">
          <Link to="/list-categories/chicken" className="categories-link">
            <img
              className="categorie-image"
              src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/27791/60392/main-image"
              alt=""
            />
            <div className="text">
              <p className="title-categorie">Archéologie</p>
            </div>
          </Link>
        </Col>
        <Col className="container-image">
          <Link to="/list-categories/dessert" className="categories-link">
            <img
              className="categorie-image"
              src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/264711/608595/main-image"
              alt=""
            />
            <div className="text">
              <p className="title-categorie">Photo</p>
            </div>
          </Link>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

/* Categories.propTypes = {}; */

export default Categories;
