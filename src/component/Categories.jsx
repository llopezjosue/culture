import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import "./Categories.css";
import Logo from "./logo.png";
/* import PropTypes from "prop-types"; */

function Categories(props) {
  return (
    <div>
      <Container className="max-content-cat">
        <Link to="/">
          <img
            src={Logo}
            class="rounded mx-auto d-block small logo"
            alt="logoculture"
          ></img>
        </Link>
        <h1>
        
          Voyagez à travers le temps et l'histoire ! 
        </h1>
        <p className="para">Embarquez dans cet escape game qui
          testera vos connaissances artistiques. Le but est de résoudre les énigmes le plus rapidement possible !</p>
        <hr />
        <Row xs="1" sm="2" md="2">
          <Col className="container-image">
            <Link to="/categories/peinture" tag={NavLink} className="categories-link">
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
            <Link to="/categories/peinture" className="categories-link">
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
            <Link to="/categories/peinture" className="categories-link">
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
            <Link to="/categories/peinture" className="categories-link">
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
  );
}

/* Categories.propTypes = {}; */

export default Categories;
