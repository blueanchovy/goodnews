import React from "react";
import { motion } from "framer-motion";
import { phone, phoneWrapper } from "../variants";

const PhoneContainer = () => {
  return (
    <motion.div
      variants={phoneWrapper}
      initial="initial"
      animate="animate"
      className="phoneWrapper"
    >
      <motion.img
        variants={phone}
        src="./images/main.svg"
        alt=""
        className="phone"
      />
    </motion.div>
  );
};

export default PhoneContainer;
