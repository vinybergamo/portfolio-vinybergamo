import Header from "../../components/header";
import Projects from "../../components/projects";
import Footer from "../../components/footer";
import TopTop from "../../components/toTop";

export default function Home() {
  return (
    <>
      <Header
        logo="../../assets/images/logo.png"
        about="About me"
        projects="Projects"
        contact="Contact me"
        lang="PT-BR"
        logoLink="/"
        aboutLink="/#about"
        projectsLink="#"
        contactLink="/#contact"
        langLink="/pt-br/projetos"
        langImg="../../assets/images/brazil-flag.png"
      />
      <Projects title="My Projects" language="Most used language" />
      <TopTop />
      <Footer link="/" rights="All rights reserved" />
    </>
  );
}
