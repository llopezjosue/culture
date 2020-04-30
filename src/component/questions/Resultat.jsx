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
      temppasse: 0,
    };
  }

  componentDidMount() {
    const moment = require("moment");
    let dateNow = moment().format("YYYY-MM-DD-hh-mm-ss");
    dateNow = moment(dateNow.split("-"));
    if (dateNow && this.props.dateStart) {
      const secondLeft = dateNow.diff(this.props.dateStart, "s");
      this.setState({ temppasse: secondLeft });
    }
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <div className="containerSmall">
              <h1>Resultat afficahge</h1>

              <div className="containerImg">image</div>

              <p> bravos vous avez mis {this.state.temppasse} secondes pour répondes</p>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

/* Peinture.propTypes = {}; */

export default Question2;
