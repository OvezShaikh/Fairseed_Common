import { useRef, useState } from "react";
import { LuPencil } from "react-icons/lu";
import Modal from "./Modal";

const Profile = ({ name, value }) => {
  const [avatarUrl, setAvatarUrl] = useState(value);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const updateAvatar = (croppedImageUrl) => {
    setAvatarUrl(croppedImageUrl);
    closeModal(); // Close the modal after updating the avatar
  };

  return (
    <div className="flex flex-col items-center pt-12">
      <div className="relative">
        <img
          src={avatarUrl}
          alt="Avatar"
          className="w-[150px] h-[150px] rounded-full border-2 border-gray-400"
        />
        <button
          type="button"
          className="absolute -bottom-3 left-0 right-0 m-auto w-fit p-[.35rem] rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-600"
          title="Change photo"
          onClick={openModal}
        >
          <LuPencil />
        </button>
      </div>
      {modalOpen && (
        <Modal
          updateAvatar={updateAvatar}
          closeModal={closeModal}
          name={name}
        />
      )}
    </div>
  );
};

export default Profile;
