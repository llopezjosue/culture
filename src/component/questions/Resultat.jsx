import React, { Component } from "react";
/* import PropTypes from "prop-types"; */
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

/* getApi = () => {
  axios
    .get("https://collectionapi.metmuseum.org/public/collection/v1/objects/[objectID]")
    /* .then(res => console.log(res)); */
/*  .then(res => this.setState({ oeuvres: res.data }));
}; */

class Question2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oeuvres: [],
    };
  }
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <div className="containerSmall">
              <h1>Resultat afficahge</h1>

              <div className="containerImg">image</div>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

/* Peinture.propTypes = {}; */

export default Question2;
