import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "./CustomInput";
import { useState } from "react";
import { postNewUser } from "../helpers/axiosHelper";
import useForm from "../hooks/useForm";

const initialState = {
  email: "",
  password: "",
};
export const SignInForm = () => {
  const { form, handleOnChange } = useForm(initialState);
  // const [form, setForm] = useState({});
  const fields = [
    {
      label: "Email",
      placeholder: "john@gmail.com",
      required: true,
      type: "email",
      name: "email",
    },
    {
      label: "Password",
      placeholder: "*****",
      required: true,
      type: "password",
      name: "password",
    },
  ];

  // const handleOnChange = (e) => {
  //   const { name, value } = e.target;

  //   setForm({
  //     ...form,
  //     [name]: value,
  //   });
  // };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    console.log(form);
  };

  return (
    <div className="border rounded p-4">
      <h4 className="mb-5">Login now!</h4>
      <hr />
      <Form onSubmit={handleOnSubmit}>
        {fields.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}

        <div className="d-grid">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
