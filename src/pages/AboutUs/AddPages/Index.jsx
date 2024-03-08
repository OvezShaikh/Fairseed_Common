import React from "react";
import Navbar from "../../../components/layout/Navbar";
import Navigation from "../../../components/layout/Navigation/Index";
import Footer from "../../../../src/components/layout/Footer";

function KnowingFairseed({ title, content, navbar, footer }) {
  //   const imageStyle = {
  //     borderRadius: "2%",
  //   };
  return (
    <div className="flex flex-col justify-center items-center">
      {navbar && <Navbar />}
      <div className="w-full pb-10">
        <Navigation label={title} heading={title} />
      </div>

      {/* <div>
        <img
          className="max-w-[550px] w-full max-h-[400px] h-full"
          style={imageStyle}
          src={img}
          alt="img"
        ></img>
      </div> */}

      <div
        className="pt-[72px] flex-row text-left  max-w:[1920px] max-desktop:w-[718px] max-tablet:w-[400px] gap-[10px] px-10 max-desktop:px-2 max-tablet:px-6"
        style={{ whiteSpace: "pre-line", fontFamily: "satoshi" }}
      >
        {content}
      </div>
      {footer && <Footer />}
    </div>
  );
}

export default KnowingFairseed;
