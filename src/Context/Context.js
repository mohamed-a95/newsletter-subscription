import React from "react";
import { createContext } from "react";

export const FormContext = createContext();

/**export const FormProvider = ({ children }) => {
  const [mail, setMail] = useState("");
  const [error, setError] = useState(false);**/

/**const handleSubmit = () => {
    // Exempel på enkel validering
    if (!mail.includes("@")) {
      setError(true);
    } else {
      setError(false);
      // Logik för att hantera formuläret, t.ex. API-anrop
    }
  };

  const handleInput = (e) => {
    setMail(e.target.value);
  };

  return (
    <FormContext.Provider
      value={{ mail, setMail, error, setError, handleInput, handleSubmit }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  return useContext(FormContext);
};

export default FormContext;**/
