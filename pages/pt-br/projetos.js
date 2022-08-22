import Header from "../../components/header";
import Projects from "../../components/projects";
import Footer from "../../components/footer";
import TopTop from "../../components/toTop";

export default function Home() {
  return (
    <>
      <Header
        logo="../../assets/images/logo.png"
        about="Sobre mim"
        projects="Projetos"
        contact="Contato"
        lang="EN-US"
        logoLink="/pt-br"
        aboutLink="/pt-br#about"
        projectsLink="#"
        contactLink="/pt-br#contact"
        langLink="/en-us/projects"
        langImg="../../assets/images/usa-flag.png"
      />
      <Projects title="Meus Projetos" language="Linguagem mais usada" />
      <TopTop />
      <Footer link="/pt-br" rights="Todos os direitos reservados" />
    </>
  );
}
