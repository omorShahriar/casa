import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import Logo from "/public/logo.png";
const Nav = () => {
  return (
    <header className=" font-poppins ">
      <Container>
        <div className="  flex justify-between items-center ">
          <Link href="/">
            <a>
              {" "}
              <div className=" w-40 h-40 ">
                <Image
                  alt="logo"
                  src={Logo}
                  layout="responsive"
                  width={284}
                  height={284}
                  placeholder="blur"
                />
              </div>
            </a>
          </Link>

          <div>
            <nav>
              <ul className=" font-bold text-casa-blue text-xl flex gap-x-8 ">
                <li>
                  {" "}
                  <Link href="/about">
                    <a>About</a>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/news-and-events">
                    <a>News & Events</a>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/town-council">
                    <a>Town Council</a>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/departments">
                    <a>Departments</a>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/senior-center">
                    <a>Senior Center</a>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>{" "}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Nav;
