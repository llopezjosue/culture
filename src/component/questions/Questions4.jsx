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

class Question4 extends Component {
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
              <h1>Question 4</h1>

              <div className="containerImg">image</div>

              <div>
                <h2>Quelle est le nom du peintre ?</h2>
              </div>

              <div className="mb-3 input-group">
                <input
                  placeholder="ecrivez votre réponse"
                  class="form-control"
                  name="reponse1ValueInput"
                  id="reponse1ValueInput"
                />
                  <div className="input-group-append">
                  <Link to="/categories/peinture/resultat">
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
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

/* Peinture.propTypes = {}; */

export default Question4;
