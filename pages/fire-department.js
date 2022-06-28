import Heading from "@/components/Heading";
import Container from "@/components/Container";
import Image from "next/image";

const Screen = () => {
  return (
    <>
      <Container>
        <Heading>Fire Department</Heading>
        <div className=" grid grid-cols-12 gap-8 mt-32  ">
          <div className=" col-span-6">
            <div className="py-20">
              <div className="mb-16">
                <p className=" uppercase text-2xl font-medium font-roboto text-casa-blue mb-8 ">
                  Address
                </p>
                <p className="font-bold text-3xl">
                  3589 Arkansas 10, Casa, Arkansas, 72025
                </p>
              </div>
              <div className="mb-16">
                <p className=" uppercase text-2xl font-medium font-roboto text-casa-blue mb-8 ">
                  Phone
                </p>
                <p className="font-bold text-3xl">
                  (501) 233-6210{" "}
                  <span className=" font-medium text-xl ml-9 ">
                    (If emergency call 9-1-1)
                  </span>{" "}
                </p>
              </div>
              <div className="mb-16">
                <p className=" uppercase text-2xl font-medium font-roboto text-casa-blue mb-8 ">
                  Fire Chief
                </p>
                <p className="font-bold text-3xl">Darin Brixey</p>
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <div className=" relative py-20 ">
              <div className="w-4/5 shadow-md rounded-r-xl overflow-hidden ">
                <Image
                  alt=" fire dept hero"
                  src="/fire-dept.png"
                  width={676}
                  height={483}
                  layout="responsive"
                />
              </div>
              <div className=" absolute w-4/6 rounded-lg h-full shadow-lg bg-casa-blue top-0 right-[13%] -z-10 " />
            </div>
          </div>
        </div>
        <div className=" mt-32 flex items-center  gap-x-64 mb-52 ">
          <h2 className=" text-[55px] font-bold max-w-2xl">
            The Casa Fire Department is a volunteer department made up of the
            dedicated men and women of the community of Casa and the surrounding
            area.
          </h2>
          <div className="font-roboto font-medium  ">
            <p className=" uppercase text-casa-blue text-2xl ">
              They respond to:
            </p>
            <div className=" text-xl mt-11 ">
              <ul className="mb-11 list-disc pl-5 ">
                <li className="  ">first responder calls</li>
                <li className="  ">house fires</li>
                <li className="  ">agriculture facility fires</li>
                <li className="  ">forestry-related fires</li>
              </ul>
              <p className=" w-4/5 ">
                and work closely with the surrounding volunteer departments to
                ensure our community is safe.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <div className=" bg-casa-blue/30 pt-24 pb-36">
        <Container>
          <div className=" flex gap-x-56">
            <div>
              <h2 className=" font-bold text-6xl  ">Fire Dues</h2>
              <div className=" mt-12 flex flex-col gap-y-10 font-roboto text-xl font-medium ">
                <p>
                  Fire Dues are mailed out at the first of the year and are due
                  within 30 days of receipt.
                </p>
                <p>
                  The bottom portion of the notice will serve as your receipt
                  when you pay for dues.
                </p>
                <p>
                  If you need an official receipt from the department please
                  contact City Hall at
                </p>
                <p className=" font-bold text-2xl  ">
                  <a href="tel:(501) 233-6210">(501) 233-6210</a> M-F from
                  8:00am - 5:00pm.
                </p>
                <p>
                  If there is a discrepancy on your notice, please contact Alan
                  Faulkner:
                </p>
                <p className=" font-bold text-2xl  ">
                  <a href="mailto:alankfaulknere@gmail.com">
                    {" "}
                    alankfaulknere@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div>
              <p className=" font-roboto text-2xl font-medium uppercase mb-6 text-casa-blue ">
                Fire due
              </p>
              <h2 className=" font-bold text-6xl mb-12  ">Pricing Structure</h2>
              <div className=" mt-12 flex flex-col gap-y-10 font-roboto text-xl font-medium ">
                <p>Home - $30.00</p>
                <p>Business/Poultry House/Other - $50.00</p>
                <p>
                  If you pay your dues, this is protection for you, you will not
                  be billed for a call out to fight a fire at your home,
                  business, or farm.
                </p>
                <p>
                  The minimum bill for a fire call-out is typically $500.00, if
                  you have paid your dues, there is no cost to you.
                </p>
                <p>
                  If you have not received a dues notice, please let us know and
                  we will work to make sure you are added to the list so a
                  notice can be generated.
                </p>
                <p>
                  You may mail your dues in with the detached top part of your
                  notice or you can drop them off at City Hall M-F 8:00 am -
                  5:00 pm.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Screen;
