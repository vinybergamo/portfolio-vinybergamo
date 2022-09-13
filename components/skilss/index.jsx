import * as C from "./styles";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { TbBrandCss3, TbBrandJavascript } from "react-icons/tb";

const Skills = (props) => {
  return (
    <C.Container>
      <C.Main>{props.title}</C.Main>
      <C.Content>
        <C.Card>
          <C.Title>
            <AiOutlineHtml5 className="svg" />
          </C.Title>
          <C.Subtitle>HTML</C.Subtitle>
        </C.Card>{" "}
        <C.Card>
          <C.Title>
            <TbBrandCss3 />
          </C.Title>
          <C.Subtitle>CSS</C.Subtitle>
        </C.Card>{" "}
        <C.Card>
          <C.Title>
            <TbBrandJavascript />
          </C.Title>
          <C.Subtitle>Javascript</C.Subtitle>
        </C.Card>{" "}
        <C.Card>
          <C.Title>
            <FaReact />
          </C.Title>
          <C.Subtitle>React</C.Subtitle>
        </C.Card>
      </C.Content>
    </C.Container>
  );
};

export default Skills;
