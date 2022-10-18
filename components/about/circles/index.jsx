import * as C from "./styles";

const Circles = (props) => {
  return (
    <C.Container>
      <C.Circle>
        <C.CircleLarge>
          <C.Circlemini>
            <C.Circlemini1 />
          </C.Circlemini>
        </C.CircleLarge>
        <C.Texts>
          <C.Title>{props.cName}</C.Title>
          <C.Subtitle>Vinycios Cavalcante Bergamo</C.Subtitle>
        </C.Texts>
      </C.Circle>{" "}
      <C.Circle>
        <C.CircleLarge>
          {" "}
          <C.Circlemini>
            <C.Circlemini1 />
          </C.Circlemini>
        </C.CircleLarge>
        <C.Texts>
          <C.Title>{props.cEmail}</C.Title>
          <C.Link href="mailto:vinybergamo@gmail.com" target="_blank">
            contato@vinybergamo.com.br
          </C.Link>
        </C.Texts>
      </C.Circle>{" "}
      <C.Circle>
        <C.CircleLarge>
          <C.Circlemini>
            <C.Circlemini1 />
          </C.Circlemini>
        </C.CircleLarge>
        <C.Texts>
          <C.Title>{props.cGithub}</C.Title>
          <C.Link href="https://github.com/vinybergamo" target="_blank">
            @vinybergamo
          </C.Link>
        </C.Texts>
      </C.Circle>{" "}
      <C.Circle>
        <C.CircleLarge>
          <C.Circlemini>
            <C.Circlemini1 />
          </C.Circlemini>
        </C.CircleLarge>
        <C.Texts>
          <C.Title>{props.cPhone}</C.Title>
          <C.Link href="https://wa.me/5521969790621" target="_blank">
            (21) 96979-0621
          </C.Link>
        </C.Texts>
      </C.Circle>
    </C.Container>
  );
};

export default Circles;
