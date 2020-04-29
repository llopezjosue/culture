import { FastField, useFormikContext } from "formik";
import React from "react";

function Step2() {
  const { errors, touched } = useFormikContext();

  return (
    <div>
      <div>
        <label htmlFor="reponse2ValueInput">Question 2: </label>
        <FastField name="reponse2ValueInput" id="reponse2ValueInput" />
      </div>
    </div>
  );
}

export default Step2;
