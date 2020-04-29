import { object, string, date, mixed } from "yup";

import Step1 from "./views/Step1";
import Step2 from "./views/Step2";
import Step3 from "./views/Step3";
import Step4 from "./views/Step4";

import Final from "./views/Final";

export default [
  {
    id: "Step1",
    component: Step1,
    initialValues: {
      reponse1ValueInput: "",
    },
    validationSchema: object().shape({
      reponse1ValueInput: string().required(),
    }),
  },
  {
    id: "Step2",
    component: Step2,
    initialValues: {
      reponse2ValueInput: "",
    },
    validationSchema: object().shape({
      reponse2ValueInput: string().required(),
    }),
  },
  {
    id: "Step3",
    component: Step3,
    initialValues: {
      reponse3ValueInput: "",
    },
    validationSchema: object().shape({
      reponse3ValueInput: string().required(),
    }),
  },
  {
    id: "Step4",
    component: Step4,
    initialValues: {
      reponse4ValueInput: "",
    },
    validationSchema: object().shape({
      reponse4ValueInput: string().required(),
    }),
  },

  {
    id: "Final",
    component: Final,
    initialValues: {
      final: "",
    },
    validationSchema: object().shape({
      final: string().required(),
    }),
    actionLabel: "Proceed",
    onAction: (sectionValues, formValues) => {
      if (sectionValues.reponse2ValueInput === "argh!") {
        throw new Error("Please, choose a better name!");
      }
    },
  },
];
