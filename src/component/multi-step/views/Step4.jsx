import { FastField, useFormikContext } from "formik";
import React from "react";

function Step4() {
  const { errors, touched } = useFormikContext();

  return (
    <div>
      <div>
        <label htmlFor="reponse4ValueInput">Question 4: </label>
        <FastField name="reponse4ValueInput" id="reponse4ValueInput" />
      </div>
    </div>
  );
}

export default Step4;
