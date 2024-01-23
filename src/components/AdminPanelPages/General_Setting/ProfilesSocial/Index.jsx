import React from 'react'
import Input from "@mui/joy/Input";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import InputField from "../../../inputs/InputField/index"
import { colors, theme } from "../../../../constants/theme";
import { padding } from '@mui/system';
import PrimaryButton from '../../../inputs/PrimaryButton';
import InputAdminField from '../../../inputs/InputAdminField/Index'
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
    <div className='flex flex-col flex-wrap justify-center items-center'>

      <div className="flex  gap-4 w-full mb-24">
        <div className="flex w-full flex-col">
          <InputAdminField label={"Facebook"} name={"facebook"} placeholder={"Placeholder text"} />
        </div>
        <div className="flex w-full flex-col">

          <InputAdminField label={"Twitter"} name={"facebook"} placeholder={"Placeholder text"} />
        </div>
        <div className="flex w-full  flex-col">

          <InputAdminField label={"Instagram"} name={"facebook"} placeholder={"Placeholder text"} />
        </div>
        {/* <FormHelperText>This is a helper text.</FormHelperText> */}

      </div >
      <PrimaryButton >
        <h1 className='text-white font-semibold font-[satoshi]'>Save</h1>
      </PrimaryButton>
    </div>)
}

export default ProfilesSocial
