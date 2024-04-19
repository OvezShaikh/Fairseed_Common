import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { useDownloadFile } from "../../../Hooks/useDownloadFile";
import PrimaryButton from "../../inputs/PrimaryButton";
import { DeleteBox } from "../dialogBox/delete";

function YourComponent({ imageUrl, id, iconShow }) {
  const [isImageDeleted, setIsImageDeleted] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    const isSmallScreen =
      document.documentElement.classList.contains("small-screen");

    if (isSmallScreen) {
      setIsFullScreen(!isFullScreen);
    } else {
      setIsFullScreen(!isFullScreen);
    }
  };

const url =`/admin-dashboard/cause-edit/${id}`;

  const { refetch: downloadFile, isFetching: downloadingFile } = useDownloadFile(
    imageUrl,
    {
      download: true,
    },
    () => {
      console.log("File download successful");
    }
  );

  const handleDeleteSuccess = () => {
    setIsImageDeleted(true);
  };

 

  return (
    <>
      {!isImageDeleted && (
        <div
          className="w-[218px] h-[100px] bg-[#F5F8FC] flex justify-end"
          style={{
            border: "1px solid blue",
            borderRadius: "2px",
            position: "relative",
          }}
        >
          <img
            src={imageUrl}
            alt="Documents"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              cursor: "pointer",
            }}
            onClick={toggleFullScreen}
          />
          {!isFullScreen && (
            <div className="absolute right-1 top-2">
              {iconShow ? (
                ""
              ) : (
                <DeleteBox
                  url={`/admin-dashboard/documents`}
                  data={id}
                  iconDelete={true}
                  title={"document"}
                  onSuccess={handleDeleteSuccess}
                  refetchUrl={"/admin-dashboard/documents"}
                >
                  <p>Are you sure to delete this document!</p>
                  <p className="text-red-500">
                    Once you delete this document you can't undo that document!
                  </p>
                </DeleteBox>
              )}
            </div>
          )}
        </div>
      )}
      {isFullScreen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center "
          style={{ zIndex: 1234567 }}
        >
          <div className="relative">
            <img
              src={imageUrl}
              alt="Documents "
              style={{ maxWidth: "218px", maxHeight: "100px" }}
              onClick={toggleFullScreen}
            />
            <div className="absolute top-0 right-0 m-4 flex flex-col items-center">
              <RiCloseLine
                className="cursor-pointer text-white"
                style={{ fontSize: "24px" }}
                onClick={toggleFullScreen}
              />
              <PrimaryButton
                onClick={downloadFile}
                disabled={downloadingFile}
              >
                {downloadingFile ? "Downloading..." : "Download"}
              </PrimaryButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default YourComponent;
