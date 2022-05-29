import React, { useEffect } from "react";
import NEWS from "modules/services";

const NewsArea = () => {
  const updateNews = () => {
    const data = NEWS;
  };

  useEffect(() => {
    updateNews();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="">
          {/* {articles.map((element) => {
            return ( */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2" key={element.url}>
            <NewsItem
              title={element.title ? element.title : ""}
              description={element.description ? element.description : ""}
              imageUrl={element.urlToImage}
              newsUrl={element.url}
              author={element.author}
              date={element.publishedAt}
              source={element.source.name}
            />
          </div>
          {/* );
          })} */}
        </div>
      </div>
      {/* </InfiniteScroll> */}
    </div>
  );
};

export default NewsArea;
