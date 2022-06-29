import Button from "@/components/Button";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Image from "next/image";
import Head from "next/head";

const Screen = () => {
  return (
    <>
      <Head>
        <title>CITY OF CASA || Water Department</title>
        <meta name="description" content="Water department page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Heading> Water Department </Heading>
        <div className=" mt-32 flex gap-x-32  mb-32   ">
          <div className=" grid grid-cols-12 gap-x-8 gap-y-16 py-8 flex-auto">
            <div className=" col-span-6 ">
              <p className=" uppercase text-2xl font-medium font-roboto text-casa-blue mb-8 ">
                Employees
              </p>
              <div className=" font-bold text-3xl ">
                <p>Michelle Donnelly Billy</p>
                <p>Ray Tindall</p>
                <p>Jerry Olivarez</p>
              </div>
            </div>
            <div className=" col-span-6 ">
              <p className=" uppercase text-2xl font-medium font-roboto text-casa-blue mb-8 ">
                Mail
              </p>
              <div className=" font-bold text-3xl ">
                <p>P.O. Box 6,</p>
                <p>Casa, AR 72025</p>
              </div>
            </div>
            <div className=" col-span-6 ">
              <p className=" uppercase text-2xl font-medium font-roboto text-casa-blue mb-8 ">
                Phone
              </p>
              <div className=" font-bold text-3xl ">
                <p>(501) 233-6210</p>
              </div>
            </div>
            <div className=" col-span-6 ">
              <p className=" uppercase text-2xl font-medium font-roboto text-casa-blue mb-8 ">
                Physical Address
              </p>
              <div className=" font-bold text-3xl ">
                <p>3587 Highway 10 West,</p>
                <p>Casa, AR 72025</p>
              </div>
            </div>
          </div>
          <div className=" bg-casa-blue rounded-lg p-8 flex items-center justify-center text-white text-center ">
            <div>
              <p className=" uppercase text-2xl font-medium font-roboto  mb-8 ">
                Office Hours
              </p>
              <div className=" font-bold text-3xl ">
                <p>Monday - Wednesday</p>
                <p>8:00 AM - 4:30 PM</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-12 gap-8  ">
          <div className=" col-span-6 ">
            <p className=" uppercase text-casa-blue text-2xl font-roboto font-medium mb-8 pt-6 ">
              Assistance
            </p>
            <h2 className=" font-bold text-6xl ">
              Emergency Water Assistance Fund
            </h2>
            <div className=" flex flex-col mt-14 gap-y-9 font-roboto font-medium text-2xl mb-12  ">
              <p>
                The City of Casa has passed an ordinance to provide emergency
                assistance for paying for water services on the Casa Rural Water
                System.
              </p>
              <p className="  ">
                The purpose is to assist those that have fallen on difficult
                times and while they are working to get back on their feet
                financially, to ensure that they do not lose access to water for
                basic sanitary needs.
              </p>
              <p className="  ">
                The fund has been structured in a way that residents can apply
                for emergency assistance once per calendar year without council
                approval and if a further need is requested, it must go before
                the full City Council to approve.
              </p>
              <p className="  ">
                While the need is currently not great, the need is still there
                and we’re here to help our residents.
              </p>
            </div>
            <div className=" flex gap-x-8 items-center mb-36 ">
              <Button className=" bg-casa-green ">Download Application</Button>
              <span className=" text-xl font-bold ">or</span>
              <Button className=" bg-casa-blue ">Apply Online</Button>
            </div>
          </div>
          <div className=" col-span-6  ">
            <div className="relative ml-16">
              <div className=" shadow-md w-4/5 mt-[15%] ">
                {" "}
                <Image
                  alt=" casa departments "
                  src="/casa-assistance.jpg"
                  width={423}
                  height={302}
                  layout="responsive"
                />
              </div>

              <div className=" absolute z-10 border-[12px] border-white -bottom-[75%] -right-[10%] w-[90%] h-[90%] shadow-md ">
                <Image
                  src="/casa-dept-house.jpg"
                  alt="casa dept house"
                  objectFit="cover"
                  objectPosition="center"
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Screen;
