import React, { useEffect, useState } from "react";
// import InfiniteScroll from "../node_modules/react-infinite-scroll-component/dist/index";
import NewsItem from "./Newsitem";
// import Spinner from "./Spinner";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   const [page, setPage] = useState(1);
  //   const [totalResults, setTotalResults] = useState(0);
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

  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "90px" }}
      ></h1>

      <div className="container">
        <div className="grid grid-cols-3 gap-10">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.image}
                  newsUrl={element.url}
                  author={element.author}
                  source={element.source}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* </InfiniteScroll> */}
    </>
  );
};

export default News;
