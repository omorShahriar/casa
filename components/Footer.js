import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo-white.png";

const Footer = () => {
  return (
    <footer className=" bg-black  ">
      <Container>
        <div className="flex px-12  items-center justify-between ">
          <div className=" w-60">
            <Image
              alt="footer logo"
              src={Logo}
              layout="responsive"
              width={453}
              height={453}
              placeholder="blur"
            />
          </div>
          <nav className="font-poppins w-2/3 py-20 font-bold text-xl text-white">
            <div className=" grid grid-cols-12 gap-x-24 font-bold  text-xl  ">
              <ul className=" col-span-4 flex flex-col gap-y-5 ">
                <li>
                  {" "}
                  <Link href="/">
                    <a>Homepage</a>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/about">
                    <a>About Casa</a>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/news">
                    <a>News & Events</a>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/town-council">
                    <a>Town Council</a>
                  </Link>{" "}
                </li>
              </ul>
              <ul className=" col-span-4 flex flex-col gap-y-5 ">
                <li>
                  {" "}
                  <Link href="/departments/fire-department">
                    <a>Fire Department</a>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/departments/water-department">
                    <a>Water Department</a>
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
                    <a>Contact Us</a>
                  </Link>{" "}
                </li>
              </ul>
              <ul className=" col-span-4 flex flex-col gap-y-5 ">
                <li>
                  {" "}
                  <Link href="/disclaimer">
                    <a>Disclaimer</a>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/privacy-policy">
                    <a>Privacy Policy</a>
                  </Link>{" "}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
