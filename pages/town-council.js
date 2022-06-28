import Button from "@/components/Button";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Image from "next/image";
import React from "react";

const electedOfficials = [
  {
    name: "Loyra Rainey",
    designation: "Mayor",
    image: "/official-1.jpg",
  },
  {
    name: "Michelle Donnelly",
    designation: "City Clerk/Recorder",
    image: "/official-1.jpg",
  },
  {
    name: "Carol Lay",
    designation: "Council Member",
    image: "/official-1.jpg",
  },
  {
    name: "James Porter",
    designation: "Council Member",
    image: "/official-2.jpg",
  },
  {
    name: "Joletta Porter",
    designation: "Council Member",
    image: "/official-1.jpg",
  },
  {
    name: "Stanley Wagner",
    designation: "Council Member",
    image: "/official-2.jpg",
  },
  {
    name: "Calvin “Clinton” Brixey",
    designation: "Council Member",
    image: "/official-2.jpg",
  },
];

const Officials = ({
  image = "/official-1.jpg",
  name = "Unknown",
  designation = "Unknown",
}) => {
  return (
    <div className=" flex items-center gap-x-6 text-white ">
      <div className=" rounded-lg overflow-hidden  shadow-md w-40 h-40  ">
        <Image
          alt="officials' image"
          src={image}
          objectFit="cover"
          objectPosition="center"
          width={260}
          height={260}
        />
      </div>
      <div className=" flex flex-col gap-y-2 ">
        <p className=" font-bold text-3xl underline">{name}</p>
        <p className=" font-medium text-3xl">{designation}</p>
      </div>
    </div>
  );
};

const Screen = () => {
  return (
    <>
      <Container>
        <Heading>Town Council</Heading>
        <div className="  grid grid-cols-12 gap-16 mt-32 items-center mb-36 ">
          <div className=" col-span-6 ">
            <div className=" relative py-20 ">
              <div className="w-[90%] shadow-md rounded-r-xl overflow-hidden ml-20  ">
                <Image
                  alt=" town council hero"
                  src="/tc-h.png"
                  width={686}
                  height={463}
                  layout="responsive"
                />
              </div>
              <div className=" absolute w-4/5 rounded-lg h-full shadow-lg bg-casa-blue top-0 left-0 -z-10 " />
            </div>
          </div>
          <div className=" col-span-6 pl-20 ">
            <h2 className="  font-bold text-6xl leading-normal ">
              The City of Casa is managed by an elected town council form of
              governance with the Mayor elected as the City Manager.
            </h2>
          </div>
        </div>
        <div>
          <div className="">
            <p className=" font-roboto text-2xl font-medium text-casa-blue text-center uppercase mb-8 ">
              Additional Information
            </p>
            <h2 className=" text-center text-6xl font-bold mb-16 ">Meetings</h2>
            <div className=" font-roboto font-medium text-xl text-center flex flex-col gap-y-8 mb-28 max-w-3xl  mx-auto ">
              <p className="    ">
                The City’s Town Council Meetings are held on
              </p>
              <p className="  ">
                the{" "}
                <span className=" text-casa-blue font-bold text-2xl ">
                  first Tuesday of each month
                </span>{" "}
                at{" "}
                <span className=" text-casa-blue font-bold text-2xl ">
                  6:00 pm in the Community Center{" "}
                </span>
                .
              </p>
              <p className="">All are welcome to attend.</p>
              <p className="underline">
                If you have items that need to be addressed to the Council,
                please notify the City Clerk at least 24 hours prior to the
                meeting date so your concern may be added to the Council Agenda.
              </p>
            </div>
          </div>

          <div className=" max-w-3xl  mx-auto">
            <p className=" font-roboto text-2xl font-medium text-casa-blue text-center uppercase mb-8">
              We are here to assist you
            </p>
            <h2 className="text-center text-6xl font-bold mb-16">
              Requests and Complaints
            </h2>
            <p className=" text-center text-xl font-roboto mb-8">
              If you have a request or complaint that the city needs to be made
              aware of, please use the link below and it will be submitted to
              the Mayor, Council, and Clerk.
            </p>
            <Button
              link="#"
              className=" block max-w-fit mx-auto bg-casa-blue mt-8 mb-48 "
            >
              Online Request Form
            </Button>
          </div>
        </div>
      </Container>
      <div className=" bg-casa-blue py-20 ">
        <Container>
          <h2 className="text-center text-white text-6xl font-bold mb-20">
            Elected Officials
          </h2>

          <div className=" grid grid-cols-12 gap-x-4 gap-y-32 mb-32">
            {electedOfficials.map(({ image, name, designation }, i) => {
              return i == 0 ? (
                <div className=" col-start-4 col-span-6 justify-self-center ">
                  <Officials
                    image={image}
                    name={name}
                    designation={designation}
                  />
                </div>
              ) : (
                <div className=" col-span-4 ">
                  <Officials
                    image={image}
                    name={name}
                    designation={designation}
                  />
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Screen;
