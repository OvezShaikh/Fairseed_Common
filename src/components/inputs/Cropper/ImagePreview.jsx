import React from "react";
import { Dialog } from "../../layout/dialogBox";
import PrimaryButton from "../PrimaryButton";

const ImagePreviewDialog = ({ dataUrl, setOpenCrop }) => {
  return (
    <Dialog maxWidth='sm' title={"Preview Image"} onClose={() => setOpenCrop(false)}>
      {() => (
        <>
          {/* eslint-disable-next-line */}
          <img src={dataUrl} width={150} height={50} alt='' />
          <PrimaryButton
            className={`mt-4 capitalize xl:text-sm 2xl:text-semi-base`}
            variant={"contained"}
            onClick={() => setOpenCrop(false)}
          >
            Close
          </PrimaryButton>
        </>
      )}
    </Dialog>
  );
};

export default ImagePreviewDialog;
