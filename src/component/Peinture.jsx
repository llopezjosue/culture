import React, { Component } from "react";
/* import PropTypes from "prop-types"; */
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";
import "./multi-step/step.css";
import question from "./question.svg";
import Logo from "./logo.png";

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

  getApi = () => {
    axios
      .get("https://collectionapi.metmuseum.org/public/collection/v1/objects/488221")
      .then((res) => this.setState({ oeuvres: res.data }));
  };

  componentDidMount() {
    this.getApi();
    this.props.getDateStart();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.valueInput !== prevState.valueInput) {
      //bonne reponse =  Salvador Dali
      if (this.state.valueInput === "Dali") {
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

    console.log(this.props.score);

    return (
      <div>
        <Container fluid>
          <Link to="/">
            <img
              src={Logo}
              class="rounded mx-auto d-block small logo"
              alt="logoculture"
            ></img>
          </Link>
          <Row>
            {/* <img
              className="info-image"
              src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/490036/1006978/restricted"
              alt=""
            /> */}
            <div className="containerSmall shadow-lg">
              <h1>Question 1 </h1>

              <div className="containerImg" style={cover}></div>

              <div>
                <h2 className="h2Question">
                  <img src={question} alt="question" />
                  Quel est le nom du peintre ayant réalisé cette oeuvre ?
                </h2>
              </div>

              <div className="mb-3 input-group">
                <input
                  placeholder="Écrivez votre réponse"
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

          {/* //////////////////////////////////////////////////////////////////// */}
          {/* SVG icon btn whatson */}
          {/* //////////////////////////////////////////////////////////////////// */}
          <div className="fixed-tips">
            <Button id="PopoverLegacy" type="button">
              <svg
                width="32px"
                height="35px"
                viewBox="0 0 32 35"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g id="Typography" transform="translate(-456.000000, -608.000000)">
                    <g
                      id="Group-4"
                      transform="translate(456.000000, 608.000000)"
                      fill="#FFFFFF"
                      fill-rule="nonzero"
                    >
                      <g id="np_sherlock_10668_000000">
                        <path
                          d="M13.1086636,0.990582733 C12.6991913,0.990582733 12.704909,-0.135323151 11.6626459,0.013564305 C10.6203828,0.162451761 11.0928226,1.24207081 10.70054,1.35913839 C10.1035212,1.56003655 9.5093612,2.5038402 9.31034271,2.98221145 C8.84647937,3.81903739 8.85505586,4.35816242 8.48996873,5.25133916 C8.1148757,6.3338812 8.12488526,7.50455692 8.07049054,8.64204376 C8.00463119,9.42251891 7.02104372,9.67977897 6.61157144,10.2708888 C6.31377674,10.5715127 6.19209325,10.9848752 6.03745992,11.3751128 C7.08690674,11.6540584 8.13635357,11.2406997 9.0984595,10.8620356 C9.40770783,11.9214528 10.0491301,13.1600602 9.43061512,14.2296153 C9.25451491,14.6762037 8.70187027,14.6429778 8.32534782,14.8091812 C7.80562736,15.969756 7.14274554,17.1288877 6.09333537,17.876137 C4.64588823,18.9138722 3.15405593,20.1062298 2.45822427,21.7914627 C2.45106584,21.8131424 2.44390703,21.8348228 2.4367486,21.8550581 L0.592730557,30.4068368 C0.376544438,31.9345242 0.177540615,33.4650976 0,35 L28.6370372,35 C29.3328322,33.641402 30.2476942,32.4027945 30.910576,31.0325045 C31.1310577,30.6639526 31.0981299,30.2072225 31.0322705,29.79386 C30.7230222,28.4106941 30.4352517,27.0058462 30.524022,25.5895654 C30.678648,23.9722643 31.3973576,22.5110657 31.8712635,20.9834522 C32.2807358,19.8228775 31.5505616,18.6406208 31.9041928,17.4699081 C31.0752424,17.1909624 30.224814,17.0131818 29.3629137,16.8455354 C29.1309784,16.5217866 28.6885966,16.0650602 28.3020316,16.4668788 C27.815261,17.4150003 27.7493979,18.5076433 27.5403735,19.5338345 C26.3362934,18.7750413 26.6784732,16.8455724 25.2868832,16.2992324 C24.5137532,15.7745743 23.5516473,15.7297674 22.6797411,15.4624064 C22.6582654,15.7297896 22.6353596,16.0087464 22.6138817,16.2761075 C23.4428322,16.1532568 24.3262104,16.4105206 24.9117572,17.0117758 C25.6848872,18.2388393 25.2868502,19.8561404 26.0828875,21.0832409 C26.281895,21.4402304 26.6240859,21.6859317 26.911838,21.9648737 C26.9562195,22.9245761 27.6520182,23.6818894 27.6964033,24.6415919 C27.3542271,25.0202485 26.8574103,25.2110568 26.513801,25.5897134 C25.7850562,26.4149954 25.0777892,27.2735032 24.2932239,28.0655224 C23.7620681,27.3789899 21.1477789,29.1798473 20.6137643,28.4976808 L20.6109011,28.5121337 C20.3403092,28.1681496 20.0668439,27.8241582 19.7933859,27.4801704 C18.9100077,26.4323343 18.3344668,25.1720079 17.7603553,23.9449444 C17.4625606,23.0300487 17.7818309,22.0154754 17.5069421,21.1005798 C17.3408661,20.5311148 17.3852476,19.9067421 17.0759919,19.393665 C16.7781972,19.025113 16.4131101,18.7244854 16.0709302,18.4007366 C16.3357971,18.0769878 16.6779549,17.7879449 16.8440602,17.3962643 C16.9872289,17.0060267 17.0101362,16.5926642 17.1762159,16.2140076 C18.0051663,16.1807658 18.8226815,16.5045158 19.651632,16.4033433 C20.1269673,16.3368583 20.4361973,15.8786852 20.5135323,15.4335399 C20.4362193,14.9088818 20.10406,14.3741227 20.3374321,13.8495017 C20.6137526,13.1803221 20.6137526,12.4331098 20.503508,11.7191235 C20.9673714,11.6974438 21.5801504,11.8202959 21.8951347,11.6410759 C22.210119,11.461856 22.293135,11.431505 22.0383034,10.8490568 C21.7848902,10.266605 20.8786084,9.23175574 20.3804025,8.36166693 C21.2966938,8.1492063 22.3031849,8.06104302 23.0877502,7.49157811 C23.3082319,7.19095421 23.7391601,6.78917267 23.4413801,6.3989351 C22.9087949,5.12850775 21.2723351,5.22966538 20.1570619,5.12850775 C19.5385653,4.06909062 18.7983851,2.99812953 17.6830753,2.39688173 C16.8641307,1.96183732 16.0466522,1.49212404 15.2190945,1.05852262 C14.9327534,0.911100364 14.6277933,0.869186917 14.3157045,0.870633612 C13.9132774,0.873512571 13.4995169,0.953005671 13.1086636,0.990582733 Z"
                          id="Path"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              Un indice Sherlock ?
            </Button>
            <UncontrolledPopover
              trigger="legacy"
              placement="bottom"
              target="PopoverLegacy"
            >
              <PopoverHeader>Et voici, mon cher Whatson:</PopoverHeader>
              <PopoverBody>
                Ce fameux peintre espagnol possède une sacrée moustache !
              </PopoverBody>
            </UncontrolledPopover>
          </div>
          {/* //////////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////////// */}
        </Container>
      </div>
    );
  }
}

/* Peinture.propTypes = {}; */

export default Peinture;
