import axios from "axios";
import { useState } from "react";
import * as C from "./styles";

const Form = (props) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://54.233.80.133:3000/api/message", {
      name,
      last_name: lastName,
      email,
      phone,
      message,
    });

    setName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");

    alert("Mensagem enviada");
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
            <C.Input
              value={phone}
              placeholder={props.phone}
              onChange={(e) => setPhone(e.target.value)}
            ></C.Input>
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
