import React, { Component } from "react";
/* import PropTypes from "prop-types"; */
import axios from "axios";
import FormikWizard from "formik-wizard";
import steps from "./multi-step/Steps";
import { Link } from 'react-router-dom';

const FormWrapper = ({
  children,
  isLastStep,
  status,
  goToPreviousStep,
  canGoBack,
  actionLabel,
}) => {
  return (
    <div>
      {status && (
        <div>
          {/* {status.message} */}
          <hr />
        </div>
      )}

      <hr />
      {children}

      <hr />

      <div>
        <button
          type="button"
          onClick={goToPreviousStep}
          disabled={!canGoBack}
          className="button is-primary"
        >
          Previous
        </button>
        <button type="submit" className="button is-primary ">
          {actionLabel || (isLastStep ? "Submit" : "Next step")}
        </button>
      </div>
    </div>
  );
};

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
    };
  }
  render() {
    // const handleSubmit = React.useCallback((values) => {
    //   console.log("full values:", values);

    //   return {
    //     message: "Thanks for submitting!",
    //   };
    // }, []);

    return (
      <div>
        <h1>Peinture</h1>
        
        {/* 
        <FormikWizard steps={steps} onSubmit={handleSubmit} render={FormWrapper} /> */}
        <FormikWizard steps={steps} render={FormWrapper} />
      </div>
    );
  }
}
/* Peinture.propTypes = {}; */

export default Peinture;
