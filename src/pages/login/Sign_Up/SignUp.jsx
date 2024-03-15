import React, { useRef, useState } from "react";
import { Form } from "formik";
import InputField from "../../../components/inputs/InputField";
import Avatar from "@mui/material/Avatar";
import { useFormikContext } from "formik";
import PrimaryButton from "../../../components/inputs/PrimaryButton";
import { div, Container, Button } from "@mui/material";
import { toast } from "react-toastify";
import { SlPencil } from "react-icons/sl";
import Modal from "../../../components/inputs/Modal/Index";
import ImagePreviewDialog from "../../../components/inputs/Cropper/ImagePreview";

const SignUp = ({ handleNext }) => {
  const imgRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);

  const { isValid, setFieldValue, values } = useFormikContext();

  const handleNextClick = () => {
    if (isValid) {
      handleNext();
    } else {
      toast.error("Please fill all required fields.");
    }
  };

  return (
    <Form className="pt-8 px-2  ">
      <div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col justify-center items-center">
            <div>
              <Avatar
                alt="Remy Sharp"
                src={
                  values.profile_pic
                    ? URL.createObjectURL(values.profile_pic)
                    : "/static/images/avatar/1.jpg"
                }
                sx={{
                  width: "150px",
                  height: "150px",
                  position: "relative",
                  overflow: "hidden",
                  // color: "red",
                }}
              >
                <input
                  type="file"
                  hidden
                  ref={imgRef}
                  sx={{
                    padding: "16px 10px 16px var(--Spacing-20, 20px)",
                    border: "2px solid red",
                    borderRadius: "4px",
                  }}
                  name={"profile_pic"}
                  onChange={(event) =>
                    setFieldValue("profile_pic", event.target.files[0])
                  }
                />

                <div
                  style={{
                    color: "black",
                    position: "absolute",
                    bottom: "10px",
                    right: "20px",
                    zIndex: 1,
                    transform: "translate(50%, 50%)",
                  }}
                >
                  <Button
                    onClick={() => imgRef.current.click()}
                    style={{
                      // background: "white",
                      border: "none",
                      padding: "0",
                      borderRadius: "6rem",
                      transform: "translate(-35%, -40%)",
                    }}
                  >
                    <SlPencil className="w-7 h-8 text-[white] " />
                  </Button>
                </div>
              </Avatar>
            </div>
            <div className="w-full space-y-4">
              <div>
                <InputField
                  label="Name"
                  sx={{
                    padding: " 16px 10px 16px var(--Spacing-20, 20px)",
                    border: "2px solid var(--Linear-BG, #FF9F0A)",
                    borderImage: "linear-gradient(#FF9F0A, red) 20",
                    // borderWidth: '3px',

                    borderRadius: "4px",
                  }}
                  name={"username"}
                  placeholder="Enter your username"
                />
              </div>

              <div>
                <InputField
                  label="Email"
                  name={"email"}
                  sx={{
                    padding: " 16px 10px 16px var(--Spacing-20, 20px)",
                    border: "2px solid var(--Linear-BG, #FF9F0A)",
                    borderImage: "linear-gradient(#FF9F0A, red) 20",
                    // borderWidth: '3px',

                    borderRadius: "4px",
                  }}
                  placeholder="Enter your username"
                />
              </div>
              <div>
                <InputField
                  label="Mobile Number"
                  // type="number"
                  sx={{
                    padding: " 16px 10px 16px var(--Spacing-20, 20px)",
                    border: "2px solid var(--Linear-BG, #FF9F0A)",
                    borderImage: "linear-gradient(#FF9F0A, red) 20",
                    // borderWidth: '3px',

                    borderRadius: "4px",
                  }}
                  name={"mobile_number"}
                  fullWidth
                  placeholder="Enter your mobile number"
                />
              </div>
            </div>
          </div>
          <div xs={12}>
            <PrimaryButton
              disabled={!isValid}
              sx={{
                width: "100%",
                top: "2rem",
                padding: "12px 40px",
                fontSize: "22px",
                fontWeight: 900,
                fontFamily: "satoshi",
              }}
              onClick={handleNextClick}
            >
              Next
            </PrimaryButton>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default SignUp;
