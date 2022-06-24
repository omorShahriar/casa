import Container from "@/components/Container";

import Head from "next/head";
import Heading from "@/components/Heading";
import NewsCardFlat from "@/components/cards/NewsCardFlat";
import Link from "next/link";

const news = [
  {
    date: "Feb. 8, 2022",
    title: "Tree Give-Away",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at purus diam.",
    readTime: "1 Min.",
    link: "/#",
    image: "/news-1.jpg",
    tag: "Arbor daytree city",
  },
  {
    date: "Feb. 3, 2022",
    title: "City Council Meeting 5-3-22",
    excerpt: "",
    readTime: "1 Min.",
    link: "/#",
    image: "/news-2.jpg",
    tag: "Council",
  },
  {
    date: "Jan. 22, 2022",
    title: "Adona Boil Order Lifted",
    excerpt: "The recent boil order for the City of Adona has been lifted.",
    readTime: "1 Min.",
    link: "/#",
    image: "/news-3.jpg",
    tag: "Boil Order Adona",
  },
  {
    date: "Dec. 3, 2021",
    title: "Fire Dues Notices Mailed.",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at purus diam.",
    readTime: "1 Min.",
    link: "/#",
    image: "/news-4.jpg",
    tag: "Fire duesfire deptnews",
  },
  {
    date: "Oct. 16, 2021",
    title: "Casa Receives Trees for Orchard",
    excerpt: "",
    readTime: "1 Min.",
    link: "/#",
    image: "/news-5.jpg",
    tag: "Trees Orchard",
  },
];

const Screen = () => {
  return (
    <>
      <Head>
        <title>CITY OF CASA || News and Events</title>
      </Head>
      <Container>
        <Heading>News and Events</Heading>
        <div className=" mx-auto w-3/4 flex flex-col gap-y-16 mt-20">
          {news.map(
            ({ date, image, link, readTime, tag, title, excerpt }, i) => {
              return (
                <NewsCardFlat
                  key={i}
                  date={date}
                  image={image}
                  link={link}
                  readTime={readTime}
                  tag={tag}
                  title={title}
                  excerpt={excerpt}
                />
              );
            }
          )}
        </div>
        <div className=" mt-32 ">
          <Link href="#">
            <a className=" text-casa-blue text-center text-2xl font-bold underline mx-auto block mb-40 ">
              See more news
            </a>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Screen;
