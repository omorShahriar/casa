import Image from "next/image";
import { BsClock, BsArrowRight } from "react-icons/bs";
import Button from "../Button";

const NewsCard = ({
  date,
  title,
  excerpt = null,
  readTime,
  link,
  image,
  tag,
}) => {
  return (
    <div className="relative h-full">
      <div className=" mx-4 rounded-xl bg-casa-blue px-10 py-8 text-white h-full ">
        <div className=" flex justify-between font-roboto font-medium text-xl mb-6 ">
          <div className=" py-3 px-6 text-casa-blue rounded-lg bg-white ">
            {" "}
            {tag}
          </div>
          <p>{date}</p>
        </div>
        <h3 className=" font-bold text-3xl ">{title}</h3>
        {excerpt && (
          <p className=" font-roboto text-xl font-medium ">{excerpt}</p>
        )}
        <div className="flex justify-between">
          <div className=" flex items-center gap-2 ">
            <span>
              <BsClock size={24} className="text-white" />
            </span>
            <p>{readTime}</p>
          </div>
          <Button
            noBg
            link={link}
            rightIcon={<BsArrowRight size={32} className="text-xl font-bold" />}
          >
            Read More
          </Button>
        </div>
      </div>
      <div className="absolute -z-10 -bottom-3/4 left-0 shadow-md w-full ">
        <Image
          alt="new image"
          src={image}
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
          width={522}
          height={324}
        />
      </div>
    </div>
  );
};

export default NewsCard;
