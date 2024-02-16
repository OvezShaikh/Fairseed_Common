import React from "react";
import { Dialog } from "../../layout/dialogBox";
import PrimaryButton from "../PrimaryButton";


const ImagePreviewDialog = ({ croppedImage }) => {
  return (
    <Dialog maxWidth='sm' title={"Preview Image"}>
      {() => (
        <>
          {/* eslint-disable-next-line */}
          <img src={croppedImage} width={150} height={50} alt='' />
          <PrimaryButton
            className={`mt-4 capitalize xl:text-sm 2xl:text-semi-base`}
            variant={"contained"}
          >
            View Logo
          </PrimaryButton>
        </>
      )}
    </Dialog>
  );
};

export default ImagePreviewDialog;
