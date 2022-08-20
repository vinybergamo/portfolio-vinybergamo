import * as C from "./styles";
import { FaConnectdevelop, FaDev } from "react-icons/fa";

const Ido = (props) => {
  return (
    <C.Geral>
      <C.Title>{props.title}</C.Title>
      <C.Container>
        <C.Card>
          <C.Icon src="./assets/images/icon1.png" />
          <C.Text>Software Development</C.Text>
        </C.Card>{" "}
        <C.Card>
          <C.Icon src="./assets/images/icon2.png" />
          <C.Text>Web Development</C.Text>
        </C.Card>{" "}
        <C.Card>
          <C.Icon src="./assets/images/icon3.png" />
          <C.Content>
            <C.Text2>Web</C.Text2>
            <C.Text>Design</C.Text>
          </C.Content>
        </C.Card>
      </C.Container>
    </C.Geral>
  );
};

export default Ido;
