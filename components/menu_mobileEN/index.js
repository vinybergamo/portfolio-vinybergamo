import { IoClose } from "react-icons/io5";
import * as C from "./styles";
import { useEffect } from "react";
import Link from "next/link";

export default function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  useEffect(
    () => {
      document.body.style.overflow = menuIsVisible ? "hidden" : "auto";
    },
    { menuIsVisible }
  );
  return (
    <C.Container isVisible={menuIsVisible}>
      <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
      <nav>
        <Link href="/#about">
          <C.Link>About me</C.Link>
        </Link>
        <Link href="/en-us/projects">
          <C.Link>Projects</C.Link>
        </Link>
        <Link href="/#contact">
          <C.Link>Contact</C.Link>
        </Link>
      </nav>
    </C.Container>
  );
}
