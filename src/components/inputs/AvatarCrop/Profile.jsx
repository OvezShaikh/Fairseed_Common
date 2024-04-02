import React, { useEffect, useState } from "react";
import { LuPencil } from "react-icons/lu";
import Modal from "./Modal";
import { useFormikContext } from "formik";

const Profile = ({ name, setSrcImg, srcImg }) => {
  const { setFieldValue, values } = useFormikContext();
  const [modalOpen, setModalOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [cropper, setCropper] = useState();

  // useEffect(() => {
  //    const img = `${process.env.REACT_APP_BASE_URL}${values?.profile_pic}`
  //   setAvatarUrl(img);
  // }, [values?.profile_pic]);

  const updateAvatar = (file) => {
    const croppedFile = base64toFile(file, name);
    setSrcImg(file);
    console.log(croppedFile, "croppedFile");
    setFieldValue(name, croppedFile);
  };

  const base64toFile = (dataurl, name) => {
    if (name) {
      const arr = dataurl.split(",");
      const mime = arr[0].match(/:(.*?);/)[1];
      const bstr = atob(arr[1]);
      const n = bstr.length;
      const u8arr = new Uint8Array(n);
      for (let i = 0; i < n; i++) {
        u8arr[i] = bstr.charCodeAt(i);
      }
      return new File([u8arr], name, { type: mime });
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="relative">
        <img
          src={srcImg}
          alt="Avatar"
          className="w-[180px] h-[180px] rounded-full border-2 border-gray-400"
        />
        <button
          type="button"
          className="absolute bottom-[19px] left-[138px] right-[12px] m-auto w-fit p-[.35rem] rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-600"
          title="Change photo"
          onClick={() => setModalOpen(true)}
        >
          <LuPencil className="size-7 text-white" />
        </button>
      </div>
      {modalOpen && (
        <Modal
          updateAvatar={updateAvatar}
          closeModal={() => setModalOpen(false)}
          name={name}
          setCropper={setCropper}
        />
      )}
    </div>
  );
};

export default Profile;
