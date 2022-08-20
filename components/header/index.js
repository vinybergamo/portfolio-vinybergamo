import * as C from "./styles.js";

const Header = (props) => {
  return (
    <C.Container>
      <C.Logo href={props.logoLink}>{props.logo}</C.Logo>
      <C.Links>
        <C.Link href={props.aboutLink}>{props.about}</C.Link>
        <C.Link href="/services">{props.services}</C.Link>
        <C.Link href={props.contactLink}>{props.contact}</C.Link>
        <C.Link href={props.langLink}>
          <C.Flag src={props.langImg} />
        </C.Link>
      </C.Links>
    </C.Container>
  );
};

export default Header;
