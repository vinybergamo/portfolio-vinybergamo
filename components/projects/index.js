import { useEffect, useState } from "react";
import * as C from "./styles.js";

let jsImg = "/assets/images/js.png";
let htmlImg = "/assets/images/html.png";
let cssImg = "/assets/images/css.png";
let errorImg = "/assets/images/error.png";

const Projects = (props) => {
  const [repositories, setRepositories] = useState([
    {
      name: "Carregando...",
      description: "...",
      html_url: "#",
      language: "HTML",
    },
  ]);

  useEffect(() => {
    fetch("https://api.github.com/users/vinybergamo/repos").then((response) =>
      response.json().then((data) => setRepositories(data))
    );
  }, []);

  return (
    <>
      <C.Main>
        <C.Title>{props.title}</C.Title>
        <C.Content>
          <C.UL>
            {repositories.map((repository) => {
              return (
                <li key={repository.id}>
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
};

export default Projects;
