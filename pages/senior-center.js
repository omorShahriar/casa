import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Image from "next/image";
import Button from "@/components/Button";
const Screen = () => {
  return (
    <>
      <Container>
        <Heading>Senior Center</Heading>
        <div className=" grid grid-cols-12 gap-8 mt-6 items-center  ">
          <div className="col-span-6">
            <div className=" relative py-20 ">
              <div className="w-[90%] shadow-md rounded-r-xl overflow-hidden ml-20  ">
                <Image
                  alt=" Senior Center hero"
                  src="/senior-center-hero.jpg"
                  width={638}
                  height={391}
                  layout="responsive"
                />
              </div>
              <div className=" absolute w-4/5 rounded-lg h-full shadow-lg bg-casa-blue top-0 left-0 -z-10 " />
            </div>
          </div>
          <div className=" col-span-6">
            <div className="py-20 pl-44 ">
              <p className="mb-9  text-2xl font-medium font-roboto  ">
                The Center opened in January of 2022 and is currently open on
              </p>
              <p className="font-bold text-3xl mb-14 max-w-sm ">
                Mondays and Tuesdays from 8:00 AM - 1:00 PM
              </p>
              <p className="mb-12  text-2xl font-medium font-roboto max-w-md ">
                We do observe state and federal holidays.
              </p>
              <div className="mb-16">
                <p className=" uppercase text-2xl font-medium font-roboto text-casa-blue mb-8 ">
                  We are located at:
                </p>
                <p className="font-bold text-3xl">114 South Maple Street</p>
              </div>
              <div className="mb-16">
                <p className=" uppercase text-2xl font-medium font-roboto text-casa-blue mb-8 ">
                  Phone
                </p>
                <p className="font-bold text-3xl">(501) 233-6210</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-32 ">
          <h2 className=" font-bold text-6xl text-center max-w-5xl mx-auto mb-20 ">
            The City of Casa has repurposed its Community Center to serve as a
            Senior Center for the residents of Casa and the surrounding area.
          </h2>
          <p className=" font-roboto font-medium max-w-4xl mx-auto text-center text-2xl mb-40 ">
            The Center provides a safe environment for people to gather,
            socialize and enjoy the company of others from the community.
            Seniors wanting to come and enjoy fellowship, play a game of bingo,
            put a puzzle together, or just sit and enjoy some good coffee,
            please come by the center and register.
          </p>
        </div>
      </Container>
      <div className=" bg-casa-blue pt-40 pb-20 ">
        <Container>
          <div className=" grid grid-cols-12 gap-8  ">
            <div className=" col-span-6  ">
              <div className="relative ml-16">
                <div className=" shadow-md w-4/5 mt-[15%] ">
                  {" "}
                  <Image
                    alt=" senior center meals "
                    src="/sc-meals.jpg"
                    width={509}
                    height={429}
                    layout="responsive"
                  />
                </div>

                <div className=" aspect-[2/1] absolute z-10 border-[12px] border-casa-blue -top-[45%] -left-[20%] w-[90%]   ">
                  <Image
                    src="/sc-meals-u.jpg"
                    alt="senior center meals"
                    objectFit="cover"
                    objectPosition="center"
                    layout="fill"
                  />
                </div>
              </div>
            </div>
            <div className=" col-span-6 text-white ">
              <p className=" font-roboto text-2xl font-medium uppercase mb-6  ">
                MEALS
              </p>
              <h2 className=" font-bold text-6xl mb-12  ">
                Would you like to have lunch with us?{" "}
              </h2>
              <div className=" mt-12 flex flex-col gap-y-10 font-roboto text-xl font-medium ">
                <p>
                  To provide meals to participants, we have partnered with the
                  Diane Wilson Senior Activity Center in Perryville.
                </p>
                <p>
                  If you would like to come and have lunch with us,
                  <br />{" "}
                  <span className=" font-bold text-2xl ">
                    please notify the Center before 9:00 AM each day.
                  </span>
                </p>
                <p>
                  A donation of $4.00 is requested for seniors over the age of
                  60.
                </p>
                <p>
                  For people under the age of 60, a donation of $7.50 is
                  requested for the meal.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className=" max-w-3xl mt-36  mx-auto">
        <p className=" font-roboto text-2xl font-medium text-casa-blue text-center uppercase mb-8">
          Become a member
        </p>
        <h2 className="text-center text-6xl font-bold mb-16">
          Sign up to Casa Senior Center
        </h2>
        <p className=" text-center text-xl font-roboto mb-8">
          If someone wishes to sign up to be a member of the Casa Senior Center,
          please fill out the registration link below, or stop by the Center on
          the days it’s open and a volunteer will assist with the form.
        </p>
        <Button
          link="#"
          className=" block max-w-fit mx-auto bg-casa-blue mt-8 mb-48 "
        >
          Online Request Form
        </Button>
      </div>
    </>
  );
};

export default Screen;
