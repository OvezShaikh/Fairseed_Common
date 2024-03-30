import { useRef, useState } from "react";
import { LuPencil } from "react-icons/lu";
import Modal from "./Modal";
import { useFormikContext } from "formik";

const Profile = ({ name , value  , setSrcImg ,srcImg }) => {
  const { setFieldValue , values } = useFormikContext();
  const [avatarFile , setAvatarFile] = useState(srcImg);
  const [modalOpen, setModalOpen] = useState(false);
 

  const updateAvatar = (file) => {
    let cropped_file =  base64toFile(file , name )
    console.log(file ,"file")
    setSrcImg(cropped_file);
    setFieldValue(name, cropped_file); 
  };

  const base64toFile = (dataurl, name) => {
    if (typeof name !== "null"){
    const arr = dataurl.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    const fileName = name
    ? value
    :  "example.png";
    return new File([u8arr], fileName, { type: mime });
  }
  };


  return (
    <div className="flex flex-col items-center pt-12">
      <div className="relative">
        <img
          src={srcImg}
          alt="Avatar"
          className="w-[150px] h-[150px] rounded-full border-2 border-gray-400"
        />
        <button
          type="button"
          className="absolute -bottom-3 left-0 right-0 m-auto w-fit p-[.35rem] rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-600"
          title="Change photo"
          onClick={() => setModalOpen(true)}
        >
          <LuPencil />
        </button>
      </div>
      {modalOpen && (
        <Modal
          updateAvatar={updateAvatar}
          closeModal={() => setModalOpen(false)}
          name={name}
        />
      )}
    </div>
  );
};

export default Profile;
