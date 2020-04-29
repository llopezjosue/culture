import React, { Component } from "react";
/* import PropTypes from "prop-types"; */
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "./multi-step/step.css";

/* getApi = () => {
  axios
    .get("https://collectionapi.metmuseum.org/public/collection/v1/objects/[objectID]")
    /* .then(res => console.log(res)); */
/*  .then(res => this.setState({ oeuvres: res.data }));
}; */

class Peinture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oeuvres: [],
      valueInput: "",
      isValidResponse: false,
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput(event) {
    this.setState({ valueInput: event.target.value });
  }

  render() {
    console.log(this.state.valueInput);

    return (
      <div>
        <Container fluid>
          <Row>
            <div className="containerSmall">
              <h1>Peinture</h1>

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
                  onChange={this.handleChangeInput}
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
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

/* Peinture.propTypes = {}; */

export default Peinture;
