import { useState } from "react";

const useForm = (initialState) => {
  const [formValues, setFormValues] = useState(initialState);

  const onChangeInput = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log("Form values:", formValues);
  };

  return {
    formValues,
    onChangeInput,
    onSubmitForm,
  };
};

export default useForm;
