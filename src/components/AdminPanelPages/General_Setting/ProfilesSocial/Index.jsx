import React from 'react'
import Input from "@mui/joy/Input";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import InputField from "../../../inputs/InputField/index"
import { colors, theme } from "../../../../constants/theme";

const styleLabel = {
  fontFamily: "satoshi",
  fontSize: 16,
  fontWeight: 700,
  color: "#383A42",
};
const styleInput = {
  color: "#B6BAC3",
  fontSize: 16,
  fontFamily: "Satoshi ",
  fontWeight: "500",
};

function ProfilesSocial() {
  return (
    <>
      <div className="flex gap-4 w-full">
        <div className="flex w-full flex-col">
          <InputField label={"Facebook"} sx={{}} name={"facebook"} placeholder={"placeholder"} />
        </div>
        <div className="flex w-full flex-col">

          <InputField label={"Facebook"} name={"facebook"} placeholder={"placeholder"} />
        </div>
        <div className="flex w-full  flex-col">

          <InputField label={"Facebook"} name={"facebook"} placeholder={"placeholder"} />
        </div>
        {/* <FormHelperText>This is a helper text.</FormHelperText> */}

      </div >
      <div className="flex justify-center items-center pt-8 ">
        <button className="px-3 rounded-lg" style={{ background: 'linear-gradient(71deg, #FF9F0A 0%, #FF375F 100%)', fontFamily: 'satoshi', color: 'white' }}>Save</button>
      </div>
    </>)
}

export default ProfilesSocial
