import React, { Component } from "react";
/* import PropTypes from "prop-types"; */
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "./multi-step/step.css";
import question from "./question.svg";

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
        <Link to="/categories/peinture/info1">
          <button renderAs="button" type="button" class="btn btn-primary btn-lg">
            Dites m'en plus
          </button>
        </Link>
      ) : null;

    const displayMessageError = () =>
      this.state.countResponse <= 1 && this.state.isValidResponse === false ? null : (
        <div className="alert-error">C'est une mauvaise réponse !</div>
      );

    const cover = {
      backgroundImage: `url(https://collectionapi.metmuseum.org/api/collection/v1/iiif/490036/1006978/restricted)`,
    };

    return (
      <div>
        <Container fluid>
          <Row>
<<<<<<< HEAD
            <div className="containerSmall">
            <img
              className="info-image"
              src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/490036/1006978/restricted"
              alt=""
            />

              <div className="containerImg"></div>
=======
            {/* <img
              className="info-image"
              src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/490036/1006978/restricted"
              alt=""
            /> */}
            <div className="containerSmall shadow-lg">
              <h1>Question 1</h1>

              <div className="containerImg" style={cover}></div>
>>>>>>> 4ab44eb6311502ec3f32d5c71ccdc90ad9f03cd5

              <div>
                <h2 className="h2Question">
                  <img src={question} alt="question" />
                  Quelle est le nom du peintre ?
                </h2>
              </div>

              <div className="mb-3 input-group">
                <input
                  placeholder="ecrivez votre réponse"
                  class="form-control form-control-lg"
                  name="reponse1ValueInput"
                  id="reponse1ValueInput"
                  onChange={this.handleChangeInput}
                  style={
                    this.state.isValidResponse === false ? null : { marginRight: "15px" }
                  }
                />
<<<<<<< HEAD
                <div className="input-group-append">
                  <Link to="/categories/peinture/info1">
                    <button
                      renderAs="button"
                      type="button"
                      class="btn btn-outline-secondary"
                    >
                      Vérifier
                    </button>
                  </Link>
                </div>
=======
                <div className="input-group-append">{displayBtnSuivant()}</div>
>>>>>>> 4ab44eb6311502ec3f32d5c71ccdc90ad9f03cd5
              </div>
              {/* {displayMessageError()} */}
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

/* Peinture.propTypes = {}; */

export default Peinture;
