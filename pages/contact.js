import Button from "@/components/Button";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Head from "next/head";

const Map = () => {
  return (
    <div className=" w-full aspect-[2.87/2] ">
      {" "}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.379637265108!2d-93.0405052!3d35.022231399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cd033e2e18d009%3A0x8aec7c69eeb77a85!2s3587%20AR-10%2C%20Casa%2C%20AR%2072025%2C%20USA!5e0!3m2!1sen!2sbd!4v1656510254047!5m2!1sen!2sbd"
        style={{ border: 0, width: "100%", height: "100%" }}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

const Screen = () => {
  return (
    <>
      <Head>
        <title>CITY OF CASA || Contact Us</title>
        <meta name="description" content="Contact us page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Heading>Contact Us</Heading>
        <div className=" grid grid-cols-12 gap-8 items-center mt-32 mb-60 ">
          <div className="col-span-6">
            <div className="mb-20">
              <p className=" mb-3 uppercase font-roboto text-2xl font-medium text-casa-blue ">
                Phone
              </p>
              <p className=" font-bold text-3xl ">(501) 233-6210</p>
            </div>
            <div className="">
              <p className=" mb-6 uppercase font-roboto text-2xl font-medium text-casa-blue ">
                We are here to assist you
              </p>
              <h2 className="  font-bold text-6xl mb-7 ">
                Requests and Complaints
              </h2>
              <p className=" text-xl font-roboto font-medium mb-6 ">
                If you have a request or complaint about the city, please use
                the link below and it will be submitted to the Mayor, Council,
                and the Clerk.
              </p>
            </div>
            <Button link="#" className=" block max-w-fit  bg-casa-blue   ">
              {" "}
              Online Request Form
            </Button>
          </div>
          <div className="col-span-6">
            <div className="px-10 pt-10 pb-14 bg-casa-blue rounded-md ml-44 ">
              <div className=" text-white ">
                <div>
                  <p className="mb-3 uppercase font-roboto text-2xl font-medium ">
                    Address
                  </p>
                  <p className="font-bold text-3xl mb-3 ">City Hall</p>
                  <p className="font-bold text-3xl mb-12 ">
                    3587 AR-10, Casa, AR 72025
                  </p>
                </div>
                <Map />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Screen;
