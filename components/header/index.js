import Link from "next/link.js";
import { useState } from "react";
import MenuMobile from "../menu_mobileEN/index.js";
import { GiHamburgerMenu } from "react-icons/gi";
import * as C from "./styles.js";

function Header(props) {
const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <C.Container>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
        href1={props.href1}
        htext1={props.htext1}
        href2={props.href2}
        htext2={props.htext2}
        href3={props.href3}
        htext3={props.htext3}
        href4={props.href4}
        himg={props.himg}
      />
      <Link href={props.logoLink}>
        <C.Img src={props.logo}></C.Img>
      </Link>
      <C.Links>
        <Link href={props.aboutLink}>
          <C.Link>{props.about}</C.Link>
        </Link>
        <Link href={props.projectsLink}>
          <C.Link>{props.projects}</C.Link>
        </Link>
        <Link href={props.contactLink}>
          <C.Link>{props.contact}</C.Link>
        </Link>
        <Link href={props.langLink}>
          <C.Flag src={props.langImg} />
        </Link>
      </C.Links>
      <GiHamburgerMenu onClick={() => setMenuIsVisible(true)} />
    </C.Container>
  );
}

export default Header;
