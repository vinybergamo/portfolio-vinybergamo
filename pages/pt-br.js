import Header from "../components/header";
import Main from "../components/main";
import About from "../components/about";
import Circles from "../components/about/circles";
import Ido from "../components/i-do";
import Skills from "../components/skilss";
import Form from "../components/form";
import TopTop from "../components/toTop";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <title>vinybergamo</title>
      <Header
        logo="./assets/images/logo.png"
        about="Sobre mim"
        projects="Projetos"
        contact="Contato"
        lang="EN-US"
        logoLink="#"
        aboutLink="#about"
        projectsLink="/pt-br/projetos"
        contactLink="#contact"
        langLink="/"
        langImg="./assets/images/usa-flag.png"
        href1="#about"
        htext1="Sobre mim"
        href2="/pt-br/projetos"
        htext2="Projetos"
        href3="#contact"
        htext3="Contato"
        href4="/"
        himg="/assets/images/usa-flag.png"
      />
      <Main hi="Olá, Me chamo" subtitle="Desenvolvedor Fullstack" />
      <About
        title="Sobre mim"
        aboutme="Nascido na cidade de Manaus e criado nos estados de São Paulo e Rio de Janeiro. Desde pequeno sempre gostei de tecnologia e sempre tentei me manter atualizado. Sou aquele tipo de pessoa que gosta de explorar ao máximo a tecnologia que tenho nas minhas mãos e sempre me perguntei como as coisas funcionam."
      />
      <Circles
        cName="Nome Completo"
        cGithub="Github"
        cPhone="Celular"
        cEmail="Endereço de email"
      />
      <Ido title="O que eu faço" />
      <Skills title="Minhas habilidades" />
      <Form
        title="Entre em contato"
        name="Nome"
        lastname="Sobrenome"
        email="Endereço de email"
        phone="Numero de celular"
        message="Mensagem"
        submit="Enviar agora"
      />
      <TopTop />
      <Footer link="#" rights="Todos os direitos reservados" />
    </>
  );
}
