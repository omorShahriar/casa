import Container from "@/components/Container";
import Image from "next/image";

const about = () => {
  return (
    <>
      <Container>
        <h1 className=" font-bold text-[66px] text-center mt-16 ">About</h1>
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
    </>
  );
};

export default about;
