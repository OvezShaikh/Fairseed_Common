import React, { useRef } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import PrimaryButton from "../../inputs/PrimaryButton";
import SuccessButton from "../../inputs/SuccessButton/Index";
import { ImageCropper } from "../../inputs/Cropper/ImageCropper";
import { ImagePreviewDialog } from "../../inputs/PreviewImage/PreviewImage";
import { useState } from "react";
import DropZone from "../../inputs/dragAndDrop/index";
import Modal from "../../inputs/Modal/Index";

function ImageBackgroundWithDeleteButton({
  imgUrl,
  onDelete,
  setDataUrl,
  setImagePreview,
}) {
  console.log(imgUrl, "imgUrl in CauseEditApproval");
  // const [srcImg, setSrcImg] = useState("");
  // const [openCrop, setOpenCrop] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => {
    setOpenModal(false);
  };
  // const imgRef = useRef(null);
  const backgroundStyle = {
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    borderRadius: "12px",
    border: "2px dashed blue",
    display: "flex",
    justifyContent: "end",
  };

  return (
    <div
      className="max-w-[500px] w-full  min-h-[333px]"
      style={backgroundStyle}
    >
      {imgUrl ? (
        <>
          <PrimaryButton
            sx={{
              width: "80px",
              height: "30px",
              margin: "5px",
              color: "white",
              backgroundColor: "red",
              opacity: 0.7,
            }}
          >
            <h1 className="flex items-center" onClick={onDelete}>
              <RiDeleteBin6Line className="mr-1" />
              Delete
            </h1>
          </PrimaryButton>
        </>
      ) : (
        <>
          <div
            className="flex flex-col text-center items-center justify-center"
            onClick={() => setOpenModal(true)}
          >
            <h1 className=" text-[20px] font-bold font-[satoshi]">
              Click to select image
            </h1>
            <p className="text-[#00000066] text-[16px] font-normal   font-[satoshi] w-[70%]">
              The Image must be less than 5 MB. Recommended size is 850x550.
              Minimum height is 550 and minimum width is 850.{" "}
            </p>
          </div>
        </>
      )}
      {openModal && (
        <Modal
          closeModal={closeModal}
          setImagePreview={setImagePreview}
          setDataUrl={setDataUrl}
        />
      )}
    </div>
  );
}

export default ImageBackgroundWithDeleteButton;
