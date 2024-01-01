import React, { useContext } from "react";
import Form from "./components/Form";
import { FormContext } from "./Context/Context";
import { useState } from "react";
import Submit from "./components/Submit";

function App() {
  const [mail, setMail] = useState("");
  const [error, setError] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handleSubmit = () => {
    if (mail.includes("@")) {
      setError(false);
      setSubmit(true);
    } else {
      setError(true);
    }
  };
  const handleInput = (e) => {
    console.log("hejhej");
    setMail(e.target.value);
  };

  const handlebtn = () => {
    setSubmit(false);
    setMail("");
  };

  return (
    <div>
      <FormContext.Provider
        value={{
          mail,
          setMail,
          error,
          setError,
          handleInput,
          handleSubmit,
          submit,
          setSubmit,
          handlebtn,
        }}
      >
        {!submit ? <Form /> : <Submit />}
      </FormContext.Provider>
    </div>
  );
}

export default App;
