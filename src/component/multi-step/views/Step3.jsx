import { FastField, useFormikContext } from "formik";
import React from "react";

function Step3() {
  const { errors, touched } = useFormikContext();

  return (
    <div>
      <div>
        <label htmlFor="reponse3ValueInput">Question 3: </label>
        <FastField name="reponse3ValueInput" id="reponse3ValueInput" />
      </div>
    </div>
  );
}

export default Step3;
