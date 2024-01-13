import React from 'react'
import Input from "@mui/joy/Input";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
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
     <div className="grid grid-cols-12 gap-4">
        <FormControl className="col-span-4 ">
          <FormLabel style={styleLabel}>Facebook</FormLabel>
          <Input size="lg" style={styleInput} placeholder="Placeholder Text" />
          {/* <FormHelperText>This is a helper text.</FormHelperText> */}
        </FormControl>
        <FormControl className="col-span-4 ">
          <FormLabel style={styleLabel}>Twitter</FormLabel>
          <Input size="lg" style={styleInput} placeholder="Placeholder" />
        </FormControl>
        <FormControl className="col-span-4 ">
          <FormLabel style={styleLabel}>Instagram</FormLabel>
          <Input size="lg" style={styleInput} placeholder="Placeholder" />
          {/* <FormHelperText>This is a helper text.</FormHelperText> */}
        </FormControl>
      
      </div> 
      <div className="flex justify-center items-center pt-8 ">
            <button className="px-3 rounded-lg" style={{background:'linear-gradient(71deg, #FF9F0A 0%, #FF375F 100%)',fontFamily:'satoshi',color:'white'}}>Save</button>
        </div>
    </>  )
}

export default ProfilesSocial
