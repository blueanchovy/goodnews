import React from "react";
import Image from "../node_modules/next/image";
import loading from "./loading/loading.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <Image className="my-3" src={loading} alt="loading" />
    </div>
  );
};

export default Spinner;
