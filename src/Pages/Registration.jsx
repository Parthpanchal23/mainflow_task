import React, { Suspense, lazy } from "react";
import Loader from "../Ui/loader";
const Form = lazy(() =>
  import("../Auth/registration/RegistartionForm")
);

const RegistrationPage = () => {
  return (
    <div className="center">
      <h1>Registration</h1>
      <Suspense fallback={<Loader/>}>
        <Form />
      </Suspense>
    </div>
  );
};

export default RegistrationPage;
