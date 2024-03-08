import React from "react";
import Navbar from "../../../components/layout/Navbar";
import Navigation from "../../../components/layout/Navigation/Index";
import Footer from "../../../../src/components/layout/Footer";

function KnowingFairseed({ title, img, content, navbr, footer }) {
  const imageStyle = {
    borderRadius: "2%",
  };
  return (
    <div className="flex flex-col justify-center items-center">
      {navbr && <Navbar />}
      <div className="w-full pb-10">
        <Navigation label={title} heading={title} />
      </div>

      <div className="max-w:[1920px] max-desktop:w-[635px] max-tablet:w-[342px]">
        <img style={imageStyle} src={img} alt="img"></img>
      </div>

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
