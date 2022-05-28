import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variants";

const TextContainer = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="textContainer"
    >
      <motion.div className="textContainer-top">
        <motion.span variants={fadeIn()} className="text-green-600">
          Sports
        </motion.span>
        <motion.span variants={fadeIn()} className="text-yellow-600">
          Food
        </motion.span>
      </motion.div>
      <motion.div
        variants={fadeIn("up")}
        initial="initial"
        animate="animate"
        className="textContainer-middle"
      >
        <motion.span>GOOD</motion.span>
        <motion.span>NEWS</motion.span>
      </motion.div>
      <motion.div className="textContainer-bottom">
        <motion.span variants={fadeIn()} className="text-cyan-600">
          Technology
        </motion.span>
        <motion.span variants={fadeIn()} className="text-purple-600">
          Politics
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default TextContainer;
