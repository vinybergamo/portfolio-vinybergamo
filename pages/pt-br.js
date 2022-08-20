import Header from "../components/header";
import Main from "../components/main";
import About from "../components/about";
import Circles from "../components/about/circles";
import Ido from "../components/i-do";
import Skills from "../components/skilss";
import Form from "../components/form";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Header
        logo="Vinny"
        about="Sobre mim"
        services="Serviços"
        contact="Contato"
        lang="EN-US"
        logoLink="#"
        aboutLink="#about"
        contactLink="#contact"
        langLink="/"
      />
      <Main hi="Olá, Me chamo" subtitle="Desenvolvedor Fullstack" />
      <About title="Sobre mim" />
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
      <Footer link="#" rights="Todos os direitos reservados" />
    </>
  );
}
