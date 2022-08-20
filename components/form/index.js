import * as C from "./styles";

const Form = (props) => {
  return (
    <C.Container>
      <C.Title id="contact">{props.title}</C.Title>
      <C.Form>
        <C.Content>
          <C.Br>
            <C.Input placeholder={props.name}></C.Input>{" "}
            <C.Input placeholder={props.email}></C.Input>
          </C.Br>
          <C.Br>
            <C.Input placeholder={props.lastname}></C.Input>
            <C.Input placeholder={props.phone}></C.Input>
          </C.Br>
        </C.Content>
        <C.Area>
          <C.Textarea
            name=""
            id=""
            cols="50"
            rows="10"
            placeholder={props.message}
          ></C.Textarea>
        </C.Area>

        <C.Button type="submit">{props.submit}</C.Button>
      </C.Form>
    </C.Container>
  );
};

export default Form;
