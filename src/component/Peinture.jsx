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
      countResponse: 0,
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput(event) {
    this.setState({ valueInput: event.target.value });
    this.setState({ countResponse: this.state.countResponse + 1 });
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (this.state.valueInput !== prevState.valueInput) {
      //bonne reponse =  Salvador Dali
      if (this.state.valueInput === "toto") {
        this.setState({ isValidResponse: true });
      }
    }
  }

  render() {
    const displayBtnSuivant = () =>
      this.state.isValidResponse ? (
        <Link to="/categories/peinture/question-2">
          <button renderAs="button" type="button" class="btn btn-primary">
            Question suivante
          </button>
        </Link>
      ) : null;

    const displayMessageError = () =>
      this.state.countResponse <= 1 && this.state.isValidResponse === false ? null : (
        <div className="alert-error">C'est une mauvaise réponse !</div>
      );

    console.log(this.state.countResponse);

    return (
      <div>
        <Container fluid>
          <Row>
            <div className="containerSmall shadow-lg">
              <h1>Peinture</h1>

              <div className="containerImg">image</div>

              <div>
                <h2 className="h2Question">Quelle est le nom du peintre ?</h2>
              </div>

              <div className="mb-3 input-group">
                <input
                  placeholder="ecrivez votre réponse"
                  class="form-control"
                  name="reponse1ValueInput"
                  id="reponse1ValueInput"
                  onChange={this.handleChangeInput}
                  style={this.state.isValidResponse === false ? null : { marginRight: "15px" }}
                />
                <div className="input-group-append">{displayBtnSuivant()}</div>
              </div>
              {displayMessageError()}
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

/* Peinture.propTypes = {}; */

export default Peinture;
