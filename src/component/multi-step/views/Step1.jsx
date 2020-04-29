import { FastField, useFormikContext } from "formik";
import React from "react";

function Step1() {
  const { errors, touched } = useFormikContext();

  return (
    <div>
      <div>
        <label htmlFor="reponse1ValueInput">Question 1: </label>
        <FastField name="reponse1ValueInput" id="reponse1ValueInput" />
      </div>
      <small style={{ color: "red" }}>{touched.reponse1ValueInput && errors.reponse1ValueInput}</small>
      <div>(try typing "argh!" once)</div>
    </div>
  );
}

export default Step1;
