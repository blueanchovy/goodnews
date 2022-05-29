import React, { useEffect, useState } from "react";
import NewsItem from "./Newsitem";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const { ref, inView } = useInView({ threshold: 0.05 });
  const animation = useAnimation();
  const base_url = "http://api.mediastack.com/v1/news";
  const api_key = "278d212e5cbe143d5ab68343539eeadb";

  const updateNews = async () => {
    const url = `${base_url}?access_key=${api_key}&countries=in&languages=en`;
    let newData = await fetch(url);
    let parsedData = await newData.json();
    console.log("parsedData.json:", parsedData.data);
    setArticles(parsedData.data);
    console.log("articles", articles);
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log("inview", inView);
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "-100vw",
      });
    }
  }, [inView]);

  return (
    <div>
      <h1 className="text-center text-6xl mt-28 mb-10 font-bold">Headlines</h1>

      <div className="container" ref={ref}>
        <div className="grid grid-cols-3 gap-10 p-5">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={
                    element.description ? element.description.slice(0, 100) : ""
                  }
                  imageUrl={element.image}
                  newsUrl={element.url}
                  author={element.author}
                  source={element.source}
                  animation={animation}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default News;
