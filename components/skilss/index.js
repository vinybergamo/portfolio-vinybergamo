import * as C from "./styles";

const Skills = (props) => {
  return (
    <C.Container>
      <C.Main>{props.title}</C.Main>
      <C.Content>
        <C.Card>
          <C.Title>80%</C.Title>
          <C.Subtitle>HTML</C.Subtitle>
        </C.Card>{" "}
        <C.Card>
          <C.Title>80%</C.Title>
          <C.Subtitle>CSS</C.Subtitle>
        </C.Card>{" "}
        <C.Card>
          <C.Title>50%</C.Title>
          <C.Subtitle>Javascrip</C.Subtitle>
        </C.Card>{" "}
        <C.Card>
          <C.Title>50%</C.Title>
          <C.Subtitle>React</C.Subtitle>
        </C.Card>
      </C.Content>
    </C.Container>
  );
};

export default Skills;
