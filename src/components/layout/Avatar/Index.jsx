import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import DropZone from "../../inputs/Cropper/CropDrop";
import {ImageCropper} from '../../inputs/Cropper/ImageCropper'
import ImagePreviewDialog from '../../inputs/Cropper/ImagePreview'

// import img from " /profile.jpg";
const Profile_Avatar = ({ img }) => {
  const [srcImg, setSrcImg] = useState("");
  const [openCrop, setOpenCrop] = useState(false);

  
  const onChange = (e) => {
    let files;

    if (e) {
        files = e;
    }
    const reader = new FileReader();
    reader.onload = () => {
        setSrcImg(reader.result);
    };
    reader.readAsDataURL(files[0]);

    setOpenCrop(true);
};

  return (
    <div>
      <div className="profile_img text-center p-4">
        <div className="div">
          <DropZone
            name="campaign_image"
            onChange={onChange}
            initialPreview={srcImg}
          />

          {openCrop && (
            <>
              <ImageCropper
                srcImg={srcImg}
                setOpenCrop={setOpenCrop}
                setsrcImg={setSrcImg}
              />
            </>
          )}
          {srcImg && <ImagePreviewDialog croppedImage={srcImg} />}
        </div>
      </div>
    </div>
  );
};

export default Profile_Avatar

