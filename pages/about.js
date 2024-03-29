import Container from "@/components/Container";
import Image from "next/image";
import Head from "next/head";
import Heading from "@/components/Heading";

const about = () => {
  return (
    <>
      <Head>
        <title>CITY OF CASA || About</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Heading>About</Heading>
        <div className=" mt-56 grid grid-cols-12 gap-24 items-center mb-16 ">
          <div className=" col-span-6 ">
            <p className=" font-roboto text-2xl font-medium text-casa-blue mb-6 uppercase">
              Our history
            </p>
            <p className=" font-bold text-6xl leading-relaxed ">
              Casa may be one of the oldest settlements in Perry County,
              although it remained a small community until the arrival of the
              railroad and the discovery of coal in the area around 1900.
            </p>
          </div>
          <div className=" col-span-6 ">
            <div className=" relative pl-56 ">
              <Image
                alt="about hero image"
                src="/about-hero.jpg"
                width={1082}
                height={812}
                layout="responsive"
              />
              <div className=" absolute z-10 -top-[80%] -left-[5%] w-3/4 ">
                <Image
                  alt=" about hero up "
                  src="/about-hero-u.jpg"
                  width={1100}
                  height={792}
                />
              </div>
              <div className=" absolute z-10 -bottom-[85%] left-[5%] w-3/4 ">
                <Image
                  alt=" about hero down "
                  src="/about-hero-b.jpg"
                  width={1038}
                  height={778}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className=" bg-black  mt-72 mb-20 w-full h-80 "></div>
      <Container>
        <div className=" mt-40 ">
          <p className=" text-casa-blue uppercase text-2xl font-medium font-roboto mb-4 ">
            Sources
          </p>
          <h2 className=" ml-7 font-bold text-6xl mb-12 ">
            For Additional Information
          </h2>
          <div className="font-roboto text-xl font-medium mb-44 max-w-7xl ">
            <p className=" mb-12 ">
              “The Day the Lights Came On..” Rural Arkansas 41 (February 1987):
              12-13. Living the Times, 1776-1976: A Bicentennial Tribute to
              Perry County. Casa, AR: Perry County Extension Homemakers Council,
              1989. Perry County Historical & Genealogical Society. Perry
              County, Arkansas: Its Land & People. Marceline, MO: Walsworth
              Publishing Company, 2004. Steven Teske Butler Center for Arkansas
              Studies
            </p>
            <p className=" ">
              <a
                href="https://encyclopediaofarkansas.net/entries/casa-perry-county-7105/"
                target="_blank"
                rel="noreferrer"
              >
                https://encyclopediaofarkansas.net/entries/casa-perry-county-7105/
              </a>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default about;
