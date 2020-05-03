import React, { Component } from "react";
/* import PropTypes from "prop-types"; */
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import House from "./house.svg";

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
    const cover1 =
      "https://www.romepratique.com/wp-content/uploads/2019/03/Visite-musee-tableaux-min-696x464.jpg";

    return (
      <div>
        <Container fluid>
          <Row>
            <div className="containerSmall shadow-lg">
              <div className="card">
                <img className="card-img-top" src={cover1} alt="Card image cap" />
                <div className="card-body">
                  <h3 className="card-title"> Mes résultats : </h3>
                  <p>
                    {" "}
                    Bravo, vous avez mis {this.state.temppasse} secondes pour réaliser ce voyage temporel à travers l'art ! <br/> Vous pouvez mieux faire !
                  </p>
                  <Link to="/">
                    <img src={House} className="logoCulture" alt="logoculture"></img>
                    <p>Retour à la maison !</p>
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

export default Question2;
