import React, { useEffect } from "react";
import Image from "../node_modules/next/image";
import { motion } from "framer-motion";

const NewsItem = ({
  title,
  description,
  imageUrl,
  newsUrl,
  author,
  source,
  animation,
}) => {
  return (
    <motion.div className="my-3" animate={animation}>
      <div className="border-2">
        <Image
          unoptimized
          src={
            !imageUrl
              ? "https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2022/05/breaking-news-1-1652835392.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
          width="400rem"
          height="240rem"
        />
        <div className="p-5">
          <h5 className="font-bold">{title} </h5>
          <div className="flex"></div>
          <p className=" text-ellipsis overflow-hidden ...">
            {description}...
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className=" text-blue-600 font-bold py-1 px-2 rounded my-8 "
            >
              read more
            </a>
          </p>

          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Correspondent" : author}
            </small>
          </p>
          <p className="t">
            <small>From </small>
            <small className="text-muted text-red-600">
              {!source ? "Agency" : source}
            </small>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsItem;
