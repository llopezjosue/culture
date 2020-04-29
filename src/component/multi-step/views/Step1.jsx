import { FastField, useFormikContext } from "formik";
import React from "react";
import { Container, Row, Col } from "reactstrap";

function Step1() {
  const { errors, touched } = useFormikContext();

  return (
    <div>
      <div className="containerImg">image</div>

      <div className="mb-3 input-group">

        <input placeholder="ecrivez votre réponse" class="form-control" name="reponse1ValueInput" id="reponse1ValueInput"/>
        <div className="input-group-append">
          <button type="button" class="btn btn-outline-secondary">
            Ma réponse
          </button>
        </div>
      </div>

      <div>
        <label htmlFor="reponse1ValueInput">Question 1: </label>
        <FastField name="reponse1ValueInput" id="reponse1ValueInput" class="form-control" />
      </div>
      <small style={{ color: "red" }}>
        {touched.reponse1ValueInput && errors.reponse1ValueInput}
      </small>
      <div>(try typing "argh!" once)</div>
    </div>
  );
}

export default Step1;
