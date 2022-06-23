import Image from "next/image";

const ServiceCard = ({ title = "", description = "", icon = "" }) => {
  return (
    <div className=" flex flex-col gap-y-10 items-center ">
      <div className=" rounded-full bg-white shadow-md max-w-fit p-4 ">
        <Image
          alt="service icon"
          width={60}
          height={60}
          className=" "
          src={icon}
        />
      </div>
      <h3 className=" text-3xl font-bold text-casa-blue">{title}</h3>
      <p className=" text-xl font-roboto font-medium text-center ">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
