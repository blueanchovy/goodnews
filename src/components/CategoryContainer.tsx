import Category from "./Category";
import { motion } from "framer-motion";
import { categoryContainer } from "../variants";

const CategoryContainer = () => {
  return (
    <motion.div
      variants={categoryContainer}
      initial="initial"
      animate="animate"
    >
      <Category
        animationSpeed={1.6}
        classname="categoryWrapper-sports"
        imageUrl="./images/sports.svg"
      />
      <Category
        animationSpeed={1.8}
        classname="categoryWrapper-food"
        imageUrl="./images/food.svg"
      />
      <Category
        animationSpeed={1.7}
        classname="categoryWrapper-pol"
        imageUrl="./images/pol.svg"
      />
      <Category
        animationSpeed={1.5}
        classname="categoryWrapper-tech"
        imageUrl="./images/tech.svg"
      />
    </motion.div>
  );
};

export default CategoryContainer;
