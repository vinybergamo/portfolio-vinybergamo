import { useState } from "react";
import Api from "../../services/api";
import * as C from "./styles";
import ReactInputMask from "react-input-mask";

const Form = (props) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    Api.post("/message", {
      name,
      last_name: lastName,
      email,
      phone,
      message,
    })
      .then(() => alert("Message sent succefully!"))
      .catch((response) => {
        alert(
          `Error to send message\nStatus code: ${response.response.status}`
        );
      });

    setName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <C.Container>
      <C.Title id="contact">{props.title}</C.Title>
      <C.Form onSubmit={(e) => handleSubmit(e)}>
        <C.Content>
          <C.Br>
            <C.Input
              value={name}
              placeholder={props.name}
              onChange={(e) => setName(e.target.value)}
            ></C.Input>{" "}
            <C.Input
              value={email}
              placeholder={props.email}
              onChange={(e) => setEmail(e.target.value)}
            ></C.Input>
          </C.Br>
          <C.Br>
            <C.Input
              value={lastName}
              placeholder={props.lastname}
              onChange={(e) => setLastName(e.target.value)}
            ></C.Input>
            <ReactInputMask
              className="inputPhone"
              mask="(99) 99999-9999"
              value={phone}
              placeholder={props.phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </C.Br>
        </C.Content>
        <C.Area>
          <C.Textarea
            value={message}
            name=""
            id=""
            cols="50"
            rows="10"
            placeholder={props.message}
            onChange={(e) => setMessage(e.target.value)}
          ></C.Textarea>
        </C.Area>

        <C.Button type="submit">{props.submit}</C.Button>
      </C.Form>
    </C.Container>
  );
};

export default Form;
