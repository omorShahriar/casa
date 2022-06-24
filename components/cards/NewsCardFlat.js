import Image from "next/image";
import Button from "../Button";
import { BsClock, BsArrowRight } from "react-icons/bs";
const NewsCardFlat = ({
  date,
  title,
  excerpt = null,
  readTime,
  link,
  image,
  tag,
}) => {
  return (
    <div className=" grid grid-cols-12    ">
      <div className=" col-span-6 bg-casa-blue text-white shadow-md rounded-l-2xl ">
        <div className=" py-10 px-14   ">
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
          <div className=" flex justify-between ">
            <div className=" flex items-center gap-2 ">
              <span>
                <BsClock size={24} className="text-white" />
              </span>
              <p>{readTime}</p>
            </div>
            <Button
              noBg
              link={link}
              rightIcon={
                <BsArrowRight size={32} className="text-xl font-bold" />
              }
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
      <div className=" col-span-6 ">
        <div className=" w-full h-full shadow-md rounded-r-2xl  overflow-hidden ">
          <Image
            src={image}
            alt="news image"
            objectFit="cover"
            width={604}
            height={374}
            layout="responsive"
            objectPosition="center"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsCardFlat;
