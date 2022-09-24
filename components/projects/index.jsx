import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../loading";
import * as C from "./styles";

let jsImg = "/assets/images/js.png";
let htmlImg = "/assets/images/html.png";
let cssImg = "/assets/images/css.png";
let TypeScriptImg = "/assets/images/typescript.png";
let errorImg = "/assets/images/error.png";

const Projects = (props) => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/vinybergamo/repos")
      .then((response) => setRepositories(response.data));
  }, []);
  if (repositories.length > 0) {
    return (
      <>
        <C.Main>
          <C.Title>{props.title}</C.Title>
          <C.Content>
            <C.UL>
              {repositories.map((repository, key) => {
                return (
                  <li key={key}>
                    <C.Card>
                      <p>{props.language}</p>
                      <C.Image
                        className="img"
                        src={`${
                          repository.language === "JavaScript"
                            ? `${jsImg}`
                            : repository.language === "HTML"
                            ? `${htmlImg}`
                            : repository.language === "CSS"
                            ? `${cssImg}`
                            : repository.language === "TypeScript"
                            ? `${TypeScriptImg}`
                            : `${errorImg}`
                        }`}
                        layout="responsive"
                      />
                      <p>{repository.name}</p>
                      <C.Buttons>
                        <C.Button1
                          href={`${repository.html_url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Github
                        </C.Button1>{" "}
                        <C.Button2
                          href={`${
                            repository.homepage
                              ? `https://${repository.homepage}`
                              : repository.html_url
                          }`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Preview
                        </C.Button2>
                      </C.Buttons>
                    </C.Card>
                  </li>
                );
              })}
            </C.UL>
          </C.Content>
        </C.Main>
      </>
    );
  }
  return (
    <C.Main>
      <C.Title>{props.title}</C.Title>
      <Loading />
    </C.Main>
  );
};

export default Projects;
