import React from "react";
import images from "../../../constants/images";
import PrimaryButton from "../../../components/inputs/PrimaryButton";
import { Link } from "react-router-dom";
const style = {
  borderRadius: "",
  padding: "0px 84px",
  color: "white",
  fontSize: "34px",
  fontWeight: 700,
  fontFamily: "satoshi",
};
function NoCampaign() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center flex-wrap text-center">
      <img src={images.Vector} alt="" />
      <p className="text-[ var(--Neutral-Neutral-7, #717171)] w-[50%] max-tablet:w-[80%] font-[satoshi] text-[44px] font-semibold max-tablet:text-[28px]">
        Sorry! No campaigns found for this category. Please try again later.
      </p>
      <Link to="/">
        <PrimaryButton sx={style}>
          <h1 className="max-tablet:text-[28] my-2">Back</h1>{" "}
        </PrimaryButton>
      </Link>
    </div>
  );
}

export default NoCampaign;
