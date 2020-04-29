import React, { Component } from "react";
/* import PropTypes from "prop-types"; */
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, UncontrolledPopover, PopoverHeader, PopoverBody } from "reactstrap";
import "../multi-step/step.css";
import question from "../question.svg";
class Question4 extends Component {
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
      if (this.state.valueInput === "tutu") {
        this.setState({ isValidResponse: true });
      }
    }
  }

  render() {
    const displayBtnSuivant = () =>
      this.state.isValidResponse ? (
        <Link to="/categories/peinture/info4">
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
      backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg)`,
    };

    return (
      <div>
        <Container fluid>
          <Row>
          
            <div className="containerSmall shadow-lg">
              <h1>Question 4</h1>

              <div className="containerImg" style={cover}></div>

              <div>
                <h2 className="h2Question">
                  <img src={question} alt="question"    />
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
                <div className="input-group-append">{displayBtnSuivant()}</div>
              </div>
              {/* {displayMessageError()} */}
            </div>
          </Row>
          <div>
            <Button id="PopoverLegacy" type="button">
                Un indice Sherlock ?
                </Button>
                <UncontrolledPopover trigger="legacy" placement="bottom" target="PopoverLegacy">
                <PopoverHeader>Et voici, mon cher Whatson:</PopoverHeader>
                <PopoverBody>
                 Vroum vroum la citroën</PopoverBody>
                </UncontrolledPopover>
              </div>
        </Container>
      </div>
    );
  }
}

/* Peinture.propTypes = {}; */

export default Question4;
