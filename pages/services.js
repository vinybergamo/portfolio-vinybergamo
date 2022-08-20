import Header from "../components/header";
import Footer from "../components/footer";
import ComingSon from "../components/coming-son";

export default function Home() {
  return (
    <>
      <Header
        logo="Vinny"
        about="About me"
        services="Services"
        contact="Contact me"
        lang="PT-BR"
        logoLink="/"
        aboutLink="/#about"
        contactLink="/#contact"
        langLink="/pt-br"
        langImg="./assets/images/brazil-flag.png"
      />
      <ComingSon />
      <Footer link="/" rights="All rights reserved" />
    </>
  );
}
