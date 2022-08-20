import Header from "../components/header";
import Main from "../components/main";
import About from "../components/about";
import Circles from "../components/about/circles";
import Ido from "../components/i-do";
import Skills from "../components/skilss";
import Form from "../components/form";
import Footer from "../components/footer";
import TopTop from "../components/toTop";

export default function Home() {
  return (
    <>
      <Header
        logo="Vinny"
        about="About me"
        services="Services"
        contact="Contact-me"
        lang="PT-BR"
        logoLink="#"
        aboutLink="#about"
        contactLink="#contact"
        langLink="/pt-br"
      />
      <Main hi="Hi, I am" subtitle="Fullstack Developer" />
      <About title="About me" cEmail="Teste" />
      <Circles
        cName="Full Name"
        cEmail="Email Address"
        cGithub="Github"
        cPhone="Phone"
      />
      <Ido title="What i do" />
      <Skills title="My skills" />
      <Form
        title="Get in touch"
        name="Name"
        lastname="Last name"
        email="Email"
        phone="Phone Number"
        message="Message"
        submit="Submit now"
      />

      <TopTop></TopTop>
      <Footer link="#" rights="All rights reserved" />
    </>
  );
}
