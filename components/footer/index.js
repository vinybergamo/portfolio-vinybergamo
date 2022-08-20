import * as C from "./styles";

const Footer = (props) => {
  return (
    <C.Container>
      <C.Text href={props.link}>&copy; vinybergamo - {props.rights}</C.Text>
    </C.Container>
  );
};

export default Footer;
