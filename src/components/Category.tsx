import React from "react";
import { motion } from "framer-motion";
import { categoryWrapper } from "../variants";
import { category } from "../variants";

const Category = ({ classname, imageUrl, animationSpeed }) => {
  return (
    <motion.div variants={categoryWrapper} className={classname}>
      <motion.img
        variants={category}
        custom={animationSpeed}
        className="category"
        src={imageUrl}
        alt=""
      />
    </motion.div>
  );
};

export default Category;
