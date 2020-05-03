import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";

class Info2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oeuvres: [],
    };
  }
  getApi = () => {
    axios
      .get("https://collectionapi.metmuseum.org/public/collection/v1/objects/436532")
      .then((res) => this.setState({ oeuvres: res.data }));
  };

  componentDidMount() {
    this.getApi();
  }

  render() {
    const cover1 =
      "https://images.metmuseum.org/CRDImages/ep/original/DT1502_cropped2.jpg";

    const { oeuvres } = this.state;

    return (
      <div>
        <Container fluid>
          <Row>
            <div className="containerSmall shadow-lg">
              <div className="card">
                <img className="card-img-top max-with-info-img" src={cover1} alt="Card image cap" />
                <div className="card-body">
                  <h3 className="card-title">{oeuvres.artistDisplayName}</h3>
                  <h5>{oeuvres.artistDisplayBio}</h5>

                  <hr />
                  <p className="card-text">
                    <strong>Titre de l'oeuvre :</strong> {oeuvres.title}
                  </p>
                  <p className="card-text">
                    <strong>Peint en </strong> {oeuvres.objectDate}
                  </p>
                  <hr />
                  <p className="card-text"> Réalisé par le biais d'{oeuvres.medium}</p>
                  <hr />
                  <p className="card-text">
                    <strong>Exposé au musée :</strong> {oeuvres.repository}
                  </p>

                  <Link to="/categories/peinture/question-3">
                    <button renderAs="button" type="button" class="btn btn-primary btn-b">
                      Question suivante
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

export default Info2;
