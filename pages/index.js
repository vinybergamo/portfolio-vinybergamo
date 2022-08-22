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
      <title>Vinybergamo</title>
      <Header
        logoLink="/"
        logo="./assets/images/logo.png"
        about="About me"
        projects="Projects"
        contact="Contact me"
        aboutLink="#about"
        projectsLink="/en-us/projects"
        contactLink="#contact"
        langImg="/assets/images/brazil-flag.png"
        langLink="/pt-br"
        href1="#about"
        htext1="About me"
        href2="/en-us/projects"
        htext2="Projects"
        href3="#contact"
        htext3="Contact"
        href4="/pt-br"
        himg="/assets/images/brazil-flag.png"
      />
      <Main hi="Hi, I am" subtitle="Fullstack Developer" />
      <About
        title="About me"
        aboutme="Born in the city of Manaus and raised in the states of São Paulo and Rio de Janeiro. Since I was little, I've always liked technology and I've always tried to keep up to date. I'm that kind of person who likes to make the most of the technology I have in my hands and I've always wondered how things work."
      />
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
