import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import images from "../../../constants/images";
// import img from " /profile.jpg";
const Avatar = ({img}) => {
  const [dialogs, setdialogs] = useState(false);
  return(
  <div>
    <div className="profile_img text-center p-4">
      <div className="div">
        <img
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "58%",
            objectFit: "cover",
            margin:'auto'
          }}
          src={img}
          alt=""
        />
        {/* <Button onClick={() => setdialogs(true)}>dialog</Button> */}
        <Dialog
          visible={dialogs}
          header={() => (
            <p htmlFor="" className="text-2x1 bg-green-300 font-semibold textColor">
              Update Profile
            </p>
          )}
          onHide={() => setdialogs(false)}
        >
          <div className="confirmation-content flex flex-column align-items-center">
            <div className=" flex-flex-column align-items-center mt-5- -w-12">
              <div className="flex justify-content-around w-12-mt-4.">
                <Button label="Save" icon="pi pi-check" />
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  </div>
  );
};

export default Avatar

