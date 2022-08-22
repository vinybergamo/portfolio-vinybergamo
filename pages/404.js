import Header from "/components/header";
import NotFound from "/components/404";
import Footer from "/components/footer";

export default function Home() {
  return (
    <>
      <NotFound />
      <Footer link="/" rights="Todos os direitos reservados" />
    </>
  );
}
